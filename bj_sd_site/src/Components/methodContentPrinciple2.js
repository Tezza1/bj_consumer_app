import React from 'react';

const MethodContentPrinciple2 = () => {
    return (
        <div id="principle2" className="collapse col-md-12">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-info">
                        <h4>対面での会話が外国語習得には必要</h4>
                        <p>第二言語習得の基礎を築いた、Michael Longの提唱した 「相互作用仮説」は、今も多くの示唆に富み、現在もSusan Gassらによって実証と理論の深化が進められています。こうした研究のなかで、対面での会話が語学の上達において決定的な役割を果たしていることが明らかになってきています。それは、会話において学習者が相手の話す意味を理解しよう、あるいは自分の話す内容を理解して貰おうと腐心する相互作用のなかで、学習する言語モデルの構築と修正が大きく進むからです。</p>
                        <p>ベルリッツでは、これらを踏まえ、会話する時間をレッスンの中で最大化するように心がけています。</p>
                        <h4>学習者にとって、もっとも価値がある内容に</h4>
                        <p>また、その会話の内容についても、適切であるべきです。学習者にとって意味あるインプット・アウトプットが行われるよう、ベルリッツでは、学習者が実際に遭遇し得る会議や交渉など多くのシミュレーション通して会話を組み立てます。</p>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded" src={require('../Images/berlitz_method_man1.png')} alt="Logo"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active"><a className="page-link" href="#">2</a></li>
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

export default MethodContentPrinciple2;