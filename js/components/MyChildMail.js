var React= require('react');
var UpdateDeleteModal= require('./UpdateDeleteModal');
var MyChildMail = React.createClass({
    getInitialState: function()
      {
        return({myMailModal:false});
      },
      handleEvent: function()
      {
          this.props.clickEvent(this.props.id);
      },
      handleHideModal:function(){
          console.log("Inside handleHideModal");
          this.setState({myMailModal:false});
          console.log(this.state.myMailModal);
      },
      handleModal: function()
      {
          console.log("Inside handle");
          this.setState({myMailModal:true});
          console.log("current state:"+this.state.myMailModal);
      },

    render: function(){
    return(
        <div id="wrap1">
            <a href="#" className="list-group-item" data-target="#myMailModal" data-toggle="modal" onClick={this.handleModal}>
                <div className="row">
                    <div className="col-lg-4">
                        <h6>ID:{this.props.msgid}</h6>
                    </div>
                    <div className="col-lg-4">
                        <h6>From: {this.props.frm}</h6>
                    </div>
                    <div className="col-lg-4">
                        <h6>Subject: {this.props.subject}</h6>
                    </div>
                </div>
            </a>
            <div>
            {this.state.myMailModal?<UpdateDeleteModal dataId={this.props.dataId} frm={this.props.frm} handleHideModal={this.handleHideModal} subject= {this.props.subject} to={this.props.to} body={this.props.body} msgid={this.props.msgid}/>:null}
            </div>
            </div>
    );
}
});
module.exports=MyChildMail
