
import './App.css'
import { ChangeEvent, FC, useState } from 'react'
import { ITask } from './Interface'
import TodoListItem from './TodoListItem';

const App:FC=()=> {

  const[task,setTask]=useState<string>("");
  const[deadline,setDeadline]=useState<number|null>(null);
  const[TodoList,setTodoList]=useState<ITask[]>([]);

  function changeHandler(event:ChangeEvent<HTMLInputElement>):void
  {
    if(event.target.name==="task")
    {
      setTask(event.target.value)
    }
    else if(event.target.name==="deadline"){
      setDeadline(Number(event.target.value))
    }
    
  }

  function completeTask(taskNametoDelete:string):void{
    setTodoList(TodoList.filter((task)=>{
      return task.taskName!=taskNametoDelete
    }))
  }


  const isButtonDisabled = task.trim() === '' || deadline === null;
  function addTask():void{
      const newtask={taskName:task,deadline:deadline};
      setTodoList([...TodoList,newtask]);
      setTask("")
      setDeadline(null)
      console.log(TodoList)
  }

  return (
    <div className=' m-10'>
     <h2 className=' text-center font-bold text-2xl'>To do List</h2>

     <div className=' flex flex-col w-[700px] gap-5 items-center mx-auto my-10'>

      <input type='text' 
      placeholder='Task...' 
      name="task"
      value={task}
      className=' p-2 border border-black rounded-lg'
      onChange={changeHandler}>
      </input>

      <input type='number' 
      placeholder='Deadline in Number'
      name="deadline"
      value={deadline || ""}
      className=' p-2 border border-black rounded-lg'
      onChange={changeHandler}>
      </input>

      <button className=' bg-black w-20 font-bold text-sm text-gray-500 border rounded-lg py-2 cursor-pointer'
      disabled={isButtonDisabled}
      
      onClick={addTask}>
        Add Task</button>

        

     </div>
     <div >
          {TodoList.map((task:ITask,key:number)=>(
            <TodoListItem key={key} task={task} completeTask={completeTask}></TodoListItem>
          ))}
        </div>
    </div>
  )
}

export default App
