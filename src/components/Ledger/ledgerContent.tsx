import { useAppDispatch } from '@hooks/app.hook';
import { DataObject, selectRecord } from '@service/data.slice';
import { memo } from 'react';

export const LedgerContent = memo(({ id, sender, index }: DataObject) => {
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(selectRecord(id));
  };
  return (
    <div className={'ledger__content shadow-xl bg-neutral-200 rounded'} onClick={onClick}>
      <span><span className='bolder'>Index:</span><span>{index}</span></span>
      <span><span className='bolder'>USER:</span><span>{sender.username}</span></span>
      <span><span className='bolder'>ID:</span><span>{id}</span></span>
    </div>
  );
},
);