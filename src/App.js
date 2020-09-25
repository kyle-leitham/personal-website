import React from 'react';

import './App.scss';

import Header from './components/layout/Header/Header';
import MainContent from './components/layout/MainContent/MainContent';

function App() {
    return (
        <div className="site">
            <Header/>
            <MainContent/>
        </div>
    );
}

export default App;