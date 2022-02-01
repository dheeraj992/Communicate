import { LightningElement,api } from 'lwc';

export default class ChildLWC extends LightningElement {
    @api
    strOutput;
    @api
    strStream;
}