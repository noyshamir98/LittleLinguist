import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { table } from "./table/table.component";
import { Footercomponent } from "./footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, RouterOutlet, CommonModule, table, Footercomponent]
})
      export class appComponent {
        title(_title: any) {
          throw new Error('Method not implemented.');
        }}
