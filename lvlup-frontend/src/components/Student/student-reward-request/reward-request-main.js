import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RewardRequestForm from './reward-request-form';
import RequestCompleted from './reward-request-completed';
import InsufficientPoints from './reward-request-insufficient';
import renderIf from 'render-if';
import { rewardRequest } from '../../../actions/student-rewards-actions';
import './reward-request-style.css';

const mapStateToProps = state => ({
  requestStatus: state.requestedReward.fulfilled,
  pts: state.studentPointsAndCampus,
  reward: state.selectedReward,
});

const mapDispatchToProps = dispatch => bindActionCreators({ rewardRequest }, dispatch);

class StudentRewardRequest extends Component {
  render() {
    const isAffordable = () => this.props.reward.point_cost <= this.props.pts.currentTotal;
    const ifRequested = renderIf(this.props.requestStatus && isAffordable());
    const ifNotRequested = renderIf(!this.props.requestStatus && isAffordable());

    return (
      <div className="reward-request">
        {renderIf(!isAffordable())(
          <InsufficientPoints />,
        )}
        {ifNotRequested(
          <RewardRequestForm />,
        )}
        {ifRequested(
          <RequestCompleted />,
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentRewardRequest);
