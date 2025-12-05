import { Locale } from '../i18n';

type BranchenLink = { pageId: string; label: string };

type BranchenReferenzenContent = {
  heroTitle: string;
  heroIntro: string;
  heroIntro2: string;
  ctaPrimary: string;
  ctaSecondary: string;
  branchesTitle: string;
  branchesLead: string;
  branches: Array<{
    title: string;
    body: string;
    links: BranchenLink[];
  }>;
  referencesTitle: string;
  referencesIntro: string;
  references: Array<{
    title: string;
    body: string;
    details: string[];
  }>;
  uspTitle: string;
  uspItems: string[];
  factsTitle: string;
  factsItems: Array<{ value: string; label: string }>;
  factsNote: string;
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  ctaEndTitle: string;
  ctaEndLead: string;
  ctaEndButton: string;
};

const de: BranchenReferenzenContent = {
  heroTitle: 'Branchen & Referenzen im Rhein-Main-Gebiet',
  heroIntro:
    'smaRTtechnik Lebek & Stawczyk GbR unterstützt Stadtwerke, Netzbetreiber, Wohnungsbaugesellschaften, Unternehmen und IT-Dienstleister bei der Umsetzung von Glasfaser- und Netzwerkprojekten im Raum Frankfurt / Rhein-Main.',
  heroIntro2:
    'Auf dieser Seite erhalten Sie einen Überblick darüber, für welche Branchen wir arbeiten und welche Arten von Projekten wir bereits erfolgreich umgesetzt haben.',
  ctaPrimary: 'Projekt oder Zusammenarbeit anfragen',
  ctaSecondary: 'Zu unseren Leistungen',
  branchesTitle: 'Für wen wir arbeiten',
  branchesLead:
    'Unsere Glasfaser- und Netzwerktechnik-Lösungen sind auf professionelle Anwender ausgerichtet. Wir arbeiten überwiegend im B2B-Umfeld und unterstützen folgende Branchen:',
  branches: [
    {
      title: 'Stadtwerke & Netzbetreiber',
      body:
        'Unterstützung bei FTTH- und FTTB-Ausbau, Spleißarbeiten, Einblasen, Messtechnik & Dokumentation – als verlässlicher Partner im Hintergrund.',
      links: [
        { pageId: 'glasfaser-ausbau', label: 'Glasfaser-Ausbau' },
        { pageId: 'messtechnik-fehlersuche', label: 'Messtechnik & Fehlersuche' },
        { pageId: 'service-wartung', label: 'Service & Wartung' }
      ]
    },
    {
      title: 'Wohnungsbau & Immobilienbetreiber',
      body:
        'Glasfaser-Hausanschlüsse, Steigleitungen, Gebäudeverteilungen und Netzwerkschränke für Mehrfamilienhäuser, Quartiere und gemischt genutzte Objekte.',
      links: [
        { pageId: 'glasfaser-ausbau', label: 'Glasfaser-Ausbau' },
        { pageId: 'netzwerktechnik-wlan', label: 'Netzwerktechnik & WLAN' }
      ]
    },
    {
      title: 'Unternehmen & Industrie',
      body:
        'Netzwerktechnik, WLAN, Glasfaseranbindungen und Messtechnik für Büros, Hallen, Produktion, Rechenzentren und verteilte Standorte.',
      links: [
        { pageId: 'netzwerktechnik-wlan', label: 'Netzwerktechnik & WLAN' },
        { pageId: 'glasfaser-ausbau', label: 'Glasfaser-Ausbau' },
        { pageId: 'service-wartung', label: 'Service & Wartung' }
      ]
    },
    {
      title: 'IT-Dienstleister & Systemhäuser',
      body:
        'Wir agieren als spezialisierter Partner für Glasfaser, Verkabelung, Messtechnik und physische Infrastruktur – im Hintergrund, unter Ihrem Label oder offen kommuniziert.',
      links: [
        { pageId: 'glasfaser-ausbau', label: 'Glasfaser-Ausbau' },
        { pageId: 'messtechnik-fehlersuche', label: 'Messtechnik & Fehlersuche' }
      ]
    },
    {
      title: 'Logistik, Handel & Dienstleistung',
      body:
        'Stabile LAN- und WLAN-Infrastruktur für Lager, Filialen und Dienstleistungsstandorte – inklusive Erweiterungen und Service.',
      links: [
        { pageId: 'netzwerktechnik-wlan', label: 'Netzwerktechnik & WLAN' },
        { pageId: 'service-wartung', label: 'Service & Wartung' }
      ]
    },
    {
      title: 'Kommunale Einrichtungen & Bildung',
      body:
        'Infrastruktur für Verwaltungen, Schulen und andere öffentliche Einrichtungen – in enger Abstimmung mit IT- und Gebäudemanagement.',
      links: [
        { pageId: 'netzwerktechnik-wlan', label: 'Netzwerktechnik & WLAN' },
        { pageId: 'glasfaser-ausbau', label: 'Glasfaser-Ausbau' }
      ]
    }
  ],
  referencesTitle: 'Ausgewählte Referenzprojekte',
  referencesIntro:
    'Viele unserer Projekte unterliegen Vertraulichkeitsvereinbarungen. Daher nennen wir hier überwiegend Branche, Art des Projekts und Region statt konkreter Namen. Auf Anfrage stellen wir Ihnen gerne passende Referenzbeispiele im persönlichen Gespräch vor.',
  references: [
    {
      title: 'FTTB-/FTTH-Ausbau für Wohnquartier im Raum Frankfurt',
      body:
        'Planung, Verlegung, Spleißen und Abnahmemessungen für ein mehrstufiges Wohnquartier mit mehreren Gebäuden – inklusive Hausanschlüsse, Steigleitungen und zentrale Netzwerkschränke.',
      details: [
        'Branche: Wohnungsbau / Immobilien',
        'Leistungen: Glasfaser-Ausbau, Spleißen, Messtechnik, Dokumentation',
        'Region: Rhein-Main-Gebiet'
      ]
    },
    {
      title: 'Netzwerktechnik & WLAN für Büro- und Verwaltungsstandort',
      body:
        'Aufbau einer strukturierten Netzwerkverkabelung, Einrichtung von Netzwerkschränken sowie Planung und Umsetzung eines flächendeckenden WLANs für Mitarbeiter und Gäste.',
      details: [
        'Branche: Unternehmensstandort / Verwaltung',
        'Leistungen: Netzwerktechnik & WLAN, Service & Wartung',
        'Region: Frankfurt am Main'
      ]
    },
    {
      title: 'OTDR-Messkampagne für regionalen Netzbetreiber',
      body:
        'Durchführung einer umfassenden Messkampagne zur Überprüfung und Dokumentation von bestehenden Glasfaserstrecken vor einem Betreiberwechsel.',
      details: [
        'Branche: Netzbetreiber / Stadtwerk',
        'Leistungen: Messtechnik & Fehlersuche, Dokumentation',
        'Region: Rhein-Main-Gebiet'
      ]
    },
    {
      title: 'Service & Wartung für Produktionsstandort',
      body:
        'Laufende Betreuung von Glasfaser- und Netzwerkinfrastruktur in einer industriellen Umgebung – inklusive regelmäßiger Prüfungen, Dokumentationspflege und Störungsdienst.',
      details: [
        'Branche: Industrie / Produktion',
        'Leistungen: Service & Wartung, Messtechnik',
        'Region: Raum Frankfurt'
      ]
    }
  ],
  uspTitle: 'Was unsere Kunden an uns schätzen',
  uspItems: [
    'Praktische Erfahrung: Techniker, die Baustellen, Rechenzentren und reale Betriebsumgebungen kennen.',
    'Zuverlässigkeit: Termine, Absprachen und Dokumentation werden ernst genommen – nicht „nebenbei“.',
    'Transparente Kommunikation: Klare Aussagen zu Machbarem, Risiken, Terminen und Kosten.',
    'Regionale Nähe: Kurze Wege und schnelle Reaktionszeiten im Rhein-Main-Gebiet.',
    'Langfristige Zusammenarbeit: Viele Projekte sind Teil von mehrjährigen Partnerschaften.'
  ],
  factsTitle: 'Zahlen & Fakten aus unseren Projekten',
  factsItems: [
    { value: '200+', label: 'abgeschlossene Glasfaser- & Netzwerkprojekte im Rhein-Main-Gebiet' },
    { value: '10+', label: 'Jahre Erfahrung im Glasfaserbereich unserer Techniker' },
    { value: '24/7', label: 'Störungsbereitschaft nach Vereinbarung für Servicekunden' }
  ],
  factsNote:
    'Diese Erfahrung bringen wir in jedes neue Projekt ein – unabhängig davon, ob Sie Stadtwerk, Wohnungsbaugesellschaft, Unternehmen oder IT-Dienstleister sind.',
  faq: {
    title: 'FAQ zu Branchen & Referenzen',
    items: [
      {
        question: 'In welchen Regionen sind Ihre Referenzen angesiedelt?',
        answer:
          'Der Großteil unserer Projekte liegt im Rhein-Main-Gebiet mit Schwerpunkt Frankfurt am Main und Umgebung – darunter Offenbach, Hanau, Rodenbach und angrenzende Landkreise.'
      },
      {
        question: 'Arbeiten Sie deutschlandweit oder nur regional?',
        answer:
          'Unser Fokus liegt klar auf der Region Frankfurt / Rhein-Main. Für ausgewählte Projekte und Kunden unterstützen wir nach Absprache jedoch auch außerhalb der Region.'
      },
      {
        question: 'Können Sie konkrete Referenzen nennen?',
        answer:
          'Viele unserer Projekte unterliegen Vertraulichkeit. Im persönlichen Gespräch können wir jedoch branchenspezifische Beispiele nennen und – wenn möglich – konkrete Referenzen benennen.'
      },
      {
        question: 'Arbeiten Sie nur für große Kunden oder auch für kleinere Unternehmen?',
        answer:
          'Wir betreuen sowohl Stadtwerke und große Betreiber als auch kleinere und mittelständische Unternehmen, Verwaltungen, Schulen und Dienstleister.'
      },
      {
        question: 'Wie läuft eine erste Zusammenarbeit typischerweise ab?',
        answer:
          'In einem unverbindlichen Erstgespräch klären wir Ihre Anforderungen, zeigen passende Lösungswege auf und definieren das erste Projekt – vom Pilotprojekt bis zur langfristigen Zusammenarbeit.'
      }
    ]
  },
  ctaEndTitle: 'Passt Ihr Projekt in unseren Fokus? Sehr wahrscheinlich.',
  ctaEndLead:
    'Ob Glasfaser-Ausbau, Netzwerktechnik, Messtechnik oder laufender Service – wir unterstützen Unternehmen und Betreiber im Raum Frankfurt / Rhein-Main mit praxisnahen Lösungen.',
  ctaEndButton: 'Unverbindliches Gespräch vereinbaren'
};

