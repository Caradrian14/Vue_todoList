<template>
    <div>
        <input v-model="newTodo">
        <button @click="addTodo">Añadir</button>
    </div>
</template>

<script>
import { store } from '../store';

   export default {
    methods:{
        addTodo() {
            if (this.newTodo) {
              store.addTodo(this.newTodo);
              this.newTodo='';  
            }
          }
    }
   }
</script>