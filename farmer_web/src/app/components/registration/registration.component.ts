import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Farmer } from '../../entity/farmer';
import { FarmerService } from '../../services/farmer.service';

@Component({
  selector: 'app-registration',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  createAccount=false;

  farmer:Farmer=new Farmer();
message:string='';

  constructor(private service:FarmerService,
    private router:Router
  ){}


  onSubmit(){
    this.service.saveFarmer(this.farmer).subscribe(data=>{
      this.message=data;
      this.createAccount=true;
      setTimeout(()=>{
        this.goToList();
      },5000);
      
    })

    }
  
    goToList(){
      this.router.navigate(['/list'])
    }

    

  }

