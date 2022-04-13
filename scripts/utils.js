// @ts-nocheck
/* jshint esversion: 8 */

/**
 * Génère les règles css pour l'apparence des scrolls-bar et les infos-bulles
 * @namespace
 * @class CssRules
 */
var CssRules = (function() {
    let style = null;
    return {
        /**
         * Ajoute toutes les règles qui respectent le format rule*
         * @memberof CssRules
         * @instance
         * @see Lecteur.allStyles
         */
        addRules: function() {
            if (style == null)
                style = document.createElement("style");
            for (let i in this) {
                if (i.substring(0, 4) == "rule")
                    style.innerHTML += this[i];
            }
            document.body.appendChild(style);
        },
        /**
         * Ajoute la gestion css des infos-bulles sur les élements span.titleControl
         * @memberof CssRules
         * @instance
         * @see Lecteur.allStyles
         */
        addTitleControllerRules: function() {
            if (style == null)
                style = document.createElement("style");
            style.innerHTML += "span.titleControl{display:none;position:absolute;bottom:0;left:0;font-size:x-small;transform:translateY(120%);width:100%;text-align:center;background-color:white;border-radius:25px;}" +
                ".advanced>button:not(.play):hover span.titleControl{display:inherit;}";
        },
        /**
         * Ajoute la règle sur le webkit-scrollbar
         * @memberof CssRules
         * @instance
         */
        rule1: "::-webkit-scrollbar {width: 14px;height: 14px;background-color: aqua 0 0 repeat;}",
        /**
         * Ajoute la règle sur le fond du webkit-scrollbar
         * @memberof CssRules
         * @instance
         */
        rule2: "::-webkit-scrollbar-track-piece {" +
            "/* Fond */" +
            "background: transparent none;" +
            "border: solid 4px transparent;" +
            "border-right-width: 8px;" +
            "margin: 4px;" +
            "box-shadow: inset 1px 1px 0 0 rgb(137, 131, 117), inset -1px -1px 0 0 rgb(224, 220, 210);}",
        /**
         * Ajoute la règle sur le fond pour la barre inférieure du webkit-scrollbar
         * @memberof CssRules
         * @instance
         */
        rule3: "::-webkit-scrollbar-track-piece:horizontal {border-right-width: 4px;border-bottom-width: 8px;}",
        /**
         * Ajoute la règle pour la barre du webkit-scrollbar
         * @memberof CssRules
         * @instance
         */
        rule4: "::-webkit-scrollbar-thumb {" +
            "border: solid 0 transparent;" +
            "border-right-width: 4px;" +
            "border-radius: 5px;" +
            "border-top-right-radius: 9px 5px;" +
            "border-bottom-right-radius: 9px 5px;" +
            "box-shadow: inset 0 0 0 1px rgb(79, 79, 79), inset 0 0 0 6px rgb(102, 102, 102);}",
        /**
         * Ajoute la règle pour le box-shadow de la barre du webkit-scrollbar
         * @memberof CssRules
         * @instance
         */
        rule5: "::-webkit-scrollbar-thumb:hover {box-shadow: inset 0 0 0 1px rgb(90, 90, 90), inset 0 0 0 6px rgb(110, 110, 110);}",
        /**
         * Ajoute la règle pour le contrôleur de la barre du webkit-scrollbar
         * @memberof CssRules
         * @instance
         */
        rule6: "::-webkit-scrollbar-thumb:horizontal {border-right-width: 0;border-bottom-width: 4px;" +
            "border-top-right-radius: 5px;border-bottom-right-radius: 5px 9px;border-bottom-left-radius: 5px 9px;}",
        /**
         * Ajoute la règle pour le coind supérieure de la barre du webkit-scrollbar
         * @memberof CssRules
         * @instance
         */
        rule7: "::-webkit-scrollbar-corner {background: #bfb6a3 0 0 no-repeat;}"
    };
})();

/**
 * Stocke les images svg pour les arrières-plans des contrôleurs de la musique
 * @namespace
 * @global
 * @property {string} SVG.start Logo play
 * @property {string} SVG.moins10 Logo moins 10 secondes
 * @property {string} SVG.moins60 Logo moins 1 minute
 * @property {string} SVG.plus10 Logo plus 10 secondes
 * @property {string} SVG.plus60 Logo plus 1 minute
 * @property {string} SVG.pause Logo pause
 */
var SVG = {
    start: "url(\"data:image/svg+xml;utf8," +
        "<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
        "<circle cx='200' cy='200' r='200' fill='transparent'/>" +
        "<path d='M100,100 Q150,200,100,300 L125,300 L300,200 L125,100 Z' fill='green' stroke='black'/></svg>\")",
    moins10: "url(\"data:image/svg+xml;utf8," +
        "<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
        "<circle cx='200' cy='200' r='200' fill='transparent' />" +
        "<path d='M300,100 Q250,200,300,300 L275,300 L100,200 L275,100 Z' fill='red' stroke='black' />" +
        "<path d='M230,100 Q180,200,230,300 L205,300 L30,200 L205,100 Z' fill = 'orange' stroke = 'black' /></svg>\")",
    moins60: "url(\"data:image/svg+xml;utf8," +
        "<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
        "<circle cx='200' cy='200' r='200' fill='transparent' />" +
        "<path d='M300,100 Q250,200,300,300 L275,300 L100,200 L275,100 Z' fill='red' stroke='black'/>" +
        "<path d='M260,100 Q210,200,260,300 L235,300 L60,200 L235,100 Z' fill='white' stroke='black'/>" +
        "<path d='M230,100 Q180,200,230,300 L205,300 L30,200 L205,100 Z' fill='orange' stroke='black'/></svg>\")",
    plus10: "url(\"data:image/svg+xml;utf8," +
        "<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
        "<circle cx='200' cy='200' r='200' fill='transparent' />" +
        "<path d='M100,100 Q150,200,100,300 L125,300 L300,200 L125,100 Z' fill='skyblue' stroke='black'/>" +
        "<path d='M170,100 Q220,200,170,300 L195,300 L370,200 L195,100 Z' fill='orange' stroke='black'/></svg>\")",
    plus60: "url(\"data:image/svg+xml;utf8," +
        "<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
        "<circle cx='200' cy='200' r='200' fill='transparent' />" +
        "<path d='M100,100 Q150,200,100,300 L125,300 L300,200 L125,100 Z' fill='skyblue' stroke='black'/>" +
        "<path d='M130,100 Q180,200,130,300 L155,300 L330,200 L155,100 Z' fill='white' stroke='black'/>" +
        "<path d='M170,100 Q220,200,170,300 L195,300 L370,200 L195,100 Z' fill='orange' stroke='black'/></svg>\")",
    pause: "url(\"data:image/svg+xml;utf8," +
        "<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
        "<circle cx='200' cy='200' r='200' fill='transparent' />" +
        "<path d='M100,100 Q150,200,100,300 L170,300  Q120,200,170,100 Z' fill='red' stroke='black'/>" +
        "<path d='M230,100 Q280,200,230,300 L300,300  Q250,200,300,100 Z' fill='red' stroke='black'/></svg>\")"
};

