import React from "react";
import styles from './ToDoApp.module.css'


class TodoList extends React.Component{
 
    render(){   
        return(
            <ul className="list-group list-group-flush">
            {
                this.props.users.map((value, index)=>{
               return (
               <React.Fragment key={index}>
               <li className={styles.form}>{value}
               <button className={styles.btn} onClick={()=>{this.props.deleteTodo(index)}}>X</button>
               </li>     
               </React.Fragment>
               )
                })
               }
            </ul> 
            );
    }
}
export default TodoList;