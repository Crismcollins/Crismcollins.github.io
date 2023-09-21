
function ChangeLanguage(e){
    const lang = e ? e.currentTarget.className.includes("active") ? "en" : "es" : "en";
    fetch('../Scripts/language.json')
    .then((response) => response.json())
    .then((json) => {
        //CV
        if (lang === "en"){
            document.getElementById("download-cv").classList.add("d-none");
            document.getElementById("download-cv").classList.remove("d-lg-inline");
            document.getElementById("download-cv").classList.remove("d-block");
            document.getElementById("download-cv-en").classList.remove("d-none");
            document.getElementById("download-cv-en").classList.add("d-lg-inline");
            document.getElementById("download-cv-en").classList.add("d-block");
        } else if (lang === "es"){
            document.getElementById("download-cv-en").classList.add("d-none");
            document.getElementById("download-cv-en").classList.remove("d-lg-inline");
            document.getElementById("download-cv-en").classList.remove("d-block");
            document.getElementById("download-cv").classList.remove("d-none");
            document.getElementById("download-cv").classList.add("d-lg-inline");
            document.getElementById("download-cv").classList.add("d-block");
        }
        
        //Topbar
        const navs = GetElementsTexts(".nav-link")
        SetLanguageTexts(json, lang, navs, "topbar");

        //Home
        SetLanguageText(json, lang, "home", "jobtitle");

        //About
        SetLanguageText(json, lang, "about", "about-txt");
        SetLanguageText(json, lang, "about", "card-title");
        SetLanguageText(json, lang, "about", "card-p");
        SetLanguageText(json, lang, "about", "card-p2");
        SetLanguageText(json, lang, "about", "card-p3");
        SetLanguageText(json, lang, "about", "download-cv");
        SetLanguageText(json, lang, "about", "download-cv-en");

        //Skills
        SetLanguageText(json, lang, "skills", "skill1");
        SetLanguageText(json, lang, "skills", "skill2");
        SetLanguageText(json, lang, "skills", "skill3");
        SetLanguageText(json, lang, "skills", "skill4");
        SetLanguageText(json, lang, "skills", "skill5");
        SetLanguageText(json, lang, "skills", "skill6");
        SetLanguageText(json, lang, "skills", "skill7");
        SetLanguageText(json, lang, "skills", "skill8");
        SetLanguageText(json, lang, "skills", "skill9");

        //Experience
        SetLanguageText(json, lang, "exp","exp-txt");
        SetLanguageText(json, lang, "exp","exp2-txt");
        SetLanguageText(json, lang, "exp","tlted");
        SetLanguageText(json, lang, "exp","ed-txt1");
        SetLanguageText(json, lang, "exp","tlted2");
        SetLanguageText(json, lang, "exp","exp-txt2");
        SetLanguageText(json, lang, "exp","exp1-txt");
        SetLanguageText(json, lang, "exp","ind");
        SetLanguageText(json, lang, "exp","job-txt");
        SetLanguageText(json, lang, "exp","job2-txt");

        //Projects
        SetLanguageText(json, lang, "projects","prj-txt");
        SetLanguageText(json, lang, "projects","sbdesc");
        SetLanguageText(json, lang, "projects","spdesc");
        SetLanguageText(json, lang, "projects","rpsdesc");
        SetLanguageText(json, lang, "projects","mrbropodesc");
        SetLanguageText(json, lang, "projects","pfdesc");
        SetLanguageToMultipleTexts(".txt-btn-games", json[lang]["projects"].more)
    });
}

function GetElementsTexts(className){
    const elements = document.querySelectorAll(className);
    return [...elements];
}

function SetLanguageTexts(json, lang, elArray, section){
    elArray.forEach(e => {
        const key = Object.keys(json[lang][section])
                        .map(text => e.id.toLowerCase().includes(text.toLowerCase()) ? text : null)
                        .filter(Boolean);

        e.innerHTML = json[lang][section][key];
    });
}

function SetLanguageText(json, lang, section, id){
    const element = document.getElementById(id);
    element.innerHTML = json[lang][section][id]
}

function SetLanguageToMultipleTexts(className, prop){
    const elements = GetElementsTexts(className);
    elements.map(e => e.innerHTML = prop);
}

document.getElementById("switch").addEventListener("click", ChangeLanguage);
ChangeLanguage()