import React from 'react'
import ReactDOM from 'react-dom'
import TermsPage from './TermsPage'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <TermsPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});
