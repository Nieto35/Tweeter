import React from 'react';
import './styles.css';

class Shearch extends React.Component{
    render(){
        return (
            <div className="flexsearch">
                <div className="flexsearch--wrapper">
                    <div className="flexsearch--form">
                        <div className="flexsearch--input-wrapper">
                            <input className="flexsearch--input" type="search" placeholder="Buscar" value= {this.props.searchUserFn} onChange = {this.props.handleSearchFn}/>
                        </div>
                        <input className="flexsearch--submit" type="submit" value="&#10140;"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shearch;