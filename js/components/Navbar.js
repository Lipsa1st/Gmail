var React=require('react');
var {Link}=require('react-router');
var Navbar=React.createClass({
    render: function(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed">
            <div className="container-fluid">
                <ul className="nav navbar-nav">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/gmailbox">Gmail Account</Link></li>
                    <li><Link to="/about">Router</Link></li>
                </ul>
            </div>
            </nav>
        );
    }
});
module.exports=Navbar
