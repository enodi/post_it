import React from "react"
import {connect} from "react-redux";

import BrowseGroup from "./BrowseGroup"
import Sidebar from "../Dashboard/Sidebar";
import Header from "../Common/Header";
import { retrieveGroups } from "../../actions/groupAction";

class BrowseGroupContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.retrieveGroups();
  }

  render() {
    return(
      <BrowseGroup
        allGroups = {this.props.groups}
      />
    )
  }
}

const mapStateToProps = state => ({
  groups: state.groupReducer.AllGroups
});

export default connect(mapStateToProps, { retrieveGroups })(BrowseGroupContainer);
