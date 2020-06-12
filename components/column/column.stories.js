import * as React from 'react';
import { Column } from './column';

export default {
  title: 'Column',
  component: Column,
}

const Ball = () => {
  return (
    <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'green' }}></div>
  )
}

export const simple = () => (
  <div style={{ border: '1px solid white', height: 'fit-content', width: 'fit-content' }}>
    <Column gap="10">
      <Ball />
      <Ball />
    </Column>
  </div>
)