<script setup lang="ts">
import AuthFormCard from '@/modules/auth/components/AuthFormCard.vue'
import BaseForm from '@/components/base/BaseForm.vue'

const loginFormConfig = [
  {
    label: 'Email',
    component: 'v-text-field',
    key: 'email',
    type: 'email',
    placeholder: 'Enter your email'
  }
]
</script>

<template>
  <v-row justify="center">
    <v-col cols="5">
      <v-row>
        <v-col><h1 class="text-h2">Login</h1></v-col>
      </v-row>
      <auth-form-card class="my-12">
        <base-form :config="loginFormConfig"></base-form>
      </auth-form-card>
    </v-col>
  </v-row>
</template>
