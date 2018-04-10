import React from 'react';

const MethodContentPrinciple2 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 text-info">
                    <h4 className="jpn-lang">対面での会話が外国語習得には必要</h4>
                    <h4 className="eng-lang">Face to face conversation necessary for foreign language mastery</h4>
                    <p className="jpn-lang">第二言語習得の基礎を築いた、Michael Longの提唱した 「相互作用仮説」は、今も多くの示唆に富み、現在もSusan Gassらによって実証と理論の深化が進められています。こうした研究のなかで、対面での会話が語学の上達において決定的な役割を果たしていることが明らかになってきています。それは、会話において学習者が相手の話す意味を理解しよう、あるいは自分の話す内容を理解して貰おうと腐心する相互作用のなかで、学習する言語モデルの構築と修正が大きく進むからです。</p>
                    <p className="eng-lang">The "interaction hypothesis" advocated by Michael Long, which laid the foundation for acquiring the second language, is still rich in many suggestions, and Susan Gass and colleagues are now deepening the verification and theory. In these studies, it is becoming clear that face-to-face conversation plays a decisive role in improving language skills. This is because constructing and modifying a language model to learn greatly in an interaction in which the learner understands the meaning of the other person in the conversation or understands to understand what the user speaks.</p>
                    <p className="jpn-lang">ベルリッツでは、これらを踏まえ、会話する時間をレッスンの中で最大化するように心がけています。</p>
                    <p className="eng-lang">Based on these, Berlitz is trying to maximize the conversation time in the lesson.</p>
                    <h4 className="jpn-lang">学習者にとって、もっとも価値がある内容に</h4>
                    <h4 className="eng-lang">For learners, to the most valuable content</h4>
                    <p className="jpn-lang">また、その会話の内容についても、適切であるべきです。学習者にとって意味あるインプット・アウトプットが行われるよう、ベルリッツでは、学習者が実際に遭遇し得る会議や交渉など多くのシミュレーション通して会話を組み立てます。</p>
                    <p className="eng-lang">Also, the contents of the conversation should be appropriate. To make meaningful input and output to learners, Berlitz assembles conversations through many simulations, such as meetings and negotiations that learners can actually encounter.</p>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid rounded img-thumbnail" src={require('../Images/berlitz_method_man1.png')} alt="Logo"></img>
                </div>
            </div>
        </div>
    );
}

export default MethodContentPrinciple2;