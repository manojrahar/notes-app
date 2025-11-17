import React, { useState } from "react";


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  
  const [task, setTasks] = useState([])

  const submitHandler = (e) => {
      e.preventDefault();

      const copyTask = [...task]; 
      copyTask.push({title, details})
      setTasks(copyTask)
      setTitle('')
      setDetails('')
    };

    const deleteNote = (idx) => {
      const copyTask = [...task]

      copyTask.splice(idx,1) 
      
      setTasks(copyTask)
    }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e ) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 items-start p-10 flex-col gap-4 lg:border-r-2"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        {/* PEHLE WALA INPUT */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 w-full border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        {/* DETAIL WALA INPUT */}
        <textarea
          type="text"
          placeholder="Write Details here"
          className="px-5 h-32 w-full py-2 outline-none border-2 rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        ></textarea>
        <button className="px-5 py-2 w-full outline-none bg-white text-black rounded active:scale-95">
          Add note
        </button>
      </form>
      <div className="lg:w-1/2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 overflow-auto h-[90%]">
          {task.map(function(elem,idx) {
            return <div key={idx} className="flex justify-between flex-col items-start  relative h-52 w-40 rounded-xl pt-9 pb-4 px-4  text-black bg-cover bg-[url('https://imgs.search.brave.com/Sy8UrNAAls611Pvu8Qi3_FVBoZyXVIsAj5GPLUEsNik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3Ny9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')]">
              <h3 className="leading-tight font-xl font-bold">{elem.title}</h3>
              <p className="mb-5 leading-tight font-medium text-gray-500">{elem.details}</p>
              <button onClick={() => {
                deleteNote(idx)
              }} className="w-full text-white bg-red-600 py-1 text-xs rounded font-bold cursor-pointer active:scale-95">Delete Note</button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
