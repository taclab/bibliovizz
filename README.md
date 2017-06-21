# Bibliovizz

# Présentation
L'objectif est de fournir aux bibliothèques un ensemble permettant de visualiser leurs données avec Kibana dans des Dashboards pédéfinis.
Les données structurées en JSON selon le modèle sont importées automatiquement dans ElasticSearch.

## Architecture

![Schema](https://raw.githubusercontent.com/taclab/bibliovizz/master/docs/images/schema.jpg)


## Structuration de données

```
{
  "record": [
{
  "biblionumber": "25060",
  "ppn": "001348310",
  "authors": [
    {
      "lastname": "Muller",
      "firstname": "John P",
      "role": "Auteur",
      "ppn": "029257093"
    },
    {
      "lastname": "Julien",
      "firstname": "Philippe",
      "role": "Autres",
      "ppn": "026942879"
    },
    {
      "lastname": "Richardson",
      "firstname": "William John",
      "role": "",
      "ppn": ""
    }
  ],
  "subjects": [
    {
      "term": "Lacan, Jacques (1901-1981)",
      "system": "rameau",
      "subdiv": "",
      "time": "",
      "geo": ""
    }
  ],
  "series": [
    {
      "title": "Littoral. Traduction",
      "volume": "1"
    },
    {
      "title": "",
      "volume": ""
    },
    {
      "title": "",
      "volume": ""
    }
  ],
  "isbn": [
    "2-86586-046-9"
  ],
  "ean": [
    "9782865860463"
  ],
  "itemtype": [
    "Livre"
  ],
  "titles": [
    {
      "title": "Ouvrir les Écrits de Jacques Lacan",
      "subtitle": "",
      "altertitle": "",
      "volume": "",
      "part_title": "",
      "part_num": ""
    }
  ],
  "publisher": "Toulouse : Érès,&nbsp;1987",
  "year": "1987",
  "item": [
    {
      "damaged": "0",
      "itemlost": "0",
      "withdrawn": "0",
      "withdrawnstatus": "false",
      "itemnumber": "40769",
      "ccode": "",
      "homebranch": "Bibliothèque Universitaire Centrale",
      "location": "Étage – Philosophie et Psychologie (S)",
      "barcode": "1533477",
      "itemcallnumber": "S 150.195/LACAN/681",
      "notforloan": "Empruntable",
      "onloan": "",
      "itemtype": "Prêt normal",
      "issues": "106",
      "itemnotes": "",
      "transaction": [
        {
          "date_due": "2013-11-07 23:59:00",
          "branchcode": "BU",
          "issuingbranch": null,
          "lastreneweddate": null,
          "renewals": null,
          "lecteur_categorie": "Master, Licence pro",
          "lecteur_statut": "Étudiant",
          "lecteur_type": null,
          "lecteur_etape": "M1PSYC",
          "lecteur_cycleuniv": "2nd cycle (M)",
          "lecteur_affectation": "Ufr Sciences Humaines",
          "lecteur_diplome": "MASTER PSYCHOLOGIE (Maitrise)",
          "lecteur_campus": "campus rennes2 villejean",
          "lecteur_etablissement": "- Université Rennes 2 "
        },
        {
          "date_due": "2015-05-18 23:59:00",
          "branchcode": "BU",
          "issuingbranch": null,
          "lastreneweddate": null,
          "renewals": null,
          "lecteur_categorie": "Master, Licence pro",
          "lecteur_statut": "Étudiant",
          "lecteur_type": null,
          "lecteur_etape": "M2PCRI",
          "lecteur_cycleuniv": "2nd cycle (M)",
          "lecteur_affectation": "Ufr Sciences Humaines",
          "lecteur_diplome": "MASTER PSYCHO CRIMONOLOGIE",
          "lecteur_campus": "campus rennes2 villejean",
          "lecteur_etablissement": "- Université Rennes 2 "
        },
        {
          "date_due": "2016-12-02 23:59:00",
          "branchcode": "BU",
          "issuingbranch": null,
          "lastreneweddate": null,
          "renewals": null,
          "lecteur_categorie": "Licence",
          "lecteur_statut": "Étudiant",
          "lecteur_type": null,
          "lecteur_etape": "L3HIAR | L2APLA",
          "lecteur_cycleuniv": "1er cycle (L)",
          "lecteur_affectation": "Ufr Arts, Lettres, Communication",
          "lecteur_diplome": "Licence Histoire de l'Art | Licence Arts Plastiques (DEUG)",
          "lecteur_campus": "campus rennes2 villejean",
          "lecteur_etablissement": "- Université Rennes 2 "
        }
      ]
    },
    {
      "damaged": "0",
      "itemlost": "0",
      "withdrawn": "0",
      "withdrawnstatus": "false",
      "itemnumber": "40770",
      "ccode": "",
      "homebranch": "Bibliothèque Universitaire Centrale",
      "location": "Étage – Philosophie et Psychologie (S)",
      "barcode": "0281667424",
      "itemcallnumber": "S 150.195/LACAN/682",
      "notforloan": "Empruntable",
      "onloan": "",
      "itemtype": "Prêt normal",
      "issues": "110",
      "itemnotes": "",
      "transaction": [
        {
          "date_due": "2014-11-04 23:59:00",
          "branchcode": "BU",
          "issuingbranch": null,
          "lastreneweddate": null,
          "renewals": null,
          "lecteur_categorie": "Master, Licence pro",
          "lecteur_statut": "Étudiant",
          "lecteur_type": null,
          "lecteur_etape": "M1PSYC",
          "lecteur_cycleuniv": "2nd cycle (M)",
          "lecteur_affectation": "Ufr Sciences Humaines",
          "lecteur_diplome": "Master Psychologie (Maîtrise)",
          "lecteur_campus": "campus rennes2 villejean",
          "lecteur_etablissement": "- Université Rennes 2 "
        },
        {
          "date_due": "2015-01-09 23:59:00",
          "branchcode": "BU",
          "issuingbranch": null,
          "lastreneweddate": null,
          "renewals": null,
          "lecteur_categorie": "Master, Licence pro",
          "lecteur_statut": "Étudiant",
          "lecteur_type": null,
          "lecteur_etape": "M1PSYC",
          "lecteur_cycleuniv": "2nd cycle (M)",
          "lecteur_affectation": "Ufr Sciences Humaines",
          "lecteur_diplome": "MASTER PSYCHOLOGIE (Maîtrise)",
          "lecteur_campus": "campus rennes2 villejean",
          "lecteur_etablissement": "- Université Rennes 2 "
        },
        {
          "date_due": "2016-04-06 23:59:00",
          "branchcode": "BU",
          "issuingbranch": null,
          "lastreneweddate": null,
          "renewals": null,
          "lecteur_categorie": "Master, Licence pro",
          "lecteur_statut": "Étudiant",
          "lecteur_type": null,
          "lecteur_etape": "M1PSYC",
          "lecteur_cycleuniv": "2nd cycle (M)",
          "lecteur_affectation": "Ufr Sciences Humaines",
          "lecteur_diplome": "Master Psychologie (Maîtrise)",
          "lecteur_campus": "campus rennes2 villejean",
          "lecteur_etablissement": "- Université Rennes 2 "
        },
        {
          "date_due": "2016-11-28 23:59:00",
          "branchcode": "BU",
          "issuingbranch": null,
          "lastreneweddate": "2016-11-01 00:00:00",
          "renewals": "1",
          "lecteur_categorie": "Licence",
          "lecteur_statut": "Étudiant",
          "lecteur_type": null,
          "lecteur_etape": "CLS2AN | L3PSYC",
          "lecteur_cycleuniv": "1er cycle (L)",
          "lecteur_affectation": "Ufr Langues | Ufr Sciences Humaines",
          "lecteur_diplome": "CLES ANGLAIS NIVEAU2 | Licence Psychologie",
          "lecteur_campus": "campus rennes2 villejean",
          "lecteur_etablissement": "- Université Rennes 2 "
        }
      ]
    }
  ],
  "cover": "https://images-na.ssl-images-amazon.com/images/P/2865860469.01.MZZZZZZZ.jpg"
}
  ]
}
```

![Schema](https://raw.githubusercontent.com/taclab/bibliovizz/master/docs/images/dashboard-audit.jpg)

