var React= require('react');
var LeftComponent=require('./LeftComponent');
var Compose=require('./Compose');
var MyleftPanel= React.createClass({

clickEvent: function(labelId)
{
    this.props.getEmailByLabel(labelId);
},

transferMessage(to,sub,body){
    this.props.sendMessage(to,sub,body);
},

    render: function(){
        var productsArr =this.props.allLabelsData.map(function(message){
            return(
            <div>
                <LeftComponent id={message.id} name={message.name} clickEvent={this.clickEvent}></LeftComponent>
            </div>
        )
    },this);

        return(
            <div>
            <div>
            <li className="list-group-item">
                {productsArr}
            </li>
            </div>
            <div>
                <Compose transferMessage={this.transferMessage} to={this.props.to} sub={this.props.sub} body={this.props.body}/>
            </div>
            </div>
        );
    }
    });
    module.exports=MyleftPanel
