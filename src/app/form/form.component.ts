import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersonService } from '../services/person.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog'; // הוספת import עבור MatDialog
import { FormsModule, NgForm } from '@angular/forms'; // הוספת import עבור NgForm
import { Router } from '@angular/router';
import { Language, TranslatedWord } from '../share/model/language';
import { Category } from '../share/model/category';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatIconModule,MatButtonModule, CommonModule, MatInputModule, MatFormFieldModule,MatTableModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() idString?: string;
  @Output() registrationComplete: EventEmitter<Category> = new EventEmitter<Category>();
  ngOnInit(): void {
    if (this.idString) {
    let id:number = parseInt(this.idString);
    const category = this.personService.get(id);
    if (category) {
    this.currentcategory = category;
    }
    }}
    
  displayedColumns: string[] =
 ['origin','target', 'actions'];

  currentcategory: Category = {
    name: '',
    id: 0,
    origin: Language.English,
    target: Language.Hebrew,
    words: [],
    lastUpdateDate: new Date,
  }

  newWords: TranslatedWord[] = [];

  constructor(private personService: PersonService, private router: Router, private dialog: MatDialog) {}

  navigateToNewCategory(): void {
    this.router.navigate(['/your-new-category-route']);
  }
 
  // פונקציה לשליחת הטופס
  onSubmitRegistration(registrationForm: NgForm) {
    this.currentcategory.words.push(...this.newWords);
    if (this.idString) {
      this.personService.update(this.currentcategory);
    } else {
      this.personService.add(this.currentcategory);
    }

    // איפוס המילים החדשות והטופס
    this.currentcategory.words = [];

    // מעבר לדף אחר או כל פעולה נדרשת
  
  }
  showNewWordInputs = false;
  // פונקציה למחיקת מילה
  deleteWordPair(index: number): void {
    this.currentcategory.words.splice(index, 1);
  }

  // פונקציה להוספת מילה חדשה
  addNewWord(): void {
    this.showWordPairsTable = true;
    this.newWords.push({ origin: '', target: '' });
  }
  
  removeNewWord(index: number): void {
    this.newWords.splice(index, 1);
    if (this.newWords.length === 0) {
      this.showWordPairsTable = false;
    }
  }

onSaveCategory(): void {

  this.currentcategory.words.push(...this.newWords);
  
  
  // איפוס המילים החדשות והטופס
  this.newWords = [];

  // מעבר לדף אחר, במקרה זה - מסך הראשי
  this.navigateToMainScreen();
}

// ...

// פונקציה לניווט למסך הראשי
navigateToMainScreen(): void {
  this.router.navigate(['/']); // כדי לניווט למסך הראשי
}
showWordPairsTable: boolean = false;
}
