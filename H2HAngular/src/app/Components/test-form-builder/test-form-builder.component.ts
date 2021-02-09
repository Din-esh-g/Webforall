import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-test-form-builder',
  templateUrl: './test-form-builder.component.html',
  styleUrls: ['./test-form-builder.component.scss']
})
export class TestFormBuilderComponent implements OnInit {
//form Builder
  constructor(private fb: FormBuilder) { }

  

  productRegisterForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    dateofSale: ['null', CustomValidators.maxDate(new Date)],
    price: ['', Validators.required],


  });


  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.productRegisterForm.value);
    console.log(this.productRegisterForm.validator);
  }
}
