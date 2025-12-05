import { Locale } from '../i18n';
import { PageId } from '../seo-config';

type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  usp: {
    title: string;
    items: { title: string; body: string }[];
  };
  leistungen: {
    title: string;
    lead: string;
    items: { title: string; body: string; bullets: string[]; linkText: string; pageId: PageId }[];
  };
  branchen: {
    title: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  prozess: {
    title: string;
    steps: { title: string; body: string }[];
  };
  facts: {
    title: string;
    items: { value: string; label: string }[];
    note: string;
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    lead: string;
    primaryCta: string;
    company: string;
    addressLine: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phones: string[];
  };
};

const de: HomeContent = {
  hero: {
    eyebrow: 'Glasfaser · Netzwerktechnik · Rhein-Main',
    title: 'Glasfaser- & Netzwerktechnik für Frankfurt & Rhein-Main',
    lead:
      'smaRTtechnik Lebek & Stawczyk GbR plant, spleißt, misst und wartet zuverlässige Glasfaser- und Datennetze für Stadtwerke, Netzbetreiber, Wohnungsbaugesellschaften und Unternehmen im Rhein-Main-Gebiet.',
    bullets: [
      'Glasfaser spleißen, verlegen & dokumentieren (FTTH / FTTB)',
      'Netzwerktechnik & WLAN für Büros, Gewerbe & Industrie',
      'OTDR-, Leistungs- & Dämpfungsmessungen mit Messprotokoll',
      'Service & Wartung, Störungsdienst nach Vereinbarung (24/7)'
    ],
    primaryCta: 'Projekt jetzt anfragen',
    secondaryCta: 'Leistungen entdecken'
  },
  usp: {
    title: 'Warum smaRTtechnik als Glasfaser-Partner in Frankfurt?',
    items: [
      {
        title: 'Regionale Experten im Rhein-Main-Gebiet',
        body:
          'Unser Team arbeitet täglich auf Baustellen in Frankfurt am Main, Offenbach, Hanau, Rodenbach und im gesamten Rhein-Main-Gebiet. Wir kennen die lokalen Gegebenheiten und sind schnell vor Ort.'
      },
      {
        title: 'Zertifizierte Glasfaser- & Netzwerktechniker',
        body:
          'Unsere Techniker sind auf Glasfaser (LWL) spezialisiert – vom Hausanschluss über Backbone-Strecken bis hin zu komplexen Unternehmensnetzen. Regelmäßige Schulungen und zertifizierte Messtechnik gehören bei uns zum Standard.'
      },
      {
        title: 'Saubere Dokumentation & Messprotokolle',
        body:
          'Jede Strecke wird mit OTDR-, Leistungs- und Dämpfungsmessungen geprüft. Sie erhalten strukturierte Messprotokolle sowie eine klare, digitale Dokumentation Ihrer Glasfaser- und Datennetze.'
      },
      {
        title: 'Flexible Zusammenarbeit für Stadtwerke & Unternehmen',
        body:
          'Wir arbeiten als Nachunternehmer für Stadtwerke, Carrier und Generalunternehmer oder direkt für Unternehmen – flexibel, zuverlässig und abgestimmt auf Ihre Prozesse und Normen.'
      }
    ]
  },
  leistungen: {
    title: 'Leistungen im Überblick',
    lead:
      'Von der ersten Planung über Spleißarbeiten bis zur Abnahmemessung – wir decken den kompletten Lebenszyklus moderner Glasfaser- und Datennetze ab.',
    items: [
      {
        title: 'Glasfaser-Ausbau & Spleißen (FTTH / FTTB)',
        body:
          'Wir übernehmen Planung, Verlegung und Spleißen von Glasfaserkabeln (LWL) im Großraum Frankfurt. Vom Hausanschluss bis zum PoP: Glasfaser spleißen, patchen, einblasen und dokumentieren für FTTH- und FTTB-Projekte.',
        bullets: [
          'Glasfaser-Hausanschlüsse in Mehrfamilienhäusern & Gewerbeobjekten',
          'Spleißen in Muffen, Verteilern und Netzwerkschränken',
          'Dokumentation der Glasfaserstrecken inkl. Längen & Ports'
        ],
        linkText: 'Mehr zu Glasfaser-Ausbau & Spleißen →',
        pageId: 'glasfaser-ausbau'
      },
      {
        title: 'Netzwerktechnik & WLAN für Unternehmen',
        body:
          'Wir planen und installieren Netzwerktechnik in Büros, Hallen und Rechenzentren. Von strukturierter LAN-Verkabelung über Netzwerkschränke bis zu professionell ausgeleuchteten WLAN-Netzen.',
        bullets: [
          'Strukturierte Netzwerkverkabelung (Kupfer & LWL)',
          'Montage und Verkabelung von Netzwerkschränken (Racks)',
          'Switches, Firewalls und WLAN-Access-Points inkl. Konfiguration'
        ],
        linkText: 'Mehr zu Netzwerktechnik & WLAN →',
        pageId: 'netzwerktechnik-wlan'
      },
      {
        title: 'Messtechnik & Fehlersuche in Glasfasernetzen',
        body:
          'Mit modernen OTDR- und Leistungsmesseinheiten prüfen wir neue und bestehende Glasfaserstrecken. Wir finden Dämpfungsspitzen, Faserbrüche und schlecht gespleißte Verbindungen – und liefern klare, nachvollziehbare Messprotokolle.',
        bullets: [
          'OTDR-Messungen für Neu- und Bestandsstrecken',
          'Leistungs- & Dämpfungsmessungen nach Vorgabe',
          'Fehlersuche & Lokalisierung von Störungen'
        ],
        linkText: 'Mehr zu Messtechnik & Fehlersuche →',
        pageId: 'messtechnik-fehlersuche'
      },
      {
        title: 'Service & Wartung Ihrer Netze',
        body:
          'Wir begleiten Ihr Glasfaser- und Datennetz nach der Abnahme weiter: mit individuellen Service- und Wartungsverträgen sowie Störungsdienst nach Vereinbarung – für maximale Verfügbarkeit.',
        bullets: [
          'Regelmäßige Sicht- und Funktionsprüfungen',
          'Dokumentationspflege bei Umbauten',
          'Störungsbereitschaft (24/7) nach Vereinbarung'
        ],
        linkText: 'Mehr zu Service & Wartung →',
        pageId: 'service-wartung'
      }
    ]
  },
  branchen: {
    title: 'Für wen arbeiten wir?',
    lead:
      'Wir sind spezialisierter Dienstleister für Glasfaser- und Netzwerktechnik im B2B-Bereich. Unsere Kunden kommen aus dem gesamten Rhein-Main-Gebiet.',
    items: [
      {
        title: 'Stadtwerke & Netzbetreiber',
        body:
          'Unterstützung beim Glasfaserausbau (FTTH / FTTB), Spleißarbeiten, Einblasen von Kabeln und Messtechnik – als zuverlässiger Nachunternehmer im Raum Frankfurt.'
      },
      {
        title: 'Wohnungsbau & Immobiliengesellschaften',
        body:
          'Glasfaser-Hausanschlüsse, Steigleitungen und Netzwerkschränke in Mehrfamilienhäusern sowie gewerblichen Liegenschaften.'
      },
      {
        title: 'Unternehmen & Industrie',
        body:
          'Planung und Umsetzung von LAN- und WLAN-Infrastrukturen für Büros, Lagerhallen, Produktion und Rechenzentren – inklusive Backup- & Redundanzkonzepten.'
      },
      {
        title: 'IT-Dienstleister & Generalunternehmer',
        body:
          'Wir übernehmen Glasfaser-spezifische Arbeiten wie Spleißen, Messen und Dokumentieren als Subunternehmer in Ihren Projekten.'
      }
    ]
  },
  prozess: {
    title: 'So läuft ein Glasfaser- oder Netzwerkprojekt mit uns ab',
    steps: [
      {
        title: '1. Bedarfsklärung & Vor-Ort-Termin',
        body:
          'Wir analysieren Ihre Anforderungen und verschaffen uns bei einem Vor-Ort-Termin ein genaues Bild von Gebäude, Trassen und bestehenden Netzen.'
      },
      {
        title: '2. Planung & verbindliches Angebot',
        body:
          'Auf Basis der Analyse erstellen wir eine strukturierte Planung sowie ein transparentes, faires Angebot mit klaren Leistungs- und Terminangaben.'
      },
      {
        title: '3. Umsetzung & Spleißarbeiten',
        body:
          'Unsere Techniker verlegen Kabel, spleißen Fasern, montieren Netzwerkschränke und nehmen alle Komponenten fachgerecht in Betrieb – termingerecht und sauber.'
      },
      {
        title: '4. Messung, Abnahme & Dokumentation',
        body:
          'Abschließend führen wir OTDR-, Leistungs- und Dämpfungsmessungen durch, dokumentieren alle Strecken und übergeben Ihnen vollständige Messprotokolle.'
      }
    ]
  },
  facts: {
    title: 'Zahlen, die für sich sprechen',
    items: [
      { value: '200+', label: 'abgeschlossene Glasfaser- & Netzwerkprojekte im Rhein-Main-Gebiet' },
      { value: '10+', label: 'Jahre Erfahrung im Glasfaserbereich unserer Techniker' },
      { value: '24/7', label: 'Störungsbereitschaft nach Vereinbarung für Servicekunden' }
    ],
    note:
      'Diese Erfahrung setzen wir gezielt ein, um Ihre Projekte sicher, termintreu und nachvollziehbar dokumentiert umzusetzen.'
  },
  faq: {
    title: 'Häufig gestellte Fragen',
    items: [
      {
        question: 'In welchen Regionen sind Sie tätig?',
        answer:
          'Wir arbeiten im gesamten Rhein-Main-Gebiet mit Schwerpunkt Frankfurt am Main und Umgebung – unter anderem in Offenbach, Hanau, Rodenbach, Bad Vilbel und Mainz. Auf Anfrage unterstützen wir auch Projekte darüber hinaus.'
      },
      {
        question: 'Arbeiten Sie auch für kleine Unternehmen?',
        answer:
          'Ja. Neben Stadtwerken, Netzbetreibern und Wohnungsbaugesellschaften betreuen wir auch kleine und mittelständische Unternehmen – vom einzelnen Büro bis hin zu verteilten Standorten.'
      },
      {
        question: 'Übernehmen Sie nur Teilbereiche wie Spleißen oder Messungen?',
        answer:
          'Auf Wunsch übernehmen wir sowohl komplette Projekte als auch einzelne Leistungspakete – etwa reines Glasfaser-Spleißen, OTDR-Messungen oder die Erstellung von Messprotokollen als externer Dienstleister.'
      },
      {
        question: 'Wie lange im Voraus sollte ein Projekt angefragt werden?',
        answer:
          'Für kleinere Glasfaser- oder Netzwerkarbeiten reichen oft wenige Wochen Vorlauf. Größere FTTH-/FTTB-Projekte sollten Sie idealerweise mehrere Monate vor Baubeginn mit uns planen, damit wir Kapazitäten verbindlich reservieren können.'
      },
      {
        question: 'Mit welchen Herstellern und Komponenten arbeiten Sie?',
        answer:
          'Wir setzen auf gängige, bewährte Komponenten aus der Glasfaser- und Netzwerktechnik. Auf Wunsch berücksichtigen wir Ihre Standard-Hersteller und bestehenden Richtlinien, damit Ihre Infrastruktur homogen bleibt.'
      }
    ]
  },
  contact: {
    title: 'Projekt geplant? Sprechen wir darüber.',
    lead:
      'Sie planen ein Glasfaser- oder Netzwerkprojekt im Raum Frankfurt? Wir beraten Sie unverbindlich und finden gemeinsam die passende Lösung für Ihr Unternehmen, Ihre Liegenschaften oder Ihr Netz.',
    primaryCta: 'Jetzt unverbindlich anfragen',
    company: 'smaRTtechnik Lebek & Stawczyk GbR',
    addressLine: 'Odenwaldstr. 14, 63517 Rodenbach (bei Frankfurt am Main)',
    emailLabel: 'E-Mail:',
    email: 'info@smarttechnik.eu',
    phoneLabel: 'Telefon:',
    phones: ['+49 157 31685721', '+49 157 82854321']
  }
};

