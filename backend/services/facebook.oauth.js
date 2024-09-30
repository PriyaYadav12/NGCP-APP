import config from '##/config/config.js';

async function getToken(code) {
  try {
    const params = new URLSearchParams({
      client_id: config.facebook.facebook_id,
      redirect_uri: `${config.api}/api/auth/oauth/facebook/callback`,
      client_secret: config.facebook.facebook_secret,
      code,
    });
    const requestToken = await fetch(
      `${config.facebook.base_url}/v19.0/oauth/access_token?${params.toString()}`,
    );
    const token = await requestToken.json();
    return token;
  } catch (error) {
    new Error(error.message);
  }
}

async function getData(token) {
  try {
    const scope = ['email', 'name'];
    const params = new URLSearchParams({
      fields: scope.join(','),
      access_token: token,
    });
    const requestData = await fetch(`${config.facebook.base_url}/v12.0/me?${params.toString()}`);
    const userData = await requestData.json();
    return userData;
  } catch (error) {
    new Error(error.message);
  }
}

export { getToken, getData };
