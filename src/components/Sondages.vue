<script setup>
import axios from 'axios'

axios
  .get('http://localhost/web/laravel/sondage-laravel/public/api/sondages')
  .then((response) => {
    if (response.status === 200) {
      fluxjson.question = response.data.question
      fluxjson.fluxjsonOptions = response.data.fluxjsonOptions

      state.value = stateResult.WAITING_VOTE
    } else {
      errorMessage.value = 'fluxjson can not be loaded.'
      state.value = stateResult.ERROR
    }
  })
</script>

<template>
  <div class="col">
    <div class="card bg-light">
      <div id="titre-sondage" class="card-header">
        <div class="row g-3 align-items-center">
          <div class="d-flex justify-content-between align-items-center">
            <label>Titre du sondage</label>
            <button class="btn bi-x-square-fill ml-auto" type="button"></button>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="form-row mb-3">
          <h5>Description</h5>
          <label class="form-label" for="inputNewParameter"
            >Les questions et les choix.</label
          >
          <a href="#">Voir</a>
        </div>
        <!-- VirtualMachineElement component -->
      </div>
    </div>
  </div>
</template>
