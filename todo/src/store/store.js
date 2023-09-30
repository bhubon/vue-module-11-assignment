import { defineStore } from "pinia";
import { ref, reactive, computed } from 'vue'

const todoStore = defineStore('todoStore', () => {

    const todoList = ref([
        { title: 'Live Test', status: 0 },
        { title: 'Assignemnt', status: 0 },
        { title: 'Quize', status: 1 },
    ]);

    const addTodoItem = (data) => {
        let item = {
            title: data,
            status: 0
        }
        todoList.value.push(item)
    };

    const markComplete = (task) => {
        task.status = 1
    }

    const markIncomplete = (task) => {
        task.status = 0
    }

    const deleteTask = (index) => {
        todoList.value.splice(index, 1);
    }

    return { todoList, addTodoItem, markComplete, markIncomplete, deleteTask }


});

export { todoStore }