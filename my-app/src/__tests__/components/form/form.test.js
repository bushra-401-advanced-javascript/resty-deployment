import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../../../components/form/form.js';

describe('<Form/>', () => {
    it('is alive at application start', () =>{
        const form = shallow(<Form />);
        expect(form.find('span').exists()).toBeTruthy();
    });

    it('properly store the users input into state', () => {
        const form = mount(<Form />);
        const input = form.find('input');
        const get = form.find('#get');
        input.simulate('change', { target: { value: 'http://eskipaper.com/outer-space-wallpaper-23.html#gal_post_56402_outer-space-wallpaper-23.jpg'} });
        get.simulate('click');
        expect(form.state('method')).toEqual('get');
        expect(form.state('url')).toEqual('http://eskipaper.com/outer-space-wallpaper-23.html#gal_post_56402_outer-space-wallpaper-23.jpg');
    });

    it('properly display the users input in the output area on form submit', () => {
        const form = mount(<Form />);
        const button = form.find('button');
        const input = form.find('input');
        const post = form.find('#post');
        input.simulate('change', { target: { value: 'http://eskipaper.com/outer-space-wallpaper-23.html#gal_post_56402_outer-space-wallpaper-23.jpg' } });
        post.simulate('click');
        button.simulate('submit');
        expect(form.find('.method').text()).toContain('post');
        expect(form.find('.url').text()).toContain('http://eskipaper.com/outer-space-wallpaper-23.html#gal_post_56402_outer-space-wallpaper-23.jpg');
    });

    it('properly clear the form/state after the form is submitted', () => {
        const form = mount(<Form />);
        const button = form.find('button');
        const input = form.find('input');
        let deleteSpan = form.find('#delete');
        input.simulate('change', { target: { value: 'http://eskipaper.com/outer-space-wallpaper-23.html#gal_post_56402_outer-space-wallpaper-23.jpg' } });
        deleteSpan.simulate('click');
        button.simulate('submit');
        expect(form.state('method')).toEqual('');
        expect(form.state('url')).toEqual('');
    });
});

describe('snapshot', () => {
    it('tree', () => {
        const tree = renderer.create(<Form />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});