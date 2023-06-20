import React from "react";

const Alert = (props) => {
  return (
    props.alert && (
      <div style={{ height: "50px" }}>
        <div
          class={`alert alert-${props.alert.type} alert-dismissible fade show mb-3`}
          role="alert"
        >
          <strong>
            {props.alert.msg}
          </strong>
        </div>
      </div>
    )
  );
};

export default Alert;
