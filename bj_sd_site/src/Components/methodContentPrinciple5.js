import React from 'react';

const MethodContentPrinciple5 = () => {
    return (
        <div id="principle5" className="collapse col-md-12">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-warning">
                        <h4>学習者に合わせた目標が語学習得の強い動機に</h4>
                        <p>毎回のレッスンで設定される目標(ゴール)は、各レッスンが どのような現実のシーンで役立つかを明確にするだけでなく、学習者への強い動機づけにも大きく関わります。</p>
                        <p>グローバル社会のなかで、語学学習は単なる語学の習得でなく、強く願う「なりたい理想の自分像」との関連性を深めています。(Dornyei, 2009) また、「グローバルチームのリーダーを英語で務められる自分」「ドイツ語で自信をもってプレゼンをこなせる自分」といったように、その理想像は人それぞれです。</p>
                        <p>ベルリッツでは、こうしたそれぞれの理想像に最短距離で近づけるように、学習者と話しながら、毎回の目標(ゴール)を設定します。</p>
                        <h4>学習スピードやスタイルに合わせ、指導をアレンジ</h4>
                        <p>なりたい理想像と同様、学習スタイルも人によって様々であることは教育研究の領域では常識です。ベルリッツでは、一人ひとりの 学習者に合わせたレッスンスピードや教え方に柔軟に対応できるように教師のトレーニングの仕組みを設けています。</p>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded" src={require('../Images/berlitz_method_woman4.png')} alt="Logo"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item active"><a className="page-link" href="#">5</a></li>
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

export default MethodContentPrinciple5;