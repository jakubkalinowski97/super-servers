import React from 'react';
import ReactDOM from 'react-dom';
import {ServerList} from './ServerList';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
configure({adapter: new Adapter()});

const mockStore = configureStore();
const initialState = {
    servers: [{
        id: 1,
        name: 'Test',
        status: 'ONLINE'
        }]
};
const store = mockStore(initialState);

describe('ServerList tests', () => {
    it('ServerList renders correctly', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ServerList store={store}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})