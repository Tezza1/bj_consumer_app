import React from 'react';

const Titlebar = () => {
    return(
        <div className="carousel slide titlebar-main" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="titlebar-image" src={require('../Images/tokyoskyline.jpg')} alt="Tokyo Skyline"></img>
                    <div className="carousel-caption">
                        <h1 className="jpn-lang titlebar-title-main">ベルリッツの動画</h1>
                        <h1 className="eng-lang titlebar-title-main">Berlitz Videos</h1>
                        <h2 className="jpn-lang titlebar-title-sub">動画でわかるベルリッツ</h2>
                        <h2 className="eng-lang titlebar-title-sub">To understand more about Berlitz</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Titlebar;