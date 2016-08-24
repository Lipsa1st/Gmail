var React= require('react');

var MyrightPanel= React.createClass({
    render: function(){
        var frm='';
        var to='';
        var subject='';
        var date='';

            console.log("My Messages--- "+this.props.allMessages);
            var MessageArr= this.props.allMessages.map(function(messages,i){
                for(var i=0;i<messages.payload.headers.length;i++)
                {
                    if(messages.payload.headers[i].name==="From"){
                        frm=messages.payload.headers[i].value;
                    }

                    if(messages.payload.headers[i].name==="Subject"){
                        subject=messages.payload.headers[i].value;
                    }
                    if(messages.payload.headers[i].name==="Date"){
                        date=messages.payload.headers[i].value;
                    }
                }
                return(
                    <div id="wrap">
                        <div className="row">
                            <div className="col-lg-4">
                                <h6>From: <span id="mydata">{frm}</span></h6>
                            </div>

                            <div className="col-lg-4">
                                <h6>Subject: <span id="mydata">{subject}</span></h6>
                            </div>
                            <div className="col-lg-4">
                                <h6>Date: <span id="mydata">{date}</span></h6>
                            </div>
                        </div>
                    </div>
                );
        });
        return(
            <div className="panel panel-default">
                {MessageArr }
            </div>
        );
    }
});
module.exports=MyrightPanel
