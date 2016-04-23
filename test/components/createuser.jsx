import {React} from 'radmvc';

export default class CreateUser extends React.Component{
    constructor(props){
        super(props);
        
        this.addUser = this.addUser.bind(this);
    }
    
    render(){
        return <div>
            <label>Username</label>
            <input type="text" ref="username" />
            <br />
            <label>Email</label>
            <input type="text" ref="email" />
            <br />
            <label>First Name</label>
            <input type="text" ref="firstname" />
            <br />
            <label>Last Name</label>
            <input type="text" ref="lastname" />
            <button onClick={this.addUser}>Add</button>
        </div>;
    }
    
    addUser(){
        debugger;
        this.props.addUser({
            username:this.refs.username.value,
            email:this.refs.email.value,
            firstname:this.refs.firstname.value,
            lastname:this.refs.lastname.value
        });
    }
}

CreateUser.propTypes = {
    addUser:React.PropTypes.func.isRequired
};
