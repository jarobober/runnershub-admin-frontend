<script setup lang="ts">
import AuthFormCard from '@/modules/auth/components/AuthFormCard.vue'
</script>

<template>
  <v-row justify="center">
    <v-col cols="5">
      <v-row>
        <v-col><h1 class="text-h2">Login</h1></v-col>
      </v-row>
      <auth-form-card class="my-12" />
    </v-col>
  </v-row>
</template>
