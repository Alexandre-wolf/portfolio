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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// import Projet1_banniere from '@/assets/img/Projet1_banniere.png';
// import Projet1_1 from '@/assets/img/Projet1_1.png';
// import Projet1_2 from '@/assets/img/Projet1_2.png';
// import Projet2_banniere from '@/assets/img/Projet2_banniere.png';
import Projet2_1 from '@/assets/img/Projet2_1.png';
import Projet2_2 from '@/assets/img/Projet2_2.png';
// import Projet3_banniere from '@/assets/img/Projet3_banniere.png';
// import Projet3_1 from '@/assets/img/Projet3_1.png';
// import Projet3_2 from '@/assets/img/Projet3_2.png';
// import Projet4_banniere from '@/assets/img/Projet4_banniere.png';
// import Projet4_1 from '@/assets/img/Projet4_1.png';
// import Projet4_2 from '@/assets/img/Projet4_2.png';
// import Projet5_banniere from '@/assets/img/Projet5_banniere.png';
// import Projet5_1 from '@/assets/img/Projet5_1.png';
// import Projet5_2 from '@/assets/img/Projet5_2.png';
// import Projet6_banniere from '@/assets/img/Projet6_banniere.png';
// import Projet6_1 from '@/assets/img/Projet6_1.png';
// import Projet6_2 from '@/assets/img/Projet6_2.png';

const route = useRoute()
const projectId = parseInt(route.params.id as string)

