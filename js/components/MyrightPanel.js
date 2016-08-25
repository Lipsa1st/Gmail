var React= require('react');
var RightComponent=require('./RightComponent');
var MyCompose=require('./myCompose');
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
                    if(messages.payload.headers[i].name==="To"){
                        to=messages.payload.headers[i].value;
                    }
                }
                body=messages.payload.body;
                return(
                    <div>
                        <RightComponent frm={frm} subject={subject} to={to} date={date} />
                    </div>
                );
        });
        return(
            <div>
                {MessageArr}
            </div>

        );
    }
});
module.exports=MyrightPanel
