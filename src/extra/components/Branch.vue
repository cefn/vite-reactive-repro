<template>
  <Leaf :dog-image-url="dogImageUrl" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Leaf from "./Leaf.vue";
export default defineComponent({
  components: {
    Leaf,
  },
  props: {
    dogImageUrl: {
      type: URL,
      required: true,
    },
  },
});
</script>
