import React from 'react';
import { link } from 'react-router-dom'

export default () => {
    return (
        <div>
            I'm some other page!
            <link to="/">Go back home</link>
        </div>
    );
};