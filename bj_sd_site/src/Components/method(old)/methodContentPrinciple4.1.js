import React from 'react';

const MethodContentPrinciple4 = () => {
    return (
        <div id="principle4" className="collapse col-md-12">
            <div className="container">
                <div className="row">
                    <div className="col-md-8" style={{color: "purple"}}>
                        <h4 className="jpn-lang">レッスンへの積極参加が語学習得の鍵</h4>
                        <h4 className="eng-lang">Active participation in lessons is key to language acquisition</h4>
                        <p className="jpn-lang">多くの研究者によって、学習者がレッスンにどれだけ積極的に参加したかが、第二言語習得の成否の鍵を握っていることが明らかにされています。</p>
                        <p className="eng-lang">Many researchers have revealed how aggressive participation of learners in the lessons holds the key to success or failure of second language acquisition.</p>
                        <p className="jpn-lang">積極参加を促す仕組みとして、伝統的にPPP(Presentation, Practice, Production)が多くの語学学校で用いられていますが、近年の研究ではよりよい方法として、タスクベース学習(Task-Based Language TeachingやTask-Supported Language Practice)と呼ばれる、最初に目標を設定し、その達成を目指すなかで学習する方法が提唱されています。</p>
                        <p className="eng-lang">Traditionally, PPP (Presentation, Practice, Production) has been used in many language schools as a mechanism to encourage active participation, but in recent research, task-based learning (Task-Based Language Teaching and Task -Supported Language Practice), a method to set goals first and to learn while aiming at achieving it is advocated.</p>
                        <p className="jpn-lang">(例えばレッスン冒頭で「レストランで注文できるようになる」などの目標を最初に設定しそれに挑戦しながら学ぶ方法です)</p>
                        <p className="eng-lang">(For example, at the beginning of the lesson it is a method to set goals such as "You can order at a restaurant" first and learn while challenging it)</p>
                        <h4 className="jpn-lang">PPPとタスクベース学習を組み合わせた学習法</h4>
                        <h4 className="eng-lang">Learning method combining PPP and task based learning</h4>
                        <p className="jpn-lang">ベルリッツでは独自に磨き上げたPPP+(Presentation, Practice, Production+)と、タスクベース学習を組み合わせ、より効果的なレッスンを実現しています。</p>
                        <p className="eng-lang">In Berlitz, we combine PPP + (Presentation, Practice, Production +) independently and task-based learning to achieve more effective lessons.</p>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded img-thumbnail" src={require('../Images/berlitz_method_woman3.png')} alt="Logo"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link">Previous</a></li>
                            <li className="page-item"><a className="page-link">1</a></li>
                            <li className="page-item"><a className="page-link">2</a></li>
                            <li className="page-item"><a className="page-link">3</a></li>
                            <li className="page-item active"><a className="page-link">4</a></li>
                            <li className="page-item"><a className="page-link">5</a></li>
                            <li className="page-item"><a className="page-link">Next</a></li>
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