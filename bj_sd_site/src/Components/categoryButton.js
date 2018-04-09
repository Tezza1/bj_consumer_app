import React, { Component } from 'react';
import CategoryInterview from './categoryInterview';
import CategoryLevel from './categoryLevel';
import CategoryToeic from './categoryToeic';
import MethodContents from './methodContents';

class CategoryButton extends Component {
    render () {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-block category-button"   data-toggle="collapse" data-target="#interview">
                            <h2 className="jpn-lang">上達動画</h2>
                            <h2 className="eng-lang">Progress videos</h2>
                            <hr />
                            <h4 className="jpn-lang">レベル別</h4>
                            <h4 className="eng-lang">By level</h4>
                        </button>
                    </div>
                    <CategoryInterview />
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-block category-button" data-toggle="collapse" data-target="#be-levels">
                            <h2 className="jpn-lang">ベルリッツの指導法</h2>
                            <h2 className="eng-lang">Berlitz's teaching method</h2>
                            <hr />
                            <h4 className="jpn-lang">レベル別</h4>
                            <h4 className="eng-lang">By level</h4>
                        </button>
                    </div>
                    <CategoryLevel />
                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-block category-button-bottom" data-toggle="collapse" data-target="#be-method">
                            <h2 className="jpn-lang">Berlitz Methodとは？</h2>
                            <h2 className="eng-lang">What is the Berlitz Method?</h2>
                            <hr />
                            <h4 className="jpn-lang">学術的バックグラウンド</h4>
                            <h4 className="eng-lang">Academic background</h4>
                        </button>
                    </div>
                    <MethodContents />
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-block category-button-bottom" data-toggle="collapse" data-target="#toeic">
                            <h2 className="jpn-lang">【首都圏】TOEICグループデモ</h2>
                            <h2 className="eng-lang">TOEIC key area group demo</h2>
                            <hr />
                            <h4 className="jpn-lang">レッスンの様子</h4>
                            <h4 className="eng-lang">Lesson overview</h4>
                        </button>
                    </div>
                    <CategoryToeic />
                </div>
            </div>
        );
    }
}

export default CategoryButton;