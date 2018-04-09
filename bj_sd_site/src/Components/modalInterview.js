import React from 'react';

const ModalInterview = () => {
    return(
        <div>
            {/* Modal-lvl2-short */}
            <div className="modal fade" id="Modal-lvl2-short">
                <div className="modal-dialog">
                    <div className="modal-content">
        
                        {/* Modal Header */}
                        <div className="modal-header">
                          <h4 className="modal-title text-primary jpn-lang"><span className="font-weight-bold">レベル 2 修了</span> (ショートバージョン)</h4>
                          <h4 className="modal-title text-primary eng-lang"><span className="font-weight-bold">Level 2 Completion</span> (Short version)</h4>
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
        
                        {/* Modal body */}
                        <div class="modal-body">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe title="lvl2-short" src="https://www.youtube.com/embed/Sh5svUp5_QE" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                        </div>
        
                        {/* Modal footer */}
                        <div class="modal-footer">
                          <button type="button" class="btn btn-primary jpn-lang" data-dismiss="modal">閉</button>
                          <button type="button" class="btn btn-primary eng-lang" data-dismiss="modal">Close</button>
                        </div>
        
                    </div>
                </div>
            </div>

            {/* Modal-lvl2-long */}
            <div className="modal fade" id="Modal-lvl2-long">
                <div className="modal-dialog">
                    <div className="modal-content">
        
                        {/* Modal Header */}
                        <div className="modal-header">
                          <h4 className="modal-title text-primary jpn-lang"><span className="font-weight-bold">レベル 2 修了</span> (ロングバージョン)</h4>
                          <h4 className="modal-title text-primary eng-lang"><span className="font-weight-bold">Level 2 Completion</span> (Long version)</h4>
                          <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
        
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title="lvl2-long" src="https://www.youtube.com/embed/SmnXg2pGWlY" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                        </div>
        
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" class="btn btn-primary jpn-lang" data-dismiss="modal">閉</button>
                            <button type="button" class="btn btn-primary eng-lang" data-dismiss="modal">Close</button>
                        </div>
        
                    </div>
                </div>
            </div>

            {/* Modal-lvl3-short */}
            <div class="modal fade" id="Modal-lvl3-short">
                <div class="modal-dialog">
                    <div class="modal-content">
        
                        {/* Modal Header */}
                        <div class="modal-header">
                          <h4 class="modal-title text-primary jpn-lang"><span class="font-weight-bold">レベル 3 修了</span> (ショートバージョン)</h4>
                          <h4 class="modal-title text-primary eng-lang"><span class="font-weight-bold">Level 3 Completion</span> (Short version)</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
        
                        {/* Modal body */}
                        <div class="modal-body">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe title="lvl3-short" src="https://www.youtube.com/embed/uMc6-Imgv0c" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                        </div>
        
                        {/* Modal footer */}
                        <div class="modal-footer">
                          <button type="button" class="btn btn-primary jpn-lang" data-dismiss="modal">閉</button>
                          <button type="button" class="btn btn-primary eng-lang" data-dismiss="modal">Close</button>
                        </div>
        
                    </div>
                </div>
            </div>

            {/* Modal-lvl3-long */}
            <div class="modal fade" id="Modal-lvl3-long">
                <div class="modal-dialog">
                    <div class="modal-content">
        
                        {/* Modal Header */}
                        <div class="modal-header">
                          <h4 class="modal-title text-primary jpn-lang"><span class="font-weight-bold">レベル 3 修了</span> (ロングバージョン)</h4>
                          <h4 class="modal-title text-primary eng-lang"><span class="font-weight-bold">Level 3 Completion</span> (Long version)</h4>
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
        
                        {/* Modal body */}
                        <div class="modal-body">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe title="lvl3-long" src="https://www.youtube.com/embed/sBM9tgGbtUA" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                        </div>
        
                        {/* Modal footer */}
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary jpn-lang" data-dismiss="modal">閉</button>
                            <button type="button" class="btn btn-primary eng-lang" data-dismiss="modal">Close</button>
                        </div>
        
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ModalInterview;