var React= require('react');
var ReactDOM= require('react-dom');

var data={"labels": [
    {
     "id": "CATEGORY_PERSONAL",
     "name": "CATEGORY_PERSONAL",
     "type": "system"
    },
    {
     "id": "Label_1",
     "name": "Personal",
     "type": "user"
    },
    {
     "id": "CATEGORY_SOCIAL",
     "name": "CATEGORY_SOCIAL",
     "type": "system"
    },
    {
     "id": "Label_5",
     "name": "Junk",
     "type": "user"
    },
    {
     "id": "CATEGORY_FORUMS",
     "name": "CATEGORY_FORUMS",
     "type": "system"
    },
    {
     "id": "Label_2",
     "name": "Receipts",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelHide",
     "type": "user"
    },
    {
     "id": "Label_4",
     "name": "Work",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelHide",
     "type": "user"
    },
    {
     "id": "IMPORTANT",
     "name": "IMPORTANT",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelShow",
     "type": "system"
    },
    {
     "id": "Label_3",
     "name": "Travel",
     "type": "user"
    },
    {
     "id": "CATEGORY_UPDATES",
     "name": "CATEGORY_UPDATES",
     "type": "system"
    },
    {
     "id": "CHAT",
     "name": "CHAT",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelHide",
     "type": "system"
    },
    {
     "id": "SENT",
     "name": "SENT",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelShow",
     "type": "system"
    },
    {
     "id": "INBOX",
     "name": "INBOX",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelShow",
     "type": "system"
    },
    {
     "id": "TRASH",
     "name": "TRASH",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelHide",
     "type": "system"
    },
    {
     "id": "CATEGORY_PROMOTIONS",
     "name": "CATEGORY_PROMOTIONS",
     "type": "system"
    },
    {
     "id": "DRAFT",
     "name": "DRAFT",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelShow",
     "type": "system"
    },
    {
     "id": "SPAM",
     "name": "SPAM",
     "messageListVisibility": "hide",
     "labelListVisibility": "labelHide",
     "type": "system"
    },
    {
     "id": "STARRED",
     "name": "STARRED",
     "type": "system"
    },
    {
     "id": "UNREAD",
     "name": "UNREAD",
     "type": "system"
    }
]};
console.log(data);
var json = JSON.parse(data);
var output = [];

for(var i = 0;i<data.id.length;i++)
{
    output.push(data.id[i].Value);
    output.push(data.name[i].Value);
}
alert(output);
var MainComponent= React.createClass({
    render: function(){
        console.log("This is myconsole ");
        return(
            <h1>jkhj</h1>
}
})
ReactDOM.render(<MainComponent/>,document.getElementById('app'));
