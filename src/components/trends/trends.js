import React from 'react';
import './styles.css'

class Trend extends React.Component{
    render(){
        return (
            <div className="trend-container">
                <div className="row">
                    <div className="c2">
                        <h6>{this.props.type}</h6>
                    </div>
                </div>
                <div className="row">
                    <p className="content">                
                        {this.props.information}
                    </p>
                </div>
                <div className="row">   
                    {this.props.tweets > 1000 ? <h3> {this.props.tweets / 1000 + "k Tweets"} </h3> : <h3> {this.props.tweets} </h3>}
                </div>

            </div>
        )
    }
}

export default Trend;
