import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import ChallengesTable from '../src/components/Admin/challenges/admin-challenges/challenges-table';
import lvlupApp from '../src/reducers/index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('ChallengesTable should render', () => {
  const store = mockStore({ lvlupApp });
  const adminchallenges = shallow(
    <ChallengesTable challenges={{ challenges: { length: 5, challenges: ['test'] } }} renderChallenges={jest.fn} store={store} />,
  );
  expect(shallowToJson(adminchallenges)).toMatchSnapshot();
});
