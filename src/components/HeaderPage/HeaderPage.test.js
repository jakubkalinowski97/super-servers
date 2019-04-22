import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderPage} from './HeaderPage';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe('Header tests', () => {
    it('HeaderPage renders correctly', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HeaderPage/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('HeaderPage contains title', () => {
        const wrapper = shallow(<HeaderPage/>);
        expect(wrapper.find('.title').text()).toBe('Recruitment task');
    })
    it('HeaderPage contains logo', () => {
        const wrapper = shallow(<HeaderPage/>);
        expect(wrapper.find('.logo').exists()).toBe(true);
    })
})