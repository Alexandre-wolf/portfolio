<template>
  <div class="learning-text bg-dark text-light p-4 rounded mt-5">
    <h2 class="text-primary mb-4">Justification des Apprentissages</h2>

    <!-- Réaliser -->
    <div class="competence mb-4">
      <h3 class="text-warning">Réaliser</h3>

      <p>
        <strong>AC31.01 | Choisir et implémenter les architectures adaptées :</strong>
        Pour le projet de la machine à sous, j'ai utilisé un algorithme de pseudo-aléatoire existant que j'ai adapté pour offrir une expérience de gain avantageuse pour le casino. L'algorithme a été conçu pour ne pas être facilement compréhensible et ne repose pas sur des valeurs basées sur le temps, ce qui garantit des résultats uniques même en cas d'exécution simultanée. Pour le projet du Site de Tournois, j'ai choisi d'utiliser API Platform dans Symfony, ce qui nous a permis de bénéficier d'une architecture déjà bien structurée pour développer notre API REST. L'interface Vue.js, qui interagit avec cette API, a été conçue pour garantir une séparation claire entre le backend et le frontend, facilitant ainsi l’évolutivité du projet. Nous avons également intégré des assertions partout dans le code afin d’éviter les erreurs.
      </p>

      <p>
        <strong>AC31.02 | Faire évoluer une application existante :</strong>
        Le projet du Site de Tournois a été réalisé en deux étapes. D’abord, nous avons développé une API avec des routes et la gestion complète des données. Ensuite, nous avons intégré cette API avec une interface Vue.js, ce qui a impliqué une restructuration de certaines routes pour optimiser l’interaction avec le frontend. Parallèlement, en alternance, je travaille sur l’amélioration continue d’un ERP en développant de nouvelles fonctionnalités, comme l'intégration de Google Meet via l'API Google Calendar, et en optimisant les performances de l’application existante.
      </p>

      <p>
        <strong>AC31.03 | Intégrer des solutions dans un environnement de production :</strong>
        Le déploiement du Site de Tournois a été effectué sur un serveur de l’IUT en utilisant SSH et des scripts de base de données pour automatiser le processus. Cela m’a permis de mieux comprendre le processus de mise en production et la gestion de bases de données distantes. Dans le cadre de mon alternance, l’intégration de Google Meet dans notre ERP a constitué un défi technique intéressant, nécessitant l’utilisation de l'API Google Calendar. Cette intégration a permis de générer automatiquement des événements sur le calendrier partagé de l'ERP, et j'ai dû m'assurer que l’authentification OAuth soit correctement mise en place pour garantir la sécurité de l'accès à ces fonctionnalités.
      </p>
    </div>

    <!-- Collaborer -->
    <div class="competence mb-4">
      <h3 class="text-warning">Collaborer</h3>

      <p>
        <strong>AC36.01 | Organiser et partager une veille technologique et informationnelle :</strong>
        Avec mon équipe, nous avons mis en place une veille technologique pour rester à jour sur des technologies comme Vue.js et API Platform. Nous avons partagé nos trouvailles via Discord et organisé notre documentation dans un Google Doc, ce qui nous a permis d’être réactifs et d’intégrer rapidement les nouvelles informations dans nos projets.
      </p>

      <p>
        <strong>AC36.02 | Identifier les enjeux de l’économie de l’innovation numérique :</strong>
        En tant qu’alternant, je n’ai pas encore eu de retour direct concernant l’ERP, mais dans le cadre du projet Noissap, nous avons analysé les impacts économiques d'une réorganisation de SI pour une entreprise fictive. Cela m'a permis de mieux comprendre les enjeux économiques liés à l'intégration de nouvelles fonctionnalités et d’évaluer leur rentabilité.
      </p>

      <p>
        <strong>AC36.03 | Guider la conduite du changement informatique au sein d’une organisation :</strong>
        Dans le cadre du projet Site de Tournois, j’ai accompagné mes coéquipiers dans l’adoption de Vue.js, en expliquant les concepts de base et les bonnes pratiques. Lors de l'intégration de Google Meet dans l'ERP, j'ai été impliqué dans l'accompagnement des utilisateurs pour leur permettre de s'adapter à la nouvelle fonctionnalité, notamment par la création de supports et de guides de prise en main.
      </p>

      <p>
        <strong>AC36.04 | Accompagner le management de projet informatique :</strong>
        Nous avons utilisé GitLab pour la gestion du code et Notion pour le suivi des tâches, ce qui nous a permis d’organiser efficacement notre travail en équipe. Nous avons aussi eu quelques défis de coordination, notamment lors de la modification de la base de données par un membre de l'équipe, mais nous avons rapidement résolu ce problème en organisant un appel sur Discord avec partage d'écran pour nous mettre d'accord sur la structure de la base de données.
      </p>
    </div>

    <!-- Conduire -->
    <div class="competence mb-4">
      <h3 class="text-warning">Conduire</h3>

      <p>
        <strong>AC35.01 | Mesurer les impacts économiques, sociétaux et technologiques d’un projet informatique :</strong>
        Lors du projet Noissap, nous avons étudié la réorganisation d’un SI pour une entreprise de voyage. Cette étude m’a permis de mesurer les impacts économiques, sociaux et technologiques de la réorganisation sur les processus internes. Bien que je n'aie pas encore eu l'opportunité de mesurer l'impact d’une fonctionnalité directement dans l’ERP, chaque nouvelle intégration, comme celle de Google Meet, nécessite une réflexion sur ses bénéfices pour l’entreprise.
      </p>

      <p>
        <strong>AC35.02 | Savoir intégrer un projet informatique dans le système d’information d’une organisation :</strong>
        Lors de l'intégration de l'API Google Calendar dans l’ERP, j’ai dû comprendre le SI existant afin d’assurer une transition fluide et éviter toute perturbation des processus en place. Cette tâche a nécessité une bonne coordination avec les autres équipes pour garantir que l’intégration s’effectue sans erreurs et de manière harmonieuse avec l’architecture du SI.
      </p>

      <p>
        <strong>AC35.03 | Savoir adapter un système d’information :</strong>
        Dans le cadre du projet Noissap, nous avons adapté un ERP basé sur Odoo pour le proposer comme solution à une entreprise fictive. Cela m’a permis d’approfondir ma capacité à analyser un SI et à proposer des ajustements en fonction des besoins. En alternance, mon travail sur l'ERP consiste à apporter des améliorations continues, comme l’intégration de nouvelles fonctionnalités et l’optimisation des processus existants.
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
