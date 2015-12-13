var Organ = React.createClass({
  componentDidMount: function () {
    KeyStore.addChangeListener(this._onChange);
  },

  getInitialState: function () {
    return { notes: KeyStore.all() };
  },

  render: function () {
    var counter = 0;
    return (
      <div>
        <div className="keys group">
        {
          Object.keys(TONES).map(function (noteName) {
            counter+=1;
            return (<NoteKey noteName={noteName} key={noteName} counter={counter}/>);
          })
        }
        </div>
        <Recorder />
        <JukeBox />
      </div>
   );
  },

  _onChange: function () {
    this.setState({notes: KeyStore.all()});
  }
});
