import React from 'react';

type CardMediaProps = {
  alt: string,
  className?: string | undefined,
  src: string
};

const CardMedia = ({ alt, className, src }: CardMediaProps) => {
  return (
    <div className={className}>
      <img alt={alt} src={src} height="100%" width="100%" />
    </div>
  );
};

export default CardMedia;
