var React = require('react');
var MyleftPanel = require('./MyleftPanel');
var MyrightPanel = require('./MyrightPanel');
var loadedData = false;
var To="";
var Sub="";
var Body="";
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

sendMessage: function(to,sub,body)
{
    console.log("to"+to);
    console.log("sub"+sub);
    console.log("body"+body);

    var accessToken = localStorage.getItem('gToken');
     console.log("Access token: "+accessToken);
     var email = '';
     var Headers = {'To': to,'Subject': sub};
     for(var header in Headers)
     {
       email += header += ": "+Headers[header]+"\r\n";
       console.log("email---"+email);
       console.log("header---"+header);
       console.log("Headers[header]---"+Headers[header]);
     }
     email += "\r\n" + this.state.msgData;
     console.log("constructed email: " +email);
     var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');

    var d = $.ajax({
        url: 'https://www.googleapis.com/gmail/v1/users/lipsa.scorpio%40gmail.com/messages/send?key={AIzaSyCBQo-CNe7KqecYNh_EyI3b9lTSMr_ftWw}',
        dataType: 'json',
        contentType: "application/json",
        type: 'POST',
        data: JSON.stringify({'raw': encodedMessage}),
        async:false,
        beforeSend: function (request)
        {
          request.setRequestHeader("Authorization", "Bearer "+accessToken);
        },
        success: function(data){
            console.log("Success");
        }.bind(this),
        error: function(xhr, status, err){
            console.error(err.toString());
        }.bind(this)
    })
},

 render:function()
 {
   var leftPanel;
   var rightPanel;
   if(loadedData){
     leftPanel =  <MyleftPanel allLabelsData={this.state.allLabelsData} getEmailByLabel={this.getEmailByLabel} sendMessage={this.sendMessage}/>
     rightPanel =  <MyrightPanel allMessages={this.state.allMessages}/>
    }
     return(
       <div className="GmailBox">
           <div className="container-fluid">
             <div className="row">
                 <div className="col-lg-1">
                    <button id="authorize-button" onClick={this.gmailLogin} className="btn btn-danger pull-left">SignIn</button>
                    <a href="#" type="button" data-target="#ComposeModal" data-toggle="modal" className="btn btn-primary pull-left">Compose</a>
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
