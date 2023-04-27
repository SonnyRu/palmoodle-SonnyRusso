<script setup>
import Sondages from './Sondages.vue'
</script>

<template>
  <main>
    <div class="container-fluid"></div>

    <div class="container-fluid">
      <div class="card mt-3">
        <div class="card-header">
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="inputNumberOfVM">Tous les sondages</label>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"></div>
          <!-- VirtualMachine component -->
          <Sondages />
        </div>
      </div>
    </div>
  </main>
</template>
