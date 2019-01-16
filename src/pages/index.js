import React, { Component } from "react";
//import axios from "axios";
import { connect } from "react-redux";
import { Switch } from "react-router-dom";
import { routerMap } from "router";
class Content extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        333
        <Switch>{routerMap(this.props.routers)}</Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state.reducer;
};
const mapDispatchToProps = dispatch => {
  return {
    upData(payload) {
      dispatch({ type: "UPDATA", data: payload });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Content);
