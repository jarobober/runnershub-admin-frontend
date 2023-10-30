<script setup lang="ts"></script>

<template>
  <v-container>
    <v-row justify="center" class="my-12">
      <img
        src="@/assets/images/runnershub-logo.png"
        alt="RunnersHUB logo"
        class="auth-layout__logo"
      />
    </v-row>
    <slot></slot>
  </v-container>
</template>

<styles lang="scss">
.auth-layout {
  &__logo {
    width: 300px;
  }
}
</styles>
