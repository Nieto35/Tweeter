import React from 'react';
import ListUsers from '../users/listUsers'
import CtrTrends from '../constructorTrends'
import './styles.css';

const SidebarCol = (props) => {
    return (
        <div className="t-sidebar-col">
            <ListUsers key="1"/>
            <h1>¿Qué está pasando?</h1>
            <CtrTrends/>
        </div>
    )
}

export default SidebarCol;