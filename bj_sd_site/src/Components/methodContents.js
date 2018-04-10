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
                            <div ClassName="row">
                                <div className="col">
                                    <a href="../Images/berlitz_method_eng.pdf" class="small text-left">Download (Eng)</a>    
                                </div>
                            </div>
                            <div ClassName="row">
                                <div className="col">
                                    <a href="../Images/berlitz_method_jpn.pdf" class="small">Download (Jpn)</a>    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10">
                             {/* Start Accordian */}
                            <div id="accordion">
                            
                                <div className="card">
                                    <div className="card-header bg-danger rounded text-white text-center border border-white" id="headingOne">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color: "white"}}>
                                                    <p><u>Principle 1</u></p>
                                                    <h5 className="jpn-lang">レッスンでは日本語を使用しない。</h5>
                                                    <h5 className="eng-lang">Exclusive use of the target language</h5>
                                            </button>
                                        </h5>
                                    </div>
    
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <MethodContentPrinciple1 />    
                                        </div>
                                    </div>
                                </div> {/* End Principle1 card */}
                                
                                <div className="card">
                                    <div className="card-header bg-info rounded text-white text-center border border-white" id="headingTwo">
                                        <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{color: "white"}}>
                                                <p><u>Principle 2</u></p>
                                                <h5 className="jpn-lang">レッスンは、話す・聴くに集中する。</h5>
                                                <h5 className="eng-lang">Speaking and listening, supported by reading and writing</h5>
                                        </button>
                                       </h5>
                                    </div>
        
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            <MethodContentPrinciple2 />     
                                        </div>
                                    </div>
                                </div> {/* End Principle2 card */}
                            
                            <div className="card">
                                <div className="card-header bg-success rounded text-white text-center border border-white" id="headingThree">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{color: "white"}}>
                                                <p><u>Principle 3</u></p>
                                                <h5 className="jpn-lang">文法・語彙は会話のなかで自然に身につける。</h5>
                                                <h5 className="eng-lang">Grammar as a means of communication</h5>
                                        </button>
                                    </h5>
                                </div>
                                
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        <MethodContentPrinciple3 />
                                    </div>
                                </div>
                            </div> {/* End Principle3 card */}
                            <div className="card">
                                <div className="card-header rounded text-white text-center border border-white" style={{backgroundColor: "purple"}} id="headingFour">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{color: "white"}}>
                                                <p><u>Principle 4</u></p>
                                                <h5 className="jpn-lang">レッスンへの積極参加を促し、話す時間を最大化。</h5>
                                                <h5 className="eng-lang">Maximum learner participation</h5>
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                                    <div className="card-body">
                                        <MethodContentPrinciple4 />
                                    </div>
                                </div>
                            </div> {/* End Principle4 card */}
                            <div className="card">
                                <div className="card-header bg-warning rounded text-white text-center border border-white" id="headingFive">
                                    <h5 className="mb-0">
                                        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{color: "white"}}>
                                                <p><u>Principle 5</u></p>
                                                <h5 className="jpn-lang">学習者のニーズに合わせて、目標（ゴール）と指導法をアレンジ。</h5>
                                                <h5 className="eng-lang">Goal-oriented, lively instruction based on the learners needs and interests</h5>
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                                    <div className="card-body">
                                        <MethodContentPrinciple5 />
                                    </div>
                                </div>
                            </div> {/* End Principle5 card */}                        
                        </div> {/* End Accordian */} 
                    </div> {/* End of row */}
                </div> {/* End container */} 
            </div> 
        </div>
        );
    }
}

export default MethodContents;