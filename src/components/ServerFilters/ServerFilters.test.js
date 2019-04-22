import React from 'react';
import ReactDOM from 'react-dom';
import {ServerFilters} from './ServerFilters';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe('ServerFilters tests', () => {
    it('ServerFilters renders correctly', () => {
        const noServers = [];
        const div = document.createElement('div');
        ReactDOM.render(<ServerFilters noServers={noServers}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('ServerFilters contains input', () => {
        const serversSearch = 'Test'
        const wrapper = shallow(<ServerFilters serversSearch={serversSearch}/>);
        expect(wrapper.find('input[placeholder="Search"]').prop('value')).toEqual(serversSearch);
    })
})