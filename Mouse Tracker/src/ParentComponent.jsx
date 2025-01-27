import React, { useState } from 'react';
import MouseTracker from './MouseTracker';

const ParentComponent = () => {
    const [component, setComponent] = useState(true);

    const toggleComponent = () => {
        setComponent((prev) => !prev);
    };

    return (
        <div>
            <button onClick={toggleComponent}>
                {component ? 'Unmount Tracker' : 'Mount Tracker'}
            </button>
            {component && <MouseTracker />}
        </div>
    );
};

export default ParentComponent;
