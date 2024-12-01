import React from 'react'

function AddTask({handleSubmit, edited, task, setTask}) {
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" placeholder="Task Name" value={task} autoComplete="off" onChange={(e)=>setTask(e.target.value)} />
            <button type="submit">{edited ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}

export default AddTask