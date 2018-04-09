import React from 'react';

const CategoryInterview = () => {
    return(
        <div id="interview" className="collapse col-sm-12">
            <h4 className="jpn-lang font-weight-bold category-subtitle">インタビュー&amp;上達動画</h4>
            <h4 className="eng-lang font-weight-bold category-subtitle">Interview &amp; progress video</h4>
            <hr />
            <div className="container">
                <div className="row card_row">
                    <div className="col">
                        <div className="card mx-auto" style={{width:250}}>
                            <img className="card-img-top" src={require('../Images/be_lvl2.png')} alt="Card image" style={{width: 250}}></img>
                            <div className="card-body">
                                <h4 className="card-title jpn-lang">レベル 2 修了</h4>
                                <h4 className="card-title eng-lang">Level 2 completion</h4>
                                <p className="card-text jpn-lang">バージョン:</p>
                                <p className="card-text eng-lang">Version:</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                       <span className="jpn-lang">ビデオ</span>
                                       <span className="eng-lang">VIDEO</span>
                                    </button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl2-short">ショート</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl2-short">Short</a>
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl2-long">ロング</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl2-long">Long</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mx-auto" style={{width:250}}>
                            <img className="card-img-top" src={require('../Images/be_lvl3.png')} alt="Card image" style={{width: 250}}></img>
                            <div className="card-body">
                                <h4 className="card-title jpn-lang">レベル 3 修了</h4>
                                <h4 className="card-title eng-lang">Level 3 completion</h4>
                                <p className="card-text jpn-lang">バージョン:</p>
                                <p className="card-text eng-lang">Version:</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        <span className="jpn-lang">ビデオ</span>
                                        <span className="eng-lang">VIDEO</span>
                                    </button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl3-short">ショート</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl3-short">Short</a>
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl3-long">ロング</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl3-long">Long</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryInterview;