/* jshint esversion: 6 */

var CssRules = (function() {
    let createStyle = false;
    return {
        addRules: function() {
            if (!createStyle) {
                let style = document.createElement("style");
                for (let i in this) {
                    if (i.substring(0, 4) == "rule")
                        style.innerHTML += this[i];
                }
                document.body.appendChild(style);
            }
        },
        rule1: "::-webkit-scrollbar {width: 14px;height: 14px;background-color: aqua 0 0 repeat;}",
        rule2: "::-webkit-scrollbar-track-piece {" +
            "/* Fond */" +
            "background: transparent none;" +
            "border: solid 4px transparent;" +
            "border-right-width: 8px;" +
            "margin: 4px;" +
            "box-shadow: inset 1px 1px 0 0 rgb(137, 131, 117), inset -1px -1px 0 0 rgb(224, 220, 210);}",
        rule3: "::-webkit-scrollbar-track-piece:horizontal {/* Fond pour la barre du bas */border-right-width: 4px;border-bottom-width: 8px;}",
        rule4: "::-webkit-scrollbar-thumb {/* Barre */" +
            "border: solid 0 transparent;" +
            "border-right-width: 4px;" +
            "border-radius: 5px;" +
            "border-top-right-radius: 9px 5px;" +
            "border-bottom-right-radius: 9px 5px;" +
            "box-shadow: inset 0 0 0 1px rgb(79, 79, 79), inset 0 0 0 6px rgb(102, 102, 102);}",
        rule5: "::-webkit-scrollbar-thumb:hover {/* Barre */box-shadow: inset 0 0 0 1px rgb(90, 90, 90), inset 0 0 0 6px rgb(110, 110, 110);}",
        rule6: "::-webkit-scrollbar-thumb:horizontal {/* Barre du bas */border-right-width: 0;border-bottom-width: 4px;" +
            "border-top-right-radius: 5px;border-bottom-right-radius: 5px 9px;border-bottom-left-radius: 5px 9px;}",
        rule7: "::-webkit-scrollbar-corner {/* Coin de la fenêtre */background: #bfb6a3 0 0 no-repeat;}"
    };
})();

var Svg = (function() {
    return {
        start: "url(\"data:image/svg+xml;utf8," +
            "<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
            "<circle cx='200' cy='200' r='200' fill='transparent'/>" +
            "<path d='M100,100 Q150,200,100,300 L125,300 L300,200 L125,100 Z' fill='green' stroke='black'/></svg>\")",
        moins10: "url(\"data:image/svg+xml;utf8," +
            "<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
            "<circle cx='200' cy='200' r='200' fill='transparent' />" +
            "<path d='M300,100 Q250,200,300,300 L275,300 L100,200 L275,100 Z' fill='skyblue' stroke='black' />" +
            "<path d='M230,100 Q180,200,230,300 L205,300 L30,200 L205,100 Z' fill = 'orange' stroke = 'black' /></svg>\")",
        moins60: "url(\"data:image/svg+xml;utf8," +
            "<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
            "<circle cx='200' cy='200' r='200' fill='transparent' />" +
            "<path d='M300,100 Q250,200,300,300 L275,300 L100,200 L275,100 Z' fill='skyblue' stroke='black'/>" +
            "<path d='M260,100 Q210,200,260,300 L235,300 L60,200 L235,100 Z' fill='red' stroke='black'/>" +
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
            "<path d='M130,100 Q180,200,130,300 L155,300 L330,200 L155,100 Z' fill='red' stroke='black'/>" +
            "<path d='M170,100 Q220,200,170,300 L195,300 L370,200 L195,100 Z' fill='orange' stroke='black'/></svg>\")",
        pause: "url(\"data:image/svg+xml;utf8," +
            "<svg width='400' height='400' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
            "<circle cx='200' cy='200' r='200' fill='transparent' />" +
            "<path d='M100,100 Q150,200,100,300 L170,300  Q120,200,170,100 Z' fill='red' stroke='black'/>" +
            "<path d='M230,100 Q280,200,230,300 L300,300  Q250,200,300,100 Z' fill='red' stroke='black'/></svg>\")"
    };
})();

