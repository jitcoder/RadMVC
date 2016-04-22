import Rad from 'rad';
import UserList from '/components/userlist';

class UserModel extends Rad.AjaxModel{
    constructor(username,email,firstname,lastname){
        this._username = username;
        this._email = email;
        this._firstname = firstname;
        this._lastname = lastname;
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
        .catch((e)=> throw e);
    }
}
 
class UserController extends Rad.Controller{
    constructor(){
        this.users = [];
    }
   
    addUser(newUser){
        if(newUser instanceof UserModel){
            newUser.save();
            this.users.push(newUser);
        }
        else{
            throw "invalid user object provided";
        }
       
        Rad.UserController.index();
    }
   
    index(){
        return <div>
            <AddUser onAddUser={this.addUser}/>
            <UserList onUserChanged={this.userChanged} users={this.users} />
        </div>;
    }
   
    userChanged(userId){
        Rad.SalesController.sales(userId);
    }
}
 
class SalesController extends Rad.Controller{
    constructor(){
        //initial ajax
    }
   
    index(){
        return <div>Please select a user</div>;
    }
   
    sales(userId){
        return <SalesScreen userId={userId} />;
    }
}
 
<div controller="MyController"></div>
<div controller="OtherController"></div>
 
 
