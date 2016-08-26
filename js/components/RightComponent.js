var React= require('react');
var MyInbox=require('./MyInbox');
var RightComponent= React.createClass({

    getInitialState: function()
      {
        return({myModal:false});
      },

        handleEvent: function()
    	{
    		this.props.clickEvent(this.props.id);
    	},

        handleModal: function()
        {
            return({myModal:true});
        },

    render: function(){
        return(
            <div>
                <div id="wrap">
                <a href="#"  id="myRightAnchor" className="list-group-item" onClick={this.handleModal}>
                    <div className="row">
                        <div className="col-lg-4">
                            <h6>From: <span id="mydata">{this.props.frm}</span></h6>
                        </div>
                        <div className="col-lg-4">
                            <a data-target="#myModal" data-toggle="modal"><h6>Subject: {this.props.subject}</h6></a>
                        </div>
                        <div className="col-lg-4">
                            <h6>Date: <span id="mydata">{this.props.date}</span></h6>
                        </div>
                    </div>
                </a>
                </div>
                {this.state.myModal=true?<MyInbox frm={this.props.frm} to={this.props.to} body={this.props.body}/>:null}
            </div>
        );
}
});
module.exports=RightComponent
