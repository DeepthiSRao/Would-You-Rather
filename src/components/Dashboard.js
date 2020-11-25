import React from "react";
import { connect } from "react-redux";
import Poll from './Poll';

const Dashboard = ({ pollId }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-title">
        <div className="dashboard-title-item title-left">Unanswered Question</div>
        <div className="dashboard-title-item">Answered Question</div>
      </div>
      <div className="poll-list">
        {
          pollId.map(id =>
            <Poll id={id} key={id}/>
            )
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ questionList }) => ({
  pollId :  Object.keys(questionList).sort((a,b) => questionList[b].timestamp - questionList[a].timestamp)
});

export default connect(mapStateToProps)(Dashboard);
