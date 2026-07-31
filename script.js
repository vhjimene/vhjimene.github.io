"use strict";

/* =========================================================
   CONFIGURACIÓN GENERAL
   ========================================================= */

const DEFAULT_LANGUAGE = "es";
const SUPPORTED_LANGUAGES = ["es", "en"];
const ACTIVE_NAV_COLOR = "#23364d";


/* =========================================================
   DESPLAZAMIENTO SUAVE
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
        const href = this.getAttribute("href");

        if (!href || href === "#") {
            return;
        }

        const target = document.querySelector(href);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});


/* =========================================================
   SOMBRA DEL MENÚ AL DESPLAZARSE
   ========================================================= */

const navbar = document.querySelector(".navbar");

function updateNavbarStyle() {
    if (!navbar) {
        return;
    }

    if (window.scrollY > 30) {
        navbar.style.boxShadow =
            "0 4px 14px rgba(35, 54, 77, 0.08)";
    } else {
        navbar.style.boxShadow = "none";
    }
}

window.addEventListener("scroll", updateNavbarStyle, {
    passive: true
});

updateNavbarStyle();


/* =========================================================
   ENLACE ACTIVO EN LA NAVEGACIÓN
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const activationPoint = window.scrollY + 180;

        if (activationPoint >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        link.style.color = "";

        if (
            href &&
            href.startsWith("#") &&
            href.slice(1) === currentSection
        ) {
            link.style.color = ACTIVE_NAV_COLOR;
        }
    });
}

window.addEventListener("scroll", updateActiveNavigation, {
    passive: true
});

updateActiveNavigation();


/* =========================================================
   TRADUCCIÓN DEL SITIO
   ========================================================= */

/*
El archivo translations.js debe definir una variable global
con esta estructura:

const translations = {
    es: {
        "nav-home": "Inicio"
    },
    en: {
        "nav-home": "Home"
    }
};
*/

function getTranslationDictionary(language) {
    if (
        typeof translations === "undefined" ||
        !translations ||
        !translations[language]
    ) {
        return null;
    }

    return translations[language];
}


function translateElement(element, dictionary) {
    const key = element.dataset.i18n;

    if (!key || !Object.prototype.hasOwnProperty.call(dictionary, key)) {
        return;
    }

    element.textContent = dictionary[key];
}


function translateAttribute(element, dictionary, dataAttribute, attribute) {
    const key = element.dataset[dataAttribute];

    if (!key || !Object.prototype.hasOwnProperty.call(dictionary, key)) {
        return;
    }

    element.setAttribute(attribute, dictionary[key]);
}


function setLanguage(language) {
    const selectedLanguage = SUPPORTED_LANGUAGES.includes(language)
        ? language
        : DEFAULT_LANGUAGE;

    const dictionary = getTranslationDictionary(selectedLanguage);

    if (!dictionary) {
        console.warn(
            `No se encontraron traducciones para el idioma: ${selectedLanguage}`
        );

        return;
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        translateElement(element, dictionary);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        translateAttribute(
            element,
            dictionary,
            "i18nPlaceholder",
            "placeholder"
        );
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
        translateAttribute(
            element,
            dictionary,
            "i18nTitle",
            "title"
        );
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        translateAttribute(
            element,
            dictionary,
            "i18nAriaLabel",
            "aria-label"
        );
    });

    document.documentElement.lang = selectedLanguage;

    document.querySelectorAll(".lang-btn").forEach((button) => {
        const isActive = button.dataset.lang === selectedLanguage;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem("preferredLanguage", selectedLanguage);
}


function initializeLanguageSelector() {
    const languageButtons = document.querySelectorAll(".lang-btn");

    if (!languageButtons.length) {
        return;
    }

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const language = button.dataset.lang;

            if (language) {
                setLanguage(language);
            }
        });
    });

    const savedLanguage = localStorage.getItem("preferredLanguage");

    setLanguage(
        SUPPORTED_LANGUAGES.includes(savedLanguage)
            ? savedLanguage
            : DEFAULT_LANGUAGE
    );
}


/* =========================================================
   APARICIÓN SUAVE DE LOS BLOQUES
   ========================================================= */

function initializeRevealAnimation() {
    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        return;
    }

    const elements = document.querySelectorAll(
        [
            ".research-card",
            ".skill-category",
            ".publication-item",
            ".experience-item",
            ".profile-main",
            ".credentials",
            ".contact-link"
        ].join(", ")
    );

    elements.forEach((element) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(12px)";
        element.style.transition =
            "opacity 0.45s ease, transform 0.45s ease";
    });

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                currentObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });
}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initializeLanguageSelector();
    initializeRevealAnimation();
});
