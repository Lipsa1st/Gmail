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

        handleHideModal:function(){
            console.log("Inside handleHideModal");
            this.setState({myModal:false});
            console.log(this.state.myModal);
        },

        handleModal: function()
        {
            console.log("Inside handle");
            this.setState({myModal:true});
            console.log("current state:"+this.state.myModal);
        },

    render: function(){
        return(
            <div>
                <div id="wrap">
                <a href="#"  id="myRightAnchor" className="list-group-item" >
                    <div className="row">
                        <div className="col-lg-4">
                            <h6>From: <span id="mydata">{this.props.frm}</span></h6>
                        </div>
                        <div className="col-lg-4">
                            <a data-target="#myModal" data-toggle="modal" onClick={this.handleModal}><h6>Subject: {this.props.subject}</h6></a>
                        </div>
                        <div className="col-lg-4">
                            <h6>Date: <span id="mydata">{this.props.date}</span></h6>
                        </div>
                    </div>
                </a>
                </div>
                {this.state.myModal?<MyInbox frm={this.props.frm} handleHideModal={this.handleHideModal} subject= {this.props.subject} to={this.props.to} body={this.props.body} msgid={this.props.msgid}/>:null}
            </div>
        );
}
});
module.exports=RightComponent
