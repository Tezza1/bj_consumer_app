import React from 'react';

const ModalToeic = () => {
    return(
            <div className="modal fade" id="Modal-toeic">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                          <h4 className="modal-title text-primary font-weight-bold jpn-lang">TOEICコースレッスンの様子</h4>
                          <h4 className="modal-title text-primary font-weight-bold eng-lang">TOEIC Course Observation</h4>
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
        
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title="toeic" src="https://www.youtube.com/embed/pHVq2AlzvCo" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                        </div>
        
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary jpn-lang" data-dismiss="modal">閉</button>
                            <button type="button" className="btn btn-primary eng-lang" data-dismiss="modal">Close</button>
                        </div>
        
                    </div>
                </div>
            </div>
    );
};

export default ModalToeic