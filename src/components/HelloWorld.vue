<script setup lang="ts">
import { ref, watch } from 'vue'
const props = defineProps<{ selectionHandler: (selection:boolean) => unknown }>()
const myValue = ref(false);
watch(myValue, async (newMyValue) => {
  props.selectionHandler(newMyValue);
});
</script>

<template>
  <p>This checkbox is {{myValue? 'checked' : 'not checked'}}</p>
  <input
    type="checkbox"
    id="myId"
    v-model="myValue"
  />
</template>