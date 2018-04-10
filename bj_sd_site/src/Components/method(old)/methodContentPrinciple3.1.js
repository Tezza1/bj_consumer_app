import React from 'react';

const MethodContentPrinciple3 = () => {
    return (
        <div id="principle3" className="collapse col-md-12">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 text-success">
                        <h4 className="jpn-lang">会話の中で学んだ文法しか使えない</h4>
                        <h4 className="eng-lang">Only grammar learned in conversation can be used</h4>
                        <p className="jpn-lang">第二言語習得研究に、長年多大な影響を与えてきたStephen Krashenによれば、文法を正確な体系立った順序で学ぶことは、常識に反して思うよりも効果的ではありません。むしろ、学習者がなんとか理解可能な会話を多く続け、そのなかで間違いと矯正を繰り返し、順序はあまり問わずひとつずつ習得していくことこそが、効果的な学習手段であると提唱しています。</p>
                        <p className="eng-lang">According to Stephen Krashen, who has had a tremendous influence on second language acquisition studies for many years, learning grammar in an accurate systematic order is not more effective than contrary to common sense. Rather, we propose that continuing many understandable conversations many times, repeating mistakes and corrections in the learner, and learning one by one regardless of the order one by one is an effective learning means.</p>
                        <p className="jpn-lang">ベルリッツにおいては、こうした見地も踏まえ、必要な文法や語彙の習得を、会話の中で自然に習得できるようカリキュラムが設計されています。</p>
                        <p className="eng-lang">In Berlitz, based on these perspectives, the curriculum is designed so that students can acquire necessary grammar and vocabulary naturally in conversatio.</p>
                        <h4 className="jpn-lang">「正確さ」と「流暢さ」のバランスの重要性</h4>
                        <h4 className="eng-lang">Importance of balance between "accuracy" and "fluency"</h4>
                        <p className="jpn-lang">会話の中身やスピード(テンポ)に集中するなかで、正しい文法を使うことも同時に意識しながら話すこと。これらのどちらかに偏るのではなく、教師が意識的にそのバランスをとりながらレッスンを進めることで、学習速度が向上することが 言語学者の研究によって示唆されています(e.g. Nation & Newton, 2009)。</p>
                        <p className="eng-lang">While concentrating on the content and speed (tempo) of the conversation, speak while consciously using correct grammar. Linguist studies have suggested that learning speed improves by teachers consciously progressing lessons while balancing them (eg Nation & Newton, 2009), rather than being biased toward either of these.</p>
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded img-thumbnail" src={require('../Images/berlitz_method_woman2.png')} alt="Logo"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link">Previous</a></li>
                            <li className="page-item"><a className="page-link">1</a></li>
                            <li className="page-item"><a className="page-link">2</a></li>
                            <li className="page-item active"><a className="page-link">3</a></li>
                            <li className="page-item"><a className="page-link">4</a></li>
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

export default MethodContentPrinciple3;