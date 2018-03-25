import React from 'react';
//import ReactShallowRender from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import { wrap } from 'module';

test('should render Header correctly', () => {
    // const renderer = new ReactShallowRender();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
});
