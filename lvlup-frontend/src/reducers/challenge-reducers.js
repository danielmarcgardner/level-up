import * as CONST from '../constants/constants';

export const addedChallenge = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.ADD_CHALLENGE_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.ADD_CHALLENGE_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_ADD_CHALLENGE:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};

export const challenges = (state = { challenges: [] }, action) => {
  switch (action.type) {
    case CONST.CHALLENGES_CAMPUS_FULFILLED:
      return Object.assign({}, state, {
        challenges: state.challenges.concat(action.payload),
        fetched: true,
      });
    case CONST.CHALLENGES_CAMPUS_REJECTED:
      return Object.assign({}, {
        error: 'Server Error - Please Try Again',
      }, state);
    case CONST.RESET_CHALLENGE_ADMIN:
      return Object.assign({}, {
        challenges: [],
        fetched: false,
      });
    default:
      return state;
  }
};

export const editedChallenge = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.EDIT_CHALLENGE_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.EDIT_CHALLENGE_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_EDIT_CHALLENGE:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};

export const inactiveChallenge = (state = {}, action) => {
  switch (action.type) {
    case CONST.INACTIVE_CHALLENGE_FULFILLED:
      return Object.assign({}, { active: 'Inactive' }, action.payload);
    case CONST.INACTIVE_CHALLENGE_REJECTED:
      return Object.assign({}, { active: 'Inactive', error: 'Server Error - Please Try Again' }, action.payload);
    default:
      return state;
  }
};

export const selectedChallenge = (state = {}, action) => {
  switch (action.type) {
    case CONST.SELECTED_CHALLENGE:
      return Object.assign({}, state, action.challenge);
    case CONST.ADMIN_SUBMISSION_FORM_FULFILLED:
      return Object.assign({}, state, action.payload);
    case CONST.ADMIN_SUBMISSION_FORM_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state, action.payload);
    default:
      return state;
  }
};

export const submissions = (state = { submissions: [] }, action) => {
  switch (action.type) {
    case CONST.SUBMISSIONS_FULFILLED:
      return Object.assign({}, state, {
        submissions: state.submissions.concat(action.payload),
      });
    case CONST.SUBMISSIONS_REJECTED:
      return Object.assign({}, { error: 'Server Error - Please Try Again' }, state);
    default:
      return state;
  }
};

export const submittedChallenge = (state = { fulfilled: false }, action) => {
  switch (action.type) {
    case CONST.CHALLENGE_SUBMISSION_FULFILLED:
      return Object.assign({}, { fulfilled: true }, action.payload);
    case CONST.CHALLENGE_SUBMISSION_REJECTED:
      return Object.assign({}, { fulfilled: false, error: 'Server Error - Please Try Again' }, action.payload);
    case CONST.RESET_CHALLENGE:
      return Object.assign({}, { fulfilled: false });
    default:
      return state;
  }
};
