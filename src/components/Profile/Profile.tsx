import React from 'react';
import useAxios from 'axios-hooks';

const Profile = () => {
  const [{ data, loading, error }] = useAxios({
    url: 'http://localhost:8888/profile',
  });
  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error!</p>;

  const { display_name = '' } = data;

  return (
    <div>
      Welcome, {display_name}!
    </div>
  );
};

export default Profile;
