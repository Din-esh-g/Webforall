import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { PropertyService } from 'src/app/_Services/property.service';
import { Property } from 'src/app/_Models/Property';
import { AlertifyService } from 'src/app/_Services/alertify.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Pagination } from 'src/app/_Models/pagination';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  property: Property[];
  pagination: Pagination;
  values: any;
  model: any = {};
  @Output() cancelpost = new EventEmitter();
 // property: Property;
  propertyPostForm: FormGroup;
  // @ViewChild('propertyPostForm', { static: true }) propertyPostForm: NgForm;
  constructor(private propertyService: PropertyService,
    private route: ActivatedRoute, private alertify: AlertifyService) { }

  ngOnInit() {
    this.getallproperty();

    this.route.data.subscribe(data => {
      this.values = data['values'].result;
      this.pagination = data['property'].pagination;
    });
  }




  getallproperty() {
    this.propertyService.getMthod().subscribe(response => {
      this.values = response;
    },
      error => {
        this.alertify.error('Error to load the data');

      });
  }

  pageChanged(event: any): void {
    this.pagination.currentPage = event.page;
    this.getallproperty();
  }
//
  deleteMessage(id: number) {
    this.alertify.confirm('Are you sure you want to delete this property. ', () => {
      this.propertyService.deleteProperty(id).subscribe(() => {
        this.property.splice(this.property.findIndex(m => m.id === id), 1);
        this.alertify.success('Property has been deleted. ');
      }, error => {
        this.alertify.error('Failed to delete the Property.');
      });
    });
  }
  //

  postproperty() {

     this.propertyService.registerproperty(this.model).subscribe(() => {
      this.alertify.success('Property Posted Sucessfully.');
      this.propertyPostForm.reset();
    }, error => {
      this.alertify.error('Problem to post the property.');
    });
  }
  cancel() {
    this.alertify.error('Your form canceled. ');
    this.cancelpost.emit(false);
    this.propertyPostForm.reset();

  }
}


