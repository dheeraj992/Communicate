import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {

    ShowModal=false;
   
    handleModal(){
       this.ShowModal=true; 
    }
    handleEvent(event){
        this.ShowModal=event.detail;
    }
}