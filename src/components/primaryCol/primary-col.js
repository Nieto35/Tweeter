import React from "react";
import Feeds from "../feed";
import "./styles.css";

class PrimaryCol extends React.Component {

  render() {
    return (
      <div className="t-col-container">

          <h3 className= "fixed-h3">Inicio</h3>

        
        <Feeds profileUrl={this.props.profileUrl}/>
      </div>
    );
  }
}

export default PrimaryCol;
