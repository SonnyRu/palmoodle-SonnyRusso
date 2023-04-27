<script setup></script>

<template>
  <div class="container-fluid">
    <div class="card mt-3">
      <div class="card-header">
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="inputNumberOfVM">Déjà membre ? Connectez-vous.</label>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"></div>

        <h6>Email :</h6>
        <input
          id="email"
          type="text"
          placeholder="Enter email"
          class="input-control"
          required
        />
        <h6>Password :</h6>
        <input
          id="pswd"
          type="password"
          placeholder="Password"
          class="input-control"
          required
        /><br /><br />

        <a href="#"><button id="button-connecter">Se connecter</button></a>
      </div>
    </div>
  </div>
</template>
