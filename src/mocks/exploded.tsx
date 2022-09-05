import { DisplayDataObject } from '@service/data.slice';

export const INPUT: Object = {
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

export const OUTPUT: Array<DisplayDataObject> = [
  {
    'key': 'id',
    'value': '577189bc256da15e42f2d65bd630d1ab20aeeeea91daabdbca4c6c084f0919ff',
    'children': [],
  },
  {
    'key': 'moduleAssetId',
    'value': '2:0',
    'children': [],
  },
  {
    'key': 'moduleAssetName',
    'value': 'token:transfer',
    'children': [],
  },
  {
    'key': 'fee',
    'value': '147000',
    'children': [],
  },
  {
    'key': 'height',
    'value': 16922647,
    'children': [],
  },
  {
    'key': 'nonce',
    'value': '440',
    'children': [],
  },
  {
    'key': 'block',
    'value': '',
    'children': [
      {
        'key': 'id',
        'value': '8ca660dd4917f77cb01e1c3110566d67fdb9a2a8d7d224ca41f19490c953391c',
        'children': [],
      },
      {
        'key': 'height',
        'value': 16922647,
        'children': [],
      },
      {
        'key': 'timestamp',
        'value': 1659023080,
        'children': [],
      },
    ],
  },
  {
    'key': 'sender',
    'value': '',
    'children': [
      {
        'key': 'address',
        'value': 'lskbgyrx3v76jxowgkgthu9yaf3dr29wqxbtxz8yp',
        'children': [],
      },
      {
        'key': 'publicKey',
        'value': 'fd061b9146691f3c56504be051175d5b76d1b1d0179c5c4370e18534c5882122',
        'children': [],
      },
      {
        'key': 'username',
        'value': 'zero',
        'children': [],
      },
    ],
  },
  {
    'key': 'signatures',
    'value': '',
    'children': [
      {
        'key': '0',
        'value': 'dbb3188a463d9ff4a5a69360ff902be8a63e17daea307c14a8daffe968a9bff5d80573e793b6f2ee0c61529fe11c3f2798443ef863aab3f60103419522c9d60f',
        'children': [],
      },
    ],
  },
  {
    'key': 'asset',
    'value': '',
    'children': [
      {
        'key': 'amount',
        'value': '10000000000',
        'children': [],
      },
      {
        'key': 'data',
        'value': 'test',
        'children': [],
      },
      {
        'key': 'recipient',
        'value': '',
        'children': [
          {
            'key': 'address',
            'value': 'lskcf8ucdubty62m4df9gsjhuzgnpv4dcw43b7pht',
            'children': [],
          },
        ],
      },
    ],
  },
  {
    'key': 'isPending',
    'value': false,
    'children': [],
  },
];