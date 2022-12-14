<template>
    
        <ul v-if="todos.length">
    <list-todos></list-todos>
  </ul>
   
</template>

<script>
import {store} from '../store'
export default {
  data() {
    return {
       todos: store.state.todos
    }
    },
    methods:{
        
    }
}
</script>

<style>

</style>