/**
 * Classe statique permettant de contrôler la gestion du flux audio, volume, looping, vitesse de lecture, ...
 * @namespace
 * @class ManageZik
 */
var ManageZik = (function() {
    /**
     * @property Ziks
     * @memberof ManageZik Ziks - Tableau de sons
     */
    var Ziks = [];

    /**
     * Si 'indexZik' dans le tableau n'existe pas, en créé un, et ajoute l'élement 'elt' donné à la position 'index' 
     * @function setZik
     * @param {number} indexZik index dans le tableau
     * @param {number} index index dans l'index de ce tableau
     * @param {object} elt valeur à ajouter
     * @example setZik(0,0,true) => Ziks = [[0,0,"impossible"]] # on a ajouté le titre "impossible" à la position 0 du tableau
     * @instance
     * @see ManageZik#setAudio
     * @see ManageZik#setAuthor
     * @see ManageZik#setLoop
     * @see ManageZik#setPlayable
     * @see ManageZik#setRate
     * @see ManageZik#setStart
     * @see ManageZik#setTitre
     * @memberof ManageZik
     */
    function setZik(indexZik, index, elt) {
        if (Ziks[indexZik] == undefined)
            Ziks[indexZik] = [];
        Ziks[indexZik][index] = elt;
    }

    /**
     * Récupère l'audio depuis une position dans le tableau
     * @function getZik
     * @param {number} index position donnée
     * @returns {Object} Liste sous la forme [titre, auteur, start, rate, playable, audio, loop] 
     * @memberof ManageZik
     * @see ManageZik#getAudio
     * @see ManageZik#getAuthor
     * @see ManageZik#getLoop
     * @see ManageZik#isPlayable
     * @see ManageZik#getRate
     * @see ManageZik#getStart
     * @see ManageZik#getTitre
     * @instance
     */
    function getZik(index) {
        return Ziks[index];
    }
    return {
        /**
         * retourne le tableau
         * @function getZiks
         * @returns {object} Ziks - Tableau contenant les audios
         * @memberof ManageZik
         * @instance
         */
        getZiks: function() {
            return Ziks;
        },
        /**
         * Met à jour le titre à la position indiquée dans le tableau
         * @function setTitre
         * @param {number} index position dans le tableau
         * @param {string} titre titre de la musique
         * @memberof ManageZik
         * @instance
         * @see ManageZik#setZik
         */
        setTitre: function(index, titre) {
            setZik(index, 0, titre);
        },
        /**
         * Récupère le titre depuis une position donnée
         * @function getTitre
         * @param {number} index position dans le tableau
         * @returns {string} titre de la musique
         * @memberof ManageZik
         * @instance
         * @see ManageZik#getZik
         */
        getTitre: function(index) {
            return getZik(index)[0];
        },
        /**
         * Met à jour le nom de l'auteur à la position indiquée dans le tableau
         * @function setAuthor
         * @param {number} index position dans le tableau
         * @param {string} author auteur de la musique 
         * @memberof ManageZik
         * @instance
         * @see ManageZik#setZik
         */
        setAuthor: function(index, author) {
            setZik(index, 1, author);
        },
        /**
         * Récupère le nom de l'auteur depuis une position donnée
         * @function getAuthor
         * @returns {string} Nom de l'auteur
         * @param {number} index position dans le tableau
         * @memberof ManageZik
         * @instance
         * @see ManageZik#getZik
         */
        getAuthor: function(index) {
            return getZik(index)[1];
        },
        /**
         * Met à jour le paramèrte start à la position indiquée dans le tableau
         * @function setStart
         * @param {number} index position dans le tableau
         * @param {Boolean} start indique si la musique a commencé ou non 
         * @memberof ManageZik
         * @instance
         * @see ManageZik#setZik
         */
        setStart: function(index, start) {
            setZik(index, 2, start);
        },
        /**
         * Récupère le paramètre start depuis une position donnée
         * @function getStart
         * @param {number} index position dans le tableau
         * @returns {string} Si start est vrai, alors la musique est en cours, sinon non
         * @memberof ManageZik
         * @instance
         * @see ManageZik#getZik
         */
        getStart: function(index) {
            return getZik(index)[2];
        },
        /**
         * Met à jour la vitesse de lecture à la position indiquée dans le tableau
         * @function setRate
         * @param {number} index position dans le tableau
         * @param {number} rate vitesse de lecture (compris entre 0.25 et 2.75)
         * @instance
         * @memberof ManageZik
         * @see ManageZik#setZik
         */
        setRate: function(index, rate) {
            setZik(index, 3, rate);
        },
        /**
         * Récupère la vitesse de lecture depuis une position donnée
         * @function getRate
         * @param {number} index position dans le tableau
         * @returns {number} Vitesse de lecture 
         * @memberof ManageZik
         * @instance
         * @see ManageZik#getZik
         */
        getRate: function(index) {
            return getZik(index)[3];
        },
        /**
         * Liste toutes les musiques dont le titre commence par la lettre passée en paramètre
         * @function getTitlesByLetter
         * @param {string} letter Première lettre
         * @returns {object} liste d'object audio
         * @memberof ManageZik
         * @instance
         */
        getTitlesByLetter: function(letter) {
            let res = [];
            for (let i = 0; i < this.getZiks().length; i++) {
                if (this.getTitre(i) != "" && this.isPlayable(i) && this.getTitre(i)[0].toLowerCase() == letter.toLowerCase())
                    res.push(getZik(i));
            }
            return res;
        },
        /**
         * Supprime les attributs titre, start et rate depuis une position dans le tableau
         * @function removeZik
         * @param {number} index position donnée
         * @instance
         * @memberof ManageZik
         * @see Lecteur#checkNameZik
         */
        removeZik: function(index) {
            this.setTitre(index, "");
            this.setStart(index, false);
            this.setRate(index, 0);
        },
        /**
         * Met à jour la jouabilité d'un son depuis une position dans le tableau
         * @function setPlayable
         * @param {number} index position donnée
         * @param {Boolean} mode définit si le son existe et est jouable
         * @memberof ManageZik
         * @instance
         * @see ManageZik#setZik
         */
        setPlayable: function(index, mode) {
            setZik(index, 4, mode);
        },
        /**
         * Permet de savoir si le son donné depuis une position dans le tableau est jouable ou non
         * @function isPlayable
         * @returns {Boolean} Vrai si le son est jouable, faux sinon
         * @param {number} index position dans le tableau
         * @memberof ManageZik
         * @instance
         * @see ManageZik#getZik
         */
        isPlayable: function(index) {
            return getZik(index)[4];
        },
        /**
         * Met à jour le son depuis la position indiquée dans le tableau
         * @function setAudio
         * @param {number} index position dans le tableau
         * @param {HTMLAudioElement} audio balise HTML <audio> 
         * @memberof ManageZik
         * @instance
         * @see ManageZik#setZik
         */
        setAudio: function(index, audio) {
            setZik(index, 5, audio);
        },
        /**
         * Récupère le son depuis une position donnée dans le tableau
         * @function getAudio
         * @returns {HTMLAudioElement} balise HTML <audio>
         * @param {number} index position dans le tableau
         * @memberof ManageZik
         * @instance
         * @see ManageZik#getZik
         */
        getAudio: function(index) {
            return getZik(index)[5];
        },
        /**
         * Met à jour le comportement de l'audio depuis une position dans le tableau
         * @function setLoop
         * @param {number} index position dans le tableau
         * @param {Boolean} loop indique si la musique doit se jouer en boucle ou non
         * @memberof ManageZik
         * @instance
         * @see ManageZik#setZik
         */
        setLoop: function(index, loop) {
            setZik(index, 6, loop);
        },
        /**
         * Récupère le comportement de l'audio depuis une position donnée dans le tableau
         * @function getLoop
         * @returns {Boolean} Vrai si le son est jouable en boucle, faux sinon
         * @param {number} index position dans le tableau
         * @memberof ManageZik
         * @instance
         * @see ManageZik#getZik
         */
        getLoop: function(index) {
            return getZik(index)[6];
        }
    };
})();

