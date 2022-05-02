<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
const selectionHandler = console.log
</script>

<template>
  <HelloWorld :selection-handler="selectionHandler" />
</template>