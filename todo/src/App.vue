<script setup>
import FormComponent from './components/FormComponent.vue';
import Complete from './components/Complete.vue';
import Incomplete from './components/Incomplete.vue';

import { todoStore } from './store/store'
const todo = todoStore();

</script>

<template>
  <div class="w-full flex items-center justify-center bg-teal-lightest font-sans h-screen">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <div class="mb-4">
        <h1 class="text-grey-darkest">Todo List</h1>
        <FormComponent />
      </div>
      <div>
        <Incomplete />
        <div class="border-b-2 border-indigo-500 mb-8 mt-8"></div>
        <Complete />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
