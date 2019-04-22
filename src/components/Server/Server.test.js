import React from 'react';
import ReactDOM from 'react-dom';
import { Server } from '../Server/Server';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const server = {
    id: 1,
    name: 'Test',
    status: 'ONLINE'
}

describe('Server tests', () => {
    it('Server contains dropdown', () => {
        const wrapper = shallow(<Server server={server}/>);
        expect(wrapper.find('.dropdown').exists()).toBe(true);
    })
    it('Server contains server name', () => {
        const wrapper = shallow(<Server server={server}/>);
        expect(wrapper.find('td.name').exists()).toBe(true);
    })
    it('Server contains server status', () => {
        const wrapper = shallow(<Server server={server}/>);
        expect(wrapper.find('td.status').exists()).toBe(true);
    })
})