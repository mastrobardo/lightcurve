import { explodeObject } from './data-utils';
import {INPUT, OUTPUT} from './../mocks/exploded';
import { DataObject } from '@service/data.slice';

describe('explode object utility', () => {
    
  test(`it takes an object wich may have nested objects, and trasnform each property
        in an object with format {key, value, children}`, () => {
    const result = explodeObject(INPUT as DataObject);
    expect(result).toEqual(OUTPUT);
  });
});