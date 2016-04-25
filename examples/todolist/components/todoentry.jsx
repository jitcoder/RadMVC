import {Rad,React} from 'radmvc';
import ItemModel from 'models/itemmodel';

export default class TodoEntry extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return <div className="todoentry">
            <input type="text" ref="item" />
            <button onClick={this.onAddClick}>Add</button>
        </div>;
    }
    
    onAddClick(e){
        this.props.onAddItem(new ItemModel({item:this.refs.item,completed:false}));
        this.refs.item.value = '';
    }
}

TodoEntry.propTypes = {
    onAddItem:React.PropTypes.func.isRequired
}