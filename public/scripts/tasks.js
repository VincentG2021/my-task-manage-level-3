// FRONT END FILE TO INTERACT WITH THE DOM

const agregarBtn = document.querySelector('.boton')

// const gettareaInput = document.querySelector('#tareaInput')

const addTarea = (data) => {
    //BUGGING :
let input = document.getElementById('tareaInput').value
  fetch('api/addtask', {
       method: 'POST', // or 'PUT'
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(data),
     })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
   


  // ENTRY POINTS
  agregarBtn.addEventListener('click', (event) => {
    // event.preventDefault();
    let input = document.getElementById('tareaInput').value
    console.log(input)
    addTarea({data: input});
    console.log("New task added")
    alert("Task added to your tasks list")
  });
