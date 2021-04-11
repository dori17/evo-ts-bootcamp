import React from 'react';
import Button from './Button';
import './Controls.css';

type ControlsProps = {
    onNewSet: () => void;
    onStart: () => void;
}

const Controls:React.FC<ControlsProps> = ({onNewSet, onStart}: ControlsProps) => {
    return (
        <div className="controls">
            <Button title="New set" onClick={onNewSet}/>
            <Button title="Start" onClick={onStart}/>
        </div>
    )
}

export default Controls;