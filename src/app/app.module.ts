import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { BillingComponent } from './billing/billing.component';
import { BillinghistoryComponent } from './billinghistory/billinghistory.component';
import {ProductServiceService} from './services/product-service.service';
import {RouterModule, Routes} from '@angular/router';
import {
  MatButtonModule, MatCardModule, MatDatepickerModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule,
  MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatSortModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { ProducttableComponent } from './components/producttable/producttable.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import { AddProductComponent } from './add-product/add-product.component';
import {InputTextModule} from 'primeng/inputtext';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
];

@NgModule({
  imports: [
    ...materialModules,
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'product', component: ProductComponent},
      {path: 'billing', component: BillingComponent},
      {path: 'billinghistory', component: BillinghistoryComponent}])
  ],
  providers: [ProductServiceService],
  declarations: [
    AppComponent,
    ProductComponent,
    BillingComponent,
    BillinghistoryComponent,
    ProducttableComponent,
    AddProductComponent,
    CourseDialogComponent,


  ],
  exports: [...materialModules],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent]


})
export class AppModule { }