const en: HomeContent = {
  hero: {
    eyebrow: 'Fiber Optics · Networking · Frankfurt Rhein-Main',
    title: 'Fiber Optic & Network Engineering for Frankfurt & Rhein-Main',
    lead:
      'smaRTtechnik Lebek & Stawczyk GbR designs, splices, tests and maintains reliable fiber optic and data networks for utilities, network operators, housing companies and businesses across the Frankfurt / Rhein-Main region.',
    bullets: [
      'Fiber splicing, installation & documentation (FTTH / FTTB)',
      'Network cabling & business Wi-Fi for offices, commerce & industry',
      'OTDR, power & loss measurements with certified test reports',
      'Service & maintenance, troubleshooting upon agreement (24/7)'
    ],
    primaryCta: 'Request a project',
    secondaryCta: 'Explore services'
  },
  usp: {
    title: 'Why smaRTtechnik as Your Fiber Optic Partner in Frankfurt?',
    items: [
      {
        title: 'Local Experts in the Rhein-Main Region',
        body:
          'Our team works daily on sites in Frankfurt am Main, Offenbach, Hanau, Rodenbach and throughout the Rhein-Main area. We know the local conditions and reach your project quickly.'
      },
      {
        title: 'Certified Fiber Optic & Network Technicians',
        body:
          'Our technicians specialize in fiber optics (FO/LWL) – from building connections and backbone routes to complex enterprise networks. Continuous training and certified measurement equipment are standard for us.'
      },
      {
        title: 'Clean Documentation & Measurement Reports',
        body:
          'Every link is tested using OTDR, power and loss measurements. You receive structured test reports and clear digital documentation of your fiber and data networks.'
      },
      {
        title: 'Flexible Collaboration for Utilities & Businesses',
        body:
          'We work as subcontractors for utilities, carriers and general contractors, or directly for companies – flexible, reliable and aligned with your processes and standards.'
      }
    ]
  },
  leistungen: {
    title: 'Our Services at a Glance',
    lead:
      'From initial planning and splicing through to final testing and acceptance – we cover the complete lifecycle of modern fiber optic and data networks.',
    items: [
      {
        title: 'Fiber Optic Deployment & Splicing (FTTH / FTTB)',
        body:
          'We handle planning, installation and splicing of fiber optic cables across the greater Frankfurt area. From building entry to PoP: splicing, patching, blowing and documenting fiber for FTTH and FTTB projects.',
        bullets: [
          'Fiber building connections for multi-dwelling units & commercial properties',
          'Splicing in closures, distribution boxes and network cabinets',
          'Documentation of fiber routes including lengths & ports'
        ],
        linkText: 'Learn more about Fiber Optic Deployment & Splicing →',
        pageId: 'glasfaser-ausbau'
      },
      {
        title: 'Network Cabling & Business Wi-Fi Solutions',
        body:
          'We design and install network infrastructures in offices, warehouses and data centers. From structured LAN cabling and racks to professionally planned Wi-Fi coverage.',
        bullets: [
          'Structured network cabling (copper & fiber)',
          'Installation and wiring of network racks and cabinets',
          'Switches, firewalls and Wi-Fi access points including configuration'
        ],
        linkText: 'Learn more about Network Technology & Wi-Fi →',
        pageId: 'netzwerktechnik-wlan'
      },
      {
        title: 'Fiber Measurement & Fault Diagnostics',
        body:
          'Using modern OTDR and power measurement units, we test new and existing fiber links. We detect attenuation peaks, fiber breaks and poor splices – and deliver clear, traceable measurement reports.',
        bullets: [
          'OTDR testing for new and existing fiber routes',
          'Power & loss measurements according to specifications',
          'Fault finding & precise localization of disturbances'
        ],
        linkText: 'Learn more about Measurement & Fault Analysis →',
        pageId: 'messtechnik-fehlersuche'
      },
      {
        title: 'Service & Maintenance for Your Networks',
        body:
          'We support your fiber and data network after handover with tailored service and maintenance contracts and optional emergency troubleshooting – for maximum availability.',
        bullets: [
          'Regular visual and functional inspections',
          'Documentation updates during modifications',
          '24/7 emergency readiness upon agreement'
        ],
        linkText: 'Learn more about Service & Maintenance →',
        pageId: 'service-wartung'
      }
    ]
  },
  branchen: {
    title: 'Who We Work For',
    lead:
      'We are a specialized B2B provider for fiber optic and network engineering. Our clients are based throughout the Rhein-Main region.',
    items: [
      {
        title: 'Utilities & Network Operators',
        body:
          'Support for FTTH / FTTB rollouts, splicing, cable blowing and measurement services – as a reliable subcontractor in the Frankfurt area.'
      },
      {
        title: 'Housing & Property Companies',
        body:
          'Fiber building connections, riser cabling and network cabinets in multi-dwelling units as well as commercial properties.'
      },
      {
        title: 'Companies & Industry',
        body:
          'Planning and implementation of LAN and Wi-Fi infrastructures for offices, warehouses, production facilities and data centers – including backup and redundancy concepts.'
      },
      {
        title: 'IT Service Providers & General Contractors',
        body:
          'We take over fiber-specific tasks such as splicing, testing and documentation as a subcontractor in your projects.'
      }
    ]
  },
  prozess: {
    title: 'How a Fiber or Network Project Works with Us',
    steps: [
      {
        title: '1. Requirements & On-Site Visit',
        body:
          'We analyze your requirements and, during an on-site visit, gain a precise understanding of the building, routes and existing networks.'
      },
      {
        title: '2. Planning & Binding Proposal',
        body:
          'Based on our analysis, we create a structured plan and a transparent, fair proposal with clear scope and schedule details.'
      },
      {
        title: '3. Implementation & Splicing',
        body:
          'Our technicians install cables, splice fibers, mount network cabinets and commission all components professionally – on schedule and cleanly executed.'
      },
      {
        title: '4. Testing, Acceptance & Documentation',
        body:
          'Finally, we carry out OTDR, power and loss measurements, document all routes and hand over complete measurement reports.'
      }
    ]
  },
  facts: {
    title: 'Numbers That Speak for Themselves',
    items: [
      { value: '200+', label: 'Completed fiber and network projects in the Rhein-Main region' },
      { value: '10+', label: 'Years of fiber optic experience among our technicians' },
      { value: '24/7', label: 'Emergency readiness for service customers upon agreement' }
    ],
    note:
      'We use this experience to deliver your projects safely, on time and with transparent, traceable documentation.'
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Which regions do you cover?',
        answer:
          'We operate throughout the Rhein-Main region with a focus on Frankfurt am Main and surrounding areas – including Offenbach, Hanau, Rodenbach, Bad Vilbel and Mainz. On request, we also support projects beyond this area.'
      },
      {
        question: 'Do you also work with small businesses?',
        answer:
          'Yes. In addition to utilities, network operators and housing companies, we also support small and medium-sized businesses – from single offices to multi-site environments.'
      },
      {
        question: 'Can you take over only specific tasks like splicing or testing?',
        answer:
          'If required, we handle both complete projects and individual service packages – for example, fiber splicing only, OTDR measurements or creating measurement reports as an external service provider.'
      },
      {
        question: 'How far in advance should a project be requested?',
        answer:
          'For smaller fiber or network jobs, a few weeks’ notice is usually sufficient. Larger FTTH / FTTB projects should ideally be planned several months before construction starts so we can reserve capacity.'
      },
      {
        question: 'Which manufacturers and components do you use?',
        answer:
          'We rely on proven components commonly used in fiber and network engineering. On request, we follow your standard manufacturers and existing guidelines so your infrastructure remains consistent.'
      }
    ]
  },
  contact: {
    title: 'Planning a Project? Let’s Talk.',
    lead:
      'Are you planning a fiber or network project in the Frankfurt area? We provide non-binding advice and find the right solution for your company, your properties or your network.',
    primaryCta: 'Request a non-binding consultation',
    company: 'smaRTtechnik Lebek & Stawczyk GbR',
    addressLine: 'Odenwaldstr. 14, 63517 Rodenbach (near Frankfurt am Main)',
    emailLabel: 'Email:',
    email: 'info@smarttechnik.eu',
    phoneLabel: 'Phone:',
    phones: ['+49 157 31685721', '+49 157 82854321']
  }
};
const pl: HomeContent = {
   hero: {
    eyebrow: 'Światłowody · Sieci komputerowe · Frankfurt Rhein-Main',
    title: 'Światłowody i sieci komputerowe dla Frankfurtu i regionu Rhein-Main',
    lead:
      'smaRTtechnik Lebek & Stawczyk GbR projektuje, spawa, mierzy i serwisuje niezawodne sieci światłowodowe oraz LAN dla zakładów komunalnych, operatorów, deweloperów i firm w regionie Frankfurt / Rhein-Main.',
    bullets: [
      'Spawanie, instalacja i dokumentacja światłowodów (FTTH / FTTB)',
      'Sieci LAN i profesjonalne Wi-Fi dla biur, hal i przemysłu',
      'Pomiary OTDR, mocy i tłumienności z pełnym protokołem',
      'Serwis i utrzymanie, wsparcie awaryjne (24/7) wg ustaleń'
    ],
    primaryCta: 'Zamów wycenę projektu',
    secondaryCta: 'Zobacz usługi'
  },
  usp: {
    title: 'Dlaczego smaRTtechnik jako partner światłowodowy we Frankfurcie?',
    items: [
      {
        title: 'Lokalni specjaliści w regionie Rhein-Main',
        body:
          'Codziennie pracujemy na inwestycjach w Frankfurcie, Offenbach, Hanau, Rodenbach i całym regionie Rhein-Main. Znamy lokalne warunki i szybko reagujemy na potrzeby projektów.'
      },
      {
        title: 'Certyfikowani technicy światłowodowi i sieciowi',
        body:
          'Nasi technicy są wyspecjalizowani w światłowodach – od przyłączy budynkowych po sieci szkieletowe i złożone infrastruktur y firmowe. Korzystamy z certyfikowanego sprzętu i stale podnosimy kwalifikacje.'
      },
      {
        title: 'Dokładna dokumentacja i raporty pomiarowe',
        body:
          'Każda trasa jest sprawdzana pomiarami OTDR, mocy i tłumienności. Otrzymujesz czytelne protokoły oraz kompletną dokumentację swojej sieci światłowodowej i LAN.'
      },
      {
        title: 'Elastyczna współpraca dla operatorów i przedsiębiorstw',
        body:
          'Działamy jako podwykonawca dla zakładów komunalnych, operatorów, generalnych wykonawców lub bezpośrednio dla firm — elastycznie i zgodnie z ich procedurami oraz standardami.'
      }
    ]
  },
  leistungen: {
    title: 'Nasze usługi',
    lead:
      'Od planowania i spawania światłowodów po pomiary odbiorcze — realizujemy pełny zakres prac związanych z budową nowoczesnych sieci światłowodowych i LAN.',
    items: [
      {
        title: 'Rozbudowa światłowodów i spawanie (FTTH / FTTB)',
        body:
          'Realizujemy projektowanie, instalację i spawanie kabli światłowodowych w całym regionie Frankfurtu. Od przyłącza budynku po węzeł PoP: spawanie, patchowanie, wdmuchiwanie i pełna dokumentacja tras.',
        bullets: [
          'Przyłącza światłowodowe w budynkach mieszkalnych i komercyjnych',
          'Spawanie w mufach, przełącznicach i szafach sieciowych',
          'Dokumentacja tras światłowodowych z długościami i portami'
        ],
        linkText: 'Więcej o rozbudowie światłowodów →',
        pageId: 'glasfaser-ausbau'
      },
      {
        title: 'Sieci LAN i profesjonalne Wi-Fi dla firm',
        body:
          'Projektujemy i budujemy sieci LAN w biurach, halach i centrach danych. Oferujemy okablowanie strukturalne, montaż racków oraz fachowe planowanie zasięgu Wi-Fi.',
        bullets: [
          'Okablowanie strukturalne (miedź i światłowód)',
          'Montaż i okablowanie szaf teleinformatycznych (racks)',
          'Switches, firewalle i punkty dostępowe Wi-Fi z konfiguracją'
        ],
        linkText: 'Więcej o sieciach LAN i Wi-Fi →',
        pageId: 'netzwerktechnik-wlan'
      },
      {
        title: 'Pomiary światłowodów i diagnostyka usterek',
        body:
          'Wykonujemy pomiary OTDR oraz pomiary mocy i tłumienności na nowych i istniejących trasach. Lokalizujemy uszkodzenia, tłumienia i nieprawidłowe spawy — z pełnym raportem.',
        bullets: [
          'Pomiary OTDR dla nowych i istniejących instalacji',
          'Pomiary mocy i tłumienności zgodnie z normami',
          'Diagnostyka i precyzyjne lokalizowanie usterek'
        ],
        linkText: 'Więcej o pomiarach i diagnostyce →',
        pageId: 'messtechnik-fehlersuche'
      },
      {
        title: 'Serwis i utrzymanie sieci',
        body:
          'Zapewniamy wsparcie po oddaniu projektu — indywidualne umowy serwisowe, przeglądy, aktualizacje dokumentacji i wsparcie awaryjne, aby Twoja sieć działała bez przerw.',
        bullets: [
          'Regularne przeglądy wizualne i funkcjonalne',
          'Aktualizacja dokumentacji przy zmianach w sieci',
          'Gotowość serwisowa (24/7) wg umowy'
        ],
        linkText: 'Więcej o serwisie i utrzymaniu →',
        pageId: 'service-wartung'
      }
    ]
  },
  branchen: {
    title: 'Dla kogo pracujemy?',
    lead:
      'Jesteśmy wyspecjalizowanym wykonawcą B2B w zakresie światłowodów i sieci komputerowych. Obsługujemy klientów z całego regionu Frankfurt / Rhein-Main.',
    items: [
      {
        title: 'Zakłady komunalne i operatorzy',
        body:
          'Wsparcie przy budowie FTTH/FTTB, spawaniu, wdmuchiwaniu kabli i pomiarach — jako sprawdzony podwykonawca w regionie Frankfurtu.'
      },
      {
        title: 'Deweloperzy i zarządcy nieruchomości',
        body:
          'Przyłącza światłowodowe, piony i szafy teletechniczne w budynkach mieszkalnych i obiektach komercyjnych.'
      },
      {
        title: 'Firmy i przemysł',
        body:
          'Projektowanie i wdrożenia infrastruktury LAN i Wi-Fi w biurach, halach magazynowych, produkcji i serwerowniach — także z redundancją i backupem.'
      },
      {
        title: 'Firmy IT i generalni wykonawcy',
        body:
          'Realizujemy prace światłowodowe — spawanie, pomiary i dokumentację — jako podwykonawca w zewnętrznych projektach.'
      }
    ]
  },
  prozess: {
    title: 'Jak przebiega projekt światłowodowy lub sieciowy?',
    steps: [
      {
        title: '1. Analiza potrzeb i oględziny na miejscu',
        body:
          'Oceniamy wymagania projektu i podczas wizji lokalnej sprawdzamy budynek, trasy kablowe i istniejące instalacje.'
      },
      {
        title: '2. Planowanie i wycena',
        body:
          'Przygotowujemy szczegółowy plan oraz przejrzystą ofertę z zakresem prac i terminami realizacji.'
      },
      {
        title: '3. Instalacja i spawanie',
        body:
          'Nasi technicy układają kable, spawają włókna, montują szafy rack i uruchamiają całą infrastrukturę zgodnie ze sztuką i terminowo.'
      },
      {
        title: '4. Pomiary, odbiór i dokumentacja',
        body:
          'Wykonujemy pomiary OTDR, mocy i tłumienności, dokumentujemy wszystkie trasy i przekazujemy pełną dokumentację pomiarową.'
      }
    ]
  },
  facts: {
    title: 'Liczby, które mówią same za siebie',
    items: [
      { value: '200+', label: 'zrealizowanych projektów światłowodowych i sieciowych w regionie Rhein-Main' },
      { value: '10+', label: 'lat doświadczenia naszych techników w światłowodach' },
      { value: '24/7', label: 'dyspozycyjność awaryjna dla klientów serwisowych (wg umowy)' }
    ],
    note:
      'To doświadczenie wykorzystujemy, by realizować projekty bezpiecznie, terminowo i z pełną transparentnością.'
  },
  faq: {
    title: 'Najczęściej zadawane pytania',
    items: [
      {
        question: 'W jakich regionach działacie?',
        answer:
          'Obsługujemy cały region Frankfurt / Rhein-Main — m.in. Offenbach, Hanau, Rodenbach, Bad Vilbel i Mainz. Na życzenie realizujemy także projekty poza regionem.'
      },
      {
        question: 'Czy współpracujecie z małymi firmami?',
        answer:
          'Tak. Oprócz operatorów i deweloperów obsługujemy również małe i średnie przedsiębiorstwa — od pojedynczych biur po sieci wielooddziałowe.'
      },
      {
        question: 'Czy realizujecie tylko wybrane usługi, np. samo spawanie?',
        answer:
          'Tak. Możemy przejąć zarówno cały projekt, jak i pojedyncze zadania — np. spawanie światłowodów, pomiary OTDR czy wykonanie pełnej dokumentacji pomiarowej.'
      },
      {
        question: 'Z jakim wyprzedzeniem zgłaszać projekt?',
        answer:
          'Mniejsze prace można umawiać z kilkutygodniowym wyprzedzeniem. Duże projekty FTTH/FTTB najlepiej planować z kilkumiesięcznym zapasem, aby zarezerwować terminy.'
      },
      {
        question: 'Na jakich komponentach pracujecie?',
        answer:
          'Stosujemy sprawdzone komponenty wykorzystywane w branży światłowodowej i sieciowej. Na życzenie dopasowujemy się do standardów i producentów używanych w Twojej firmie.'
      }
    ]
  },
  contact: {
    title: 'Planujesz projekt? Porozmawiajmy.',
    lead:
      'Planujesz projekt światłowodowy lub sieciowy w regionie Frankfurtu? Doradzimy bezpłatnie i znajdziemy najlepsze rozwiązanie dla Twojej firmy lub inwestycji.',
    primaryCta: 'Zapytaj o wycenę',
    company: 'smaRTtechnik Lebek & Stawczyk GbR',
    addressLine: 'Odenwaldstr. 14, 63517 Rodenbach (koło Frankfurtu nad Menem)',
    emailLabel: 'E-mail:',
    email: 'info@smarttechnik.eu',
    phoneLabel: 'Telefon:',
    phones: ['+49 157 31685721', '+49 157 82854321']
  }
};

export const homeContent: Record<Locale, HomeContent> = {
  de,
  en,
  pl
};
