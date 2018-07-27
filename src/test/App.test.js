import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import TodoInput from "../components/TodoInput";
import TodosList from "../components/TodosList";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should have todoinput and todolist in app', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(TodoInput).length).toEqual(1);
  expect(wrapper.find(TodosList).length).toEqual(1);
});

test('check todo state type', () => {
  const wrapper = shallow(<App />);
  expect(typeof wrapper.state()).toEqual('object')
});

test('initial state will be empty', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().allTodos).toEqual([])
  expect(wrapper.state("allTodos")).toEqual([])
});

test('adds items to the list', () => {
  const wrapper = shallow(<App />);
  const todoObj = { id: "123", title: "Hello", done: false }
  const expected = [todoObj];
  wrapper.instance().StoreTodo(todoObj);
  expect(wrapper.state().allTodos).toEqual(expected);
});

test('props items in TodoInput from App', () => {
  const wrap = shallow(<App />);
  const todoInput = wrap.find("TodoInput");
  const addTask = wrap.instance().createTodoObj;
  expect(todoInput.prop("todoInputValue")).toEqual(addTask);
})

test('props items in TodoList from App and its type', () => {
  const wrap = shallow(<App />);
  const todoInput = wrap.find("TodoList");
  expect(todoInput.prop("onChecked")).toEqual(wrap.instance().handleCheckTodo);
  expect(todoInput.prop("onDelete")).toEqual(wrap.instance().handleDeleteTodo);
  expect(todoInput.prop("todoList")).toEqual(wrap.state().allTodos);
  expect(typeof wrap.instance().handleDeleteTodo).toEqual('function')
  expect(typeof wrap.instance().handleCheckTodo).toEqual('function')
  expect(typeof wrap.state().allTodos).toEqual('object')
})
