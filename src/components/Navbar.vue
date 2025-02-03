<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">Alexandre Wolf</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="scrollToSection('about')">À propos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="scrollToSection('skills')">Compétences</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="scrollToSection('projects')">Projets</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="scrollToSection('contact')">Contact</a>
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
import { useRoute, useRouter } from 'vue-router'
import { onMounted, nextTick } from 'vue'

const route = useRoute()
const router = useRouter()

const scrollToSection = (id: string) => {
  if (route.path !== '/') {
    router.push('/').then(() => {
      nextTick(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    })
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  if (route.hash) {
    const id = route.hash.replace('#', '')
    nextTick(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    })
  }
})
</script>

<style scoped>
body {
  padding-top: 70px;
}
</style>
