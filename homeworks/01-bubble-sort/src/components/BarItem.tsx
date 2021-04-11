import React, {CSSProperties, FC} from 'react';
import './BarItem.css';

type BarItemProps = {
    style: CSSProperties,
}

const BarItem:FC<BarItemProps> = ({children, style}) => {
    return (
        <div className="bar-container__item" style={style}>{children}</div>
    )
}

export default BarItem;