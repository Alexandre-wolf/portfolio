<template>
  <div class="learning-text bg-dark text-light p-4 rounded mt-5">
    <h2 class="text-primary mb-4">Justification des Apprentissages</h2>

    <!-- Réaliser -->
    <div class="competence mb-4">
      <h3 class="text-warning">Réaliser</h3>

      <p>
        <strong>AC31.01 | Choisir et implémenter les architectures adaptées :</strong>
        Lors du développement de la 
        <a href="#/projet/3" class="text-info text-decoration-none">Machine à Sous en PHP</a> 
        et du <a href="#/projet/6" class="text-info text-decoration-none">Site de Tournois avec API Platform et Vue.js</a>, 
        j’ai dû concevoir des architectures logicielles adaptées. Pour la machine à sous, la structure du code en PHP a été pensée pour garantir 
        la fiabilité des résultats aléatoires. Pour le site de tournois, nous avons conçu une architecture API REST avec API Platform et séparé 
        le frontend avec Vue.js, permettant une évolutivité et une meilleure séparation des responsabilités.
      </p>

      <p>
        <strong>AC31.02 | Faire évoluer une application existante :</strong>
        Lors du développement du <a href="#/projet/6" class="text-info text-decoration-none">Site de Tournois</a>, 
        nous avons d’abord construit l’API indépendamment avant de l’adapter pour fonctionner avec notre interface Vue.js. Cette évolution 
        a nécessité une restructuration de certaines routes API pour optimiser leur utilisation côté client. En alternance, je travaille sur 
        l’amélioration continue d’un <strong>logiciel ERP</strong>, en développant de nouvelles fonctionnalités et en optimisant les performances 
        du code existant.
      </p>

      <p>
        <strong>AC31.03 | Intégrer des solutions dans un environnement de production :</strong>
        Le <a href="#/projet/6" class="text-info text-decoration-none">Site de Tournois</a> a été déployé sur le serveur 
        de l’IUT en utilisant des commandes SSH et des scripts de base de données. Cette expérience m’a permis de maîtriser la mise en production 
        d’une application web et la gestion de bases de données distantes. En alternance, j’ai récemment intégré <strong>Google Meet via l’API Google Calendar</strong> 
        dans notre ERP, nécessitant l’authentification OAuth et la gestion des événements dans un calendrier partagé.
      </p>
    </div>

    <!-- Collaborer -->
    <div class="competence mb-4">
      <h3 class="text-warning">Collaborer</h3>

      <p>
        <strong>AC36.01 | Organiser et partager une veille technologique et informationnelle :</strong>
        Avec mon équipe, nous avons mis en place une veille technologique en nous abonnant à des ressources sur des sujets clés, 
        que nous partagions sur Discord et organisions dans un Google Doc. Cette méthode nous a permis d’être réactifs aux évolutions 
        des technologies utilisées dans nos projets, notamment Vue.js et API Platform.
      </p>

      <p>
        <strong>AC36.02 | Identifier les enjeux de l’économie de l’innovation numérique :</strong>
        Cet apprentissage a été moins présent dans mes expériences, mais en alternance, je prends conscience des défis économiques liés 
        à l’amélioration d’un ERP. Chaque nouvelle intégration, comme Google Meet, doit être évaluée en termes de coût et d’impact sur les utilisateurs.
      </p>

      <p>
        <strong>AC36.03 | Guider la conduite du changement informatique au sein d’une organisation :</strong>
        Lors du projet <a href="#/projet/6" class="text-info text-decoration-none">Site de Tournois</a>, j’ai aidé mes coéquipiers 
        à prendre en main Vue.js en leur expliquant les concepts de base et les bonnes pratiques. En alternance, l’intégration de Google Meet dans l’ERP 
        a nécessité d’accompagner les utilisateurs pour qu’ils adoptent cette nouvelle fonctionnalité et comprennent son utilisation au sein du SI.
      </p>

      <p>
        <strong>AC36.04 | Accompagner le management de projet informatique :</strong>
        Nous avons utilisé <strong>GitLab et Notion</strong> pour la gestion des projets en équipe, selon les préférences de chaque groupe. Ces outils 
        ont facilité la répartition des tâches et le suivi de l’avancement. En alternance, je participe aux décisions sur les évolutions du logiciel ERP, 
        en apportant mon expertise technique pour orienter les choix de développement.
      </p>
    </div>

    <!-- Conduire -->
    <div class="competence mb-4">
      <h3 class="text-warning">Conduire</h3>

      <p>
        <strong>AC35.01 | Mesurer les impacts économiques, sociétaux et technologiques d’un projet informatique :</strong>
        Lors du <strong>TD Noissap</strong> avec Mme Palleja, nous avons analysé la réorganisation d’un SI pour une entreprise de voyage, 
        ce qui m’a permis de comprendre l’importance des impacts économiques et technologiques d’un projet informatique. En alternance, 
        chaque amélioration de l’ERP nécessite une réflexion sur ses bénéfices et coûts pour l’entreprise.
      </p>

      <p>
        <strong>AC35.02 | Savoir intégrer un projet informatique dans le système d’information d’une organisation :</strong>
        Cet apprentissage a été moins sollicité directement dans mes projets, mais en alternance, l’intégration de <strong>Google Meet via l’API Google Calendar</strong> 
        dans notre ERP a demandé une compréhension approfondie du SI existant pour assurer une compatibilité et une transition fluide.
      </p>

      <p>
        <strong>AC35.03 | Savoir adapter un système d’information :</strong>
        Lors du <strong>TD Noissap</strong>, nous avons adapté un ERP basé sur Odoo pour le proposer comme solution aux besoins d’une entreprise. 
        Cette expérience a renforcé ma capacité à analyser un SI et à proposer des ajustements pertinents. En alternance, mon travail quotidien 
        consiste à améliorer l’ERP en y intégrant de nouvelles fonctionnalités et en optimisant son fonctionnement.
      </p>
    </div>
  </div>
</template>

<style scoped>
.competence h3 {
  border-bottom: 2px solid var(--bs-warning);
  padding-bottom: 5px;
}
</style>
