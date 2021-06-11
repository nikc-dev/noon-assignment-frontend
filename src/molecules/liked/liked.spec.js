import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from 'enzyme-to-json';
import Liked from './index';
import * as productApi from '../../core/api/products'

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

beforeEach(() => {
  productApi.getLikedProducts = jest.fn(() => Promise.resolve({data:[]}));
});

it('renders correctly', () => {
  const component = renderer.create(
    <Liked />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render liked products with api response', () => {
  productApi.getLikedProducts = jest.fn(() => Promise.resolve({data:[{ 'id': '001', 'productName': 'test', 'productDescription': 'test', 'liked': true }]}));
  const component = shallow(
    <Liked />,
  );
  expect(component.state('products')).toBeUndefined();
  expect(toJson(component)).toMatchSnapshot();
});

it('should render error with api empty response', () => {
  productApi.getLikedProducts = jest.fn(() => Promise.resolve({data:[]}));
  const component = shallow(
    <Liked />,
  );
  expect(component.state('isError')).toBeFalsy();
  expect(toJson(component)).toMatchSnapshot();
});
