const React = require('react');
const five = require('johnny-five');
const Raspi = require('raspi-io');

const Led = require('./Led');
const LightSensor = require('./LightSensor');
const MoistureSensor = require('./MoistureSensor');

module.exports = class World extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      light: 0,
      moisture: 0
    }

    // Initialise arduino for this World
    const board = new five.Board({
        io: new Raspi(),
        repl:false
    });
    board.on('ready', () => this.setState({ready: true}));

    this._update = this._update.bind(this);
  }

  _update(state, value) {
    this.setState({[state]: value});
  }

  render() {
    let worldElements = '';

    if (this.state.ready) {
      worldElements =
        <div>
          <Led pin={7} on={true} blink/>
          <Led pin={4} on={true}/>
{/*          <LightSensor pin={'A1'} update={this._update}/>
          <MoistureSensor pin={'A2'} update={this._update}/>
  */}      </div>;
    }

    return (
      <div>
        {worldElements}
      </div>
    );
  }
};
