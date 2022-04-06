function declareElt(elt, classe) {
    var e = document.createElement(elt);
    let nb = 1;
    for (let i = 0; i < classe.length; i++) {
        if (classe[i] == " ")
            nb += 1
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

function StyleBarre() {
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

function StyleMusik() {
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
    frateD1.appendChild(frateM)
    frateD1.appendChild(frateP)
    frateM.textContent = "-"
    frateP.textContent = "+"
    frateM.style.borderRight = "1px solid black";
    let liste = [frateM, frateP];
    for (let i of liste) {
        i.style.width = "1em";
        i.style.textAlign = "center";
        i.style.cursor = "pointer";
    }
    liste = [frateD1, frateD2];
    for (let i of liste) {
        i.style.backgroundColor = COLOR_RATE["_button"]
        i.style.color = COLOR_RATE["fg"]
        i.style.borderBottom = "1px solid black"
        i.style.display = " flex";
        i.style.flexDirection = "row";
        i.style.alignItems = "center";
        i.style.justifyContent = "space-evenly";
        i.style.width = "100%";
    }
    rate.style.backgroundColor = COLOR_RATE["bg"]
    frate.appendChild(frateD1)
    frate.appendChild(frateD2)
    frateD2.appendChild(frateVal)
    frateD1.style.borderTop = "1px solid black"
    frateVal.textContent = "1x"

    rate.appendChild(frate);
    musik.appendChild(titre);
    musik.appendChild(content);
    musik.appendChild(volume);
    musik.appendChild(rate);
    if (DISP_BAD_SOUND) {
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
        text2.style.color = "white"
        let text3 = declareElt("span", "err");
        text1.textContent = "Le fichier ";
        text2.textContent = source;
        text3.textContent = " n'est pas écoutable";
        errorExistSound.appendChild(text1)
        errorExistSound.appendChild(text2)
        errorExistSound.appendChild(text3)
        musik.appendChild(errorExistSound);
    }
    container.appendChild(musik);
}

function styleAdvanced() {
    let adv = document.getElementsByClassName("advanced");
    for (let i = 0; i < adv.length; i++) {
        adv[i].style.backgroundColor = COLOR_CONTROLLER["bg"];
        adv[i].style.borderRadius = "0.5em";
        adv[i].style.width = "100%";
        adv[i].style.padding = "0.5em";
        adv[i].style.display = "flex";
        adv[i].style.alignItems = "center";
        adv[i].style.justifyContent = "space-around";
        let children = adv[i].children;
        for (let j = 0; j < children.length; j++) {
            if (children[j].tagName == "BUTTON") {
                children[j].style.backgroundColor = COLOR_CONTROLLER["button"];
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
    elt.style.border = "none"
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

function init() {
    StyleMusik();
    var container = document.getElementById("ctnr");
    container.style.border = "1px solid black";
    container.style.width = "50%";
    container.style.height = "95vmin";
    container.style.overflowY = "scroll";
    container.style.overflowX = "hidden";
    container.style.margin = "auto";
    var audios = document.getElementById("audios");
    audios.style.display = "flex";
    audios.style.flexDirection = "column";
    audios.style.alignItems = "center";
    audios.style.width = "100%";

    for (let i = 0; i < document.getElementsByClassName("musik").length; i++) {
        start.push(false);
        rates.push(1);
        if (DISP_BAD_SOUND) {
            document.getElementsByClassName("musik")[i].style.visibility = "hidden";
            document.getElementsByClassName("error_sound")[i].style.visibility = "visible";
        } else {
            document.getElementsByClassName("musik")[i].style.display = "none";
        }
        let namus = document.getElementsByClassName("zik")[i].attributes["src"].value.split(".mp3")[0];
        let last = namus.split("/").length;
        names.push(namus.split("/")[last - 1]);
        document.getElementsByClassName("name")[i].textContent = names[i];

        document.getElementsByClassName("rM")[i].addEventListener("click", function(e) {
            if (rates[i] - FREQ_RATE > 0) {
                rates[i] -= FREQ_RATE;
                document.getElementsByClassName("rVal")[i].textContent = rates[i] + "x";
                document.getElementsByClassName("zik")[i].playbackRate = rates[i];
            }
        });

        document.getElementsByClassName("rP")[i].addEventListener("click", function(e) {
            if (rates[i] + FREQ_RATE < 3) {
                rates[i] += FREQ_RATE;
                document.getElementsByClassName("rVal")[i].textContent = rates[i] + "x";
                document.getElementsByClassName("zik")[i].playbackRate = rates[i];
            }
        });

        document.getElementsByClassName("zik")[i].addEventListener("canplay", function() {
            if (DISP_BAD_SOUND) {
                document.getElementsByClassName("error_sound")[i].style.visibility = "hidden";
                document.getElementsByClassName("musik")[i].style.visibility = "visible";
            }
            document.getElementsByClassName("musik")[i].style.display = "inherit";
        });

        document.getElementsByClassName("zik")[i].addEventListener("loadedmetadata", function() {
            document.getElementsByClassName("time_value")[i].textContent = sToTime(document.getElementsByClassName("zik")[i].currentTime) +
                "/" +
                sToTime(document.getElementsByClassName("zik")[i].duration);
        });


        document.getElementsByClassName("zik")[i].volume = 0.2;
        document.getElementsByClassName("getVol")[i].textContent = "20%";
        styleSvg(document.getElementsByClassName("M60")[i], "moins60");
        styleSvg(document.getElementsByClassName("M10")[i], "moins10");
        styleSvg(document.getElementsByClassName("P10")[i], "plus10");
        styleSvg(document.getElementsByClassName("P60")[i], "plus60");

        document.getElementsByClassName("M10")[i].addEventListener("click", function() {
            document.getElementsByClassName("zik")[i].currentTime -= 10;
        })

        document.getElementsByClassName("P10")[i].addEventListener("click", function() {
            document.getElementsByClassName("zik")[i].currentTime += 10;
        })

        document.getElementsByClassName("P60")[i].addEventListener("click", function() {
            document.getElementsByClassName("zik")[i].currentTime += 60;
        })

        document.getElementsByClassName("M60")[i].addEventListener("click", function() {
            document.getElementsByClassName("zik")[i].currentTime -= 60;
        })

        document.getElementsByClassName("volume")[i].style.backgroundColor = COLOR_VOLUME["bg"];
        document.getElementsByClassName("volume")[i].style.color = COLOR_VOLUME["fg"];
        document.getElementsByClassName("V1")[i].style.backgroundColor = COLOR_VOLUME["button"];
        for (let j = 1; j <= 5; j++) {
            document.getElementsByClassName("V" + j)[i].addEventListener("click", function() {
                let volume = (parseInt(this.value, 10) * 20);
                document.getElementsByClassName("getVol")[i].textContent = volume + "%";
                document.getElementsByClassName("zik")[i].volume = volume / 100;
                this.style.backgroundColor = COLOR_VOLUME["button"];
                for (let k = 1; k <= 5; k++) {
                    if (j != k)
                        document.getElementsByClassName("V" + k)[i].style.backgroundColor = COLOR_VOLUME["_button"];
                }
            });
        }

        styleSvg(document.getElementsByClassName("play")[i], "start");
        document.getElementsByClassName("play")[i].addEventListener("click", function() {
            let audio = document.getElementsByClassName("zik")[i];
            if (start[i]) {
                audio.pause();
                start[i] = false;
                styleSvg(this, "start");
            } else {
                start[i] = true;
                audio.play();
                styleSvg(this, "pause");
            }
        })
        document.getElementsByClassName("zik")[i].addEventListener("timeupdate", function() {
            var duration = this.duration;
            var current = this.currentTime;
            var percent = Math.ceil((current / duration) * 100);
            if (current == duration) {
                let elt = this;
                setTimeout(() => {
                    start[i] = false;
                    elt.currentTime = 0;
                    styleSvg(document.getElementsByClassName("play")[i], "start");
                }, 500);
            }
            document.getElementsByClassName("time")[i].style.width = percent + "%";
            current = sToTime(current)
            duration = sToTime(duration)
            document.getElementsByClassName("time_value")[i].textContent = current + "/" + duration;
            if (percent <= 10) document.getElementsByClassName("time")[i].style.backgroundColor = "purple";
            else if (percent <= 20) document.getElementsByClassName("time")[i].style.backgroundColor = "#1044AA";
            else if (percent <= 30) document.getElementsByClassName("time")[i].style.backgroundColor = "#0265FF";
            else if (percent <= 40) document.getElementsByClassName("time")[i].style.backgroundColor = "#006599";
            else if (percent <= 50) document.getElementsByClassName("time")[i].style.backgroundColor = "#669801";
            else if (percent <= 60) document.getElementsByClassName("time")[i].style.backgroundColor = "#99CC01";
            else if (percent <= 70) document.getElementsByClassName("time")[i].style.backgroundColor = "yellow";
            else if (percent <= 80) document.getElementsByClassName("time")[i].style.backgroundColor = "#FFCC11";
            else if (percent <= 90) document.getElementsByClassName("time")[i].style.backgroundColor = "#FE9900";
            else if (percent <= 100) document.getElementsByClassName("time")[i].style.backgroundColor = "#FF6501";
        })
    }
    styleAdvanced();
    StyleBarre();
}