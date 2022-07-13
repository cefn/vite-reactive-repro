<template>
  <Child />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Child from "./Child.vue";

export default defineComponent({
  components: {
    Child,
  },
});
</script>
