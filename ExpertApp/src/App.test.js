import React from 'react';
import App from './App';

test('renders learn react link', ()=>{
    const{getByTest} = render(<App />);
    const linkElement = getByTest(/learn react/i);
    expect(linkElement).toBeInTheDocument();
})

