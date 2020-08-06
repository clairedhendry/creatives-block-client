import React from 'react'
import ReactDOM from 'react-dom'
import RegisterPage from './Register'
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <RegisterPage />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
