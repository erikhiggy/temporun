import React from 'react';
import useAxios from 'axios-hooks';

const Connect = () => {
  const [{ data, error, loading }] = useAxios('http://localhost:8888/get-auth-url');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching auth url</p>;

  if (data) {
    window.location.href = data;
  }

  return null;
};

export default Connect;
