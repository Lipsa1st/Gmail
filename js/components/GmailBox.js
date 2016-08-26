var React = require('react');
var MyleftPanel = require('./MyleftPanel');
var MyrightPanel = require('./MyrightPanel');
var loadedData = false;
var GmailBox = React.createClass({
 getInitialState: function()
   {
     return({allLabelsData:[],allInboxData:[],allMessages:[]});
   },
 gmailLogin: function()
 {
   var acToken, tokenType, expiresIn;
   var OAUTHURL    =   'https://accounts.google.com/o/oauth2/v2/auth?';
   var SCOPE       =   'https://mail.google.com/ https://www.googleapis.com/auth/gmail.readonly';
   var CLIENTID    =   '194899161595-ijeag4vhdutm39a2a0bd6l9mrmaorc3t.apps.googleusercontent.com';
   var REDIRECT    =   'http://localhost:8080';
   var TYPE        =   'token';
   var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
   var win         =   window.open(_url, "windowname1", 'width=800, height=600');

   var pollTimer   =   window.setInterval(function()
   {
       try
       {
           if (win.document.URL.indexOf(REDIRECT) != -1)
           {
               window.clearInterval(pollTimer);
               var url =   win.document.URL;
               acToken =   gup(url, 'access_token');
               tokenType = gup(url, 'token_type');
               expiresIn = gup(url, 'expires_in');
               localStorage.setItem('gToken',acToken);
               localStorage.setItem('gTokenType',tokenType);
               localStorage.setItem('gExprireIn',expiresIn);
               function gup(url, name) {
                   name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
                   var regexS = "[\\#&]"+name+"=([^&#]*)";
                   var regex = new RegExp( regexS );
                   var results = regex.exec( url );
                   if( results == null )
                       return "";
                   else
                       return results[1];
               }
               win.close();
           }
       }
       catch(e)
       {
         console.log(e);
       }
   }, 500);
   this.allLabels();

 },

 allLabels: function()
 {
     var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'https://www.googleapis.com/gmail/v1/users/me/labels?key={AIzaSyCBQo-CNe7KqecYNh_EyI3b9lTSMr_ftWw}',
      dataType: 'json',
      type: 'GET',
      beforeSend: function (request)
      {
        request.setRequestHeader("Authorization", "Bearer "+accessToken);
      },
      success: function(data)
      {
        console.log(data);
        this.setState({allLabelsData:data.labels});
        loadedData=true;
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this)
   });
 },

getEmailByLabel: function(labelId)
{

    var accessToken = localStorage.getItem('gToken');
    $.ajax({
     url: 'https://www.googleapis.com/gmail/v1/users/lipsa.scorpio%40gmail.com/messages?includeSpamTrash=false&labelIds='+labelId+'&maxResults=10&key={AIzaSyCBQo-CNe7KqecYNh_EyI3b9lTSMr_ftWw}',
     dataType: 'json',
     type: 'GET',
     beforeSend: function (request)
     {
       request.setRequestHeader("Authorization", "Bearer "+accessToken);
     },
     success: function(data)
     {
         var messg=[];
       for(var i=0;i<data.messages.length;i++)
       {
           messg.push(this.getMessages(data.messages[i].id));
       }
       console.log(messg);
       this.setState({allMessages: messg});
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(err.toString());
     }.bind(this)
  });
},

getMessages: function(id)
{
    var accessToken = localStorage.getItem('gToken');
    var d = $.ajax({
        url: 'https://www.googleapis.com/gmail/v1/users/lipsa.scorpio%40gmail.com/messages/'+id+'?key={AIzaSyCBQo-CNe7KqecYNh_EyI3b9lTSMr_ftWw}',
        dataType: 'json',
        type: 'GET',
        async:false,
        beforeSend: function (request)
        {
          request.setRequestHeader("Authorization", "Bearer "+accessToken);
        },
        success: function(data){

        }.bind(this),
        error: function(xhr, status, err){
            console.error(err.toString());
        }.bind(this)
    }).responseJSON;
    return d;
},

 render:function()
 {
   var leftPanel;
   var rightPanel;
   if(loadedData){
     leftPanel =  <MyleftPanel allLabelsData={this.state.allLabelsData} getEmailByLabel={this.getEmailByLabel}/>
    rightPanel =  <MyrightPanel allMessages={this.state.allMessages}/>
    }
     return(
       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                    <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-danger pull-left">SignIn1</button>

                    <button type="button" className="btn btn-info btn-md" data-toggle="modal1" data-target="#myModal1">Compose</button>
                        <div id="myModal1" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal1">&times;</button>
                                    <h4 className="modal-title">Modal Header</h4>
                                </div>
                                <div className="modal-body">
                                    <p>Some text in the modal.</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal1">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                  <div className="col-lg-8 pull-right">
                        <h2 id="gmail">G<span id="mail">mail</span></h2>
                  </div>
              </div>
               <div className="row">
                 <div className="col-lg-3">

                        {leftPanel}
                  </div>
                 <div className="col-lg-9">
                 <ul className="list-group">
                        {rightPanel}
                </ul>
                 </div>
               </div>
         </div>
     </div>
     );
 }
 });

module.exports = GmailBox;
