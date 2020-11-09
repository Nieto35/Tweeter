import React from 'react';
import './styles.css'

class Trend extends React.Component{
    render(){
        return (
            <div className="trend-container">
                <div className="row-trend">
                    <div className="c2-trend">
                        <h6>{this.props.type}</h6>
                    </div>
                </div>
                <div className="row-trend">
                    <p className="content-trend">                
                        {this.props.information}
                    </p>
                </div>
                <div className="row-trend">   
                    {this.props.tweets > 1000 ? <h3> {this.props.tweets / 1000 + "k Tweets"} </h3> : <h3> {this.props.tweets} </h3>}
                </div>

            </div>
        )
    }
}

export default Trend;
