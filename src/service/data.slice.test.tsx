import dataReducer, {
  DataObject,
  initialState,
  fetchDataByPage,
  selectRecord,
} from './data.slice';

const record: DataObject = {
  'index': 0,
  'id': '577189bc256da15e42f2d65bd630d1ab20aeeeea91daabdbca4c6c084f0919ff',
  'moduleAssetId': '2:0',
  'moduleAssetName': 'token:transfer',
  'fee': '147000',
  'height': 16922647,
  'nonce': '440',
  'block': {
    'id': '8ca660dd4917f77cb01e1c3110566d67fdb9a2a8d7d224ca41f19490c953391c',
    'height': 16922647,
    'timestamp': 1659023080,
  },
  'sender': {
    'address': 'lskbgyrx3v76jxowgkgthu9yaf3dr29wqxbtxz8yp',
    'publicKey': 'fd061b9146691f3c56504be051175d5b76d1b1d0179c5c4370e18534c5882122',
    'username': 'zero',
  },
  'signatures': [
    'dbb3188a463d9ff4a5a69360ff902be8a63e17daea307c14a8daffe968a9bff5d80573e793b6f2ee0c61529fe11c3f2798443ef863aab3f60103419522c9d60f',
  ],
  'asset': {
    'amount': '10000000000',
    'data': 'test',
    'recipient': {
      'address': 'lskcf8ucdubty62m4df9gsjhuzgnpv4dcw43b7pht',
    },
  },
  'isPending': false,
};

const initState =  { ...initialState, ...{ data: [record]}};

describe('Data slice', () => {
  test('should select the record if the record is present', () => {
    const payload = '577189bc256da15e42f2d65bd630d1ab20aeeeea91daabdbca4c6c084f0919ff';
    const action = selectRecord(payload);
    const actionNull = selectRecord(null);
    const expectedState = { ...initState, ...{selected: record}};
    const expectedNullState = { ...initState, ...{selected: null}};
    expect(dataReducer(initState, action)).toEqual(expectedState);
    expect(dataReducer(initState, actionNull)).toEqual(expectedNullState);
  });

  it('sets fetching false when fetchList is rejected', () => {
    const action = { type: fetchDataByPage.rejected.type, payload: { error: 'some error' } };
    const state = dataReducer(initialState, action);
    expect(state.statusByPage).toEqual('rejected');
  });
});