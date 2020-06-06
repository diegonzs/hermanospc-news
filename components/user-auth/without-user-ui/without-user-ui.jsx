import * as React from 'react';
import Link from 'next/link';
import { Row } from 'components/row';
import { Button } from 'components/button';

/**
 * This component is used to show the user the options of signin and signup
 */
export const WithoutUserUI = () => {
  return (
    <Row isGrid={true} gap="24">
      <Link href="/signin">
        <Button
          href="/signin"
          isAnchor
          text="SIGN IN"
          onClickHandler={() => { return }}
          isFilled={false}
        />
      </Link>
      <Link href="/signup">
        <Button
          href="/signup"
          isAnchor
          text="SIGN UP"
          onClickHandler={() => { return }}
        />
      </Link>
    </Row>
  )
}
