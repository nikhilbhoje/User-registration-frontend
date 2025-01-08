import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../../services/farmer.service';
import { Farmer } from '../../entity/farmer';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  constructor(private farmerService:FarmerService){}

  flag:boolean=false;
  message:string='';

  ngOnInit(): void {
    this.getAllFarmer();
  }
  
  farmers:Farmer[]=[];

  getAllFarmer(){
    this.farmerService.getAllFarmer().subscribe(data=>{
      this.farmers=data;
    })

    console.log(this.farmers)
  }

  deleteFarmer(id:number){
    const isConfirm=window.confirm('Are you sure you want to Delete')
    if(isConfirm){
        this.flag=true
      this.farmerService.deleteFarmer(id).subscribe(data=>{
        this.message=data;
        setTimeout(()=>{
          window.location.reload();
        });
      })
    }
    
  }

}
