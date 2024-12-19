export const trips = [
    {
      id: 'vegas',
      title: 'What Happens in Vegas',
      image: '/images/vegas-hero.webp',
      description: '...stays in Vegas.',
      flights: {
        outbound: {
          departure: 'Friday March 14, 2025 11:15 AM',
          arrival: 'Friday March 14, 2025 12:55 PM',
          airline: 'Delta Airlines',
          flightNumber: 'DL824'
        },
        return: {
          departure: 'Monday, March 17, 2025 09:20 AM',
          arrival: 'Monday, March 17, 2025 4:06 PM',
          airline: 'Delta Airlines',
          flightNumber: 'DL834'
        },
        price: '1707.90'
      },
      hotel: {
        name: 'Bellagio Hotel & Casino',
        link: 'https://www.marriott.com/en-us/hotels/lasbl-bellagio-a-luxury-collection-resort-and-casino-las-vegas/overview/',
        address: '3600 S Las Vegas Blvd, Las Vegas, NV 89109, United States',
        description: 'Inspired by Lake Como, Bellagio, a Luxury Collection Resort & Casino, Las Vegas overlooks a Mediterranean-blue lake with fountains performing a magnificent ballet. Stay in luxurious remodeled rooms and suites, marvel at the magical sights, sounds, and scents of the festive season at the Conservatory, and wander through paintings and sculptures by the world\'s most influential artists at the Bellagio Gallery of Fine Art. Enjoy the elegance of "O" by Cirque du Soleil, which is magical and breathtaking. Indulge your tastebuds with the timeless flair of world-class dining at PRIME or Le Cirque. Dine with a fountain view by award-winning chefs at LAGO by Julian Serrano and Spago by Wolfgang Puck.',
        images: [
          '/images/vegas-hotel-hero.jpg',
          '/images/hotels/vegas/image3.jpeg',
          '/images/hotels/vegas/image2.webp',
          '/images/hotels/vegas/image4.jpeg',
        ],
        price: '1209.00'
      },
      activities: [
        {
          text: "Admire the Bellagio's iconic Fountains and seasonal Conservatory & Botanical Gardens",
          image: "/images/activities/vegas/fountains.webp"
        },
        {
          text: "Experience a fine dining meal at one of the Bellagio's signature restaurants",
          image: "/images/activities/vegas/dining.jpeg"
        },
        {
          text: "Attend the Cirque du Soleil 'O' show at the Bellagio",
          image: "/images/activities/vegas/cirque.jpg"
        },
        {
          text: "Try your luck at the Bellagio's world-class casino and sportsbook, especially during March Madness",
          image: "/images/activities/vegas/gambling.jpg"
        },
        {
          text: "Take a helicopter tour of the Las Vegas Strip or a day excursion to the Hoover Dam",
          image: "/images/activities/vegas/chopper.jpg"
        }
      ]
    },
    {
      id: 'newmexico',
      title: 'New Mexico Spicy Tacos',
      image: '/images/nm-hero.webp',
      description: 'Spice mommy, spice...',
      flights: {
        outbound: {
            departure: 'Friday March 14, 2025 1:59 PM',
            arrival: 'Friday March 14, 2025 3:31 PM',
            airline: 'Delta Airlines',
            flightNumber: 'DL1109'
          },
          return: {
            departure: 'Monday, March 17, 2025 11:26 AM',
            arrival: 'Monday, March 17, 2025 4:23 PM',
            airline: 'Delta Airlines',
            flightNumber: 'DL1004'
          },
          price: '1337.90'
      },
      hotel: {
        name: 'Hyatt Regency Tamaya Resort & Spa',
        link: 'https://www.hyatt.com/hyatt-regency/en-US/tamay-hyatt-regency-tamaya-resort-and-spa',
        address: '1300 Tuyuna Trail, Santa Ana Pueblo, NM 87504, United States',
        description: 'Step into serenity at Hyatt Regency Tamaya Resort & Spa. Situated on the foothills of the Sandia Mountains and Santa Ana Pueblo, our resort is a year-round destination in the Land of Enchantment. Immerse yourself in the stunning natural beauty of The Bosque’s cottonwood forests when you explore hiking trails along the Rio Grande, go horseback riding near ancient petroglyphs, or enjoy an afternoon in a hot air balloon. Learn about Pueblo culture from local tribal members at our on-site Native American Cultural Center. After a day of adventure, savor New Mexican cuisine at multiple on-site restaurants, indulge in a relaxing treatment at Tamaya Mist Spa, or play a round of golf at the course next door.',
        images: [
          '/images/nm-hotel-hero.webp',
          '/images/hotels/nm/image1.webp',
          '/images/hotels/nm/image2.webp',
          '/images/hotels/nm/image3.webp',
          '/images/hotels/nm/image4.webp',
          '/images/hotels/nm/image5.webp',
          '/images/hotels/nm/image6.webp',  
          '/images/hotels/nm/spa.webp', 
          '/images/hotels/nm/culture.webp'
        ],
        price: '1206.00'
      },
      activities: [
        {
          text: "Indulge in a rejuvenating treatment at the Tamaya Mist Spa & Salon",
          image: "/images/activities/nm/spa.webp"
        },
        {
          text: "Enjoy a guided horseback ride along the Rio Grande trails",
          image: "/images/activities/nm/horse.webp"
        },
        {
          text: "Explore nearby Santa Fe's historic Plaza, art galleries, and dining scene",
          image: "/images/activities/nm/santa-fe.webp"
        },
        {
          text: "Take a hot air balloon ride over the Rio Grande Valley for stunning desert views",
          image: "/images/activities/nm/balloon.webp"
        }
      ]
    },
    {
      id: 'jackson',
      title: 'Why O Ming!',
      image: '/images/wy-hero.jpg',
      description: "Let's get Jolly Jack...son Hole!",
      flights: {
        outbound: {
            departure: 'Friday March 14, 2025 11:20 AM',
            arrival: 'Friday March 14, 2025 1:33 PM',
            airline: 'Delta Airlines',
            flightNumber: 'DL844'
          },
          return: {
            departure: 'Monday, March 17, 2025 2:45 PM',
            arrival: 'Monday, March 17, 2025 8:26 PM',
            airline: 'Delta Airlines',
            flightNumber: 'DL844'
          },
          price: '1377.90'
      },
      hotel: {
        name: 'SpringHill Suites Jackson Hole',
        link: 'https://www.marriott.com/en-us/hotels/jacsh-springhill-suites-jackson-hole/overview/',
        address: '150 West Simpson Avenue, Jackson, WY 83001, United States',
        description: 'Centrally located in beautiful downtown Jackson, SpringHill Suites Jackson Hole stands as a modern destination in a historic town. Stay just steps from downtown shops, shows, restaurants and bars, while knowing Grand Teton National Park and Yellowstone National Park are each just a short drive away. During your time at our hotel in downtown Jackson, WY, you can enjoy sleek communal spaces including our spacious lobby and dining area for enjoying our complimentary breakfast buffet, serving hot and cold morning favorites. You can also utilize a 24-hour fitness center, outdoor pool and hot tub for a rejuvenating time in between daily adventures. Those planning to stay in town for an extended time will appreciate on-site laundry services as well as complimentary high-speed Wi-Fi throughout our rooms and public spaces. Great for groups getting together in Jackson, Wyoming, we boast 1,500 square feet of flexible meeting rooms, arranged to your liking. Set yourself up for success at SpringHill Suites Jackson Hole',
        images: [
          '/images/wy-hotel-hero.webp',
          '/images/hotels/wy/image2.jpeg',
          '/images/hotels/wy/image4.webp',
        ],
        price: '927.00'
      },
      activities: [
        {
          text: "Late-season Skiing at Jackson Hole Mountain Resort",
          image: "/images/activities/wy/ski.jpg"
        },
        {
          text: "Snowshoeing or Cross-country Skiing in Grand Teton National Park",
          image: "/images/activities/wy/snowshoe.jpg"
        },
        {
          text: "Taking a Winter Sleigh Ride through the National Elk Refuge",
          image: "/images/activities/wy/elk2.webp"
        },
        {
          text: "Experiencing a Snowcoach Tour in Yellowstone National Park",
          image: "/images/activities/wy/snowcoach.jpg"
        },
        {
          text: "Enjoying Après-ski Dining and Nightlife in Jackson",
          image: "/images/activities/wy/bar.jpg"
        }
      ]
    }
  ]