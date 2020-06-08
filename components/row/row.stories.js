import * as React from 'react';
import { Row } from './row';

export default {
  title: 'Row',
  component: Row,
};

const Ball = () => {
  return (
    <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'green' }}></div>
  )
}

export const defaultRow = () => (
  <div style={{ width: '100px', border: '1px solid yellow' }}>
    <Row>
      <Ball />
      <Ball />
    </Row>
  </div>
)

export const gridRow = () => (
  <div style={{ width: 'fit-content', border: '1px solid yellow' }}>
    <Row
      isGrid={true}
      gap="20"
    >
      <Ball />
      <Ball />
      <Ball />
    </Row>
  </div>
)