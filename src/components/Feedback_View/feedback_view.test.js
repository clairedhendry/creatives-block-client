import React from 'react'
import ReactDOM from 'react-dom'
import ViewFeedback from './feedback_view'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <ViewFeedback blockFeedback={[]} category={"all"} />, div);
    ReactDOM.unmountComponentAtNode(div);
});


