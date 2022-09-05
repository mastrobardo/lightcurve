import { fetchDataByPage } from '@service/data.slice';
import { AppStore } from 'src/store';
//@ts-ignore
export const offsetMiddleware = (store: AppStore) => (next: (arg0: any) => any) => (action: { type: string; }) => {
  let result = next(action);
  if (action.type === 'data/increaseOffset') {
    //@ts-ignore
    store.dispatch(fetchDataByPage(store.getState().pageOffset));
  }
  return result;
};