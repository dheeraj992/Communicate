import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    strInput;
    strIn;

    handleChange( event ) {

        this.strInput = event.target.value;

    }
    handleStream(event){
        this.strIn=event.target.value;
    }
}