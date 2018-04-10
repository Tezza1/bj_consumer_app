import React from 'react';

const CategoryToeic = () => {
    return(
        <div id="toeic" class="collapse col-md-12">
            <h4 class="font-weight-bold jpn-lang category-subtitle">【首都圏】TOEICグループコース</h4>
            <h4 class="font-weight-bold eng-lang category-subtitle">Key areas of the TOEIC group course</h4>
            <hr />
            <div class="container">
                <div class="row card_row">
                    <div class="col">
                        <div class="card mx-auto" style={{width:250}}>
                            <img class="card-img-top" src={require('../Images/toeic.png')} alt="" style={{width: 250}}></img>
                            <div class="card-body">
                                <h4 class="card-title">TOEIC</h4>
                                <p class="card-text jpn-lang">レッスンの様子:</p>
                                <p class="card-text eng-lang">Lesson overview:</p>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary" href="#" data-toggle="modal" data-target="#Modal-toeic">
                                       <span class="jpn-lang">ビデオ</span>
                                       <span class="eng-lang">VIDEO</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryToeic;