import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { explodeObject } from '@utils/data-utils';

export const baseURL: string = 'https://testnet-service.lisk.io/api/v2/transactions?address=lskbgyrx3v76jxowgkgthu9yaf3dr29wqxbtxz8yp';

export interface Block {
  id: string;
  height: number;
  timestamp: number;
}

export interface Sender {
  address: string;
  publicKey: string;
  username: string;
}

export interface Recipient {
  address: string;
}

export interface Asset {
  amount: string;
  data: string;
  recipient: Recipient;
}

export interface DataObject {
  index: number;
  id: string;
  moduleAssetId: string;
  moduleAssetName: string;
  fee: string;
  height: number;
  nonce: string;
  block: Block;
  sender: Sender;
  signatures: string[];
  asset: Asset;
  isPending: boolean;
}

export interface DisplayDataObject {
  key: string;
  value: any;
  children: Array<DisplayDataObject>
}

export const fetchDataByPage = createAsyncThunk<DataObject[], number, {state: RootState }>(
  'data/fetchByPage',
  async (_, { rejectWithValue, getState }) => {
    const response = await fetch(`${baseURL}&offset=${getState().data.pageOffset}`);
    const data = await response.json();
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(data);
    }
    return data;
  },
);

export const initialState = {
  fetchByPage: {} as Record<string, any | undefined>,
  statusByPage: '',
  data: [] as Array<DataObject>,
  selected: null as (null | DataObject),
  pageOffset: 0,
  autoPlay: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increaseOffset: (state, action) => {
      state.pageOffset += action.payload;
    },
    setAutoLoad: (state, action) => {
      state.autoPlay = action.payload;
    },
    selectRecord: (state, action) => {
      if (!action.payload) {
        state.selected = null;
      } else {
        state.selected = state.data.find((ele: DataObject) => ele.id === action.payload) || null;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataByPage.pending, (state) => {
      state.statusByPage = 'pending';
    });
    builder.addCase(fetchDataByPage.fulfilled, (state, action) => {
      state.statusByPage = 'fulfilled';
      state.fetchByPage[action.meta.arg] = action.payload;
      //@ts-ignore
      state.data = state.data.concat(action.payload.data as DataObject[]);
    });
    builder.addCase(fetchDataByPage.rejected, (state) => {
      state.statusByPage = 'rejected';
    });
  },
});


export const { selectRecord, increaseOffset, setAutoLoad } = dataSlice.actions;
export const selectData = (state: RootState) => state.data.data;
export const selectAutoPlay = (state: RootState) => state.data.autoPlay;
export const selectCurrentData = (state: RootState) => state.data.selected;
export const selectLoadingStatus = (state: RootState) => state.data.statusByPage;
export const selectedPlainDatas = createSelector(
  selectCurrentData,
  (current) => {
    const result = current && explodeObject(current);
    return result || [];
  },
);

export default dataSlice.reducer;
