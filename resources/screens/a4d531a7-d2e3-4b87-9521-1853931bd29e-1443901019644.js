jQuery("#simulation")
  .on("click", ".s-a4d531a7-d2e3-4b87-9521-1853931bd29e .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-miPerfil_text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a4d531a7-d2e3-4b87-9521-1853931bd29e #s-miPerfil_text": {
                      "attributes": {
                        "background-color": "#699CFC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-a4d531a7-d2e3-4b87-9521-1853931bd29e #s-miPerfil_text": {
                      "attributes-ie": {
                        "-pie-background": "#699CFC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/68f5a729-4642-4ed0-97cd-f7493392659e",
                    "transition": "slideleft"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Suscripciones_text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a4d531a7-d2e3-4b87-9521-1853931bd29e #s-Suscripciones_text": {
                      "attributes": {
                        "background-color": "#699CFC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-a4d531a7-d2e3-4b87-9521-1853931bd29e #s-Suscripciones_text": {
                      "attributes-ie": {
                        "-pie-background": "#699CFC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a1e51970-c8b2-4e0f-897a-fc303f5d4434",
                    "transition": "slideleft"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Compras")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a4d531a7-d2e3-4b87-9521-1853931bd29e #s-Compras": {
                      "attributes": {
                        "background-color": "#699CFC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-a4d531a7-d2e3-4b87-9521-1853931bd29e #s-Compras": {
                      "attributes-ie": {
                        "-pie-background": "#699CFC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cf770d24-71bc-4947-a1fb-48e908c88255",
                    "transition": "slideleft"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Librero")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a4d531a7-d2e3-4b87-9521-1853931bd29e #s-Librero": {
                      "attributes": {
                        "background-color": "#699CFC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-a4d531a7-d2e3-4b87-9521-1853931bd29e #s-Librero": {
                      "attributes-ie": {
                        "-pie-background": "#699CFC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ebedfa07-d01f-485d-b305-6a46101e81e2",
                    "transition": "slideleft"
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-a4d531a7-d2e3-4b87-9521-1853931bd29e .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_36")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#s-menu_bar",
                      "effect": {
                        "type": "slide",
                        "duration": 500,
                        "direction": "left"
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  });