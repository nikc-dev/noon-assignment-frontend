import React from 'react';
import renderer from 'react-test-renderer';
import Error from './index';

it('renders correctly', () => {
  const component = renderer.create(
    <Error />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});