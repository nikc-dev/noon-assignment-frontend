import React from 'react';
import { shallow,  configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from 'enzyme-to-json';
import Product from './index';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

describe ( 'Should test the product component', () =>{
  it('renders correctly', () => {
    const component = shallow(
      <Product />,
    );
    expect(toJson(component)).toMatchSnapshot();
  });

  it('should trigger the update function on click', () => {
    let updateLiked = jest.fn();
    const component = shallow(
      <Product updateLiked={updateLiked} />
    );
    component.find('#product-btn').simulate('click')
    expect(updateLiked).toHaveBeenCalled();
  });

  it('should trigger the delete function on click', () => {
    let updateLiked = jest.fn();
    const component = shallow(
      <Product updateLiked={updateLiked} liked={true} parentIsLiked={true} />
    );
    component.find('#product-btn').simulate('click')
    expect(updateLiked).toHaveBeenCalled();
  });

  it('should disable the button when liked and parent is home', () => {
    let updateLiked = jest.fn();
    const component = shallow(
      <Product updateLiked={updateLiked} liked={true} parentIsLiked={false} />
    );
    component.find('#product-btn').simulate('click')
    expect(updateLiked).toHaveBeenCalled();
  });
})
