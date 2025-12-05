import { Locale } from '../i18n';

type FaqItem = { question: string; answer: string };

type FaqContent = {
  heroTitle: string;
  heroIntro: string;
  heroIntro2: string;
  primaryCta: string;
  secondaryCta: string;
  sections: Array<{ id: string; title: string; items: FaqItem[] }>;
  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;
};

const de: FaqContent = {
  heroTitle: 'FAQ – Häufige Fragen zu unseren Leistungen',
  heroIntro:
    'In unseren FAQ beantworten wir häufige Fragen zu Glasfaser-Ausbau, Netzwerktechnik & WLAN, Messtechnik, Service & Wartung sowie zur Zusammenarbeit mit smaRTtechnik Lebek & Stawczyk GbR im Raum Frankfurt / Rhein-Main.',
  heroIntro2:
    'Wenn Ihre Frage hier nicht beantwortet wird, schreiben Sie uns einfach eine kurze Nachricht oder rufen Sie an – wir helfen Ihnen gerne persönlich weiter.',
  primaryCta: 'Frage direkt stellen',
  secondaryCta: 'Zu unseren Leistungen',
  sections: [
    {
      id: 'allgemein',
      title: 'Allgemeine Fragen',
      items: [
        {
          question: 'In welchen Regionen sind Sie tätig?',
          answer:
            'Unser Schwerpunkt liegt im Rhein-Main-Gebiet mit Fokus auf Frankfurt am Main und Umgebung – zum Beispiel Offenbach, Hanau, Rodenbach und angrenzende Landkreise. Größere Projekte begleiten wir nach Absprache auch darüber hinaus.'
        },
        {
          question: 'Arbeiten Sie nur für große Kunden oder auch für kleinere Unternehmen?',
          answer:
            'Wir betreuen sowohl Stadtwerke und Netzbetreiber als auch Wohnungsbaugesellschaften, mittelständische Unternehmen, Logistiker, Industrie und kleinere Dienstleister. Entscheidend ist weniger die Größe, sondern ein klar definiertes Projekt.'
        },
        {
          question: 'Mit welchen Gewerken und Partnern arbeiten Sie zusammen?',
          answer:
            'Wir sind auf Glasfaser-, Netzwerktechnik-, WLAN- und Messtechnik-Leistungen spezialisiert und arbeiten je nach Projekt mit Tiefbauunternehmen, IT-Dienstleistern, Systemhäusern und Elektrikern zusammen. Gerne binden wir Ihre bestehenden Partner ein.'
        },
        {
          question: 'Übernehmen Sie auch Projekte, die von anderen Firmen begonnen wurden?',
          answer:
            'Ja, in vielen Fällen können wir bestehende Projekte übernehmen oder ergänzen – etwa für Spleißarbeiten, Messtechnik, Dokumentation oder Service & Wartung. Wichtig ist eine sorgfältige Bestandsaufnahme zu Beginn.'
        },
        {
          question: 'In welchen Sprachen ist die Kommunikation möglich?',
          answer:
            'Wir kommunizieren mit unseren Kunden in der Regel auf Deutsch, bei Bedarf auch auf Englisch oder Polnisch.'
        }
      ]
    },
    {
      id: 'glasfaser',
      title: 'Fragen zum Glasfaser-Ausbau',
      items: [
        {
          question: 'Was ist der Unterschied zwischen FTTH und FTTB?',
          answer:
            'Bei FTTH (Fiber to the Home) wird die Glasfaser bis in die einzelne Wohneinheit geführt. Bei FTTB (Fiber to the Building) endet die Glasfaser am Hausübergabepunkt, die letzten Meter werden meist über Kupfer realisiert. Welche Variante sinnvoll ist, hängt vom Gebäude und den Anforderungen ab.'
        },
        {
          question: 'Übernehmen Sie auch nur Spleißarbeiten oder Einblasen von Kabeln?',
          answer:
            'Ja. Wir können sowohl komplette Glasfaser-Ausbauprojekte als auch einzelne Leistungen wie Spleißen, Einblasen oder Abnahmemessungen als externer Dienstleister übernehmen – etwa für Stadtwerke, Netzbetreiber oder IT-Dienstleister.'
        },
        {
          question: 'Wie lange dauert ein typisches Glasfaserprojekt?',
          answer:
            'Das hängt stark von Umfang, Genehmigungen und Tiefbau ab. Ein einzelnes Gebäude lässt sich oft innerhalb weniger Wochen realisieren, größere Quartiers- oder FTTH-Projekte benötigen mehrere Monate inklusive Planungsphase.'
        },
        {
          question: 'Können Sie auch vorhandene Leerrohre und Infrastruktur nutzen?',
          answer:
            'Ja, wenn Leerrohre, Schächte oder Steigleitungen bereits vorhanden sind, prüfen wir, ob und wie sie genutzt werden können – etwa für das Einblasen von Mikrokabeln oder das Nachrüsten von Glasfaserstrecken.'
        }
      ]
    },
    {
      id: 'netzwerk',
      title: 'Fragen zu Netzwerktechnik & WLAN',
      items: [
        {
          question: 'Planen und installieren Sie nur die Verkabelung oder auch aktive Komponenten?',
          answer:
            'Unser Schwerpunkt liegt auf der strukturierten Verkabelung, Netzwerkschränken und der Integration aktiver Komponenten. Auf Wunsch unterstützen wir auch bei der Beschaffung und Grundkonfiguration von Switches, Firewalls und Access Points – in Abstimmung mit Ihrem IT-Dienstleister oder internen IT-Team.'
        },
        {
          question: 'Übernehmen Sie auch WLAN-Ausleuchtungen in bestehenden Gebäuden?',
          answer:
            'Ja. Wir messen die WLAN-Abdeckung in Bestandsgebäuden, identifizieren Funklöcher und empfehlen Standorte für Access Points. Anschließend begleiten wir die Umsetzung und nehmen das WLAN in Betrieb.'
        },
        {
          question: 'Können Sie bestehende Netzwerkschränke aufräumen und dokumentieren?',
          answer:
            'Ja. Wir strukturieren Racks, ordnen Patchfelder, beschriften Leitungen und erstellen übersichtliche Portlisten. So schaffen wir eine Basis, auf der Ihre IT schneller arbeiten kann.'
        },
        {
          question: 'Ist ein Betrieb während der Arbeiten möglich?',
          answer:
            'In vielen Fällen lassen sich Arbeiten so planen, dass der laufende Betrieb kaum beeinträchtigt wird – etwa durch Arbeiten außerhalb der Hauptarbeitszeiten oder in klar abgegrenzten Teilbereichen. Details klären wir im Rahmen der Projektplanung.'
        }
      ]
    },
    {
      id: 'messtechnik',
      title: 'Fragen zu Messtechnik & Fehlersuche',
      items: [
        {
          question: 'Messen Sie auch Netze, die nicht von Ihnen gebaut wurden?',
          answer:
            'Ja. Wir führen OTDR-, Leistungs- und Dämpfungsmessungen sowie Fehlersuche auch in Netzen durch, die von anderen Firmen aufgebaut wurden – etwa zur Abnahme, bei Betreiberwechseln oder bei wiederkehrenden Störungen.'
        },
        {
          question: 'Wie schnell können Sie bei einer Störung vor Ort sein?',
          answer:
            'Das hängt von Auslastung und Standort ab. Im Rhein-Main-Gebiet erreichen wir viele Einsatzorte kurzfristig. Für kritische Infrastrukturen empfehlen wir einen Servicevertrag mit klar definierten Reaktionszeiten.'
        },
        {
          question: 'Erhalte ich alle Messergebnisse in digitaler Form?',
          answer:
            'Ja. Sie erhalten Messprotokolle und Auswertungen in digitaler Form, zum Beispiel als PDF und Tabellen, die Sie in Ihre Dokumentation oder Ticket-Systeme übernehmen können.'
        },
        {
          question: 'Können Sie die Ursachen von hohen Dämpfungswerten identifizieren?',
          answer:
            'In vielen Fällen ja. Anhand von Messwerten und Sichtprüfungen erkennen wir häufig, ob die Ursache in schlechten Spleißen, Steckverbindern, mechanischen Beschädigungen oder falsch verlegten Kabeln liegt und empfehlen entsprechende Maßnahmen.'
        }
      ]
    },
    {
      id: 'service',
      title: 'Fragen zu Service & Wartung',
      items: [
        {
          question: 'Bieten Sie Serviceverträge an?',
          answer:
            'Ja. Wir bieten flexible Servicemodelle – von einfachen jährlichen Prüfungen bis zu umfangreichen Serviceverträgen mit definierten Reaktionszeiten und optionaler 24/7-Bereitschaft für kritische Infrastrukturen.'
        },
        {
          question: 'Müssen Netze von Ihnen gebaut sein, um einen Servicevertrag abzuschließen?',
          answer:
            'Nein. Wichtig ist, dass wir zu Beginn eine solide Bestandsaufnahme und ggf. initiale Messungen durchführen können, um den Zustand der Infrastruktur zu bewerten und die passenden Leistungen zu definieren.'
        },
        {
          question: 'Wie erfolgt die Abrechnung für Service & Wartung?',
          answer:
            'Je nach Modell erfolgt die Abrechnung pauschal (zum Beispiel monatlich) oder kombiniert mit aufwandsbasierten Positionen für zusätzliche Einsätze. Das passende Modell legen wir gemeinsam mit Ihnen fest.'
        },
        {
          question: 'Können bestehende IT-Dienstleister eingebunden werden?',
          answer:
            'Ja. Wir sehen uns als Ergänzung zu Systemhäusern und internen IT-Teams und kümmern uns insbesondere um die physische Ebene (Glasfaser, Verkabelung, Racks, Messtechnik).'
        }
      ]
    },
    {
      id: 'angebote',
      title: 'Fragen zu Angebot, Preisen & Projektablauf',
      items: [
        {
          question: 'Wie erhalte ich ein Angebot?',
          answer:
            'Am schnellsten geht es, wenn Sie uns eine kurze Beschreibung Ihres Projekts, Pläne oder Fotos per E-Mail schicken oder unser Kontaktformular nutzen. Oft ist auch ein Vor-Ort-Termin sinnvoll, um ein belastbares Angebot zu erstellen.'
        },
        {
          question: 'Wie werden Preise kalkuliert?',
          answer:
            'Je nach Projekt kalkulieren wir auf Basis von Aufwand, Stückzahlen (z.B. Fasern, Dosen, Meter) oder Pauschalen. Sie erhalten ein transparentes Angebot, in dem Leistungen und Annahmen klar beschrieben sind.'
        },
        {
          question: 'Welche Vorlaufzeit muss ich einplanen?',
          answer:
            'Die Vorlaufzeit hängt von Umfang und Auslastung ab. Kleinere Projekte lassen sich oft innerhalb weniger Wochen starten, größere Projekte benötigen mehr Planungsvorlauf. Konkrete Zeitfenster besprechen wir im Erstgespräch.'
        },
        {
          question: 'Wie läuft ein typisches Projekt ab?',
          answer:
            'In der Regel starten wir mit einer Bedarfsklärung und ggf. einem Vor-Ort-Termin, erstellen dann ein Konzept und Angebot, setzen das Projekt um und schließen mit Messungen sowie Dokumentation ab.'
        }
      ]
    }
  ],
  ctaTitle: 'Ihre Frage war nicht dabei?',
  ctaLead:
    'Kein Problem – schreiben Sie uns oder rufen Sie an. Gemeinsam finden wir heraus, wie wir Ihr Projekt im Raum Frankfurt / Rhein-Main bestmöglich unterstützen können.',
  ctaButton: 'Frage stellen oder Projekt anfragen'
};

