import { Locale } from '../i18n';

type ServiceContent = {
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
  leistungen: {
    title: string;
    items: { title: string; body: string; bullets: string[] }[];
    note: string;
  };
  vertrag: {
    title: string;
    lead: string;
    models: { title: string; body: string }[];
  };
  einsatz: {
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

const de: ServiceContent = {
  hero: {
    title: 'Service & Wartung für Glasfaser- und Datennetze',
    bodyPrefix: 'Mit',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'bleiben Ihre Glasfaser- und Netzwerk­infrastrukturen im Raum Frankfurt / Rhein-Main langfristig stabil. Wir übernehmen laufende Service- und Wartungsarbeiten sowie Störungsdienst nach Vereinbarung.',
    bullets: [
      'Service & Wartung für Glasfaser-, LAN- & WLAN-Infrastrukturen',
      'Individuelle Serviceverträge mit definierten Reaktionszeiten',
      'Regelmäßige Prüfungen, Dokumentationspflege & Optimierungen',
      'Störungsdienst (24/7) nach Vereinbarung für kritische Infrastrukturen'
    ],
    ctaPrimary: 'Service- oder Wartungsvertrag anfragen',
    ctaSecondary: 'Zu unseren Leistungen im Überblick'
  },
  warum: {
    title: 'Warum Service & Wartung für Netze unverzichtbar sind',
    paragraphs: [
      'Glasfaser- und Datennetze werden über Jahre genutzt, erweitert und immer stärker ausgelastet. Ohne laufende Wartung steigt das Risiko von Ausfällen, Dokumentationslücken und Sicherheitsproblemen.',
      'Mit klar definierten Service- und Wartungsleistungen stellen wir sicher, dass Ihre Infrastruktur nicht nur am ersten Tag, sondern dauerhaft zuverlässig arbeitet – und dass im Störungsfall jemand zuständig ist, der Ihre Umgebung kennt.'
    ]
  },
  leistungen: {
    title: 'Unsere Service- & Wartungsleistungen',
    items: [
      {
        title: 'Regelmäßige Sicht- & Funktionsprüfungen',
        body:
          'Wir prüfen in vereinbarten Intervallen kritische Komponenten Ihrer Glasfaser- und Netzwerk­infrastruktur – etwa Muffen, Verteilerschränke, Netzwerkschränke und aktive Komponenten.',
        bullets: [
          'Sichtprüfung von Verteilern, Racks und Kabelwegen',
          'Stichprobenhafte Messungen ausgewählter Strecken',
          'Überprüfung von Lüftung, Klimatisierung & physischer Sicherheit'
        ]
      },
      {
        title: 'Dokumentationspflege & Aktualisierung',
        body:
          'Umbauten, Erweiterungen und Ad-hoc-Lösungen führen oft zu veralteten Plänen. Wir halten Ihre Netzdokumentation auf dem aktuellen Stand.',
        bullets: [
          'Aktualisierung von Plänen, Spleiß- und Portlisten',
          'Nachführen von Änderungen in Racks und Verteilern',
          'Aufbereitung für Betreiber, IT und Prüfungen'
        ]
      },
      {
        title: 'Störungsdienst & Fehlersuche',
        body:
          'Im Störungsfall zählt Zeit. Mit einem Servicevertrag definieren wir Reaktionszeiten und Prozesse – von der ersten Analyse bis zur Entstörung.',
        bullets: ['Ersteinschätzung per Remote oder Telefon', 'Vor-Ort-Einsätze im Rhein-Main-Gebiet', 'Zusammenarbeit mit Ihren IT- und Tiefbaupartnern']
      },
      {
        title: 'Begleitung von Umbauten & Migrationen',
        body:
          'Bei Standortwechseln, Umbauten oder Technologie­wechseln begleiten wir Sie, damit Glasfaser- und Netzwerk­infrastruktur sicher von A nach B kommt.',
        bullets: ['Planung der Umstellungsphasen', 'Temporäre Provisorien & Parallelbetriebe', 'Abschließende Messungen und Dokumentation']
      }
    ],
    note: '→ Technische Details zu Messungen finden Sie unter Messtechnik & Fehlersuche.'
  },
  vertrag: {
    title: 'Serviceverträge, die zu Ihrer Infrastruktur passen',
    lead:
      'Jedes Netz ist anders. Deshalb bieten wir flexible Serviceverträge, die sich an Größe, Kritikalität und vorhandenen Ressourcen orientieren – vom kleinen Unternehmensnetz bis zur breit ausgebauten Glasfaser­infrastruktur.',
    models: [
      {
        title: 'Basic-Service',
        body:
          'Für kleinere Netze oder weniger kritische Umgebungen: jährliche Prüfungen, Dokumentationspflege und definierte Reaktionszeiten zu Geschäftszeiten.'
      },
      {
        title: 'Plus-Service',
        body:
          'Für wachsende Unternehmen und Betreiber: regelmäßige Prüfintervalle, erweiterte Reaktionszeiten und Unterstützung bei Umbauten und Erweiterungen.'
      },
      {
        title: 'Premium-Service (mit 24/7-Option)',
        body:
          'Für kritische Infrastrukturen: kurze Reaktionszeiten, definierte Eskalationswege, optionale 24/7-Störungsbereitschaft und priorisierte Einsätze.'
      },
      {
        title: 'Individuelle Vereinbarungen',
        body:
          'Auf Wunsch schnüren wir ein Paket, das exakt zu Ihren Prozessen und SLAs passt – in enger Abstimmung mit Ihren internen Teams und Partnern.'
      }
    ]
  },
  einsatz: {
    title: 'Typische Einsatzszenarien für unsere Service- & Wartungsleistungen',
    items: [
      {
        title: 'Stadtwerke & Netzbetreiber',
        body:
          'Laufende Betreuung von Glasfaserstrecken, PoPs und Verteilern, inklusive Messungen und Dokumentationspflege im FTTH-/FTTB-Bereich.'
      },
      {
        title: 'Wohnungsbaugesellschaften & Immobilienbetreiber',
        body:
          'Sicherstellen, dass Hausübergänge, Steigleitungen und Gebäudeverteilungen langfristig stabil bleiben – trotz Mieterwechsel und Umbauten.'
      },
      {
        title: 'Unternehmen & Industrie',
        body:
          'Service & Wartung für Unternehmensnetzwerke, Produktionsstandorte, Lager und Rechenzentren – inklusive LAN, WLAN und Glasfaseranbindungen.'
      },
      {
        title: 'IT-Dienstleister & Systemhäuser',
        body:
          'Wir ergänzen Ihr Portfolio um spezialisierte Glasfaser- und Messtechnik-Services und kümmern uns im Hintergrund um Infrastruktur & Dokumentation.'
      }
    ]
  },
  prozess: {
    title: 'So starten wir ein Service- & Wartungsprojekt',
    steps: [
      {
        title: '1. Bestandsaufnahme & Zielsetzung',
        body:
          'Wir verschaffen uns einen Überblick über Ihre Glasfaser- und Netzwerk­infrastruktur, bestehende Dokumentation und aktuelle Herausforderungen.'
      },
      {
        title: '2. Servicekonzept & Vertragsgestaltung',
        body:
          'Auf Basis der Bestandsaufnahme definieren wir Leistungen, Intervalle, Reaktionszeiten und Eskalationswege – transparent und verständlich.'
      },
      {
        title: '3. Initiale Maßnahmen & Dokumentation',
        body:
          'Wir führen initiale Prüfungen und Messungen durch, räumen Dokumentation auf und schaffen einen sauberen Ausgangspunkt für die laufende Betreuung.'
      },
      {
        title: '4. Laufende Betreuung & Reporting',
        body:
          'In den vereinbarten Intervallen kümmern wir uns um Prüfungen, Dokumentationspflege und Störungen – inklusive regelmäßiger Berichte zu Zustand und Maßnahmen.'
      }
    ]
  },
  benefits: {
    title: 'Ihre Vorteile mit smaRTtechnik im Service & in der Wartung',
    items: [
      'Ein Ansprechpartner: Für Glasfaser, Netzwerktechnik, WLAN, Messtechnik und Fehlersuche.',
      'Regionale Nähe: Schnelle Reaktionszeiten im Raum Frankfurt / Rhein-Main.',
      'Transparente Verträge: Klare Leistungen, Reaktionszeiten und Eskalationswege.',
      'Dokumentationssicherheit: Immer aktuelle Pläne, Spleiß- und Portlisten.',
      'Langfristige Partnerschaft: Wir kennen Ihre Infrastruktur und entwickeln sie mit Ihnen weiter.'
    ],
    note:
      '→ Technische Details finden Sie in den Bereichen Glasfaser-Ausbau, Netzwerktechnik & WLAN und Messtechnik & Fehlersuche.'
  },
  faq: {
    title: 'FAQ zu Service & Wartung',
    items: [
      {
        question: 'In welchen Regionen bieten Sie Service & Wartung an?',
        answer:
          'Wir betreuen Kunden im gesamten Rhein-Main-Gebiet – mit Schwerpunkt Frankfurt am Main und Umgebung, zum Beispiel Offenbach, Hanau, Rodenbach und angrenzende Landkreise.'
      },
      {
        question: 'Müssen Netzwerke von Ihnen gebaut sein, um einen Servicevertrag zu erhalten?',
        answer:
          'Nein. Wir übernehmen Service & Wartung auch für Netze, die von anderen Firmen aufgebaut wurden – vorausgesetzt, wir können einen sauberen Startpunkt durch Bestandsaufnahme und initiale Messungen schaffen.'
      },
      {
        question: 'Welche Reaktionszeiten bieten Sie im Störungsfall an?',
        answer:
          'Reaktionszeiten werden individuell im Servicevertrag festgelegt. Für kritische Infrastrukturen bieten wir kurze Reaktionszeiten und optional eine 24/7-Störungsbereitschaft an.'
      },
      {
        question: 'Wie läuft die Abrechnung für Service & Wartung?',
        answer:
          'Je nach Modell erfolgt die Abrechnung pauschal (z.B. monatlich) oder kombiniert mit Aufwandspositionen für zusätzliche Einsätze. Das passende Modell stimmen wir mit Ihnen ab.'
      },
      {
        question: 'Arbeiten Sie mit unseren bestehenden IT-Dienstleistern zusammen?',
        answer:
          'Ja. Wir verstehen uns als Ergänzung zu Systemhäusern und internen IT-Teams und übernehmen insbesondere die physische Ebene (Glasfaser, Verkabelung, Racks, Messtechnik).'
      }
    ]
  },
  contact: {
    title: 'Netze langfristig absichern? Wir unterstützen Sie.',
    lead:
      'Sie möchten Ihre Glasfaser- und Netzwerk­infrastruktur im Raum Frankfurt professionell betreuen lassen? Gerne entwickeln wir ein Service- & Wartungskonzept, das zu Ihnen passt.',
    cta: 'Unverbindliches Servicegespräch anfragen',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};

const en: ServiceContent = {
  hero: {
    title: 'Service & Maintenance for Fiber Optic and Data Networks',
    bodyPrefix: 'With',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'your fiber optic and network infrastructure in the Frankfurt / Rhein-Main area remains stable and reliable for years. We provide ongoing service, preventive maintenance and fast fault response on request.',
    bullets: [
      'Service & maintenance for fiber optic, LAN & business Wi-Fi networks',
      'Custom service contracts with guaranteed response times',
      'Regular inspections, documentation updates & performance optimization',
      'Fault response & emergency support (24/7 optional) for critical infrastructures'
    ],
    ctaPrimary: 'Request a service or maintenance contract',
    ctaSecondary: 'See all services'
  },

  warum: {
    title: 'Why service & maintenance is essential for your network',
    paragraphs: [
      'Fiber optic and corporate data networks are used for years, expanded over time and continuously stressed. Without ongoing maintenance, the risk of outages, undocumented changes and security issues increases significantly.',
      'With clearly defined service and maintenance processes, we ensure your infrastructure runs reliably not only on day one — but every day. And in case of a fault, someone is available who already knows your environment.'
    ]
  },

  leistungen: {
    title: 'Our service & maintenance portfolio',
    items: [
      {
        title: 'Regular visual & functional inspections',
        body:
          'At agreed intervals we check critical components of your fiber and network infrastructure — from splice trays and distribution cabinets to rack systems and active equipment.',
        bullets: [
          'Visual inspection of cabinets, racks and cable paths',
          'Sample fiber measurements to identify early issues',
          'Checks of cooling, ventilation & physical security'
        ]
      },
      {
        title: 'Documentation updates & maintenance',
        body:
          'Changes, quick fixes or expansions often result in outdated documentation. We keep your network documentation accurate and up to date.',
        bullets: [
          'Updating plans, splice lists & port assignments',
          'Documenting changes in racks and distribution points',
          'Preparing clean documentation for IT teams and operators'
        ]
      },
      {
        title: 'Fault response & troubleshooting',
        body:
          'When an outage occurs, every minute counts. With a service contract we define clear response times and escalation paths — from remote diagnosis to on-site repair.',
        bullets: [
          'Initial remote or phone assessment',
          'On-site fault response in the Rhein-Main region',
          'Cooperation with your IT teams and civil engineering partners'
        ]
      },
      {
        title: 'Support during upgrades & migrations',
        body:
          'During relocations, technology upgrades or structural changes, we ensure your fiber and network infrastructure transitions safely and without downtime.',
        bullets: [
          'Planning migration phases and switchovers',
          'Temporary solutions & parallel operations',
          'Final measurements and updated documentation'
        ]
      }
    ],
    note: '→ Technical measurement details can be found under “Measurement & Troubleshooting”.'
  },

  vertrag: {
    title: 'Service contracts tailored to your infrastructure',
    lead:
      'Every network is different. That’s why we offer flexible service contracts based on your environment’s size, criticality and available IT resources — from small office networks to large multi-site fiber infrastructures.',
    models: [
      {
        title: 'Basic Service',
        body:
          'For smaller or less critical networks: annual inspections, documentation updates and defined response times during business hours.'
      },
      {
        title: 'Plus Service',
        body:
          'For growing companies and operators: regular checkups, extended response times and support for network expansions or modifications.'
      },
      {
        title: 'Premium Service (24/7 optional)',
        body:
          'For mission-critical environments: short response times, defined escalation processes and optional 24/7 emergency readiness.'
      },
      {
        title: 'Custom agreements',
        body:
          'We can create a fully tailored service package aligned with your internal processes, SLAs and operational requirements.'
      }
    ]
  },

  einsatz: {
    title: 'Where our service & maintenance is used most often',
    items: [
      {
        title: 'Municipal utilities & network operators',
        body:
          'Ongoing maintenance of fiber routes, POP sites and distribution points — including measurements and documentation for FTTH/FTTB infrastructures.'
      },
      {
        title: 'Property owners & housing associations',
        body:
          'Ensuring long-term stability of building entry points, riser cables and distribution cabinets — even with tenant changes and ongoing renovations.'
      },
      {
        title: 'Companies & industrial facilities',
        body:
          'Service & maintenance for corporate networks, production sites, warehouses and data centers — including LAN, Wi-Fi and fiber backbone connections.'
      },
      {
        title: 'IT service providers & system integrators',
        body:
          'We extend the portfolio of IT partners with specialized fiber optic services, measurements and physical infrastructure maintenance.'
      }
    ]
  },

  prozess: {
    title: 'How we start a service & maintenance project',
    steps: [
      {
        title: '1. Initial assessment & goal definition',
        body:
          'We analyze your fiber and network infrastructure, existing documentation and current challenges to define a clear starting point.'
      },
      {
        title: '2. Service concept & contract setup',
        body:
          'Based on the assessment we define the scope, maintenance intervals, response times and escalation paths — transparent and easy to understand.'
      },
      {
        title: '3. Initial measures & documentation cleanup',
        body:
          'We perform initial checks and measurements, clean up documentation and establish a solid foundation for ongoing support.'
      },
      {
        title: '4. Ongoing maintenance & reporting',
        body:
          'At the agreed intervals we handle inspections, documentation updates and fault response — including reports on network condition and completed work.'
      }
    ]
  },

  benefits: {
    title: 'Your advantages with smaRTtechnik service & maintenance',
    items: [
      'Single point of contact: fiber optics, LAN, Wi-Fi, measurements & troubleshooting.',
      'Regional proximity: fast response times in the Frankfurt / Rhein-Main area.',
      'Transparent contracts: clear services, response times and escalation paths.',
      'Documentation reliability: always updated network plans and port lists.',
      'Long-term partnership: we know your infrastructure and help it evolve.'
    ],
    note:
      '→ See also: Fiber Optic Deployment, Network Technology & Wi-Fi, and Measurement & Troubleshooting.'
  },

  faq: {
    title: 'FAQ – Service & Maintenance',
    items: [
      {
        question: 'Which regions do you offer service & maintenance in?',
        answer:
          'We support customers across the entire Frankfurt / Rhein-Main area — including Offenbach, Hanau, Rodenbach and surrounding regions.'
      },
      {
        question: 'Does the network need to be built by you to get a service contract?',
        answer:
          'No. We also take over service for networks built by other companies — provided we can perform an initial assessment and baseline measurements.'
      },
      {
        question: 'What response times do you offer for faults?',
        answer:
          'Response times are defined individually in the service contract. For critical infrastructures we offer short response times and optional 24/7 readiness.'
      },
      {
        question: 'How is service & maintenance billed?',
        answer:
          'Depending on the service model — as a monthly flat rate or combined with hourly billing for additional on-site work.'
      },
      {
        question: 'Do you work with our existing IT provider?',
        answer:
          'Yes. We collaborate with internal IT teams and external partners, taking responsibility for the physical network layer.'
      }
    ]
  },

  contact: {
    title: 'Want long-term stability for your network?',
    lead:
      'If you need professional maintenance for your fiber, LAN or business Wi-Fi infrastructure in the Frankfurt / Rhein-Main region, we will create a tailored service package for you.',
    cta: 'Request a service consultation',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};

const pl: ServiceContent = {
  hero: {
    title: 'Serwis i utrzymanie sieci światłowodowych oraz LAN/WLAN',
    bodyPrefix: 'Z',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'Twoja infrastruktura światłowodowa i sieciowa w regionie Frankfurt / Rhein-Main pozostaje stabilna i bezawaryjna. Zapewniamy stałą opiekę serwisową, regularne przeglądy oraz szybki reagujący na awarie zespół.',
    bullets: [
      'Serwis i utrzymanie sieci światłowodowych, LAN i firmowego Wi-Fi',
      'Indywidualne umowy serwisowe z gwarantowanymi czasami reakcji',
      'Regularne kontrole, aktualizacje dokumentacji i optymalizacje',
      'Stany awaryjne i usuwanie usterek (24/7) dla infrastruktury krytycznej'
    ],
    ctaPrimary: 'Zapytaj o umowę serwisową',
    ctaSecondary: 'Zobacz nasze pozostałe usługi'
  },

  warum: {
    title: 'Dlaczego serwis i utrzymanie sieci są niezbędne?',
    paragraphs: [
      'Sieci światłowodowe, LAN i Wi-Fi działają przez wiele lat, są rozbudowywane i obciążane coraz bardziej. Bez regularnej konserwacji pojawia się ryzyko awarii, błędów konfiguracji, przestarzałej dokumentacji oraz problemów z bezpieczeństwem.',
      'Dzięki spójnemu, stałemu serwisowi zapewniamy, że Twoja infrastruktura działa nie tylko w dniu instalacji, ale cały czas — a w razie awarii reaguje ktoś, kto zna sieć i jej kluczowe elementy.'
    ]
  },

  leistungen: {
    title: 'Zakres naszych usług serwisowych',
    items: [
      {
        title: 'Regularne przeglądy wizualne i funkcjonalne',
        body:
          'W ustalonych odstępach czasu sprawdzamy newralgiczne elementy Twojej infrastruktury — od muf i punktów dystrybucyjnych po szafy rack i aktywne urządzenia.',
        bullets: [
          'Kontrola wizualna szaf, muf, patchpaneli i tras kablowych',
          'Pomiary wybranych odcinków światłowodów',
          'Kontrola chłodzenia, wentylacji i bezpieczeństwa fizycznego'
        ]
      },
      {
        title: 'Aktualizacja i utrzymanie dokumentacji',
        body:
          'Zmiany, szybkie naprawy czy rozbudowy tworzą luki w dokumentacji. Aktualizujemy ją, aby Twoje zespoły zawsze miały przejrzysty obraz infrastruktury.',
        bullets: [
          'Aktualizacja planów, list portów i schematów połączeń',
          'Wprowadzanie zmian po modernizacjach i pracach bieżących',
          'Przygotowanie dokumentacji dla działów IT i operatorów'
        ]
      },
      {
        title: 'Reagowanie na awarie i diagnoza usterek',
        body:
          'W przypadku problemów najważniejszy jest czas. Definiujemy jasne czasy reakcji oraz procedury działań — od zdalnej analizy po wizytę w terenie.',
        bullets: [
          'Wstępna diagnoza telefoniczna lub zdalna',
          'Szybkie przyjazdy na miejsce w regionie Frankfurt / Rhein-Main',
          'Współpraca z Twoimi partnerami IT i firmami budowlanymi'
        ]
      },
      {
        title: 'Wsparcie przy modernizacjach i migracjach',
        body:
          'Przy przenosinach, przebudowach lub wymianie technologii dbamy o to, aby cała infrastruktura przeszła bezpiecznie do nowej lokalizacji lub konfiguracji.',
        bullets: [
          'Planowanie etapów przełączeń i modernizacji',
          'Tymczasowe rozwiązania i równoległe utrzymanie ruchu',
          'Końcowe pomiary i uzupełnienie dokumentacji'
        ]
      }
    ],
    note: '→ Szczegóły techniczne pomiarów znajdziesz w sekcji Messtechnik & Fehlersuche.'
  },

  vertrag: {
    title: 'Umowy serwisowe dopasowane do Twojej infrastruktury',
    lead:
      'Każda sieć jest inna — dlatego oferujemy elastyczne pakiety serwisowe dopasowane do wielkości infrastruktury, jej krytyczności oraz zasobów Twojego działu IT.',
    models: [
      {
        title: 'Basic-Service',
        body:
          'Dla mniejszych sieci: roczne przeglądy, aktualizacja dokumentacji i ustalone czasy reakcji w godzinach pracy.'
      },
      {
        title: 'Plus-Service',
        body:
          'Dla rozwijających się firm: częstsze przeglądy, rozszerzone godziny wsparcia oraz pomoc przy rozbudowie i modernizacjach.'
      },
      {
        title: 'Premium-Service (z opcją 24/7)',
        body:
          'Dla infrastruktury krytycznej: krótkie czasy reakcji, jasne ścieżki eskalacji i możliwość całodobowej gotowości serwisowej.'
      },
      {
        title: 'Indywidualne pakiety',
        body:
          'Tworzymy także pakiety szyte na miarę, idealnie dopasowane do Twoich wymagań, procesów i istniejących SLA.'
      }
    ]
  },

  einsatz: {
    title: 'Gdzie najczęściej realizujemy serwis i utrzymanie?',
    items: [
      {
        title: 'Stadtwerke i operatorzy sieci',
        body:
          'Stałe utrzymanie tras światłowodowych, punktów POP oraz rozdzielni — wraz z pomiarami i aktualizacją dokumentacji FTTH/FTTB.'
      },
      {
        title: 'Zarządcy nieruchomości i wspólnoty mieszkaniowe',
        body:
          'Dbałość o stabilność przyłączy, pionów i szaf teletechnicznych, mimo zmian lokatorskich i prac remontowych.'
      },
      {
        title: 'Firmy i zakłady przemysłowe',
        body:
          'Serwis sieci korporacyjnych, magazynowych i produkcyjnych — obejmujący LAN, Wi-Fi oraz połączenia światłowodowe.'
      },
      {
        title: 'Firmy IT i systemowe integratory',
        body:
          'Uzupełniamy ofertę partnerów IT o specjalistyczny serwis światłowodowy, pomiary i utrzymanie infrastruktury fizycznej.'
      }
    ]
  },

  prozess: {
    title: 'Jak wygląda rozpoczęcie współpracy serwisowej?',
    steps: [
      {
        title: '1. Analiza stanu sieci i określenie potrzeb',
        body:
          'Sprawdzamy aktualną infrastrukturę, dokumentację i obszary problemowe, aby ustalić punkt wyjścia.'
      },
      {
        title: '2. Opracowanie koncepcji serwisowej',
        body:
          'Ustalamy zakres prac, częstotliwość przeglądów, czas reakcji i procedury — przejrzyście i bez niejasności.'
      },
      {
        title: '3. Prace początkowe i uporządkowanie dokumentacji',
        body:
          'Wykonujemy pierwsze pomiary, poprawki i porządkujemy dokumentację, aby zacząć od stabilnego fundamentu.'
      },
      {
        title: '4. Stała opieka i raportowanie',
        body:
          'Regularnie przeprowadzamy przeglądy, reagujemy na zgłoszenia i dostarczamy raporty o stanie infrastruktury.'
      }
    ]
  },

  benefits: {
    title: 'Dlaczego warto powierzyć serwis sieci smaRTtechnik?',
    items: [
      'Jeden partner: światłowody, LAN, Wi-Fi, pomiary i usuwanie usterek.',
      'Szybkie dojazdy: działamy lokalnie w regionie Frankfurt / Rhein-Main.',
      'Przejrzyste umowy: jasne czasy reakcji i zakres usług.',
      'Bezpieczna dokumentacja: zawsze aktualne schematy i listy portów.',
      'Długoterminowa współpraca: znamy Twoją infrastrukturę i rozwijamy ją razem z Tobą.'
    ],
    note:
      '→ Zobacz także: budowa światłowodów, sieci LAN/Wi-Fi i pomiary światłowodów.'
  },

  faq: {
    title: 'FAQ – Serwis i utrzymanie sieci',
    items: [
      {
        question: 'Na jakim obszarze oferujecie serwis i utrzymanie?',
        answer:
          'Obsługujemy cały region Frankfurt / Rhein-Main — m.in. Offenbach, Hanau, Rodenbach i okoliczne miejscowości.'
      },
      {
        question: 'Czy sieć musi być przez Was zbudowana, aby otrzymać serwis?',
        answer:
          'Nie. Możemy przejąć opiekę nad siecią zbudowaną przez inną firmę — pod warunkiem że wykonamy wstępną analizę i pomiary.'
      },
      {
        question: 'Jakie czasy reakcji oferujecie w przypadku awarii?',
        answer:
          'Czasy reakcji ustalamy indywidualnie w umowie. Dla infrastruktury krytycznej dostępna jest opcja szybkich reakcji oraz 24/7.'
      },
      {
        question: 'Jak rozliczany jest serwis?',
        answer:
          'W zależności od modelu: jako miesięczna opłata ryczałtowa lub w połączeniu z rozliczeniem za dodatkowe interwencje.'
      },
      {
        question: 'Czy współpracujecie z naszym działem IT lub firmą zewnętrzną?',
        answer:
          'Tak. Współpracujemy z działami IT i firmami partnerskimi, przejmując odpowiedzialność za warstwę fizyczną sieci.'
      }
    ]
  },

  contact: {
    title: 'Chcesz zapewnić swojej sieci stabilność na lata?',
    lead:
      'Jeśli szukasz stałego serwisu lub opieki nad siecią światłowodową, LAN lub firmowym Wi-Fi w regionie Frankfurt — przygotujemy dla Ciebie dopasowaną ofertę.',
    cta: 'Zapytaj o usługę serwisową',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};


export const serviceWartungContent: Record<Locale, ServiceContent> = {
  de,
  en,
  pl
};

