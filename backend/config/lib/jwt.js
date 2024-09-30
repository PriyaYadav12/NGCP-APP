import jwt from 'jsonwebtoken';

import config from '##/config/config.js';

function signJwt(payload, exp, tType) {
  let token = '';

  if (tType === 'access') {
    token = jwt.sign(payload, config.jwt_access_key, { expiresIn: exp });
  }

  if (tType === 'refresh') {
    token = jwt.sign(payload, config.jwt_public_key, { expiresIn: exp });
  }

  return token;
}

function jwtVerify(token, tType) {
  let decodedStatus = {};

  try {
    if (tType === 'access') {
      decodedStatus = jwt.verify(token, config.jwt_access_key);
    }

    if (tType === 'refresh') {
      decodedStatus = jwt.verify(token, config.jwt_public_key);
    }

    return decodedStatus;
  } catch (error) {
    throw new Error(error.message);
  }
}

export { signJwt, jwtVerify };
