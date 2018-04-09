import React from 'react';

const Header = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1 className="display-4 main-header jpn-lang">観る動画をお選びください</h1>
                    <h1 className="display-4 main-header eng-lang">Please choose a video to watch</h1>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Header;