const en: BranchenReferenzenContent = {
  
  heroTitle: 'Industries & References in the Frankfurt / Rhein-Main Region',
  heroIntro:
    'smaRTtechnik Lebek & Stawczyk GbR supports utilities, network operators, housing companies, enterprises and IT service providers in delivering fiber optic and network projects across the Frankfurt / Rhein-Main area.',
  heroIntro2:
    'On this page you will find an overview of the industries we serve and the types of projects we have successfully completed.',
  ctaPrimary: 'Request a project or partnership',
  ctaSecondary: 'View our services',

  branchesTitle: 'Who We Work For',
  branchesLead:
    'Our fiber optic and network engineering services are designed for professional B2B customers. We primarily support the following industries:',
  branches: [
    {
      title: 'Utilities & Network Operators',
      body:
        'Support with FTTH and FTTB rollout, fiber splicing, cable blowing, OTDR testing and documentation – as a reliable technical partner.',
      links: [
        { pageId: 'glasfaser-ausbau', label: 'Fiber Deployment' },
        { pageId: 'messtechnik-fehlersuche', label: 'Measurement & Diagnostics' },
        { pageId: 'service-wartung', label: 'Service & Maintenance' }
      ]
    },
    {
      title: 'Housing & Property Management',
      body:
        'Fiber building connections, riser cabling, building distribution points and network cabinets for multi-dwelling units, neighborhoods and mixed-use properties.',
      links: [
        { pageId: 'glasfaser-ausbau', label: 'Fiber Deployment' },
        { pageId: 'netzwerktechnik-wlan', label: 'Network Cabling & Wi-Fi' }
      ]
    },
    {
      title: 'Companies & Industry',
      body:
        'LAN networks, enterprise Wi-Fi, fiber connections and measurement services for offices, warehouses, production facilities, data centers and distributed locations.',
      links: [
        { pageId: 'netzwerktechnik-wlan', label: 'Network Cabling & Wi-Fi' },
        { pageId: 'glasfaser-ausbau', label: 'Fiber Deployment' },
        { pageId: 'service-wartung', label: 'Service & Maintenance' }
      ]
    },
    {
      title: 'IT Service Providers & System Integrators',
      body:
        'We act as a specialized partner for fiber optics, structured cabling, measurement services and physical infrastructure – discreetly as a subcontractor or openly as a technical partner.',
      links: [
        { pageId: 'glasfaser-ausbau', label: 'Fiber Deployment' },
        { pageId: 'messtechnik-fehlersuche', label: 'Measurement & Diagnostics' }
      ]
    },
    {
      title: 'Logistics, Retail & Service Locations',
      body:
        'Reliable LAN and Wi-Fi networks for warehouses, retail locations and service facilities – including expansion and ongoing support.',
      links: [
        { pageId: 'netzwerktechnik-wlan', label: 'Network Cabling & Wi-Fi' },
        { pageId: 'service-wartung', label: 'Service & Maintenance' }
      ]
    },
    {
      title: 'Public Sector & Education',
      body:
        'Network infrastructure for administrations, schools and public institutions – in close coordination with IT and building management teams.',
      links: [
        { pageId: 'netzwerktechnik-wlan', label: 'Network Cabling & Wi-Fi' },
        { pageId: 'glasfaser-ausbau', label: 'Fiber Deployment' }
      ]
    }
  ],

  referencesTitle: 'Selected Reference Projects',
  referencesIntro:
    'Many of our projects are subject to confidentiality. Therefore, we mainly list industries, project types and regions instead of specific names. Upon request, we can provide tailored reference examples in a personal meeting.',
  references: [
    {
      title: 'FTTB / FTTH Deployment for Residential Complex near Frankfurt',
      body:
        'Planning, installation, splicing and acceptance testing for a multi-building residential development – including building connections, risers and central network cabinets.',
      details: [
        'Industry: Housing / Property Development',
        'Services: Fiber deployment, splicing, measurements, documentation',
        'Region: Frankfurt Rhein-Main'
      ]
    },
    {
      title: 'Network Cabling & Wi-Fi for Office and Administration Facility',
      body:
        'Deployment of structured cabling, installation of network cabinets and planning and implementation of full-coverage Wi-Fi for staff and guests.',
      details: [
        'Industry: Corporate / Administration',
        'Services: Network cabling & Wi-Fi, service & maintenance',
        'Region: Frankfurt am Main'
      ]
    },
    {
      title: 'OTDR Measurement Campaign for Regional Network Operator',
      body:
        'Comprehensive OTDR testing and documentation of existing fiber routes prior to an operator handover.',
      details: [
        'Industry: Network Operator / Utility',
        'Services: Measurement & diagnostics, documentation',
        'Region: Frankfurt Rhein-Main'
      ]
    },
    {
      title: 'Service & Maintenance for Industrial Production Site',
      body:
        'Continuous support for fiber and network infrastructure in an industrial environment – including regular inspections, documentation updates and fault resolution.',
      details: [
        'Industry: Industry / Manufacturing',
        'Services: Service & maintenance, measurement services',
        'Region: Greater Frankfurt Area'
      ]
    }
  ],

  uspTitle: 'Why Clients Value Working with Us',
  uspItems: [
    'Hands-on experience: technicians who know construction sites, data centers and real operational environments.',
    'Reliability: deadlines, agreements and documentation are taken seriously – not treated as optional.',
    'Transparent communication: clear statements about feasibility, risks, timelines and costs.',
    'Regional proximity: short travel distances and fast response times within the Rhein-Main region.',
    'Long-term cooperation: many projects evolve into multi-year partnerships.'
  ],

  factsTitle: 'Numbers & Facts from Our Projects',
  factsItems: [
    { value: '200+', label: 'completed fiber & network projects in the Rhein-Main region' },
    { value: '10+', label: 'years of fiber optic experience among our technicians' },
    { value: '24/7', label: 'on-call emergency availability upon agreement' }
  ],
  factsNote:
    'We bring this experience into every project — whether you are a utility provider, housing company, IT service provider or enterprise.',

  faq: {
    title: 'FAQ – Industries & References',
    items: [
      {
        question: 'In which regions are your reference projects located?',
        answer:
          'Most of our projects are located in the Frankfurt / Rhein-Main region, including Offenbach, Hanau, Rodenbach and surrounding districts.'
      },
      {
        question: 'Do you operate only locally or throughout Germany?',
        answer:
          'Our main focus is the Frankfurt / Rhein-Main region. For selected projects and clients, we also work outside the region by arrangement.'
      },
      {
        question: 'Can you provide specific references?',
        answer:
          'Many projects are confidential. In a personal call, we can provide industry-specific examples and – where possible – concrete references.'
      },
      {
        question: 'Do you work with small businesses as well?',
        answer:
          'Yes. We support large operators as well as small and medium-sized businesses, public institutions, schools and service providers.'
      },
      {
        question: 'How does the first step of collaboration typically look?',
        answer:
          'In a non-binding initial call, we clarify your requirements, show suitable solutions and define the first project — from a pilot phase to long-term cooperation.'
      }
    ]
  },

  ctaEndTitle: 'Does Your Project Fit Our Focus? Very Likely.',
  ctaEndLead:
    'Fiber deployment, LAN networks, Wi-Fi, measurements, diagnostics and service — we support businesses and operators across Frankfurt / Rhein-Main with practical, reliable solutions.',
  ctaEndButton: 'Schedule a non-binding consultation'
};

