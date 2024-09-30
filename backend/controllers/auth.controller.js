import * as googleOauth from '##/services/google.oauth.js';
import * as facebookOauth from '##/services/facebook.oauth.js';
import User from '##/models/user.model.js';
import { checkPassStrength, isValidEmail } from '##/utility/validate.js';
import { comparePassword, encryptPassword } from '##/config/lib/bcrypt.js';
import { signJwt } from '##/config/lib/jwt.js';
import { generateRandomString } from '##/config/lib/crypto.js';
import { MongoClient } from 'mongodb';
import AWS from 'aws-sdk';
import axios from 'axios';  // For downloading the image from the Google profile URL

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION 
});
async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Please fill all the mandatory fields',
        ok: false,
      });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Email is invalid', ok: false });
    }
    if (!checkPassStrength(password)) {
      return res.status(400).json({
        message:
          'Password should be have one uppercase letter, one number, and minimum 6 characters',
        ok: false,
      });
    }

    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return res.status(400).json({
        message: 'User already exist, Please login.',
        ok: false,
      });
    }

    const hashedPassword = await encryptPassword(password);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    return res.status(200).json({ message: 'Registration Successfull!', ok: true });
  } catch (error) {
    return res.status(500).json({ message: `Failed to Register: ${error.message}` });
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!checkPassStrength(password)) {
      return res.status(400).json({ message: 'Invalid password' });
    } else if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid Email' });
    }

    const user = await User.findOne({ email }).lean();
    if (!user) {
      return res.status(400).json({
        message: 'This email is not registered, try to signup',
      });
    }

    const isCorrectPassword = await comparePassword(password, user.password);

    const token = signJwt({ id: user._id }, '7d', 'access');

    if (user && isCorrectPassword) {
      return res.status(200).json({
        isAuthenticated: true,
        token,
      });
    }

    return res.status(400).json({
      message: 'Invalid credentials',
    });
  } catch (error) {
    return res.status(500).json({ message: `Failed to Login: ${error.message}` });
  }
};

async function handleGoogleOauth(req, res) {
  try {
    const { code } = req.query;
    const googleToken = await googleOauth.getToken(code, res);
    const { name, email,picture } = await googleOauth.getData(googleToken);
    const user = await User.findOne({ email });
    let token = signJwt({ id: user?._id }, '7d', 'access');
    const s3 = new AWS.S3();
    if (!user) {

      const newUser = new User({
        name,
        email,
        password: generateRandomString(),
      });
      const googleResult = await newUser.save();
      const idValue = googleResult._id;
      const response = await axios.get(picture, { responseType: 'arraybuffer' });
      const buffer = Buffer.from(response.data, 'binary');
      const fileName = `${name}-${idValue}.jpg`;
      const params = {
        Bucket: process.env.S3_BUCKET,  
        Key: fileName,     
        Body: buffer,                            
        ContentType: response.headers['content-type'], 
        ACL: 'public-read'  
      };
      console.log("params:",params);
      // Upload the image to S3
      const uploadResult = await s3.upload(params).promise();
      token = signJwt({ id: user._id }, '7d', 'access');
    }

    return res.send(
      `<script>window.location.replace("exp://?email=${email}&name=${name}&token=${token}")</script>`,
    );
  } catch (error) {
    return res
      .status(500)
      .send(`<script>window.location.replace("exp://?error=${error.message}")</script>`);
  }
}

async function handleFacebookOauth(req, res) {
  try {
    const { code } = req.query;
    const { access_token } = await facebookOauth.getToken(code);
    const { name, email } = await facebookOauth.getData(access_token);
    const user = await User.findOne({ email });
    let token = signJwt({ id: user?._id }, '7d', 'access');

    if (!user) {
      const newUser = new User({
        name,
        email,
        password: generateRandomString(),
      });
      await newUser.save();
      token = signJwt({ id: user._id }, '7d', 'access');
    }

    return res.send(
      `<script>window.location.replace("exp://?email=${email}&name=${name}&token=${token}")</script>`,
    );
  } catch (error) {
    return res
      .status(500)
      .send(`<script>window.location.replace("exp://?error=${error.message}")</script>`);
  }
}
async function handleNotification(req,res){
  try {
    await client.connect();
    console.log("noti:");
    const database = client.db('kalpataru');
    const notificationsCollection = database.collection('notifications');

    const notifications = await notificationsCollection.find({}).sort({ createdAt: -1 }).toArray();
    console.log("noti:",notifications);
    res.status(200).json(notifications);
  } catch (error) {
      res.status(500).json({ message: `Failed to fetch notifications: ${error.message}` });
  } finally {
      await client.close();
  }

}

export { signUp, login, handleGoogleOauth, handleFacebookOauth,handleNotification };
