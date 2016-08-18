(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "1_index",
    "cf770d24-71bc-4947-a1fb-48e908c88255": "6_Compras",
    "ebedfa07-d01f-485d-b305-6a46101e81e2": "7_Librero",
    "a17ddb75-2b01-409d-be87-74965fa9c8b6": "apunte",
    "a1e51970-c8b2-4e0f-897a-fc303f5d4434": "8_Suscripciones",
    "68f5a729-4642-4ed0-97cd-f7493392659e": "5_perfil",
    "a4d531a7-d2e3-4b87-9521-1853931bd29e": "9_calendario",
    "aafd4bf7-8e43-4b7d-bb0e-18b704761193": "4_iniciarSesion",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);