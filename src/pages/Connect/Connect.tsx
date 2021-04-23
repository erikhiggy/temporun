import useAxios from 'axios-hooks';
import { LOCAL, HOST } from '../../utils';

const Connect = () => {
  const [{ data, error, loading }] = useAxios(`${LOCAL}/get-auth-url`);

  if (!data || error || loading) {
    return null;
  }

  if (data) {
    window.location.href = data;
  }

  return null;
};

export default Connect;
