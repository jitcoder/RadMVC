import {Rad,React} from 'radmvc';
import UserModel from 'models/usermodel';
import UserList from 'components/userlist';
import CreateUser from 'components/createuser';

export default class UserController extends Rad.Controller{
    constructor(){
        super();
        
        this.users = [];
        
        this.users.push(new UserModel({
            username:'Bob',
            email:'bob@bob.com',
            firstname:'bob',
            lastname:'marley'
        }));
        
    }

    index(){
        return <UserList onAddUser={Rad.UserController.createUser} onChangeView={Rad.UserController.helloWorld} users={this.users} />;
    }
    
    createUser(){
        return <CreateUser addUser={Rad.UserController.addUser}/>;
    }
    
    addUser(newuser){
        debugger;
        this.users.push(new UserModel(newuser));
        Rad.UserController.index();
    }
   
    helloWorld(){
        return <div>
            Hello World
            <button onClick={Rad.UserController.index}>Go Back</button>
        </div>;
    }

}

Rad.Controllers.UserController = UserController;
