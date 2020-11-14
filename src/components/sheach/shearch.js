import React from 'react';
import './styles.css';

class Shearch extends React.Component{
    render(){
        return (
            <div class="flexsearch">
                <div class="flexsearch--wrapper">
                    <div class="flexsearch--form">
                        <div class="flexsearch--input-wrapper">
                            <input class="flexsearch--input" type="search" placeholder="Buscar" value= {this.props.searchUserFn} onChange = {this.props.handleSearchFn}/>
                        </div>
                        <input class="flexsearch--submit" type="submit" value="&#10140;"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shearch;