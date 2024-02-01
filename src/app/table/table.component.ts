import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Category } from '../share/model/category';
import { categoryService } from '../services/category.service';
import { DeletePersonDialogComponent } from '../delete-person-dialog/delete-person-dialog.component';
import { MatDialog   } from '@angular/material/dialog';
import { Router, RouterModule } from '@angular/router';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.css'],
  templateUrl: './table.component.html',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule, RouterModule, NgFor  ],
})
export class table implements OnInit {
  displayedColumns: string[] = ['name', 'words', 'lastModified', 'actions'];
  categories: Category[] = [];

  constructor(private categoryService: categoryService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.categories = this.categoryService.list();
  }

  getTodayDateAsString(): string {
    const today = new Date();
    return today.toLocaleDateString();
  }

  deleteCategory(id: number, name: string){
    const dialogRef = this.dialog.open(DeletePersonDialogComponent, { data: name, });

    dialogRef.afterClosed().subscribe((deletionConfirmed) => {
      if (deletionConfirmed === true) {
        this.categoryService.delete(id);
        this.categories = this.categoryService.list();
      }
    });
  }
  navigateToNewCategory(): void {
    this.router.navigate(['/newcategory']);
  }

  handleCategoryAdded(category: Category): void {
    this.categories.push(category);
  }

}