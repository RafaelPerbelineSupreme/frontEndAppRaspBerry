import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.page.html',
  styleUrls: ['./conta.page.scss'],
})
export class ContaPage implements OnInit {
  //valorSegui = null;
  valorSeg = null;
  constructor() { 
    //this.valorSegui = true;
    this.valorSeg = 'cartao';
  }

  ngOnInit() {
  }

  customPopoverOptions: any = {
    header: 'Vaga Especial',
    message: 'Selecione uma'
  };

  segmentChanged(ev: any) {
    this.valorSeg = ev.detail.value;
    if(this.valorSeg === "cartao"){
      //this.valorSegui = true;
      console.log("1");
    }
    else if(this.valorSeg === "aVista"){
      //this.valorSegui = false;
      console.log("2");
    }
    console.log(this.valorSeg, ev);
  }
}
