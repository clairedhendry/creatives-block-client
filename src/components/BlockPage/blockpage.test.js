import React from 'react'
import ReactDOM from 'react-dom'
import BlockPage from './BlockPage'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <BlockPage test={'art'} />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});