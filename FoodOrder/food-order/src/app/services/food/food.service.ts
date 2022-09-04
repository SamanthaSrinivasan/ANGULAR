import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food=> food.id == id)!;
  }

  getAllFoodByTag(tag:string):Foods[]{
    if(tag == 'All')
      return this.getAll()
    else 
      return this.getAll().filter(food => food.tags?.includes(tag)); 
  }

  getAllTag():Tag[]{
    return[
      {name:'All',count:20},
      {name:'fastfood',count:3},
      {name:'burger',count:4},
      {name:'snacks',count:3},
      {name:'pizza',count:1},
      {name:'lunch',count:2},
      {name:'dinner',count:7},
      {name:'fries',count:4},
      {name:'soup',count:5},
      {name:'fry',count:2}
    ];
  }

  getAll():Foods[]{
    return [
      {
        id: 1,
        name: 'Burger',
        cookTime: '10-20',
        price: 70,
        favorite: true,
        origins: ['Italy'],
        star: 2,
        imageUrl: '/assets/burger.jpg',
        tags: ['fastfood','burger','snacks'] 
      },
      {
        id: 2,
        name: 'Pizza',
        cookTime: '40-50',
        price: 190,
        favorite: true,
        origins: ['Monaco'],
        star: 3.5,
        imageUrl: '/assets/pizza.jpg',
        tags: ['fastfood','pizza','dinner'] 
      },
      {
        id: 3,
        name: 'French Fries',
        cookTime: '15-20',
        price: 50,
        favorite: false,
        origins: ['Belgium','France'],
        star: 2.5,
        imageUrl: '/assets/frenchfries.jpg', 
        tags: ['fries','snacks'] 
      },
      {
        id: 4,
        name: 'Manchow',
        cookTime: '25-30',
        price: 80,
        favorite: true,
        origins: ['Australia'],
        star: 4.5,
        imageUrl: '/assets/manchow.jpg', 
        tags: ['soup','snacks'] 
      },
      {
        id: 5,
        name: 'Gobi Manchurian',
        cookTime: '15-20',
        price: 40,
        favorite: false,
        origins: ['America'],
        star: 2.5,
        imageUrl: '/assets/gobi.jpg', 
        tags: ['fry','snacks'] 
      },
      {
        id: 6,
        name: 'Pulav',
        cookTime: '30-50',
        price: 120,
        favorite: false,
        origins: ['Japan'],
        star: 1.5,
        imageUrl: '/assets/pulav.jpg', 
        tags: ['lunch','dinner'] 
      },
    ];
  }

}
