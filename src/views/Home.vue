<template>
  <div class="home">
    <!-- About Section -->
    <section id="about" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-white mb-4">À propos de moi</h2>
            <div class="text-light">
              <p>Je m'appelle Alexandre Wolf, développeur web et d'applications Java âgé de 20 ans, résidant à Lansargues (un petit village très sympa). Passionné par l'innovation technologique, en particulier dans le domaine de l'intelligence artificielle, je suis reconnu pour mon dévouement et mon professionnalisme dans tout projet entrepris. Ma capacité à apporter une énergie positive et une approche proactive fait de moi un collaborateur apprécié.</p>
              <p>Titulaire d'un baccalauréat STI2D option Système d'Information et Numérique, et actuellement en 2ème année de DUT informatique à l'IUT de Montpellier, je poursuis mes études avec sérieux et engagement. En tant que personne sociable et loyale, je valorise les relations humaines au sein d'un environnement professionnel dynamique. Cependant, je suis également conscient de l'importance de maintenir un équilibre entre vie professionnelle et personnelle.</p>
            </div>
            <a href="/cv.pdf" class="btn btn-primary mt-3" download>
              <i class="bi bi-download me-2"></i>Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section id="timeline" class="py-5 bg-dark">
      <div class="container">
        <h2 class="text-white mb-4">Parcours</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-content">
              <h4 class="text-primary">IUT Informatique</h4>
              <p class="text-light">Parcours IAMSI (Intégration d'Applications et Management du Système d'Information)</p>
              <span class="date">2022 - Présent</span>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h4 class="text-primary">Bac STI2D</h4>
              <p class="text-light">Option Système d'Information et Numérique</p>
              <span class="date">2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-5">
      <div class="container">
        <h2 class="text-white mb-4">Compétences techniques</h2>
        <div class="row g-4">
          <div v-for="skill in skills" :key="skill.name" class="col-md-6 col-lg-3">
            <div class="skill-card p-3 bg-dark rounded">
              <h5 class="text-primary">{{ skill.name }}</h5>
              <p class="text-light mb-2">Version: {{ skill.version }}</p>
              <div class="progress">
                <div 
                  class="progress-bar" 
                  role="progressbar" 
                  :style="{ width: skill.level + '%' }"
                  :aria-valuenow="skill.level"
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-5 bg-dark">
      <div class="container">
        <h2 class="text-white mb-4">Projets</h2>
        <div class="row g-4">
          <div v-for="project in projects" :key="project.id" class="col-md-6 col-lg-4">
            <div class="card bg-darker h-100">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start mb-3">
                  <h5 class="card-title text-primary">{{ project.title }}</h5>
                  <span class="badge bg-primary">{{ project.type }}</span>
                </div>
                <p class="card-text text-light">{{ project.shortDescription }}</p>
                <div class="mb-3">
                  <span 
                    v-for="tech in project.mainTechnologies" 
                    :key="tech" 
                    class="badge bg-secondary me-2"
                  >
                    {{ tech }}
                  </span>
                </div>
                <router-link 
                  :to="{ name: 'project', params: { id: project.id }}" 
                  class="btn btn-outline-primary"
                >
                  En savoir plus
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5">
      <div class="container">
        <h2 class="text-white mb-4">Contact</h2>
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <div class="contact-info text-light">
              <p><i class="bi bi-envelope me-2"></i>alexandre.wolf@example.com</p>
              <p><i class="bi bi-telephone me-2"></i>06 00 00 00 00</p>
              <a href="https://linkedin.com" target="_blank" class="btn btn-outline-primary">
                <i class="bi bi-linkedin me-2"></i>LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Java/JavaFx', version: '17/11', level: 85 },
  { name: 'PHP', version: '8.2', level: 75 },
  { name: 'C', version: '23', level: 70 },
  { name: 'PL/SQL/CQL', version: '15.0.4', level: 80 },
  { name: 'HTML/CSS', version: '5/4.15', level: 90 },
  { name: 'JavaScript', version: 'ES15', level: 85 },
  { name: 'NodeJS/VueJS', version: '18/3.5.13', level: 80 },
  { name: 'Symfony', version: '7.0', level: 75 }
]

const projects = [
  {
    id: 1,
    title: 'Application de Gestion de Tâches',
    type: 'Projet Solo',
    shortDescription: 'Application web permettant la gestion efficace des tâches quotidiennes.',
    mainTechnologies: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'E-commerce de Produits Locaux',
    type: 'Projet Groupe',
    shortDescription: 'Plateforme de vente en ligne pour les producteurs locaux.',
    mainTechnologies: ['React', 'Express', 'PostgreSQL']
  },
  {
    id: 3,
    title: 'Application Mobile Fitness',
    type: 'Projet Solo',
    shortDescription: 'Application mobile de suivi d\'entraînement personnalisé.',
    mainTechnologies: ['Flutter', 'Firebase']
  },
  {
    id: 4,
    title: 'Système de Réservation',
    type: 'Projet Groupe',
    shortDescription: 'Système de réservation pour une chaîne de restaurants.',
    mainTechnologies: ['Angular', 'Spring Boot', 'MySQL']
  },
  {
    id: 5,
    title: 'Portfolio Photographe',
    type: 'Projet Solo',
    shortDescription: 'Site web portfolio pour un photographe professionnel.',
    mainTechnologies: ['Vue.js', 'Nuxt.js', 'Strapi']
  },
  {
    id: 6,
    title: 'Plateforme d\'Apprentissage',
    type: 'Projet Groupe',
    shortDescription: 'Plateforme e-learning avec cours interactifs.',
    mainTechnologies: ['React', 'Django', 'PostgreSQL']
  },
  {
    id: 7,
    title: 'Application IoT',
    type: 'Projet Solo',
    shortDescription: 'Application de contrôle pour objets connectés.',
    mainTechnologies: ['Vue.js', 'Node.js', 'MQTT']
  }
]
</script>

<style scoped lang="scss">
.timeline {
  position: relative;
  padding: 2rem 0;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: var(--bs-primary);
  }
}

.timeline-item {
  margin-bottom: 2rem;
  position: relative;
  
  &:nth-child(odd) {
    .timeline-content {
      margin-left: 50%;
      padding-left: 2rem;
    }
  }
  
  &:nth-child(even) {
    .timeline-content {
      margin-right: 50%;
      padding-right: 2rem;
      text-align: right;
    }
  }
}

.skill-card {
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
}

.bg-darker {
  background-color: #1a1a1a;
}
</style>