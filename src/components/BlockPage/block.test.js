import React from 'react'
import ReactDOM from 'react-dom'
import Block from './Block'
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
    const key = 1;
    const id = 1;
    const url = 'https://res.cloudinary.com/creatives-block/image/upload/v1595600894/qeyryt8vnt9s4tn77hup.gif';
    const category = 'art';
    const user_name = 'Leela';
    const title = 'Running Fox';
    const description = 'test';
    const date_updated = '2020-08-05T14:56:43.878Z'

    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Block key={key}
                id={id}
                url={url}
                user_name={user_name}
                category={category}
                title={title}
                description={description}
                date_updated={date_updated} />
        </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
})

