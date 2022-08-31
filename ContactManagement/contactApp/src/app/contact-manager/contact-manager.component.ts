import { Component, OnInit } from '@angular/core';
import { MyContact } from '../models/myContact';
import { MyGroup } from '../models/myGroup';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {

  public loading : boolean = false;
  public contacts : MyContact[] = [];
  public errorMessage : string | null = null;
  

  constructor(private cService:ContactService) { }

  ngOnInit(): void {
    this.getAllContactData();
  }

  getAllContactData(){
    this.loading = true;
    this.cService.getAllContacts().subscribe((data:MyContact[])=>{
      this.contacts = data;
      this.loading = false;
    },
    (error)=>{
      this.errorMessage = error;
      this.loading = false;
    })
  }

  deleteContact(contactId:string | undefined){
    if(contactId){
      this.cService.deleteContact(contactId).subscribe((data:{})=>{
        this.getAllContactData();
      },(error)=>{
        this.errorMessage = error;
        this.loading = false;
      })
    }

  }

}
