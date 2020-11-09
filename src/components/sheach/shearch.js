import React from 'react';
import './styles.css';

class Shearch extends React.Component{
    render(){
        return (
            <div class="flexsearch">
                <div class="flexsearch--wrapper">
                    <form class="flexsearch--form">
                        <div class="flexsearch--input-wrapper">
                            <input class="flexsearch--input" type="search" placeholder="search"/>
                        </div>
                        <input class="flexsearch--submit" type="submit" value="&#10140;"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Shearch;