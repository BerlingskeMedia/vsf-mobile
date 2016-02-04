var appConfig = {
    commentOpenHour: 7,
    commentClosingHour: 24,
    commentClosed: 'Det er desværre ikke muligt at kommentere Stiftens artikler i mellem 0:00 - 7:00. Kom tilbage senere.',
    commentWelcome: 'Deltag i debatten nedenfor. Husk debatten er lukket om natten i tidsrummet 0:00 - 7:00. Se vores <a href="/debat-regler">debat-regler her</a>.',
    maxStarRating: 6,
    itemsInSection: 30,
    editorialId: 64925,
    frontpageQueueId: 1011,
    frontpageItems: 21,
    canonicalDomain: 'http://stiften.dk',
    chartbeatApikey: 'c3624866ca79af3601812dbe1eb517f4',
    defaultImageSize: '866x487-c',
    timeAgoNowThreshold: 2,
    timeAgoMinuteThreshold: 59,
    timeAgoHourThreshold: 119,
    timeAgoDayThreshold: 119,
    weatherCacheTTLinSecs: 500,
    weatherCity: 'Aarhus',
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
        64874: 'sport', //sport
        66919: 'sport', // AGF
        0: 'sport', // Aarhus fremad
        66922: 'sport', // Bears
        66921: 'sport', // Aarhus håndbold
        66920: 'sport', // SK Århus
        305761: 'sport', // Skanderborg H
        329953: 'sport', // Odder Håndbold
        331535: 'sport', // Fodbold
        331537: 'sport', // Basketball
        331536: 'sport', // Håndbold
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
        id: 64874,
        subsections: [
          {slug: 'sport', name: 'Sport'},
          {slug: 'fodbold', name: 'Fodbold'},
          {slug: 'haandbold', name: 'Håndbold'},
          {slug: 'basketball', name: 'Basketball'}
        ]
      },
      oestjylland: {
        name: 'Østjylland',
        id: 64952,
        subsections: [
          {slug: 'oestjylland', name: 'Østjylland'},
          {slug: 'aarhus', name: 'Aarhus'},
          {slug: 'skanderborg', name: 'Skanderborg'},
          {slug: 'norddjurs', name: 'Norddjurs'},
          {slug: 'odder', name: 'Odder'},
          {slug: 'syddjurs', name: 'Syddjurs'},
          {slug: 'favrskov', name: 'Favrskov'},

        ]
      },
      danmark: {
        name: 'Danmark',
        id: 64914
      },
      verden: {
        name: 'Verden',
        id: 64916
      },
      kultur: {
        name: 'Kultur',
        id: 64897
      },
      erhverv: {
        name: 'Erhverv',
        id: 64913
      },
      navne: {
        name: 'Navne',
        id: 64917
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
        id: 64908
      },
      debat: {
        name: 'Debat',
        id: 64924
      },
      aarhus: {
        name: 'Aarhus',
        id: 64954
      },
      skanderborg: {
        name: 'Skanderborg',
        id: 64928
      },
      odder: {
        name: 'Odder',
        id: 64939
      },
      favrskov: {
        name: 'Favrskov',
        id: 64930
      },
      syddjurs: {
        name: 'Syddjurs',
        id: 64944
      },
      norddjurs: {
        name: 'Norddjurs',
        id: 64938
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
        copyright: "2015 Berlingske Media A/S",
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
                link: 'http://abonnement.stiften.dk'
            },
            ads: {
                text: 'Annoncering',
                link: 'http://midtjyskemedier.dk/prislister.html'
            },
            service: {
                text: 'Kundeservice',
                link: ' https://stiften.kundeunivers.dk/kontakt'
            }
        },
    }
}

