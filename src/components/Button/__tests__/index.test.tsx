import * as React from 'react';
import Button, { ButtonProps } from '../index';
import { render } from '@testing-library/react';

describe('Should match snapshot', () => {
  const renderComponent = (props: ButtonProps) => render(
    <Button {...props}>
      Mocked
    </Button>
  )

  describe('tiny', () => {
    const props: ButtonProps = {size: 'tiny', children: 'text'}
    const {container } = renderComponent(props);
    expect(container).toMatchSnapshot()
  })
})
