import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import TodoInput from "../components/TodoInput";


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoInput />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('should have input box in todoinput and their props is valid', () => {
    const wrap = mount(<TodoInput />);
    expect(wrap.find('input').length).toEqual(1);
    expect(wrap.find('button').length).toEqual(1);
    expect(wrap.find("input").prop("onKeyPress")).toEqual(wrap.instance().handleSubmit);

});

test('save todo  when enter pressed', () => {
    const addTodo = jest.fn();
    const wrap = mount(<TodoInput todoInputValue={addTodo} />);
    wrap.find('input').instance().value = 'Hello';
    wrap.find('.input-box').simulate("keyPress", { key: "Enter" });
    expect(addTodo).toBeCalledWith("Hello");
});

test('save todo  when button clicked', () => {
    const addTodo = jest.fn();
    const wrapper = mount(<TodoInput todoInputValue={addTodo} />);
    wrapper.find('input').instance().value = 'Hello';
    wrapper.find('.submit-button').simulate('click');
    expect(addTodo).toBeCalledWith("Hello");
});