import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from 'enzyme-to-json';
import * as productApi from '../../core/api/products'
import Home from './index';



configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

beforeEach(() => {
  productApi.getAllProducts = jest.fn(() => Promise.resolve({data:[{ 'id': '001', 'productName': 'test', 'productDescription': 'test', 'liked': true }]}));
});

it('renders correctly', () => {
  const component = renderer.create(
    <Home />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});