import { Locale } from '../i18n';

type NetzContent = {
  hero: {
    title: string;
    bodyPrefix: string;
    brand: string;
    bodySuffix: string;
    bullets: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  warum: {
    title: string;
    paragraphs: string[];
  };
  leistungenNetz: {
    title: string;
    items: { title: string; body: string; bullets: string[] }[];
  };
  wlan: {
    title: string;
    items: { title: string; body: string }[];
    note: string;
  };
  branchen: {
    title: string;
    items: { title: string; body: string }[];
  };
  prozess: {
    title: string;
    steps: { title: string; body: string }[];
  };
  benefits: {
    title: string;
    items: string[];
    note: string;
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    lead: string;
    cta: string;
    phones: string[];
    email: string;
  };
};

const de: NetzContent = {
  hero: {
    title: 'Netzwerktechnik & WLAN für Unternehmen in Frankfurt',
    bodyPrefix: 'Mit',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'erhalten Unternehmen im Rhein-Main-Gebiet eine verlässliche Basis für ihre IT: professionell geplante Netzwerktechnik und WLAN-Lösungen für Büros, Hallen, Produktion und Rechenzentren.',
    bullets: [
      'Strukturierte LAN-Verkabelung (Kupfer & LWL)',
      'Netzwerkschränke, Patchfelder, Switches & Firewalls',
      'Professionelle WLAN-Planung und -Ausleuchtung',
      'Dokumentation, Erweiterungen & Wartung aus einer Hand'
    ],
    ctaPrimary: 'Netzwerk- oder WLAN-Projekt anfragen',
    ctaSecondary: 'Mehr zu Glasfaser-Ausbau'
  },
  warum: {
    title: 'Warum professionelle Netzwerktechnik wichtig ist',
    paragraphs: [
      'Stabile Netzwerke sind die Grundlage für nahezu alle Geschäftsprozesse – von ERP- und CRM-Systemen über VoIP-Telefonie bis hin zu cloudbasierten Anwendungen und Industrie-4.0-Lösungen. Unsauber aufgebaute Strukturen oder „gewachsene“ Netze führen zu Ausfällen, Sicherheitslücken und schwer nachvollziehbaren Störungen.',
      'Wir unterstützen Sie dabei, Ihre Netzwerk- und WLAN-Infrastruktur transparent, performant und zukunftssicher aufzubauen – damit Ihr IT-Dienstleister oder internes IT-Team auf einer stabilen Basis aufsetzen kann.'
    ]
  },
  leistungenNetz: {
    title: 'Unsere Leistungen in der Netzwerktechnik',
    items: [
      {
        title: 'Strukturierte LAN-Verkabelung (Kupfer & LWL)',
        body:
          'Wir planen und installieren strukturierte Netzwerkverkabelung in Büros, Lagerhallen und Rechenzentren. Saubere Trassenführung, beschriftete Leitungen und geprüfte Verbindungen sorgen für eine stabile Basis.',
        bullets: [
          'Verlegung von Kupfer- und LWL-Leitungen (Cat, LWL)',
          'Installation von Netzwerkdosen und Patchfeldern',
          'Messung und Protokollierung der Leitungen'
        ]
      },
      {
        title: 'Netzwerkschränke & Patchfelder',
        body:
          'Wir richten Netzwerkschränke (Racks) ein, ordnen Patchfelder, führen Kabel sauber und achten auf ausreichende Reserven für spätere Erweiterungen.',
        bullets: [
          'Planung und Aufbau von 19"-Netzwerkschränken',
          'Patchfelder, Kabelmanagement und Beschriftung',
          'Integration aktiver Komponenten (Switches, Router, Firewalls)'
        ]
      },
      {
        title: 'Switches, Firewalls & aktive Komponenten',
        body:
          'Auf Wunsch kümmern wir uns um die Lieferung, Grundkonfiguration und Integration Ihrer aktiven Netzwerkkomponenten – in Abstimmung mit Ihrem IT-Dienstleister oder internen IT-Team.',
        bullets: [
          'Basis-Konfiguration von Switches und Firewalls',
          'Segmentierung (z.B. VLANs) nach Vorgabe',
          'Dokumentation der Portbelegung und Konfigurationen'
        ]
      },
      {
        title: 'Netzwerk-Erweiterungen & Umbauten',
        body:
          'Ihr Unternehmen wächst, es kommen neue Arbeitsplätze oder zusätzliche Hallen dazu? Wir erweitern bestehende Netzwerke und passen Verkabelung sowie Schränke an – inklusive Dokumentationspflege.',
        bullets: [
          'Erweiterung bestehender Racks und Patchfelder',
          'Zusätzliche Dosen, Leitungen und Anbindungen',
          'Aktualisierung von Plänen und Dokumentation'
        ]
      }
    ]
  },
  wlan: {
    title: 'WLAN-Planung & Ausleuchtung für Büros und Hallen',
    items: [
      {
        title: 'WLAN-Planung nach Bedarf',
        body:
          'Gemeinsam definieren wir, welche Flächen versorgt werden müssen, welche Endgeräte im Einsatz sind und welche Bandbreiten und Verfügbarkeiten erforderlich sind.'
      },
      {
        title: 'WLAN-Ausleuchtung & Tests',
        body:
          'Wir führen Messungen durch, um Funklöcher zu vermeiden und Störquellen zu erkennen – insbesondere in komplexen Umgebungen wie Industriehallen oder mehrstöckigen Bürogebäuden.'
      },
      {
        title: 'Montage & Inbetriebnahme von Access Points',
        body:
          'Access Points werden optimal positioniert, sicher montiert und in Ihr bestehendes Netzwerk integriert. Auf Wunsch inklusive Grundkonfiguration nach Ihren Richtlinien.'
      },
      {
        title: 'WLAN für Gäste, Mitarbeiter & Produktion',
        body:
          'Ob Gäste-WLAN, internes Mitarbeiter-WLAN oder WLAN für Scanner, Maschinen und IoT-Geräte – wir berücksichtigen getrennte Netze und Sicherheitszonen bereits in der Planung.'
      }
    ],
    note:
      '→ Für die Anbindung Ihrer Standorte per Glasfaser finden Sie Informationen auf unserer Seite Glasfaser-Ausbau.'
  },
  branchen: {
    title: 'Typische Projekte im Bereich Netzwerktechnik & WLAN',
    items: [
      {
        title: 'Bürogebäude & Verwaltungen',
        body:
          'Aufbau oder Modernisierung der Netzwerkverkabelung, WLAN-Versorgung aller Arbeitsplätze, Meetingräume und Gemeinschaftsflächen.'
      },
      {
        title: 'Lager & Logistik',
        body:
          'Stabile LAN- und WLAN-Infrastruktur für Scanner, Stapler, mobile Endgeräte und Verladetore – auch in hohen Hallen und schwierigen Funkumgebungen.'
      },
      {
        title: 'Produktion & Industrie',
        body:
          'Netzwerke für Maschinen, Steuerungen, Sensorik und Industrie-4.0-Anwendungen – robust, dokumentiert und erweiterbar.'
      },
      {
        title: 'Rechenzentren & Serverräume',
        body:
          'Strukturiertes Patchen, klare Rack-Strukturen und redundante Verbindungen – in enger Abstimmung mit Ihrer IT.'
      }
    ]
  },
  prozess: {
    title: 'So läuft ein Netzwerkprojekt mit smaRTtechnik ab',
    steps: [
      {
        title: '1. Analyse & Bestandsaufnahme',
        body:
          'Wir prüfen bestehende Verkabelung, Netzwerkschränke und WLAN-Strukturen und besprechen gemeinsam Ihre Anforderungen an Leistung, Sicherheit und Skalierbarkeit.'
      },
      {
        title: '2. Konzept & Angebot',
        body:
          'Auf Basis der Analyse erstellen wir ein Konzept für die Verkabelung, Schrank- und Portstruktur sowie die WLAN-Versorgung – inklusive transparentem Angebot.'
      },
      {
        title: '3. Umsetzung & Inbetriebnahme',
        body:
          'Leitungen werden verlegt, Dosen gesetzt, Racks aufgebaut, Access Points montiert und aktive Komponenten integriert – mit möglichst wenig Beeinträchtigung Ihres laufenden Betriebs.'
      },
      {
        title: '4. Dokumentation & Übergabe',
        body:
          'Sie erhalten Pläne, Portlisten, Messprotokolle und eine verständliche Dokumentation, damit Ihre IT jederzeit den Überblick behält.'
      }
    ]
  },
  benefits: {
    title: 'Ihre Vorteile mit smaRTtechnik im Bereich Netzwerktechnik & WLAN',
    items: [
      'Praxisnahe Planung: Netzwerke, die zu Ihren Arbeitsabläufen passen – nicht umgekehrt.',
      'Saubere Umsetzung: Aufgeräumte Racks, nachvollziehbare Portbelegung, beschriftete Leitungen.',
      'Dokumentation: Netzpläne, Patchlisten und Messprotokolle als Grundlage für Betrieb und Support.',
      'Regionale Nähe: Kurze Wege und schnelle Reaktion im Raum Frankfurt / Rhein-Main.',
      'Nahtlose Integration: Auf Wunsch inklusive Glasfaser-Anbindung, Messtechnik sowie Service & Wartung.'
    ],
    note: '→ Mehr zu laufender Betreuung finden Sie auf unserer Seite Service & Wartung.'
  },
  faq: {
    title: 'FAQ zu Netzwerktechnik & WLAN im Raum Frankfurt',
    items: [
      {
        question: 'In welchen Regionen bieten Sie Netzwerktechnik & WLAN an?',
        answer:
          'Wir sind im gesamten Rhein-Main-Gebiet aktiv – mit Fokus auf Frankfurt am Main und Umgebung, zum Beispiel Offenbach, Hanau, Rodenbach und die angrenzenden Landkreise.'
      },
      {
        question: 'Arbeiten Sie direkt mit Unternehmen oder nur über IT-Dienstleister?',
        answer:
          'Beides ist möglich. Wir arbeiten sowohl direkt für Unternehmen als auch als ausführender Partner von IT-Dienstleistern, Systemhäusern oder Generalunternehmern.'
      },
      {
        question: 'Können Sie bestehende Netzwerke erweitern oder umbauen?',
        answer:
          'Ja. Wir erweitern vorhandene Netzwerkschränke, ergänzen Dosen und Leitungen und passen die Struktur an – inklusive Aktualisierung der Dokumentation.'
      },
      {
        question: 'Planen und messen Sie auch WLAN in bestehenden Gebäuden?',
        answer:
          'Ja. Wir führen WLAN-Ausleuchtungen in Bestandsgebäuden durch, empfehlen Access-Point-Standorte und begleiten die Umsetzung, inklusive Tests nach der Inbetriebnahme.'
      },
      {
        question: 'Übernehmen Sie auch die Konfiguration von Switches und Firewalls?',
        answer:
          'Auf Wunsch übernehmen wir die Grundkonfiguration und Integration der aktiven Komponenten – in enger Abstimmung mit Ihrem IT-Dienstleister oder internen IT-Verantwortlichen.'
      }
    ]
  },
  contact: {
    title: 'Netzwerk modernisieren oder neu aufbauen? Wir unterstützen Sie.',
    lead:
      'Ob Neubau, Umzug oder Modernisierung – wir planen und installieren Netzwerktechnik & WLAN so, dass Ihr Unternehmen heute und morgen leistungsfähig bleibt.',
    cta: 'Unverbindliches Beratungsgespräch anfragen',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};

const en: NetzContent = {
  hero: {
    title: 'Business Network Cabling & Wi-Fi Solutions in Frankfurt',
    bodyPrefix: 'With',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'companies across the Frankfurt / Rhein-Main area get a reliable IT foundation: professionally designed network cabling and enterprise-grade Wi-Fi for offices, warehouses, production facilities and data rooms.',
    bullets: [
      'Structured LAN cabling (copper & fiber)',
      'Network racks, patch panels, switches & firewalls',
      'Professional Wi-Fi planning and on-site Wi-Fi surveys',
      'Documentation, expansions & maintenance from one provider'
    ],
    ctaPrimary: 'Request a network or Wi-Fi project',
    ctaSecondary: 'More about Fiber Deployment'
  },

  warum: {
    title: 'Why professional network infrastructure matters',
    paragraphs: [
      'A stable network is the backbone of nearly every business process—ERP, CRM, cloud applications, VoIP telephony, warehouse systems and Industry 4.0. Poor cabling, unplanned growth or inconsistent structures lead to downtime, security issues and unpredictable performance problems.',
      'We help you build a transparent, high-performance and future-proof LAN and Wi-Fi infrastructure—so your IT provider or internal IT department can work on a stable and scalable foundation.'
    ]
  },

  leistungenNetz: {
    title: 'Our Business Network Services',
    items: [
      {
        title: 'Structured LAN Cabling (Copper & Fiber)',
        body:
          'We design and install structured network cabling in offices, warehouses and data rooms. Clean cable routing, labeling and certified connections ensure long-term reliability.',
        bullets: [
          'Installation of copper and fiber cabling (Cat / fiber LWL)',
          'Setup of network outlets and patch panels',
          'Cable testing and measurement reports'
        ]
      },
      {
        title: 'Network Racks & Patch Panels',
        body:
          'We build and organize network racks, arrange patch panels, route cabling neatly and ensure enough space for future upgrades.',
        bullets: [
          'Planning and installation of 19" network racks',
          'Patch panels, cable management & labeling',
          'Integration of active components (switches, routers, firewalls)'
        ]
      },
      {
        title: 'Switches, Firewalls & Active Components',
        body:
          'If required, we provide, pre-configure and integrate your active equipment—fully aligned with your IT provider or internal IT team.',
        bullets: [
          'Basic configuration of switches and firewalls',
          'Network segmentation (e.g., VLANs)',
          'Port documentation and configuration records'
        ]
      },
      {
        title: 'Network Extensions & Upgrades',
        body:
          'Your company is growing or a new area is being added? We expand existing networks, extend cabling and update racks—including up-to-date documentation.',
        bullets: [
          'Rack and patch panel extensions',
          'Additional outlets, cabling and connections',
          'Documentation updates and revised network plans'
        ]
      }
    ]
  },

  wlan: {
    title: 'Wi-Fi Planning & On-Site Surveys for Offices and Warehouses',
    items: [
      {
        title: 'Needs-Based Wi-Fi Planning',
        body:
          'Together we define coverage areas, device types, roaming requirements, bandwidth expectations and reliability levels.'
      },
      {
        title: 'Professional Wi-Fi Surveys & Signal Testing',
        body:
          'We conduct Wi-Fi measurements to eliminate dead zones and identify interference—crucial for warehouses, production halls and multi-storey office buildings.'
      },
      {
        title: 'Access Point Installation & Configuration',
        body:
          'APs are positioned optimally, mounted securely and integrated into your network. We can also provide initial configuration based on your security standards.'
      },
      {
        title: 'Wi-Fi for Guests, Staff & Industrial Devices',
        body:
          'Whether guest Wi-Fi, employee Wi-Fi or Wi-Fi for scanners, machines or IoT devices—separate VLANs and security zones are planned from the start.'
      }
    ],
    note:
      '→ For fiber connectivity between your locations, visit our Fiber Deployment page.'
  },

  branchen: {
    title: 'Typical Network & Wi-Fi Projects',
    items: [
      {
        title: 'Office Buildings & Administration',
        body:
          'Network cabling upgrades or new installations, plus full Wi-Fi coverage for meeting rooms, open office zones and shared spaces.'
      },
      {
        title: 'Warehouses & Logistics',
        body:
          'Reliable LAN/Wi-Fi for scanners, forklifts, handhelds and loading docks—even in high-ceiling halls with challenging radio conditions.'
      },
      {
        title: 'Industrial & Production Facilities',
        body:
          'Robust networks for machines, controllers, sensors and Industry 4.0 applications—fully documented and built for long-term operation.'
      },
      {
        title: 'Data Rooms & Server Rooms',
        body:
          'Structured patching, tidy rack layouts and redundant connections—implemented in close cooperation with your IT team.'
      }
    ]
  },

  prozess: {
    title: 'How a Network Project with smaRTtechnik Works',
    steps: [
      {
        title: '1. Analysis & Site Assessment',
        body:
          'We review existing cabling, racks and Wi-Fi and discuss your requirements regarding performance, security and scalability.'
      },
      {
        title: '2. Concept & Proposal',
        body:
          'Based on the assessment, we create a cabling and rack concept, port structure and Wi-Fi plan—including a transparent offer.'
      },
      {
        title: '3. Implementation & Activation',
        body:
          'We install cabling, set outlets, build racks, mount access points and integrate active components—with minimal disruption to daily operations.'
      },
      {
        title: '4. Documentation & Handover',
        body:
          'You receive network plans, port lists, measurement reports and clear documentation so your IT team has full visibility.'
      }
    ]
  },

  benefits: {
    title: 'Your Benefits with smaRTtechnik – Network & Wi-Fi',
    items: [
      'Practical, real-world planning: networks designed around your workflows.',
      'Clean execution: tidy racks, clear port mapping, labeled and tested cabling.',
      'Full documentation: network plans, patch lists and measurement reports.',
      'Regional presence: fast response times in Frankfurt / Rhein-Main.',
      'End-to-end support: optional fiber links, measurement services and maintenance.'
    ],
    note: '→ For ongoing support, see our Service & Maintenance page.'
  },

  faq: {
    title: 'FAQ – Network Cabling & Wi-Fi in Frankfurt / Rhein-Main',
    items: [
      {
        question: 'Which regions do you serve?',
        answer:
          'We operate across the entire Frankfurt / Rhein-Main area—including Offenbach, Hanau, Rodenbach and surrounding districts.'
      },
      {
        question: 'Do you work directly with companies or only via IT providers?',
        answer:
          'Both. We support businesses directly and also act as a subcontractor for IT service providers, system integrators and general contractors.'
      },
      {
        question: 'Can you extend or upgrade existing networks?',
        answer:
          'Yes. We expand existing racks, add outlets and cabling, and update all related documentation.'
      },
      {
        question: 'Do you perform Wi-Fi surveys in existing buildings?',
        answer:
          'Yes. We conduct Wi-Fi measurements in existing facilities, recommend access-point locations and assist with deployment and testing.'
      },
      {
        question: 'Do you configure switches and firewalls?',
        answer:
          'If required, we handle basic configuration and integration—fully aligned with your IT provider or internal IT team.'
      }
    ]
  },

  contact: {
    title: 'Modernizing or building a new network? We can help.',
    lead:
      'Whether new construction, relocation or modernization—we design and install network cabling & enterprise Wi-Fi that keeps your organisation ready for the future.',
    cta: 'Request a consultation',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};

const pl: NetzContent = {
  hero: {
    title: 'Sieci LAN i profesjonalne Wi-Fi dla firm – Frankfurt / Rhein-Main',
    bodyPrefix: 'Z',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'otrzymujesz stabilną i nowoczesną infrastrukturę IT: profesjonalne okablowanie sieciowe oraz firmowe sieci Wi-Fi dla biur, magazynów, produkcji i serwerowni.',
    bullets: [
      'Strukturalne okablowanie LAN (miedź & światłowód)',
      'Szafy rack, patch panele, switche i firewalle',
      'Profesjonalna analiza, planowanie i pomiary Wi-Fi',
      'Dokumentacja, rozbudowy i serwis w jednym miejscu'
    ],
    ctaPrimary: 'Zapytaj o projekt sieci lub Wi-Fi',
    ctaSecondary: 'Więcej o budowie światłowodów'
  },

  warum: {
    title: 'Dlaczego profesjonalna sieć jest tak ważna?',
    paragraphs: [
      'Stabilna sieć to podstawa działania każdej firmy — systemy ERP i CRM, aplikacje chmurowe, telefonię VoIP, systemy magazynowe czy rozwiązania Przemysłu 4.0. Chaotycznie zbudowana infrastruktura powoduje awarie, problemy z wydajnością i luki bezpieczeństwa.',
      'Pomagamy stworzyć przejrzystą, wydajną i przyszłościową infrastrukturę LAN i Wi-Fi — tak, by Twój dział IT lub firma zewnętrzna mogła pracować na stabilnym i skalowalnym środowisku.'
    ]
  },

  leistungenNetz: {
    title: 'Nasze usługi w zakresie sieci LAN',
    items: [
      {
        title: 'Strukturalne okablowanie LAN (miedź & światłowód)',
        body:
          'Projektujemy i instalujemy strukturalne okablowanie sieciowe w biurach, halach magazynowych i serwerowniach. Przejrzysta trasa kabli, opisane przewody i certyfikowane połączenia to gwarancja stabilności.',
        bullets: [
          'Instalacja kabli miedzianych i światłowodowych (Cat / LWL)',
          'Montaż gniazd sieciowych i patch paneli',
          'Pomiary kabli i raporty z testów'
        ]
      },
      {
        title: 'Szafy rack i patch panele',
        body:
          'Budujemy i porządkujemy szafy sieciowe, organizujemy patch panele, układamy okablowanie i zostawiamy przestrzeń na przyszłe rozbudowy.',
        bullets: [
          'Projekt i montaż szaf rack 19”',
          'Patch panele, organizacja kabli i opis portów',
          'Integracja aktywnych urządzeń (switche, routery, firewalle)'
        ]
      },
      {
        title: 'Switche, firewalle i urządzenia aktywne',
        body:
          'W razie potrzeby dostarczamy, konfigurujemy i wdrażamy aktywne urządzenia sieciowe – w pełnej współpracy z Twoją firmą IT.',
        bullets: [
          'Podstawowa konfiguracja switchy i firewalli',
          'Segmentacja sieci (np. VLAN)',
          'Dokumentacja portów i konfiguracji'
        ]
      },
      {
        title: 'Rozbudowy i modernizacje sieci',
        body:
          'Przy rozwoju firmy lub nowych przestrzeniach rozbudowujemy istniejącą infrastrukturę LAN i dbamy o dokumentację po zmianach.',
        bullets: [
          'Rozbudowa szaf rack i patch paneli',
          'Dodatkowe gniazda, kable i przyłącza',
          'Aktualizacja dokumentacji sieci'
        ]
      }
    ]
  },

  wlan: {
    title: 'Planowanie i pomiary Wi-Fi dla biur i hal magazynowych',
    items: [
      {
        title: 'Indywidualne planowanie Wi-Fi',
        body:
          'Ustalamy, jakie obszary mają być pokryte sygnałem, ilu użytkowników korzysta z sieci i jakie są wymagania dotyczące prędkości oraz dostępności.'
      },
      {
        title: 'Pomiary i analiza zasięgu Wi-Fi',
        body:
          'Przeprowadzamy pomiary Wi-Fi, wykrywamy martwe strefy i źródła zakłóceń — szczególnie ważne w magazynach, halach produkcyjnych i wielopiętrowych biurowcach.'
      },
      {
        title: 'Montaż i konfiguracja Access Pointów',
        body:
          'AP montujemy w optymalnych lokalizacjach, integrujemy z siecią i — jeśli trzeba — konfigurujemy zgodnie z zasadami bezpieczeństwa Twojej firmy.'
      },
      {
        title: 'Wi-Fi dla gości, pracowników i urządzeń przemysłowych',
        body:
          'Projektujemy sieci Wi-Fi dla gości, pracowników oraz urządzeń IoT, maszyn i skanerów — z wydzielonymi VLAN-ami i strefami bezpieczeństwa.'
      }
    ],
    note:
      '→ Informacje o łączach światłowodowych między lokalizacjami znajdziesz w sekcji Budowa światłowodów.'
  },

  branchen: {
    title: 'Najczęstsze projekty sieci LAN i Wi-Fi',
    items: [
      {
        title: 'Biura i administracja',
        body:
          'Nowe lub modernizowane sieci LAN, pełne pokrycie Wi-Fi w biurach, salach spotkań i częściach wspólnych.'
      },
      {
        title: 'Magazyny i logistyka',
        body:
          'Stabilna sieć LAN/Wi-Fi dla skanerów, wózków widłowych, urządzeń mobilnych i ramp załadunkowych — także w wysokich halach.'
      },
      {
        title: 'Produkcja i przemysł',
        body:
          'Sieci dla maszyn, sterowników, czujników i systemów przemysłowych — odporne, opisane i gotowe na rozwój.'
      },
      {
        title: 'Serwerownie i pomieszczenia IT',
        body:
          'Uporządkowane racki, logiczne patchowanie i redundantne połączenia, zgodnie z wymaganiami działu IT.'
      }
    ]
  },

  prozess: {
    title: 'Jak przebiega projekt sieciowy z smaRTtechnik?',
    steps: [
      {
        title: '1. Analiza i inwentaryzacja',
        body:
          'Sprawdzamy istniejące okablowanie, szafy rack i Wi-Fi oraz omawiamy wymagania dotyczące wydajności, bezpieczeństwa i skalowalności.'
      },
      {
        title: '2. Koncepcja i oferta',
        body:
          'Tworzymy projekt okablowania, strukturę szafy rack, plan portów oraz projekt sieci Wi-Fi — wraz z przejrzystą wyceną.'
      },
      {
        title: '3. Realizacja i uruchomienie',
        body:
          'Układamy kable, montujemy gniazda, budujemy szafy rack, instalujemy Access Pointy i integrujemy urządzenia aktywne — minimalizując wpływ na pracę firmy.'
      },
      {
        title: '4. Dokumentacja i przekazanie',
        body:
          'Otrzymujesz plany sieci, listy portów, raporty z pomiarów i czytelną dokumentację dla Twojego działu IT.'
      }
    ]
  },

  benefits: {
    title: 'Dlaczego firmy wybierają smaRTtechnik?',
    items: [
      'Praktyczne podejście: projektujemy sieć pod procesy Twojej firmy.',
      'Zadbana infrastruktura: czyste racki, jasna numeracja portów, opisane i zmierzone kable.',
      'Pełna dokumentacja: plany, patchlisty, pomiary – gotowe do audytu i utrzymania.',
      'Wsparcie lokalne: szybkie reakcje na terenie Frankfurt / Rhein-Main.',
      'Kompleksowa obsługa: opcjonalnie światłowody, pomiary, serwis i stała opieka.'
    ],
    note: '→ Więcej o stałej obsłudze sieci znajdziesz w sekcji Serwis & Utrzymanie.'
  },

  faq: {
    title: 'FAQ – Sieci LAN i Wi-Fi w regionie Frankfurt',
    items: [
      {
        question: 'W jakim obszarze realizujecie projekty sieciowe?',
        answer:
          'Działamy na całym terenie Frankfurt / Rhein-Main — Offenbach, Hanau, Rodenbach i sąsiednie miejscowości.'
      },
      {
        question: 'Czy współpracujecie bezpośrednio z firmami, czy tylko z firmami IT?',
        answer:
          'Współpracujemy zarówno bezpośrednio z klientami biznesowymi, jak i jako partner wykonawczy dla firm IT, integratorów i generalnych wykonawców.'
      },
      {
        question: 'Czy możecie rozbudować lub zmodyfikować istniejącą sieć?',
        answer:
          'Tak. Rozbudowujemy szafy rack, dodajemy gniazda i przewody oraz aktualizujemy dokumentację.'
      },
      {
        question: 'Czy wykonujecie pomiary Wi-Fi w już istniejących obiektach?',
        answer:
          'Tak. Wykonujemy pomiary zasięgu, wskazujemy miejsca montażu Access Pointów i weryfikujemy działanie po instalacji.'
      },
      {
        question: 'Czy konfigurujecie switche i firewalle?',
        answer:
          'W razie potrzeby zajmujemy się podstawową konfiguracją i integracją — w pełnej współpracy z Twoim działem IT lub firmą zewnętrzną.'
      }
    ]
  },

  contact: {
    title: 'Modernizujesz sieć lub budujesz ją od zera? Pomożemy.',
    lead:
      'Niezależnie od tego, czy to nowy obiekt, relokacja czy modernizacja — projektujemy i instalujemy sieci LAN i firmowe Wi-Fi, które zapewniają wydajność na dziś i jutro.',
    cta: 'Umów konsultację',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};


export const netzwerktechnikWlanContent: Record<Locale, NetzContent> = {
  de,
  en,
  pl
};

