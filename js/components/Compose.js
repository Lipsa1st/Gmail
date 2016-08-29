var React = require('react');

var Compose= React.createClass({
        getInitialState:function()
        {
            return({To:'',Sub:'',Body:''});
        },
        To: function(event)
        {
            this.setState({To:event.target.value});
        },

        Sub: function(event)
        {
            this.setState({Sub:event.target.value});
        },

        Body: function(event)
        {
            this.setState({Body:event.target.value});
        },

        sendmessage: function(){
            this.props.transferMessage(this.state.To,this.state.Sub,this.state.Body);
        },

        render: function(){
        return(
            <div className="container">
            <div className="modal fade" id="ComposeModal" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;&nbsp;Compose Mail</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>To.:</td><td><input type="text" id="tableID" onChange={this.To} placeholder="To"/></td>
                                    </tr>
                                    <tr><td></td><td></td></tr>
                                    <tr>
                                        <td>Subject:</td><td><input type="text" id="tableID" name="Subject" onChange={this.Sub} placeholder="From"/></td>
                                    </tr>
                                    <tr></tr>
                                    <tr>
                                        <td>Body:</td><td><textarea name="body" id="tableID" rows="5" cols="50" onChange={this.Body} placeholder="Type your text here..."/></td>
                                    </tr>
                                </tbody>
                            </table>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success pull-right" onClick={this.sendmessage} data-dismiss="modal">Send</button>
                            <button type="button" className="btn btn-danger pull-right" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
        );
    }

})
module.exports=Compose
