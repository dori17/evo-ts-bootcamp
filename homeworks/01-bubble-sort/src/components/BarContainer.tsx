import React, {FC} from 'react';
import './BarContainer.css';

type BarContainerProps = {
    status: string,
}

const BarContainer: FC<BarContainerProps> = ({children, status}) => {
    return (
        <div className='bar-container'>
            {children}
        </div>
    )
}

export default BarContainer;