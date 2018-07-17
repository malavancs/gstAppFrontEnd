import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ProductModel} from '../models/product.model';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {MatOption, MatSelect} from '@angular/material';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  form: FormGroup;
  description: string;
  productname: string;
  productcode: string;
  productgst: string;
  productprice: string;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {name, code,
      sno, price, gst}: ProductModel ) {

    this.description = 'ADD PRODUCT DETAILS';


    this.form = fb.group({
      name: [this.productname, Validators.required],
      price: [this.productprice, Validators.required],
      code: [this.productcode, Validators.required],
      gst: [this.productgst, Validators.required]
    });

  }

  ngOnInit() {

  }


  save() {
    this.dialogRef.close(this.form.value);

  this.httpClient.post('http://localhost:4001/products/addProduct', {
    name: this.form.value.name,
    gst: this.form.value.gst,
    code: this.form.value.code,
    price: this.form.value.price
  }).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log('Error occured');
    }
  );
    console.log(this.form.value.name);
  }

  close() {
    this.dialogRef.close();
  }

}
