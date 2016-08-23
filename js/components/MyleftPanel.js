var React= require('react');

var MyleftPanel= React.createClass({
    render: function(){

        var productsArr =this.props.allLabelsData.map(function(e,i){
        //return(<a href="">{e.name}</a>);
        return(
            <div key={i}>
                <a key={i} href="#">{e.name}</a>
            </div>
        )
        });

        return(
            <div className="panel panel-default">
                {productsArr}
            </div>
        );
    }
    });
    module.exports=MyleftPanel
