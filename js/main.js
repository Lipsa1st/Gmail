var React= require('react');
var ReactDOM= require('react-dom');
var GmailBox=require('./components/GmailBox');

var MainComponent= React.createClass({
render: function(){
    console.log(" This is parent1");
        return(
            <div className="container">
                <div className="row">
                    <GmailBox />
                </div>
            </div>
        );
    }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app'));