const projectsData = [
  {
    id: 1,
    title: 'Les Aventuriers du Rail - Application Java',
    type: 'Projet Binôme',
    mainTechnologies: ['Java', 'Algorithmes de graphes'],
    heroImage: Projet2_1,
    description: 'Développement d\'une application reprenant le jeu "Les Aventuriers du Rail" en Java. Utilisation de la méthode agile avec un seul Sprint pour développer les algorithmes de résolution de graphe.',
    technologies: [
      { name: 'Java', icon: 'bi bi-code-slash', description: 'Langage de programmation utilisé' },
      { name: 'Algorithmes de graphes', icon: 'bi bi-diagram-3', description: 'Algorithmes pour résoudre des graphes' }
    ],
    gallery: [
      { url: Projet2_1, caption: 'Interface de jeu' },
      { url: Projet2_1, caption: 'Démonstration des algorithmes' }
    ],
    challenges: 'Gestion des algorithmes complexes de résolution de graphes.',
    solutions: 'Utilisation d\'algorithmes optimisés et méthode agile pour atteindre les objectifs en un seul Sprint.',
    results: 'Création d\'une application fonctionnelle qui réplique le jeu avec des algorithmes de graphes efficaces.'
  },
  {
    id: 2,
    title: 'Les Aventuriers du Rail - Interface JavaFX',
    type: 'Projet Binôme',
    mainTechnologies: ['JavaFX', 'Java'],
    heroImage: Projet2_1,
    description: 'Développement de l\'interface utilisateur (IHM) pour le jeu "Les Aventuriers du Rail" en JavaFX. Le projet a consisté à concevoir et coder l\'interface graphique de A à Z.',
    technologies: [
      { name: 'JavaFX', icon: 'bi bi-code-slash', description: 'Framework pour le développement d\'interfaces graphiques en Java' },
      { name: 'Java', icon: 'bi bi-server', description: 'Langage de programmation utilisé pour la logique du jeu' }
    ],
    gallery: [
      { url: Projet2_1, caption: 'Développement de l\'interface graphique' },
      { url: Projet2_2, caption: 'Écran de jeu final' }
    ],
    challenges: 'Création d\'une interface utilisateur fluide et fonctionnelle avec un minimum d\'informations sur le rendu du jeu.',
    solutions: 'Intégration de JavaFX pour créer une interface moderne et interactive, tout en respectant les contraintes de l\'interface initiale.',
    results: 'Création d\'une interface utilisateur efficace et agréable, intégrée à la logique du jeu.'
  },
  {
    id: 3,
    title: 'Machine à Sous en PHP',
    type: 'Projet en Groupe',
    mainTechnologies: ['PHP', 'HTML/CSS', 'JavaScript'],
    heroImage: Projet2_1,
    description: 'Développement d\'une machine à sous avec une maquette sur Figma, suivi par la création de la logique en PHP pour générer les résultats aléatoires, et l\'interface visuelle en HTML/CSS et JavaScript.',
    technologies: [
      { name: 'PHP', icon: 'bi bi-code-slash', description: 'Langage pour la logique et la génération des résultats' },
      { name: 'HTML/CSS', icon: 'bi bi-file-earmark-code', description: 'Technologies pour le développement de l\'interface' },
      { name: 'JavaScript', icon: 'bi bi-braces', description: 'Utilisé pour les animations et interactions sur l\'interface' }
    ],
    gallery: [
      { url: Projet2_1, caption: 'Interface de la machine à sous' },
      { url: Projet2_1, caption: 'Génération aléatoire des résultats' }
    ],
    challenges: 'Création d\'une logique fiable pour générer les résultats et garantir une expérience de jeu immersive.',
    solutions: 'Utilisation d\'algorithmes pour garantir l\'aléatoire et d\'une interface moderne et responsive.',
    results: 'Création d\'une machine à sous fonctionnelle et visuellement attractive avec une logique de jeu stable.'
  },
  {
    id: 4,
    title: 'Site Ecommerce en PHP',
    type: 'Projet en Groupe',
    mainTechnologies: ['PHP', 'HTML/CSS', 'JavaScript'],
    heroImage: Projet2_1,
    description: 'Développement d\'un site ecommerce avec gestion des comptes utilisateurs, des paniers, et de l\'historique d\'achats, utilisant PHP, HTML/CSS et JavaScript.',
    technologies: [
      { name: 'PHP', icon: 'bi bi-code-slash', description: 'Langage pour le backend du site ecommerce' },
      { name: 'HTML/CSS', icon: 'bi bi-file-earmark-code', description: 'Utilisé pour la structure et le design du site' },
      { name: 'JavaScript', icon: 'bi bi-braces', description: 'Interaction dynamique avec l\'utilisateur' }
    ],
    gallery: [
      { url: Projet2_1, caption: 'Page d\'accueil du site ecommerce' },
      { url: Projet2_1, caption: 'Gestion du panier' }
    ],
    challenges: 'Implémentation des fonctionnalités de gestion des utilisateurs et du panier dans un environnement sécurisé.',
    solutions: 'Utilisation d\'une architecture MVC pour gérer les différentes parties du site ecommerce de manière structurée.',
    results: 'Création d\'un site ecommerce opérationnel avec un système de gestion de comptes et de panier.'
  },
  {
    id: 5,
    title: 'Annuaire en ligne avec Symfony',
    type: 'Projet en Groupe',
    mainTechnologies: ['PHP', 'Symfony', 'HTML/CSS'],
    heroImage: Projet2_1,
    description: 'Création d\'un annuaire en ligne fonctionnel en utilisant le framework Symfony. Le projet avait pour objectif de maîtriser Symfony tout en créant une application pratique.',
    technologies: [
      { name: 'Symfony', icon: 'bi bi-code-slash', description: 'Framework PHP utilisé pour développer l\'annuaire' },
      { name: 'PHP', icon: 'bi bi-server', description: 'Langage de programmation pour la logique backend' },
      { name: 'HTML/CSS', icon: 'bi bi-file-earmark-code', description: 'Technologies pour la conception de l\'interface' }
    ],
    gallery: [
      { url: Projet2_1, caption: 'Interface de recherche dans l\'annuaire' },
      { url: Projet2_1, caption: 'Page de profil d\'un utilisateur' }
    ],
    challenges: 'Prendre en main Symfony tout en créant une application avec des fonctionnalités de recherche et de gestion d\'utilisateurs.',
    solutions: 'Exploitation des composants Symfony pour simplifier le développement tout en garantissant la fonctionnalité de l\'annuaire.',
    results: 'Création d\'un annuaire fonctionnel avec une recherche avancée et une gestion des utilisateurs.'
  },
  {
    id: 6,
    title: 'Site de Tournois avec API Platform et Vue.js',
    type: 'Projet en Groupe',
    mainTechnologies: ['Symfony', 'API Platform', 'Vue.js'],
    heroImage: Projet2_1,
    description: 'Développement d\'une API avec API Platform et du frontend avec Vue.js pour un site d\'organisation de tournois, permettant la gestion des organisateurs et des joueurs.',
    technologies: [
      { name: 'Symfony', icon: 'bi bi-code-slash', description: 'Framework PHP pour gérer le backend du site' },
      { name: 'API Platform', icon: 'bi bi-plug', description: 'Outil pour créer des API RESTful facilement' },
      { name: 'Vue.js', icon: 'bi bi-code-slash', description: 'Framework frontend pour l\'interface utilisateur' }
    ],
    gallery: [
      { url: Projet2_1, caption: 'Gestion des tournois' },
      { url: Projet2_1, caption: 'Page d\'inscription des joueurs' }
    ],
    challenges: 'Développement d\'une API solide et d\'une interface dynamique pour une gestion fluide des tournois.',
    solutions: 'Utilisation d\'API Platform pour créer une API efficace et de Vue.js pour un frontend réactif.',
    results: 'Création d\'un site complet pour l\'organisation de tournois, avec gestion des utilisateurs et des événements.'
  }
];


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