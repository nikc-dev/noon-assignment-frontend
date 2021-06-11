import React from 'react';
import renderer from 'react-test-renderer';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from 'enzyme-to-json';
import Page from './index';
configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
it('renders correctly', () => {
  const component = renderer.create(
    <Page />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correct page based on toggle value', () => {
  const component = mount(<Page />);
 
  component.find('#navbar-liked').simulate('click')
  expect(toJson(component)).toMatchSnapshot();
});