/**
 * @namespace
 * @global
 */
var GLOBALS = {
    /**
     * @instance
     * @memberof GLOBALS
     * @static
     * @property { Number } FREQ_RATE Ecart entre les différentes vitesses de lecture 
     */
    FREQ_RATE: 0.5,
    /**
     * @instance
     * @memberof GLOBALS
     * @static
     * @property {Boolean} PROGRESS_BAR_STYLED Définit l'utilisation ou non d'une scroll-bar personnalisée
     */
    PROGRESS_BAR_STYLED: true,
    /**
     * @namespace
     * @instance
     * @memberof GLOBALS
     * @static
     * @property {object} DESIGN Définit les couleurs de design
     * @property {object} DESIGN.COLOR_VOLUME - Couleurs pour la barre de volume 
     * @property {object} DESIGN.COLOR_CONTROLLER - Couleurs pour les contrôleurs audio
     * @property {object} DESIGN.COLOR_RATE - Couleurs pour le design de la vitesse de lecture
     * @property {object} DESIGN.COLOR_TIME - Couleur de fond de la barre de progression de la musique
     */
    DESIGN: {
        /**
         * @instance
         * @memberof GLOBALS.DESIGN
         * @static
         * @property {object} COLOR_VOLUME              - Couleurs pour la barre de volume 
         * @property {string} COLOR_VOLUME.bg - arrière-plan du bloc
         * @property {string} COLOR_VOLUME.fg - couleur de texte du bloc
         * @property {string} COLOR_VOLUME.button - liste d'arrière plan pour chacun des boutons de volumes
         * @property {string} COLOR_VOLUME._button - arrière-plan des boutons par défaut 
         * @see Lecteur#event:reguleVolume
         * @see Lecteur#show
         * @see Lecteur.styleAdvanced
         */
        COLOR_VOLUME: {
            bg: "black",
            fg: "white",
            button: [
                "rgb(0, 0, 255)",
                "rgb(0, 255, 255)",
                "rgb(0, 255, 0)",
                "rgb(255, 255, 0)",
                "rgb(255, 0, 0)"
            ],
            _button: "grey"
        },
        /**
         * @instance
         * @memberof GLOBALS.DESIGN
         * @static
         * @property {object} COLOR_CONTROLLER          - Couleurs pour les contrôleurs audio
         * @property {string} COLOR_CONTROLLER.bg       - arrière-plan du bloc
         * @property {string} COLOR_CONTROLLER.button   - arrière-plan des boutons
         * @see Lecteur.styleDesign
         */
        COLOR_CONTROLLER: {
            bg: "black",
            button: "white"
        },
        /**
         * @instance
         * @static
         * @memberof GLOBALS.DESIGN
         * @property {object} COLOR_RATE                - Couleurs pour le design de la vitesse de lecture
         * @property {string} COLOR_RATE.bg             - arrière-plan du bloc
         * @property {string} COLOR_RATE.fg             - couleur de texte du bloc
         * @property {string} COLOR_RATE._button        - arrière-plan des boutons
         * @see Lecteur#addRecord
         */
        COLOR_RATE: {
            bg: "black",
            fg: "white",
            _button: "grey"
        },
        /**
         * @instance
         * @static
         * @memberof GLOBALS.DESIGN
         * @property {object} COLOR_TIME                - Couleur de fond de la barre de progression de la musique
         * @property {string} COLOR_TIME.DEFAULT        - Couleur par défault 
         * @property {string} COLOR_TIME.TIME_X         - Couleur au temps (X*100) / N, avec N le nombre de couleurs données
         * @see Lecteur.setColorTimeDefaultValue
         */
        COLOR_TIME: {
            DEFAULT: "black",
            TIME_0: "purple",
            TIME_10: "#1044AA",
            TIME_20: "#0265FF",
            TIME_30: "#006599",
            TIME_40: "#669801",
            TIME_50: "#99CC01",
            TIME_60: "yellow",
            TIME_70: "#FFCC11",
            TIME_80: "#FE9900",
            TIME_90: "#FF6501"
        }
    }
};

async function audioToBase64(audioFile) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onerror = reject;
        reader.onload = (e) => resolve(e.target.result);
        reader.readAsDataURL(audioFile);
    });
}

/**
 * @namespace
 * @class Lecteur
 */
