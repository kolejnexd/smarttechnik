import { Locale } from '../i18n';

type KontaktContent = {
  heroTitle: string;
  heroIntro: string;
  heroBullets: string[];
  contactHeadline: string;
  contactInfoText: string;
  contactWhenTitle: string;
  contactWhenItems: string[];
  formTitle: string;
  formIntro: string;
  formHelpful: string[];
  formNote?: string;
  stoerungTitle: string;
  stoerungIntro: string;
  stoerungList: string[];
  stoerungNote: string;
  anfahrtTitle: string;
  anfahrtIntro: string;
  anfahrtAddressLabel: string;
  anfahrtAddress: string;
  anfahrtParking: string;
  termineTitle: string;
  termineIntro: string;
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  ctaTitle: string;
  ctaLead: string;
  ctaButton: string;
};

const de: KontaktContent = {
  heroTitle: 'Kontakt & Anfahrt',
  heroIntro:
    'Sie möchten ein Glasfaser- oder Netzwerkprojekt im Raum Frankfurt / Rhein-Main planen, eine Messung beauftragen oder haben Fragen zu unseren Leistungen? Hier finden Sie alle Kontaktmöglichkeiten zu smaRTtechnik Lebek & Stawczyk GbR.',
  heroBullets: [
    'Direkter Kontakt per Telefon oder E-Mail',
    'Kontaktformular für Projektanfragen & Angebote',
    'Standort & Anfahrt nach Rodenbach bei Frankfurt'
  ],
  contactHeadline: 'Direkter Kontakt',
  contactInfoText:
    'Termine vor Ort sind nach Vereinbarung möglich. Viele Abstimmungen lassen sich auch telefonisch oder per Videocall klären.',
  contactWhenTitle: 'Wann lohnt sich ein Anruf, wann eine E-Mail?',
  contactWhenItems: [
    'Telefon: bei kurzfristigen Rückfragen, Störungen oder wenn Sie schnell klären möchten, ob Ihr Vorhaben zu uns passt.',
    'E-Mail / Kontaktformular: für detaillierte Projektanfragen, Angebotsanforderungen und Unterlagen (Pläne, Fotos etc.).'
  ],
  formTitle: 'Anfrage per Kontaktformular',
  formIntro:
    'Über unser Kontaktformular können Sie uns jederzeit eine Nachricht senden. Je genauer Sie Ihr Vorhaben beschreiben, desto zielgerichteter können wir Sie im ersten Schritt beraten.',
  formHelpful: [
    'Art des Projekts (z.B. Glasfaser-Ausbau, Netzwerktechnik, WLAN, Messtechnik)',
    'Standort / Region und grober Zeitrahmen',
    'Gebäudeart (z.B. Büro, Lagerhalle, Wohngebäude, Produktionsstandort)',
    'Vorhandene Unterlagen (Pläne, Fotos, bestehende Dokumentation)',
    'Gewünschte Kontaktart für die Rückmeldung (Telefon / E-Mail)'
  ],
  formNote: 'Ihr Formular kann hier eingebunden oder verlinkt werden.',
  stoerungTitle: 'Störungen & Notfälle',
  stoerungIntro:
    'Für Kunden mit Service- & Wartungsvertrag bieten wir definierte Reaktionszeiten und nach Vereinbarung eine Störungsbereitschaft (optional 24/7).',
  stoerungList: [
    'Standort und betroffene Bereiche (z.B. Gebäude, Etage, Strecke)',
    'Art der Störung (kompletter Ausfall, Performance-Probleme, einzelne Anschlüsse)',
    'Zeitpunkt des ersten Auftretens',
    'bereits erfolgte Maßnahmen (z.B. Neustarts, interne Prüfungen)'
  ],
  stoerungNote:
    'Ohne bestehenden Servicevertrag unterstützen wir Sie nach Verfügbarkeit und mit einem transparenten Stundensatz. Für kritische Infrastrukturen empfehlen wir einen vorher vereinbarten Vertrag.',
  anfahrtTitle: 'Standort & Anfahrt',
  anfahrtIntro:
    'Unser Standort befindet sich in 63517 Rodenbach im Rhein-Main-Gebiet, gut erreichbar aus Frankfurt am Main, Hanau, Offenbach und den umliegenden Gemeinden.',
  anfahrtAddressLabel: 'Adresse für Navigation / Anfahrt:',
  anfahrtAddress: 'smaRTtechnik Lebek & Stawczyk GbR, Odenwaldstr. 14, 63517 Rodenbach',
  anfahrtParking: 'Parkmöglichkeiten sind in der näheren Umgebung vorhanden. Bitte stimmen Sie Vor-Ort-Termine vorab mit uns ab.',
  termineTitle: 'Termine & Erreichbarkeit',
  termineIntro:
    'Wir arbeiten überwiegend projektbezogen und sind häufig auf Baustellen oder bei Kunden vor Ort. Daher bitten wir um eine kurze Terminvereinbarung, wenn Sie ein persönliches Gespräch in Rodenbach wünschen.',
  faq: {
    title: 'FAQ zu Kontakt & Anfahrt',
    items: [
      {
        question: 'In welchen Regionen übernehmen Sie Projekte?',
        answer:
          'Unser Schwerpunkt liegt im Rhein-Main-Gebiet mit Fokus auf Frankfurt am Main und Umgebung – darunter Offenbach, Hanau, Rodenbach und angrenzende Landkreise. Größere Projekte begleiten wir nach Absprache auch darüber hinaus.'
      },
      {
        question: 'Wie schnell erhalte ich eine Rückmeldung auf meine Anfrage?',
        answer:
          'In der Regel melden wir uns innerhalb von ein bis zwei Werktagen bei Ihnen zurück. Bei dringenden Themen empfehlen wir zusätzlich einen kurzen Anruf.'
      },
      {
        question: 'Welche Informationen sind für ein erstes Angebot hilfreich?',
        answer:
          'Hilfreich sind Angaben zu Art und Umfang des Projekts, Standort, Zeitrahmen, Gebäudetyp und vorhandenen Unterlagen (z.B. Pläne, Fotos). Je genauer die Angaben, desto präziser kann unsere erste Einschätzung sein.'
      },
      {
        question: 'Kann ich einen Vor-Ort-Termin in Rodenbach vereinbaren?',
        answer:
          'Ja. Bitte stimmen Sie den Termin vorab telefonisch oder per E-Mail mit uns ab, da wir häufig auf Baustellen und bei Kunden unterwegs sind.'
      },
      {
        question: 'Bieten Sie auch kurzfristige Einsätze bei Störungen an?',
        answer:
          'Im Rahmen von Serviceverträgen können wir definierte Reaktionszeiten und eine Störungsbereitschaft vereinbaren. Ohne Vertrag unterstützen wir bei Störungen nach Verfügbarkeit. Rufen Sie uns dazu am besten direkt an.'
      }
    ]
  },
  ctaTitle: 'Projekt geplant? Sprechen wir darüber.',
  ctaLead:
    'Ob Glasfaser-Ausbau, Netzwerktechnik, Messtechnik oder Service & Wartung – wir unterstützen Sie im Raum Frankfurt / Rhein-Main mit praxisnahen Lösungen. Schreiben Sie uns oder rufen Sie an, um Ihr Vorhaben zu besprechen.',
  ctaButton: 'Projekt unverbindlich anfragen'
};

