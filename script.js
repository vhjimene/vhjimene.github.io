"use strict";

const languageButtons = document.querySelectorAll("[data-lang]");

function setLanguage(language) {
    const dictionary = translations[language];
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (Object.hasOwn(dictionary, key)) {
            element.textContent = dictionary[key];
        }
    });

    languageButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.lang === language));
    });
}

let preferredLanguage = "es";
try {
    if (localStorage.getItem("preferredLanguage") === "en") {
        preferredLanguage = "en";
    }
} catch {
    // Local previews may restrict storage.
}
setLanguage(preferredLanguage);

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
        try {
            localStorage.setItem("preferredLanguage", button.dataset.lang);
        } catch {
            // The current page can still switch language.
        }
    });
});

const menu = document.querySelector(".menu-toggle");
const navigation = document.getElementById("site-nav");

function setMenu(open) {
    navigation.classList.toggle("open", open);
    menu.setAttribute("aria-expanded", String(open));
}

document.documentElement.classList.add("menu-ready");
menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") === "false"));
navigation.addEventListener("click", (event) => {
    if (event.target.closest("a") && menu.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menu.focus();
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menu.focus();
    }
});
