import React from 'react'
import ReactDOM from 'react-dom'
import RecentBlocks from './RecentBlocks'
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <RecentBlocks test={true} />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});