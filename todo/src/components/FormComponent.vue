<script setup>
import { ref } from 'vue';

import { todoStore } from '../store/store'
const todo = todoStore();

let title = ref('');

function addItem() {
    todo.addTodoItem(title.value)
    title.value = '';
}

</script>
<template>
    <div class="flex mt-4">
        <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo"
            v-model="title">
        <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
            @click="addItem()">Add</button>
    </div>
</template>


<style scoped></style>