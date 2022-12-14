<template>
    <div>
        <br><button @click='delTodos'>Borrar toda la lista</button>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    methods:{
        delTodos() {
            alert("Vas a borra la lista");
            if(confirm('¿Deseas borrar toda la lista de cosas a hacer?')) {
              store.delAllTodos();
            }
          }
    }}
</script>