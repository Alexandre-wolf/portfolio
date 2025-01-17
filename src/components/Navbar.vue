<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">Alexandre Wolf</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/#about">À propos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#skills">Compétences</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#projects">Projets</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/#contact">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/apprentissages">Apprentissages</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>