<template>
  <div class="learning py-5">
    <div class="container">
      <h1 class="text-white mb-4">Mes Apprentissages</h1>
      
      <div class="timeline-vertical">
        <div v-for="(learning, index) in learnings" :key="index" class="timeline-item">
          <div class="timeline-content bg-dark p-4 rounded">
            <h3 class="text-primary">{{ learning.title }}</h3>
            <p class="text-light mb-2">{{ learning.date }}</p>
            <p class="text-light">{{ learning.description }}</p>
            <div class="tags">
              <span v-for="tag in learning.tags" :key="tag" class="badge bg-primary me-2">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const learnings = [
  {
    title: 'Introduction à Vue.js 3',
    date: 'Mars 2024',
    description: 'Apprentissage de la Composition API et des nouveaux concepts de Vue 3.',
    tags: ['Vue.js', 'JavaScript', 'Frontend']
  },
  {
    title: 'Développement Java Avancé',
    date: 'Février 2024',
    description: 'Approfondissement des concepts avancés de Java et JavaFX.',
    tags: ['Java', 'JavaFX', 'Backend']
  }
]
</script>

<style scoped lang="scss">
.timeline-vertical {
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 2rem;
    width: 2px;
    height: 100%;
    background-color: var(--bs-primary);
  }
}

.timeline-item {
  margin-left: 4rem;
  margin-bottom: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--bs-primary);
    top: 1.5rem;
  }
}

.timeline-content {
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
  }
}
</style>