var ManageZik = (function() {
    var Ziks = [];

    function setZik(indexZik, index, elt) {
        if (Ziks[indexZik] == undefined)
            Ziks[indexZik] = [];
        Ziks[indexZik][index] = elt;
    }
    return {
        getZiks: function() {
            return Ziks;
        },
        addZiks: function(titre, start, rate) {
            Ziks.push([titre, start, rate]);
        },
        setTitre: function(index, titre) {
            setZik(index, 0, titre);
        },
        getTitre(index) {
            return this.getZik(index)[0];
        },
        setAuthor(index, author) {
            setZik(index, 1, author);
        },
        getAuthor(index, author) {
            return this.getZik(index)[1];
        },
        setStart: function(index, start) {
            setZik(index, 2, start);
        },
        getStart(index) {
            return this.getZik(index)[2];
        },
        setRate: function(index, rate) {
            setZik(index, 3, rate);
        },
        getRate(index) {
            return this.getZik(index)[3];
        },
        getZik(index) {
            return Ziks[index];
        },
        getTitlesByLetter(letter) {
            let res = [];
            for (let i = 0; i < this.getZiks().length; i++) {
                if (this.getTitre(i) != "" && this.isPlayable(i) && this.getTitre(i)[0].toLowerCase() == letter.toLowerCase())
                    res.push(this.getZik(i));
            }
            return res;
        },
        removeZik(index) {
            this.setTitre(index, "");
            this.setStart(index, false);
            this.setRate(index, 0);
        },
        setPlayable(index, mode) {
            setZik(index, 4, mode);
        },
        isPlayable(index) {
            return this.getZik(index)[4];
        },
        setAudio(index, audio) {
            setZik(index, 5, audio);
        },
        getAudio(index, audio) {
            return this.getZik(index)[5];
        }
    };
})();

var FREQ_RATE = 0.25;

var DESIGN = {
    COLOR_VOLUME: {
        "bg": "black",
        "fg": "white",
        "button": [
            "rgb(0, 0, 255)",
            "rgb(0, 255, 255)",
            "rgb(0, 255, 0)",
            "rgb(255, 255, 0)",
            "rgb(255, 0, 0)"
        ],
        "_button": "grey"
    },
    COLOR_CONTROLLER: {
        "bg": "black",
        "button": "white"
    },
    COLOR_RATE: {
        "bg": "black",
        "fg": "white",
        "_button": "grey"
    },
    COLOR_TIME: {
        "DEFAULT": "black",
        "TIME_0": "purple",
        "TIME_10": "#1044AA",
        "TIME_20": "#0265FF",
        "TIME_30": "#006599",
        "TIME_40": "#669801",
        "TIME_50": "#99CC01",
        "TIME_60": "yellow",
        "TIME_70": "#FFCC11",
        "TIME_80": "#FE9900",
        "TIME_90": "#FF6501"
    }
};
class Lecteur {

    constructor() {

    }

    static setColorTimeDefaultValue(value) {
        DESIGN.COLOR_TIME.DEFAULT = value;
    }

    static setColorTime(values) {
        DESIGN.COLOR_TIME.DEFAULT = "black";
        let step = parseInt(100 / values.length);
        for (let i = 0; i < 100; i += 10) {
            delete DESIGN.COLOR_TIME["TIME_" + i];
        }
        for (let i = 0; i < 100; i += step) {
            if (values[i / step] != undefined)
                DESIGN.COLOR_TIME["TIME_" + i] = values[i / step];
        }

    }

    static declareElt(elt, classe) {
        var e = document.createElement(elt);
        let nb = 1;
        for (let i = 0; i < classe.length; i++) {
            if (classe[i] == " ")
                nb += 1;
        }
        if (nb == 1) e.classList.add(classe);
        else {
            let all_classes = classe.split(" ");
            for (let i = 0; i < all_classes.length; i++) {
                e.classList.add(all_classes[i]);
            }
        }
        return e;
    }

    static styleBarre() {
        let barres = document.getElementsByClassName("barre");
        for (let i = 0; i < barres.length; i++) {
            let barre = barres[i];
            if (barre.classList.contains("volume") || barre.classList.contains("rate")) {
                barre.style.flexDirection = "column";
                barre.style.marginTop = "1em";
            }
            barre.style.width = "10%";
            barre.style.border = "1px solid black";
            barre.style.display = "flex";
            barre.style.justifyContent = "space-evenly";
            barre.style.alignItems = "center";
            let children = barre.children;
            for (let j = 0; j < children.length; j++) {
                children[j].style.width = "100%";
            }
        }
    }

