
// Export key word is used to export function, object and other primitive values
//from a module so that they can be used by other programmes with keyword import.

import boxingGloves from '../assets/resized/boxing gloves.webp'
import barBell from '../assets/resized/barbell.jpg'
import tennisRacket from '../assets/resized/tennis-racket.jpg'
import nike from '../assets/resized/running nike shoes.jpg'
import retroJordan from '../assets/resized/retro jordans.webp'
import airMax from '../assets/resized/nike 2.jpg'
import underAm from '../assets/resized/under ummer running shoes.jpg'
import yogaPants from '../assets/resized/ladies Yoga Pants.jpg'
import sportBra from '../assets/resized/Ladies sport bra.jpg'
import shorts from '../assets/resized/mens-running shorts.webp'
import vest from '../assets/resized/mens gym vest.webp'
import tracksuit from '../assets/resized/mens track-suits.jpeg'



export const products = [
    // Sport equipment categories
    {
      id: 1,
      name: 'Boxing Glove',
      description: 'High-quality leather boxing gloves for training and competition.',
      price: 50.99,
      categories: 'Sport Equipment',
      image: boxingGloves
    },
    {
      id: 2,
      name: 'Bar Bell',
      description: 'Durable and versatile barbell for strength training.',
      price: 75.99,
      categories: 'Sport Equipment',
      image: barBell
    },
    {
      id: 3,
      name: 'Tennis Racket',
      description: 'Lightweight yet powerful tennis racket for professional play.',
      price: 85.99,
      categories: 'Sport Equipment',
      image: tennisRacket
    },
    
    // Shoes categories
    {
      id: 4,
      name: 'Nike Revolution Mens Running Shoes',
      description: 'Comfortable and stylish running shoes for everyday wear.',
      price: 90.99,
      categories: 'Shoes',
      image: nike
    },
    {
      id: 5,
      name: 'Retro Jordans',
      description: 'Classic Air Jordans with a retro design.',
      price: 135.99,
      salePrice: 108.99,
      categories: ['shoes', 'On Sale'],
      image:retroJordan
    },
    {
      id: 6,
      name: 'Nike Air Max Ladies Running Shoes',
      description: 'Running shoes with superior comfort and style.',
      price: 120.99,
      categories: 'Shoes',
      image: airMax
    },
    {
        id :7,
        name:'Under Armour Running Shoes',
        description:'Durable running shoes that offer great support and comfort.',
        price :110.99,
        categories:'Shoes',
        image:underAm
     },
  
     // Fitness apparel categories
     {
       id :8,
       name:'Mens Running Short',
       description:'Lightweight running shorts with excellent mobility.',
       price :25.99,
       categories:'Fitness Apparel',
       image:shorts
     },
     {
       id :9,
       name:'Mens Gym Vest',
       description:'Breathable and comfortable gym vest for workouts.',
       price :20.99,
       categories:'Fitness Apparel',
       image: vest
     },
     {
       id :10,
       name:'Mens Tracksuit',
       description:'Comfortable and stylish tracksuit for gym and casual wear.',
       price :70.99,
       categories:'Fitness Apparel',
       image: tracksuit
     },
     {
       id :11,
       name:'Ladies Sport Bra',
       description:'Supportive and comfortable sports bra for workout.',
       price :30.99,
       categories:'Fitness Apparel',
       image: sportBra
     },
     {
       id :12,
       name:'Ladies Yoga Pants',
       description:'Flexible and comfortable yoga pants for fitness enthusiasts.',
       price :40.99,
       salePrice: 32.99,
       categories: ['Sport Equipment', 'On Sale'],
       image: yogaPants
     }
  ];
  