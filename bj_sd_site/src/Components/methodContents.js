import React, { Component } from 'react';
import MethodContentPrinciple1 from './methodContentPrinciple1';
import MethodContentPrinciple2 from './methodContentPrinciple2';
import MethodContentPrinciple3 from './methodContentPrinciple3';
import MethodContentPrinciple4 from './methodContentPrinciple4';
import MethodContentPrinciple5 from './methodContentPrinciple5';

class MethodContents extends Component {
    render () {
        return(
            <div id="be-method" className="collapse col-md-12">
                <h4 className="font-weight-bold category-subtitle jpn-lang">Berlitz Methodとは？</h4>
                <h4 className="font-weight-bold category-subtitle eng-lang">What is the Berlitz method?</h4>
                <hr />
                <div className="container method-container">
                    <div className="row">
                         <div className="col-md-2">   
                            <div className="row">
                                <div className="col">
                                    <img className="berlitz-method-image" src={require('../Images/berlitz_method_logo.png')}  alt=""></img>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p className="jpn-lang font-weight-light text-secondary small">Over the years, the Berlitz Method® has evolved in line with the latest research and technology. But it has remained faithful to a proven, effective core approach, based around five key principles</p>
                                    <p className="eng-lang font-weight-light text-secondary small">Over the years, the Berlitz Method® has evolved in line with the latest research and technology. But it has remained faithful to a proven, effective core approach, based around five key principles</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 bg-danger rounded text-white text-center border border-white" >   
                            <div className="row">
                                <div className="col lead">
                                    <p><u>Principle 1</u></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h5 className="jpn-lang">レッスンでは日本語を使用しない。</h5>
                                    <h5 className="eng-lang">Exclusive use of the target language</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type="button" className="btn btn-danger btn-block font-italic small" data-toggle="collapse" data-target="#principle1">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 bg-info rounded text-white text-center border border-white">   
                            <div className="row">
                                <div className="col lead">
                                    <p><u>Principle 2</u></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h5 className="jpn-lang">レッスンは、話す・聴くに集中する。</h5>
                                    <h5 className="eng-lang">Speaking and listening, supported by reading and writing</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type="button" className="btn btn-info btn-block font-italic small" data-toggle="collapse" data-target="#principle2">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 bg-success rounded text-white text-center border border-white">   
                            <div className="row">
                                <div className="col lead">
                                    <p><u>Principle 3</u></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h5 className="jpn-lang">文法・語彙は会話のなかで自然に身につける。</h5>
                                    <h5 className="eng-lang">Grammar as a means of communication</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type="button" className="btn btn-success btn-block font-italic small" data-toggle="collapse" data-target="#principle3">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 rounded text-white text-center border border-white" style={{backgroundColor: "purple"}}>   
                            <div className="row">
                                <div className="col lead">
                                    <p><u>Principle 4</u></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h5 className="jpn-lang">レッスンへの積極参加を促し、話す時間を最大化。</h5>
                                    <h5 className="eng-lang">Maximum learner participation</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type="button" className="btn btn-light btn-block text-white font-italic small purple-button" style={{backgroundColor: "purple", border: "none"}}  data-toggle="collapse" data-target="#principle4">More info</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 bg-warning rounded text-white text-center border border-white">   
                            <div className="row">
                                <div className="col lead">
                                    <p><u>Principle 5</u></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h5 className="jpn-lang">学習者のニーズに合わせて、目標（ゴール）と指導法をアレンジ。</h5>
                                    <h5 className="eng-lang">Goal-oriented, lively instruction based on the learners needs and interests</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type="button" className="btn btn-warning btn-block text-white font-italic small" data-toggle="collapse" data-target="#principle5">More info</button>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <MethodContentPrinciple1 />
                <MethodContentPrinciple2 />
                <MethodContentPrinciple3 />
                <MethodContentPrinciple4 />
                <MethodContentPrinciple5 />
            </div>
        );
    }
}

export default MethodContents;