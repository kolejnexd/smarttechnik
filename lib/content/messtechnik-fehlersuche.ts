import { Locale } from '../i18n';

type MesstechnikContent = {
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
  fehlersuche: {
    title: string;
    items: { title: string; body: string }[];
    note: string;
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

const de: MesstechnikContent = {
  hero: {
    title: 'Messtechnik & Fehlersuche für Glasfasernetze in Frankfurt',
    bodyPrefix: 'Mit',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'erhalten Sie präzise Messtechnik und schnelle Fehlersuche für Glasfaser- und Datennetze im Rhein-Main-Gebiet. Wir messen neue und bestehende Strecken, erstellen Messprotokolle und lokalisieren Störungen zuverlässig.',
    bullets: [
      'OTDR-, Leistungs- & Dämpfungsmessungen (LWL)',
      'Abnahmemessungen für FTTH-, FTTB- und Backbone-Strecken',
      'Fehlersuche bei Störungen & Leitungsunterbrechungen',
      'Saubere Messprotokolle & Dokumentation für Ihre Abnahme'
    ],
    ctaPrimary: 'Messung oder Fehlersuche anfragen',
    ctaSecondary: 'Mehr zu Glasfaser-Ausbau'
  },
  warum: {
    title: 'Warum professionelle Messtechnik entscheidend ist',
    paragraphs: [
      'Ob Neubau oder Bestandsnetz: Ohne aussagekräftige Messwerte lässt sich die Qualität eines Glasfasernetzes nur schwer beurteilen. Mit modernen Messgeräten erkennen wir Dämpfungsspitzen, Reflexionen, Faserbrüche und schlecht gespleißte Verbindungen – bevor sie im Betrieb zu Ausfällen führen.',
      'Unsere Messprotokolle bilden die Grundlage für Abnahme, Betrieb und spätere Erweiterungen. Sie schaffen Transparenz gegenüber Auftraggebern, Mietern, Kunden und internen Stakeholdern.'
    ]
  },
  leistungen: {
    title: 'Unsere Leistungen in der Messtechnik',
    items: [
      {
        title: 'OTDR-Messungen (Zeitbereichsreflektometrie)',
        body:
          'Mit OTDR-Messungen machen wir Ereignisse entlang der Glasfaser sichtbar: Spleiße, Steckverbindungen, Muffen, Dämpfungsspitzen und Brüche. So erkennen Sie auf einen Blick, wie Ihre Strecken aufgebaut sind.',
        bullets: [
          'OTDR-Messungen für Neu- und Bestandsstrecken',
          'Auswertung von Ereignissen und Dämpfungswerten',
          'Dokumentation je Faser / Strecke'
        ]
      },
      {
        title: 'Leistungs- & Dämpfungsmessungen',
        body:
          'Leistungs- und Dämpfungsmessungen zeigen, ob Ihre Glasfaserverbindungen die geforderten Grenzwerte einhalten – ein wichtiger Baustein für Abnahmeprotokolle und SLA-Nachweise.',
        bullets: [
          'Ein- und ausgangsseitige Leistungs- und Dämpfungsmessungen',
          'Messungen gemäß Ihren Vorgaben oder Normen',
          'Übersichtliche Messprotokolle zur Weitergabe'
        ]
      },
      {
        title: 'Abnahmemessungen & Dokumentation',
        body:
          'Nach Neubau oder Umbau von Glasfasernetzen führen wir komplette Abnahmemessungen durch und erstellen verständliche Dokumentationen für Auftraggeber und Betreiber.',
        bullets: [
          'Abnahmemessungen für FTTH-, FTTB- und Backbone-Strecken',
          'Dokumentation in digitaler Form (PDF/Tabellen)',
          'Vergleich mit Sollwerten und Vorgaben'
        ]
      },
      {
        title: 'Regelmäßige Überprüfung von Bestandsnetzen',
        body:
          'Auch bestehende Netze sollten regelmäßig überprüft werden – etwa bei steigender Auslastung, neuen Services oder nach Umbauten. Wir messen, dokumentieren und empfehlen bei Bedarf Optimierungen.',
        bullets: [
          'Stichproben- oder Vollmessungen von Bestandsstrecken',
          'Bewertung von Reserven und kritischen Segmenten',
          'Empfehlungen für Instandhaltung und Ausbau'
        ]
      }
    ],
    note: '→ Informationen zum Aufbau neuer Strecken finden Sie unter Glasfaser-Ausbau.'
  },
  fehlersuche: {
    title: 'Fehlersuche in Glasfasernetzen & Datennetzen',
    items: [
      {
        title: 'Lokalisierung von Faserbrüchen & Leitungsunterbrechungen',
        body:
          'Mit OTDR- und weiteren Messverfahren bestimmen wir den Ort von Faserbrüchen, gequetschten Kabeln oder beschädigten Muffen – damit Tiefbau oder Instandsetzung gezielt stattfinden kann.'
      },
      {
        title: 'Analyse von hohen Dämpfungswerten',
        body:
          'Wir identifizieren, ob erhöhte Dämpfung durch schlechte Spleiße, minderwertige Steckverbindungen oder mechanische Beschädigung verursacht wird – und schlagen konkrete Maßnahmen vor.'
      },
      {
        title: 'Prüfung von Spleiß- und Patchbereichen',
        body:
          'In Verteilerschränken, PoPs und Racks prüfen wir Spleiße, Patches und Beschriftung, um Fehlverdrahtungen und Zuordnungsprobleme auszuschließen.'
      },
      {
        title: 'Unterstützung für IT-Dienstleister & Betreiber',
        body:
          'Wir arbeiten eng mit Ihren IT-Dienstleistern, Systemhäusern oder internen Teams zusammen und liefern die messtechnische Grundlage für weitere Analysen.'
      }
    ],
    note: '→ Für laufende Betreuung Ihrer Netze empfehlen wir unsere Seite Service & Wartung.'
  },
  einsatz: {
    title: 'Typische Einsatzszenarien für Messtechnik & Fehlersuche',
    items: [
      {
        title: 'Abnahme neu gebauter Glasfasernetze',
        body:
          'Messungen und Dokumentation nach Abschluss von FTTH-/FTTB- oder Backbone-Projekten – auch wenn der Ausbau von anderen Firmen umgesetzt wurde.'
      },
      {
        title: 'Störungen in Bestandsnetzen',
        body:
          'Wiederkehrende Ausfälle, unerklärliche Performance-Probleme oder komplette Leitungsabbrüche in Unternehmens- oder Carrier-Netzen.'
      },
      {
        title: 'Netzübernahme & Betreiberwechsel',
        body:
          'Messkampagnen vor der Übernahme von Netzen durch neue Betreiber, Stadtwerke oder Wohnungsbaugesellschaften.'
      },
      {
        title: 'Umbauten & Erweiterungen',
        body:
          'Sicherstellen, dass nach Umbauten und Erweiterungen alle Strecken weiterhin innerhalb der geforderten Grenzwerte liegen.'
      }
    ]
  },
  prozess: {
    title: 'So läuft eine Messkampagne mit smaRTtechnik ab',
    steps: [
      {
        title: '1. Zieldefinition & Scope',
        body:
          'Gemeinsam legen wir fest, welche Strecken, Standorte und Faserpaare gemessen werden sollen und welche Vorgaben (z.B. Grenzwerte, Normen) gelten.'
      },
      {
        title: '2. Vorbereitung & Messkonzept',
        body:
          'Wir erstellen ein Messkonzept, stimmen Messpunkte ab und planen ggf. Zugang zu Schächten, Schächten, Racks und Technikräumen.'
      },
      {
        title: '3. Durchführung der Messungen',
        body:
          'Vor Ort führen wir OTDR-, Leistungs- und Dämpfungsmessungen durch, dokumentieren Ergebnisse und halten Auffälligkeiten fest.'
      },
      {
        title: '4. Auswertung & Dokumentation',
        body:
          'Nach der Messung werten wir Daten aus, bereiten sie verständlich auf und stellen Messprotokolle sowie Zusammenfassungen für technische und nicht-technische Ansprechpartner bereit.'
      }
    ]
  },
  benefits: {
    title: 'Ihre Vorteile mit smaRTtechnik in Messtechnik & Fehlersuche',
    items: [
      'Moderne Messgeräte: OTDR-, Leistungs- und Dämpfungsmessungen mit aktuellen Geräten.',
      'Erfahrene Techniker: Praxis- und baustellenerprobtes Team mit Glasfaser-Fokus.',
      'Transparente Protokolle: Messprotokolle, die sowohl Techniker als auch Entscheider verstehen.',
      'Regionale Nähe: Schnelle Verfügbarkeit im Großraum Frankfurt / Rhein-Main.',
      'Nahtlose Integration: Ideale Ergänzung zu unseren Leistungen im Glasfaser-Ausbau und in der Netzwerktechnik.'
    ],
    note:
      '→ Ergänzende Leistungen finden Sie unter Glasfaser-Ausbau und Netzwerktechnik & WLAN.'
  },
  faq: {
    title: 'FAQ zu Messtechnik & Fehlersuche',
    items: [
      {
        question: 'In welchen Regionen bieten Sie Messtechnik & Fehlersuche an?',
        answer:
          'Wir sind im gesamten Rhein-Main-Gebiet tätig – mit Schwerpunkt Frankfurt am Main und Umgebung, zum Beispiel Offenbach, Hanau, Rodenbach und angrenzende Landkreise.'
      },
      {
        question: 'Messen Sie nur Glasfaser oder auch Kupferleitungen?',
        answer:
          'Unser Schwerpunkt liegt auf Messtechnik und Fehlersuche in Glasfasernetzen (LWL). In Projekten mit gemischten Infrastrukturen arbeiten wir eng mit Ihren IT-Partnern zusammen, die Kupferstrecken betreuen.'
      },
      {
        question: 'Können Sie auch Netze messen, die nicht von Ihnen gebaut wurden?',
        answer:
          'Ja. Wir führen Messkampagnen und Fehlersuche auch in Netzen durch, die von anderen Firmen aufgebaut wurden – etwa zur Abnahme, bei Betreiberwechseln oder im Rahmen von Qualitätsprüfungen.'
      },
      {
        question: 'Wie schnell können Sie bei einer Störung vor Ort sein?',
        answer:
          'Das hängt von Auslastung und Standort ab. Im Rhein-Main-Gebiet erreichen wir viele Einsatzorte kurzfristig. Für kritische Infrastrukturen empfehlen wir einen Servicevertrag mit definierten Reaktionszeiten.'
      },
      {
        question: 'Erhalte ich alle Messergebnisse in digitaler Form?',
        answer:
          'Ja. Sie erhalten Messprotokolle und Auswertungen in digitaler Form (z.B. PDF, Tabellen), die Sie in Ihre Dokumentation oder Ticket-Systeme übernehmen können.'
      }
    ]
  },
  contact: {
    title: 'Messung oder Fehlersuche geplant? Wir unterstützen Sie.',
    lead:
      'Sie möchten ein Glasfasernetz abnehmen, bestehende Strecken überprüfen oder eine akute Störung lokalisieren lassen? Wir stehen Ihnen im Raum Frankfurt / Rhein-Main kurzfristig zur Verfügung.',
    cta: 'Jetzt unverbindlich anfragen',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};

const en: MesstechnikContent = {
  hero: {
    title: 'Fiber Optic Testing & Fault Detection in Frankfurt / Rhein-Main',
    bodyPrefix: 'With',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'you receive precise fiber optic measurements and fast fault diagnostics for data and fiber networks across the Rhein-Main region. We test new and existing routes, create clear measurement reports and accurately locate network issues.',
    bullets: [
      'OTDR, power & loss testing (fiber optic LWL)',
      'Acceptance testing for FTTH, FTTB & backbone routes',
      'Fault detection for outages & line interruptions',
      'Clean measurement reports & documentation for handover'
    ],
    ctaPrimary: 'Request testing or fault diagnostics',
    ctaSecondary: 'More about Fiber Deployment'
  },

  warum: {
    title: 'Why professional measurement matters',
    paragraphs: [
      'Whether your network is new or has been in operation for years, reliable fiber quality cannot be assessed without proper measurements. Modern tools detect reflection peaks, high loss values, micro-bends, damaged fibers and poor splices—before they cause outages or performance issues.',
      'Our measurement reports provide a dependable basis for acceptance, operation and future expansion. They ensure technical transparency for utilities, operators, property managers, tenants and internal stakeholders.'
    ]
  },

  leistungen: {
    title: 'Our fiber measurement services',
    items: [
      {
        title: 'OTDR Testing (Optical Time Domain Reflectometry)',
        body:
          'OTDR tests make events along the fiber visible—splices, connectors, closures, loss peaks and breaks. This gives you a clear picture of how your fiber route is structured.',
        bullets: [
          'OTDR testing for new and existing routes',
          'Event and loss value analysis',
          'Documentation for each fiber and route'
        ]
      },
      {
        title: 'Power & Loss Measurements',
        body:
          'Power and attenuation measurements show whether your fiber connections meet required thresholds—essential for acceptance reports and SLA validation.',
        bullets: [
          'Input and output power / loss measurements',
          'Testing based on your specifications or relevant standards',
          'Clear, transferable reports for handover'
        ]
      },
      {
        title: 'Acceptance Testing & Documentation',
        body:
          'After construction or modification of fiber networks, we perform full acceptance measurements and prepare understandable documentation for clients and operators.',
        bullets: [
          'Acceptance tests for FTTH, FTTB and backbone routes',
          'Digital documentation (PDF / spreadsheets)',
          'Comparison with required target values and thresholds'
        ]
      },
      {
        title: 'Periodic Testing of Existing Networks',
        body:
          'Existing networks should be tested regularly—especially when load increases, new services are introduced or changes are made. We locate weak points and provide actionable improvements.',
        bullets: [
          'Spot checks or full measurement campaigns',
          'Assessment of reserves and critical segments',
          'Recommendations for maintenance and upgrades'
        ]
      }
    ],
    note: '→ Information about new fiber construction can be found under Fiber Deployment.'
  },

  fehlersuche: {
    title: 'Fault detection in fiber & data networks',
    items: [
      {
        title: 'Locating fiber breaks & line interruptions',
        body:
          'Using OTDR and complementary measurement techniques, we pinpoint the exact location of fiber breaks, crushed cables or damaged splices—allowing targeted excavation or repair.'
      },
      {
        title: 'Analysis of high loss values',
        body:
          'We determine whether excessive loss is caused by poor splicing, low-quality connectors, mechanical damage or incorrect cable installation—and recommend corrective action.'
      },
      {
        title: 'Inspection of splice & patch areas',
        body:
          'In distribution cabinets, PoPs and racks we check splice quality, patch management and labeling to eliminate mis-patching and identification errors.'
      },
      {
        title: 'Support for IT service providers & operators',
        body:
          'We work closely with your IT provider, system integrator or internal IT team and deliver the measurement basis required for further troubleshooting or planning.'
      }
    ],
    note: '→ For ongoing network support, see our Service & Maintenance section.'
  },

  einsatz: {
    title: 'Typical use cases for measurement & fault detection',
    items: [
      {
        title: 'Acceptance of newly built fiber networks',
        body:
          'Measurement and documentation after FTTH/FTTB or backbone construction—also when the network was built by another contractor.'
      },
      {
        title: 'Faults in existing networks',
        body:
          'Recurring outages, unexplained performance problems or full line interruptions in enterprise or operator networks.'
      },
      {
        title: 'Network takeover & operator changes',
        body:
          'Measurement campaigns before networks are transferred to new operators, utilities or housing companies.'
      },
      {
        title: 'Modifications & expansions',
        body:
          'Ensuring all routes remain within required technical thresholds after network extensions or restructuring.'
      }
    ]
  },

  prozess: {
    title: 'How a measurement campaign with smaRTtechnik works',
    steps: [
      {
        title: '1. Defining objectives & scope',
        body:
          'Together we determine which routes, locations and fiber pairs should be measured, and which standards or threshold values apply.'
      },
      {
        title: '2. Preparation & measurement concept',
        body:
          'We prepare a measurement concept, coordinate measurement points and arrange access to manholes, closures, racks and technical rooms.'
      },
      {
        title: '3. On-site measurement execution',
        body:
          'We perform OTDR, power and loss measurements on site, document all results and record any anomalies.'
      },
      {
        title: '4. Evaluation & documentation',
        body:
          'After testing, we analyze the data and prepare clear measurement reports and summaries for both technical teams and decision-makers.'
      }
    ]
  },

  benefits: {
    title: 'Your advantages with smaRTtechnik in measurement & diagnostics',
    items: [
      'Modern equipment: OTDR, power and loss testing with up-to-date instruments.',
      'Experienced technicians: field-proven team specialized in fiber optics.',
      'Transparent reports: documentation that both technicians and managers can easily understand.',
      'Regional presence: fast availability across Frankfurt / Rhein-Main.',
      'Seamless integration: ideal complement to our Fiber Deployment and Network Technology services.'
    ],
    note:
      '→ Additional services available under Fiber Deployment and Network Technology & Wi-Fi.'
  },

  faq: {
    title: 'FAQ – Fiber Measurement & Fault Detection',
    items: [
      {
        question: 'Which regions do you cover for measurement & diagnostics?',
        answer:
          'We operate across the entire Rhein-Main region, with a strong focus on Frankfurt am Main, including Offenbach, Hanau, Rodenbach and surrounding districts.'
      },
      {
        question: 'Do you test only fiber optic networks or also copper?',
        answer:
          'Our core focus is fiber optic measurement (LWL). In mixed infrastructures, we collaborate with your IT partners for copper cable sections.'
      },
      {
        question: 'Can you measure networks built by other companies?',
        answer:
          'Yes. We perform measurement campaigns and troubleshooting on networks built by any contractor—for acceptance testing, operator changes or quality audits.'
      },
      {
        question: 'How quickly can you arrive in case of a fault?',
        answer:
          'This depends on workload and location. In the Rhein-Main region we can often arrive quickly. For critical infrastructure, we recommend a service contract with defined response times.'
      },
      {
        question: 'Will I receive all measurement results in digital form?',
        answer:
          'Yes. You receive complete digital reports (PDF, spreadsheets) ready for integration into your documentation or ticketing systems.'
      }
    ]
  },

  contact: {
    title: 'Need fiber testing or diagnostics? Get in touch.',
    lead:
      'Whether you need network acceptance, routine verification or fast fault detection—our team is available across Frankfurt / Rhein-Main on short notice.',
    cta: 'Request a quote',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};

const pl: MesstechnikContent = {
  hero: {
    title: 'Pomiary i diagnostyka światłowodów – Frankfurt / Rhein-Main',
    bodyPrefix: 'Z',
    brand: 'smaRTtechnik Lebek & Stawczyk GbR',
    bodySuffix:
      'otrzymasz precyzyjne pomiary oraz szybką diagnostykę usterek w sieciach światłowodowych i danych w regionie Rhein-Main. Mierzymy nowe i istniejące trasy, przygotowujemy raporty pomiarowe i lokalizujemy problemy w sieci.',
    bullets: [
      'Pomiary OTDR, mocy i tłumienności (LWL)',
      'Pomiary odbiorcze dla tras FTTH, FTTB i backbone',
      'Diagnostyka usterek i przerw w torach światłowodowych',
      'Czytelne protokoły pomiarowe i dokumentacja do odbioru'
    ],
    ctaPrimary: 'Zleć pomiary lub diagnostykę',
    ctaSecondary: 'Więcej o budowie światłowodów'
  },

  warum: {
    title: 'Dlaczego profesjonalne pomiary są tak ważne?',
    paragraphs: [
      'Niezależnie od tego, czy sieć jest nowa, czy istnieje od lat – bez rzetelnych pomiarów trudno ocenić faktyczną jakość torów światłowodowych. Nowoczesne mierniki pozwalają wykryć podwyższone tłumienie, odbicia, mikropęknięcia włókien oraz złe spawy – zanim w codziennej pracy zaczną powodować awarie.',
      'Protokoły z pomiarów są podstawą odbioru technicznego, dalszej eksploatacji i przyszłej rozbudowy sieci. Zapewniają przejrzystość wobec inwestorów, najemców, klientów i wewnętrznych interesariuszy.'
    ]
  },

  leistungen: {
    title: 'Nasze usługi w zakresie pomiarów światłowodów',
    items: [
      {
        title: 'Pomiary OTDR (reflektometria w dziedzinie czasu)',
        body:
          'Pomiary OTDR pokazują, co dokładnie dzieje się na trasie światłowodu: spawy, złącza, mufy, miejsca o podwyższonym tłumieniu oraz przerwy. Dzięki temu od razu widać, jak faktycznie zbudowana jest linia.',
        bullets: [
          'Pomiary OTDR dla nowych i istniejących tras',
          'Analiza zdarzeń i wartości tłumienia',
          'Dokumentacja dla każdej włókna / trasy'
        ]
      },
      {
        title: 'Pomiary mocy i tłumienności',
        body:
          'Pomiary mocy i tłumienności pokazują, czy połączenia spełniają wymagane parametry – to kluczowy element protokołów odbiorczych i potwierdzenia SLA.',
        bullets: [
          'Pomiary wejściowe i wyjściowe mocy / tłumienia',
          'Pomiary według obowiązujących norm lub wytycznych klienta',
          'Przejrzyste raporty do przekazania dalej'
        ]
      },
      {
        title: 'Pomiary odbiorcze & dokumentacja',
        body:
          'Po budowie lub przebudowie sieci światłowodowej wykonujemy komplet pomiarów odbiorczych i przygotowujemy zrozumiałą dokumentację dla inwestora oraz operatora.',
        bullets: [
          'Pomiary odbiorcze dla tras FTTH, FTTB i backbone',
          'Dokumentacja w formie cyfrowej (PDF / zestawienia)',
          'Porównanie z wartościami granicznymi i wymaganiami'
        ]
      },
      {
        title: 'Okresowa kontrola istniejących sieci',
        body:
          'Także działające od lat sieci warto regularnie sprawdzać – np. przy rosnącym obciążeniu, wdrażaniu nowych usług lub po przebudowach. Wykrywamy słabe punkty i sugerujemy działania naprawcze.',
        bullets: [
          'Pomiary wyrywkowe lub pełne kampanie pomiarowe',
          'Ocena rezerw i krytycznych odcinków sieci',
          'Rekomendacje dotyczące utrzymania i rozbudowy'
        ]
      }
    ],
    note: '→ Informacje o budowie nowych tras znajdziesz w sekcji „Budowa światłowodów”.'
  },

  fehlersuche: {
    title: 'Diagnostyka usterek w sieciach światłowodowych i danych',
    items: [
      {
        title: 'Lokalizacja przerw i uszkodzeń włókien',
        body:
          'Za pomocą OTDR i innych metod pomiarowych określamy miejsce przerwania włókien, zgnieceń kabli lub uszkodzeń muf – tak, aby prace ziemne lub naprawcze były precyzyjnie ukierunkowane.'
      },
      {
        title: 'Analiza podwyższonego tłumienia',
        body:
          'Sprawdzamy, czy zbyt duże tłumienie wynika ze złych spawów, słabej jakości złączy, uszkodzeń mechanicznych czy niewłaściwego ułożenia kabla – i proponujemy konkretne działania.'
      },
      {
        title: 'Kontrola obszarów spawów i patchowania',
        body:
          'W szafach dystrybucyjnych, PoP-ach i rackach weryfikujemy jakość spawów, uporządkowanie patchcordów i oznaczenia, aby wykluczyć pomyłki okablowania i problemy z identyfikacją portów.'
      },
      {
        title: 'Wsparcie dla firm IT i operatorów',
        body:
          'Ściśle współpracujemy z Twoimi dostawcami IT, system integratorami i działami wewnętrznymi, dostarczając bazę pomiarową do dalszej analizy i planowania.'
      }
    ],
    note: '→ Dla stałej opieki nad siecią zobacz sekcję „Serwis & utrzymanie”.'
  },

  einsatz: {
    title: 'Typowe zastosowania pomiarów i diagnostyki',
    items: [
      {
        title: 'Odbiór nowych sieci światłowodowych',
        body:
          'Pomiary i dokumentacja po zakończeniu projektów FTTH, FTTB lub backbone – także wtedy, gdy sieć zbudowała inna firma.'
      },
      {
        title: 'Awarie w istniejących sieciach',
        body:
          'Powtarzające się przerwy, niewyjaśnione spadki wydajności lub całkowite zerwania torów w sieciach firmowych i operatorskich.'
      },
      {
        title: 'Przejęcie sieci & zmiana operatora',
        body:
          'Kampanie pomiarowe przed przejęciem sieci przez nowego operatora, zakład komunalny lub spółdzielnię / zarządcę nieruchomości.'
      },
      {
        title: 'Przebudowy i rozbudowy sieci',
        body:
          'Weryfikacja, czy po zmianach i rozszerzeniach wszystkie trasy nadal mieszczą się w wymaganych parametrach.'
      }
    ]
  },

  prozess: {
    title: 'Jak wygląda kampania pomiarowa z smaRTtechnik?',
    steps: [
      {
        title: '1. Określenie celu i zakresu',
        body:
          'Wspólnie ustalamy, które trasy, lokalizacje i pary włókien mają zostać objęte pomiarami oraz jakie normy i wartości graniczne obowiązują.'
      },
      {
        title: '2. Przygotowanie i plan pomiarów',
        body:
          'Przygotowujemy koncepcję pomiarów, uzgadniamy punkty pomiarowe oraz dostęp do studni, szaf, racków i pomieszczeń technicznych.'
      },
      {
        title: '3. Wykonanie pomiarów w terenie',
        body:
          'Na miejscu wykonujemy pomiary OTDR, mocy i tłumienności, zapisujemy wyniki oraz odnotowujemy wszystkie nieprawidłowości.'
      },
      {
        title: '4. Analiza wyników i dokumentacja',
        body:
          'Po pomiarach opracowujemy wyniki, przygotowujemy protokoły i czytelne podsumowania – zarówno dla zespołów technicznych, jak i osób decyzyjnych.'
      }
    ]
  },

  benefits: {
    title: 'Korzyści ze współpracy ze smaRTtechnik w zakresie pomiarów',
    items: [
      'Nowoczesny sprzęt: pomiary OTDR, mocy i tłumienności wykonywane aktualnymi miernikami.',
      'Doświadczeni technicy: zespół z praktyką na budowach i w działających sieciach.',
      'Przejrzyste raporty: protokoły zrozumiałe dla inżynierów i menedżerów.',
      'Lokalny zasięg: szybka dostępność w regionie Frankfurt / Rhein-Main.',
      'Pełna kompatybilność: idealne uzupełnienie naszych usług w zakresie budowy światłowodów i sieci LAN/Wi-Fi.'
    ],
    note:
      '→ Powiązane usługi znajdziesz w sekcjach „Budowa światłowodów” oraz „Sieci LAN & Wi-Fi”.'
  },

  faq: {
    title: 'FAQ – Pomiary i diagnostyka światłowodów',
    items: [
      {
        question: 'W jakim regionie oferujecie pomiary i diagnostykę?',
        answer:
          'Działamy w całym regionie Rhein-Main, ze szczególnym naciskiem na Frankfurt nad Menem i okolice – m.in. Offenbach, Hanau, Rodenbach i sąsiednie powiaty.'
      },
      {
        question: 'Czy mierzycie tylko światłowody, czy również miedź?',
        answer:
          'Naszą specjalnością są pomiary i diagnostyka w sieciach światłowodowych (LWL). W projektach z infrastrukturą mieszaną współpracujemy z partnerami IT odpowiedzialnymi za odcinki miedziane.'
      },
      {
        question: 'Czy możecie wykonać pomiary w sieciach zbudowanych przez inne firmy?',
        answer:
          'Tak. Realizujemy kampanie pomiarowe i diagnostykę również w sieciach zbudowanych przez innych wykonawców – np. przy odbiorach, zmianie operatora lub audytach jakości.'
      },
      {
        question: 'Jak szybko możecie przyjechać w przypadku awarii?',
        answer:
          'To zależy od obciążenia i lokalizacji. W regionie Rhein-Main często możemy być na miejscu w krótkim czasie. Dla infrastruktury krytycznej polecamy umowę serwisową z gwarantowanymi czasami reakcji.'
      },
      {
        question: 'Czy otrzymam wyniki pomiarów w formie cyfrowej?',
        answer:
          'Tak. Przekazujemy kompletne protokoły i zestawienia w formie cyfrowej (np. PDF, arkusze), gotowe do włączenia w dokumentację lub systemy ticketowe.'
      }
    ]
  },

  contact: {
    title: 'Potrzebujesz pomiarów lub diagnostyki? Skontaktuj się z nami.',
    lead:
      'Planujesz odbiór sieci światłowodowej, chcesz sprawdzić istniejące trasy lub zlokalizować usterkę? W regionie Frankfurt / Rhein-Main możemy pomóc w krótkim terminie.',
    cta: 'Zapytaj o wycenę',
    phones: ['+49 157 31685721', '+49 157 82854321'],
    email: 'info@smarttechnik.eu'
  }
};


export const messtechnikFehlersucheContent: Record<Locale, MesstechnikContent> = {
  de,
  en,
  pl
};

