import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { handleAddPoll } from '../actions/polls';

class CreateQuestion extends React.Component{
  static propTypes = {
    authedUser: PropTypes.string.isRequired,
    handleAddPoll: PropTypes.func,
  };
  
  state = {
    optionOne: '',
    optionTwo: '',
    errorMessage: '',
  }

  handleChange = (e) => {
      const { name, value } = e.target;
      this.setState(prevState => ({
          ...prevState,
          [name]: value,
      }));
  }

    handleSubmit = (e) => {
      e.preventDefault();
      const { optionOne, optionTwo } = this.state;
      const { dispatch, authedUser } = this.props;
      
      if (optionOne === optionTwo) {
          this.setState({ errorMessage: 'Please make sure both option are different!!!!'})
      } else {
        dispatch(handleAddPoll(optionOne, optionTwo, authedUser))
        .then(() => this.props.history.push("/"));
      }
    }

    render() {
        const { optionOne, optionTwo, errorMessage } = this.state;

        return (
            <div className="card poll-item">
              <div className="title form-title">
                <h2>Create New Question</h2>
              </div>
              <div className="login-footer">
              <div className="sub-title">
                <p><em>Complete the question:</em></p>
                <h2>Would you rather...</h2>
              </div>
                <form className="newPollForm" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="optionOne"
                  value={optionOne}
                  onChange={this.handleChange}
                  required
                  placeholder="Enter Option One Text Here" />
                <h4 className="dashed-text">OR</h4>
                 <input
                  type="text"
                  name="optionTwo"
                  value={optionTwo}
                  onChange={this.handleChange}
                  required
                  placeholder="Enter Option Two Text Here" />
                <button
                    type="submit"
                    disabled={ !optionOne || !optionTwo}
                    className="login-btn">
                    Submit
                  </button>
                  <span id="err-msg">{errorMessage}</span>
                </form>
                </div>
            </div>
    ); 
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(CreateQuestion);