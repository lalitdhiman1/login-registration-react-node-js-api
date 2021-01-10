import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });
import { LoginPage } from '../LoginPage';

describe('Test case for testing login',() =>{
// let wrapper;
test('username check',()=>
{
const wrapper = shallow(<LoginPage/>);
console.log(wrapper)
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'lalitdhiman'}});
expect(wrapper.state('username')).toEqual('lalitdhiman');
})

it('password check',()=>{
const wrapper = shallow(<LoginPage/>);
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '123456'}});
expect(wrapper.state('password')).toEqual('123456');
})

it('login check with right data',()=>{
const wrapper = shallow(<LoginPage/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'lalitdhiman'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '123456'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(true);
})

it('login check with wrong data',()=>{
const wrapper = shallow(<LoginPage/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'lalitdhiman'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: '1234564'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(false);
})

})