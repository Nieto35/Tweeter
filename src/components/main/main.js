import React from 'react';
import PrimaryCol from '../primaryCol/primary-col';
import SidebarCol from '../sidebarCol/sidebar-col';
<<<<<<< HEAD
=======
import './main.css';

>>>>>>> 352349dcccdeb0b1f436ba70f5480eb942620963
const Main = (props) => {
    return (
        <div className="t-main">
            <PrimaryCol profileUrl={props.profileUrl} />
            <SidebarCol cambiarImagen={props.cambiarImagen} />
        </div>
    )
}

export default Main;