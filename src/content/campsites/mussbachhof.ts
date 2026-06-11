import type { CampsiteConfig } from "../types";

const IMG = "/campsites/mussbachhof";

const mussbachhof: CampsiteConfig = {
  name: "Stellplatz am Mussbachhof",
  shortName: "Mussbachhof",
  slug: "mussbachhof",
  ort: "Saalfelden am Steinernen Meer",
  region: "Salzburger Land",
  brandKind: "Stellplatz am Biobauernhof",
  regionLong: "Saalfelden am Steinernen Meer · Pinzgau · Salzburger Land",

  theme: "alpin",
  heroVariant: "center",

  claim: "Mit dem Wohnmobil an den Fuß des Steinernen Meeres",
  claimEmphasis: "Steinernen Meeres",
  intro:
    "Seit 2022 stehst du mit dem Wohnmobil eben und ruhig am Waldrand, direkt am Tauernradweg und am Fuße des Steinernen Meeres — nur 100 Meter von unserem Biobauernhof mit frischem Brot und Bio-Milch.",

  logo: { src: `${IMG}/logo-ef55dbdf74.png`, alt: "Mussbachhof — Bauernhofurlaub in Salzburg" },

  statement: {
    text: "Am Morgen klopfst du kurz am Hof an und nimmst frisches Brot, Bio-Milch und Eier mit ans Wohnmobil.",
    emphasis: "frisches Brot",
  },

  pillars: [
    {
      title: "Am Fuße des Steinernen Meeres",
      text: "Eingebettet ins Saalfeldner Becken, am Waldrand und direkt am Tauernradweg — die Berge beginnen gleich hinter dem Platz.",
      image: { src: `${IMG}/gallery-638eb76551.webp`, alt: "Bergwiese am Mussbachhof mit Blick auf die umliegenden Gipfel" },
    },
    {
      title: "Ein echter Biobauernhof",
      text: "Bio-Bauernhof mit Pinzgauer Rindern, Schafen und vielen Hoftieren — auf Wunsch nehmen wir dich mit auf eine Führung über den Hof.",
      image: { src: `${IMG}/gallery-b2d5f86485.webp`, alt: "Schafe im Stall des Biobauernhofs Mussbachhof" },
    },
    {
      title: "Frisch vom Hof",
      text: "Brot und Gebäck auf Bestellung, dazu Bio-Milch, Eier, Marmelade und Fleisch aus eigener Landwirtschaft — frischer wird Urlaub am Stellplatz nicht.",
      image: { src: `${IMG}/gallery-fc29bf5fbd.webp`, alt: "Frühstück mit Hofprodukten am Mussbachhof" },
    },
  ],

  usps: [
    "Direkt am Tauernradweg",
    "W-LAN inklusive",
    "Auch ohne Reservierung",
    "Ver- & Entsorgung am Platz",
    "Bio-Produkte vom Hof",
    "Am Waldrand & Bushaltestelle",
  ],

  trust: {
    heading: "Darauf ist am Mussbachhof Verlass",
    headingEmphasis: "Verlass",
    intro:
      "Ein moderner Stellplatz von 2022, faire Preise und ein Biobauernhof nur 100 Meter weiter: Familie Auer ist für ihre mobilen Gäste jederzeit telefonisch erreichbar — auch ganz ohne Reservierung.",
  },

  awards: [],

  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/gallery-4589b26950.webp`, alt: "Mussbachhof in Saalfelden vor der Bergkulisse des Saalfeldner Beckens" },
  },

  breather: {
    image: { src: `${IMG}/gallery-3924c1d2ec.webp`, alt: "Mussbachhof in Saalfelden im winterlichen Schnee" },
    line: "Im Winter steigst du direkt am Hof in die Langlaufloipe.",
  },

  camping: {
    heading: "Dein Stellplatz am Mussbachhof",
    intro:
      "2022 neu errichtet, eben und ruhig am Waldrand: ein unkomplizierter Stopp mit dem Wohnmobil — und der Biobauernhof mit seiner Frische liegt nur 100 Meter entfernt.",
    features: [
      {
        title: "Brot & Gebäck auf Bestellung",
        text: "Bestell am Vorabend frisches Brot und Gebäck — am nächsten Morgen liegt alles frisch für dein Frühstück am Wohnmobil bereit.",
        image: { src: `${IMG}/gallery-776facd4d5.webp`, alt: "Gedeckter Frühstückstisch mit frischem Gebäck am Mussbachhof" },
      },
      {
        title: "Bio-Milch, Eier & Marmelade",
        text: "Frische Bio-Milch, Eier und hausgemachte Marmelade kommen direkt aus der eigenen Bio-Landwirtschaft der Familie Auer.",
        image: { src: `${IMG}/gallery-0bee11906d.webp`, alt: "Hofprodukte vom Biobauernhof Mussbachhof" },
      },
      {
        title: "Bio-Fleisch vom Pinzgauer Rind",
        text: "Bio-Fleisch vom Pinzgauer Rind aus eigener Landwirtschaft — auf Wunsch nimmst du es frisch vom Hof mit.",
        image: { src: `${IMG}/gallery-1e04c6f9ce.webp`, alt: "Gericht mit Bio-Fleisch vom Mussbachhof" },
      },
      {
        title: "Hoftiere ganz nah",
        text: "Pinzgauer Rinder, Schafe, Hund und Katz: Auf dem Biobauernhof, 100 Meter weiter, ist immer etwas los — Streicheln ausdrücklich erlaubt.",
        image: { src: `${IMG}/gallery-069492c4eb.webp`, alt: "Hofkatze im Korb am Mussbachhof" },
      },
      {
        title: "Mittendrin im Hofleben",
        text: "Zwischen Wiese, Garten und Hoftieren wird der Stopp am Mussbachhof schnell mehr als nur ein Stellplatz.",
        image: { src: `${IMG}/gallery-a5b812d3ea.webp`, alt: "Hofhund auf der Wiese am Mussbachhof" },
      },
      {
        title: "Auslauf mit Bergblick",
        text: "Viel Wiese, frische Luft und die Gipfel rundum — hier kommen Zwei- und Vierbeiner gleichermaßen zur Ruhe.",
        image: { src: `${IMG}/gallery-e5a76aa258.webp`, alt: "Hund auf der Wiese am Mussbachhof mit Bergkulisse" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Saalfeldner Becken",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A10 Tauernautobahn und die B311 nach Saalfelden, dann Richtung Marzon — der Hof ist ausgeschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Saalfelden liegt an der Linie Salzburg–Innsbruck; von dort sind es wenige Minuten mit Bus oder Taxi.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Tauernradweg führt direkt am Stellplatz vorbei — die Anreise mit dem Rad ist inklusive.",
      },
    ],
  },

  galerie: {
    heading: "Hofleben am Mussbachhof",
    headingEmphasis: "Hofleben",
    intro: "Hoftiere, Bergblick und gute Küche — ein paar Eindrücke rund um den Mussbachhof.",
    tag: "Saalfelden · Salzburger Land",
    moreCount: 12,
    images: [
      { src: `${IMG}/gallery-71d29054c7.webp`, alt: "Zwei Hofhunde vor der Bergkulisse am Mussbachhof" },
      { src: `${IMG}/gallery-4451ba8701.webp`, alt: “Mussbachhof Bauernhaus im Sommer mit bunten Balkonblumen und Holzschaukel im Garten” },
      { src: `${IMG}/gallery-e1ca7447d6.webp`, alt: "Hausgemachtes mit Bio-Fleisch vom Hof" },
      { src: `${IMG}/gallery-e35158b5b7.webp`, alt: "Der Mussbachhof im winterlichen Saalfelden" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Steinernen Meer",
    headingEmphasis: "am Steinernen Meer",
    intro:
      "Sag uns Zeitraum und Personen — Familie Auer meldet sich persönlich. Spontan vorbeikommen geht auch, der Platz braucht keine Reservierung.",
    pricesArePlaceholder: false,
    priceNote:
      "€ 22 pro Nacht inkl. W-LAN & Ortstaxe für 2 Personen sowie Ver- & Entsorgung von Toilettenbox und Grauwasser · Strom € 4",
    highlight: {
      title: "Auch ohne Reservierung",
      text: "Freie Plätze gibt es auch spontan — einfach vorbeikommen.",
    },
    categories: [
      { id: "stellplatz", label: "Wohnmobilstellplatz", perNight: 22 },
    ],
  },

  kontakt: {
    coords: { lat: 47.454224, lng: 12.832622 },
    tel: "+43 6582 735 51",
    telHref: "tel:+43658273551",
    mail: "info@bauernhofurlaub-salzburg.com",
    facebook: "https://www.facebook.com/mussbachhof.auerguntersigrid",
    adresse: "Marzon 12 · 5760 Saalfelden am Steinernen Meer · Salzburg",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Stellplatz", href: "#camping" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise", href: "#booking" },
    { label: "Anreise", href: "#anreise" },
  ],
};

export default mussbachhof;
