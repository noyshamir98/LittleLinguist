import { Routes } from '@angular/router';
import { table } from './table/table.component';
import { FormComponent } from './form/form.component';
import { Footercomponent } from './footer/footer.component';

export const routes: Routes = [
    {path: '', component: table},
{path: 'form/:id', component: FormComponent },
{path: 'footer', component: Footercomponent},
{path: 'category/:idString', component: FormComponent},
 {path: 'newcategory', component: FormComponent}


];
