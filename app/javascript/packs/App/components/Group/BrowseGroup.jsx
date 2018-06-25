import React from 'react'

import InputField from "../Common/InputField";

const BrowseGroup = (props) => (
  <div id="entry-form">
    <h2>Browse Groups</h2>
    <InputField
      type={"search"}
      htmlFor={'group'}
      placeholder={"Search groups"}
      name={"group"}
    />
    <div className="group-content">
      {
        props.allGroups.length === 0 ?
          <h3>You haven't created any group yet :(</h3> :
          props.allGroups.map(group => {
            return (
              <div className="group-list">
                <h4>#{group.name}</h4>
                <p>{group.description}</p>
              </div>
            )
          })
      }
    </div>
  </div>
)

export default BrowseGroup;
