import React from 'react';

import './MainContent.scss';

function MainContent() {
    return (
        <main>
            <div className="greeting">
                <p className="tag">{'<p>'}</p>
                <p className="innerText">Hello World!</p>
                <p className="tag">{'</p>'}</p>
            </div>
            <div className="name">
                <h1 className="tag">{'<h1>'}</h1>
                <h1 className="innerText">I'm </h1>
                <h1 className="innerTextBold">Kyle Leitham.</h1>
                <h1 className="tag typewriter">{'</h1>'}</h1>
            </div>
        </main>
    );
}

export default MainContent;