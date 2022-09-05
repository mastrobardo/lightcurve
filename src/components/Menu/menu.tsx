import { useAppDispatch } from '@hooks/app.hook';
import { increaseOffset, setAutoLoad } from '@service/data.slice';
import { useState } from 'react';
import './menu.style.scss';

export const Menu = () => {
  
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const handleLoadMore = () => {
    dispatch(increaseOffset(1));
  };

  const handleAutoPlay = () => {
    setAutoPlay(!autoPlay);
    dispatch(setAutoLoad(autoPlay));
  };

  return (
        <div className="menu">
            <button className="loadmore rounded bg-red-400" onClick={handleLoadMore}>Load 10 more</button>
            <button className="autoplay rounded bg-red-400" onClick={handleAutoPlay}>{`${autoPlay ? 'Start' : 'Stop'}`} autoload</button>  ,
        </div>
  );
};