class Lecteur {

    /**
     * Constructeur de la classe lecteur<br>
     * Ajoute les blocs HTML nécessaires à l'utilisation de la librairie
     * @function build
     * @memberof Lecteur
     * @instance
     */
    build() {
        let glob = document;
        if (glob != null)
            glob.write('<div id="ctnr"><div id="audios"></div></div>');
    }

    constructor() {
        this.build();
    }

    /**
     * Spécifie si on utilise la scroll-bar personnalisé ou non
     * @function useStyleProgressBar
     * @memberof Lecteur
     * @static
     * @instance
     * @param {Boolean} boolean Vrai si on l'utilise, faux sinon
     * @example Lecteur.useStyleProgressBar(true);
     */
    static useStyleProgressBar(boolean) {
        GLOBALS.PROGRESS_BAR_STYLED = boolean;
    }

    /**
     * Spécifie la couleur de fond à utiliser <br>
       Si ce n'est pas "black", alors gardera la même couleur le long de la musique,<br>
       sinon, changera la couleur toutes les x secondes 
     * @function setColorTimeDefaultValue
     * @memberof Lecteur
     * @instance
     * @static
     * @param {string} value couleur de la barre de progression de la musique
     * @see Lecteur.setColorTime
     * @see GLOBALS.DESIGN
     */
    static setColorTimeDefaultValue(value) {
        GLOBALS.DESIGN.COLOR_TIME.DEFAULT = value;
    }

    /**
     * Spécifie les couleurs à utiliser sur l'avancée de la musique<br>
     * et recalcule, en fonction du nombre de couleurs, le temps pour chaque couleur.<br>
     * Supprime l'effet de la variable GLOBALS.DESIGN.COLOR_TIME.DEFAULT
     * @function setColorTime
     * @memberof Lecteur
     * @instance
     * @static
     * @param {object} values Liste de couleurs sous forme de chaines de caractères
     * @example Lecteur.setColorTime([
     "blue",
     "green",
     "yellow",
     "red"
    ]);
    tous les quarts du temps de la musique, changera la couleur de fond.
    * @see Lecteur.setColorTimeDefaultValue
    * @see GLOBALS.DESIGN
    */
    static setColorTime(values) {
        GLOBALS.DESIGN.COLOR_TIME.DEFAULT = "black";
        // @ts-ignore
        let step = parseInt(100 / values.length);
        for (let i = 0; i < 100; i += 10) {
            delete GLOBALS.DESIGN.COLOR_TIME["TIME_" + i];
        }
        for (let i = 0; i < 100; i += step) {
            if (values[i / step] != undefined)
                GLOBALS.DESIGN.COLOR_TIME["TIME_" + i] = values[i / step];
        }

    }

    /**
     * Construit un nouveau noeud dont le type et les classes sont passés en paramètre 
     * @function declareElt
     * @instance
     * @memberof Lecteur
     * @param {string} elt Elément HTML
     * @param {*} classes Classes à ajouter à l'élément
     * @returns {Node} Noeud HTML
     * @see Lecteur#addRecord
     */
    declareElt(elt, classes) {
        var e = document.createElement(elt);
        let nb = 1;
        for (let i = 0; i < classes.length; i++) {
            if (classes[i] == " ")
                nb += 1;
        }
        if (nb == 1) e.classList.add(classes);
        else {
            let all_classes = classes.split(" ");
            for (let i = 0; i < all_classes.length; i++) {
                e.classList.add(all_classes[i]);
            }
        }
        return e;
    }

    /**
     * Stylise les noeud html de classe "barre"
     * @function styleBarre
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.allStyles
     */
    static styleBarre() {
        let barres = document.getElementsByClassName("barre");
        for (let i = 0; i < barres.length; i++) {
            let barre = barres[i];
            if (barre.classList.contains("volume") || barre.classList.contains("rate")) {
                barre.style.flexDirection = "column";
                barre.style.marginTop = "1em";
            }
            barre.style.width = "10%";
            if (barre.classList.contains("looping"))
                barre.style.width = "20%";
            barre.style.display = "flex";
            barre.style.justifyContent = "space-evenly";
            barre.style.alignItems = "center";
            let children = barre.children;
            for (let j = 0; j < children.length; j++) {
                children[j].style.width = "100%";
            }
        }
    }

    /**
     * Design l'apparence globale des lecteurs audio
     * @function styleMusik
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.allStyles
     */
    static styleMusik() {
        let musicos = document.getElementsByClassName("musik");
        musicos[0].style.marginTop = "2em";
        for (let i = 0; i < musicos.length; i++) {
            let mzik = musicos[i];
            mzik.style.backgroundColor = GLOBALS.DESIGN.COLOR_CONTROLLER.bg;
            mzik.style.color = "white";
            mzik.style.position = "relative";
            mzik.style.borderRadius = "25px";
            mzik.style.border = "1px solid black";
            mzik.style.width = "80%";
            mzik.style.padding = "1em 0.5em 0em 0.5em";
            mzik.style.display = "flex";
            mzik.style.flexDirection = "row";
            mzik.style.marginBottom = "2em";
            mzik.style.justifyContent = "space-evenly";
        }
    }

    /**
     * Stylise les container des progress-bar 
     * @function styleProgressBar
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.allStyles
     */
    static styleProgressBar() {
        var progs = document.getElementsByClassName("prog");
        for (let i = 0; i < progs.length; i++) {
            progs[i].style.width = "50%";
            progs[i].style.height = "0.5em";
            progs[i].style.borderRadius = "0 50px 50px 0";
            progs[i].style.backgroundColor = "lightgray";
            progs[i].style.position = "relative";
        }
    }

    /**
     * Stylise la progress-bar de temps interne
     * @function styleTime
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.allStyles
     */
    static styleTime() {
        var times = document.getElementsByClassName("time");
        for (let i = 0; i < times.length; i++) {
            times[i].style.width = "0%";
            times[i].style.left = "0";
            times[i].style.top = "0";
            times[i].style.padding = "0";
            times[i].style.height = "100%";
            times[i].style.borderRadius = "0 50px 50px 0";
            times[i].style.backgroundColor = GLOBALS.DESIGN.COLOR_TIME.DEFAULT;
            times[i].style.position = "absolute";
        }
    }

    /**
     * Stylise les titres des musiques
     * @function styleTitres
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.allStyles
     */
    static styleTitres() {
        var names = document.getElementsByClassName("name");
        for (let i = 0; i < names.length; i++) {
            names[i].style.width = "100%";
            names[i].style.left = "0";
            names[i].style.top = "0";
            names[i].style.height = "1em";
            names[i].style.textAlign = "center";
            names[i].style.position = "absolute";
            names[i].style.margin = "auto";
            names[i].style.marginTop = "0";
        }
    }


