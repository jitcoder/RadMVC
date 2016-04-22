import Rad from 'radmvc';
import UserModel from 'models/usermodel';
import UserList from 'components/userlist';

import React from 'react';

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
        return <UserList onChangeView={Rad.UserController.helloWorld} users={this.users} />;
    }
   
    helloWorld(){
        return <div>
            Hello World
            <button onClick={Rad.UserController.index}>Go Back</button>
        </div>;
    }

}

Rad.Controllers.UserController = UserController;
