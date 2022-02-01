import { LightningElement,api } from 'lwc';

export default class ChildProgress extends LightningElement {

   @api 
   changeProgress; 
   @api
   trackedValue;
}