import React from 'react';
import {TrashOutline} from '@graywolfai/react-heroicons';

export default function ContextMenu(props) {
    return (
        <div className="contextual-dropdown">
            <div className="contextual-dropdown__row" onClick={() => props.removeFn(props.index)}>
                <TrashOutline />
                <span>Eliminar tweet</span>
            </div>
        </div>
    )
}