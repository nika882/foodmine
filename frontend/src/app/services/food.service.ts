import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Observable, catchError, sample, tap } from 'rxjs';
import { Tags } from '../shared/models/Tags';
import { HttpClient } from '@angular/common/http';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Food[]>{
  return this.http.get<Food[]>(FOODS_URL);}
  /*getAll():Food[]{return sample_foods;}*/

  /*getAllFoodsBySearchTerm(searchTerm:string):Food[]{
  //*როცა ვეძებთ რაღაცას დიდი და პატარა სოების შეყვანის შემთხვევაში ეს მეთოდი გვეხმარება გამოვიყენთ ორივე
  return this.getAll().filter(food=>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()));
}*/
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL+searchTerm)}
/*getAllTags():Tags[]{
  return sample_tags;
}*/
  /*getAllTags(): Observable<Tags[]>{
    return this.http.get<Tags[]>(FOODS_BY_TAG_URL)
}*/
getAllTags(): Observable<Tags[]> {
  return this.http.get<Tags[]>(FOODS_BY_TAG_URL)
      .pipe(
          tap(tags => console.log('Tags received:', tags)),
          catchError(error => {
              console.error('Error fetching tags:', error);
              throw error;
          })
      );
}

/* terner operation staitment?job1:job2*/ 
/*getAllFoodsByTag(tag:string):Food[]{
return tag=="All"?
this.getAll():
this.getAll().filter(food=>food.tags?.includes(tag));
}*/
getAllFoodsByTag(tag:string):Observable<Food[]>{
  return tag=="All"?
    this.getAll():
    this.http.get<Food[]>(FOODS_TAGS_URL+tag)}

/*getFoodById(id:number):Food{
return this.getAll().find(food=> food.id == id.toString())!;
}*/
/*getFoodById(foodid:string):Food{
  return this.getAll().find(food=>food.id==foodid) ?? new Food
}*/
  getFoodById(foodid:number):Observable<Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL+foodid)
}
}

