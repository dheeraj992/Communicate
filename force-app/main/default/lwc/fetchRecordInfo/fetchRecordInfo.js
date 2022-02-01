import { LightningElement,wire,api } from 'lwc';
import RecordData from '@salesforce/apex/RecordData.RecordData';
export default class FetchRecordInfo extends LightningElement {

    @api recordId;

    CarDetails=[];
    @wire(RecordData,{recordid:'$recordId'})
    RecordDetails({data,error}){

       if(data){
        this.CarDetails=data;

        error=undefined;   
       }
       else
       data=undefined; 
    }
    get RecordInfo(){
        return this.CarDetails;
    }
    get CarName(){
        return this.CarDetails[0].Name;
    }
    get Price(){
        return this.CarDetails[0].Price__c;
    }
    get Specifications(){
        return this.CarDetails[0].Specifications__c;
    }



   

    

}