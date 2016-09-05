var React= require('react');
var RightComponent=require('./RightComponent');
var MyInbox=require('./MyInbox');
var MyrightPanel= React.createClass({

    getHTMLPart: function(arr)
    {
      for(var x = 0; x < arr.length; x++)
      {
        if(typeof arr[x].parts === 'undefined')
        {
          if(arr[x].mimeType === 'text/html')
          {
            return arr[x].body.data;
          }
        }
        else
        {
          return this.getHTMLPart(arr[x].parts);
        }
      }
      return '';
    },

    render: function(){
        var frm='';
        var to='';
        var subject='';
        var date='';
        var body='';
        var msgid='';
        var that=this;
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
                if(typeof messages.payload.parts==="undefined")
                {
                    body= messages.payload.body.data;
                }
                else
                {
                    body=that.getHTMLPart(messages.payload);
                }
                console.log("Body"+body);
                msgid=messages.id;
                return(
                    <div>
                        <RightComponent frm={frm} subject={subject} body={body} to={to} date={date} msgid={msgid}/>
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
