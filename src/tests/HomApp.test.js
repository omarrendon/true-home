import React from 'react';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from 'pages/Home';


describe('test al componente <Home/>', () => {
  test('dbe dee mostrarse el componente Home', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper).toMatchSnapshot();
  });
});