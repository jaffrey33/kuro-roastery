import { Flame, Package, Scale, Sprout } from "lucide-react";

export const products = [
  {
    id: 1,
    origin: 'Kyoto',
    name: 'Yamato Blend',
    desc: 'Rich, balanced with chocolate notes',
    notes: ['Medium Roast', 'Smooth', 'Balanced'],
    price: 3200,
    emoji: '珈'
  },
  {
    id: 2,
    origin: 'Nara',
    name: 'Kinki Reserve',
    desc: 'Bold and full-bodied with fruit undertones',
    notes: ['Dark Roast', 'Bold', 'Complex'],
    price: 6800,
    emoji: '琲'
  },
  {
    id: 3,
    origin: 'Tokyo',
    name: 'Sunrise Essential',
    desc: 'Bright and crisp with floral notes',
    notes: ['Light Roast', 'Bright', 'Fruity'],
    price: 4100,
    emoji: '焙'
  }
];

export const steps = [
  {
    number: '01',
    icon: <Sprout  size={36}/>,
    title: 'Source',
    desc: 'We partner with select farms across Japan, choosing only the finest beans grown at optimal altitudes.'
  },
  {
    number: '02',
    icon: <Flame  size={36}/>,
    title: 'Roast',
    desc: 'Small-batch roasting brings out the unique character and complexity of each origin.'
  },
  {
    number: '03',
    icon: <Scale  size={36}/>,
    title: 'Blend',
    desc: 'Master roasters carefully craft each blend to achieve perfect balance and flavor profile.'
  },
  {
    number: '04',
    icon: <Package  size={36}/>,
    title: 'Package',
    desc: 'Sealed fresh in our signature packaging to preserve aroma and quality until it reaches your home.'
  }
];
