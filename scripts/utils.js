/* jshint esversion: 6 */

function declareElt(elt, classe) {
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

function styleBarre() {
    let barres = document.getElementsByClassName("barre");
    for (let i = 0; i < barres.length; i++) {
        let barre = barres[i];
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

function styleMusik() {
    let musicos = document.getElementsByClassName("musik");
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

function addRecord(source) {
    var container = document.getElementById("audios");
    var musik = declareElt("div", "musik");
    var titre = declareElt("span", "name");
    var content = declareElt("div", "content");
    var prog = declareElt("div", "prog");
    var moveTime = declareElt("div", "move time");
    prog.appendChild(moveTime);
    var time_value = declareElt("span", "time_value");
    var audio = declareElt("audio", "zik");
    audio.preload = "metadata";
    audio.src = source;
    var adv = declareElt("div", "advanced");
    let btns = "M60 M10 play P10 P60".split(" ");
    for (let i = 0; i < btns.length; i++) {
        let tmp = declareElt("button", btns[i]);
        adv.appendChild(tmp);
    }
    content.appendChild(prog);
    content.appendChild(time_value);
    content.appendChild(audio);
    content.appendChild(adv);
    var volume = declareElt("div", "volume barre");
    var design = declareElt("div", "design");
    for (let i = 5; i > 0; i--) {
        let tmp = declareElt("button", "V" + i);
        tmp.value = "" + i;
        design.appendChild(tmp);
    }
    design.appendChild(declareElt("span", "getVol"));
    volume.appendChild(design);
    var rate = declareElt("div", "rate barre");
    var frate = declareElt("div", "range");
    var frateD1 = declareElt("div", "frate_div");
    var frateD2 = declareElt("div", "frate_div");
    var frateVal = declareElt("div", "rVal");
    var frateM = declareElt("div", "rM");
    var frateP = declareElt("div", "rP");
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
        i.style.backgroundColor = COLOR_RATE._button;
        i.style.color = COLOR_RATE.fg;
        i.style.borderBottom = "1px solid black";
        i.style.display = " flex";
        i.style.flexDirection = "row";
        i.style.alignItems = "center";
        i.style.justifyContent = "space-evenly";
        i.style.width = "100%";
    }
    rate.style.backgroundColor = COLOR_RATE.bg;
    frate.appendChild(frateD1);
    frate.appendChild(frateD2);
    frateD2.appendChild(frateVal);
    frateD1.style.borderTop = "1px solid black";
    frateVal.textContent = "1x";

    rate.appendChild(frate);
    musik.appendChild(titre);
    musik.appendChild(content);
    musik.appendChild(volume);
    musik.appendChild(rate);
    let errorExistSound = declareElt("div", "error_sound");
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
    let text1 = declareElt("span", "err");
    let text2 = declareElt("span", "err_name");
    text2.style.color = "black";
    text2.style.fontWeight = "bold";
    text2.style.padding = "0.5em";
    let text3 = declareElt("span", "err err_list");
    text1.textContent = "Le fichier ";
    text2.textContent = source;
    text3.textContent = " n'est pas écoutable";
    errorExistSound.appendChild(text1);
    errorExistSound.appendChild(text2);
    errorExistSound.appendChild(text3);
    musik.appendChild(errorExistSound);
    container.appendChild(musik);
}

function styleAdvanced() {
    let adv = document.getElementsByClassName("advanced");
    for (let i = 0; i < adv.length; i++) {
        adv[i].style.backgroundColor = COLOR_CONTROLLER.bg;
        adv[i].style.borderRadius = "0.5em";
        adv[i].style.width = "100%";
        adv[i].style.padding = "0.5em";
        adv[i].style.display = "flex";
        adv[i].style.alignItems = "center";
        adv[i].style.justifyContent = "space-around";
        let children = adv[i].children;
        for (let j = 0; j < children.length; j++) {
            if (children[j].tagName == "BUTTON") {
                children[j].style.backgroundColor = COLOR_CONTROLLER.button;
                children[j].style.borderRadius = "50%";
                children[j].style.marginRight = "5px";
            }
        }
    }
}

function styleSvg(elt, image_name) {
    elt.style.backgroundPosition = "0 0";
    elt.style.backgroundSize = "100% 100%";
    elt.style.width = "3em";
    elt.style.height = "3em";
    elt.style.border = "none";
    elt.style.backgroundRepeat = "no-repeat";
    elt.style.backgroundImage = "url(\"resources/" + image_name + ".svg\")";
}

function sToTime(t) {
    return padZero(parseInt((t / (60 * 60)) % 24)) + ":" +
        padZero(parseInt((t / (60)) % 60)) + ":" +
        padZero(parseInt((t) % 60));
}

function padZero(v) {
    return (v < 10) ? "0" + v : v;
}

function moveTime(event, i, temps) {
    let index = event;
    let time = i;
    document.getElementsByClassName("zik")[index].currentTime += time;
}

function reguleVolume(event, i, j) {
    let index = event;
    let jbtn = i;
    let element = document.getElementsByClassName("V" + jbtn)[index];
    let volume = (parseInt(element.value, 10) * 20);
    document.getElementsByClassName("getVol")[index].textContent = volume + "%";
    document.getElementsByClassName("zik")[index].volume = volume / 100;
    element.style.backgroundColor = COLOR_VOLUME.button;
    for (let k = 1; k <= 5; k++) {
        if (jbtn != k)
            document.getElementsByClassName("V" + k)[index].style.backgroundColor = COLOR_VOLUME._button;
    }
}

function myplay(event, i) {
    let index = event;
    let audio = document.getElementsByClassName("zik")[index];
    let elt = document.getElementsByClassName("play")[index];
    let image = "";
    if (start[index]) {
        audio.pause();
        start[index] = false;
        image = "start";
    } else {
        start[index] = true;
        audio.play();
        image = "pause";
    }
    styleSvg(elt, image);
}

function rating(event, i, direction) {
    let index = event;
    let dir = i;
    let valeur = 0;
    if (dir == '-') {
        if (rates[index] - FREQ_RATE > 0) {
            valeur = -FREQ_RATE;
        }
    }
    if (dir == '+') {
        if (rates[index] + FREQ_RATE < 3) {
            valeur = FREQ_RATE;
        }
    }
    rates[index] += valeur;
    document.getElementsByClassName("rVal")[index].textContent = rates[index] + "x";
    document.getElementsByClassName("zik")[index].playbackRate = rates[index];
}

function canplay(event, i) {
    let index = event;
    document.getElementsByClassName("error_sound")[index].style.visibility = "hidden";
    document.getElementsByClassName("musik")[index].style.visibility = "visible";
}

function afterdata(event, i) {
    let index = event;
    document.getElementsByClassName("time_value")[index].textContent = sToTime(document.getElementsByClassName("zik")[index].currentTime) +
        " / " +
        sToTime(document.getElementsByClassName("zik")[index].duration);
}

function timeupdate(event, i) {
    let index = event;
    let glob = document.getElementsByClassName("zik")[index];
    var duration = glob.duration;
    var current = glob.currentTime;
    var percent = Math.ceil((current / duration) * 100);
    if (current == duration) {
        let elt = glob;
        setTimeout(() => {
            start[index] = false;
            elt.currentTime = 0;
            styleSvg(document.getElementsByClassName("play")[index], "start");
        }, 500);
    }
    document.getElementsByClassName("time")[index].style.width = percent + "%";
    current = sToTime(current);
    duration = sToTime(duration);
    document.getElementsByClassName("time_value")[index].textContent = current + "/" + duration;
    let change_color = COLOR_TIME.DEFAULT;
    if (percent <= 10) change_color = COLOR_TIME.TIME_10;
    else if (percent <= 20) change_color = COLOR_TIME.TIME_20;
    else if (percent <= 30) change_color = COLOR_TIME.TIME_30;
    else if (percent <= 40) change_color = COLOR_TIME.TIME_40;
    else if (percent <= 50) change_color = COLOR_TIME.TIME_50;
    else if (percent <= 60) change_color = COLOR_TIME.TIME_60;
    else if (percent <= 70) change_color = COLOR_TIME.TIME_70;
    else if (percent <= 80) change_color = COLOR_TIME.TIME_80;
    else if (percent <= 90) change_color = COLOR_TIME.TIME_90;
    else if (percent <= 100) change_color = COLOR_TIME.TIME_100;
    document.getElementsByClassName("time")[index].style.backgroundColor = change_color;
}

function styleContainer() {
    var container = document.getElementById("ctnr");
    container.style.border = "1px solid black";
    container.style.width = "50%";
    container.style.height = "95vmin";
    container.style.overflowY = "scroll";
    container.style.overflowX = "hidden";
    container.style.margin = "auto";
}

function styleAudios() {
    var audios = document.getElementById("audios");
    audios.style.display = "flex";
    audios.style.flexDirection = "column";
    audios.style.alignItems = "center";
    audios.style.width = "100%";
}

function manageBadSound(index) {
    let blocs = [
        ["musik", "hidden"],
        ["error_sound", "visible"]
    ];
    for (let bloc of blocs) {
        document.getElementsByClassName(bloc[0])[index].style.visibility = bloc[1];
    }
}

function checkNameZik(index) {
    let musik = document.getElementsByClassName("musik")[index];
    let err_so = document.getElementsByClassName("error_sound")[index];
    let zik = document.getElementsByClassName("zik")[index];
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
            let elt_name = document.getElementsByClassName("zik")[i].attributes.src.value;
            if (name == elt_name) {
                console.log(elt_name, name);
                musik.style.visibility = "hidden";
                err_so.style.visibility = "visible";
                errorText.textContent = " existe déjà";
            }
        }
    }
}

function init() {
    styleMusik();
    styleContainer();
    styleAudios();
    styleAdvanced();
    styleBarre();

    for (let i = 0; i < document.getElementsByClassName("musik").length; i++) {
        start.push(false);
        rates.push(1);
        manageBadSound(i);
        checkNameZik(i);
        let namus = document.getElementsByClassName("zik")[i].attributes.src.value.split(".")[0];
        let last = namus.split("/").length;
        names.push(namus.split("/")[last - 1]);
        document.getElementsByClassName("name")[i].textContent = names[i];

        document.getElementsByClassName("rM")[i].addEventListener("click", rating.bind(event, i, '-'));
        document.getElementsByClassName("rP")[i].addEventListener("click", rating.bind(event, i, '+'));

        document.getElementsByClassName("zik")[i].addEventListener("canplay", canplay.bind(event, i));
        document.getElementsByClassName("zik")[i].addEventListener("loadedmetadata", afterdata.bind(event, i));
        document.getElementsByClassName("zik")[i].volume = 0.2;

        document.getElementsByClassName("getVol")[i].textContent = "20%";

        for (let controller of[
                ["M60", "moins60", -60], ["M10", "moins10", -10], ["P10", "plus10", 10], ["P60", "plus60", 60]
            ]) {
            styleSvg(document.getElementsByClassName(controller[0])[i], controller[1]);
            document.getElementsByClassName(controller[0])[i].addEventListener("click", moveTime.bind(event, i, controller[2]), false);
        }

        document.getElementsByClassName("volume")[i].style.backgroundColor = COLOR_VOLUME.bg;
        document.getElementsByClassName("volume")[i].style.color = COLOR_VOLUME.fg;
        document.getElementsByClassName("V1")[i].style.backgroundColor = COLOR_VOLUME.button;
        for (let j = 1; j <= 5; j++) {
            document.getElementsByClassName("V" + j)[i].addEventListener("click", reguleVolume.bind(event, i, j), false);
        }

        styleSvg(document.getElementsByClassName("play")[i], "start");
        document.getElementsByClassName("play")[i].addEventListener("click", myplay.bind(event, i));
        document.getElementsByClassName("zik")[i].addEventListener("timeupdate", timeupdate.bind(event, i));
    }
}