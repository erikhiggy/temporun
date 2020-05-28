import React from 'react';

type CardProps = {
  children: React.ReactNode | React.ReactNodeArray,
  className?: string | undefined
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Card;
