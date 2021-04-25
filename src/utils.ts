export default function getEnv(env: string | undefined) {
  let API_URL;
  switch (env) {
    case 'development':
      API_URL = 'http://localhost:8888';
      break;
    case 'production':
      API_URL = 'https://temporun-api.herokuapp.com';
      break;
    default:
      API_URL = 'https://temporun-api.herokuapp.com';
  }
  return API_URL;
}
