import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {ProductModel} from '../models/product.model';
import {ProductServiceService} from '../services/product-service.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddProductComponent} from '../add-product/add-product.component';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'GST BILLING APP';
  dialogRef: any;
  arrBirds: string[];
  private serviceUrl = 'https://gst-billing-backend.herokuapp.com/products/getAllProduct';
  constructor(private http: HttpClient, private dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.http.get(this.serviceUrl).subscribe(data => {
      console.log(data);
      this.arrBirds = data as string [];
    });
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

   // this.dialog.open(CourseDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {console.log('Dialog output:', data);
      this.ngOnInit();
      }

    );
  }


  addButton(): void {
    this.openDialog();

  }

}



