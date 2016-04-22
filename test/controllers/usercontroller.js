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
        
        this.addUser = this.addUser.bind(this);
        this.index = this.index.bind(this);
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
            Hello World
            <UserList onUserChanged={this.userChanged} users={this.users} />
        </div>;
    }
   
    userChanged(userId){
        Rad.SalesController.sales(userId);
    }
}

Rad.Controllers.UserController = UserController;
