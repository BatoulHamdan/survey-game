const fr = [
  {
    id: 18,
    question: "Pensez-vous que le réchauffement climatique est en train de se produire ?",
    options: ["Oui", "Non", "Je ne sais pas"]
  },
  {
    id: 19,
    question: "En supposant que le réchauffement climatique soit en cours, pensez-vous qu'il soit… ?",
    options: [
      "Principalement causé par les activités humaines",
      "Principalement causé par des changements naturels dans l'environnement",
      "Aucune des réponses ci-dessus, car le réchauffement climatique ne se produit pas",
      "Autre",
      "Je ne sais pas"
    ]
  },
  {
    id: 20,
    question: "Quel est votre avis sur ce que la plupart des scientifiques pensent ?",
    options: [
      "La plupart des scientifiques pensent que le réchauffement climatique se produit",
      "Il y a beaucoup de désaccord parmi les scientifiques sur la question de savoir si le réchauffement climatique se produit ou non",
      "La plupart des scientifiques pensent que le réchauffement climatique ne se produit pas",
      "Je ne sais pas assez pour me prononcer"
    ]
  },
  {
    id: 21,
    question: "Dans quelle mesure êtes-vous d'accord ou pas d'accord avec l'affirmation suivante : Le réchauffement climatique affecte le climat des États-Unis.",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 22,
    question: "À quel point êtes-vous préoccupé par le réchauffement climatique ?",
    options: ["Très préoccupé", "Plutôt préoccupé", "Pas très préoccupé", "Pas du tout préoccupé"]
  },
  {
    id: 23,
    question: "Dans quelle mesure pensez-vous que le réchauffement climatique nuira aux plantes et aux espèces animales ?",
    options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Je ne sais pas"]
  },
  {
    id: 24,
    question: "Dans quelle mesure pensez-vous que le réchauffement climatique nuira aux générations futures ?",
    options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Je ne sais pas"]
  },
  {
    id: 25,
    question: "Dans quelle mesure pensez-vous que le réchauffement climatique nuira aux personnes dans les pays en développement ?",
    options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Je ne sais pas"]
  },
  {
    id: 26,
    question: "Dans quelle mesure pensez-vous que le réchauffement climatique nuira aux personnes aux États-Unis ?",
    options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Je ne sais pas"]
  },
  {
    id: 27,
    question: "Dans quelle mesure pensez-vous que le réchauffement climatique vous nuira personnellement ?",
    options: ["Pas du tout", "Un peu", "Modérément", "Beaucoup", "Je ne sais pas"]
  },
  {
    id: 28,
    question: "Quand pensez-vous que le réchauffement climatique commencera à nuire aux personnes aux États-Unis ?",
    options: [
      "Elles sont déjà touchées actuellement",
      "Dans 10 ans",
      "Dans 25 ans",
      "Dans 50 ans",
      "Dans 100 ans",
      "Jamais"
    ]
  },
  {
    id: 29,
    question: "Dans quelle mesure êtes-vous d'accord ou pas d'accord avec l'affirmation suivante : « J'ai personnellement vécu les effets du réchauffement climatique » ?",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 30,
    question: "Financer davantage la recherche sur les sources d'énergie renouvelable, comme l'énergie solaire et éolienne.",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 31,
    question: "Réguler le dioxyde de carbone (le principal gaz à effet de serre) comme un polluant.",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 32,
    question: "Exiger que les entreprises de combustibles fossiles paient une taxe carbone et utilisent l'argent pour réduire d'autres taxes (comme l'impôt sur le revenu) d'un montant équivalent.",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 33,
    question: "Fournir des remboursements d'impôts pour les personnes qui achètent des véhicules ou des panneaux solaires économes en énergie.",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 34,
    question: "Forer pour le pétrole dans le Refuge de faune nationale de l'Arctique.",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 35,
    question: "Étendre le forage offshore pour le pétrole et le gaz naturel au large des côtes des États-Unis.",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 36,
    question: "Les écoles devraient enseigner à nos enfants les causes, les conséquences et les solutions potentielles au réchauffement climatique.",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 37,
    question: "Pensez-vous que les entreprises et l'industrie devraient faire plus ou moins pour lutter contre le réchauffement climatique ?",
    options: ["Beaucoup plus", "Plus", "Actuellement faire ce qu'il faut", "Moins", "Beaucoup moins"]
  },
  {
    id: 38,
    question: "Le Président.",
    options: ["Beaucoup plus", "Plus", "Actuellement faire ce qu'il faut", "Moins", "Beaucoup moins"]
  },
  {
    id: 39,
    question: "Le Congrès.",
    options: ["Beaucoup plus", "Plus", "Actuellement faire ce qu'il faut", "Moins", "Beaucoup moins"]
  },
  {
    id: 40,
    question: "Votre Gouverneur.",
    options: ["Beaucoup plus", "Plus", "Actuellement faire ce qu'il faut", "Moins", "Beaucoup moins"]
  },
  {
    id: 41,
    question: "Vos responsables locaux.",
    options: ["Beaucoup plus", "Plus", "Actuellement faire ce qu'il faut", "Moins", "Beaucoup moins"]
  },
  {
    id: 42,
    question: "Les citoyens eux-mêmes.",
    options: ["Beaucoup plus", "Plus", "Actuellement faire ce qu'il faut", "Moins", "Beaucoup moins"]
  },
  {
    id: 43,
    question: "Le réchauffement climatique devrait-il être une priorité pour le prochain président et le Congrès ?",
    options: ["Très élevée", "Élevée", "Moyenne", "Faible"]
  },
  {
    id: 44,
    question: "Le développement des sources d'énergie propre devrait-il être une priorité ?",
    options: ["Très élevée", "Élevée", "Moyenne", "Faible"]
  },
  {
    id: 45,
    question: "Générer de l'énergie renouvelable (solaire et éolienne) sur des terrains publics aux États-Unis.",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 46,
    question: "Soutenir la transition de l'économie américaine des combustibles fossiles vers 100 % d'énergie propre d'ici 2050.",
    options: ["Fortement d'accord", "Plutôt d'accord", "Plutôt pas d'accord", "Fortement pas d'accord"]
  },
  {
    id: 47,
    question: "À quelle fréquence discutez-vous du réchauffement climatique avec vos amis et votre famille ?",
    options: ["Souvent", "Occasionnellement", "Rarement", "Jamais"]
  },
  {
    id: 48,
    question: "À quelle fréquence entendez-vous parler du réchauffement climatique dans les médias ?",
    options: [
      "Au moins une fois par semaine",
      "Au moins une fois par mois",
      "Plusieurs fois par an",
      "Une fois par an ou moins souvent",
      "Jamais"
    ]
  },
  {
    id: 49,
    question: "À quel point évalueriez-vous les effets personnels du réchauffement climatique que vous avez vécus ?",
    options: [
      "Pas du tout graves",
      "Légèrement graves",
      "Modérément graves",
      "Très graves",
      "Je ne sais pas / Non applicable"
    ]
  },
  {
    id: 50,
    question: "Seriez-vous personnellement prêt à payer des factures d'énergie plus élevées pour soutenir le développement d'énergies renouvelables (solaire, éolien, etc.) ?",
    options: ["Oui, absolument", "Probablement oui", "Probablement non", "Absolument non", "Je ne sais pas"]
  },
  {
    id: 51,
    question: "Dans quelle mesure vous sentez-vous personnellement responsable de réduire les effets du réchauffement climatique sur les générations futures ?",
    options: [
      "Pas du tout responsable",
      "Légèrement responsable",
      "Modérément responsable",
      "Très responsable",
      "Je ne sais pas"
    ]
  }
];

export default fr;
