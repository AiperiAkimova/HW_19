import React from "react";
import TodoList from "./ToDoList"
import styles from './ToDoApp.module.css'

class TodoApp extends React.Component {
    constructor(){
      super();
      this.state={
        inputData:"",
        todoItems:[]
      }
    }
    changeTodoInput = (event) =>{
      this.setState({inputData:event.target.value})
    }
    addTodo = (event) =>{
      if(this.state.inputData!==''){
        let newTodoItems=[...this.state.todoItems,this.state.inputData];
        this.setState({todoItems:newTodoItems, inputData:""}) 
      }
    }
    deleteTodo =(index) =>{
      let todoItems=[...this.state.todoItems];
      let newTodoItems=todoItems.filter((value, key)=>{
         return index!==key
      })
      this.setState({todoItems:newTodoItems})
    }
    render(){
    return (
     <div className={styles.container}>
       <div>
    
           <h3>Todo App</h3>
              <div className={styles.form}>
                 <input type="text" className={styles.input} onChange={this.changeTodoInput} value={this.state.inputData}/>
                 <button onClick={this.addTodo}>Add</button>
                  
              </div> 
                   <TodoList users={this.state.todoItems} deleteTodo={this.deleteTodo}/>
         </div>
       </div>
   
    );
    }
  }
  export default TodoApp;