    static styleMusik() {
        let musicos = document.getElementsByClassName("musik");
        musicos[0].style.marginTop = "2em";
        for (let i = 0; i < musicos.length; i++) {
            let mzik = musicos[i];
            mzik.style.backgroundColor = "black";
            mzik.style.color = "white";
            mzik.style.position = "relative";
            mzik.style.borderRadius = "25px";
            mzik.style.border = "1px solid black";
            mzik.style.width = "50%";
            mzik.style.padding = "1em 0.5em 0em 0.5em";
            mzik.style.display = "flex";
            mzik.style.flexDirection = "row";
            mzik.style.marginBottom = "2em";
            mzik.style.justifyContent = "space-evenly";
        }
    }

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

    static styleMove() {
        var moves = document.getElementsByClassName("move");
        for (let i = 0; i < moves.length; i++) {
            moves[i].style.width = "0%";
            moves[i].style.left = "0";
            moves[i].style.top = "0";
            moves[i].style.padding = "0";
            moves[i].style.height = "100%";
            moves[i].style.borderRadius = "0 50px 50px 0";
            moves[i].style.backgroundColor = "black";
            moves[i].style.position = "absolute";
        }
    }

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


    static styleBody() {
        document.body.style.userSelect = "none";
        document.body.style.webkitUserSelect = "none";
    }

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

    addRecord(source) {
        var container = document.getElementById("audios");
        var musik = Lecteur.declareElt("div", "musik");
        var titre = Lecteur.declareElt("span", "name");
        var author = Lecteur.declareElt("span", "author");
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

        var content = Lecteur.declareElt("div", "content");
        var prog = Lecteur.declareElt("div", "prog");
        var moveTime = Lecteur.declareElt("div", "move time");
        prog.appendChild(moveTime);
        var time_value = Lecteur.declareElt("span", "time_value");
        var audio = Lecteur.declareElt("audio", "zik");
        audio.preload = "metadata";
        audio.src = source;
        var adv = Lecteur.declareElt("div", "advanced");
        let btns = "M60 M10 play P10 P60".split(" ");
        for (let i = 0; i < btns.length; i++) {
            let tmp = Lecteur.declareElt("button", btns[i]);
            adv.appendChild(tmp);
        }
        content.appendChild(prog);
        content.appendChild(time_value);
        content.appendChild(audio);
        content.appendChild(adv);
        var volume = Lecteur.declareElt("div", "volume barre");
        var design = Lecteur.declareElt("div", "design");
        for (let i = 5; i > 0; i--) {
            let tmp = Lecteur.declareElt("button", "V" + i);
            tmp.value = "" + i;
            design.appendChild(tmp);
        }
        design.appendChild(Lecteur.declareElt("span", "getVol"));
        volume.appendChild(design);
        var rate = Lecteur.declareElt("div", "rate barre");
        var frate = Lecteur.declareElt("div", "range");
        var frateD1 = Lecteur.declareElt("div", "frate_div");
        var frateD2 = Lecteur.declareElt("div", "frate_div");
        var frateVal = Lecteur.declareElt("div", "rVal");
        var frateM = Lecteur.declareElt("div", "rM");
        var frateP = Lecteur.declareElt("div", "rP");
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
            i.style.backgroundColor = DESIGN.COLOR_RATE._button;
            i.style.color = DESIGN.COLOR_RATE.fg;
            i.style.borderBottom = "1px solid black";
            i.style.display = " flex";
            i.style.flexDirection = "row";
            i.style.alignItems = "center";
            i.style.justifyContent = "space-evenly";
            i.style.width = "100%";
        }
        rate.style.backgroundColor = DESIGN.COLOR_RATE.bg;
        frate.appendChild(frateD1);
        frate.appendChild(frateD2);
        frateD2.appendChild(frateVal);
        frateD1.style.borderTop = "1px solid black";
        frateVal.textContent = "1x";

