import { DisplayDataObject } from '@service/data.slice';
import './listElement.style.scss';

type TListComponent = {
  collection: Array<DisplayDataObject>
};

export const ListComponent = (props: TListComponent) => {
  
  if (Array.isArray(props.collection)) {
    return <ul className={'list-component primary list-inside ml-2'}>
              {props.collection.map(({key, value, children}: DisplayDataObject, idx: number) => {
                return (
                  <li key={value + idx}>
                     <ul>
                       <li><span className='bold'>{key}</span>:&nbsp;<span>{value}</span></li>
                       {children && children.length > 0 && <li><ListComponent collection={children}/></li>}
                     </ul>
                  </li>);
              })
              }
        </ul>;
  }
  return null;
};