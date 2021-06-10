// FRONT END FILE TO INTERACT WITH THE DOM

let AddTaskBtn = document.querySelector('.boton')
let SearchArea = document.querySelector('#tareaInput')
let LoadTaskBtn = document.querySelector('#btn-load')
let list = document.querySelector('#lista')

const insertRow = (infos) => {
  let insertedRow = `<li><a href="#">${infos}</a></li>`;
  list.insertAdjacentHTML("beforeend", insertedRow)
}


const AddTask = (DataToSend) => {
  fetch('/api/addtask', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(DataToSend),

  })
  console.log("AddTask function ok")
}

const getfetchTask = () => {
  fetch('/api/gettask', {
  method: 'POST', // or 'PUT'
  headers: {
  'Content-Type': 'application/json',
  },
  })
  .then(response => response.json())
  .then(data => {
  list.innerHTML="";
  console.log('Success:', data);
  data.dataKey.forEach(chose => {
    insertRow(chose)
  })
})
  .catch((error) => {
  console.error('Error:', error);
  });
  }

  


  // ENTRY POINTS

  AddTaskBtn.addEventListener('click', (event) => {
    alert("adding btn ok")
    console.log(SearchArea.value)
    let TaskName = document.querySelector('#tareaInput').value
    AddTask({ dataKey: TaskName });
   
    insertRow(TaskName)
});

  LoadTaskBtn.addEventListener('click', (event) => {
  // event.preventDefault();
  console.log("load btn ok");
  getfetchTask();
  });
  
