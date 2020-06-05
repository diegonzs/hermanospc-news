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
   tags : [{text:'AMD'},{text:'Graphic Card'}],
   gap: '20',
  }

export const ListTagDefaultGap = () => <ListTag tags={mainListTagProps.tags} />
export const ListTagCustomGap = () => <ListTag {...mainListTagProps } />