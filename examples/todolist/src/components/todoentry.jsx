import Rad from 'radmvc';
import React from 'react';
import ItemModel from 'models/itemmodel';
import 'sass/todoentry.scss';

export default class TodoEntry extends React.Component{
    
    constructor(props){
        super(props);
        
        this.onAddClick = this.onAddClick.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }
    
    render(){
        return <div className="todoentry">
            <span>
                <input type="text" ref="item" onKeyPress={this.onKeyPress} />
            </span>
            <button onClick={this.onAddClick}>Add</button>
        </div>;
    }
    
    onKeyPress(e){
        if(e.key === 'Enter'){
            this.onAddClick();
        }
    }
    
    onAddClick(e){
        this.props.onAddItem(new ItemModel(this.refs.item.value,false));
        this.refs.item.value = '';
    }
}

TodoEntry.propTypes = {
    onAddItem:React.PropTypes.func.isRequired
}