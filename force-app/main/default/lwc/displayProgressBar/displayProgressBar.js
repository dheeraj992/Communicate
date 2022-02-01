import { LightningElement } from 'lwc';

export default class DisplayProgressBar extends LightningElement {

    changeProgressValue=10;
    handlechange(event){
        this.changeProgressValue=event.target.value;
    }
}