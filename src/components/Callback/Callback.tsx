import React from 'react';

type CallbackProps = {
  location?: {
    location?: {
      search?: string
    }
  },
  handleCode: (code?: string) => void
};

const Callback = ({ location, handleCode }: CallbackProps) => {
  const code = location?.location?.search?.split('?code=')[1];
  handleCode(code);
  if (code) {
    return (
      <div>
        Code:
        {code}
      </div>
    );
  } return null;
};

export default Callback;
