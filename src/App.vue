<script setup>
import { RouterView } from 'vue-router'
import MenuBar from './components/MenuBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container-fluid">
    <MenuBar />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css';
</style>
