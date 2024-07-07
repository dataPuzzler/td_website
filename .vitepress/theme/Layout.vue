<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './Home.vue'




// https://vitepress.dev/reference/runtime-api#usedata
const { frontmatter } = useData()
</script>

<template>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.index" />
      <Content class="prose mt-5" v-else />
    </main>
</template>