const en: FaqContent = {
  heroTitle: 'FAQ – Frequently Asked Questions About Our Services',
  heroIntro:
    'In this FAQ we answer the most common questions about fiber optic deployment, network cabling & Wi-Fi, measurement & OTDR testing, service & maintenance, and our cooperation process in the Frankfurt / Rhein-Main region.',
  heroIntro2:
    'If you don’t find your question here, simply send us a short message or give us a call — we are happy to help you personally.',
  primaryCta: 'Ask a question',
  secondaryCta: 'View our services',

  sections: [
    {
      id: 'allgemein',
      title: 'General Questions',
      items: [
        {
          question: 'Which regions do you cover?',
          answer:
            'Our primary service area is the Frankfurt / Rhein-Main region — including Frankfurt am Main, Offenbach, Hanau, Rodenbach and surrounding districts. Larger projects can be supported outside the region by arrangement.'
        },
        {
          question: 'Do you work only with large clients or also with smaller companies?',
          answer:
            'We support utilities, network operators, housing companies, logistics firms, industrial clients and SMEs alike. The size of the company is less important than having a clearly defined project.'
        },
        {
          question: 'Which trades and partners do you work with?',
          answer:
            'We specialize in fiber optics, structured cabling, Wi-Fi and measurement services. Depending on the project, we collaborate with civil engineering companies, IT service providers, system integrators and electricians — and we are happy to work with your existing partners.'
        },
        {
          question: 'Can you take over projects started by other companies?',
          answer:
            'Yes. We can often continue or complete existing projects — for example splicing, cable blowing, OTDR testing, documentation or service & maintenance. A proper initial assessment is essential.'
        },
        {
          question: 'In which languages can communication take place?',
          answer:
            'We typically communicate in German, but we can also support English and Polish if required.'
        }
      ]
    },

    {
      id: 'glasfaser',
      title: 'Questions About Fiber Optic Deployment',
      items: [
        {
          question: 'What is the difference between FTTH and FTTB?',
          answer:
            'With FTTH (Fiber to the Home), the fiber runs directly into each dwelling unit. With FTTB (Fiber to the Building), the fiber terminates at the building handover point and the last meters are usually copper. The right choice depends on the building and the technical requirements.'
        },
        {
          question: 'Do you also provide standalone services such as splicing or cable blowing?',
          answer:
            'Yes. We can deliver complete fiber projects or individual services like splicing, cable blowing or acceptance testing — for utilities, carriers, IT service providers and more.'
        },
        {
          question: 'How long does a typical fiber project take?',
          answer:
            'This depends on scope, permits and civil works. A single building can often be completed within a few weeks, while larger neighborhoods or FTTH rollouts may require several months including planning.'
        },
        {
          question: 'Can you use existing ducts and infrastructure?',
          answer:
            'Yes. If ducts, risers or shafts already exist, we assess whether they can be reused — for example for blowing micro-cables or upgrading existing routes.'
        }
      ]
    },

    {
      id: 'netzwerk',
      title: 'Questions About Network Cabling & Wi-Fi',
      items: [
        {
          question: 'Do you only install cabling or also active components?',
          answer:
            'Our focus is on structured cabling, network cabinets and integrating active components. If required, we can help procure and pre-configure switches, firewalls and access points — in coordination with your IT provider or internal IT team.'
        },
        {
          question: 'Do you perform Wi-Fi surveys in existing buildings?',
          answer:
            'Yes. We measure Wi-Fi coverage, identify dead spots and recommend optimal access point locations. We then support deployment and commissioning.'
        },
        {
          question: 'Can you tidy up and document existing racks?',
          answer:
            'Yes. We reorganize racks, structure patch panels, label cables and create clear port lists — providing a clean foundation that your IT team can work with efficiently.'
        },
        {
          question: 'Can work be carried out without interrupting operations?',
          answer:
            'In many cases, yes. We can plan work outside peak hours or in isolated areas to keep downtime to a minimum. Details are clarified during project planning.'
        }
      ]
    },

    {
      id: 'messtechnik',
      title: 'Questions About Measurement & Fault Finding',
      items: [
        {
          question: 'Do you measure and test networks built by other companies?',
          answer:
            'Yes. We carry out OTDR, power and loss measurements as well as troubleshooting on networks built by third parties — for acceptance, operator changes or recurring faults.'
        },
        {
          question: 'How quickly can you be on-site in case of a fault?',
          answer:
            'This depends on workload and location. Within the Rhein-Main region we can often respond quickly. For critical infrastructure we recommend a service contract with defined response times.'
        },
        {
          question: 'Do I receive all measurement results digitally?',
          answer:
            'Yes. Measurement reports and evaluations are provided digitally, e.g. as PDF or spreadsheet files that can be integrated into documentation or ticket systems.'
        },
        {
          question: 'Can you identify the cause of high attenuation values?',
          answer:
            'In many cases yes. Based on OTDR curves, power measurements and visual inspection, we can often determine whether the issue is caused by poor splicing, connectors, mechanical damage or incorrect cable installation — and recommend solutions.'
        }
      ]
    },

    {
      id: 'service',
      title: 'Questions About Service & Maintenance',
      items: [
        {
          question: 'Do you offer service contracts?',
          answer:
            'Yes. We offer flexible service models — from basic annual inspections to comprehensive service contracts with defined response times and optional 24/7 on-call support.'
        },
        {
          question: 'Does the network need to be built by you to get a service contract?',
          answer:
            'No. We only require an initial assessment and, if necessary, baseline measurements to evaluate the condition of the infrastructure and define suitable service levels.'
        },
        {
          question: 'How is billing handled for service and maintenance?',
          answer:
            'Depending on the model, billing can be flat-rate (monthly/annual) or combined with effort-based items for additional interventions. The best model is defined together with you.'
        },
        {
          question: 'Can existing IT service providers be involved?',
          answer:
            'Yes. We complement system integrators and internal IT teams by taking care of the physical layer — fiber optics, cabling, racks and measurement services.'
        }
      ]
    },

    {
      id: 'angebote',
      title: 'Questions About Quotes, Pricing & Project Process',
      items: [
        {
          question: 'How do I request a quote?',
          answer:
            'The quickest way is to send us a short project description, plans or photos by email, or use our contact form. For precise quotations, a site visit is often recommended.'
        },
        {
          question: 'How are prices calculated?',
          answer:
            'Depending on the project, pricing is based on effort, quantities (e.g. fibers, sockets, meters) or flat rates. You will receive a transparent offer with clearly defined services and assumptions.'
        },
        {
          question: 'What lead time should I expect?',
          answer:
            'Lead time depends on project scope and workload. Smaller jobs can often start within a few weeks; larger FTTH, FTTB or network projects require more planning. We discuss timeframes during the initial consultation.'
        },
        {
          question: 'How does a typical project run?',
          answer:
            'Projects usually begin with a requirements discussion and a site visit if needed, followed by planning and a quote. Implementation is completed with measurements and full documentation.'
        }
      ]
    }
  ],

  ctaTitle: 'Your question wasn’t listed?',
  ctaLead:
    'No problem — just send us a message or call. Together we will find the best way to support your project in the Frankfurt / Rhein-Main region.',
  ctaButton: 'Ask a question or request a project'
};

