import { Locale } from '../i18n';

type GlasfaserContent = {
  hero: {
    title: string;
    bodyPrefix: string;
    brand: string;
    bodySuffix: string;
    bullets: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  whatIs: {
    title: string;
    paragraphs: string[];
  };
  packages: {
    title: string;
    body: string;
    bullets: string[];
    inlineNote?: string;
  }[];
  einsatz: {
    title: string;
    lead: string;
    items: { title: string; body: string }[];
  };
  prozess: {
    title: string;
    steps: { title: string; body: string }[];
  };
  benefits: {
    title: string;
    items: string[];
    notePrefix: string;
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    lead: string;
    cta: string;
    phoneIntro: string;
    phones: string[];
    email: string;
  };
};

const de: GlasfaserContent = {
  hero: {
    title: 'Glasfaser-Ausbau & Spleißen im Raum Frankfurt / Rhein-Main',
    bodyPrefix:
      'Als spezialisierter Dienstleister für Glasfaser-Ausbau unterstützt',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'Stadtwerke, Netzbetreiber, Wohnungsbaugesellschaften und Unternehmen bei der Planung, Verlegung, dem Spleißen und der Abnahme von leistungsfähigen FTTH- und FTTB-Netzen im Rhein-Main-Gebiet.',
    bullets: [
      'Glasfaserkabel verlegen, einblasen & spleißen (LWL)',
      'FTTH- & FTTB-Ausbau für Wohnungsbau & Gewerbeobjekte',
      'OTDR-, Leistungs- & Dämpfungsmessungen mit Messprotokollen',
      'Dokumentation, Abnahme & Service aus einer Hand'
    ],
    ctaPrimary: 'Projekt im Glasfaser-Ausbau anfragen',
    ctaSecondary: 'Zur Übersicht unserer Leistungen'
  },
  whatIs: {
    title: 'Was verstehen wir unter Glasfaser-Ausbau?',
    paragraphs: [
      'Beim Glasfaser-Ausbau geht es um deutlich mehr als nur „Kabel verlegen“. Wir begleiten Sie von der Trassenplanung über die Verlegung und Spleißarbeiten bis hin zur Abnahmemessung und Dokumentation Ihrer Glasfasernetze.',
      'Dabei unterscheiden wir typischerweise zwischen FTTH (Fiber to the Home), bei dem die Glasfaser bis in die einzelne Wohneinheit geführt wird, und FTTB (Fiber to the Building), bei dem der Glasfaseranschluss am Hausübergabepunkt endet und die letzten Meter meist über Kupfer realisiert werden. Welche Variante in Ihrem Projekt sinnvoll ist, klären wir gemeinsam anhand Ihrer Anforderungen, der Gebäudeinfrastruktur und der Ausbauziele.'
    ]
  },
  packages: [
    {
      title: '1. Planung & Trassenkonzept',
      body:
        'Wir entwickeln ein belastbares Konzept für Ihren Glasfaser-Ausbau – von der Netztopologie über Trassenverläufe bis zu Spleißplänen und Belegungsplänen für Muffen, Verteiler und Netzwerkschränke.',
      bullets: [
        'Analyse bestehender Infrastruktur & Gebäudepläne',
        'Auswahl FTTH vs. FTTB je nach Use-Case',
        'Spleißpläne, Portbelegung & Beschriftungskonzepte'
      ]
    },
    {
      title: '2. Glasfaser verlegen & einblasen',
      body:
        'Gemeinsam mit Tiefbaupartnern verlegen wir Leerrohre und Glasfaserkabel oder blasen diese in vorhandene Rohrsysteme ein. Im Gebäude realisieren wir Steigleitungen, Hausanschlüsse und Verteilungen bis zum Netzwerkschrank.',
      bullets: [
        'Verlegung von LWL-Kabeln im Außen- und Innenbereich',
        'Einblasen von Mikrorohren und Mikrokabeln',
        'Hausübergabepunkte und Gebäudeverteilungen (FTTB/FTTH)'
      ]
    },
    {
      title: '3. Spleißen & Patchen von Glasfasern',
      body:
        'Unsere Techniker übernehmen das fachgerechte Spleißen von Glasfasern in Muffen, Verteilern und Racks sowie das Patchen an Patchpanels und aktiven Komponenten – präzise, sauber und dokumentiert.',
      bullets: [
        'Spleißen in Muffen, Hausverteilern und Netzwerkschränken',
        'Patchen an Patchpanels, PoP-Standorten und aktiven Ports',
        'Beschriftung und Zuordnung aller Fasern und Ports'
      ],
      inlineNote:
        '→ Detaillierte Informationen zu Messungen finden Sie auf unserer Seite Messtechnik & Fehlersuche.'
    },
    {
      title: '4. Abnahmemessung & Dokumentation',
      body:
        'Für jede ausgebauten Strecke führen wir OTDR-, Leistungs- und Dämpfungsmessungen durch und erstellen saubere Messprotokolle. So erhalten Sie eine nachvollziehbare Grundlage für Abnahme, Betrieb und spätere Erweiterungen.',
      bullets: [
        'OTDR-Messungen je Faser / Strecke',
        'Leistungs- & Dämpfungsmessungen nach Vorgaben',
        'Digitale Projekt- und Messdokumentation zur Übergabe'
      ]
    }
  ],
  einsatz: {
    title: 'Typische Einsatzszenarien für unseren Glasfaser-Ausbau',
    lead:
      'Überall dort, wo hohe Bandbreiten, stabile Latenzen und zukunftssichere Infrastruktur gefragt sind, kommt unser Team zum Einsatz.',
    items: [
      {
        title: 'Neubaugebiete & Quartierslösungen',
        body:
          'Glasfaser-Infrastruktur vom Backbone bis in die Gebäudeverteilung – als Partner von Stadtwerken, Netzbetreibern und Projektentwicklern.'
      },
      {
        title: 'Wohnungsbau & Bestandsimmobilien',
        body:
          'Nachrüstung von FTTH-/FTTB-Lösungen in bestehenden Mehrfamilienhäusern und Wohnanlagen – inklusive Hausanschlüssen und Steigleitungen.'
      },
      {
        title: 'Gewerbeobjekte & Industrie',
        body:
          'Glasfaser-Anbindungen für Bürogebäude, Hallen, Produktionsstandorte und Rechenzentren im Rhein-Main-Gebiet.'
      },
      {
        title: 'IT-Dienstleister & Generalunternehmer',
        body:
          'Wir übernehmen Glasfaser-spezifische Aufgaben wie Spleißen, Messen und Dokumentieren als Nachunternehmer in Ihren Projekten.'
      }
    ]
  },
  prozess: {
    title: 'So läuft ein Glasfaser-Ausbauprojekt mit smaRTtechnik ab',
    steps: [
      {
        title: '1. Erstgespräch & Bestandsaufnahme',
        body:
          'Wir klären Ziele, Ausbaugebiet, Bandbreitenanforderungen und Rahmenbedingungen (z.B. bestehende Infrastruktur, Tiefbaupartner, Förderprogramme).'
      },
      {
        title: '2. Planung & Detailkonzept',
        body:
          'Auf Basis der Bestandsaufnahme erarbeiten wir Trassenverläufe, Spleiß- und Belegungspläne sowie einen realistischen Zeit- und Ressourcenplan für die Umsetzung.'
      },
      {
        title: '3. Umsetzung: Verlegen, Spleißen, Patchen',
        body:
          'Kabel werden verlegt oder eingeblasen, Fasern werden spleißt, Muffen und Verteiler werden bestückt und beschriftet – in enger Abstimmung mit Ihnen und ggf. Ihren Tiefbau- oder IT-Partnern.'
      },
      {
        title: '4. Messung, Abnahme & Übergabe',
        body:
          'Nach Abschluss führen wir alle notwendigen Messungen durch, beheben eventuelle Auffälligkeiten und übergeben Ihnen eine vollständige Dokumentation inklusive Messprotokollen und Übersichtsplänen.'
      }
    ]
  },
  benefits: {
    title: 'Ihre Vorteile mit smaRTtechnik im Glasfaser-Ausbau',
    items: [
      'Regionale Präsenz: Projekte im Großraum Frankfurt / Rhein-Main mit kurzen Wegen und schnellen Reaktionszeiten.',
      'Spezialisierte Techniker: Fokus auf Glasfaser (LWL) und Datennetze – keine „Nebenbaustelle“ im Portfolio.',
      'Saubere Dokumentation: Vollständige Spleiß-, Belegungs- und Messprotokolle für Abnahme und Betrieb.',
      'Flexible Zusammenarbeit: Direkt für Auftraggeber oder als Nachunternehmer für Stadtwerke, Carrier und IT-Dienstleister.',
      'Nahtlose Anbindung: Auf Wunsch inklusive Netzwerktechnik, WLAN und späterem Service & Wartung.'
    ],
    notePrefix: '→ Passende Anschlussleistungen finden Sie auf unseren Seiten'
  },
  faq: {
    title: 'FAQ zum Glasfaser-Ausbau im Raum Frankfurt',
    items: [
      {
        question: 'In welchen Regionen übernehmen Sie Glasfaser-Ausbau?',
        answer:
          'Unser Schwerpunkt liegt im Rhein-Main-Gebiet mit Fokus auf Frankfurt am Main und Umgebung – etwa Offenbach, Hanau, Rodenbach und den angrenzenden Landkreisen. Größere Projekte begleiten wir nach Absprache auch darüber hinaus.'
      },
      {
        question: 'Übernehmen Sie auch nur einzelne Leistungen wie Spleißen oder Messen?',
        answer:
          'Ja. Wir können sowohl den kompletten Glasfaser-Ausbau betreuen als auch einzelne Leistungen wie Spleißarbeiten, Einblasen oder OTDR-Messungen als externer Dienstleister übernehmen.'
      },
      {
        question: 'Wie lange dauert ein typisches Glasfaser-Ausbauprojekt?',
        answer:
          'Das hängt stark von Umfang, Genehmigungen und Tiefbau ab. Kleinere Projekte in einzelnen Gebäuden lassen sich oft innerhalb weniger Wochen realisieren, größere Quartiers- oder FTTH-Projekte brauchen mehrere Monate inklusive Planungsphase.'
      },
      {
        question: 'Stellen Sie auch den Tiefbau für Glasfaser-Ausbau?',
        answer:
          'In vielen Projekten arbeiten wir mit bestehenden Tiefbaupartnern unserer Auftraggeber zusammen. Auf Wunsch können wir die Koordination übernehmen oder Partner empfehlen, mit denen wir regelmäßig arbeiten.'
      },
      {
        question: 'Werden alle Glasfaserstrecken vor der Abnahme gemessen?',
        answer:
          'Ja. Jede von uns aufgebaute Strecke wird mit geeigneten Messverfahren (z.B. OTDR-, Leistungs- und Dämpfungsmessungen) geprüft und mittels Messprotokollausschnitten dokumentiert, damit Sie eine saubere Grundlage für Abnahme und Betrieb erhalten.'
      }
    ]
  },
  contact: {
    title: 'Glasfaser-Ausbau geplant? Sprechen wir darüber.',
    lead:
      'Sie planen ein Glasfaser-Projekt im Raum Frankfurt oder suchen einen verlässlichen Partner für Spleiß- und Messarbeiten? Wir unterstützen Sie von der ersten Idee bis zur Abnahme.',
    cta: 'Jetzt unverbindlich anfragen',
    phoneIntro: 'Oder direkt anrufen:',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};

const en: GlasfaserContent = {
  hero: {
    title: 'Fiber Optic Installation & FTTH/FTTB Splicing – Frankfurt / Rhein-Main',
    bodyPrefix:
      'As a specialized fiber optic contractor,',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'supports utilities, network operators, housing companies and businesses in planning, installing, splicing and commissioning high-performance FTTH and FTTB networks across the Frankfurt / Rhein-Main region.',
    bullets: [
      'Fiber cable installation, blowing & splicing (LWL)',
      'Complete FTTH & FTTB rollout for residential and commercial buildings',
      'OTDR, power & loss testing with full measurement reports',
      'Documentation, acceptance testing & ongoing service'
    ],
    ctaPrimary: 'Request a fiber project',
    ctaSecondary: 'View all services'
  },

  whatIs: {
    title: 'What do we mean by fiber optic installation?',
    paragraphs: [
      'Fiber deployment is far more than just “laying a cable”. We support the entire process — from route planning and cable installation to fiber splicing, OTDR testing and full documentation.',
      'We distinguish between FTTH (Fiber to the Home), where the fiber runs directly into each unit, and FTTB (Fiber to the Building), where the fiber terminates at the building entry point. Together we determine which approach fits your building, infrastructure and project goals.'
    ]
  },

  packages: [
    {
      title: '1. Planning & Route Design',
      body:
        'We develop a reliable concept for your fiber network — including topology, route layouts, splicing schedules and port assignments for closures, distributors and rack cabinets.',
      bullets: [
        'Analysis of existing infrastructure & building plans',
        'Selection of FTTH vs. FTTB depending on use case',
        'Splicing schedules, port lists & labeling concepts'
      ]
    },
    {
      title: '2. Fiber Installation & Cable Blowing',
      body:
        'Together with civil engineering partners, we install ducts and fiber cables or blow microcables into existing conduits. Inside buildings, we complete risers, building entries and distributions to the network cabinet.',
      bullets: [
        'Installation of LWL cables indoors & outdoors',
        'Blowing microducts and microcables',
        'Building entry points and FTTB/FTTH distributions'
      ]
    },
    {
      title: '3. Fiber Splicing & Patching',
      body:
        'Our technicians perform precise fiber splicing in closures, distribution points and racks, and patch fibers at patch panels and active equipment — clean, documented and according to standards.',
      bullets: [
        'Splicing in closures, building distributors & rack cabinets',
        'Patching to patch panels, PoP locations & active ports',
        'Labeling and assigning all fibers and ports'
      ],
      inlineNote:
        '→ Detailed information on measurements is available on our “Measurement & Fault Analysis” page.'
    },
    {
      title: '4. Acceptance Testing & Documentation',
      body:
        'Every installed link is tested using OTDR, power and loss measurements. You receive clear and complete reports for acceptance, operation and future expansion.',
      bullets: [
        'OTDR testing per fiber / route',
        'Power & loss measurements according to requirements',
        'Digital project and measurement documentation'
      ]
    }
  ],

  einsatz: {
    title: 'Typical use cases for our fiber installation services',
    lead:
      'Wherever high bandwidth, low latency and a future-proof backbone are required, our team delivers the infrastructure.',
    items: [
      {
        title: 'New developments & neighborhood networks',
        body:
          'Backbone to building distribution — as a partner for utilities, network operators and project developers.'
      },
      {
        title: 'Residential buildings & retrofit installations',
        body:
          'Upgrading existing multi-dwelling units with FTTH/FTTB — including risers, building entries and distribution cabinets.'
      },
      {
        title: 'Commercial properties & industry',
        body:
          'Fiber connectivity for office buildings, warehouses, production sites and data centers across the Rhein-Main region.'
      },
      {
        title: 'IT service providers & general contractors',
        body:
          'We carry out splicing, measurements and documentation as a subcontractor for your IT or telecom projects.'
      }
    ]
  },

  prozess: {
    title: 'How a fiber installation project works with smaRTtechnik',
    steps: [
      {
        title: '1. Initial consultation & assessment',
        body:
          'We clarify objectives, coverage area, bandwidth requirements and existing infrastructure — and coordinate with your civil works or IT partners if needed.'
      },
      {
        title: '2. Planning & detailed concept',
        body:
          'Based on the assessment, we develop route layouts, splicing & port plans, and a realistic schedule including required resources.'
      },
      {
        title: '3. Implementation: installation, splicing, patching',
        body:
          'Cables are laid or blown, fibers are spliced, closures and racks are equipped and labeled — with continuous coordination throughout the project.'
      },
      {
        title: '4. Measurement, acceptance & handover',
        body:
          'We perform all required tests, fix any irregularities and hand over full documentation including all measurement reports and overview plans.'
      }
    ]
  },

  benefits: {
    title: 'Your benefits with smaRTtechnik as your fiber installation partner',
    items: [
      'Local presence: fast response times across the Frankfurt / Rhein-Main region.',
      'Skilled specialists: dedicated fiber optic & network technicians — not generalists.',
      'Complete documentation: clear splicing, port and measurement reports.',
      'Flexible cooperation: direct engagement or subcontracting for utilities, carriers and IT providers.',
      'End-to-end service: optional LAN, Wi-Fi and long-term maintenance included.'
    ],
    notePrefix: '→ Complementary services can be found under:'
  },

  faq: {
    title: 'FAQ – Fiber installation in the Frankfurt region',
    items: [
      {
        question: 'Which regions do you cover for fiber installation?',
        answer:
          'Mainly the Frankfurt / Rhein-Main region — including Frankfurt, Offenbach, Hanau, Rodenbach and surrounding districts. Larger projects can be supported outside the region as well.'
      },
      {
        question: 'Do you also provide standalone services such as only splicing or testing?',
        answer:
          'Yes. We offer full FTTH/FTTB rollout as well as individual services including splicing, cable blowing, OTDR testing and documentation.'
      },
      {
        question: 'How long does a fiber installation project take?',
        answer:
          'A single building usually takes a few weeks. Large-scale FTTH or neighborhood rollouts take several months including planning and testing.'
      },
      {
        question: 'Do you also handle the civil engineering work?',
        answer:
          'We typically work with the civil engineering partners of the client. If needed, we can recommend trusted partners or coordinate the civil works for you.'
      },
      {
        question: 'Is every fiber link tested before acceptance?',
        answer:
          'Yes. Every installed link is tested with OTDR, power and loss measurements, and you receive complete digital measurement reports.'
      }
    ]
  },

  contact: {
    title: 'Planning a fiber optic project? Let’s talk.',
    lead:
      'Whether you need a full FTTH/FTTB rollout or a partner for fiber splicing and OTDR testing — we support you from planning to acceptance.',
    cta: 'Request a quote',
    phoneIntro: 'Or call us directly:',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};

const pl: GlasfaserContent = {
  hero: {
    title: 'Budowa światłowodów & spawanie FTTH/FTTB – Frankfurt / Rhein-Main',
    bodyPrefix:
      'Jako wyspecjalizowany wykonawca sieci światłowodowych',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'wspieramy zakłady komunalne, operatorów, deweloperów oraz firmy w planowaniu, układaniu, spawaniu i odbiorach technicznych nowoczesnych sieci FTTH i FTTB w regionie Frankfurt / Rhein-Main.',
    bullets: [
      'Układanie, wdmuchiwanie i spawanie kabli światłowodowych (LWL)',
      'Kompleksowa budowa FTTH / FTTB dla budynków i obiektów komercyjnych',
      'Pomiary OTDR, mocy i tłumienności + pełne protokoły',
      'Dokumentacja, odbiór i serwis w jednym miejscu'
    ],
    ctaPrimary: 'Zapytaj o projekt światłowodowy',
    ctaSecondary: 'Zobacz nasze usługi'
  },

  whatIs: {
    title: 'Czym jest budowa sieci światłowodowych?',
    paragraphs: [
      'Budowa światłowodów to znacznie więcej niż samo „położenie kabla”. Prowadzimy pełen proces – od projektu trasy, poprzez układanie i spawanie włókien, aż po pomiary odbiorcze i dokumentację sieci.',
      'W praktyce rozróżniamy FTTH (Fiber to the Home), gdzie światłowód doprowadzany jest bezpośrednio do lokalu, oraz FTTB (Fiber to the Building), w którym kończy się na wejściu do budynku. Które rozwiązanie jest najlepsze, określamy wspólnie na podstawie wymagań technicznych, infrastruktury obiektu i celu inwestycji.'
    ]
  },

  packages: [
    {
      title: '1. Projektowanie & koncepcja trasy',
      body:
        'Przygotowujemy kompletną koncepcję budowy sieci – od topologii, przez przebieg tras, aż po plany spawów, portów i oznaczeń dla muf, rozdzielni oraz szaf rack.',
      bullets: [
        'Analiza istniejącej infrastruktury i dokumentacji obiektu',
        'Dobór FTTH lub FTTB zależnie od projektu',
        'Plany spawów, portów i system oznaczeń'
      ]
    },
    {
      title: '2. Układanie i wdmuchiwanie światłowodów',
      body:
        'Wraz z ekipami budowlanymi układamy rury i kable światłowodowe lub wdmuchujemy je w istniejące kanalizacje. W budynkach realizujemy piony, przyłącza oraz rozdzielnie.',
      bullets: [
        'Układanie kabli światłowodowych na zewnątrz i wewnątrz budynków',
        'Wdmuchiwanie mikrorur i mikrokabli',
        'Punkty wejścia do budynków i rozdzielnie FTTB/FTTH'
      ]
    },
    {
      title: '3. Spawanie i patchowanie włókien',
      body:
        'Nasi technicy wykonują precyzyjne spawy w mufach, rozdzielniach i szafach oraz patchowanie na panelach i aktywnych portach — wszystko z pełną dokumentacją.',
      bullets: [
        'Spawanie w mufach, rozdzielniach i szafach rack',
        'Patchowanie do paneli krosowych, PoP i urządzeń aktywnych',
        'Oznaczanie i przypisanie wszystkich włókien i portów'
      ],
      inlineNote:
        '→ Szczegóły dotyczące pomiarów znajdziesz w sekcji „Pomiary & diagnostyka światłowodów”.'
    },
    {
      title: '4. Pomiary odbiorcze i dokumentacja',
      body:
        'Każdą wykonaną linię mierzymy OTDR, analizujemy tłumienność oraz przygotowujemy czytelne protokoły. Otrzymujesz komplet materiałów potrzebnych do odbioru i eksploatacji.',
      bullets: [
        'Pomiary OTDR dla każdej trasy',
        'Pomiary mocy i tłumienia zgodnie z normą',
        'Cyfrowa dokumentacja projektu i pomiarów'
      ]
    }
  ],

  einsatz: {
    title: 'Gdzie realizujemy budowy światłowodowe?',
    lead:
      'Nasze ekipy pracują wszędzie tam, gdzie potrzebna jest szybka, stabilna i skalowalna infrastruktura światłowodowa.',
    items: [
      {
        title: 'Nowe osiedla i inwestycje deweloperskie',
        body:
          'Kompleksowa infrastruktura — od magistrali po rozdzielnie w budynkach — jako partner dla operatorów, miast i deweloperów.'
      },
      {
        title: 'Mieszkaniówka i modernizacje budynków',
        body:
          'Modernizacja i doposażenie budynków w FTTH/FTTB – w tym piony, przyłącza i rozdzielnie dla obiektów wielorodzinnych.'
      },
      {
        title: 'Firmy, biura i przemysł',
        body:
          'Światłowodowe połączenia dla biurowców, magazynów, zakładów produkcyjnych i centrów danych w całym regionie Rhein-Main.'
      },
      {
        title: 'Firmy IT & podwykonawstwo',
        body:
          'Realizujemy spawanie, pomiary i dokumentację jako podwykonawca w projektach IT, telekomunikacyjnych i deweloperskich.'
      }
    ]
  },

  prozess: {
    title: 'Jak przebiega projekt światłowodowy z smaRTtechnik?',
    steps: [
      {
        title: '1. Konsultacja i analiza stanu',
        body:
          'Omówienie celów, zakresu, dostępnej infrastruktury oraz wymagań dotyczących przepustowości i technologii.'
      },
      {
        title: '2. Projekt & szczegółowa koncepcja',
        body:
          'Przygotowujemy przebieg tras, plany spawów i portów oraz harmonogram realizacji prac wraz z zapotrzebowaniem technicznym.'
      },
      {
        title: '3. Realizacja: układanie, spawanie, patchowanie',
        body:
          'Kable są układane lub wdmuchiwane, włókna spawane, a mufy, rozdzielnie i szafy porządkowane oraz oznaczane — w stałym kontakcie z klientem.'
      },
      {
        title: '4. Pomiary, odbiór i przekazanie dokumentacji',
        body:
          'Po zakończeniu wykonujemy wszystkie pomiary, eliminujemy nieprawidłowości i przekazujemy pełną dokumentację wraz z protokołami.'
      }
    ]
  },

  benefits: {
    title: 'Dlaczego warto wybrać smaRTtechnik przy budowie światłowodów?',
    items: [
      'Lokalny zasięg: działamy w całym regionie Frankfurt / Rhein-Main z szybkim czasem reakcji.',
      'Doświadczeni technicy: specjalizacja w LWL i sieciach LAN — to nasz główny obszar, nie dodatkowa usługa.',
      'Pełna dokumentacja: czytelne protokoły spawów, portów i pomiarów.',
      'Elastyczne modele współpracy: praca bezpośrednio lub jako podwykonawca operatorów, deweloperów i firm IT.',
      'Kompleksowość: możemy połączyć projekt światłowodowy z siecią LAN, Wi-Fi i późniejszym utrzymaniem.'
    ],
    notePrefix: '→ Zobacz także nasze usługi uzupełniające:'
  },

  faq: {
    title: 'FAQ — budowa światłowodów w regionie Frankfurt',
    items: [
      {
        question: 'W jakich regionach realizujecie budowy światłowodów?',
        answer:
          'Głównie w regionie Frankfurt / Rhein-Main — w tym Frankfurt, Offenbach, Hanau, Rodenbach i okolice. Większe projekty możemy obsłużyć również poza regionem.'
      },
      {
        question: 'Czy wykonujecie także pojedyncze usługi, np. samo spawanie lub pomiary?',
        answer:
          'Tak. Wykonujemy zarówno pełne realizacje FTTH/FTTB, jak i pojedyncze usługi — spawanie, wdmuchiwanie, OTDR, dokumentację.'
      },
      {
        question: 'Ile trwa projekt światłowodowy?',
        answer:
          'Pojedynczy budynek – zwykle kilka tygodni. Duże inwestycje osiedlowe lub FTTH – kilka miesięcy wraz z projektem i pomiarami.'
      },
      {
        question: 'Czy zajmujecie się także robotami ziemnymi?',
        answer:
          'Najczęściej współpracujemy z ekipami budowlanymi inwestora. Możemy też polecić sprawdzonych partnerów lub przejąć koordynację prac.'
      },
      {
        question: 'Czy każda linia jest mierzona przed odbiorem?',
        answer:
          'Tak. Wykonujemy pełne OTDR, pomiary mocy i tłumienia oraz przekazujemy dokumentację pomiarową dla każdej trasy.'
      }
    ]
  },

  contact: {
    title: 'Planujesz budowę światłowodu? Skontaktuj się z nami.',
    lead:
      'Realizujesz projekt FTTH/FTTB lub potrzebujesz partnera do spawania i pomiarów? Pomożemy od planowania po odbiór techniczny.',
    cta: 'Zapytaj o wycenę',
    phoneIntro: 'Lub zadzwoń:',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};


export const glasfaserAusbauContent: Record<Locale, GlasfaserContent> = {
  de,
  en,
  pl
};

