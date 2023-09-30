<script setup>
import { todoStore } from '../store/store'
const todo = todoStore();

function incompleteTasksLenght() {
    return todo.todoList.filter((item) => item.status === 1).length;
}

</script>
<template>
    <h2 class="text-base mb-2">Remain Tasks ({{ incompleteTasksLenght() }})</h2>
    <template v-for="(task, index) in todo.todoList" :key="index" class="">
        <div class="flex mb-4 items-center" v-if="task.status == 0">
            <p class="w-full text-grey-darkest">{{ task.title }}</p>

            <!-- <div class="checkbox-container"> -->
            <input type="checkbox" @click="todo.markComplete(task)">
            <div class="custom-checkbox"></div>
            <!-- </div> -->


            <button class="flex-no-shrink p-1 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
                @click="todo.deleteTask(index)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
        </div>
    </template>
</template>


<style scoped></style>