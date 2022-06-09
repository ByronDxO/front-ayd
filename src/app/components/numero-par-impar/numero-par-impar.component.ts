import { Component, HostBinding, OnInit } from '@angular/core';
import{CubicaService} from '../../services/cubica.service';
@Component({
  selector: 'app-numero-par-impar',
  templateUrl: './numero-par-impar.component.html',
  styleUrls: ['./numero-par-impar.component.scss']
})
export class NumeroParImparComponent implements OnInit {
  @HostBinding('class') classes = 'row' ;
  num:any;
  constructor(private cubicaservice: CubicaService) { }

  ngOnInit(): void {
  }

  game(){
    console.log(this.num);
  }
}
