import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {

    state=true;

    handlestate(){
        this.state=false;
        const customevent=new CustomEvent("statechange",{
          detail:this.state  
        });
        this.dispatchEvent(customevent);

    }
}