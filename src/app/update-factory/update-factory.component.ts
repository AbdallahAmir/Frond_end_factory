import { Component, OnInit } from '@angular/core';
import { Factory } from '../entities/Factory';
import { FactoryService } from '../service/factory.service';


@Component({
  selector: 'update-factory',
  templateUrl: './update-factory.component.html',
  styleUrls: ['./update-factory.component.scss']
})
export class UpdateFactoryComponent implements OnInit {
  factory: Factory = new Factory();
      
  constructor(private factoryService:FactoryService ) { }

  ngOnInit() {
  }

  getFactory(factoryid:Number){
    this.factoryService.getFactory(factoryid).subscribe(data=>
      {this.factory=data
        console.log(this.factory)})
    
    }
    updateFactory(factoryid:Number,fact:Factory){
      return this.factoryService.updateFactory(factoryid,fact).subscribe(data=>
        {console.log(data),alert("update done")}
        );
    }

}
