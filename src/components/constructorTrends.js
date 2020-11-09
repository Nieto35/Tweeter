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
                    this.state.tendencias.map( tendencia => {
                        return (
                            <Trend 
                                type={tendencia.type}
                                information={tendencia.information}
                                tweets={tendencia.tweets}
                                />
                        )
                    })
                }
                
            </div>
        );
    }
}

export default ConstructorTrends;