import { FixedSizeList } from 'react-window';
import { LedgerContent } from './ledgerContent';
import { memo } from 'react';
import { DataObject } from '@service/data.slice';
import useWindowDimensions from '@hooks/windowSize.hook';
import './ledger.style.scss';

//@ts-ignore
const Row = memo(({ data, index, style }) => {
  const pr: DataObject = data[index];
  const props: DataObject = { ...pr, index: index + 1};
  return <div className={'ledger__row'} style={style}><LedgerContent {...props} /></div>;
},
);

export const Ledger = ({ data }: { data: DataObject[] }) => {
  const { width: w, height: h } = useWindowDimensions();
  
  return (
    <div className='ledger'>
      <h1 className='ledger__title text-3xl font-bold py-4'>Currently Loaded: {data?.length || '0'} elements</h1>
      
      {data &&
        <FixedSizeList
          className='ledger__list rounded bg-neutral-800'
          height={h / 2}
          itemCount={data.length}
          itemSize={160}
          width={w - 40}
          itemData={data}
        >
          {Row}
        </FixedSizeList>}
    </div>

  );
};