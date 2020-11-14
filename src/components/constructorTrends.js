import React from "react";
import Trend from "./trends/trends";
import {trends} from '../trends';



class ConstructorTrends extends React.Component {
    constructor() {
        super();
        this.state = {
            tendencias: trends,
        }
    }
    render() {
        return (

            <div>

                {
                    this.state.tendencias.map( (tendencia, index) => {
                        return (
                            <Trend 
                                type={tendencia.type}
                                information={tendencia.information}
                                tweets={tendencia.tweets}
                                key = {index}
                                />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default ConstructorTrends;