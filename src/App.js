import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  // All Classes must have a "constructor", in React we always pass "props"
  constructor(props) {
    // Remember that if we "extend" a "class" of a "class" we have to call the "super()" method. Just pass it "props" as well.
    super(props);
    // class-based Components allow us to have "state"! And this is why/when we use class-based components.
    this.state = {
      text: '',
      todos: [],
      isClicked: false
    };
  }
    // class-based components also allow us to have methods attached to them
    handleClick = () => {
      this.setState({
        isClicked: true,
        todos: [...this.state.todos,(this.state.text)],
        text: ''
      })
      console.log(this.state.todos)
    }

    handleDelete = (index) => ()=> {
      const todosCopy = [...this.state.todos]
      todosCopy.splice(index,1)

      this.setState({
        todos: todosCopy
      })
            console.log("delete!" + index)
    }

       // class-based components also allow us to have methods attached to them
       onChange = e => {
        this.setState({
          text: e.target.value
        })
      }

    // class-based components must have the "render()" method in them for React to call them as an IIFE (Immediately Invoked Function Expression)
    render() {
      // and the "render()" method must have a return
      return (
        <div>
          <button onClick={this.handleClick}>{this.state.isClicked ? 'true' : 'false'}</button>
          <input value={this.state.text} onChange={this.onChange}></input>
          {this.state.todos.map((todo,index) => <div key={index} onClick={this.handleDelete(index)}><button>delete</button>{todo}</div> )}
        </div>
      );
    }
  }

export default App;
