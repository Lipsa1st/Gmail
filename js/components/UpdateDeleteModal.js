var React = require('react');
var UpdateDeleteModal= React.createClass({

    getInitialState: function()
    {
        return({subject:this.props.subject,from:this.props.frm});
    },

    handleFromUpdate: function(event){
        this.setState({from:event.target.value});
        console.log(this.state.from);
    },

    handleSubjectUpdate: function(event){
        this.setState({subject:event.target.value});
        console.log(this.state.subject);
    },

    handleDelete: function(){
        var data1 = {};
        data1.dataId = this.props.dataId;
        data1.from = this.state.from;
        data1.to = this.state.to;
        data1.body = this.state.body;
        data1.subject = this.state.subject;
        data1.msgid = this.state.msgid;
        $.ajax({
            url:'http://localhost:8080/MyDelete',
            dataType:'json',
            contentType:'application/json',
            type:'DELETE',
            data:JSON.stringify(data1),
            success: function(response){
                console.log(response);
                alert("Data Deleted");
            }.bind(this),
            error: function(xhr, status, err){
                console.error(err.toString());
            }.bind(this)
        });
    },

    handleUpdate: function(){
          var data1={};
          data1.dataId = this.props.dataId;
          data1.from = this.state.from;
          data1.subject = this.state.subject;
        $.ajax({
            url:'http://localhost:8080/MyUpdate',
            dataType:'json',
            contentType:'application/json',
            type:'PUT',
            data:JSON.stringify(data1),
            success: function(response){
                console.log(response);
                alert("Data Updated");
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
            <div className="modal fade" id="myMailModal" role="dialog">
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;&nbsp;Update Mails</h4>
                        </div>
                        <div className="modal-body">
                            <p>To:&nbsp;{this.props.to}</p>
                            From:&nbsp;<p><input type = "text" onChange={this.handleFromUpdate} id="FromId" defaultValue= {this.props.frm}/></p>
                            Subject: <p><textarea className="form-control" onChange={this.handleSubjectUpdate} id="SubjectId" defaultValue={this.props.subject}></textarea></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning pull-right" onClick={this.handleUpdate} data-dismiss="modal">Update</button>&nbsp;
                            <button type="button" className="btn btn-warning pull-right" onClick={this.handleDelete} data-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
        );
    },
});
module.exports=UpdateDeleteModal
