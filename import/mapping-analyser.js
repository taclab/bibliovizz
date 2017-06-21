{
  "settings": {
    "analysis": {
      "filter": {
        "elision": {
          "type": "elision",
          "articles": ["l", "m", "t", "qu", "n", "s", "j", "d"]
        }
      },
      "analyzer": {
        "custom_french_analyzer": {
          "tokenizer": "letter",
          "filter": ["asciifolding", "lowercase", "french_stem", "elision", "stop"]
        },
        "tag_analyzer": {
          "tokenizer": "keyword",
          "filter": ["asciifolding", "lowercase"]
        }
      }
    }
  },
  "mappings": {
    "book" :{
      "properties" : {
        "title": {"type" : "string", "analyzer" : "custom_french_analyzer", "index": "analyzed"},
        "subtitle": {"type" : "string" },
        "publicationyear": {"type" : "date" },
        "authors": {
          "type": "nested",
          "properties" : {
            "nom": {"type" : "string"},
            "prenom": {"type" : "string"}
          }
        },
        "issuesCount": {"type" : "integer"},
        "matieres": {"type" : "string"},
        "itemtype": {"type" : "string" },
        "itype": {"type" : "string" },
        "ccode": {"type" : "string" }
      }
    }
  }
}

