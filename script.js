var counter;

var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        })
    },

    componentWillMount: function() {
        console.log("componentWillMount");
    },

    render: function() {
        var counter = setTimeout(function() {
            this.setState({
                counter: this.state.counter - 1
            });
        }.bind(this), 1000);

        return React.createElement("div", {},
            React.createElement("span", {}, "Counter " + this.state.counter)
        );
    },

    componentDidMount: function() {
        console.log("componentDidMount");
    },

    componentWillUpdate: function() {
        console.log("componentWillUpdate");
    },

    componentWillUnmount: function() {
        if (counter = 0) {
            clearTimeout(counter);
            console.log("componentWillUnmount");
        } else {
            return false
        }
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById("app"));
