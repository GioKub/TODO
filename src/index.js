import React from 'react'
import ReactDom from 'react-dom'

class TodoApp extends React.Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = ({
      text: '', items: []
    })
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    //prevents from reloading page on every click
    //and losing progress/items
    e.preventDefault()
    //ignores click if input filed is empty
    if (this.state.text.length===0) {
      return;
    }
    const items = this.state.items.concat(this.state.text)
    this.setState({
      items: items,
      text: ''
    });
  }

  render(){
    return(
      <div>
        <ul>
        {this.state.items.map(item => (<li>{item}</li>))}
      </ul>
        <form onSubmit={this.handleSubmit}>
          {/*need to provide value here becuase otherwise previous input will
          stay inside input field but entered value will be ''*/}
          <input value={this.state.text} onChange={this.handleChange}></input>
          <button>add</button>
        </form>
      </div>
    )
  }
}

ReactDom.render(<TodoApp/>, document.getElementById('root'))