import React from 'react'
import ReactDOM from 'react-dom'
import NewBlockInput from './NewBlockInput'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <NewBlockInput test={true} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
