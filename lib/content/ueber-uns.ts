import { Locale } from '../i18n';

type UeberUnsContent = {
  heroTitle: string;
  heroParagraphs: string[];
  aboutTitle: string;
  aboutParagraphs: string[];
  teamTitle: string;
  teamIntro: string;
  teamItems: Array<{ label: string; text: string }>;
  teamOutro: string;
  valuesTitle: string;
  valuesItems: Array<{ title: string; body: string }>;
  qualificationsTitle: string;
  qualificationsIntro: string;
  qualificationsList: string[];
  qualificationsNote: string;
  uspTitle: string;
  uspItems: string[];
  processTitle: string;
  processSteps: Array<{ title: string; body: string }>;
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;
};

const de: UeberUnsContent = {
  heroTitle: 'Über uns – smaRTtechnik Lebek & Stawczyk GbR',
  heroParagraphs: [
    'smaRTtechnik ist ein auf Glasfaser- und Netzwerktechnik spezialisiertes Team mit Sitz in Rodenbach bei Frankfurt am Main. Wir planen, bauen und messen leistungsfähige Datennetze für Stadtwerke, Netzbetreiber, Wohnungsbaugesellschaften und Unternehmen im Rhein-Main-Gebiet.',
    'Unser Anspruch: saubere, nachvollziehbare und langfristig wartbare Lösungen, mit denen Ihre Infrastruktur nicht nur am ersten Tag, sondern über viele Jahre zuverlässig funktioniert.'
  ],
  aboutTitle: 'Wer wir sind',
  aboutParagraphs: [
    'Hinter smaRTtechnik steht ein eingespieltes Team aus Glasfaser- und Netzwerktechnikern, die seit vielen Jahren auf Baustellen, in Technikräumen, Rechenzentren und Unternehmensnetzen unterwegs sind.',
    'Als smaRTtechnik Lebek & Stawczyk GbR kombinieren wir praktische Erfahrung im Glasfaser-Ausbau, Netzwerktechnik & WLAN, Messtechnik sowie Service & Wartung – und begleiten Projekte vom ersten Konzept bis zur Abnahme und laufenden Betreuung.'
  ],
  teamTitle: 'Unser Team – Erfahrung aus der Praxis',
  teamIntro:
    'Unsere Techniker kommen aus der Praxis: Sie kennen Tiefbau-Baustellen ebenso wie Hausübergabepunkte, Netzwerkschränke, PoP-Standorte, Büros und Industriehallen. Dieses Wissen fließt direkt in Planung, Umsetzung und Fehlersuche ein.',
  teamItems: [
    { label: 'Erfahrung im Glasfaserbereich:', text: 'langjährige Mitarbeit in FTTH- und FTTB-Projekten im Rhein-Main-Gebiet.' },
    { label: 'Netzwerktechnik & WLAN:', text: 'strukturierte Verkabelung, Racks, Switches, Firewalls, WLAN-Ausleuchtungen und Inbetriebnahmen.' },
    { label: 'Messtechnik & Fehlersuche:', text: 'OTDR-, Leistungs- und Dämpfungsmessungen zur Abnahme und für Bestandsnetze.' },
    { label: 'Service & Wartung:', text: 'laufende Betreuung, Störungsdienst und Dokumentationspflege für Betreiber und Unternehmen.' }
  ],
  teamOutro:
    'Statt anonymer Großstrukturen arbeiten Sie bei uns mit direkten Ansprechpartnern, die Ihr Projekt kennen und Entscheidungen pragmatisch treffen können.',
  valuesTitle: 'Unsere Werte & Arbeitsweise',
  valuesItems: [
    {
      title: 'Verlässlichkeit',
      body:
        'Termine, Absprachen und Qualität nehmen wir ernst. Wenn wir einen Zeitrahmen zusagen, tun wir alles dafür, ihn einzuhalten – und kommunizieren offen, wenn sich Rahmenbedingungen ändern.'
    },
    {
      title: 'Transparenz',
      body: 'Wir erklären, was wir tun und warum. Angebote sind nachvollziehbar aufgebaut, Messprotokolle und Dokumentationen verständlich aufbereitet.'
    },
    {
      title: 'Praxisnahe Lösungen',
      body:
        'Wir denken aus Sicht derer, die später mit der Infrastruktur arbeiten: klar beschriftete Ports, saubere Racks, logische Struktur und Dokumentation, die auch in einigen Jahren noch hilfreich ist.'
    },
    {
      title: 'Langfristige Partnerschaften',
      body:
        'Viele Projekte entstehen aus bestehenden Beziehungen. Wir möchten kein einmaliger „Feuerwehreinsatz“ sein, sondern langfristiger Partner für Ihre Glasfaser- und Netzwerkinfrastruktur.'
    }
  ],
  qualificationsTitle: 'Qualifikationen, Schulungen & Equipment',
  qualificationsIntro:
    'Um stabile und reproduzierbare Ergebnisse zu liefern, setzen wir auf qualifizierte Techniker und moderne Mess- und Werkzeuge.',
  qualificationsList: [
    'Fortlaufende Schulungen: regelmäßige Trainings zu Glasfasertechnik, Spleißtechnik, Normen und Best Practices.',
    'Moderne Messtechnik: OTDR-, Leistungs- und Dämpfungsmessgeräte für aussagekräftige Messprotokolle.',
    'Standardkonforme Umsetzung: Planung und Aufbau nach gängigen Normen und Vorgaben, abgestimmt auf die Anforderungen von Stadtwerken, Betreibern und Unternehmen.',
    'Dokumentations-Tools: strukturierte Erfassung von Strecken, Muffen, Ports und Messwerten für spätere Nachvollziehbarkeit.'
  ],
  qualificationsNote:
    '→ Konkrete Beispiele finden Sie auf unseren Seiten Glasfaser-Ausbau, Netzwerktechnik & WLAN und Messtechnik & Fehlersuche.',
  uspTitle: 'Warum smaRTtechnik?',
  uspItems: [
    'Fokus auf Infrastruktur: wir sind spezialisiert auf Glasfaser, Netzwerktechnik, WLAN und Messtechnik – keine Ablenkung durch fachfremde Themen.',
    'Regionale Spezialisierung: Rhein-Main ist unsere Heimat. Wir kennen typische Gegebenheiten, Wege und Anforderungen der Region.',
    'Erfahrung aus vielen Projekten: zahlreiche abgeschlossene Projekte für Wohnungsbau, Unternehmen, Stadtwerke und Netzbetreiber.',
    'Alles aus einer Hand: von der ersten Idee über Ausbau und Messung bis hin zu Service & Wartung.',
    'Direkte Ansprechpartner: kurze Entscheidungswege statt wechselnder Projektteams.'
  ],
  processTitle: 'Wie wir arbeiten – vom ersten Gespräch bis zur Abnahme',
  processSteps: [
    {
      title: '1. Bedarf verstehen',
      body: 'Im ersten Gespräch klären wir Ziele, Rahmenbedingungen und Prioritäten. Oft folgt ein Vor-Ort-Termin, um die Gegebenheiten genauer zu beurteilen.'
    },
    {
      title: '2. Konzept & Angebot',
      body:
        'Auf Basis der Analyse erstellen wir ein Konzept und ein transparentes Angebot, das Leistungen, Annahmen und Zeitrahmen nachvollziehbar darstellt.'
    },
    {
      title: '3. Umsetzung & Abstimmung',
      body:
        'Die Umsetzung erfolgt in enger Abstimmung mit Ihren internen Teams, IT-Dienstleistern und – falls vorhanden – Tiefbau-Partnern. Ziel: möglichst wenig Beeinträchtigung des laufenden Betriebs.'
    },
    {
      title: '4. Messung, Dokumentation & Übergabe',
      body:
        'Nach Abschluss prüfen wir das Ergebnis mit Messtechnik, erstellen Protokolle, aktualisieren die Dokumentation und übergeben alle relevanten Unterlagen.'
    },
    {
      title: '5. Service & Weiterentwicklung',
      body:
        'Auf Wunsch begleiten wir Ihre Infrastruktur langfristig – mit Service- & Wartungsverträgen, regelmäßigen Checks und Unterstützung bei Erweiterungen.'
    }
  ],
  faq: {
    title: 'FAQ zu Über uns & unserem Team',
    items: [
      {
        question: 'Für welche Kunden arbeiten Sie typischerweise?',
        answer:
          'Wir arbeiten überwiegend für Stadtwerke, Netzbetreiber, Wohnungsbaugesellschaften, mittelständische Unternehmen, Logistik- und Industrieunternehmen sowie IT-Dienstleister im Rhein-Main-Gebiet.'
      },
      {
        question: 'Arbeiten Sie direkt für Endkunden oder über Partner?',
        answer:
          'Beides ist möglich. Wir arbeiten sowohl direkt für Betreiber und Unternehmen als auch als ausführender Partner von Systemhäusern und Projektentwicklern.'
      },
      {
        question: 'Wie groß ist Ihr Team?',
        answer:
          'Wir arbeiten mit einem Kernteam aus eigenen Technikern und ergänzen dieses bei Bedarf durch fest angebundene Partner. So können wir Projekte flexibel skalieren, ohne anonymer Großbetrieb zu sein.'
      },
      {
        question: 'Wie stellen Sie Qualität in Ihren Projekten sicher?',
        answer:
          'Durch klare Planung, abgestimmte Prozesse, den Einsatz moderner Messtechnik und nachvollziehbare Dokumentation. Außerdem setzen wir auf regelmäßige Schulungen und Erfahrungsaustausch im Team.'
      },
      {
        question: 'Kann ich Sie persönlich kennenlernen, bevor ich ein Projekt vergebe?',
        answer:
          'Sehr gerne. Wir bieten unverbindliche Kennenlerntermine an – telefonisch, per Videokonferenz oder vor Ort im Raum Frankfurt / Rhein-Main.'
      }
    ]
  },
  ctaTitle: 'Passt unsere Arbeitsweise zu Ihrem Projekt?',
  ctaLead:
    'Wenn Sie einen praxisnahen Partner für Glasfaser- und Netzwerktechnik im Raum Frankfurt / Rhein-Main suchen, der Ihre Infrastruktur langfristig im Blick behält, sind Sie bei uns richtig.',
  ctaButton: 'Unverbindliches Gespräch vereinbaren'
};

