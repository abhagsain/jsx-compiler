import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
  constructor(){
    super();
    this.state = {error: "", code_input: ``,compiled_code: ""}
  }

  
  onCodeUpdate = ({target: {value}}) => {
    try {
      
      let code = value;
      this.setState({
        compiled_code: window.Babel
        .transform(code, { presets: ['es2015', 'react']})
        .code,
        error: ''
      })
    } catch (err) {
      this.setState({error: err.message})
    }
  }
  render() {
    const {error,code_input,compiled_code} = this.state;
    return (
      <div >
      <div className="header">
      <h2>Live JSX Compiler Using Babel</h2>
      <br></br>
      <header className="error">{error}</header>
      </div>
      <div className="container">
        <div className="code_area">
          <textarea name="text_area"  placeholder="/* Add your JSX Code here */" rows="30" cols="90" onChange={this.onCodeUpdate} defaultValue={code_input}/>
        </div>
        <div className="pre_area">
          <pre>{compiled_code}</pre>
        </div>
      </div>
      <div>
      
      <div className="copy">
      <h2>Copy Paste this code</h2>
      <br></br>
      <pre style={{background: "#444", color: "white", padding: "20px"}}>
      {`  
      function Header(props){
        return <header>{props.title}</header>
      }
      function App(){
        return <div style={{background: "blue"}}><h1>Babel is going to compile this </h1> <Header title="I'm a prop" /></div>
      }`}
      </pre>

      </div>
      </div>
      </div>
    
    )
  }
}
