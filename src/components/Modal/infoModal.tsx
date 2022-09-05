import { useAppDispatch, useAppSelector } from '@hooks/app.hook';
import { DisplayDataObject, selectedPlainDatas, selectRecord } from '@service/data.slice';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { ListComponent } from '@components/ListElement/listElement';
import './infoModal.style.scss';

export const InfoModal = () => {
  
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(selectRecord(null));
    setOpen(false);
  };
  const selectedData = useAppSelector(selectedPlainDatas);

  useEffect(() => {
    setOpen(!!selectedData);
  }, [selectedData]);

  if (!selectedData.length) {
    return null;
  }

  return (
    <div id="modal_overlay" className="hidden absolute inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0">
    <div className="modal relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal__wrapper">
          <button className="modal__btnclose" onClick={closeModal}>
            &times;
          </button>
          <div className='modal__content'>

            {
              selectedData && selectedData.map((ele: DisplayDataObject) => {
                return (<div className='modal__record' key={ele.key}><span className='bolder text-xxl font-big text-gray-900'>{ele.key}:</span>
                  <span className='mt-1 text-xl text-gray-500 sm:col-span-2 sm:mt-0'>{String(ele.value)}</span>
                  {ele.children.length > 0 && <ListComponent collection={ele.children} />}
                </div>);
              })
            }
          </div>
        </div>
      </Popup>
    </div>
    </div>

  );
};