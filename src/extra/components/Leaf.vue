<template>
  <img :src="dogImageUrl.toString()" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    dogImageUrl: {
      type: URL,
      required: true,
    },
  },
});
</script>
