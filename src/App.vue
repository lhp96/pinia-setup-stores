<template>
  <div>
    <Todo></Todo>
  </div>
</template>

<script setup lang="ts">
import Todo from "./components/Todo.vue";
import { useTodoStore } from "./stores/index";
const data = useTodoStore();
</script>
<style scoped></style>
