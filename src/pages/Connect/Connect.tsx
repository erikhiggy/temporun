import useAxios from 'axios-hooks';
import getEnv from '../../utils';

const Connect = () => {
  const HOST = getEnv(process.env.REACT_APP_NODE_ENV);
  const [{ data, error, loading }] = useAxios(`${HOST}/get-auth-url`);

  if (!data || error || loading) {
    return null;
  }

  if (data) {
    window.location.href = data;
  }

  return null;
};

export default Connect;