const en: KontaktContent = {
  heroTitle: 'Contact & Directions',
  heroIntro:
    'Planning a fiber optic or network project in the Frankfurt / Rhein-Main region, need OTDR testing, or have questions about our services? Here you will find all ways to contact smaRTtechnik Lebek & Stawczyk GbR.',
  heroBullets: [
    'Direct contact by phone or email',
    'Contact form for project requests & quotes',
    'Location & directions to Rodenbach near Frankfurt'
  ],

  contactHeadline: 'Direct Contact',
  contactInfoText:
    'On-site appointments are possible by arrangement. Many topics can also be clarified by phone or video call.',

  contactWhenTitle: 'When should you call, and when is email better?',
  contactWhenItems: [
    'Phone: for urgent questions, faults, or when you quickly want to know if your project fits our scope.',
    'Email / Contact form: for detailed project requests, quotes and sending plans, photos or documentation.'
  ],

  formTitle: 'Contact Form Request',
  formIntro:
    'You can send us a message anytime using the contact form. The more details you provide, the more accurately we can advise you during the first consultation.',
  formHelpful: [
    'Type of project (e.g., fiber installation, network cabling, Wi-Fi, measurement & OTDR testing)',
    'Location / region and approximate timeline',
    'Building type (office, warehouse, residential building, production site)',
    'Available documents (plans, photos, existing documentation)',
    'Preferred way to be contacted (phone / email)'
  ],
  formNote: 'Your form can be embedded or linked here.',

  stoerungTitle: 'Faults & Emergencies',
  stoerungIntro:
    'For customers with service & maintenance contracts, we offer defined response times and, by agreement, an on-call service (optional 24/7).',
  stoerungList: [
    'Location and affected areas (building, floor, specific route)',
    'Type of fault (complete outage, performance issues, individual connections)',
    'Time of first occurrence',
    'Steps already taken (restarts, internal checks, patch changes)'
  ],
  stoerungNote:
    'Without an existing service contract, we assist based on availability and at a transparent hourly rate. For critical infrastructure we recommend having a contract in place.',

  anfahrtTitle: 'Location & Directions',
  anfahrtIntro:
    'Our location in 63517 Rodenbach is easily accessible from Frankfurt, Hanau, Offenbach and the surrounding Rhein-Main region.',
  anfahrtAddressLabel: 'Address for navigation:',
  anfahrtAddress: 'smaRTtechnik Lebek & Stawczyk GbR, Odenwaldstr. 14, 63517 Rodenbach',
  anfahrtParking:
    'Parking is available nearby. Please arrange on-site appointments with us beforehand.',

  termineTitle: 'Appointments & Availability',
  termineIntro:
    'We work mainly on-site at customer projects and are frequently on construction sites. Therefore, please arrange appointments in advance if you wish to meet us personally in Rodenbach.',

  faq: {
    title: 'FAQ – Contact & Directions',
    items: [
      {
        question: 'Which regions do you serve?',
        answer:
          'Our main service area is the Frankfurt / Rhein-Main region — including Frankfurt, Offenbach, Hanau, Rodenbach and surrounding districts. Larger projects can also be supported outside the region upon request.'
      },
      {
        question: 'How quickly will I receive a response to my inquiry?',
        answer:
          'We usually respond within one to two working days. For urgent matters, we recommend calling us directly in addition to sending your request.'
      },
      {
        question: 'Which information is helpful for a first quote?',
        answer:
          'Useful details include project type and scope, location, timeline, building type and available documents (plans, photos). The more precise the information, the more accurate our initial assessment.'
      },
      {
        question: 'Can I schedule an on-site appointment in Rodenbach?',
        answer:
          'Yes. Please arrange the appointment in advance by phone or email, as we are often on the road visiting customers or working on installations.'
      },
      {
        question: 'Do you offer short-notice emergency support?',
        answer:
          'With service contracts we can guarantee defined response times and optional 24/7 on-call availability. Without a contract, we help based on availability — in such cases, calling us directly is recommended.'
      }
    ]
  },

  ctaTitle: 'Planning a project? Let’s talk.',
  ctaLead:
    'Whether fiber optic installation, network cabling, measurement & diagnostics or long-term maintenance — we support companies across Frankfurt / Rhein-Main with reliable, practical solutions. Send us a message or call to discuss your project.',
  ctaButton: 'Request a project'
};

