var React = require('react');

var MyCompose= React.createClass({
    render: function(){
        return(
        <div className="container">
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Mails</h4>
                        </div>
                        <div className="modal-body">
                            <p>From: {this.props.frm}</p>
                            <p>To: {this.props.to}</p>
                    
                        </div>
                        <div classNameName="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
        );
    }
})
module.exports=MyCompose
