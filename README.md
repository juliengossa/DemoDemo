# DemoDemo
Un simulateur de démographie

## Objectifs pédagogiques
DemoDemo est un démonstrateur de démographie, qui simule une population, avec un certain nombre d'individus par âge. 

Les objectifs pédagogiques sont de permettre au joueur de comprendre :

- Les concepts de massification et de stagnation éducative
  - En augmentant le niveau de qualification de sa populaiton, une civilisation améliore ses performances économiques, mais cette politique connait une limite.
- Le concept de stratification scolaire.
  - En décidant du nombre de places dans le système éducatif, on pilote une stratification scolaire, qui ne correspond pas forcément à la stratification économique.
- Le temps long de l'éducation.
  - le temps qui sépare une décision de ses effets concrets en matière d'éducation peut être très long, et la période de temps qui est engagée par ces décisions encore plus.

### Objectifs pédagogiques avancés 
- L'éducation impacte de nombreux aspects d'une société.
  - En plus de l'économie, la natalité et la mortalité notamment.
- L'éducation peut se placer dans un contexte de compétition internationale.
  - Monter en qualification peut servir à vaincre sur les plans économiques, technologiques (militaire) ou culturels.
- Le temps de l'éducation n'est pas le temps du politique.
  - Impossibilité pour un élu de récolter les fruits d'une réforme dans les 5 ans de son mandat.
- 


## Description des fonctionnalités

Le pas de la simulation est de un an.

- Tous les individus veillissent d'une année ensemble
- Un certain nombre d'individus naissent et meurent. 

Les individus sont comptés par statut : enfant, étudiant, puis travailleur et enfin retraité.

- Chaque statut a ses caractéristiques en terme de production et de consommation de richesses.
- Si une place de formation est disponible, un enfant devient étudiant, et reste étudiant tant qu'il reste des places de formation.
- A partir de x ans (10 par défaut), un enfant qui n'est pas étudiant devient un travailleur.
- Un étudiant qui quitte le système éducatif devient un travailleur.
- A partir de x ans (64 par défaut), un travailleur devient retraité.

Le système éducatif est organisé en trois strates : primaine, secondaire et tertaire (supérieur).

- A 3 ans, un enfant peut devenir étudiant dans le primaire, sinon il reste enfant.
- A 10 ans, un enfant devient un trvailleur non qualifié.
- A 10 ans, un étudiant peut devenir étudiant dans le secondaire s'il y a une place, sinon il devient travailleur peu qualifié.
- A 18 ans, un étudiant peut devenir étudiant dans le supérieur s'il y a une place, sinon il devient travailleur qualifé.
- A 23 ans, un étudiant devient travailleur très qualifé.

Chaque année, un budget nationnal est calculé.

- Le surplus est la différence entre la somme des richesses produites et la somme des richesses consommées.
- Une part du surplus peut être investie dans l'éducation.
- Cet investissement ouvre des places de formation, qui sont automatiquement occupées par les jeunes.

Chaque année, un budget 

Chaque année, 



A partir de 10 
