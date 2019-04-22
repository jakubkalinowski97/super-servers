import React from 'react';
import {App} from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('App tests', () => {
    const fetchServers = () => {}, servers = [];
    it('App contains HeaderPage, ServerFilters, ServerList', () => {
        const wrapper = shallow(<App servers={servers} fetchServers={fetchServers}/>);
        expect(wrapper.find('HeaderPage').exists()).toBe(true);
        expect(wrapper.find('ServerList').exists()).toBe(true);
    })
})