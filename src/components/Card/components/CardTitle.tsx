import React from 'react';

type CardTitleProps = {
  children: React.ReactNode | React.ReactNodeArray,
  className?: string | undefined
};

const CardTitle = ({ children, className }: CardTitleProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default CardTitle;