        rate.appendChild(frate);
        musik.appendChild(titre);
        musik.appendChild(author);
        musik.appendChild(content);
        musik.appendChild(volume);
        musik.appendChild(rate);
        let errorExistSound = Lecteur.declareElt("div", "error_sound");
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
        let text1 = Lecteur.declareElt("span", "err");
        let text2 = Lecteur.declareElt("span", "err_name");
        text2.style.color = "black";
        text2.style.fontWeight = "bold";
        text2.style.padding = "0.5em";
        let text3 = Lecteur.declareElt("span", "err err_list");
        text1.textContent = "Le fichier ";
        text2.textContent = source;
        text3.textContent = " n'est pas écoutable";
        errorExistSound.appendChild(text1);
        errorExistSound.appendChild(text2);
        errorExistSound.appendChild(text3);
        musik.appendChild(errorExistSound);
        container.appendChild(musik);
    }

    static styleAdvanced() {
        let adv = document.getElementsByClassName("advanced");
        for (let i = 0; i < adv.length; i++) {
            adv[i].style.backgroundColor = DESIGN.COLOR_CONTROLLER.bg;
            adv[i].style.borderRadius = "0.5em";
            adv[i].style.width = "100%";
            adv[i].style.padding = "0.5em";
            adv[i].style.display = "flex";
            adv[i].style.alignItems = "center";
            adv[i].style.justifyContent = "space-around";
            let children = adv[i].children;
            for (let j = 0; j < children.length; j++) {
                if (children[j].tagName == "BUTTON") {
                    children[j].style.backgroundColor = DESIGN.COLOR_CONTROLLER.button;
                    children[j].style.borderRadius = "50%";
                    children[j].style.marginRight = "5px";
                }
            }
        }
    }

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
                    children[j].style.backgroundColor = DESIGN.COLOR_VOLUME._button;
                    children[j].style.width = "100%";
                    children[j].style.borderBottom = "1px solid black";
                    children[j].style.cursor = "pointer";
                    children[j].style.borderRadius = "5%";
                }
            }
        }
    }

    static styleSvg(elt, image_name) {
        elt.style.backgroundPosition = "0 0";
        elt.style.backgroundSize = "100% 100%";
        elt.style.width = "3em";
        elt.style.height = "3em";
        elt.style.border = "none";
        elt.style.backgroundRepeat = "no-repeat";
        elt.style.backgroundImage = image_name;

    }

    static sToTime(t) {
        return Lecteur.padZero(parseInt((t / (60 * 60)) % 24)) + ":" +
            Lecteur.padZero(parseInt((t / (60)) % 60)) + ":" +
            Lecteur.padZero(parseInt((t) % 60));
    }

    static padZero(v) {
        return (v < 10) ? "0" + v : v;
    }

    moveTime(event, i, temps) {
        let index = event;
        let time = i;
        document.getElementsByClassName("zik")[index].currentTime += time;
    }

    reguleVolume(event, i, j) {
        let index = event;
        let jbtn = i;
        let element = document.getElementsByClassName("V" + jbtn)[index];
        let volume = (parseInt(element.value, 10) * 20);
        document.getElementsByClassName("getVol")[index].textContent = volume + "%";
        document.getElementsByClassName("zik")[index].volume = volume / 100;
        element.style.backgroundColor = DESIGN.COLOR_VOLUME.button[jbtn - 1];
        for (let k = 1; k <= 5; k++) {
            if (jbtn != k)
                document.getElementsByClassName("V" + k)[index].style.backgroundColor = DESIGN.COLOR_VOLUME._button;
        }
    }

    myplay(event, i) {
        let index = event;
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
        Lecteur.styleSvg(elt, Svg[image]);
    }

    rating(event, i, direction) {
        let index = event;
        let dir = i;
        let valeur = 0;
        let rate = ManageZik.getRate(index);
        if (dir == '-') {
            if (rate - FREQ_RATE > 0) {
                valeur = -FREQ_RATE;
            }
        }
        if (dir == '+') {
            if (rate + FREQ_RATE < 3) {
                valeur = FREQ_RATE;
            }
        }
        let newValue = rate + valeur;
        ManageZik.setRate(index, newValue);
        document.getElementsByClassName("rVal")[index].textContent = (newValue) + "x";
        document.getElementsByClassName("zik")[index].playbackRate = (newValue);
    }

    canplay(event, i) {
        let index = event;
        document.getElementsByClassName("error_sound")[index].style.visibility = "hidden";
        document.getElementsByClassName("musik")[index].style.visibility = "visible";
        ManageZik.setPlayable(index, true);
        Lecteur.checkNameZik(index);
    }

    static formatTime(index, current, duration) {
        document.getElementsByClassName("time_value")[index].textContent =
            Lecteur.sToTime(current) + " / " + Lecteur.sToTime(duration);
    }

    afterdata(event, i) {
        let index = event;
        let audio = ManageZik.getAudio(index);
        Lecteur.formatTime(index, audio.currentTime, audio.duration);
    }

    static getStepFromColorTime() {
        let long = -1;
        for (let i in DESIGN.COLOR_TIME) {
            if (DESIGN.COLOR_TIME[i] != undefined)
                long++;
            else
                delete DESIGN.COLOR_TIME[i];
        }
        let step = parseInt(100 / long);
        return step;
    }

    timeupdate(event, i) {
        let index = event;
        let glob = ManageZik.getAudio(index);
        var duration = glob.duration;
        var current = glob.currentTime;
        var percent = Math.ceil((current / duration) * 100);
        if (current == duration) {
            let elt = glob;
            setTimeout(() => {
                ManageZik.setStart(index, false);
                elt.currentTime = 0;
                Lecteur.styleSvg(document.getElementsByClassName("play")[index], Svg.start);
            }, 500);
        }
        let barre_time = document.getElementsByClassName("time")[index];
        barre_time.style.width = percent + "%";
        Lecteur.formatTime(index, current, duration);
        let change_color = DESIGN.COLOR_TIME.DEFAULT;
        let vars = Lecteur.getStepFromColorTime();
        if (DESIGN.COLOR_TIME.DEFAULT == "black") {
            for (let temps = 0; temps < 100; temps += vars) {
                if (percent > temps) {
                    change_color = DESIGN.COLOR_TIME["TIME_" + temps];
                }
            }
        }
        barre_time.style.backgroundColor = change_color;
    }

    static styleContainer() {
        var container = document.getElementById("ctnr");
        // container.style.border = "1px solid black";
        container.style.width = "50%";
        container.style.height = "95vmin";
        container.style.overflowY = "scroll";
        container.style.overflowX = "hidden";
        // container.style.margin = "auto";
    }

    static styleAudios() {
        var audios = document.getElementById("audios");
        audios.style.display = "flex";
        audios.style.flexDirection = "column";
        audios.style.alignItems = "center";
        audios.style.width = "100%";
    }

    static manageBadSound(index) {
        let blocs = [
            ["musik", "hidden"],
            ["error_sound", "visible"]
        ];
        for (let bloc of blocs) {
            document.getElementsByClassName(bloc[0])[index].style.visibility = bloc[1];
        }
    }

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

    static allStyles() {
        Lecteur.styleMusik();
        Lecteur.styleContainer();
        Lecteur.styleAudios();
        Lecteur.styleAdvanced();
        Lecteur.styleBarre();
        Lecteur.styleProgressBar();
        Lecteur.styleMove();
        Lecteur.styleTitres();
        Lecteur.styleDesign();
        Lecteur.styleContent();
        Lecteur.styleBody();
        CssRules.addRules();

    }

    init() {
        Lecteur.allStyles();
        for (let i = 0; i < document.getElementsByClassName("musik").length; i++) {
            ManageZik.setStart(i, false);
            ManageZik.setRate(i, 1);
            ManageZik.setPlayable(i, false);
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

            document.getElementsByClassName("rM")[i].addEventListener("click", this.rating.bind(event, i, '-'));
            document.getElementsByClassName("rP")[i].addEventListener("click", this.rating.bind(event, i, '+'));

            ManageZik.getAudio(i).addEventListener("canplay", this.canplay.bind(event, i));
            ManageZik.getAudio(i).addEventListener("loadedmetadata", this.afterdata.bind(event, i));
            ManageZik.getAudio(i).volume = 0.2;

            document.getElementsByClassName("getVol")[i].textContent = "20%";

            for (let controller of[
                    ["M60", "moins60", -60], ["M10", "moins10", -10], ["P10", "plus10", 10], ["P60", "plus60", 60]
                ]) {
                Lecteur.styleSvg(document.getElementsByClassName(controller[0])[i], Svg[controller[1]]);
                document.getElementsByClassName(controller[0])[i].addEventListener("click", this.moveTime.bind(event, i, controller[2]));
            }
            let volumer = document.getElementsByClassName("volume")[i];
            volumer.style.backgroundColor = DESIGN.COLOR_VOLUME.bg;
            volumer.style.color = DESIGN.COLOR_VOLUME.fg;
            document.getElementsByClassName("V1")[i].style.backgroundColor = DESIGN.COLOR_VOLUME.button[4];
            for (let j = 1; j <= 5; j++) {
                document.getElementsByClassName("V" + j)[i].addEventListener("click", this.reguleVolume.bind(event, i, j));
            }
            let player = document.getElementsByClassName("play")[i];
            Lecteur.styleSvg(player, Svg.start);
            player.addEventListener("click", this.myplay.bind(event, i));
            ManageZik.getAudio(i).addEventListener("timeupdate", this.timeupdate.bind(event, i));
        }
    }
}