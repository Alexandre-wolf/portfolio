<template>
  <div class="home">
    <!-- About Section -->
    <section id="about" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-white mb-4 about-title">À propos de moi</h2>
            <div class="text-light">
              <p class="exo2 about-desc">Je m'appelle Alexandre Wolf, développeur web et d'applications Java âgé de 20 ans, résidant à Lansargues (un petit village très sympa). Passionné par l'innovation technologique, en particulier dans le domaine de l'intelligence artificielle, je suis reconnu pour mon dévouement et mon professionnalisme dans tout projet entrepris. Ma capacité à apporter une énergie positive et une approche proactive fait de moi un collaborateur apprécié.</p>
              <p class="exo2 about-desc">Titulaire d'un baccalauréat STI2D option Système d'Information et Numérique, et actuellement en 2ème année de DUT informatique à l'IUT de Montpellier, je poursuis mes études avec sérieux et engagement. En tant que personne sociable et loyale, je valorise les relations humaines au sein d'un environnement professionnel dynamique. Cependant, je suis également conscient de l'importance de maintenir un équilibre entre vie professionnelle et personnelle.</p>
            </div>
            <a href="src/assets/img/cv.pdf" class="btn btn-primary mt-3" download>
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
          <!-- IUT Informatique - 2ème et 3ème année -->
          <div class="timeline-item">
            <div class="timeline-content">
              <h4 class="text-primary">IUT Informatique - Montpellier Sète</h4>
              <p class="text-light">2ème et 3ème Année - Parcours IAMSI (Intégration d'Applications et Management du Système d'Information)</p>
              <span class="date">2023 - 2025</span>
            </div>
          </div>
          <!-- IUT Informatique - 1ère année -->
          <div class="timeline-item">
            <div class="timeline-content">
              <h4 class="text-primary">IUT Informatique - Montpellier Sète</h4>
              <p class="text-light">1ère Année</p>
              <span class="date">2022 - 2023</span>
            </div>
          </div>
          <!-- Année Terminale -->
          <div class="timeline-item">
            <div class="timeline-content">
              <h4 class="text-primary">Lycée Champollion</h4>
              <p class="text-light">Classe de Terminale STI2D - Spécialité Systèmes d'Information et Numérique (SIN)</p>
              <span class="date">2021 - 2022</span>
            </div>
          </div>
          <!-- Année 1ère -->
          <div class="timeline-item">
            <div class="timeline-content">
              <h4 class="text-primary">Lycée Champollion</h4>
              <p class="text-light">Classe de 1ère STI2D</p>
              <span class="date">2020 - 2021</span>
            </div>
          </div>
          <!-- Année 2nde -->
          <div class="timeline-item">
            <div class="timeline-content">
              <h4 class="text-primary">Lycée Louis Feuillade</h4>
              <p class="text-light">Classe de 2nde Générale</p>
              <span class="date">2019 - 2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Skills Section -->
    <section id="skills" class="py-5">
      <div class="container">
        <h2 class="text-white mb-4 ">Compétences techniques</h2>

        <!-- Langages -->
        <h3 class="text-white mb-3 text-center">Langages</h3>
        <div class="row g-4">
          <div v-for="skill in languages" :key="skill.name" class="col-md-6 col-lg-3">
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

        <!-- Compétences / Frameworks / Logiciels -->
        <br>
        <h3 class="text-white mb-3 text-center">Frameworks & Outils</h3>
        <div class="row g-4">
          <div v-for="skill in frameworksAndTools" :key="skill.name" class="col-md-6 col-lg-3">
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
          <!-- Informations de contact -->
          <div class="col-lg-6">
            <div class="contact-info text-light">
              <p><i class="bi bi-envelope me-2"></i>alexandre.wolf1503@gmail.com</p>
              <p><i class="bi bi-telephone me-2"></i>07 69 19 04 17</p>
              <a href="https://www.linkedin.com/in/alexandre-wolf-420673264/" target="_blank" class="btn btn-outline-primary">
                <i class="bi bi-linkedin me-2"></i>LinkedIn
              </a>
            </div>
          </div>

          <!-- Formulaire de contact -->
          <div class="col-lg-6">
            <form @submit.prevent="handleSend">
              <div class="mb-3">
                <label for="name" class="form-label text-light">Sujet</label>
                <input v-model="form.sujet" type="text" id="name" class="form-control" placeholder="Sujet" required />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label text-light">Email</label>
                <input v-model="form.email" type="email" id="email" class="form-control" placeholder="Votre email" required />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label text-light">Message</label>
                <textarea v-model="form.message" id="message" class="form-control" rows="5" placeholder="Votre message" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Envoyer</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

