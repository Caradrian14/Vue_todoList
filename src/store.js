import axios from 'axios'


import { reactive } from 'vue';

export const store={
  debug: true,
  state: reactive({
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
  }
  
}