<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

function isActiveRoute(value) {
  return route.name === value
}
</script>

<template>
  <header>
    <nav
      id="navheader"
      class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark"
    >
      <div class="container-fluid">
        <a
          id="titre_1"
          class="nav-link"
          :class="{ active: isActiveRoute('Global') }"
          href="/"
          @click="changeRoute('Global')"
          ><span class="navbar-brand">Palmoodle</span></a
        >
        <div id="navbarNav" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <nav class="navbar navbar-expand-lg fixed-top row"></nav>
          </ul>
          <div class="form-check form-switch">
            <a href="/Connexion"
              ><button id="connexion-button">Se Connecter</button></a
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
