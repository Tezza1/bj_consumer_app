import React from 'react';

const MethodContentPrinciple4 = () => {
    return (
        <div id="principle4" className="collapse col-md-12">
            <div className="container">
                <div className="row">
                    <div className="col-md-8" style={{color: "purple"}}>
                        <h4>レッスンへの積極参加が語学習得の鍵</h4>
                        <p>多くの研究者によって、学習者がレッスンにどれだけ積極的に参加したかが、第二言語習得の成否の鍵を握っていることが明らかにされています。</p>
                        <p>積極参加を促す仕組みとして、伝統的にPPP(Presentation, Practice, Production)が多くの語学学校で用いられていますが、近年の研究ではよりよい方法として、タスクベース学習(Task-Based Language TeachingやTask-Supported Language Practice)と呼ばれる、最初に目標を設定し、その達成を目指すなかで学習する方法が提唱されています。</p>
                        <p>(例えばレッスン冒頭で「レストランで注文できるようになる」などの目標を最初に設定しそれに挑戦しながら学ぶ方法です)</p>
                        <h4>PPPとタスクベース学習を組み合わせた学習法</h4>
                        <p>ベルリッツでは独自に磨き上げたPPP+(Presentation, Practice, Production+)と、タスクベース学習を組み合わせ、より効果的なレッスンを実現しています。</p>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded" src={require('../Images/berlitz_method_woman3.png')} alt="Logo"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item active"><a className="page-link" href="#">4</a></li>
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

export default MethodContentPrinciple4;