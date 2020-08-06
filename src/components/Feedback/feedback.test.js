import React from 'react'
import ReactDOM from 'react-dom'
import Feedback from './feedback'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Feedback />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});
