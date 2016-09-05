var React=require('react');
var GetMails = require('./GetMails');
var Home=React.createClass({

    getInitialState: function() {
        return({message:[]});
    },

    // MyDelete: function(){
    //     $.ajax({
    //         url:'http://localhost:8080/MyDelete',
    //         dataType:'json',
    //         contentType:'application/json',
    //         type:'DELETE',
    //         success: function(response){
    //         console.log("Success");
    //             this.setState({message:response.message});
    //         }.bind(this),
    //         error: function(xhr, status, err){
    //             console.error(err.toString());
    //         }.bind(this)
    //     });
    // },

    render: function(){
        return(
              <div>

                 <GetMails emails={this.state.message} />
            </div>

        );
    },

    componentDidMount: function(){
        $.ajax({
            url:'http://localhost:8080/MyGet',
            dataType:'json',
            contentType:'application/json',
            type:'get',
            success: function(response){
            console.log("Success1");
                this.setState({message:response});
                console.log(this.state.message);
            }.bind(this),
            error: function(xhr, status, err){
                console.error(err.toString());
            }.bind(this)
        });
    },
});


module.exports=Home
