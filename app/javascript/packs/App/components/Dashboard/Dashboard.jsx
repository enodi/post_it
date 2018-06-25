import React from "react";

import Header from "../Common/Header";
import Sidebar from "./Sidebar";

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div className="container">
          <Sidebar />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Dashboard;
