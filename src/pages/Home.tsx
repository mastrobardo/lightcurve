import { Ledger } from '@components/Ledger/ledger';
import { Wrapper } from '@components/Wrapper/Wrapper';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../store';
import { DataObject, fetchDataByPage, selectAutoPlay, selectCurrentData, selectData } from '@service/data.slice';
import { useAppSelector } from '@hooks/app.hook';
import { InfoModal } from '@components/Modal/infoModal';
import { Menu } from '@components/Menu/menu';
import { Loader } from '@components/Loader/loader';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [list, setList] = useState<Array<DataObject>>([]);
  const dispatch = useAppDispatch();
  const data: any = useAppSelector(selectData);
  const selected: DataObject | null = useAppSelector(selectCurrentData);
  const autoPlay: boolean = useAppSelector(selectAutoPlay);

  useEffect(() => {
    dispatch(fetchDataByPage(1));
  }, []);

  useEffect(() => {
    setList(data);
  }, [data]);
  
  let clear: undefined | ReturnType<typeof setInterval> = undefined;
  useEffect(() => {
    if (autoPlay) {
      clear = setInterval(() =>{
        dispatch(fetchDataByPage(1));
      }, 10000);
    } 
    return () => clearInterval(clear);
  }, [autoPlay]);

  if (!(data.length)) {
    return <Loader />;
  }

  return (
    <Wrapper>
      {data &&
        <>
          <Ledger data={list} />
          <Menu />
        </>}
      {selected && <InfoModal />}
      <Link className='link rounded bg-green-400 left' to="/form">Form</Link>

    </Wrapper>
  );
};
