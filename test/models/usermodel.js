import {Rad} from 'radmvc';

export default class UserModel extends Rad.AjaxModel{
    constructor(){
        super();
        
        if(arguments.length === 4){
            this._username = arguments[0];
            this._email = arguments[1];
            this._firstname = arguments[2];
            this._lastname = arguments[3];
        }
        else if(arguments.length === 1 && typeof arguments[0] === 'object'){
            this._username = arguments[0].username;
            this._email = arguments[0].email;
            this._firstname = arguments[0].firstname;
            this._lastname = arguments[0].lastname;
        }
    }
   
    static find(query){
        return UserModel.super.get('/user/search');
    }
   
    set username(value){
        if(!value){
            throw "invalid username";
        }
    }
   
    get username(){
        return this._username;
    }
   
    save(){
        super.post('/user',this)
        .catch((e) => {
            throw e.message;
        });
    }
}
