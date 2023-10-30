<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
</script>

<template>
  <v-app>
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </v-app>
</template>
