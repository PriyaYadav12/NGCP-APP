import mongoose from 'mongoose';

const Info = new mongoose.Schema(
  {
    name: {
      english: {
        type: String,
        required: true
      },
      marathi: {
        type: String,
      }
    },
    image: {
      type: String,
      required: true,
    },
    heading: {
      english: {
        type: String,
        required: true
      },
      marathi: {
        type: String,
      }
    },
    subHeading: {
      english: {
        type: String,
      },
      marathi: {
        type: String,
      }
    },
    description: {
      english: {
        type: String,
        required: true
      },
      marathi: {
        type: String,
      }
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const ecoGuideSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ['TREE', 'BIRD', 'PLAY', 'ACTIVE', 'RULE', 'TRAIL', 'EVENT'],
    },
    name: {
      english: {
        type: String,
        required: true
      },
      marathi: {
        type: String,
      }
    },
    // link of cover photo
    image: {
      type: String,
      required: true,
    },
    outerHeading: {
      english: {
        type: String,
        required: true
      },
      marathi: {
        type: String,
      }
    },
    outerSubHeading: {
      english: {
        type: String
      },
      marathi: {
        type: String,
      }
    },
    ecoInfo: [Info],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const EcoGuide = mongoose.model('EcoGuide', ecoGuideSchema);

export default EcoGuide;
