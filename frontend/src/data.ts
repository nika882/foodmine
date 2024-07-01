
import { count } from 'console';
import { Food } from './app/shared/models/Food';
import { Tags } from './app/shared/models/Tags';
export const sample_foods:Food[]=[
    {
        id:'1',
        name:'pizza',
        price:15,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        stars:4.0,
        imageUrl:'assets/images/food-1.jpg',
        tags:['FastFood','Pizza','Lunch']
    },
    {
        id:'2',
        name:'Soup',
        price:30,
        cookTime:'20-30',
        favorite:false,
        origins:['italy'],
        stars:5.0,
        imageUrl:'assets/images/food-2.jpg',
        tags:['Lunch']
    },
    {
        id:'3',
        name:'burger',
        price:5,
        cookTime:'5-20',
        favorite:false,
        origins:['italy'],
        stars:3.0,
        imageUrl:'assets/images/food-3.jpg',
        tags:['FastFood',]
    },

]
export const sample_tags:Tags[]=[
    {name:'All',count:6},
    {name:'FastFood',count:4},
    {name:'Pizza',count:2},
    {name:'Lunch',count:3},
    {name:'SlowFood',count:2},
    {name:'Hamburger',count:1},
    {name:'Fry',count:1},
    {name:'Soup',count:1},

]
