import React, { Component } from 'react';
import { connect } from 'react-redux'

class TeacherDash extends Component {
    render() {
        console.log("props", this.props.auth)
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
      teacher: state.teacher
    }
  }

export default connect(mapStateToProps, null)(TeacherDash);

