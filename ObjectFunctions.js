//Všechny možné funkce
const functionsContainer = {
    slozene_uroceni : {
        name : "Složené úročení",
        type : "ekonomie",
        inputs : ["jistina", "úrok (v %)", "počet let"],
        method : "slozeneUroceni()"
    },
    vypocet_rychlosti : {
        name : "Vypočet rychlosti (km/h)",
        type : "fyzika",
        inputs : ["vzdalenost (km)", "čas (h)"],
        method : "vypocetRychlosti()"
    },
    vypocet_rychlosti2 : {
        name : "Vypočet rychlosti (m/s)",
        type : "fyzika",
        inputs : ["vzdalenost (m)", "čas (s)"],
        method : "vypocetRychlosti()"
    },
    koncentrace_vzorku : {
        name : "Koncentrace vzorku",
        type : "chemie",
        inputs : [ "naměřená hodnota", "průměr standardů", "koncentrace standardu (v mmol/l)"],
        method : "koncentraceVzorku()"
    },
    vypocet_prumeru : {
        name : "Vypočet průměru",
        type : "matematika",
        inputs : ["čísla oddělená mezerou"],
        method : "vypocetPrumeru()"
    },
    vypocet_faktorialu : {
        name : "Vypočet faktorialu",
        type : "matematika",
        inputs : ["číslo"],
        method : "faktorial()"
    },
    navratnost_investic : {
        name : "Návratnost investic",
        type : "ekonomie",
        inputs : ["investiční výdaj", "roční příjem nebo úspora z investice"],
        method : "navratnostInvestice()"
    }
};