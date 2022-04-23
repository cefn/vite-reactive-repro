<template>
  <img v-if="displayableImageUrl" :src="displayableImageUrl.toString()" />
  <p v-if="!displayableImageUrl">Image not loaded, yet</p>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useCache } from "../api/hook";
import { populateCache } from "../api/cache";
import { getRandomImageUrl } from "../api/dog";

export default defineComponent({
  setup() {
    const randomImageUrlCache = useCache<string>();
    populateCache(randomImageUrlCache, getRandomImageUrl());

    const displayableImageUrl = computed(() => {
      const { isLoading, data, error } = randomImageUrlCache.cache;
      try {
        if (data && !(isLoading || error)) {
          return new URL(data);
        }
      } catch (err) {
        console.log(err);
      }
      return null;
    });

    return { randomImageUrlCache, displayableImageUrl };
  },
});
</script>
