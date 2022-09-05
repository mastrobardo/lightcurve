import { DataObject, DisplayDataObject } from '@service/data.slice';
// @ts-nocheck

export const explodeObject = (object: DataObject): Array<DisplayDataObject> => Object
  .entries(object)
  .map(([key, value]) => Object.assign({ key }, value && typeof value === 'object'
    ? { value: '', children: explodeObject(value) }
    : { value, children: [] },
  ));