var React= require('react');

var LeftComponent= React.createClass({
    handleEvent: function()
	{
		this.props.clickEvent(this.props.id);
	},
    render: function(){
        return(
            <div>
                <a onClick={this.handleEvent} className="list-group-item" href="#">{this.props.name}</a>
            </div>
        );
}
});
module.exports=LeftComponent
