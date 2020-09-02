import React from 'react'
import ReactDOM from 'react-dom'
import NewBlockInput from './NewBlockInput'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <NewBlockInput user_name={"Leela"} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
