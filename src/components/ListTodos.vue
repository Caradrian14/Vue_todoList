<template>
    <div>
        <li v-for="(elem,index) in todos" @dblclick="delTodo(index)">
                    <label>
                    <input type="checkbox" v-model="elem.done">
                    <del v-if="elem.done">
                        {{ elem.title }}
                    </del>
                    <span v-else>
                        {{ elem.title }}
                    </span>
                    </label>
                </li>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    template:   `<li v-for="(elem,index) in todos" @dblclick="delTodo(index)">
                    <label>
                    <input type="checkbox" v-model="elem.done">
                    <del v-if="elem.done">
                        {{ elem.title }}
                    </del>
                    <span v-else>
                        {{ elem.title }}
                    </span>
                    </label>
                </li>`,
    data() {
        return {
            todos: store.state.todos
        }
        },
    methods: {
        delTodo(index){
            store.delTodo(index)
        }
    }
}
</script>

<style>

</style>