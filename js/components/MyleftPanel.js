var React= require('react');
var LeftComponent=require('./LeftComponent');
var MyleftPanel= React.createClass({

clickEvent: function(labelId)
{
    this.props.getEmailByLabel(labelId);
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
                {productsArr}
            </div>
        );
    }
    });
    module.exports=MyleftPanel