const pl: KontaktContent = {
  heroTitle: 'Kontakt & Dojazd',
  heroIntro:
    'Planujesz projekt światłowodowy lub sieciowy w regionie Frankfurt / Rhein-Main, potrzebujesz pomiarów OTDR albo chcesz omówić nasze usługi? Tutaj znajdziesz wszystkie możliwości kontaktu ze smaRTtechnik Lebek & Stawczyk GbR.',
  heroBullets: [
    'Bezpośredni kontakt telefoniczny lub e-mailowy',
    'Formularz kontaktowy do wycen i zapytań projektowych',
    'Lokalizacja i dojazd do Rodenbach koło Frankfurtu'
  ],

  contactHeadline: 'Kontakt bezpośredni',
  contactInfoText:
    'Spotkania na miejscu są możliwe po wcześniejszym umówieniu. Wiele tematów możemy omówić również telefonicznie lub przez wideorozmowę.',

  contactWhenTitle: 'Kiedy dzwonić, a kiedy lepiej wysłać e-mail?',
  contactWhenItems: [
    'Telefon: przy pilnych pytaniach, awariach lub kiedy chcesz szybko sprawdzić, czy Twój projekt pasuje do naszego zakresu.',
    'E-mail / formularz: do szczegółowych zapytań projektowych, wycen oraz przesłania planów, zdjęć i dokumentacji.'
  ],

  formTitle: 'Zapytanie przez formularz kontaktowy',
  formIntro:
    'Przez formularz możesz przesłać nam wiadomość o dowolnej porze. Im dokładniej opiszesz projekt, tym trafniej doradzimy już na pierwszym etapie.',
  formHelpful: [
    'Rodzaj projektu (np. światłowody, sieci LAN, Wi-Fi, pomiary OTDR)',
    'Lokalizacja i orientacyjny czas realizacji',
    'Typ obiektu (biuro, magazyn, budynek mieszkalny, zakład produkcyjny)',
    'Dostępne materiały (plany, zdjęcia, dokumentacja istniejącej instalacji)',
    'Preferowana forma kontaktu (telefon / e-mail)'
  ],
  formNote: 'W tym miejscu można osadzić lub podlinkować formularz.',

  stoerungTitle: 'Awarie & sytuacje nagłe',
  stoerungIntro:
    'Dla klientów z umową serwisową zapewniamy określone czasy reakcji oraz – jeśli ustalono – pogotowie awaryjne (również 24/7).',
  stoerungList: [
    'Lokalizacja i zakres awarii (budynek, piętro, konkretna trasa)',
    'Rodzaj problemu (brak sygnału, spadki wydajności, pojedyncze porty)',
    'Moment pierwszego wystąpienia',
    'Podjęte działania (np. restart, wewnętrzne testy, zmiana patchcordów)'
  ],
  stoerungNote:
    'Bez umowy serwisowej pomagamy według dostępności, w oparciu o przejrzystą stawkę godzinową. W przypadku infrastruktury krytycznej rekomendujemy wcześniejsze zawarcie umowy.',

  anfahrtTitle: 'Lokalizacja & Dojazd',
  anfahrtIntro:
    'Nasza siedziba znajduje się w 63517 Rodenbach, w sercu regionu Rhein-Main – z łatwym dojazdem z Frankfurtu, Hanau, Offenbach oraz okolicznych miejscowości.',
  anfahrtAddressLabel: 'Adres do nawigacji / dojazdu:',
  anfahrtAddress: 'smaRTtechnik Lebek & Stawczyk GbR, Odenwaldstr. 14, 63517 Rodenbach',
  anfahrtParking:
    'W pobliżu dostępne są miejsca parkingowe. Prosimy wcześniej potwierdzić termin spotkania na miejscu.',

  termineTitle: 'Terminy & dostępność',
  termineIntro:
    'Pracujemy głównie w terenie, na budowach i u klientów. Dlatego prosimy o wcześniejsze umówienie wizyty, jeśli chcesz spotkać się z nami osobiście w Rodenbach.',

  faq: {
    title: 'FAQ – Kontakt & Dojazd',
    items: [
      {
        question: 'W jakich regionach realizujecie projekty?',
        answer:
          'Pracujemy głównie w regionie Frankfurt / Rhein-Main – m.in. Frankfurt, Offenbach, Hanau, Rodenbach oraz okoliczne powiaty. Większe projekty możemy obsłużyć również poza regionem.'
      },
      {
        question: 'Jak szybko mogę liczyć na odpowiedź na zapytanie?',
        answer:
          'Zwykle odpowiadamy w ciągu jednego–dwóch dni roboczych. W pilnych sprawach polecamy dodatkowo zadzwonić.'
      },
      {
        question: 'Jakie informacje pomagają przygotować wstępną wycenę?',
        answer:
          'Najważniejsze są: typ i zakres projektu, lokalizacja, termin realizacji, rodzaj budynku oraz dostępne materiały (plany, zdjęcia). Im więcej szczegółów, tym dokładniejsza nasza pierwsza wycena.'
      },
      {
        question: 'Czy mogę umówić spotkanie na miejscu w Rodenbach?',
        answer:
          'Tak. Prosimy wcześniej ustalić termin telefonicznie lub mailowo, ponieważ często pracujemy w terenie.'
      },
      {
        question: 'Czy oferujecie szybkie wsparcie przy awariach?',
        answer:
          'Przy umowach serwisowych możemy zagwarantować czasy reakcji i opcjonalne wsparcie 24/7. Bez umowy pomagamy według dostępności – w takim przypadku najlepiej zadzwonić.'
      }
    ]
  },

  ctaTitle: 'Planujesz projekt? Porozmawiajmy.',
  ctaLead:
    'Niezależnie czy chodzi o światłowody, sieci LAN, pomiary czy serwis – wspieramy firmy w całym regionie Frankfurt / Rhein-Main praktycznymi i niezawodnymi rozwiązaniami. Napisz do nas lub zadzwoń, aby omówić szczegóły.',
  ctaButton: 'Zapytaj o projekt'
};


export const kontaktContent: Record<Locale, KontaktContent> = {
  de,
  en,
  pl
};

