import React, { Component } from 'react';
import ModalLevel from './modalLevel';

const CategoryLevel = () => {
    return(
        <div id="be-levels" class="collapse col-sm-12">
            <h4 class="font-weight-bold jpn-lang category-subtitle">ベルリッツの指導法</h4>
            <h4 class="font-weight-bold eng-lang category-subtitle">Teaching methods of Berlitz</h4>
            <hr />
            <div className="container">
                <div className="row card_row category-card-row">
                    <div className="col">
                        <div className="card mx-auto" style={{width:250}}>
                            <img className="card-img-top" src={require('../Images/be_lvl1.png')} alt="Card image" style={{width: 250}}></img>
                            <div className="card-body">
                                <h4 className="card-title jpn-lang">レベル 1</h4>
                                <h4 className="card-title eng-lang">Level 1</h4>
                                <p className="card-text jpn-lang">指導法:</p>
                                <p className="card-text eng-lang">Teaching method:</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        <span className="jpn-lang">ビデオ</span>
                                        <span className="eng-lang">VIDEO</span>
                                    </button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl1-full">フルセンテンス</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl1-full">Full sentence</a>
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl1-feedback">訂正と反復練習</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl1-feedback">Correction</a>
                                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#Modal-lvl1-aaa">A++</a>
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl1-lvldown">レベルダウンテクニック</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl1-lvldown">Level down</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mx-auto" style={{width:250}}>
                            <img className="card-img-top" src={require('../Images/be_lvl2a.png')}  alt="Card image" style={{width: 250}}></img>
                            <div className="card-body">
                                <h4 className="card-title jpn-lang">レベル 2</h4>
                                <h4 className="card-title eng-lang">Level 2</h4>
                                <p className="card-text jpn-lang">指導法:</p>
                                <p className="card-text eng-lang">Teaching method:</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        <span className="jpn-lang">ビデオ</span>
                                        <span className="eng-lang">VIDEO</span>
                                    </button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl2-full">フルセンテンス</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl2-full">Full sentence</a>
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl2-feedback">訂正と反復練習</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl2-feedback">Correction</a>
                                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#Modal-lvl2-aaa">A++</a>
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl2-lvldown">レベルダウンテクニック</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl2-lvldown">Level down</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End of row */}
                
                <div className="row card_row category-card-row">
                    <div className="col">
                        <div className="card mx-auto" style={{width:250}}>
                            <img className="card-img-top" src={require('../Images/be_lvl4.png')} alt="Card image" style={{width: 250}}></img>
                            <div className="card-body">
                                <h4 className="card-title jpn-lang">レベル 4</h4>
                                <h4 className="card-title eng-lang">Level 4</h4>
                                <p className="card-text jpn-lang">指導法:</p>
                                <p className="card-text eng-lang">Teaching method:</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                       <span className="jpn-lang">ビデオ</span>
                                       <span className="eng-lang">VIDEO</span>
                                    </button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl4-full">フルセンテンス</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl4-full">Full sentence</a>
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl4-feedback">訂正と反復練習</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl4-feedback">Correction</a>
                                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#Modal-lvl4-aaa">A++</a>
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl4-lvldown">レベルダウンテクニック</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl4-lvldown">Level down</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mx-auto" style={{width:250}}>
                            <img className="card-img-top" src={require('../Images/be_lvl6.png')} alt="Card image" style={{width: 250}}></img>
                            <div className="card-body">
                                <h4 className="card-title jpn-lang">レベル 6</h4>
                                <h4 className="card-title eng-lang">Level 6</h4>
                                <p className="card-text jpn-lang">指導法:</p>
                                <p className="card-text eng-lang">Teaching method:</p>
                                <div className="btn-group">
                                    <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        <span className="jpn-lang">ビデオ</span>
                                        <span className="eng-lang">VIDEO</span>
                                    </button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl6-full">フルセンテンス</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl6-full">Full sentence</a>
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl6-feedback">訂正と反復練習</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl6-feedback">Correction</a>
                                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#Modal-lvl6-aaa">A++</a>
                                      <a className="dropdown-item jpn-lang" href="#" data-toggle="modal" data-target="#Modal-lvl6-lvldown">レベルダウンテクニック</a>
                                      <a className="dropdown-item eng-lang" href="#" data-toggle="modal" data-target="#Modal-lvl6-lvldown">Level down</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* End of row */}
            </div> {/* End of container */}
        </div>
    );
};

export default CategoryLevel;