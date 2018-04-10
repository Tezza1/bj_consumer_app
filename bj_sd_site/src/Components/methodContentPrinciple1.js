import React from 'react';

const MethodContentPrinciple1 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 text-danger">
                    <h4 className="jpn-lang">学習言語のインプット量を最大化するために</h4>
                    <h4 className="eng-lang">In order to maximize input quantity of learning language</h4>
                    <p className="jpn-lang">外国語を学ぶとき、つい母国語を使いたくなります。 しかし、第二言語習得に関する研究(e.g. Littlewood & Yu, 2011) から、母国語の使用をレッスン中に許してしまうと、想定以上に 母国語を使ってしまう量が増えてしまい、上達に重要な外国語に 触れる絶対量が減ってしまうという現象が観察されています。</p>
                    <p className="eng-lang">When learning a foreign language, I want to use my mother tongue. However, if studying the second language acquisition (eg Littlewood & Yu, 2011), if you allow the use of your mother tongue during the lesson, the amount that you use your mother tongue more than expected increases, The phenomenon that the absolute amount which touches a foreign language decreases is observed.</p>
                    <p className="jpn-lang">ベルリッツではこうした研究を踏まえ、レッスン中は外国語だけ を使うというルールを定めています。</p>
                    <p className="eng-lang">In Berlitz, based on these studies, we have established a rule to use only foreign languages during lessons.</p>
                    <h4 className="jpn-lang">ネイティブスピーカーから学ぶことが大切</h4>
                    <h4 className="eng-lang">It is important to learn from native speakers</h4>
                    <p className="jpn-lang">ネイティブスピーカーが実際に使う生きた言葉から直接学ぶことが、 外国語習得のスピードを加速させる重要な鍵であるということが 研究から明らかになっています。(e.g. Richards, 2013)。</p>
                    <p className="eng-lang">Research shows that learning directly from the living words actually used by native speakers is an important key to accelerate the speed of learning foreign languages. (e.g. Richards, 2013).</p>
                    <p className="jpn-lang">ベルリッツがネイティブスピーカーの教師による指導に こだわるのは、このためです。</p>
                    <p className="eng-lang">This is why Berlitz sticks to the guidance of teachers of native speakers.</p>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded img-thumbnail" src={require('../Images/berlitz_method_woman1.png')} alt="Logo"></img>
                </div>
            </div>
        </div>
    );
}

export default MethodContentPrinciple1;