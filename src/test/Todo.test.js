import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Todo from "../components/Todo"


test('renders without crashing', () => {
  const todo = { id: 1, done: false, title: "Do something" };
  const div = document.createElement('div');
  ReactDOM.render(<Todo todo={todo} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('should have check box, text, delete button link in todo', () => {
  const todo = { id: 1, done: false, title: "Do something" };
  const wrapper = shallow(<Todo todo={todo} />);
  expect(wrapper.find('input').length).toEqual(1);
  expect(wrapper.find('strong').length).toEqual(1);
  expect(wrapper.find('a').length).toEqual(1);
});

test('Checkbox calls  when todo is clicked', () => {
  const todo = { id: 1, done: false, title: "Do something" };
  const doneTodo = jest.fn();
  const wrapper = mount(<Todo todo={todo} onChecked={doneTodo} />);
  wrapper.find('.toggle-todo').simulate('click');
  expect(doneTodo).toBeCalledWith(true, 1);
});

test('delete todo  when delete button clicked', () => {
  const todo = { id: 1, done: false, title: "Do something" };
  const deleteTodo = jest.fn();
  const wrapper = mount(<Todo todo={todo} onDelete={deleteTodo} />);
  wrapper.find('.delete-todo').simulate('click');
  expect(deleteTodo).toBeCalledWith(1);
});
