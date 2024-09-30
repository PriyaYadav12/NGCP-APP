import config from '##/config/config.js';

async function getToken(code, res) {
  const params = new URLSearchParams({
    code: code,
    client_id: config.google.client_id,
    client_secret: config.google.client_secret,
    redirect_uri: `${config.api}/api/auth/oauth/google/callback`,
    grant_type: 'authorization_code',
  });

  const response = await fetch(`${config.google.base_url}/token?${params.toString()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data.id_token;
}

async function getData(id_token) {
  const verifyResponse = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`,
  );
  const verifyData = await verifyResponse.json();
  const { name, email,picture } = verifyData;
  return {
    name,
    email,
  };
}

export { getToken, getData };
