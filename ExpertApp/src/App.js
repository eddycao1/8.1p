import React from 'react'
import './App.css'
import CardList from './CardList'
import CardList2 from './CardList2'
import Header from './Header'
import Image from './Image'
import Tab from './Tab'
import Subscribe from './Subscribe'
import Contact from './Contact'

function App() {
    return(
    
    <div>
        <Tab />
        <Image />
        <Header text='Featured Experts' />
        <CardList/>
        <CardList2/>
        <Subscribe/>
        <Contact/>
    </div>
    );
}

export default App;