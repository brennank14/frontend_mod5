import React, { Component } from 'react';
import { connect } from 'react-redux'

class StudentDash extends Component {
    render() {
        console.log("props", this.props.auth.name)
        return (
            <div>
                <h1>Welcome, {this.props.auth.name}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth,
      student: state.student
    }
  }

export default connect(mapStateToProps, null)(StudentDash);