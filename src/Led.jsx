const React = require('react');
const five = require('johnny-five');

module.exports = class Led extends React.Component {
  constructor(props) {
    super(props);
    this._ledInstance = new five.Led(this.props.pin);
    this.state = {on: props.on}  
 }
 componentDidMount(){
	if (this.props.blink) {
	setInterval(() => this.setState({on: !this.state.on}), this.props.interval || 500);
	}
}
  
  render() {
  	if (this.state.on) {
  		this._ledInstance.on();
  	} else {
  		this._ledInstance.off();
  	}
    return (<div>Led</div>);
  }
};
