var NoteKey = React.createClass({
  componentDidMount: function () {
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addChangeListener(this._onChange);
  },

  getInitialState: function () {
    return { pressed: this.thisKeyPressed() };
  },

  render: function () {
    var className;
    if (this.props.counter === 0) {
      className = "white";
    }
    if (this.props.counter === 1) {
      className = "white";
    }
    if (this.props.counter === 2) {
      className = "white";
    }
    if (this.props.counter === 3) {
      className = "white";
    }
    if (this.props.counter === 4) {
      className = "white";
    }
    if (this.props.counter === 5) {
      className = "white";
    }
    if (this.props.counter === 6) {
      className = "white";
    }
    if (this.props.counter === 7) {
      className = "white";
    }
    if (this.props.counter === 8) {
      className = "white";
    }

    if(this.state.pressed){
      className += " pressed";
    }
    return <div className={className} >{this.props.noteName}</div>;
  },

  thisKeyPressed: function () {
    var keys = KeyStore.all();
    return keys.indexOf(this.props.noteName) !== -1;
  },

  _onChange: function () {
    var pressed = this.thisKeyPressed();
    if (pressed) {
      this.note.start();
    } else {
      this.note.stop();
    }
    this.setState({ pressed: pressed });
  }
});
