import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { RestaurantData } from './restaurant.model';

@Component({
  selector: 'app-restaurant-dash',
  templateUrl: './restaurant-dash.component.html',
  styleUrls: ['./restaurant-dash.component.css']
})
export class RestaurantDashComponent implements OnInit {

  formValue !: FormGroup

  restaurantModelObj : RestaurantData = new RestaurantData;

  restaurantAll: any;

  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formBuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: ['']
    })
    this.getAllRestaurants();
  }

  clickAddResto(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  // Subscribing data which is mapped via Services
  addResto(){
    this.restaurantModelObj.name = this.formValue.value.name;  // data from form will be put into modelobj
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;

    // post of info which is stored in modelobj
    this.api.postRestaurant(this.restaurantModelObj).subscribe(res=>{
      console.log(res);
      alert("Restaurant Added Successfully");
      this.formValue.reset();
      this.getAllRestaurants();    // instead of refreshing page after every add resto
    },
    err=>{
      alert("Something Went Wrong");
    })

    // FORM DATA to MODELOBJ and MODELOBJ to POST
  }

  // VIEW ALL RESTAURANT
  getAllRestaurants(){
    this.api.getRestaurant().subscribe(res=>{this.restaurantAll=res;})
  }

  // DELETE RESTAURANT
  deleteResto(data:any){
    this.api.deleteRestaurant(data.id).subscribe(res=>{
      alert("Restaurant Deleted Successfully");
      this.getAllRestaurants(); // instead of refreshing page after every delete resto
    })
  }

  // EDIT RESTAURANT
  onEditResto(data:any){

    this.showAdd=false;
    this.showUpdate=true;

    this.restaurantModelObj.id = data.id;

    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
  }

  // UPDATE RESTAURANT
  updateResto(){
    this.restaurantModelObj.name = this.formValue.value.name;  // data from form will be put into modelobj
    this.restaurantModelObj.email = this.formValue.value.email;
    this.restaurantModelObj.mobile = this.formValue.value.mobile;
    this.restaurantModelObj.address = this.formValue.value.address;
    this.restaurantModelObj.services = this.formValue.value.services;

    this.api.updateRestarurant(this.restaurantModelObj,this.restaurantModelObj.id).subscribe(res=>{
      alert("Updated Successfully");
      this.formValue.reset();
      this.getAllRestaurants();
    })
  }

}
