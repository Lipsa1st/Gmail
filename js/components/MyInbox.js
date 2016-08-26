var React = require('react');

var MyInbox= React.createClass({


        appendPre: function(message)
        {
            var iFrameNode = this.refs.myIframe,
            frameDoc = iFrameNode.contentWindow.document;
            frameDoc.write(message);
        },

        render: function(){
        return(
        <div className="container">
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;&nbsp;Mails</h4>

                        </div>
                        <div className="modal-body">
                            <p id="fromTo"> From:  {this.props.frm}</p>
                            <p id="fromTo"> To:   {this.props.to}</p>
                            <iframe id="iframe-message" ref="myIframe">
                            </iframe>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info pull-right" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
        );
    },

    componentDidMount: function()
    {
        var encodedBody = this.props.body;
        encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
        encodedBody = decodeURIComponent(escape(window.atob(encodedBody)));
        this.appendPre(encodedBody);

},

})
module.exports=MyInbox
