import React from 'react'
import TodoItem from "./TodoItem"

export default function TodoList({propTodoList, propCheckBtnClick}) {
  
  return (
    <>
        {
        
        //Map qua tất cả phần tử trong Prop,
        propTodoList.map(todoItem =>  
          <TodoItem key={todoItem.id} propTodoItem={todoItem} propCheckBtnClick={propCheckBtnClick} />
        
        )
        }
    </>
  )
}
