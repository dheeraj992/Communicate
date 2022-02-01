import { LightningElement,api } from 'lwc';

export default class SetterChildDemo extends LightningElement {
    userinfo;
    @api
    get detail(){
    return this.userinfo;
    }
    set detail(data){
        this.newage=data.age+1;
       this.userinfo={...data,name:'Dheeraj Mishra',age:this.newage,location:'Delhi'}; 
       
    }
}