import React from 'react'
import ReactDOM from 'react-dom'

class Bot extends React.Component {
  constructor() {
    super()
    this.state = { mountedComponent: null}
    this.closeWindow = this.closeWindow.bind(this)
  }
  closeWindow() {
    if (this.state.mountedComponent) {
      this.setState({ mountedComponent: null })
    } else {
      this.setState({ mountedComponent: <BotContent/> })
    }
  }
  render() {
    return (
      <div id="botBox">
        <BotHeader handleCloseWindow={this.closeWindow}/>
        {this.state.mountedComponent}
      </div>
    )
  }
}


class BotHeader extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div id="botHeader" onClick={this.props.handleCloseWindow}> Brad's Bot</div>
    )
  }
}


/*
 {this.props.text.split('*newline*').map(function(result) {
 // WHEN CALLING A WRAPPER REACT COMPONENT MULTIPLE TIMES, EACH INSTANCE
 //   MUST HAVE A UNIQUE KEY
 return <ListItemWrapper key={result} data={result}/>;
 })}
 */

class BotContent extends React.Component {
  constructor() {
    super()
    this.submitQuestion = this.submitQuestion.bind(this)
  }
  submitQuestion() {
    console.log('submitting question')
    // const question = document.getElementById('question').value
    // this.setState({ val : this.state.val + 1 })
    // ReactDOM.render(<Question txt={question} />, document.getElementById('botLog'))
  }
  render() {
    return(
      <div id="botContent">
        <div id="botConversation"> Hello World</div>
        <input type="text" id="inputBox" placeholder="Brads favourite team?"/>
        {/*<button type="button" id="submitQuestion" onClick={this.submitQuestion}> Send </button>*/}
      </div>
    )
  }
}

// var ListItemWrapper = React.createClass({
//   render: function() {
//     return <p>{this.props.data}</p>;
//   }
// })

// class Question extends React.Component {
//   constructor(){
//     super()
//   }
//   render(){
//     return (
//       React.DOM.div({className:"num1"}, this.props.text)
//       // <p id="botQuestion">{this.props.txt}</p>
//     )
//   }
// }

export default Bot