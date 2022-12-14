

<template>
   <app-title></app-title>
        
      <ul v-if="todos.length">
        <list-todos></list-todos>
      </ul>
      <p v-else>No hay tareas que mostrar</p>
      <add-todos></add-todos>
      
      <del-all-todos></del-all-todos>
</template>

<script>
import AddTodos from './components/AddTodos.vue';
import AppTitle from './components/AppTitle.vue';
import ListTodos from './components/ListTodos.vue';
import DelAllTodos from './components/DelAllTodos.vue';
import { store } from './store';

export default {
  components: {
    AppTitle,
    ListTodos,
    AddTodos,
    DelAllTodos
  },
  data() {
      return {
        todos: store.state.todos
      }
    },
    methods: {
      
    }
}
</script>