import * as React from 'react';
import { Title } from './title';

export default {
  title: 'Title',
  component: Title,
};
/**
 * @type {import('./title').TitleProps}
 */
const mainTitleProps = {
    text: "WHAT'S HAPPENING",
    emoji: '😝',
  }

export const titleEmoji = () => <Title{...mainTitleProps} />
export const titleSimple = () => <Title text={mainTitleProps.text}/>

