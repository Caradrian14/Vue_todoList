import axios from 'axios'


import { reactive } from 'vue';

const url='http://localhost:3000';

export const store={
  debug: true,
  

  state: reactive({
    todos: []
  }),
  delTodo(index){
    var id=this.state.todos[index].id;
    axios.delete(url+'/todos/'+id)
      .then(response => this.state.todos.splice(index,1) )
      .catch(response => alert('Error: no se ha borrado el registro. '+response.message))
  },
  addTodo(title) {
    axios.post(url+'/todos', {title: title, done: false})
      .then(response => this.state.todos.push(response.data)
      )
      .catch(response => alert('Error: no se ha añadido el registro. '+response.message))
  },
  loadData() {
    axios.get(url+'/todos')
      .then(response => response.data.forEach(element => {
        this.state.todos.push(element);
      }))
      .catch(response => {
        if (!response.status) {// Si el servidor no responde 'response' no es un objeto sino texto
          alert('Error: el servidor no responde');
          console.log(response);
        } else {
          alert('Error '+response.status+': '+response.message);          
        }
      })
  },
  delAllTodos(){
    this.state.todos.forEach(element => {
        this.delTodo(element.id)
    })
  }

  /*state: reactive({
    todos: [
        { 
            id: 1,
            title: "Learn JavaScript", 
            done: false 
        }, { 
            id: 2,
            title: "Learn Vue", 
            done: false 
        }, { 
            id: 3,
            title: "Play around in JSFiddle", 
            done: true 
        }, { 
            id: 4,
            title: "Build something awesome", 
            done: true 
        }
        ]
  }),
  delTodo(index){
    this.state.todos.splice(index, 1);
  },
  addTodos(newItem){
    this.state.todos.push(newItem);
  },
  delAllTodos(){
    this.state.todos.splice(0, this.state.todos.length)
  }*/
  
}