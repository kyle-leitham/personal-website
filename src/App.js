import React from 'react';

import './App.scss';

import Header from './components/layout/Header/Header';
import MainContent from './components/layout/MainContent/MainContent';
import Footer from './components/layout/Footer/Footer';

function App() {
    return (
        <div class="site">
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

export default App;