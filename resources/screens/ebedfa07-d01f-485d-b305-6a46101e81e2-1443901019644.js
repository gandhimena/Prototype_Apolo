jQuery("#simulation")
  .on("click", ".s-ebedfa07-d01f-485d-b305-6a46101e81e2 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_12",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_librero",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Bar_menu_icon",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Libro"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
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
    } else if(jFirer.is("#s-Image_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_14",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_librero",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Bar_menu_icon",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Libro"
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
    } else if(jFirer.is("#s-Two-line-item_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Bloque1_1",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro",
                    "top": {
                      "type": "movetoposition",
                      "value": "36"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "290"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Bloque 1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_18": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_18": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_18": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_18": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro"
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
    } else if(jFirer.is("#s-A_de_A_1_button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-A_de_A_main_1",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Actividad 1/7"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_bloque1_from_Actividad_1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1"
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
    } else if(jFirer.is("#s-Comenzar_Activ_button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Actividad_de_aprendi9",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_bloque1_from_Actividad_1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": " "
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Salir_de_activi8_button"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Message-light_1"
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
    } else if(jFirer.is("#s-Button_Cancelar_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Message-light_1"
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
    } else if(jFirer.is("#s-Button_Aceptar_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Bloque1_1",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Salir_de_activi8_button",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Bloque 1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-fondo_cuadro_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro_1": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro_1": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_5": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_5": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_6": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_6": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_7": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_7": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_8": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_8": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Comenzar_Activ_button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Actividad_de_aprendi9",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_bloque1_from_Actividad_1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": " "
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Salir_de_activi8_button"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Message-light_1"
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
    } else if(jFirer.is("#s-Resp_A_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro_1": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro_1": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_5": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_5": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_6": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_6": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_7": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_7": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_8": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_8": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Resp_A_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro_1": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro_1": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_5": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_5": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_6": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_6": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_7": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_7": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_8": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_8": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Resp_A_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro_1": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro_1": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_5": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_5": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_6": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_6": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_7": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_7": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_8": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_8": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Resp_A_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro_1": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro_1": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_5": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_5": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_6": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_6": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_7": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_7": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_8": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_8": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_librero",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Bar_menu_icon",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Libro"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
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
    } else if(jFirer.is("#s-Two-line-item")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Bloque1",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro",
                    "top": {
                      "type": "movetoposition",
                      "value": "36"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "290"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Bloque 1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro"
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
    } else if(jFirer.is("#s-Two-line-item_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Bloque2",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque2"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Bloque 2"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque2"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_1": {
                      "attributes": {
                        "background-color": "#F3F3F3",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_1": {
                      "attributes-ie": {
                        "-pie-background": "#F3F3F3",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_1": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_1": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 500
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
    } else if(jFirer.is("#s-A_de_A_1_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-A_de_A_main",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Actividad 1/7"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_bloque1_from_Actividad_1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1"
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
    } else if(jFirer.is("#s-Button_expandir_tabla")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dark-background"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dark-background_Expandido"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Button_expandir_tabla"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Tabla_Bloque1",
                    "top": {
                      "type": "movetoposition",
                      "value": "4150"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "23"
                    },
                    "containment": false
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": " "
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_bloque1_from_tabla"
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
    } else if(jFirer.is("#s-Comenzar_Activ_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Actividad_de_aprendi8",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_bloque1_from_Actividad_1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": " "
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Salir_de_activi8_button"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Message-light"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul",
                    "value": "Pregunta 8/10"
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
    } else if(jFirer.is("#s-fondo_cuadro")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_1": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_1": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_2": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_2": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_3": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_3": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_4": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Resp_A_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_1": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_1": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_2": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_2": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_3": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_3": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_4": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Resp_A_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_1": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_1": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_2": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_2": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_3": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_3": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_4": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Resp_A_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_1": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_1": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_2": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_2": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_3": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_3": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_4": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_4": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Resp_A_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-fondo_cuadro": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_1": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_1": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_2": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_2": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_3": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_3": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_4": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Resp_A_4": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Rectangle_59")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Actividad_de_aprendi10"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Salir_de_activi10_button"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul",
                    "value": "Pregunta 10/10"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Salir_de_activi8_button"
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
    } else if(jFirer.is("#s-Button_Cancelar")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Message-light"
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
    } else if(jFirer.is("#s-Button_Aceptar")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Bloque1",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Salir_de_activi8_button",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Bloque 1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Rectangle_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Result_activ"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Salir_de_activi10_button"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Salir_de_activi8_button"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul",
                    "value": "Resultado"
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
    } else if(jFirer.is("#s-Rectangle_52")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_52": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_52": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_53": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_53": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_54": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_54": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_55": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_55": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_56": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_56": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Rectangle_53")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_52": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_52": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_53": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_53": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_54": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_54": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_55": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_55": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_56": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_56": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Rectangle_54")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_52": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_52": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_53": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_53": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_54": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_54": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_55": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_55": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_56": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_56": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Rectangle_56")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_52": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_52": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_53": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_53": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_54": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_54": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_55": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_55": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_56": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_56": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Rectangle_55")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_52": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_52": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_53": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_53": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_54": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_54": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_55": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_55": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_56": {
                      "attributes": {
                        "background-color": "#EFEFEF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Rectangle_56": {
                      "attributes-ie": {
                        "-pie-background": "#EFEFEF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-alert_salir"
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Bloque1",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Salir_de_activi8_button",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Bloque 1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Salir_de_activi10_button"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul",
                    "value": "Pregunta 8 /10"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-alert_salir"
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
    } else if(jFirer.is("#s-Rectangle_60")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-A_de_A_main",
                    "transition": "fade"
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
    } else if(jFirer.is("#s-Continuar_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Bloque1",
                    "transition": "fade"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Text_pregunta_barra_azul",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Bloque 1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Image_24")) {
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
    } else if(jFirer.is("#s-Two-line-item_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Tarea8",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Apunte"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Lista_de_apuntes",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Carpetas"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "width": {
                      "type": "exprvalue",
                      "value": "360"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "78"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Editar",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_libreta"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libreta_from_Tarea8"
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
    } else if(jFirer.is("#s-miPerfil_text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-miPerfil_text": {
                      "attributes": {
                        "background-color": "#699CFC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-miPerfil_text": {
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
    } else if(jFirer.is("#s-Calendario_text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Calendario_text": {
                      "attributes": {
                        "background-color": "#699CFC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Calendario_text": {
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
                    "target": "screens/a4d531a7-d2e3-4b87-9521-1853931bd29e",
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
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Suscripciones_text": {
                      "attributes": {
                        "background-color": "#699CFC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Suscripciones_text": {
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
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Compras": {
                      "attributes": {
                        "background-color": "#699CFC",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Compras": {
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
    } else if(jFirer.is("#s-Salir_de_activi8_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Message-light"
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
    } else if(jFirer.is("#s-BackTo_Libreta")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Tarea8",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "right"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Lista_de_apuntes",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Editar",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_Libreta"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Libreta"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "width": {
                      "type": "exprvalue",
                      "value": "360"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "155"
                    }
                  },
                  "exectype": "timed",
                  "delay": 500
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Carpetas"
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
    } else if(jFirer.is("#s-BackTo_libro_from_Bloque1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Libro"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_Libreta"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro",
                    "top": {
                      "type": "movetoposition",
                      "value": "36"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "322"
                    },
                    "containment": false
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
    } else if(jFirer.is("#s-BackTo_libro_from_Bloque2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Libro"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque2"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_Libreta"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque2"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro",
                    "top": {
                      "type": "movetoposition",
                      "value": "36"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "322"
                    },
                    "containment": false
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
    } else if(jFirer.is("#s-BackTo_libro_from_libreta")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dynamic_Panel"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_2"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Lista_de_apuntes",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "width": {
                      "type": "exprvalue",
                      "value": "360"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "78"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Carpetas"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Libro"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_libreta"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro"
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
    } else if(jFirer.is("#s-BackTo_librero")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_1",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Bar_menu_icon",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Librero"
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
    } else if(jFirer.is("#s-BackTo_libreta_from_Tarea8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Libreta"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Tarea8"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Editar"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "width": {
                      "type": "exprvalue",
                      "value": "360"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "154"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Carpetas",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Lista_de_apuntes",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_libreta"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_libreta_from_Tarea8"
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
    } else if(jFirer.is("#s-BackTo_bloque1_from_Actividad_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Bloque1",
                    "transition": "slideright"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_bloque1_from_Actividad_1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Bloque 1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1",
                    "effect": {
                      "type": "clip",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Indice_temas_icon_open")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Temas_indice",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_close"
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
    } else if(jFirer.is("#s-Indice_temas_icon_close")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Temas_indice",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_close"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
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
    } else if(jFirer.is("#s-Libreta_icon_from_libro")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Libreta"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_libro"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "width": {
                      "type": "exprvalue",
                      "value": "360"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "154"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Carpetas",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Lista_de_apuntes",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_libreta"
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
    } else if(jFirer.is("#s-Libreta_icon_from_Bloque1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Libreta"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_librero"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "width": {
                      "type": "exprvalue",
                      "value": "360"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "154"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Carpetas",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Lista_de_apuntes_from_bloque1",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
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
    } else if(jFirer.is("#s-Salir_de_activi10_button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-alert_salir"
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
    } else if(jFirer.is("#s-BackTo_bloque1_from_tabla")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-BackTo_bloque1_from_tabla"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-BackTo_libro_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Libreta_icon_from_Bloque1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dark-background_Expandido"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Fondo_menuSuperior",
                    "value": "Bloque 1"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Dark-background"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Button_expandir_tabla"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": "#s-Tabla_Bloque1",
                    "top": {
                      "type": "movetoposition",
                      "value": "4293"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "23"
                    },
                    "containment": false
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
    } else if(jFirer.is("#s-Category_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 250
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
    } else if(jFirer.is("#s-Nuevo_apunte_text")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Nuevo_apunte"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_3"
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
    } else if(jFirer.is("#s-Editar")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Editar_Tarea8"
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Temas_indice",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Indice_temas_icon_close"
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
    } else if(jFirer.is("#s-ACEPTAR_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Editar_Tarea8"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_8"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RM_galeria"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RM_camara"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RM_video"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_13"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_14"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_9": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_9": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_9": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_9": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 1500
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
    } else if(jFirer.is("#s-CANCELAR_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Editar_Tarea8"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RM"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_8"
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
    } else if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 250
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
    } else if(jFirer.is("#s-add_recursos_icon_Open")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-RecursosFrom_editarTarea",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_icon_Close"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_icon_Open"
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
    } else if(jFirer.is("#s-add_recursos_icon_Close")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-RecursosFrom_editarTarea",
                    "effect": {
                      "type": "blind",
                      "duration": 500
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-ACEPTAR")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Nuevo_apunte"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_3"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RM_galeria"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RM_camara"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RM_video"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_13"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_14"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_nuevoApunte"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_Close_icon"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_Open_icon"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_9": {
                      "attributes": {
                        "background-color": "#D9D9D9",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_9": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_9": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Two-line-item_9": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 1500
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
    } else if(jFirer.is("#s-CANCELAR")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Nuevo_apunte"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RM"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_3"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_nuevoApunte"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_Close_icon"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_Open_icon"
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
    } else if(jFirer.is("#s-Category_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 250
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
    } else if(jFirer.is("#s-add_recursos_Open_icon")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-RecursosFrom_nuevoApunte",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_Open_icon"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_Close_icon"
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
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-RM_camara",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_editarTarea",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-RM_video",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_editarTarea",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_13",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_editarTarea",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
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
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_14",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_editarTarea"
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
    } else if(jFirer.is("#s-galeria_icon")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-RecursosFrom_editarTarea",
                  "property": "jimGetPositionX"
                },{
                  "datatype": "variable",
                  "element": "galeria_icon"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-RM_galeria",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_editarTarea",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_icon_Open"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_icon_Close"
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_nuevoApunte",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_Close_icon"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_Open_icon"
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
    } else if(jFirer.is("#s-Image_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-RM_camara",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_nuevoApunte",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_Open_icon"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_Close_icon"
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
    } else if(jFirer.is("#s-Image_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-RM_video",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_nuevoApunte",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_Open_icon"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_Close_icon"
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
    } else if(jFirer.is("#s-Image_47")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_13",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_nuevoApunte",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_Open_icon"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_Close_icon"
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
    } else if(jFirer.is("#s-Image_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_14",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_nuevoApunte"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_Open_icon"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_Close_icon"
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
    } else if(jFirer.is("#s-galeria_icon_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-RM_galeria",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RecursosFrom_nuevoApunte",
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-add_recursos_Open_icon"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-add_recursos_Close_icon"
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
    } else if(jFirer.is("#s-Eliminar_img_galeria")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Alert_eliminar_img_galeria",
                    "effect": {
                      "type": "fade",
                      "duration": 500
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Alert_eliminar_img_galeria"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Eliminar_img_galeria"
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
    } else if(jFirer.is("#s-Alert_eliminar_img_galeria_aceptar")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Alert_eliminar_img_galeria"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Eliminar_img_galeria",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-RM_galeria",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
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
  .on("click", ".s-ebedfa07-d01f-485d-b305-6a46101e81e2 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_15")) {
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
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Rectangle_39",
                      "top": {
                        "type": "movetoposition",
                        "value": "0"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "3"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Label_15",
                      "top": {
                        "type": "movetoposition",
                        "value": "15"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "292"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Paragraph_16",
                      "top": {
                        "type": "movetoposition",
                        "value": "10"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "21"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#s-Paragraph_16",
                      "effect": {
                        "type": "slide",
                        "easing": "linear",
                        "duration": 500,
                        "direction": "down"
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": "#s-Label_15",
                      "angle": {
                        "type": "rotateto",
                        "value": "270"
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
    } else if(jFirer.is("#s-Label_16")) {
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
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Rectangle_40",
                      "top": {
                        "type": "movetoposition",
                        "value": "0"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "3"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Label_16",
                      "top": {
                        "type": "movetoposition",
                        "value": "15"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "292"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Paragraph_17",
                      "top": {
                        "type": "movetoposition",
                        "value": "10"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "21"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#s-Paragraph_17",
                      "effect": {
                        "type": "slide",
                        "easing": "linear",
                        "duration": 500,
                        "direction": "down"
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": "#s-Label_16",
                      "angle": {
                        "type": "rotateto",
                        "value": "270"
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
    } else if(jFirer.is("#s-Label_5")) {
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
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Rectangle_15",
                      "top": {
                        "type": "movetoposition",
                        "value": "0"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "3"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Label_5",
                      "top": {
                        "type": "movetoposition",
                        "value": "15"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "292"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Paragraph_5",
                      "top": {
                        "type": "movetoposition",
                        "value": "10"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "21"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#s-Paragraph_5",
                      "effect": {
                        "type": "slide",
                        "easing": "linear",
                        "duration": 500,
                        "direction": "down"
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": "#s-Label_5",
                      "angle": {
                        "type": "rotateto",
                        "value": "270"
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
    } else if(jFirer.is("#s-Label_4")) {
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
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Rectangle_14",
                      "top": {
                        "type": "movetoposition",
                        "value": "0"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "3"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Label_4",
                      "top": {
                        "type": "movetoposition",
                        "value": "15"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "292"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": "#s-Paragraph_4",
                      "top": {
                        "type": "movetoposition",
                        "value": "10"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "21"
                      },
                      "containment": false,
                      "effect": {
                        "type": "none",
                        "easing": "linear",
                        "duration": 500
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#s-Paragraph_4",
                      "effect": {
                        "type": "slide",
                        "easing": "linear",
                        "duration": 500,
                        "direction": "down"
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": "#s-Label_4",
                      "angle": {
                        "type": "rotateto",
                        "value": "270"
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
    } else if(jFirer.is("#s-Bar_menu_icon")) {
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
    } else if(jFirer.is("#s-BackTo_librero")) {
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
                    "action": "jimHide",
                    "parameter": {
                      "target": "#s-BackTo_librero"
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
    } else if(jFirer.is("#s-BackTo_Bloque1")) {
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
                    "action": "jimHide",
                    "parameter": {
                      "target": "#s-BackTo_Bloque1"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#s-Bloque1"
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimHide",
                    "parameter": {
                      "target": "#s-Lista_de_apuntes_from_bloque1",
                      "effect": {
                        "type": "slide",
                        "easing": "linear",
                        "duration": 500,
                        "direction": "up"
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#s-Dynamic_Panel"
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimResize",
                    "parameter": {
                      "target": "#s-Fondo_menuSuperior",
                      "width": {
                        "type": "exprvalue",
                        "value": "360"
                      },
                      "height": {
                        "type": "exprvalue",
                        "value": "78"
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimHide",
                    "parameter": {
                      "target": "#s-Carpetas"
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#s-BackTo_libro_from_Bloque1"
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#s-Libreta_icon_from_Bloque1"
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": "#s-Indice_temas_icon_open"
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
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-add_recursos_Close_icon")) {
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
                    "action": "jimHide",
                    "parameter": {
                      "target": "#s-RecursosFrom_nuevoApunte",
                      "effect": {
                        "type": "blind",
                        "duration": 500
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
  })
  .on("focusin", ".s-ebedfa07-d01f-485d-b305-6a46101e81e2 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_2",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_10",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_12",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Input_4 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"Type something" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": ""
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
    } else if(jFirer.is("#s-Category_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_5",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
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
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Line_7",
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Input_2 input": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"Type something" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": ""
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
    }
  })
  .on("focusout", ".s-ebedfa07-d01f-485d-b305-6a46101e81e2 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_2"
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
    } else if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_10"
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_4",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_4",
                    "value": "Type something"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_12"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Input_4 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Category_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_5"
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_2",
                    "value": "Type something"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Line_7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Input_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11.0pt"
                      }
                    }
                  },{
                    "#s-ebedfa07-d01f-485d-b305-6a46101e81e2 #s-Input_2 input": {
                      "attributes": {
                        "color": "#808080",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Roboto-Light,Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  } ],
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
    }
  })
  .on("pinchopen", ".s-ebedfa07-d01f-485d-b305-6a46101e81e2 .pinchopen", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Tabla_Bloque1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Tabla_Bloque1",
                    "width": {
                      "type": "exprvalue",
                      "value": "597"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "247"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 50
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pinchclose", ".s-ebedfa07-d01f-485d-b305-6a46101e81e2 .pinchclose", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Tabla_Bloque1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": "#s-Tabla_Bloque1",
                    "width": {
                      "type": "exprvalue",
                      "value": "312"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "130"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 50
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("taphold", ".s-ebedfa07-d01f-485d-b305-6a46101e81e2 .taphold", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-RM_galeria")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Eliminar_img_galeria",
                    "effect": {
                      "type": "clip",
                      "duration": 500
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
      event.data = data;
      jEvent.launchCases(cases);
    }
  });