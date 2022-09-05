import useWindowDimensions from '@hooks/windowSize.hook';
import React from 'react';
import './Wrapper.style.scss';

type TWrapperProps = {
  children: React.ReactNode;
};
 
export const Wrapper = ({ children }: TWrapperProps) => {
  const { width, height } = useWindowDimensions();
  return (
        <div style={{width, height}} className={'wrapper'}>
            {children}
        </div>
  );
};