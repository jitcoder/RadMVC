import React from 'react';
import UserModel from 'models/usermodel';

export default class UserList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let users = [];
        for(let i = 0; i < this.props.users.length; i++){
            users.push(<li key={'userlist_' + i}>Username: {this.props.users[i].username}</li>);
        }
        
        return <div>
            <ul>{users}</ul>
            <button onClick={this.props.onChangeView}>Change View</button>
        </div>;
    }
}

UserList.propTypes = {
    users:React.PropTypes.arrayOf(React.PropTypes.instanceOf(UserModel)).isRequired,
    onChangeView:React.PropTypes.func.isRequired
};
