var React= require('react');
var ReactDOM= require('react-dom');

var Label= React.createClass({

    render: function(){
        return(
            <div className="panel panel-default">
                <div className="panel-body" >
                    <p><a href="#" className="btn btn-success btn-lg" type="button" id="home"></a></p><br/>
                    <p><a href="#" className="btn btn-info btn-lg" type="button" id="about"></a></p><br/>
                    <p><a href="#" className="btn btn-danger btn-lg" type="button" id="contact"></a></p><br/>
                </div>
            </div>
        );
    }
    });
    module.exports=Label
