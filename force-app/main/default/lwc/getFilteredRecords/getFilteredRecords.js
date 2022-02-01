import { LightningElement,wire } from 'lwc';
import QueryRecords from '@salesforce/apex/QueryRecordsFromType.QueryRecords';
export default class GetFilteredRecords extends LightningElement {

    SelectedType;
    records
    isnull=false;
    handleType(event){
        this.SelectedType=event.target.value;
    }
    handleClick(){
        QueryRecords({
          type:this.SelectedType  
        }).then(result=>{
            if(result.length>0)
            this.records=result
            else if(result.length==0){
                this.isnull=true;
            }
        })
    }

   /* @wire(QueryRecords,{type:'$SelectedType'})
    records*/

}