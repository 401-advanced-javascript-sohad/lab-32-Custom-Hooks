/* eslint-disable no-undefined */
/* eslint-disable no-unused-vars */
import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import ToDo from '../components/todo/todo.js';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<ToDo />', ()=>{
  it('start of our application',()=>{
    let app = shallow(<ToDo />);
    expect(app.find('button').exists()).toBeTruthy();
    expect(app.find('input').exists()).toBeTruthy();
    expect(app.find('form').exists()).toBeTruthy();

  });



  it('renders correctly', () => {
    const tree = renderer.create(<ToDo />).toJSON();
    expect(tree).toMatchSnapshot();
  });



  it('simulate click',()=>{
    let app = mount(<ToDo />);
    let button = app.find('button');
    button.simulate('click');
    expect(typeof button).toBe('object');
    expect(typeof app).toBe('object');
  });
});