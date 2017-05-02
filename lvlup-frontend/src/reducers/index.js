import { combineReducers } from 'redux';
import { loginInfo, studentPointsAndCampus, submissions } from './student-reducer';
import { reducer as formReducer } from 'redux-form';
import { loggedIn } from './adminLoginReducer';
import { signedUp, allCampuses, allCohorts, setCampus, setCohort } from './adminSignupReducer';
import { challengeAdded } from './addChallengeReducer.js';

const lvlupApp = combineReducers({
  loginInfo,
  studentPointsAndCampus,
  submissions,
  form: formReducer,
  loggedIn,
  signedUp,
  allCampuses,
  allCohorts,
  setCampus,
  setCohort,
  challengeAdded,
});

export default lvlupApp;
