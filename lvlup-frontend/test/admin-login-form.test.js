import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import AdminLoginForm from '../src/components/Admin/login/login';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AdminLoginForm should render', () => {
  const store = mockStore({ lvlupApp });
  const edit = shallow(
    <AdminLoginForm store={store} />,
  );
  expect(shallowToJson(edit)).toMatchSnapshot();
});
