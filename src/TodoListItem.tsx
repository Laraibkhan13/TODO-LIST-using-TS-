import { ITask } from './Interface'

interface props{
    task:ITask;
    completeTask(taskNametoDelete:string):void
}
const TodoListItem = ({task,completeTask}:props) => {

    

  return (
    <div>
        <div className=' w-[800px] border border-black rounded-xl mx-auto p-5 font-bold text-xl my-2 flex justify-between' >
            <div>
            <h2>Task: {task.taskName}</h2>
            <h2>Deadline: {task.deadline}</h2>
            </div>

            <div>
            <button className=' w-[100px] bg-gray-400 rounded-xl border border-gray-500 text-sm p-1 my-3'
            onClick={()=>{completeTask(task.taskName)}}
            >Delete</button>
            </div>
            
            
        </div>
    </div>
  )
}

export default TodoListItem