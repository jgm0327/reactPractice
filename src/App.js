import { Component } from "react";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";

class App extends Component{

  render(){
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
          <ExpenseForm/>
        </div>

        <div style={{width: '100%', backgroundColor: 'white', padding: '1rem'}}>
          <ExpenseList/>
        </div>
        
        <div style={{display: 'flex', justifyContent: 'end', marginTop: '1rem'}}>
          총지출:
          <span>원</span>
        </div>
      </main>
    )
  }
}

export default App;