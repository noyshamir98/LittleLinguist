import { Component, Input, OnInit } from '@angular/core';
import { categoryService } from '../services/category.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog'; 
import { FormsModule, NgForm, NgModel } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Language } from '../share/model/language';
import { Category } from '../share/model/category';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TranslatedWord } from '../share/model/translateword';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatIconModule, MatButtonModule, CommonModule, MatInputModule, MatFormFieldModule, MatTableModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @Input() idString?: string;
  currentCategory: Category =  new Category(0, '' , Language.English, Language.Hebrew)
  constructor(private categoryService: categoryService, private router: Router, private route: ActivatedRoute) {
    
  }
  ngOnInit(): void {
        if (this.idString) {
          let id: number = parseInt(this.idString);
          this.idString = this.idString;
          const category = this.categoryService.get(id);
          if (category) {
            this.currentCategory = category;
          } 
        }   
    }
  onSubmitRegistration() {
    if (this.idString) {
      this.categoryService.update(this.currentCategory);
    } else {
      this.categoryService.add(this.currentCategory);
      this.idString = this.currentCategory.id.toString();
    }
  }
  
  addNewWord() {
    const newWord = new TranslatedWord("", '');
    this.currentCategory.words.push(newWord);
  }
  removeNewWord(index: number): void {
    this.currentCategory.words.splice(index, 1);
   }
  
onSaveCategory(): void {
  if (this.hasAtLeastOneWordPair()) {
  } 

  this.navigateToMainScreen();
}
navigateToMainScreen(): void {
  this.router.navigate(['/']); 
}
showWordPairsTable: boolean = false;
hasAtLeastOneWordPair(): boolean {
  return this.currentCategory.words.length > 0;
}

}