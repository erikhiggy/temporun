import useAxios from 'axios-hooks';

const Connect = () => {
  const [{ data, error, loading }] = useAxios('http://localhost:8888/get-auth-url');

  if (!data || error || loading) {
    return null;
  }

  if (data) {
    window.location.href = data;
  }

  return null;
};

export default Connect;
