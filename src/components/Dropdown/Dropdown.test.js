import React from 'react';
import ReactDOM from 'react-dom';
import {Dropdown} from './Dropdown';
import configureStore from 'redux-mock-store';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const server = {
        id: 1,
        name: 'Test',
        status: 'ONLINE'
    }

const mockStore = configureStore();
const initialState = {
    server: {
        id: 1,
        name: 'Test',
        status: 'ONLINE'
        }
};
const store = mockStore(initialState);


describe('Dropdown tests', () => {
    it('Dropdown renders correctly', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Dropdown server={server}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
    it('Dropdown contains dots icon', () => {
        const wrapper = shallow(<Dropdown server={server}/>);
        expect(wrapper.find('.dots').exists()).toBe(true);
    })
    it('Dropdown changes state correctly', () => {
        const wrapper = shallow(<Dropdown server={server}/>);
        expect(wrapper.find('.menu').exists()).toBe(false);
        wrapper.setState({
            showMenu: true
        });
        expect(wrapper.find('.menu').exists()).toBe(true);
    })
    it('Dropdown changes state after clicking on dots icon', () => {
        const wrapper = shallow(<Dropdown server={server}/>);
        expect(wrapper.state().showMenu).toBe(false);
        wrapper.find('.dots').simulate('click', {preventDefault(){}});
        expect(wrapper.state().showMenu).toBe(true);
    })
})