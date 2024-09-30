import EcoGuide from '##/models/ecoGuide.model.js';

/*
 Create the eco guide infos
 outer heading name type cover image etc
*/
async function addEcoSection(req, res) {
  try {
    const { type, name, image, outerHeading, outerSubHeading } = req.body;
    if (!type || !name.english || !image || !outerHeading.english) {
      return res.status(400).json({
        message: 'All the fields are required',
      });
    }
    const createGuide = new EcoGuide({
      type,
      name: {
        english: name.english,
        marathi: name.marathi
      },
      image,
      outerHeading: {
        english: outerHeading.english,
        marathi: outerHeading.marathi
      },
      outerSubHeading: {
        english: outerSubHeading.english,
        marathi: outerSubHeading.marathi
      },
    });
    await createGuide.save();
    res.status(200).json({
      message: 'Added successfully',
    });
  } catch (error) {
    return res.status(500).json({ message: `Failed to operate: ${error.message}` });
  }
}

/*
 get the eco guide infos and everything
 outer heading name type cover image etc
*/
async function getEcoSection(req, res) {
  try {
    const { type } = req.body;
    if (!type) {
      return res.status(400).json({
        message: 'Type is required',
      });
    }
    const data = await EcoGuide.findOne({ type: type });

    res.status(200).json({
      message: 'Data retrived successfully',
      data,
    });
  } catch (error) {
    return res.status(500).json({ message: `Failed to operate: ${error.message}` });
  }
}

/*
 Update the eco section
 outer heading name type cover image etc
*/
async function updateEcoSection(req, res) {
  try {
    const { type, id, ...updateBody } = req.body;
    if (!type || !id) {
      return res.status(400).json({
        message: 'Type and infoId is required',
      });
    }

    const updatedGuide = await EcoGuide.findOneAndUpdate(
      { type: type, _id: id },
      { $set: updateBody },
      { new: true },
    ).select('-ecoInfo');
    res.status(200).json({
      message: 'Data updated successfully',
      updatedGuide,
    });
  } catch (error) {
    return res.status(500).json({ message: `Failed to operate: ${error.message}` });
  }
}

/*
 Add the eco guide info
 like trees, birds, active etc
*/
async function addEcoSectionItems(req, res) {
  try {
    const { type, ecoInfo } = req.body;
    if (!type || !ecoInfo) {
      return res.status(400).json({
        message: 'Type and infoId is required',
      });
    }
    const checkTypeExistence = await EcoGuide.findOne({ type: type });
    if(!checkTypeExistence) {
       return res.status(400).json({
        message: `Section of Type ${type} doesn't exist please first create the section`,
      });
    }
    const info = await EcoGuide.findOneAndUpdate(
      { type },
      { $push: { ecoInfo: ecoInfo } },
      { new: true },
    );
    res.status(200).json({
      message: 'Added successfully',
      info,
    });
  } catch (error) {
    return res.status(500).json({ message: `Failed to operate: ${error.message}` });
  }
}

/*
 Update the eco guide info
 like trees, birds, active etc
*/
async function updateEcoSectionItems(req, res) {
  try {
    const { type, infoId, ...updateBody } = req.body;
    if (!type || !infoId) {
      return res.status(400).json({
        message: 'Type and infoId are required',
      });
    }
    const updateObject = {};
    for (const key in updateBody) {
      if (key === 'name' || key === 'heading' || key === 'subHeading' || key === 'description') {
        updateObject[`ecoInfo.$.${key}.english`] = updateBody[key].english;
        updateObject[`ecoInfo.$.${key}.marathi`] = updateBody[key].marathi;
      } else {
        updateObject[`ecoInfo.$.${key}`] = updateBody[key];
      }
    }
    const updatedGuide = await EcoGuide.findOneAndUpdate(
      { type: type, 'ecoInfo._id': infoId },
      { $set: updateObject },
      { new: true }
    );

    if (!updatedGuide) {
      return res.status(404).json({ message: 'EcoGuide not found or item not updated' });
    }

    res.status(200).json({
      message: 'Data updated successfully',
      updatedGuide,
    });
  } catch (error) {
    return res.status(500).json({ message: `Failed to operate: ${error.message}` });
  }
}


/*
 Delete the eco guide info
 like trees, birds, active etc
*/
async function deleteEcoSectionItems(req, res) {
  try {
    const { type, infoId } = req.body;
    if (!type || !infoId) {
      return res.status(400).json({
        message: 'Type and infoId is required',
      });
    }
    const updatedGuide = await EcoGuide.findOneAndUpdate(
      { type: type, 'ecoInfo._id': infoId },
      { $pull: { ecoInfo: { _id: infoId } } },
      { new: true },
    );
    res.status(200).json({
      message: 'Data updated successfully',
      updatedGuide,
    });
  } catch (error) {
    return res.status(500).json({ message: `Failed to operate: ${error.message}` });
  }
}

export {
  addEcoSection,
  updateEcoSection,
  getEcoSection,
  addEcoSectionItems,
  updateEcoSectionItems,
  deleteEcoSectionItems,
};