    /**
     * Rend impossible la copie des textes sur le site
     * @function styleBody
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.allStyles
     */
    static styleBody() {
        document.body.style.userSelect = "none";
        document.body.style.webkitUserSelect = "none";
    }

    /**
     * Design le container global des contrôleurs de temps
     * @function styleContent
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.allStyles
     */
    static styleContent() {
        var contents = document.getElementsByClassName("content");
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.display = "flex";
            contents[i].style.flexDirection = "column";
            contents[i].style.width = "calc(70% - 1em)";
            contents[i].style.padding = "1em 0.5em 0.5em 0.5em";
            contents[i].style.marginTop = "1em";
            contents[i].style.alignItems = "center";
        }
    }


    static convertDataURIToBinary(dataURI) {
        var BASE64_MARKER = ';base64,';
        var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
        var base64 = dataURI.substring(base64Index);
        var raw = window.atob(base64);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));

        for (let i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    }

    /**
     * Ajoute un son sur le site
     * @function addRecord
     * @instance
     * @memberof Lecteur
     * @param {string} source Chemin vers fichier son
     * @see Lecteur#declareElt
     */
    addRecord(source) {
        var container = document.getElementById("audios");
        var musik = this.declareElt("div", "musik");
        var titre = this.declareElt("span", "name");
        var author = this.declareElt("span", "author");
        author.style.position = "absolute";
        author.style.top = "0";
        author.style.left = "2em";
        author.style.color = "red";
        author.style.minWidth = "7em";
        author.style.textAlign = "center";
        author.style.backgroundColor = "black";
        author.style.borderRadius = "25px";
        author.style.padding = "0.2em";
        author.style.transform = "rotate(-30deg) translateX(-50%) translateY(-100%)";

        var content = this.declareElt("div", "content");
        var prog = this.declareElt("div", "prog");
        var time_process = this.declareElt("div", "time");
        prog.appendChild(time_process);
        var time_value = this.declareElt("span", "time_value");
        var audio = this.declareElt("audio", "zik");
        audio.preload = "metadata";

        // audio.src = "x-x";
        // audioToBase64(blob).then(res => {
        //     let blob = new Blob([source], { type: 'audio' });
        //     let binaire = Lecteur.convertDataURIToBinary(res);
        //     audio.src = URL.createObjectURL(blob);
        // });
        // var url = window.URL.createObjectURL(blob);
        let extension = source.split('.')[1];
        let blobby = new Blob([source], { type: 'audio/' + extension });
        audio.src = URL.createObjectURL(blobby);
        alert(audio.src);


        var adv = this.declareElt("div", "advanced");
        let btns = "M60 M10 play P10 P60".split(" ");
        for (let i = 0; i < btns.length; i++) {
            let tmp = this.declareElt("button", btns[i]);
            let info_bulle = this.declareElt("span", "titleControl");
            tmp.style.cursor = "pointer";
            tmp.style.position = "relative";
            tmp.appendChild(info_bulle);
            adv.appendChild(tmp);
        }
        content.appendChild(prog);
        content.appendChild(time_value);
        content.appendChild(audio);
        content.appendChild(adv);
        var volume = this.declareElt("div", "volume barre");
        var design = this.declareElt("div", "design");
        for (let i = 5; i > 0; i--) {
            let tmp = this.declareElt("button", "V" + i);
            tmp.value = "" + i;
            design.appendChild(tmp);
        }
        design.appendChild(this.declareElt("span", "getVol"));
        volume.appendChild(design);
        var rate = this.declareElt("div", "rate barre");
        var frate = this.declareElt("div", "range");
        var frateD1 = this.declareElt("div", "frate_div");
        var frateD2 = this.declareElt("div", "frate_div");
        var frateVal = this.declareElt("div", "rVal");
        var frateM = this.declareElt("div", "rM");
        var frateP = this.declareElt("div", "rP");
        frate.style.display = "flex";
        frate.style.flexDirection = "column";
        frateD1.appendChild(frateM);
        frateD1.appendChild(frateP);
        frateM.textContent = "-";
        frateP.textContent = "+";
        frateM.style.borderRight = "1px solid black";
        let liste = [frateM, frateP];
        for (let i of liste) {
            i.style.width = "1em";
            i.style.textAlign = "center";
            i.style.cursor = "pointer";
        }
        liste = [frateD1, frateD2];
        for (let i of liste) {
            i.style.backgroundColor = GLOBALS.DESIGN.COLOR_RATE._button;
            i.style.color = GLOBALS.DESIGN.COLOR_RATE.fg;
            i.style.borderBottom = "1px solid black";
            i.style.display = " flex";
            i.style.flexDirection = "row";
            i.style.alignItems = "center";
            i.style.justifyContent = "space-evenly";
            i.style.width = "100%";
        }
        rate.style.backgroundColor = GLOBALS.DESIGN.COLOR_RATE.bg;
        frate.appendChild(frateD1);
        frate.appendChild(frateD2);
        frateD2.appendChild(frateVal);
        frateD1.style.borderTop = "1px solid black";
        frateVal.textContent = "1x";
        rate.appendChild(frate);

        let divLoop = this.declareElt("div", "looping barre");
        let loop = this.declareElt("input", "loop");
        loop.type = "checkbox";
        let lblLoop = this.declareElt("label", "lbl_loop");
        lblLoop.style.cursor = "pointer";
        divLoop.appendChild(loop);
        divLoop.appendChild(lblLoop);
        lblLoop.textContent = "loop";
        musik.appendChild(titre);
        musik.appendChild(author);
        musik.appendChild(content);
        musik.appendChild(volume);
        musik.appendChild(rate);
        musik.appendChild(divLoop);

        let errorExistSound = this.declareElt("div", "error_sound");
        errorExistSound.style.display = "flex";
        errorExistSound.style.flexDirection = "column";
        errorExistSound.style.justifyContent = "center";
        errorExistSound.style.alignItems = "center";
        errorExistSound.style.position = "absolute";
        errorExistSound.style.width = "100%";
        errorExistSound.style.left = "0";
        errorExistSound.style.top = "0";
        errorExistSound.style.height = "100%";
        errorExistSound.style.borderRadius = "25px";
        errorExistSound.style.textAlign = "center";
        errorExistSound.style.backgroundColor = "red";
        errorExistSound.style.border = "2px solid black";
        let text1 = this.declareElt("span", "err");
        let text2 = this.declareElt("span", "err_name");
        text2.style.color = "black";
        text2.style.fontWeight = "bold";
        text2.style.padding = "0.5em";
        let text3 = this.declareElt("span", "err err_list");
        text1.textContent = "Le fichier ";
        text2.textContent = source;
        text3.textContent = " n'est pas écoutable";
        errorExistSound.appendChild(text1);
        errorExistSound.appendChild(text2);
        errorExistSound.appendChild(text3);
        musik.appendChild(errorExistSound);
        container.appendChild(musik);
    }

    /**
     * Stylise les boutons et le container des boutons contrôlant le temps
     * @function styleAdvanced
     * @instance
     * @memberof Lecteur
     * @static
     * @see Lecteur.allStyles
     */
    static styleAdvanced() {
        let adv = document.getElementsByClassName("advanced");
        for (let i = 0; i < adv.length; i++) {
            adv[i].style.backgroundColor = GLOBALS.DESIGN.COLOR_CONTROLLER.bg;
            adv[i].style.borderRadius = "0.5em";
            adv[i].style.width = "100%";
            adv[i].style.padding = "0.5em";
            adv[i].style.display = "flex";
            adv[i].style.alignItems = "center";
            adv[i].style.justifyContent = "space-around";
            let children = adv[i].children;
            for (let j = 0; j < children.length; j++) {
                if (children[j].tagName == "BUTTON") {
                    children[j].style.backgroundColor = GLOBALS.DESIGN.COLOR_CONTROLLER.button;
                    children[j].style.borderRadius = "50%";
                    children[j].style.marginRight = "5px";
                }
            }
        }
    }

    /**
     * Design la barre de volume
     * @function styleDesign
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.allStyles
     */
    static styleDesign() {
        let adv = document.getElementsByClassName("design");
        for (let i = 0; i < adv.length; i++) {
            adv[i].style.width = "30%";
            adv[i].style.height = "90%";
            adv[i].style.display = "flex";
            adv[i].style.flexDirection = "column";
            adv[i].style.alignItems = "center";
            adv[i].style.justifyContent = "space-evenly";
            adv[i].style.padding = "0.5em";
            let children = adv[i].children;
            let begin = 0;
            for (let j = 0; j < children.length; j++) {
                children[j].style.height = "calc(100% / 6)";
                if (children[j].tagName == "BUTTON") {
                    if (begin == 0)
                        begin = j;
                    children[j].style.border = "none";
                    children[j].style.backgroundColor = GLOBALS.DESIGN.COLOR_VOLUME._button;
                    children[j].style.width = "100%";
                    children[j].style.borderBottom = "1px solid black";
                    children[j].style.cursor = "pointer";
                    children[j].style.borderRadius = "5%";
                }
            }
        }
    }

    /**
     * Design un noeud passé en paramètre pour lui appliquer une image vectorielle en arrière-plan
     * @function styleSvg
     * @param {number} element Noeud à designer 
     * @param {string} image_name URL d'arrière-plan
     * @static
     * @instance
     * @memberof Lecteur
     * @see SVG
     */
    static styleSvg(element, image_name) {
        element.style.backgroundPosition = "0 0";
        element.style.backgroundSize = "100% 100%";
        element.style.width = "3em";
        element.style.height = "3em";
        element.style.border = "none";
        element.style.backgroundRepeat = "no-repeat";
        element.style.backgroundImage = image_name;

    }

    /**
     * Fonction utilitaire qui convertit un nombre décimal en durée temporelle
     * @function numberToTime
     * @instance
     * @memberof Lecteur
     * @static
     * @param {number} time Nombre décimal à convertir
     * @returns {number} durée correspondante
     * @see Lecteur.formatTime
     */
    static numberToTime(time) {
        function padZero(v) {
            return (v < 10) ? "0" + v : v;
        }
        return padZero(parseInt((time / (60 * 60)) % 24)) + ":" +
            padZero(parseInt((time / (60)) % 60)) + ":" +
            padZero(parseInt((time) % 60));
    }

    /**
     * Evénement appelé pour changer le temps de l'audio sur une position précisée
     * @function setTime
     * @instance
     * @memberof Lecteur
     * @event
     * @param {number} index position donnée
     * @param {number} temps temps à rajouter/enlever au temps courant
     * @see Lecteur#show
     */
    setTime(index, temps) {
        document.getElementsByClassName("zik")[index].currentTime += temps;
    }

    /**
     * Evénement appelé pour changer le volume de l'audio sur une position précisée
     * @function reguleVolume
     * @instance
     * @memberof Lecteur
     * @event
     * @param {number} index position donnée
     * @param {number} jbtn niveau du volume correspondant [1 à 5]
     * @see Lecteur#show
     */
    reguleVolume(index, jbtn) {
        let element = document.getElementsByClassName("V" + jbtn)[index];
        let volume = (parseInt(element.value, 10) * 20);
        document.getElementsByClassName("getVol")[index].textContent = volume + "%";
        document.getElementsByClassName("zik")[index].volume = volume / 100;
        element.style.backgroundColor = GLOBALS.DESIGN.COLOR_VOLUME.button[jbtn - 1];
        for (let k = 1; k <= 5; k++) {
            if (jbtn != k)
                document.getElementsByClassName("V" + k)[index].style.backgroundColor = GLOBALS.DESIGN.COLOR_VOLUME._button;
        }
    }


    /**
     * Evénement appelé pour démarrer ou mettre en pause l'audio à la position donnée
     * @function myplay
     * @instance
     * @memberof Lecteur
     * @event
     * @param {number} index position donnée
     * @see Lecteur#show
     */
    myplay(index) {
        let audio = ManageZik.getAudio(index);
        let elt = document.getElementsByClassName("play")[index];
        let image = "";
        if (ManageZik.getStart(index)) {
            audio.pause();
            ManageZik.setStart(index, false);
            image = 'start';
        } else {
            ManageZik.setStart(index, true);
            audio.play();
            image = 'pause';
        }
        Lecteur.styleSvg(elt, SVG[image]);
    }

    /**
     * Evénement appelé pour gérer la vitesse de lecture de l'audio à la position donnée
     * @function rating
     * @instance
     * @memberof Lecteur
     * @event
     * @param {number} index position donnée
     * @param {string} direction caractère égal à '+' ou '-' pour accélérer ou diminuer la vitesse de lecture
     * @see Lecteur#show
     * @see GLOBALS.FREQ_RATE
     */
    rating(index, direction) {
        let valeur = 0;
        let rate = ManageZik.getRate(index);
        if (direction == '-') {
            if (rate - GLOBALS.FREQ_RATE > 0) {
                valeur = -GLOBALS.FREQ_RATE;
            }
        }
        if (direction == '+') {
            if (rate + GLOBALS.FREQ_RATE < 3) {
                valeur = GLOBALS.FREQ_RATE;
            }
        }
        let newValue = rate + valeur;
        ManageZik.setRate(index, newValue);
        document.getElementsByClassName("rVal")[index].textContent = (newValue) + "x";
        document.getElementsByClassName("zik")[index].playbackRate = (newValue);
    }

    /**
     * Evénement appelé pour jouer en boucle l'audio à la position donnée
     * @function loop
     * @instance
     * @memberof Lecteur
     * @event
     * @param {number} index position donnée
     * @see Lecteur#show
     */
    loop(index) {
        let loop = ManageZik.getLoop(index);
        loop = !loop;
        ManageZik.setLoop(index, loop);
    }

    /**
     * Evénement appelé pour détecter si le son de la position donnée en paramètre est jouable ou non<br>
     * Si oui, on affiche le lecteur correspondant, sinon, l'erreur correspondante apparaît
     * @function canplay
     * @instance
     * @memberof Lecteur
     * @event
     * @param {number} index position donnée
     * @see Lecteur#show
     * @see Lecteur#checkNameZik
     */
    canplay(index) {
        document.getElementsByClassName("error_sound")[index].style.visibility = "hidden";
        document.getElementsByClassName("musik")[index].style.visibility = "visible";
        ManageZik.setPlayable(index, true);
        Lecteur.checkNameZik(index);
    }

    /**
     * Formate l'affichage depuis le temps courant et la durée de l'audio passé en paramètre via sa position
     * @function formatTime
     * @instance
     * @memberof Lecteur
     * @static
     * @param {number} index position de l'audio
     * @param {number} current temps courant de l'audio
     * @param {number} duration durée de l'audio 
     * @see Lecteur.numberToTime
     */
    static formatTime(index, current, duration) {
        document.getElementsByClassName("time_value")[index].textContent =
            Lecteur.numberToTime(current) + " / " + Lecteur.numberToTime(duration);
    }

    /**
     * Evénement appelé après chargement des métadonnées de l'audio à la position donnée
     * @function afterdata
     * @instance
     * @memberof Lecteur
     * @event
     * @param {number} index position donnée
     * @see Lecteur#show
     */
    afterdata(index) {
        let audio = ManageZik.getAudio(index);
        Lecteur.formatTime(index, audio.currentTime, audio.duration);
    }

    /**
     * Calcule l'écart en pourcentage qu'il faut, via le nombre de couleurs donnés depuis la variable GLOBALS.DESIGN.COLOR_TIME
     * @function getStepFromColorTime
     * @instance
     * @memberof Lecteur
     * @static
     * @returns {number} Pourcentage entier résultant du calcul : 100 / nombre de couleurs
     * @see Lecteur.setColorTime
     */
    static getStepFromColorTime() {
        let long = -1;
        for (let i in GLOBALS.DESIGN.COLOR_TIME) {
            if (GLOBALS.DESIGN.COLOR_TIME[i] != undefined)
                long++;
            else
                delete GLOBALS.DESIGN.COLOR_TIME[i];
        }
        let step = parseInt(100 / long);
        return step;
    }

    /**
     * Evénement qui se déclenche lorsque le temps de l'audio passé en paramètre est mis à jour
     * @function timeupdate
     * @instance
     * @memberof Lecteur
     * @event
     * @param {number} index position de l'audio
     * @see Lecteur#show
     */
    timeupdate(index) {
        let glob = ManageZik.getAudio(index);
        let looping = ManageZik.getLoop(index);
        var duration = glob.duration;
        var current = glob.currentTime;
        var percent = Math.ceil((current / duration) * 100);
        if (current == duration) {
            setTimeout(() => {
                glob.currentTime = 0;
                if (looping) {
                    glob.play();
                } else {
                    ManageZik.setStart(index, false);
                    Lecteur.styleSvg(document.getElementsByClassName("play")[index], SVG.start);
                }
            }, 500);
        }
        let barre_time = document.getElementsByClassName("time")[index];
        barre_time.style.width = percent + "%";
        Lecteur.formatTime(index, current, duration);
        let change_color = GLOBALS.DESIGN.COLOR_TIME.DEFAULT;
        let vars = Lecteur.getStepFromColorTime();
        if (GLOBALS.DESIGN.COLOR_TIME.DEFAULT == "black") {
            for (let temps = 0; temps < 100; temps += vars) {
                if (percent > temps) {
                    change_color = GLOBALS.DESIGN.COLOR_TIME["TIME_" + temps];
                }
            }
        }
        barre_time.style.backgroundColor = change_color;
    }

    /**
     * Design le container de tous les lecteurs
     * @function styleContainer
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.allStyles
     */
    static styleContainer() {
        var container = document.getElementById("ctnr");
        container.style.width = "100%";
        container.style.height = "100%";
        container.style.overflowY = "scroll";
        container.style.overflowX = "hidden";
    }

    /**
     * Design tous les containers audios
     * @function styleAudios
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.allStyles
     */
    static styleAudios() {
        var audios = document.getElementById("audios");
        audios.style.display = "flex";
        audios.style.flexDirection = "column";
        audios.style.alignItems = "center";
        audios.style.width = "100%";
    }

    /**
     * Pour tous les sons, si le son passé en paramètre via sa position est non jouable ou présente une erreur de format,<br>
     * remplace le lecteur par l'erreur correspondante
     * @function manageBadSound
     * @instance
     * @memberof Lecteur
     * @static
     * @param {number} index position donnée
     * @see Lecteur.show
     */
    static manageBadSound(index) {
        let blocs = [
            ["musik", "hidden"],
            ["error_sound", "visible"]
        ];
        for (let bloc of blocs) {
            document.getElementsByClassName(bloc[0])[index].style.visibility = bloc[1];
        }
    }

    /**
     * Vérifie si le son de l'audio passé en paramètre via sa position est au bon format<br>
     * Si non, affiche l'erreur correspondante au lieu du lecteur
     * @function checkNameZik
     * @param {number} index position donnée
     * @static
     * @instance
     * @memberof Lecteur
     * @see ManageZik#getAudio
     * @see ManageZik#removeZik
     * @see Lecteur#event:canplay
     */
    static checkNameZik(index) {
        let musik = document.getElementsByClassName("musik")[index];
        let err_so = document.getElementsByClassName("error_sound")[index];
        let zik = ManageZik.getAudio(index);
        let name = zik.attributes.src.value;
        var cpt = 0;
        for (let i in name) {
            if (name[i] == '.')
                cpt += 1;
        }
        let errorText = document.getElementsByClassName("err_list")[index];
        if (cpt != 1) {
            musik.style.visibility = "hidden";
            err_so.style.visibility = "visible";
            errorText.textContent = " n'a pas le bon format";
        } else {
            for (let i = 0; i < index; i++) {
                let elt_name = ManageZik.getAudio(i).attributes.src.value;
                if (name == elt_name) {
                    musik.style.visibility = "hidden";
                    err_so.style.visibility = "visible";
                    errorText.textContent = " est déjà dans la playlist";
                    ManageZik.removeZik(index);
                }
            }
        }
    }

    /**
     * Appelle toutes les fonctions de stylisation de contenu
     * @function allStyles
     * @instance
     * @static
     * @memberof Lecteur
     * @see Lecteur.styleMusik
     * @see Lecteur.styleContainer
     * @see Lecteur.styleAudios
     * @see Lecteur.styleAdvanced
     * @see Lecteur.styleBarre
     * @see Lecteur.styleProgressBar
     * @see Lecteur.styleTime
     * @see Lecteur.styleTitres
     * @see Lecteur.styleDesign
     * @see Lecteur.styleContent
     * @see Lecteur.styleBody
     * @see CssRules#addTitleControllerRules
     * @see CssRules#addRules
     * @see Lecteur#useStyleProgressBar
     * @see GLOBALS.PROGRESS_BAR_STYLED
     */
    static allStyles() {
        Lecteur.styleMusik();
        Lecteur.styleContainer();
        Lecteur.styleAudios();
        Lecteur.styleAdvanced();
        Lecteur.styleBarre();
        Lecteur.styleProgressBar();
        Lecteur.styleTime();
        Lecteur.styleTitres();
        Lecteur.styleDesign();
        Lecteur.styleContent();
        Lecteur.styleBody();
        CssRules.addTitleControllerRules();
        if (GLOBALS.PROGRESS_BAR_STYLED)
            CssRules.addRules();

    }

    /**
     * Affiche et implémente toutes les actions et événements liés au lecteur
     * @function show
     * @instance
     * @memberof Lecteur
     * @see ManageZik#setStart
     * @see ManageZik#setRate
     * @see ManageZik#setPlayable
     * @see ManageZik#setLoop
     * @see ManageZik#setAudio
     * @see ManageZik#getAudio
     * @see ManageZik#setAuthor
     * @see ManageZik#setTitre
     * @see Lecteur.manageBadSound
     * @see Lecteur#event:rating
     * @see Lecteur#event:loop
     * @see Lecteur#event:canplay
     * @see Lecteur#event:afterdata
     * @see Lecteur#event:myplay
     * @see Lecteur#event:timeupdate
     * @see Lecteur#event:setTime
     * @see Lecteur#styleSvg
     * @see SVG
     * @see GLOBALS.DESIGN
     */
    show() {
        Lecteur.allStyles();
        for (let i = 0; i < document.getElementsByClassName("musik").length; i++) {
            ManageZik.setStart(i, false);
            ManageZik.setRate(i, 1);
            ManageZik.setPlayable(i, false);
            ManageZik.setLoop(i, false);
            ManageZik.setAudio(i, document.getElementsByClassName("zik")[i]);
            Lecteur.manageBadSound(i);
            let namus = ManageZik.getAudio(i).attributes.src.value.split(".")[0];
            let last = namus.split("/").length;
            let the_name = namus.split("/")[last - 1];
            let author = the_name.split(" - ")[0];
            ManageZik.setAuthor(i, author);
            the_name = the_name.split(" - ")[1];
            ManageZik.setTitre(i, the_name);
            document.getElementsByClassName("name")[i].textContent = the_name;
            document.getElementsByClassName("author")[i].textContent = author;

            document.getElementsByClassName("loop")[i].id = "loop_" + i;
            document.getElementsByClassName("lbl_loop")[i].htmlFor = "loop_" + i;

            document.getElementsByClassName("rM")[i].addEventListener("click", this.rating.bind(event, i, '-'));
            document.getElementsByClassName("rP")[i].addEventListener("click", this.rating.bind(event, i, '+'));
            document.getElementsByClassName("loop")[i].addEventListener("click", this.loop.bind(event, i));

            ManageZik.getAudio(i).addEventListener("canplay", this.canplay.bind(event, i));
            ManageZik.getAudio(i).addEventListener("loadedmetadata", this.afterdata.bind(event, i));
            ManageZik.getAudio(i).volume = 0.2;

            document.getElementsByClassName("getVol")[i].textContent = "20%";

            for (let controller of[
                    ["M60", "moins60", -60], ["M10", "moins10", -10], ["P10", "plus10", 10], ["P60", "plus60", 60]
                ]) {
                Lecteur.styleSvg(document.getElementsByClassName(controller[0])[i], SVG[controller[1]]);
                let formatTime = (controller[2] > 0) ? "+" + controller[2] : controller[2] + "";
                formatTime = formatTime[0] + " " + formatTime[1] + formatTime[2];
                let btnControl = document.getElementsByClassName(controller[0])[i];
                btnControl.addEventListener("click", this.setTime.bind(event, i, controller[2]));
                btnControl.children[0].textContent = formatTime + " s";
            }
            let volumer = document.getElementsByClassName("volume")[i];
            volumer.style.backgroundColor = GLOBALS.DESIGN.COLOR_VOLUME.bg;
            volumer.style.color = GLOBALS.DESIGN.COLOR_VOLUME.fg;
            document.getElementsByClassName("V1")[i].style.backgroundColor = GLOBALS.DESIGN.COLOR_VOLUME.button[0];
            for (let j = 1; j <= 5; j++) {
                document.getElementsByClassName("V" + j)[i].addEventListener("click", this.reguleVolume.bind(event, i, j));
            }
            let player = document.getElementsByClassName("play")[i];
            Lecteur.styleSvg(player, SVG.start);
            player.addEventListener("click", this.myplay.bind(event, i));
            ManageZik.getAudio(i).addEventListener("timeupdate", this.timeupdate.bind(event, i));
        }
    }
}