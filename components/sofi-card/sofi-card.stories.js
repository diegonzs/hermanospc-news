import React from 'react';
import { SofiCardView } from './sofi-card.view';

export default {
  component: SofiCardView,
  title: 'Sofi Card',
};

const sofiCardProps = {
  user: {
    username: 'Sofia'
  }
}

export const Simple = () => <SofiCardView {...sofiCardProps} />