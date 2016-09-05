var React= require('react');
var ReactDOM= require('react-dom');
var {browserHistory, Route, Router, IndexRoute} = require('react-router');
var Navbar=require('./components/Navbar');
var About=require('./components/About');
var Home=require('./components/Home');
var GmailBox=require('./components/GmailBox');

var MainComponent= React.createClass({
render: function(){
    console.log(" This is my parent1");
        return(
                <div>
                    <Navbar/>
                    <br/><br/><br/>
                    {this.props.children}
                </div>
        );
    }
});

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={MainComponent}>
            <IndexRoute component={Home}/>//default component
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/gmailbox" component={GmailBox}/>
        </Route>
        </Router>,document.getElementById('app')
);
