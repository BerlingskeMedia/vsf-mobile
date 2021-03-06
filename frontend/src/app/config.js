var appConfig = {
    commentOpenHour: 7,
    commentClosingHour: 24,
    commentWelcome: 'Kom med dine kommentarer nedenfor. Eller deltag i debatten på vores <a href="https://www.facebook.com/stiftstidende">Facebook-side</a>.',
    maxStarRating: 6,
    itemsInSection: 30,
    editorialId: 1418,
    frontpageQueueId: 1375,
    frontpageItems: 21,
    canonicalDomain: 'http://amtsavisen.dk',
    chartbeatApikey: 'c3624866ca79af3601812dbe1eb517f4',
    defaultImageSize: '866x487-c',
    defaultMetaTitle: 'Randers Amtsavis - mobil',
    timeAgoNowThreshold: 2,
    timeAgoMinuteThreshold: 59,
    timeAgoHourThreshold: 119,
    timeAgoDayThreshold: 119,
    weatherCacheTTLinSecs: 500,
    weatherCity: 'Randers',
    weatherIcons: {
            'day': {
              '200': 'thunderstorm',
              '300': 'showers',
              '500': 'rain',
              '520': 'showers',
              '600': 'snow',
              '800': 'day-sunny',
              '801': 'day-cloudy',
              '802': 'day-cloudy',
              '803': 'day-cloudy',
              '804': 'cloud',
              '900': 'tornado',
              '905': 'windy',
              '906': 'hail'
            },
            'night': {
              '200': 'night-alt-thunderstorm',
              '300': 'night-alt-showers',
              '500': 'night-alt-rain',
              '520': 'night-alt-showers',
              '600': 'night-alt-snow',
              '800': 'night-clear',
              '801': 'night-alt-cloudy',
              '802': 'night-alt-cloudy',
              '803': 'night-alt-cloudy',
              '804': 'cloud',
              '900': 'tornado',
              '905': 'windy',
              '906': 'hail'
            }
          },
    emediate: {
        "G1": {
            cu: "0",
            w: "930",
            h: "180"
        },
        "G2": {
            cu: "0",
            w: "930",
            h: "180"
        }
    },
    sectionsWithSubsectionsById: {
        64952: 'oestjylland', //Østjylland
        64954: 'oestjylland', //Århus
        64928: 'oestjylland', //Skanderborg
        64939: 'oestjylland', //Odder
        64930: 'oestjylland', //Favrskov
        64944: 'oestjylland', //Syddjurs
        64938: 'oestjylland', //Norddjurs
    },
    sections: {
      sport: {
        name: 'Sport',
        id: 1405
      },
      oestjylland: {
        name: 'Østjylland',
        id: 1391,
        subsections: [
          {slug: 'oestjylland', name: 'Østjylland'},
          {slug: 'randers', name: 'Randers'},
          {slug: 'mariagerfjord', name: 'Mariagerfjord'},
          {slug: 'favrskov', name: 'Favrskov'},
          {slug: 'norddjurs', name: 'Norddjurs'},
          {slug: 'syddjurs', name: 'Syddjurs'},
        ]
      },
      indland: {
        name: 'Danmark',
        id: 1397
      },
      verden: {
        name: 'Verden',
        id: 1398
      },
      kultur: {
        name: 'Kultur',
        id: 1406
      },
      erhverv: {
        name: 'Erhverv',
        id: 1399
      },
      navne: {
        name: 'Navne',
        id: 1420
      },
      fodbold: {
        name: 'Fodbold',
        id: 331535
      },
      basketball: {
        name: 'Basketball',
        id: 331537
      },
      haandbold: {
        name: 'Håndbold',
        id: 331536
      },
      alarm112: {
        name: 'Alarm 112',
        id: 1401
      },
      debat: {
        name: 'Debat',
        id: 1417
      },
      randers: {
        name: 'Randers',
        id: 1390
      },
      mariagerfjord: {
        name: 'Mariagerfjord',
        id: 1390
      },
      favrskov: {
        name: 'Favrskov',
        id: 1393
      },
      syddjurs: {
        name: 'Syddjurs',
        id: 1394
      },
      norddjurs: {
        name: 'Norddjurs',
        id: 1395
      },
    },
    sportsTeams: [
        {
            name: 'AGF',
            id: 66919,
            image: 'agf'
        },
        {
            name: 'Bakken Bears',
            id: 66922,
            image: 'bakken-bears'
        },
        {
            name: 'Aarhus Håndbold',
            id: 66921,
            image: 'aarhus-haandbold'
        },
        {
            name: 'SK Aarhus',
            id: 66920,
            image: 'skaarhus'
        },
        {
            name: 'Aarhus Fremad',
            id: 0,
            image: 'aarhus-fremad'
        },
        {
            name: 'Skanderborg Håndbold',
            id: 305761,
            image: 'skanderborg-haandbold'
        },
        {
            name: 'Odder Håndbold',
            id: 329953,
            image: 'odder-haandbold'
        }

    ],
    socials: {
        facebook: 'https://www.facebook.com/stiftstidende',
        twitter: 'https://twitter.com/stiftendk',
        instagram: 'http://instagram.com/stiftendk',
        google: 'https://google.com/stiftendk'
    },
    footer: {
        copyright: "2016 Jysk Fynske Medier",
        policies: {
            copyright: {
                text: 'Ophavsret og vilkår',
                link: 'http://www.berlingskemedia.dk/ophavsret-og-vilkaar/'
            },
            privacy: {
                text: 'Cookie-og Privatlivspolitik',
                link: 'http://www.berlingskemedia.dk/cookie-og-privatlivspolitik/'
            },
            terms: {
                text: 'Generelle handelsbetingelser',
                link: 'http://www.berlingskemedia.dk/generelle-handelsbetingelser/'
            }
        },
        business: {
            subscription: {
                text: 'Abonnement',
                link: 'http://abonnement.amtsavisen.dk/'
            },
            ads: {
                text: 'Annoncering',
                link: 'http://midtjyskemedier.dk/prislister.html'
            },
            service: {
                text: 'Kundeservice',
                link: 'https://amtsavisen.kundeunivers.dk/kontakt'
            }
        },
    }
}

