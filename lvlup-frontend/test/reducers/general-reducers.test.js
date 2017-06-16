import { allCampuses, allCohorts, recruiterDemo } from '../../src/reducers/general-reducers';
import * as CONST from '../../src/constants/constants';

describe('admin allCampuses reducer', () => {
  it('should return the initial state', () => {
    expect(allCampuses(undefined, {})).toEqual([]);
  });

  it('should return a new state with all campuses', () => {
    const prevState = [];
    const nextState = allCampuses(prevState, { type: CONST.ALL_CAMPUSES_FULFILLED, payload: { test: 2 } });
    expect(nextState).toEqual({ test: 2 });
  });
});

describe('admin allCohorts reducer', () => {
  it('should return the initial state', () => {
    expect(allCohorts(undefined, {})).toEqual([]);
  });

  it('should return a new state with all admin cohorts', () => {
    const prevState = [];
    const nextState = allCohorts(prevState, { type: CONST.ALL_COHORTS_FULFILLED, payload: { test: 3 } });
    expect(nextState).toEqual({ test: 3 });
  });
});

describe('recruiter demo reducer', () => {
  it('should return the initial state', () => {
    expect(recruiterDemo(undefined, {})).toEqual({ fulfilled: false });
  });

  it('should return a new state with all admin cohorts', () => {
    const prevState = { fulfilled: false };
    const nextState = recruiterDemo(prevState, { type: CONST.RECRUITER_FULFILLED, test: 1 });
    expect(nextState).toEqual({ fulfilled: true });
  });
});
