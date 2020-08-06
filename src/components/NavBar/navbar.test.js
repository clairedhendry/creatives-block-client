import React from 'react'
import ReactDOM from 'react-dom'
import NavBar from './NavBar'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <NavBar test={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