const en: UeberUnsContent = {
  heroTitle: 'About Us – smaRTtechnik Lebek & Stawczyk GbR',
  heroParagraphs: [
    'smaRTtechnik is a specialist team for fiber optic and network infrastructure based in Rodenbach near Frankfurt am Main. We design, build and measure high-performance data networks for municipal utilities, network operators, housing companies and businesses across the Frankfurt / Rhein-Main region.',
    'Our commitment: clean, transparent and long-lasting solutions that keep your infrastructure reliable — not just on day one but for many years to come.'
  ],

  aboutTitle: 'Who We Are',
  aboutParagraphs: [
    'Behind smaRTtechnik is a well-coordinated team of fiber optic and network technicians who have spent years working on construction sites, in equipment rooms, data centers and corporate networks.',
    'As smaRTtechnik Lebek & Stawczyk GbR, we combine hands-on expertise in fiber optic deployment, network technology & business Wi-Fi, measurement & troubleshooting, and long-term service & maintenance — supporting projects from initial concept to handover and ongoing operation.'
  ],

  teamTitle: 'Our Team – Real-World Experience',
  teamIntro:
    'Our technicians come directly from field practice: they know civil engineering sites, building entry points, network cabinets, POP locations, offices and industrial halls. This hands-on experience directly influences planning, implementation and troubleshooting.',
  teamItems: [
    { label: 'Fiber optic expertise:', text: 'many years of work on FTTH and FTTB projects throughout the Rhein-Main area.' },
    { label: 'Network technology & Wi-Fi:', text: 'structured cabling, racks, switches, firewalls, Wi-Fi surveys and commissioning.' },
    { label: 'Measurement & troubleshooting:', text: 'OTDR, power and attenuation testing for acceptance and existing networks.' },
    { label: 'Service & maintenance:', text: 'ongoing support, fault response and documentation management for operators and businesses.' }
  ],
  teamOutro:
    'Instead of anonymous large teams, you work directly with personal contacts who know your project and can make decisions quickly and pragmatically.',

  valuesTitle: 'Our Values & How We Work',
  valuesItems: [
    {
      title: 'Reliability',
      body:
        'We take timelines, agreements and quality seriously. If we commit to a schedule, we do everything we can to meet it — and communicate openly if conditions change.'
    },
    {
      title: 'Transparency',
      body:
        'We explain what we do and why. Our proposals are structured clearly, and measurement reports and documentation are easy to understand.'
    },
    {
      title: 'Practical Solutions',
      body:
        'We think from the perspective of those who will operate the infrastructure later: clearly labeled ports, tidy racks, logical structure and documentation that remains useful for years.'
    },
    {
      title: 'Long-Term Partnerships',
      body:
        'Many of our projects originate from long-standing relationships. We aim not to be a one-time “firefighting job” but a long-term partner for your fiber and network infrastructure.'
    }
  ],

  qualificationsTitle: 'Qualifications, Training & Equipment',
  qualificationsIntro:
    'To deliver stable and reproducible results, we rely on qualified technicians and modern measurement equipment.',
  qualificationsList: [
    'Ongoing training: regular courses in fiber optics, splicing, standards and best practices.',
    'Modern measurement tools: OTDR, power and attenuation testers for reliable measurement reports.',
    'Standards-compliant implementation: planning and deployment based on common industry standards, tailored to the needs of operators, utilities and enterprises.',
    'Documentation tools: structured recording of routes, splice points, ports and measurement data for future traceability.'
  ],
  qualificationsNote:
    '→ Detailed examples can be found on our pages Fiber Optic Deployment, Network Technology & Wi-Fi, and Measurement & Troubleshooting.',

  uspTitle: 'Why smaRTtechnik?',
  uspItems: [
    'Infrastructure focus: we specialize exclusively in fiber optics, network cabling, business Wi-Fi and measurement technology.',
    'Regional expertise: the Rhein-Main region is our home — we know local requirements, routes and conditions.',
    'Proven experience: numerous completed projects for housing associations, enterprises, municipal utilities and network operators.',
    'All services from one partner: from concept and installation to measurement, documentation and maintenance.',
    'Direct contacts: short decision paths instead of constantly changing project teams.'
  ],

  processTitle: 'How We Work – From First Call to Handover',
  processSteps: [
    {
      title: '1. Understanding your needs',
      body: 'In the initial conversation we clarify goals, requirements and priorities. A site visit often follows to better assess the conditions.'
    },
    {
      title: '2. Concept & proposal',
      body:
        'Based on our analysis we create a concept and a transparent proposal outlining all services, assumptions and timelines.'
    },
    {
      title: '3. Implementation & coordination',
      body:
        'Implementation takes place in close coordination with your internal teams, IT service providers and — if applicable — civil engineering partners. Our goal: minimal disruption to your ongoing operations.'
    },
    {
      title: '4. Measurement, documentation & handover',
      body:
        'After completion we verify all results with measurement technology, prepare reports, update documentation and hand over all relevant materials.'
    },
    {
      title: '5. Service & further development',
      body:
        'If desired, we support your infrastructure long-term — with service contracts, regular checkups and assistance during expansions.'
    }
  ],

  faq: {
    title: 'FAQ – About Us & Our Team',
    items: [
      {
        question: 'Who are your typical clients?',
        answer:
          'We mainly work for municipal utilities, network operators, housing companies, SMEs, logistics and industrial sites, and IT service providers in the Rhein-Main region.'
      },
      {
        question: 'Do you work directly with end customers or through partners?',
        answer:
          'Both. We support operators and enterprises directly, and we also work as an executing partner for system integrators and project developers.'
      },
      {
        question: 'How large is your team?',
        answer:
          'We operate with a core team of our own technicians and expand with long-term partner teams when needed — allowing us to scale flexibly without becoming an anonymous large operation.'
      },
      {
        question: 'How do you ensure quality in your projects?',
        answer:
          'Through clear planning, coordinated processes, modern measurement tools and transparent documentation. Continuous training and team knowledge exchange further ensure consistent quality.'
      },
      {
        question: 'Can we meet you personally before starting a project?',
        answer:
          'Absolutely. We offer introductory meetings — by phone, video call or on-site within the Frankfurt / Rhein-Main area.'
      }
    ]
  },

  ctaTitle: 'Does our approach fit your project?',
  ctaLead:
    'If you’re looking for a practical and experienced partner for fiber optic and network infrastructure in the Frankfurt / Rhein-Main region, we are ready to support you.',
  ctaButton: 'Schedule a consultation'
};

