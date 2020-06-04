import * as React from 'react';
import { Tag } from './tag';
export default {
  title: 'Tag',
  component: Tag,
};
/**
 * @type {import('./tag').TagProps}
 */
const mainTagsProps = {
    text: "uno",
  }
export const tagSimple = () => <Tag text={mainTagsProps.text}/>