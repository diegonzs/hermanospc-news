import * as React from 'react';
import { Reactions } from './reactions';

export default {
    title: 'Reactions',
    component: Reactions
};
  

export const reactionsSingle = () => (
    <Reactions 
    data= '0'
    icon= '/images/example/thumbs-up.png'
    />
)
