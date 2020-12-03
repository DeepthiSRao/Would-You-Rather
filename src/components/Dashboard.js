import React from "react";
import { connect } from "react-redux";
import Poll from './Poll';

const Dashboard = (props) => {
  const [answered, setAnswered] = React.useState(false);
  const [list, setList] = React.useState(props.unansweredList);

  const handleClick = value => {
    setAnswered(value);
    setList(answered ? props.unansweredList : props.answeredList);
  }

  return (
    <div className="dashboard">
      <div className="dashboard-title">
        <li className={`dashboard-title-item title-left ${answered ? "" : "activated"}`} onClick={(e) =>handleClick(false)}>
            Unanswered Question
        </li>
        <li className={`dashboard-title-item ${answered ? "activated" : ""}`} onClick={e => handleClick(true)}>
          Answered Question
        </li>
      </div>
      <div className="poll-list">
        {
          list.map(poll =>
            <Poll id={poll.id} key={poll.id} answered={answered}/>
            )
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ questionList, authedUser, users }) => {
  const answeredByUser = Object.keys(users[authedUser].answers);
  const answeredList = Object.values(questionList)
                             .filter(question => answeredByUser.includes(question.id))
                             .sort((a,b)=>(b.timestamp-a.timestamp));                     
  const unansweredList = Object.values(questionList)
                               .filter(question => !answeredByUser.includes(question.id))
                               .sort((a, b) => (b.timestamp - a.timestamp));    
  
  return {
    answeredList,
    unansweredList
  } 
};

export default connect(mapStateToProps)(Dashboard);