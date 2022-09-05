import React from 'react';
import './error.style.scss';
//@ts-ignore
export const ErrorComponent = ({error}) => {
  return (
        <>
        <div role="alert" className="error">
            {error?.message}
        </div>
       
        </>
  );
};