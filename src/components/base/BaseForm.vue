<script setup lang="ts">
defineProps({
  config: {
    type: Array,
    required: true
  }
})
</script>
<template>
  {{ config }}
  <v-form>
    <component v-for="item in config" :is="item.component" :key="item.key" />
  </v-form>
</template>
