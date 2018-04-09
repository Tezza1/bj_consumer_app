import React from 'react';

const MethodContentPrinciple1 = () => {
    return (
        <div id="principle1" className="collapse col-md-12">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-danger">
                        <h4>学習言語のインプット量を最大化するために</h4>
                        <p>外国語を学ぶとき、つい母国語を使いたくなります。 しかし、第二言語習得に関する研究(e.g. Littlewood & Yu, 2011) から、母国語の使用をレッスン中に許してしまうと、想定以上に 母国語を使ってしまう量が増えてしまい、上達に重要な外国語に 触れる絶対量が減ってしまうという現象が観察されています。</p>
                        <p>ベルリッツではこうした研究を踏まえ、レッスン中は外国語だけ を使うというルールを定めています。</p>
                        <h4>ネイティブスピーカーから学ぶことが大切</h4>
                        <p>ネイティブスピーカーが実際に使う生きた言葉から直接学ぶことが、 外国語習得のスピードを加速させる重要な鍵であるということが 研究から明らかになっています。(e.g. Richards, 2013)。</p>
                        <p>ベルリッツがネイティブスピーカー(*)の教師による指導に こだわるのは、このためです。</p>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded" src={require('../Images/berlitz_method_woman1.png')} alt="Logo"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item"><a className="page-link" href="#">5</a></li>
                            <li className="page-item"><a className="page-link" href="#">Next</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-link">Back to top</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MethodContentPrinciple1;