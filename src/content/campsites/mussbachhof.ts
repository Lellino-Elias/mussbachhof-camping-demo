import type { CampsiteConfig } from "../types";

/**
 * Stellplatz am Steinernen Meer / Biobauernhof Mussbachhof, Saalfelden.
 * Inhalte 100 % aus der eigenen Quelle (raw/digest). Der Wohnmobil-Stellplatz wurde
 * 2022 errichtet; es liegen KEINE Fotos der Stellflächen selbst vor — daher wird die
 * Stellplatz-Story ehrlich über Hof, Lage, Hoftiere, Bio-Produkte und Bergkulisse
 * erzählt. Kein Bild wird als „Stellplatz-Foto" ausgegeben.
 */
const IMG = "/campsites/mussbachhof";

const mussbachhof: CampsiteConfig = {
  name: "Stellplatz am Steinernen Meer",
  shortName: "Mussbachhof",
  slug: "mussbachhof",
  ort: "Saalfelden am Steinernen Meer",
  region: "Salzburger Land",
  brandKind: "Stellplatz am Biobauernhof",
  regionLong: "Saalfelden am Steinernen Meer · Pinzgau · Salzburger Land",

  theme: "alpin",
  heroVariant: "center",

  claim: "Dein Wohnmobil am Fuße des Steinernen Meeres",
  claimEmphasis: "Steinernen Meeres",
  intro:
    "Seit 2022 stehst du mit dem Wohnmobil am Tauernradweg, am Waldrand und am Fuße des Steinernen Meeres — auf einem Biobauernhof mit frischem Brot, Bio-Milch und vielen Hoftieren.",

  logo: { src: `${IMG}/logo-ef55dbdf74.png`, alt: "Mussbachhof Saalfelden Logo" },

  statement: {
    text: "Hundert Meter trennen deinen Stellplatz vom Hof — und vom frischen Brot am Morgen.",
    emphasis: "frischen Brot",
  },

  pillars: [
    {
      title: "Am Fuße des Steinernen Meeres",
      text: "Eingebettet ins Saalfeldner Becken, umgeben vom Steinernen Meer, dem Hochkönig und den Leoganger Steinbergen — Natur, so weit du schaust.",
      image: { src: `${IMG}/gallery-638eb76551.webp`, alt: "Garten des Mussbachhofs mit Blick auf die Berge rund um Saalfelden" },
    },
    {
      title: "Frisch vom Biobauernhof",
      text: "Frisches Brot und Gebäck, Bio-Milch, hausgemachte Marmelade und Eier bestellst du direkt an deinen Stellplatz.",
      image: { src: `${IMG}/gallery-fc29bf5fbd.webp`, alt: "Frühstück mit frischem Brot und Bio-Produkten vom Mussbachhof" },
    },
    {
      title: "Tiere zum Gernhaben",
      text: "Am Biobauernhof leben viele Tiere, die sich über Streicheleinheiten freuen — und auf Wunsch zeigt dir Familie Auer den Hof.",
      image: { src: `${IMG}/gallery-b2d5f86485.webp`, alt: "Schafe im Stall am Biobauernhof Mussbachhof" },
    },
  ],

  usps: [
    "Direkt am Tauernradweg",
    "Fuß des Steinernen Meeres",
    "Frisches Brot auf Bestellung",
    "Bio-Milch, Eier & Fleisch",
    "W-LAN inklusive",
    "Auch ohne Reservierung",
  ],

  trust: {
    heading: "Warum am Mussbachhof Halt machen?",
    headingEmphasis: "Mussbachhof",
    intro:
      "Hier wartet ein familiengeführter Biobauernhof am Waldrand: ruhig gelegen, Berge ringsum und nur hundert Meter bis zu frischem Brot, Hoftieren und Familie Auer, die sich Zeit für dich nimmt.",
  },

  awards: [],

  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: {
      src: `${IMG}/gallery-4589b26950.webp`,
      alt: "Biobauernhof Mussbachhof in Saalfelden im Sommer vor der Bergkulisse",
    },
  },

  breather: {
    image: { src: `${IMG}/gallery-5371322328.webp`, alt: "Sommerlicher Blick vom Mussbachhof über das Saalfeldner Becken" },
    line: "Vom Hof reicht der Blick weit ins Saalfeldner Becken.",
  },

  camping: {
    heading: "Stellplatz am Biobauernhof",
    intro:
      "2022 errichtet, am Waldrand und direkt am Tauernradweg — ein ruhiger Wohnmobil-Stellplatz, 100 Meter vom Hof. W-LAN, Ortstaxe und Entsorgung inklusive, auch ohne Reservierung.",
    features: [
      {
        title: "Frisches Brot am Morgen",
        text: "Brot und Gebäck bestellst du am Vorabend — am Morgen kommt es frisch vom Biobauernhof an deinen Platz.",
        image: { src: `${IMG}/gallery-776facd4d5.webp`, alt: "Gedeckter Frühstückstisch mit frischen Semmeln am Mussbachhof" },
      },
      {
        title: "Bio direkt ab Hof",
        text: "Bio-Milch, Eier, hausgemachte Marmelade und Bio-Fleisch vom Pinzgauer Rind gibt es direkt ab Hof.",
        image: { src: `${IMG}/gallery-1e04c6f9ce.webp`, alt: "Hausgemachtes Schmankerl mit Bio-Produkten vom Mussbachhof" },
      },
      {
        title: "Tiere rund um den Hof",
        text: "Rund um den Hof leben Hunde, Katzen und Vieh — Tiere zum Gernhaben, nicht nur zum Anschauen.",
        image: { src: `${IMG}/gallery-71d29054c7.webp`, alt: "Zwei Hofhunde im Garten des Mussbachhofs" },
      },
      {
        title: "Winter direkt am Hof",
        text: "Im Winter steigst du direkt beim Bauernhof in die Loipe ein; die großen Skigebiete liegen wenige Minuten entfernt.",
        image: { src: `${IMG}/gallery-e35158b5b7.webp`, alt: "Mussbachhof in Saalfelden im Winterschnee" },
      },
    ],
  },

  kinder: {
    heading: "Wo Kinder das Hofleben erleben",
    intro:
      "Tiere zum Streicheln, Toben im Heu und ein Spielplatz mit Bergblick — am Mussbachhof sind die Kleinen den ganzen Tag draußen.",
    features: [
      {
        title: "Spielplatz mit Bergblick",
        text: "Schaukel und Klettergerüst im Garten — und dahinter die Berge des Saalfeldner Beckens als Kulisse.",
        image: { src: `${IMG}/gallery-68a2297f45.webp`, alt: "Kinder am Spielplatz im Garten des Mussbachhofs mit Bergblick" },
      },
      {
        title: "Toben im Heu",
        text: "Beim Stöbern und Springen im Heu lernen Kinder den Bauernhof von seiner schönsten Seite kennen.",
        image: { src: `${IMG}/gallery-d450d562f4.webp`, alt: "Kinder spielen im Heustadl am Biobauernhof Mussbachhof" },
      },
      {
        title: "Mitten im Hofleben",
        text: "Ob am Kräuterbeet, bei den Tieren oder im Garten — am Biobauernhof gibt es ständig etwas zu entdecken.",
        image: { src: `${IMG}/gallery-bb4b7fbdbb.webp`, alt: "Kinder erkunden den Garten des Mussbachhofs vor der Bergkulisse" },
      },
    ],
  },

  anreise: {
    heading: "Anreise ans Steinerne Meer",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 (Tauern Autobahn) bis Bischofshofen, weiter auf der B311 nach Saalfelden — von dort ist Marzon ausgeschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Saalfelden liegt an der Linie Salzburg–Innsbruck; die letzten Minuten zum Hof per Bus oder Taxi.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Stellplatz liegt direkt am Tauernradweg — du rollst praktisch bis vor den Hof, ganz ohne Umweg.",
      },
    ],
  },

  galerie: {
    heading: "Vom Hofleben am Steinernen Meer",
    headingEmphasis: "Hofleben",
    intro:
      "Berge, Hoftiere, frische Schmankerl und ruhige Tage am Waldrand — ein paar Eindrücke vom Mussbachhof in Saalfelden.",
    tag: "Saalfelden · Pinzgau",
    moreCount: 19,
    images: [
      { src: `${IMG}/gallery-3924c1d2ec.webp`, alt: "Mussbachhof in Saalfelden mit verschneiter Bergkulisse" },
      { src: `${IMG}/gallery-069492c4eb.webp`, alt: "Hofkatze im Körbchen am Mussbachhof" },
      { src: `${IMG}/gallery-e1ca7447d6.webp`, alt: "Hausgemachtes Schmankerl mit einem Glas Rotwein am Hof" },
    ],
  },

  booking: {
    heading: "Stell dein Wohnmobil ans Steinerne Meer",
    headingEmphasis: "Steinerne Meer",
    intro:
      "Sag uns Zeitraum und Personenzahl — Familie Auer meldet sich persönlich. Reservierung ist möglich, aber nicht nötig.",
    pricesArePlaceholder: false,
    priceNote: "Pro Nacht für 2 Personen inkl. W-LAN, Ortstaxe und Entsorgung · Strom € 4 extra · Stand Website, bitte bestätigen.",
    highlight: {
      title: "Direkt am Tauernradweg",
      text: "Am Waldrand, 100 Meter vom Hof — anfahrbar auch ohne Reservierung.",
    },
    categories: [
      { id: "stellplatz", label: "Wohnmobil-Stellplatz", perNight: 22 },
    ],
  },

  kontakt: {
    coords: { lat: 47.454224, lng: 12.832622 },
    tel: "+43 6582 735 51",
    telHref: "tel:+43658273551",
    mail: "info@bauernhofurlaub-salzburg.com",
    facebook: "https://www.facebook.com/mussbachhof.auerguntersigrid",
    adresse: "Marzon 12 · 5760 Saalfelden am Steinernen Meer",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Stellplatz", href: "#camping" },
    { label: "Familie", href: "#kinder" },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default mussbachhof;
