<template>
  <div class="project-detail">
    <!-- Hero Section -->
    <div 
      class="hero-section" 
      :style="{ backgroundImage: `url(${currentProject.heroImage})` }"
    >
      <div class="overlay">
        <div class="container">
          <h1 class="text-white">{{ currentProject.title }}</h1>
          <div class="badges">
            <span class="badge bg-primary me-2">{{ currentProject.type }}</span>
            <span 
              v-for="tech in currentProject.mainTechnologies" 
              :key="tech" 
              class="badge bg-secondary me-2"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Content -->
    <div class="container py-5">
      <!-- Description -->
      <section class="mb-5">
        <h2 class="text-white mb-4">Description du projet</h2>
        <div class="bg-dark p-4 rounded">
          <p class="text-light">{{ currentProject.description }}</p>
        </div>
      </section>

      <!-- Technologies -->
      <section class="mb-5">
        <h2 class="text-white mb-4">Technologies utilisées</h2>
        <div class="row g-3">
          <div 
            v-for="tech in currentProject.technologies" 
            :key="tech.name" 
            class="col-md-3"
          >
            <div class="tech-card bg-dark p-3 rounded">
              <i :class="tech.icon + ' text-primary fs-3'"></i>
              <h5 class="text-white mt-2">{{ tech.name }}</h5>
              <p class="text-light mb-0">{{ tech.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Gallery -->
      <section class="mb-5">
        <h2 class="text-white mb-4">Galerie</h2>
        <div class="row g-4">
          <div 
            v-for="(image, index) in currentProject.gallery" 
            :key="index" 
            class="col-md-4"
          >
            <div class="gallery-item">
              <img 
                :src="image.url" 
                :alt="image.caption" 
                class="img-fluid rounded"
              >
              <p class="text-light mt-2">{{ image.caption }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Details -->
      <section class="mb-5">
        <h2 class="text-white mb-4">Détails du projet</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="bg-dark p-4 rounded h-100">
              <h3 class="text-primary h5">Défis</h3>
              <p class="text-light">{{ currentProject.challenges }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bg-dark p-4 rounded h-100">
              <h3 class="text-primary h5">Solutions</h3>
              <p class="text-light">{{ currentProject.solutions }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="bg-dark p-4 rounded h-100">
              <h3 class="text-primary h5">Résultats</h3>
              <p class="text-light">{{ currentProject.results }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const projectId = parseInt(route.params.id as string)

const projectsData = [
  {
    id: 1,
    title: 'Application de Gestion de Tâches',
    type: 'Projet Solo',
    mainTechnologies: ['Vue.js', 'Node.js', 'MongoDB'],
    heroImage: 'https://picsum.photos/seed/1/1920/1080',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    technologies: [
      { name: 'Vue.js', icon: 'bi bi-code-slash', description: 'Framework frontend' },
      { name: 'Node.js', icon: 'bi bi-server', description: 'Backend runtime' },
      { name: 'MongoDB', icon: 'bi bi-database', description: 'Base de données NoSQL' },
      { name: 'Express', icon: 'bi bi-diagram-3', description: 'Framework backend' }
    ],
    gallery: [
      { url: 'https://picsum.photos/seed/11/800/600', caption: 'Dashboard principal' },
      { url: 'https://picsum.photos/seed/12/800/600', caption: 'Gestion des tâches' },
      { url: 'https://picsum.photos/seed/13/800/600', caption: 'Interface mobile' }
    ],
    challenges: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    solutions: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    results: 'Duis aute irure dolor in reprehenderit in voluptate velit.'
  },
  // Add more projects with different seed values for unique images
]

const currentProject = computed(() => {
  return projectsData.find(p => p.id === projectId) || projectsData[0]
})
</script>

<style scoped lang="scss">
.hero-section {
  height: 50vh;
  background-size: cover;
  background-position: center;
  position: relative;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
  }
}

.tech-card {
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.gallery-item {
  img {
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>