import React from 'react';
import Shearch from '../sheach/shearch'
import CtrTrends from '../constructorTrends'
import './styles.css';

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <Shearch/>
            <h1>¿Què està pasando?</h1>
            <CtrTrends/>
        </div>
    )
}

export default SidebarCol;