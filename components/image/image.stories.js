import * as React from 'react';
import { Image } from './image';

export default {
  title: 'Image',
  component: Image,
}

export const simple = () => (
  <Image
    //@ts-ignore
    srcOriginal={require('/images/icons/bell.png')}
    //@ts-ignore
    srcWebp={require('/images/icons/bell.png?webp')}
    alt="bell"
    type="png"
  />
)