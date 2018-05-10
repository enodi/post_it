import React from "react";

import Header from "../Common/Header";
import Sidebar from "./Sidebar";

class Dashboard extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Sidebar />
      </div>
    )
  }
}

export default Dashboard;
