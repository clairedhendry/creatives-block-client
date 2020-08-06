import React from 'react'
import ReactDOM from 'react-dom'
import InfoSection from './InfoSection'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <InfoSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});
