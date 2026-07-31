"use strict";

const translations = {

    /* =====================================================
       ESPAÑOL
       ===================================================== */

    es: {

        /* Navegación y accesibilidad */

        "logo-aria": "Ir al inicio",
        "language-selector-aria": "Selector de idioma",

        "nav-home": "Inicio",
        "nav-profile": "Perfil",
        "nav-publications": "Publicaciones",
        "nav-career": "Trayectoria",
        "nav-teaching": "Docencia",
        "nav-public-service": "Servicio público",
        "nav-contact": "Contacto",

        "download-cv": "CV",


        /* Presentación */

        "hero-degree": "Doctor en Psicología",

        "hero-role":
            "Investigador en Psicología Social, Política y Comunitaria",

        "hero-affiliation":
            "Universidad Santo Tomás, Chile",

        "hero-lines":
            "Cambio social · Acción colectiva · Participación política · Bienestar · Métodos mixtos",

        /* Perfil académico */

        "profile-title":
            "Perfil académico",

        "profile-text-1":
            "Mi investigación analiza cómo las condiciones sociales, especialmente la inseguridad, la violencia y la desigualdad, influyen en las emociones, las cogniciones y los procesos comunitarios que explican el bienestar, la participación política, la acción colectiva y la cohesión social.",

        "profile-text-2":
            "Combino la psicología social, política y comunitaria con métodos cuantitativos avanzados para producir evidencia reproducible que contribuya al desarrollo teórico y al diseño de políticas públicas basadas en evidencia.",


        /* Líneas de investigación */

        "research-lines-title":
            "Líneas de investigación",

        "research-line-1-title":
            "Cambio social",

        "research-line-1-text":
            "Creencias, emociones y procesos asociados con las transformaciones sociales.",

        "research-line-2-title":
            "Acción colectiva",

        "research-line-2-text":
            "Identidad, eficacia, emociones y participación colectiva.",

        "research-line-3-title":
            "Participación política",

        "research-line-3-text":
            "Activismo, participación electoral y compromiso político.",

        "research-line-4-title":
            "Bienestar",

        "research-line-4-text":
            "Condiciones sociales y comunitarias vinculadas con el bienestar psicológico y social.",

        "research-line-5-title":
            "Métodos mixtos",

        "research-line-5-text":
            "Integración de métodos cuantitativos y cualitativos.",


        /* Indicadores académicos */

        "indicators-title":
            "Indicadores académicos",

        "indicator-publications":
            "Publicaciones científicas",

        "indicator-fondecyt":
            "Proyectos FONDECYT Regular",

        "indicator-scholarships":
            "Becas de posgrado",

        "indicator-countries-number":
            "4 países",

        "indicator-countries":
            "Estudios en América Latina",

        "indicator-years-number":
            "+10 años",

        "indicator-years":
            "Investigación científica y docencia universitaria",

        "indicator-public-service-title":
            "Servicio público",

        "indicator-public-service":
            "Experiencia en gestión regional y territorial",


        /* Publicaciones */

        "publications-title":
            "Publicaciones destacadas",

        "publications-intro":
            "Una selección de artículos que reflejan las principales líneas de investigación desarrolladas durante los últimos años.",

        "publications-scholar-prefix":
            "Para consultar otras publicaciones, véase",

        "publication-area-1":
            "Cambio social, participación política y acción colectiva",

        "publication-1-description":
            "Estudio longitudinal sobre el papel mediador de las creencias de cambio social en la relación entre la acción colectiva y la participación electoral.",

        "publication-1-keywords":
            "Psicología política · Acción colectiva · Cambio social · Estudios longitudinales",

        "view-publication":
            "Ver publicación →",

        "publication-2-status":
            "Political Psychology · En revisión (R&R)",

        "publication-2-description":
            "Estudio multinacional realizado en Chile, Colombia, Ecuador y Perú que examina la acción colectiva mediante procesos emocionales, identitarios y de eficacia participativa.",

        "publication-2-keywords":
            "Psicología política · Comparación internacional · Modelos de ecuaciones estructurales",

        "publication-area-2":
            "Psicología comunitaria y procesos sociales",

        "publication-3-description":
            "Investigación cualitativa sobre el papel de las narrativas históricas en el compromiso colectivo y la participación política de jóvenes durante las movilizaciones iniciadas en Chile en 2019.",

        "publication-3-keywords":
            "Psicología comunitaria · Narrativas históricas · Acción colectiva",

        "publication-4-status":
            "Manuscrito en preparación",

        "publication-4-description":
            "Estudio sobre el papel del sentido de comunidad como mecanismo de integración, bienestar y cohesión social en población migrante residente en Chile.",

        "publication-4-link":
            "Materiales reproducibles en Open Science Framework →",


        /* Trayectoria académica */

        "career-title":
            "Trayectoria académica",

        "career-intro":
            "Mi trabajo se sitúa en la intersección de la psicología social, política y comunitaria, integrando investigación, docencia y experiencia en políticas públicas para comprender cómo los contextos sociales influyen en las respuestas psicológicas individuales y comunitarias.",

        "education-title":
            "Formación",

        "education-phd":
            "Doctor en Psicología",

        "education-master":
            "Magíster en Ciencias Sociales Aplicadas",

        "education-psychologist":
            "Psicólogo",

        "affiliation-title":
            "Afiliación académica",

        "affiliation-school":
            "Facultad de Ciencias Sociales · Escuela de Psicología",


        /* Financiamiento */

        "funding-title":
            "Financiamiento y experiencia en proyectos",

        "scholarships-title":
            "Becas competitivas",

        "scholarship-1-title":
            "Beca de Doctorado Nacional",

        "scholarship-1-institution":
            "Agencia Nacional de Investigación y Desarrollo (ANID)",

        "scholarship-2-title":
            "Beca Doctoral",

        "scholarship-2-institution":
            "Centro de Estudios de Conflicto y Cohesión Social (COES)",

        "scholarship-3-title":
            "Beca de Posgrado",

        "fondecyt-1-role":
            "Investigador doctoral",

        "fondecyt-1-description":
            "Participación en el proyecto Consecuencias psicológicas de la participación en movimientos sociales, Pontificia Universidad Católica de Chile.",

        "fondecyt-2-role":
            "Asistente de investigación",

        "fondecyt-2-description":
            "Participación en un proyecto sobre inclusión intercultural en establecimientos escolares, Universidad de Tarapacá y Universidad de Chile.",


        /* Docencia */

        "teaching-resources-title":
            "Docencia y recursos",

        "teaching-areas-title":
            "Áreas docentes",

        "teaching-area-1":
            "Psicología social y comunitaria",

        "teaching-area-2":
            "Metodología de la investigación",

        "teaching-area-3":
            "Análisis de datos cuantitativos y cualitativos",

        "teaching-area-4":
            "Dirección y supervisión de proyectos de investigación de pregrado",

        "teaching-area-5":
            "Evaluación de políticas públicas",

        "university-experience-title":
            "Experiencia universitaria",

        "university-1":
            "Universidad de Tarapacá, 2013–2017",

        "university-2":
            "Universidad Santo Tomás, 2013–2017 y 2024–2026",

        "university-3":
            "Universidad de Santiago de Chile, 2023",

        "academic-resources-title":
            "Recursos académicos",

        "resource-1":
            "Libro electrónico de metodología de la investigación",

        "resource-2":
            "Materiales reproducibles",

        "resource-3":
            "Repositorios de código",


        /* Servicio público */

        "public-service-title":
            "Experiencia en servicio público",

        "public-service-role-1":
            "Jefe de Gabinete",

        "public-service-institution-1":
            "Secretaría Regional Ministerial de Gobierno de Arica y Parinacota",

        "public-service-description-1":
            "Coordinación de comunicación estratégica, fondos de medios de comunicación social, Fondo de Fortalecimiento de Organizaciones de Interés Público y División de Organizaciones Sociales.",

        "public-service-role-2":
            "Jefe de Gabinete",

        "public-service-institution-2":
            "Delegación Presidencial Regional de Arica y Parinacota",

        "public-service-description-2":
            "Coordinación interinstitucional e interministerial para la implementación y el seguimiento de políticas públicas a nivel regional.",

        "public-service-role-3":
            "Coordinador comunal del Programa de Salud Mental",

        "public-service-institution-3":
            "Municipalidad de Litueche · Dirección de Salud Municipal",

        "public-service-description-3":
            "Coordinación territorial e implementación comunal del Programa de Salud Mental.",


        /* Contacto y pie de página */

        "contact-title":
            "Contacto",

        "contact-affiliation":
            "Escuela de Psicología, Universidad Santo Tomás.",

        "footer-text":
            "Portafolio académico."
    },


    /* =====================================================
       ENGLISH
       ===================================================== */

    en: {

        /* Navigation and accessibility */

        "logo-aria": "Go to homepage",
        "language-selector-aria": "Language selector",

        "nav-home": "Home",
        "nav-profile": "Profile",
        "nav-publications": "Publications",
        "nav-career": "Academic career",
        "nav-teaching": "Teaching",
        "nav-public-service": "Public service",
        "nav-contact": "Contact",

        "download-cv": "CV",


        /* Hero section */

        "hero-degree":
            "PhD in Psychology",

        "hero-role":
            "Researcher in Social, Political, and Community Psychology",

        "hero-affiliation":
            "Universidad Santo Tomás, Chile",

        "hero-lines":
            "Social change · Collective action · Political participation · Well-being · Mixed methods",

        /* Academic profile */

        "profile-title":
            "Academic profile",

        "profile-text-1":
            "My research examines how social conditions, particularly insecurity, violence, and inequality, influence the emotions, cognitions, and community processes underlying well-being, political participation, collective action, and social cohesion.",

        "profile-text-2":
            "I combine social, political, and community psychology with advanced quantitative methods to produce reproducible evidence that contributes to theoretical development and evidence-based public policy design.",


        /* Research areas */

        "research-lines-title":
            "Research areas",

        "research-line-1-title":
            "Social change",

        "research-line-1-text":
            "Beliefs, emotions, and processes associated with social transformations.",

        "research-line-2-title":
            "Collective action",

        "research-line-2-text":
            "Identity, efficacy, emotions, and collective participation.",

        "research-line-3-title":
            "Political participation",

        "research-line-3-text":
            "Activism, electoral participation, and political engagement.",

        "research-line-4-title":
            "Well-being",

        "research-line-4-text":
            "Social and community conditions associated with psychological and social well-being.",

        "research-line-5-title":
            "Mixed methods",

        "research-line-5-text":
            "Integration of quantitative and qualitative methods.",


        /* Academic indicators */

        "indicators-title":
            "Academic indicators",

        "indicator-publications":
            "Scientific publications",

        "indicator-fondecyt":
            "FONDECYT Regular projects",

        "indicator-scholarships":
            "Graduate scholarships",

        "indicator-countries-number":
            "4 countries",

        "indicator-countries":
            "Studies conducted in Latin America",

        "indicator-years-number":
            "10+ years",

        "indicator-years":
            "Scientific research and university teaching",

        "indicator-public-service-title":
            "Public service",

        "indicator-public-service":
            "Experience in regional and territorial management",


        /* Publications */

        "publications-title":
            "Selected publications",

        "publications-intro":
            "A selection of articles reflecting the main research areas developed over recent years.",

        "publications-scholar-prefix":
            "For additional publications, see",

        "publication-area-1":
            "Social change, political participation, and collective action",

        "publication-1-description":
            "A longitudinal study examining the mediating role of social change beliefs in the relationship between collective action and electoral participation.",

        "publication-1-keywords":
            "Political psychology · Collective action · Social change · Longitudinal studies",

        "view-publication":
            "View publication →",

        "publication-2-status":
            "Political Psychology · Revise and resubmit (R&R)",

        "publication-2-description":
            "A multinational study conducted in Chile, Colombia, Ecuador, and Peru examining collective action through emotional, identity-based, and participative efficacy processes.",

        "publication-2-keywords":
            "Political psychology · Cross-national comparison · Structural equation modeling",

        "publication-area-2":
            "Community psychology and social processes",

        "publication-3-description":
            "A qualitative study examining the role of historical narratives in young people's collective engagement and political participation during the protests that began in Chile in 2019.",

        "publication-3-keywords":
            "Community psychology · Historical narratives · Collective action",

        "publication-4-status":
            "Manuscript in preparation",

        "publication-4-description":
            "A study examining sense of community as a mechanism of integration, well-being, and social cohesion among migrant populations living in Chile.",

        "publication-4-link":
            "Reproducible materials on the Open Science Framework →",


        /* Academic career */

        "career-title":
            "Academic career",

        "career-intro":
            "My work lies at the intersection of social, political, and community psychology, integrating research, teaching, and public policy experience to understand how social contexts influence individual and community psychological responses.",

        "education-title":
            "Education",

        "education-phd":
            "PhD in Psychology",

        "education-master":
            "Master's Degree in Applied Social Sciences",

        "education-psychologist":
            "Psychologist",

        "affiliation-title":
            "Academic affiliation",

        "affiliation-school":
            "Faculty of Social Sciences · School of Psychology",


        /* Funding */

        "funding-title":
            "Funding and project experience",

        "scholarships-title":
            "Competitive scholarships",

        "scholarship-1-title":
            "National Doctoral Scholarship",

        "scholarship-1-institution":
            "National Agency for Research and Development (ANID)",

        "scholarship-2-title":
            "Doctoral Scholarship",

        "scholarship-2-institution":
            "Centre for Social Conflict and Cohesion Studies (COES)",

        "scholarship-3-title":
            "Graduate Scholarship",

        "fondecyt-1-role":
            "Doctoral researcher",

        "fondecyt-1-description":
            "Participation in the project Psychological consequences of participation in social movements, Pontificia Universidad Católica de Chile.",

        "fondecyt-2-role":
            "Research assistant",

        "fondecyt-2-description":
            "Participation in a project on intercultural inclusion in schools, Universidad de Tarapacá and Universidad de Chile.",


        /* Teaching */

        "teaching-resources-title":
            "Teaching and resources",

        "teaching-areas-title":
            "Teaching areas",

        "teaching-area-1":
            "Social and community psychology",

        "teaching-area-2":
            "Research methodology",

        "teaching-area-3":
            "Quantitative and qualitative data analysis",

        "teaching-area-4":
            "Supervision of undergraduate research projects",

        "teaching-area-5":
            "Public policy evaluation",

        "university-experience-title":
            "University teaching experience",

        "university-1":
            "Universidad de Tarapacá, 2013–2017",

        "university-2":
            "Universidad Santo Tomás, 2013–2017 and 2024–2026",

        "university-3":
            "Universidad de Santiago de Chile, 2023",

        "academic-resources-title":
            "Academic resources",

        "resource-1":
            "Digital textbook on research methodology",

        "resource-2":
            "Reproducible research materials",

        "resource-3":
            "Code repositories",


        /* Public service */

        "public-service-title":
            "Public service experience",

        "public-service-role-1":
            "Chief of Staff",

        "public-service-institution-1":
            "Regional Secretariat of the Ministry General Secretariat of Government, Arica and Parinacota",

        "public-service-description-1":
            "Coordination of strategic communication, media funding programs, the Fund for Strengthening Public Interest Organizations, and the Social Organizations Division.",

        "public-service-role-2":
            "Chief of Staff",

        "public-service-institution-2":
            "Regional Presidential Delegation of Arica and Parinacota",

        "public-service-description-2":
            "Interinstitutional and interministerial coordination for the implementation and monitoring of public policies at the regional level.",

        "public-service-role-3":
            "Municipal Mental Health Program Coordinator",

        "public-service-institution-3":
            "Municipality of Litueche · Municipal Health Department",

        "public-service-description-3":
            "Territorial coordination and municipal implementation of the Mental Health Program.",


        /* Contact and footer */

        "contact-title":
            "Contact",

        "contact-affiliation":
            "School of Psychology, Universidad Santo Tomás.",

        "footer-text":
            "Academic portfolio."
    }
};
