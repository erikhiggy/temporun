import React from 'react';
import './Loader.css';

type LoaderProps = {
  loading?: boolean
};

const Loader = ({ loading }: LoaderProps) => {
  if (!loading) return null;

  return (
    <div className="lds-dual-ring" />
  );
};

export default Loader;
