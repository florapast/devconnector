import React from "react";

export default function Spinner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-2 spinner-container">
          <i className="fas fa-spinner spinner-style"></i>
        </div>
      </div>
    </div>
  );
}