const pl: FaqContent = {
  heroTitle: 'FAQ – Najczęściej zadawane pytania o nasze usługi',
  heroIntro:
    'W tym FAQ odpowiadamy na najczęstsze pytania dotyczące budowy światłowodów, sieci LAN i Wi-Fi, pomiarów OTDR, diagnostyki, serwisu oraz współpracy z smaRTtechnik Lebek & Stawczyk GbR w regionie Frankfurt / Rhein-Main.',
  heroIntro2:
    'Jeśli nie znajdziesz tutaj odpowiedzi, napisz do nas krótką wiadomość lub zadzwoń — chętnie doradzimy osobiście.',
  primaryCta: 'Zadaj pytanie',
  secondaryCta: 'Zobacz nasze usługi',

  sections: [
    {
      id: 'allgemein',
      title: 'Pytania ogólne',
      items: [
        {
          question: 'W jakich regionach działacie?',
          answer:
            'Naszym głównym obszarem działania jest Frankfurt / Rhein-Main — m.in. Frankfurt nad Menem, Offenbach, Hanau, Rodenbach oraz okoliczne powiaty. Większe projekty realizujemy również poza regionem, po wcześniejszych ustaleniach.'
        },
        {
          question: 'Czy współpracujecie tylko z dużymi firmami, czy także z mniejszymi?',
          answer:
            'Obsługujemy zarówno zakłady komunalne i operatorów, jak i deweloperów, firmy produkcyjne, logistykę, sektor usługowy oraz małe i średnie przedsiębiorstwa. Najważniejsze jest dobrze określone zapotrzebowanie projektowe.'
        },
        {
          question: 'Z jakimi podwykonawcami i branżami współpracujecie?',
          answer:
            'Specjalizujemy się w światłowodach, okablowaniu strukturalnym, Wi-Fi oraz pomiarach OTDR. W zależności od projektu współpracujemy z firmami od robót ziemnych, dostawcami IT, systemowymi integratorami i elektrykami. Możemy także pracować z Twoimi stałymi wykonawcami.'
        },
        {
          question: 'Czy przejmujecie projekty rozpoczęte przez inne firmy?',
          answer:
            'Tak. Często przejmujemy i kończymy istniejące projekty — np. spawanie, wdmuchiwanie kabli, pomiary, dokumentację czy serwis. Ważne jest wykonanie rzetelnej analizy stanu obecnego.'
        },
        {
          question: 'W jakich językach można się z Wami komunikować?',
          answer:
            'Standardowo rozmawiamy po niemiecku, ale w razie potrzeby także po angielsku i polsku.'
        }
      ]
    },

    {
      id: 'glasfaser',
      title: 'Pytania o światłowody (FTTH / FTTB)',
      items: [
        {
          question: 'Jaka jest różnica między FTTH a FTTB?',
          answer:
            'FTTH (Fiber to the Home) oznacza doprowadzenie światłowodu bezpośrednio do mieszkania. FTTB (Fiber to the Building) kończy się w punkcie wejścia do budynku, a ostatnie metry realizuje się zwykle miedzią. Wybór rozwiązania zależy od typu budynku i wymagań technicznych.'
        },
        {
          question: 'Czy wykonujecie tylko samo spawanie lub wdmuchiwanie kabli?',
          answer:
            'Tak. Realizujemy zarówno pełne projekty FTTH/FTTB, jak i pojedyncze usługi — spawanie, wdmuchiwanie kabli, pomiary odbiorcze, dokumentację — także jako podwykonawca dla operatorów i firm IT.'
        },
        {
          question: 'Ile trwa typowy projekt światłowodowy?',
          answer:
            'Czas zależy od zakresu prac, pozwoleń i robót ziemnych. Pojedynczy budynek można wykonać w kilka tygodni, a duże projekty osiedlowe lub FTTH nawet w kilka miesięcy, łącznie z planowaniem.'
        },
        {
          question: 'Czy możecie wykorzystać istniejące kanały, rury i infrastrukturę?',
          answer:
            'Tak. Jeżeli istnieją studnie, piony, przepusty lub rury, sprawdzamy możliwość ich użycia — np. do wdmuchiwania mikrokabli lub modernizacji istniejących tras.'
        }
      ]
    },

    {
      id: 'netzwerk',
      title: 'Pytania o sieci LAN i Wi-Fi',
      items: [
        {
          question: 'Czy zajmujecie się tylko okablowaniem, czy także aktywnymi urządzeniami?',
          answer:
            'Naszym głównym zakresem jest okablowanie strukturalne, szafy rack i integracja urządzeń. Na życzenie pomagamy także w doborze i konfiguracji switchy, firewalli czy punktów dostępowych, we współpracy z Twoim działem IT.'
        },
        {
          question: 'Czy wykonujecie pomiary Wi-Fi w istniejących budynkach?',
          answer:
            'Tak. Analizujemy pokrycie sygnałem Wi-Fi, wykrywamy martwe strefy, rekomendujemy lokalizacje AP i wdrażamy rozwiązania zapewniające pełne pokrycie.',
        },
        {
          question: 'Czy możecie uporządkować i udokumentować istniejące szafy sieciowe?',
          answer:
            'Tak. Organizujemy szafy rack, porządkujemy patch-panele, oznaczamy przewody i tworzymy czytelne listy portów — co znacznie ułatwia pracę działu IT.'
        },
        {
          question: 'Czy prace można wykonać bez przerywania działania firmy?',
          answer:
            'W większości przypadków tak. Prace planujemy tak, aby minimalizować przestoje — np. poza godzinami szczytu lub w wydzielonych strefach. Szczegóły ustalamy na etapie planowania.'
        }
      ]
    },

    {
      id: 'messtechnik',
      title: 'Pytania o pomiary i diagnostykę światłowodów',
      items: [
        {
          question: 'Czy wykonujecie pomiary sieci zbudowanych przez inne firmy?',
          answer:
            'Tak. Wykonujemy pomiary OTDR, mocy i tłumienności oraz diagnostykę w sieciach budowanych przez inne firmy — przy odbiorach, zmianie operatora lub powtarzających się awariach.'
        },
        {
          question: 'Jak szybko możecie pojawić się na miejscu awarii?',
          answer:
            'Zależy to od obłożenia i lokalizacji. W regionie Rhein-Main często możemy przyjechać bardzo szybko. Dla infrastruktury krytycznej rekomendujemy umowę serwisową z gwarantowanymi czasami reakcji.'
        },
        {
          question: 'Czy otrzymam wszystkie wyniki pomiarów w wersji cyfrowej?',
          answer:
            'Tak. Otrzymasz pełne raporty pomiarowe w formie cyfrowej — np. PDF, zestawienia i dane do włączenia w dokumentację lub systemy ticketowe.'
        },
        {
          question: 'Czy możecie znaleźć przyczynę wysokiego tłumienia?',
          answer:
            'W wielu przypadkach tak. Na podstawie krzywych OTDR, pomiarów i wizji lokalnej analizujemy, czy problem wynika ze złych spawów, złącz, uszkodzeń mechanicznych lub błędnej trasy kablowej — i wskazujemy możliwe rozwiązania.'
        }
      ]
    },

    {
      id: 'service',
      title: 'Pytania o serwis i utrzymanie',
      items: [
        {
          question: 'Czy oferujecie umowy serwisowe?',
          answer:
            'Tak. Oferujemy elastyczne modele — od corocznych przeglądów po kompleksowe umowy serwisowe z określonymi czasami reakcji i opcjonalnym wsparciem 24/7.'
        },
        {
          question: 'Czy sieć musi być wykonana przez Was, aby zawrzeć umowę serwisową?',
          answer:
            'Nie. Wymagamy jedynie wstępnej analizy stanu sieci i ewentualnych pomiarów, aby dobrać odpowiednie działania i zakres usług.'
        },
        {
          question: 'Jak wygląda rozliczenie za serwis i utrzymanie?',
          answer:
            'W zależności od modelu rozliczamy się ryczałtowo (np. miesięcznie) lub w połączeniu z dodatkowymi pracami wykonywanymi według stawki godzinowej. Model ustalamy wspólnie z klientem.'
        },
        {
          question: 'Czy możecie współpracować z moim obecnym dostawcą IT?',
          answer:
            'Tak. Wspieramy firmy IT i działy IT, przejmując odpowiedzialność za warstwę fizyczną — światłowody, okablowanie, szafy rack, pomiary.'
        }
      ]
    },

    {
      id: 'angebote',
      title: 'Pytania o wycenę, koszty i przebieg projektu',
      items: [
        {
          question: 'Jak mogę uzyskać wycenę?',
          answer:
            'Najwygodniej przesłać krótki opis projektu, plan lub zdjęcia e-mailem albo użyć formularza kontaktowego. Do precyzyjnej wyceny często warto wykonać wizję lokalną.'
        },
        {
          question: 'Jak kalkulowane są ceny?',
          answer:
            'W zależności od projektu wycena może opierać się na czasie pracy, ilości włókien, gniazd, metrów kabli lub stawkach ryczałtowych. Otrzymasz przejrzystą ofertę z dokładnym zakresem prac.',
        },
        {
          question: 'Jaki czas wyprzedzenia jest potrzebny?',
          answer:
            'Małe projekty możemy zacząć w ciągu kilku tygodni, większe instalacje FTTH/FTTB lub sieci LAN wymagają dłuższego planowania. Konkretne terminy omawiamy podczas pierwszego kontaktu.'
        },
        {
          question: 'Jak wygląda typowy przebieg projektu?',
          answer:
            'Najpierw omawiamy potrzeby i – jeśli konieczne – wykonujemy wizję lokalną, następnie przygotowujemy plan i ofertę, realizujemy projekt, a na koniec wykonujemy pomiary i przekazujemy dokumentację.'
        }
      ]
    }
  ],

  ctaTitle: 'Nie znalazłeś odpowiedzi?',
  ctaLead:
    'Napisz do nas lub zadzwoń. Razem ustalimy, jak najlepiej możemy wesprzeć Twój projekt światłowodowy lub sieciowy w regionie Frankfurt / Rhein-Main.',
  ctaButton: 'Zadaj pytanie lub zapytaj o projekt'
};


export const faqContent: Record<Locale, FaqContent> = {
  de,
  en,
  pl
};