const pl: BranchenReferenzenContent = {

  heroTitle: 'Branże i realizacje w regionie Frankfurt / Rhein-Main',
  heroIntro:
    'smaRTtechnik Lebek & Stawczyk GbR wspiera zakłady komunalne, operatorów, deweloperów, firmy oraz dostawców IT w realizacji projektów światłowodowych i sieciowych w regionie Frankfurt / Rhein-Main.',
  heroIntro2:
    'Na tej stronie znajdziesz przegląd branż, dla których pracujemy, oraz przykłady projektów, które z powodzeniem zrealizowaliśmy.',
  ctaPrimary: 'Zapytaj o projekt lub współpracę',
  ctaSecondary: 'Zobacz nasze usługi',

  branchesTitle: 'Dla kogo pracujemy',
  branchesLead:
    'Nasze rozwiązania światłowodowe i sieciowe są skierowane do profesjonalnych odbiorców B2B. Wspieramy przede wszystkim następujące branże:',
  branches: [
    {
      title: 'Zakłady komunalne i operatorzy',
      body:
        'Wsparcie przy budowie FTTH i FTTB, spawanie, wdmuchiwanie kabli, pomiary OTDR oraz pełna dokumentacja – jako zaufany partner techniczny.',
      links: [
        { pageId: 'glasfaser-ausbau', label: 'Rozbudowa światłowodów' },
        { pageId: 'messtechnik-fehlersuche', label: 'Pomiary i diagnostyka' },
        { pageId: 'service-wartung', label: 'Serwis i utrzymanie' }
      ]
    },
    {
      title: 'Deweloperzy i zarządcy nieruchomości',
      body:
        'Przyłącza światłowodowe, piony, rozdzielnie budynkowe i szafy teletechniczne dla budynków mieszkalnych, osiedli i obiektów wielofunkcyjnych.',
      links: [
        { pageId: 'glasfaser-ausbau', label: 'Rozbudowa światłowodów' },
        { pageId: 'netzwerktechnik-wlan', label: 'Sieci LAN i Wi-Fi' }
      ]
    },
    {
      title: 'Firmy i przemysł',
      body:
        'Sieci LAN, Wi-Fi, przyłącza światłowodowe i pomiary dla biur, hal, produkcji, serwerowni i lokalizacji rozproszonych.',
      links: [
        { pageId: 'netzwerktechnik-wlan', label: 'Sieci LAN i Wi-Fi' },
        { pageId: 'glasfaser-ausbau', label: 'Rozbudowa światłowodów' },
        { pageId: 'service-wartung', label: 'Serwis i utrzymanie' }
      ]
    },
    {
      title: 'Firmy IT i systemy informatyczne',
      body:
        'Działamy jako wyspecjalizowany partner od światłowodów, okablowania i pomiarów – dyskretnie jako podwykonawca lub jako oficjalny partner.',
      links: [
        { pageId: 'glasfaser-ausbau', label: 'Rozbudowa światłowodów' },
        { pageId: 'messtechnik-fehlersuche', label: 'Pomiary i diagnostyka' }
      ]
    },
    {
      title: 'Logistyka, handel i usługi',
      body:
        'Niezawodna infrastruktura LAN i Wi-Fi dla magazynów, sklepów i punktów usługowych – także z rozbudową i serwisem.',
      links: [
        { pageId: 'netzwerktechnik-wlan', label: 'Sieci LAN i Wi-Fi' },
        { pageId: 'service-wartung', label: 'Serwis i utrzymanie' }
      ]
    },
    {
      title: 'Jednostki publiczne i edukacja',
      body:
        'Infrastruktura sieciowa dla urzędów, szkół i instytucji – we współpracy z działami IT i administracją budynków.',
      links: [
        { pageId: 'netzwerktechnik-wlan', label: 'Sieci LAN i Wi-Fi' },
        { pageId: 'glasfaser-ausbau', label: 'Rozbudowa światłowodów' }
      ]
    }
  ],

  referencesTitle: 'Wybrane realizacje',
  referencesIntro:
    'Wiele naszych realizacji jest objętych poufnością. Dlatego prezentujemy jedynie branże, zakres prac i region. Na życzenie przedstawimy szczegółowe referencje podczas rozmowy.',
  references: [
    {
      title: 'Rozbudowa FTTB/FTTH dla osiedla mieszkaniowego w regionie Frankfurtu',
      body:
        'Projektowanie, instalacja, spawanie i pomiary odbiorcze dla wieloetapowego osiedla – w tym przyłącza budynkowe, piony i centralne szafy sieciowe.',
      details: [
        'Branża: nieruchomości / deweloperzy',
        'Zakres: rozbudowa światłowodów, spawanie, pomiary, dokumentacja',
        'Region: Rhein-Main'
      ]
    },
    {
      title: 'Sieć LAN i Wi-Fi dla biura i administracji',
      body:
        'Wykonanie okablowania strukturalnego, montaż szaf rack i zaprojektowanie pełnego pokrycia Wi-Fi dla pracowników i gości.',
      details: [
        'Branża: firmy / administracja',
        'Zakres: sieci LAN i Wi-Fi, serwis i utrzymanie',
        'Region: Frankfurt nad Menem'
      ]
    },
    {
      title: 'Kampania pomiarowa OTDR dla operatora regionalnego',
      body:
        'Kompleksowa weryfikacja i dokumentacja istniejących tras światłowodowych przed zmianą operatora.',
      details: [
        'Branża: operatorzy / zakłady komunalne',
        'Zakres: pomiary OTDR, diagnostyka, dokumentacja',
        'Region: Rhein-Main'
      ]
    },
    {
      title: 'Serwis i utrzymanie dla zakładu produkcyjnego',
      body:
        'Stała opieka nad infrastrukturą światłowodową i sieciową – regularne przeglądy, aktualizacja dokumentacji i usuwanie awarii.',
      details: [
        'Branża: przemysł / produkcja',
        'Zakres: serwis i utrzymanie, pomiary',
        'Region: okolice Frankfurtu'
      ]
    }
  ],

  uspTitle: 'Dlaczego klienci wybierają smaRTtechnik?',
  uspItems: [
    'Praktyczne doświadczenie: technicy z wieloletnią pracą w terenie, halach i data center.',
    'Niezawodność: terminy, ustalenia i dokumentacja realizowane bez kompromisów.',
    'Transparentna komunikacja: jasne informacje o ryzykach, kosztach i harmonogramach.',
    'Bliskość: szybka reakcja dzięki lokalnemu działaniu w regionie Rhein-Main.',
    'Długoterminowe relacje: wiele projektów realizujemy w ramach stałej współpracy.'
  ],

  factsTitle: 'Liczby i fakty z naszych projektów',
  factsItems: [
    { value: '200+', label: 'zrealizowanych projektów światłowodowych i sieciowych w Rhein-Main' },
    { value: '10+', label: 'lat doświadczenia naszych techników w światłowodach' },
    { value: '24/7', label: 'dyspozycyjność awaryjna w ramach umowy serwisowej' }
  ],
  factsNote:
    'To doświadczenie przekładamy na każdy projekt — niezależnie od tego, czy jesteś zakładem komunalnym, deweloperem, firmą czy dostawcą IT.',

  faq: {
    title: 'FAQ — branże i referencje',
    items: [
      {
        question: 'W jakich lokalizacjach realizujecie projekty?',
        answer:
          'Większość realizacji znajduje się w regionie Frankfurt / Rhein-Main, również w Offenbach, Hanau, Rodenbach oraz okolicznych powiatach.'
      },
      {
        question: 'Czy działacie tylko lokalnie, czy też w całych Niemczech?',
        answer:
          'Naszym głównym obszarem działania jest Frankfurt / Rhein-Main. Dla wybranych projektów pracujemy także poza regionem.'
      },
      {
        question: 'Czy możecie podać konkretne referencje?',
        answer:
          'Ze względu na poufność często nie możemy ujawniać nazw klientów. Podczas rozmowy możemy jednak omówić przykłady projektów z Twojej branży.'
      },
      {
        question: 'Czy współpracujecie również z mniejszymi firmami?',
        answer:
          'Tak. Obsługujemy zarówno dużych operatorów, jak i małe oraz średnie firmy, administrację, szkoły i usługodawców.'
      },
      {
        question: 'Jak wygląda pierwszy krok we współpracy?',
        answer:
          'Podczas bezpłatnej rozmowy ustalamy potrzeby, proponujemy rozwiązania i wspólnie definiujemy pierwszy projekt – od pilotażu po długoterminową współpracę.'
      }
    ]
  },

  ctaEndTitle: 'Czy Twój projekt pasuje do naszego profilu? Najpewniej tak.',
  ctaEndLead:
    'Światłowody, sieci LAN, Wi-Fi, pomiary, diagnostyka i serwis — wspieramy firmy i operatorów w regionie Frankfurt / Rhein-Main sprawdzonymi rozwiązaniami.',
  ctaEndButton: 'Umów rozmowę bez zobowiązań'
};

export const branchenReferenzenContent: Record<Locale, BranchenReferenzenContent> = {
  de,
  en,
  pl
};

