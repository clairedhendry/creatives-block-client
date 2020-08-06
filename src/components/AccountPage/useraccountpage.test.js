import React from 'react'
import ReactDOM from 'react-dom'
import UserAccountPage from './UserAccountPage'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <UserAccountPage test={true} />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});