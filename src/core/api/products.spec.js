import * as productApi from './products'
import * as axios from "axios";

jest.mock('axios');


  it('respong to get / api', () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: 'test' }));
    let res = productApi.getAllProducts();
    expect(res).toBeTruthy();
  });

  it('respong to get /favs api', () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: 'test' }));
    let res = productApi.getLikedProducts();
    expect(res).toBeTruthy();
  });

  it('respong to post / api', () => {
    axios.post.mockImplementation(() => ({ data: 'test' }));
    let res = productApi.updateLikedProducts();
    expect(res).toBeTruthy();
  });

  it('respong to delete /favs api', () => {
    axios.delete.mockImplementation(() => ({ }));
    let res = productApi.removeLikedProducts();
    expect(res).toEqual({});
  });