import * as React from 'react';
import { Tag } from './tag';
import { ListTag } from './list-tag';
export default {
    title: 'Listag',
    component: ListTag,
  };
/**
 * @type {import('./list-tag').ListTagProps}
 */
const mainListTagProps = {
   tags : [{text:'uno'},{text:'dos'},{text:'tres'},{text:'cuatro'}],
    gap: '10',
  }

export const ListTagSimple = () => <ListTag {...mainListTagProps } />