const pl: UeberUnsContent = {
  heroTitle: 'O nas – smaRTtechnik Lebek & Stawczyk GbR',
  heroParagraphs: [
    'smaRTtechnik to wyspecjalizowany zespół od sieci światłowodowych i infrastruktury IT z siedzibą w Rodenbach koło Frankfurtu. Projektujemy, budujemy i mierzymy nowoczesne sieci danych dla zakładów komunalnych, operatorów, firm, deweloperów i instytucji w całym regionie Frankfurt / Rhein-Main.',
    'Nasza filozofia: przejrzyste, solidne i wieloletnie rozwiązania, dzięki którym Twoja infrastruktura działa niezawodnie — nie tylko pierwszego dnia, ale również po latach.'
  ],

  aboutTitle: 'Kim jesteśmy',
  aboutParagraphs: [
    'Za smaRTtechnik stoi zgrany zespół techników światłowodowych i sieciowych, którzy od lat pracują na budowach, w serwerowniach, PoP-ach, biurach i halach produkcyjnych.',
    'Jako smaRTtechnik Lebek & Stawczyk GbR łączymy doświadczenie w budowie i spawaniu światłowodów, sieciach LAN i Wi-Fi, pomiarach OTDR oraz długoterminowej obsłudze serwisowej — prowadząc projekty od koncepcji po odbiór i stałe utrzymanie.'
  ],

  teamTitle: 'Nasz zespół — praktyka i doświadczenie',
  teamIntro:
    'Nasi technicy wywodzą się z praktyki: znają realia budów, muf, szaf telekomunikacyjnych, PoP-ów, biur i zakładów przemysłowych. Ta wiedza przekłada się bezpośrednio na planowanie, realizację i skuteczne rozwiązywanie problemów.',
  teamItems: [
    { label: 'Doświadczenie światłowodowe:', text: 'wieloletnia praca przy projektach FTTH i FTTB w regionie Rhein-Main.' },
    { label: 'Sieci LAN & Wi-Fi:', text: 'okablowanie strukturalne, RACK-i, switche, firewalle, pomiary i konfiguracje Wi-Fi.' },
    { label: 'Pomiary & diagnostyka:', text: 'OTDR, pomiary mocy i tłumienności dla odbiorów i analizy istniejących sieci.' },
    { label: 'Serwis & utrzymanie:', text: 'stała obsługa, usuwanie awarii i prowadzenie dokumentacji dla operatorów i firm.' }
  ],
  teamOutro:
    'Zamiast anonimowych struktur pracujesz u nas z bezpośrednimi technikami, którzy znają Twój projekt i podejmują szybkie, praktyczne decyzje.',

  valuesTitle: 'Nasze wartości i sposób pracy',
  valuesItems: [
    {
      title: 'Niezawodność',
      body:
        'Trzymamy się ustaleń, terminów i jakości. Jeżeli zobowiązujemy się do harmonogramu — dotrzymujemy go i jasno informujemy o zmianach.'
    },
    {
      title: 'Transparentność',
      body:
        'Tłumaczymy, co robimy i dlaczego. Oferty są jasno przedstawione, a dokumentacja i protokoły — czytelne i zrozumiałe.'
    },
    {
      title: 'Praktyczne rozwiązania',
      body:
        'Myślimy jak osoba, która później będzie pracować na tej infrastrukturze: czytelne oznaczenia, uporządkowane szafy, logiczna struktura i dokumentacja przydatna również za kilka lat.'
    },
    {
      title: 'Długofalowa współpraca',
      body:
        'Większość projektów wynika z wieloletnich relacji. Chcemy być stałym partnerem — nie jednorazowym „gaszeniem pożarów”.'
    }
  ],

  qualificationsTitle: 'Kwalifikacje, szkolenia i wyposażenie',
  qualificationsIntro:
    'Aby zapewnić powtarzalną jakość i stabilne wyniki, stawiamy na wykwalifikowanych techników oraz nowoczesną aparaturę pomiarową.',
  qualificationsList: [
    'Stałe szkolenia: regularne kursy z techniki światłowodowej, spawania, norm i najlepszych praktyk.',
    'Nowoczesne pomiary: OTDR, pomiary mocy i tłumienności dla rzetelnych protokołów odbiorczych.',
    'Zgodność ze standardami: planowanie i realizacja zgodnie z normami branżowymi, wymaganiami operatorów i firm.',
    'Profesjonalna dokumentacja: dokładne zestawienia tras, muf, portów i wyników pomiarów.'
  ],
  qualificationsNote:
    '→ Przykłady znajdziesz na stronach: Światłowody (FTTH/FTTB), Sieci LAN & Wi-Fi oraz Pomiary & Diagnostyka.',

  uspTitle: 'Dlaczego właśnie smaRTtechnik?',
  uspItems: [
    'Specjalizacja w infrastrukturze: skupiamy się wyłącznie na światłowodach, sieciach LAN, Wi-Fi oraz pomiarach.',
    'Lokalna wiedza: działamy w Rhein-Main i znamy specyfikę regionalnych projektów.',
    'Doświadczenie z wielu realizacji: projekty dla mieszkaniowych inwestycji, firm, zakładów komunalnych i operatorów.',
    'Kompleksowa obsługa: od koncepcji, przez budowę i pomiary, aż po serwis i utrzymanie.',
    'Bezpośredni kontakt: szybkie decyzje bez zmieniających się zespołów projektowych.'
  ],

  processTitle: 'Jak pracujemy — od pierwszej rozmowy do odbioru',
  processSteps: [
    {
      title: '1. Zrozumienie potrzeb',
      body:
        'W pierwszej rozmowie ustalamy cele, wymagania i priorytety. Często odbywa się również wizja lokalna, aby ocenić warunki techniczne.'
    },
    {
      title: '2. Projekt & oferta',
      body:
        'Na podstawie analizy przygotowujemy koncepcję i przejrzystą ofertę, opisującą zakres, założenia i harmonogram.'
    },
    {
      title: '3. Realizacja & koordynacja',
      body:
        'Prace wykonujemy w ścisłej współpracy z Twoim zespołem, usługodawcą IT oraz — jeśli potrzeba — partnerami od prac ziemnych. Minimalizujemy wpływ na bieżącą pracę firmy.'
    },
    {
      title: '4. Pomiary, dokumentacja & przekazanie',
      body:
        'Po zakończeniu wykonujemy pomiary, przygotowujemy protokoły i aktualizujemy dokumentację, a następnie przekazujemy komplet materiałów.'
    },
    {
      title: '5. Serwis & rozwój infrastruktury',
      body:
        'Na życzenie zapewniamy stałą opiekę, regularne przeglądy i pomoc przy rozbudowie infrastruktury.'
    }
  ],

  faq: {
    title: 'FAQ – O nas i naszym zespole',
    items: [
      {
        question: 'Dla kogo pracujecie najczęściej?',
        answer:
          'Naszymi klientami są zakłady komunalne, operatorzy, wspólnoty i deweloperzy, firmy produkcyjne, logistyczne, biurowe oraz usługodawcy IT w regionie Frankfurtu.'
      },
      {
        question: 'Czy pracujecie bezpośrednio z firmami czy tylko przez partnerów?',
        answer:
          'Realizujemy projekty zarówno bezpośrednio dla firm i operatorów, jak i jako podwykonawca dla system integratorów i generalnych wykonawców.'
      },
      {
        question: 'Jak duży jest Wasz zespół?',
        answer:
          'Pracujemy w stałym zespole techników, który w razie potrzeby rozszerzamy o zaufanych partnerów — dzięki temu możemy skalować projekty bez utraty jakości.'
      },
      {
        question: 'Jak zapewniacie jakość realizacji?',
        answer:
          'Dzięki spójnym procesom, przemyślanemu planowaniu, nowoczesnym pomiarom oraz jasnej dokumentacji. Dodatkowo dbamy o regularne szkolenia i wymianę wiedzy w zespole.'
      },
      {
        question: 'Czy można umówić się na rozmowę przed rozpoczęciem współpracy?',
        answer:
          'Oczywiście. Oferujemy niezobowiązujące spotkania — telefoniczne, online lub na miejscu w regionie Frankfurt / Rhein-Main.'
      }
    ]
  },

  ctaTitle: 'Czy nasz sposób pracy pasuje do Twojego projektu?',
  ctaLead:
    'Jeśli szukasz praktycznego, doświadczonego partnera od światłowodów i sieci w regionie Frankfurt / Rhein-Main, chętnie pomożemy.',
  ctaButton: 'Umów rozmowę'
};


export const ueberUnsContent: Record<Locale, UeberUnsContent> = {
  de,
  en,
  pl
};

