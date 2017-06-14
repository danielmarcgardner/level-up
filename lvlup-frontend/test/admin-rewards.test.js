import AdminRewards from '../src/components/Admin/rewards/admin-rewards/rewards-main';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('AdminRewards should render', () => {
  const store = mockStore({ lvlupApp });
  const adminrewards = shallow(
    <AdminRewards store={store} />,
  );
  expect(shallowToJson(adminrewards)).toMatchSnapshot();
});
