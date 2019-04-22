import React from 'react';
import ReactDOM from 'react-dom';
import {ServerListHeader} from './ServerListHeader';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


describe('ServerListHeader tests', () => {
    it('ServerListHeader renders correctly', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ServerListHeader/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})