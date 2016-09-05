var React = require('react');

var MyInbox= React.createClass({

        appendPre: function(message)
        {
            var iFrameNode = this.refs.myIframe,
            frameDoc = iFrameNode.contentWindow.document;
            frameDoc.write(message);
        },

        handleSave: function(){
            var data1={};
            data1.from=this.props.frm;
            data1.to=this.props.to;
            data1.body=this.props.body;
            data1.subject =this.props.subject;
            data1.msgid = this.props.msgid;
            $.ajax({
                url:'http://localhost:8080/saveBut',
                dataType:'json',
                contentType:'application/json',
                type:'POST',
                data:JSON.stringify(data1),
                success: function(data){
                    console.log(data);
                    alert("Saved Successfully");
                    //console.log("Success");
                }.bind(this),
                error: function(xhr, status, err){
                    console.error(err.toString());
                }.bind(this)
            });
        },

        render: function(){
        return(
        <div className="container">
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close"  onClick={this.props.handleHideModal}  data-dismiss="modal">&times;</button>
                            <h4 className="modal-title"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;&nbsp;View Mails</h4>
                        </div>
                        <div className="modal-body">
                            <p id="fromTo"><span id="spanColor"> From:</span>  {this.props.frm}</p>
                            <p id="fromTo"><span id="spanColor"> To: </span>  {this.props.to}</p>
                            <p id="fromTo"><span id="spanColor"> Subject:</span> {this.props.subject}</p>
                            <iframe id="iframe-message" ref="myIframe">
                            </iframe>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger pull-right" onClick={this.handleSave} data-dismiss="modal">Save</button>&nbsp;
                            <button type="button" className="btn btn-info pull-right" onClick={this.props.handleHideModal} data-dismiss="modal">Close</button>
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