import { reactive } from 'vue'

// Formulaire réactif
const form = reactive({
  sujet: '',
  email: '',
  message: '',
})

// Fonction pour gérer l'envoi
const handleSend = () => {
  // Encoder les valeurs pour éviter des problèmes avec les caractères spéciaux
  const sujet = encodeURIComponent(form.sujet)
  const message = encodeURIComponent(form.message)

  // Créer le lien mailto avec le destinataire, sujet et corps du message
  const mailtoLink = `mailto:alexandre.wolf1503@gmail.com?subject=${encodeURIComponent(sujet)}&body=Message:%0A${encodeURIComponent(message)}%0A%0AEnvoyé par : ${encodeURIComponent(form.email)}`;

  // Rediriger vers le mailto pour ouvrir le client de messagerie
  window.location.href = mailtoLink
}

const languages = [
  { name: 'Java', version: '17', level: 65 },
  { name: 'PHP', version: '8.2', level: 85 },
  { name: 'C', version: '23', level: 55 },
  { name: 'HTML/CSS', version: '5/4.15', level: 90 },
  { name: 'JavaScript', version: 'ES15', level: 85 },
  { name: 'NodeJS/VueJS', version: '18/3.5.13', level: 80 }
]

const frameworksAndTools = [
  { name: 'JavaFX', version: '-', level: 45 },
  { name: 'Symfony', version: '7.0', level: 75 },
  { name: 'MongoDB', version: '5.0', level: 80 },
  { name: 'CQL', version: '15.0.4', level: 80 },
  { name: 'Docker', version: '20.10', level: 65 },
  { name: 'Cypress', version: '10.0', level: 30 },
  { name: 'SonarQube', version: '9.9', level: 30 },
]



const projects = [
  {
    id: 1,
    title: 'Les Aventuriers du Rail - Application Java',
    type: 'Projet Binôme',
    shortDescription: 'Développement d\'une application reprenant le jeu "Les Aventuriers du Rail" en Java avec des algorithmes de résolution de graphes.',
    mainTechnologies: ['Java', 'Algorithmes de graphes']
  },
  {
    id: 2,
    title: 'Les Aventuriers du Rail - Interface JavaFX',
    type: 'Projet Binôme',
    shortDescription: 'Développement de l\'interface utilisateur (IHM) du jeu "Les Aventuriers du Rail" en JavaFX.',
    mainTechnologies: ['JavaFX', 'Java']
  },
  {
    id: 3,
    title: 'Machine à Sous en PHP',
    type: 'Projet Groupe',
    shortDescription: 'Développement d\'une machine à sous avec une maquette sur Figma et la logique en PHP, HTML/CSS et JavaScript.',
    mainTechnologies: ['PHP', 'HTML/CSS', 'JavaScript']
  },
  {
    id: 4,
    title: 'Site Ecommerce en PHP',
    type: 'Projet Groupe',
    shortDescription: 'Création d\'un site ecommerce avec gestion des comptes utilisateurs, des paniers et de l\'historique d\'achats.',
    mainTechnologies: ['PHP', 'HTML/CSS', 'JavaScript']
  },
  {
    id: 5,
    title: 'Annuaire en ligne avec Symfony',
    type: 'Projet Groupe',
    shortDescription: 'Création d\'un annuaire en ligne fonctionnel en utilisant Symfony.',
    mainTechnologies: ['PHP', 'Symfony', 'HTML/CSS']
  },
  {
    id: 6,
    title: 'Site de Tournois avec API Platform et Vue.js',
    type: 'Projet Groupe',
    shortDescription: 'Développement d\'une API avec API Platform et frontend avec Vue.js pour un site d\'organisation de tournois.',
    mainTechnologies: ['Symfony', 'API Platform', 'Vue.js']
  }
];
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