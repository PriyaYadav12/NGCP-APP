import express from 'express';
import * as auth from '##/controllers/auth.controller.js';

const authRoute = express.Router();

authRoute.route('/signup').post(auth.signUp);
authRoute.route('/login').post(auth.login);
authRoute.route('/oauth/google/callback').get(auth.handleGoogleOauth);
authRoute.route('/oauth/facebook/callback').get(auth.handleFacebookOauth);
authRoute.route('/notifications').get(auth.handleNotification);


export default authRoute;
