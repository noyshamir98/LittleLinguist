import { Injectable } from '@angular/core';
import { Category } from '../share/model/category';

@Injectable({
  providedIn: 'root'
})
export class categoryService {
 private categories  = new Map<number, Category>();
  nextId = 0;
  constructor() {  
  }

  list(): Category[] {
    return Array.from(this.categories.values());
  }

  get(id: number): Category | undefined {
    return this.categories.get(id);
  }

  delete(id: number): void {
    this.categories.delete(id);
    
  }

  add(newCategory: Category) {
    const currentTimestamp = new Date();
    newCategory.id = this.nextId;
    this.categories.set(this.nextId, newCategory);
    this.nextId++;
  }

  update(updatedCategory: Category): void {
    if (this.categories.has(updatedCategory.id)) {
      const currentTimestamp = new Date();
      updatedCategory.lastUpdateDate = currentTimestamp;
      this.categories.set(updatedCategory.id, updatedCategory);
    }
  }

 


}
