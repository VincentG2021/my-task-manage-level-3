// FRONT END FILE TO INTERACT WITH THE DOM

let AddTaskBtn = document.querySelector('.boton')
let SearchArea = document.querySelector('#tareaInput')

// let agregarBtn = document.querySelector('.boton')
// let input = document.getElementById('tareaInput').value

// const addTarea = () => {
//   fetch('api/addtask', {
//     method: 'POST', // or 'PUT'
//     headers: {
//     'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({body: "HOLA que tal"}),
//      })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });
// }

const AddTask = (DataToSend) => {
  fetch('/api/addtask', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(DataToSend),

  })
  console.log("Hello,")
}

   


  // ENTRY POINTS

  AddTaskBtn.addEventListener('click', (event) => {
    console.log(SearchArea.value)
    let TaskName = document.querySelector('#tareaInput').value
    AddTask({ data: TaskName });
});

  // AddTaskBtn.addEventListener('click', (event) => {
  //   // event.preventDefault();
  //   let input = document.getElementById('tareaInput').value
  // console.log(input)
  // addTarea();
  // console.log("New task added")
  // alert("Task added to your tasks list")
  // });
