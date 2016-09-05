var React = require('react');
var MyChildMail =require('./MyChildMail');
var GetMails = React.createClass({
    render: function(){
        var myMail = this.props.emails.map(function(messages){
            return(
                <div>
                    <MyChildMail dataId={messages._id} frm={messages.msgFrom} subject={messages.msgSubject} to={messages.msgTo} msgid={messages.msgId}/>
                </div>
            );
        });
    return(
        <div>
        <div className="row">
        <center><h3>Stored Messages&nbsp;&nbsp;<span className="glyphicon glyphicon-eye-open"></span></h3></center>
        </div>
           {myMail}
        </div>
    );
}
});
module.exports = GetMails
