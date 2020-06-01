import React from 'react';

type CardMediaProps = {
  // alt type for images
  alt: string,
  // className for the image container
  className?: string | undefined,
  // url of the image
  src: string
};

const CardMedia = ({ alt, className = '', src }: CardMediaProps) => {
  return (
    <div className={className}>
      <img alt={alt} src={src} height="100%" width="100%" />
    </div>
  );
};

export default CardMedia;
