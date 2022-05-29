import TodoList from "./components/TodoList"
import Textfield from '@atlaskit/textfield'
import Button from '@atlaskit/button'
import { useCallback, useState, useEffect } from "react"
import { v4 } from 'uuid'

function App() {
  //state(dữ liệu nội tại của components)
  //props(dữ liệu được truyền ở bên ngoài vào, từ parents)
  

  const [todoList, setTodoList] = useState([]) //array có 2 element(stateTodoList dùng để lưu trữ, setTodolist là 1 method để cập nhật)
  const [textInput, setTextInput] = useState("")

  const onTextInputChange = useCallback((e) => {

      setTextInput(e.target.value)

  }, [])

  const onHandleAdd = useCallback((e) => {
    //Thêm giá trị texInput vào danh sách todoList
    setTodoList([
      {
        id: v4(),
        name: textInput,
        isCompleted: false,
      },
        ...todoList,
    ])
    //Set lại ô text field sau khi thêm việc
    setTextInput("")
  }, [textInput, todoList])

  const onCheckBtnClick = useCallback((id) =>{
    setTodoList(prevState => prevState.map(todo => 
        todo.id === id ? {...todo, isCompleted:true} : todo))
  }, [])

  //Lấy ra giá trị TODO_APP_ID trong localstorage
  useEffect(()=> {
    const storageItemTodo = localStorage.getItem(TODO_APP_STORAGE_KEY)
    if(storageItemTodo){
      setTodoList(JSON.parse(storageItemTodo))
    }
  }, [])

  const TODO_APP_STORAGE_KEY = 'TODO_APP_ID'
  //Lưu giá trị của todoList vào LocalStorage dưới dạng Json
  useEffect(()=> {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList))
  }, [todoList])

  return (
    <>
      <h3> Danh Sách Todolist </h3>
      <Textfield
        name="todo-textfield"
        placeholder="Thêm việc cần làm vào đây..."
        elemAfterInput={
          <Button 
            isDisabled={!textInput} 
            appearance="primary"
            onClick={onHandleAdd}
          >
            Thêm
          </Button>
        }
        css={{
          padding: "2px 4px 2px",
        }}
        value={textInput}
        onChange={onTextInputChange}
      >
      </Textfield>
      {/*Nhận components Todolist*/}
      {/* Truyền todoList State qua 1 prop TodoProp */}
      <TodoList propTodoList={todoList} propCheckBtnClick={onCheckBtnClick} />
    </>
  )
  
  
}

export default App;
