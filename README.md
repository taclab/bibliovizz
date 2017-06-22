# Bibliovizz

# Présentation
L'objectif est de fournir aux bibliothèques une architecture permettant de visualiser leurs données avec Kibana dans des Dashboards prédéfinis. Ces dashboard seraient réutilisables par d'autres établissements. A partir d'un export de données de prêts Koha en format CSV, nous avons établi 2 profils de tableau de bord (dashboard) permettant de fournir des visuels. 

Un **dashboard orienté "lecteur"** propose les listes des documents les plus empruntés, personnalisable selon le profil du lecteur. Un **dashboard orienté "professionnel"** propose une vue sur les collections combinant différents paramètres (âge de la collection, taux de rotation des nouveautés...)
Les visuels obtenus permettent d'orienter finement la politique documentaire. Les visuels proposent une vue générale qui peut être affinée, filtrée pour une mise à jour immédiate (focus sur un type de lecteur, sur un segment de collections, date...)

Dans un deuxième temps, pour visualiser l'ensemble des données d'un catalogue, nous avons travaillé **un modèle de données structuré en JSON**.  Ce modèle pourra être importé automatiquement dans ElasticSearch. Une étape en amont est envisagée :  une moulinette transformant le cvs en json. 


## Architecture

![Schema](https://raw.githubusercontent.com/taclab/bibliovizz/master/docs/images/schema.jpg)


## Installation 

### Lancement de l'instance Elastiscsearch / Kibana
/Docker
`make start`

### Import des données
/import
`node import.js`

### Accès aux visualisation
Kibana - http://localhost:5601/
Moteur de recherche (Elasticsearch) - http://localhost:9200/
/Dashboard


## Structuration et modèle de données (work in progress)

```
{
  "record": [
    {
      "biblionumber": "313958",
      "ppn": "08578656X",
      "authors": [
        {
          "lastname": "Safouan",
          "firstname": "Moustapha",
          "role": "Directeur de publication",
          "ppn": "027117278"
        },
        {
          "lastname": "Safouan",
          "firstname": "Moustafa",
          "role": "",
          "ppn": ""
        }
      ],
      "subjects": [
        {
          "term": "Lacan",
          "system": "rameau",
          "subdiv": "Critique et interprétation",
          "time": "",
          "geo": ""
        },
        {
          "term": "Freud",
          "system": "rameau",
          "subdiv": "Critique et interprétation",
          "time": "",
          "geo": ""
        },
        {
          "term": "Lacan",
          "system": "",
          "subdiv": "",
          "time": "",
          "geo": ""
        }
      ],
      "series": [
        {
          "title": "Histoire de la pensée (Paris. 1999)",
          "volume": ""
        }
      ],
      "isbn": [
        "2-213-62327-9",
        "978-2-213-62327-6"
      ],
      "ean": [
        "9782213623276"
      ],
      "itemtype": [
        "Livre"
      ],
      "titles": [
        {
          "title": "Lacaniana",
          "subtitle": "les séminaires de Jacques Lacan",
          "altertitle": "",
          "volume": "",
          "part_title": "1964-1979",
          "part_num": "2"
        }
      ],
      "publisher": "Paris : Fayard,&nbsp;impr. 2005",
      "year": "2005",
      "item": [
        {
          "damaged": "0",
          "itemlost": "0",
          "withdrawn": "0",
          "withdrawnstatus": "false",
          "itemnumber": "509568",
          "ccode": "",
          "homebranch": "Bibliothèque Universitaire Centrale",
          "location": "Étage – Philosophie et Psychologie (S)",
          "barcode": "0286217969",
          "itemcallnumber": "S 150.195/LACAN/2188",
          "notforloan": "Empruntable",
          "onloan": "",
          "itemtype": "Prêt normal",
          "issues": "35",
          "itemnotes": "",
          "transaction": [
            {
              "date_due": "2013-02-22 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-02-20 12:27:07",
              "issuedate": "2013-01-25 14:54:00",
              "returndate": "2013-02-20 12:27:07",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "BILATE",
              "lecteur_cycleuniv": "4ème cycle",
              "lecteur_affectation": "Centre Inter.rennais D'Etudes Du Francais Pour Etrangers",
              "lecteur_diplome": "ECHANGES INTERNATIONAUX",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2014-03-20 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2014-03-10 09:02:58",
              "issuedate": "2014-02-20 16:20:00",
              "returndate": "2014-03-10 09:02:58",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PADU",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PSYCHOPATHOLOGIE ADULTE",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2014-04-18 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2014-04-18 11:15:00",
              "issuedate": "2014-03-28 17:39:00",
              "returndate": "2014-04-18 11:15:00",
              "renewals": null,
              "lecteur_categorie": "Lecteur autorisé",
              "lecteur_statut": null,
              "lecteur_type": null,
              "lecteur_etape": null,
              "lecteur_cycleuniv": null,
              "lecteur_affectation": null,
              "lecteur_diplome": null,
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2014-12-05 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2014-11-13 09:46:48",
              "issuedate": "2014-11-07 10:29:00",
              "returndate": "2014-11-13 09:46:48",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M1PSYC",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PSYCHOLOGIE (Maitrise)",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2014-12-01 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2014-12-01 15:33:09",
              "issuedate": "2014-11-17 15:23:00",
              "returndate": "2014-12-01 15:33:09",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2BMPE",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": null,
              "lecteur_diplome": "Master 2 MEEF Professorat des Ecoles St Brieuc",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2015-04-01 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2015-03-25 11:00:44",
              "issuedate": "2015-03-04 13:16:00",
              "returndate": "2015-03-25 11:00:44",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M1SIFA",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "Master SIFA",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            }
          ]
        },
        {
          "damaged": "0",
          "itemlost": "0",
          "withdrawn": "0",
          "withdrawnstatus": "false",
          "itemnumber": "509569",
          "ccode": "",
          "homebranch": "Bibliothèque Universitaire Centrale",
          "location": "Étage – Philosophie et Psychologie (S)",
          "barcode": "0286217976",
          "itemcallnumber": "S 150.195/LACAN/2189",
          "notforloan": "Empruntable",
          "onloan": "",
          "itemtype": "Prêt normal",
          "issues": "19",
          "itemnotes": "",
          "transaction": []
        },
        {
          "damaged": "0",
          "itemlost": "0",
          "withdrawn": "0",
          "withdrawnstatus": "false",
          "itemnumber": "509570",
          "ccode": "",
          "homebranch": "Bibliothèque Universitaire Centrale",
          "location": "Étage – Philosophie et Psychologie (S)",
          "barcode": "0286217983",
          "itemcallnumber": "S 150.195/LACAN/2190",
          "notforloan": "Empruntable",
          "onloan": "",
          "itemtype": "Prêt normal",
          "issues": "22",
          "itemnotes": "",
          "transaction": [
            {
              "date_due": "2013-12-10 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-12-17 12:07:50",
              "issuedate": "2013-11-19 14:26:00",
              "returndate": "2013-12-17 12:07:50",
              "renewals": null,
              "lecteur_categorie": "Lecteur autorisé",
              "lecteur_statut": null,
              "lecteur_type": null,
              "lecteur_etape": null,
              "lecteur_cycleuniv": null,
              "lecteur_affectation": null,
              "lecteur_diplome": null,
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2016-01-11 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": "2015-12-11 00:00:00",
              "timestamp": "2016-01-21 16:51:10",
              "issuedate": "2015-12-03 15:05:59",
              "returndate": "2016-01-21 16:51:10",
              "renewals": "1",
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M1PSYC",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "Master Psychologie (Maîtrise)",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            }
          ]
        },
        {
          "damaged": "0",
          "itemlost": "0",
          "withdrawn": "0",
          "withdrawnstatus": "false",
          "itemnumber": "509571",
          "ccode": "",
          "homebranch": "Bibliothèque Universitaire Centrale",
          "location": "Étage – Philosophie et Psychologie (S)",
          "barcode": "0286217990",
          "itemcallnumber": "S 150.195/LACAN/2191",
          "notforloan": "Empruntable",
          "onloan": "",
          "itemtype": "Prêt normal",
          "issues": "20",
          "itemnotes": "",
          "transaction": [
            {
              "date_due": "2013-05-02 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-04-17 14:44:26",
              "issuedate": "2013-04-04 12:01:00",
              "returndate": "2013-04-17 14:44:26",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M1PSYC",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PSYCHOLOGIE (Maitrise)",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2013-06-20 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-06-21 15:28:14",
              "issuedate": "2013-05-23 09:24:00",
              "returndate": "2013-06-21 15:28:14",
              "renewals": null,
              "lecteur_categorie": "Lecteur autorisé",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PADU",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PSYCHPATHOLOGIE ADULTE",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2016-04-05 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2016-04-01 17:02:06",
              "issuedate": "2016-03-08 16:03:42",
              "returndate": "2016-04-01 17:02:06",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PCMM",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "Master Pratiques Cliniques en Milieu Médical",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2017-02-28 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": "2017-01-30 00:00:00",
              "timestamp": "2017-02-17 16:38:13",
              "issuedate": "2017-01-16 18:01:48",
              "returndate": "2017-02-17 16:38:13",
              "renewals": "1",
              "lecteur_categorie": "Lecteur autorisé",
              "lecteur_statut": null,
              "lecteur_type": null,
              "lecteur_etape": null,
              "lecteur_cycleuniv": null,
              "lecteur_affectation": null,
              "lecteur_diplome": null,
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            }
          ]
        },
        {
          "damaged": "0",
          "itemlost": "0",
          "withdrawn": "0",
          "withdrawnstatus": "false",
          "itemnumber": "509572",
          "ccode": "",
          "homebranch": "Bibliothèque Universitaire Centrale",
          "location": "Étage – Philosophie et Psychologie (S)",
          "barcode": "0286218003",
          "itemcallnumber": "S 150.195/LACAN/2192",
          "notforloan": "Empruntable",
          "onloan": "",
          "itemtype": "Prêt normal",
          "issues": "22",
          "itemnotes": "",
          "transaction": [
            {
              "date_due": "2012-11-09 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2012-10-17 15:41:15",
              "issuedate": "2012-10-12 18:36:00",
              "returndate": "2012-10-17 15:41:15",
              "renewals": null,
              "lecteur_categorie": "Lecteur autorisé",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PADU",
              "lecteur_cycleuniv": null,
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": null,
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2013-05-03 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-05-15 12:18:50",
              "issuedate": "2013-04-05 09:11:00",
              "returndate": "2013-05-15 12:18:50",
              "renewals": null,
              "lecteur_categorie": "Lecteur autorisé",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PADU",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PSYCHPATHOLOGIE ADULTE",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2013-09-19 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-09-11 12:04:05",
              "issuedate": "2013-08-29 12:40:00",
              "returndate": "2013-09-11 12:04:05",
              "renewals": null,
              "lecteur_categorie": "Lecteur autorisé",
              "lecteur_statut": null,
              "lecteur_type": null,
              "lecteur_etape": null,
              "lecteur_cycleuniv": null,
              "lecteur_affectation": null,
              "lecteur_diplome": null,
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            }
          ]
        },
        {
          "damaged": "0",
          "itemlost": "0",
          "withdrawn": "0",
          "withdrawnstatus": "false",
          "itemnumber": "509573",
          "ccode": "",
          "homebranch": "Bibliothèque Universitaire Centrale",
          "location": "Étage – Philosophie et Psychologie (S)",
          "barcode": "0286218010",
          "itemcallnumber": "S 150.195/LACAN/2193",
          "notforloan": "Empruntable",
          "onloan": "",
          "itemtype": "Prêt normal",
          "issues": "24",
          "itemnotes": "",
          "transaction": [
            {
              "date_due": "2013-01-07 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-01-09 08:50:54",
              "issuedate": "2012-11-29 17:30:00",
              "returndate": "2013-01-09 08:50:54",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M1PSYC",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PSYCHOLOGIE (Maitrise)",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2013-04-29 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-04-30 12:52:40",
              "issuedate": "2013-03-29 15:47:00",
              "returndate": "2013-04-30 12:52:40",
              "renewals": null,
              "lecteur_categorie": null,
              "lecteur_statut": null,
              "lecteur_type": null,
              "lecteur_etape": null,
              "lecteur_cycleuniv": null,
              "lecteur_affectation": null,
              "lecteur_diplome": null,
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2015-09-08 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2015-09-07 11:28:26",
              "issuedate": "2015-06-02 15:27:00",
              "returndate": "2015-09-07 11:28:26",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PCMM",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "Master Pratiques Cliniques en Milieu Médical",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            }
          ]
        },
        {
          "damaged": "0",
          "itemlost": "0",
          "withdrawn": "0",
          "withdrawnstatus": "false",
          "itemnumber": "509574",
          "ccode": "Psychanalyse (PSY4)",
          "homebranch": "Bibliothèque Universitaire Centrale",
          "location": "Étage – Philosophie et Psychologie (S)",
          "barcode": "0288293688",
          "itemcallnumber": "S 150.195/LACAN/2828",
          "notforloan": "Empruntable",
          "onloan": "",
          "itemtype": "Prêt normal",
          "issues": "13",
          "itemnotes": "",
          "transaction": [
            {
              "date_due": "2013-01-07 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2012-12-14 15:22:34",
              "issuedate": "2012-11-30 17:07:00",
              "returndate": "2012-12-14 15:22:34",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "BILATE",
              "lecteur_cycleuniv": "4ème cycle",
              "lecteur_affectation": "Centre Inter.rennais D'Etudes Du Francais Pour Etrangers",
              "lecteur_diplome": "ECHANGES INTERNATIONAUX",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2013-03-12 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-02-22 12:06:45",
              "issuedate": "2013-02-12 19:26:00",
              "returndate": "2013-02-22 12:06:45",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PRPS | L3PSYC",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PRATIQUES ET RECHERCHES EN PSYCHOPATHOLOGIE | LICENCE PSYCHOLOGIE",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2014-05-06 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2014-05-05 11:33:39",
              "issuedate": "2014-04-08 14:35:00",
              "returndate": "2014-05-05 11:33:39",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M1PSYC",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PSYCHOLOGIE (Maitrise)",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2014-11-14 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2014-11-07 12:14:24",
              "issuedate": "2014-10-17 12:17:00",
              "returndate": "2014-11-07 12:14:24",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PCMM",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PRATIQUES CLINIQUES EN MILIEU MEDICAL",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2014-12-12 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2014-12-13 16:33:55",
              "issuedate": "2014-11-21 17:28:00",
              "returndate": "2014-12-13 16:33:55",
              "renewals": null,
              "lecteur_categorie": "Lecteur autorisé",
              "lecteur_statut": null,
              "lecteur_type": null,
              "lecteur_etape": null,
              "lecteur_cycleuniv": null,
              "lecteur_affectation": null,
              "lecteur_diplome": null,
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2016-02-22 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2016-02-22 11:45:55",
              "issuedate": "2016-01-23 15:23:49",
              "returndate": "2016-02-22 11:45:55",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "BILATE",
              "lecteur_cycleuniv": "4ème cycle",
              "lecteur_affectation": "Centre Inter.rennais D'Etudes Du Francais Pour Etrangers",
              "lecteur_diplome": "Echanges Internationaux",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            }
          ]
        },
        {
          "damaged": "0",
          "itemlost": "0",
          "withdrawn": "0",
          "withdrawnstatus": "false",
          "itemnumber": "509575",
          "ccode": "Psychanalyse (PSY4)",
          "homebranch": "Bibliothèque Universitaire Centrale",
          "location": "Étage – Philosophie et Psychologie (S)",
          "barcode": "0288293671",
          "itemcallnumber": "S 150.195/LACAN/2829",
          "notforloan": "Empruntable",
          "onloan": "",
          "itemtype": "Prêt normal",
          "issues": "9",
          "itemnotes": "",
          "transaction": [
            {
              "date_due": "2013-01-07 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2012-12-14 15:22:46",
              "issuedate": "2012-12-04 15:12:00",
              "returndate": "2012-12-14 15:22:46",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "BILATE",
              "lecteur_cycleuniv": "4ème cycle",
              "lecteur_affectation": "Centre Inter.rennais D'Etudes Du Francais Pour Etrangers",
              "lecteur_diplome": "ECHANGES INTERNATIONAUX",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2013-12-13 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-12-19 14:12:02",
              "issuedate": "2013-11-15 18:45:00",
              "returndate": "2013-12-19 14:12:02",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M1PSYC",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "Master Psychologie (Maîtrise)",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2014-05-06 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2014-05-06 09:35:56",
              "issuedate": "2014-04-08 14:36:00",
              "returndate": "2014-05-06 09:35:56",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PCMM",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PRATIQUES CLINIQUES EN MILIEU MEDICAL",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2016-02-22 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2016-02-03 14:54:00",
              "issuedate": "2016-01-20 15:21:31",
              "returndate": "2016-02-03 14:54:00",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PRPS",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "Master pratiques & Recherches en Psychopathologie",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2016-11-28 23:59:00",
              "branchcode": "BU",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2016-11-18 11:45:52",
              "issuedate": "2016-10-18 12:36:31",
              "returndate": "2016-11-18 11:45:52",
              "renewals": null,
              "lecteur_categorie": "Doctorant, Enseignant Chercheur et Personnel de l'université",
              "lecteur_statut": "Enseignant-Chercheur",
              "lecteur_type": "Vacataire fonct.",
              "lecteur_etape": null,
              "lecteur_cycleuniv": null,
              "lecteur_affectation": null,
              "lecteur_diplome": null,
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            }
          ]
        },
        {
          "damaged": "0",
          "itemlost": "0",
          "withdrawn": "0",
          "withdrawnstatus": "false",
          "itemnumber": "509576",
          "ccode": "Psychanalyse (PSY4)",
          "homebranch": "Bibliothèque de Sciences Humaines",
          "location": "En Salle",
          "barcode": "0286915193",
          "itemcallnumber": "150.195 SAF",
          "notforloan": "Empruntable",
          "onloan": "",
          "itemtype": "Prêt normal",
          "issues": "5",
          "itemnotes": "",
          "transaction": [
            {
              "date_due": "2012-11-26 23:59:00",
              "branchcode": "HUM",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2012-11-30 10:29:55",
              "issuedate": "2012-11-12 16:17:00",
              "returndate": "2012-11-30 10:29:55",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PCMM",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PRATIQUES CLINIQUES EN MILIEU MEDICAL",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            },
            {
              "date_due": "2013-03-06 23:59:00",
              "branchcode": "HUM",
              "issuingbranch": null,
              "lastreneweddate": null,
              "timestamp": "2013-02-18 13:14:07",
              "issuedate": "2013-02-06 18:07:00",
              "returndate": "2013-02-18 13:14:07",
              "renewals": null,
              "lecteur_categorie": "Master, Licence pro",
              "lecteur_statut": "Étudiant",
              "lecteur_type": null,
              "lecteur_etape": "M2PADU",
              "lecteur_cycleuniv": "2nd cycle (M)",
              "lecteur_affectation": "Ufr Sciences Humaines",
              "lecteur_diplome": "MASTER PSYCHOPATHOLOGIE ADULTE",
              "lecteur_campus": "campus",
              "lecteur_etablissement": "universite"
            }
          ]
        }
      ]
    }
  ]
}
```
[Voir la documentation sur les données](https://github.com/taclab/bibliovizz/blob/master/docs/doc-data.csv)

### Visualisation 

[Voir la documentation sur les visualisations](https://github.com/taclab/bibliovizz/blob/master/docs/doc-viz.csv)


![Schema](https://raw.githubusercontent.com/taclab/bibliovizz/master/docs/images/dashboard-audit.jpg)

