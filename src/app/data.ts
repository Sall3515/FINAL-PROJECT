import { Card } from './types/card';

// თუ 2 ერთნაირი ბარათი მაქვს , ერთერთის წაშლისას  ორივე იშლება

export const CARD: Card[] = [
  {
    image: '/assets/images/blueberry.png',
    title: 'Blueberry',
    description: `Blueberries are a good source of manganese and vitamins C and K1.
     They also provide small amounts of copper, as well as vitamins E and B6.
    They are rich in antioxidants and beneficial plant compounds,`,
    price: 3.99,
    id: 1,
  },
  {
    image: '/assets/images/strawberry.png',
    title: 'Strawberry',
    description: `Strawberries are rich in vitamin C and other antioxidants,
       which help reduce the risk of serious health conditions like cancer,
        diabetes, stroke, and heart disease, it also contains potasium.
      `,
    price: 5,
    id: 2,
  },
  {
    image: '/assets/images/kiwi.png',
    title: 'Kiwifruit',
    description: `Kiwis are exceptionally high in vitamin C, with a  100-gram
       kiwi providing over 80% of the average daily vitamin C needs .
       Additionally, kiwis contain potassium, copper, vitamin K, folate,
        and vitamin E.`,
    price: 3.5,
    id: 3,
  },
  {
    image: '/assets/images/peach.png',
    title: 'Peach',
    description: `they’re packed with antioxidants — beneficial plant compounds that combat oxidative damage and help 
    protect your body against aging and disease.`,
    price: 3.99,
    id: 4,
  },
  {
    image: '/assets/images/lemon.png',
    title: 'Lemon',
    description: `In addition to being a good source of fiber, lemons are also high 
    in vitamins C and K, as well as potassium and antioxidants. 
    They’re also  good for gut health`,
    price: 2.5,
    id: 5,
  },
  {
    image: '/assets/images/bingcherries.png',
    title: 'Cherry',
    description: `Cherries are  a good source of fiber, which helps keep your digestive system healthy.
    Plus, they provide B vitamins, manganese, copper, magnesium, and vitamin K.`,
    price: 4.5,
    id: 6,
  },

  {
    image: '/assets/images/pomegranate.png',
    title: 'Pomegranate',
    description: `Pomegranate contains antioxidant substances.
    Pomegranate juice may benefit people with inflammatory 
    conditions. It may also 
    boost  memory and help prevent cancer.`,
    price: 4.5,
    id: 7,
  },
  {
    image: '/assets/images/grapes.png',
    title: 'Grape',
    description: `Grapes contain  resveratrol, lutein, and zeaxanthin — that may help prevent common eye diseases.
    grapes are 81% water, so they may help you reach your hydration goals`,
    price: 3,
    id: 8,
  },
  {
    image: '/assets/images/dragon-fruit.png',
    title: 'Dragon Fruit',
    description: `Dragon fruit contains several antioxidants that protect your
     cells from damage. These include hydroxycinnamates, and flavonoids.`,
    price: 7,
    id: 9,
  },
];
