import {Rad,React} from 'radmvc';
import TodoItem from 'components/todoitem';
import ItemModel from 'models/itemmodel';

export default class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return <div className="todolist">
            this.props.items.map((item)=>{
                <TodoItem 
                    model={item}
                    onItemChanged={this.props.onItemChanged}
                    onRemoveItem={this.props.onRemoveItem} />
            })
        </div>;
    }
}

TodoList.propTypes = {
    items:React.PropTypes.arrayOf(React.PropTypes.instanceOf(ItemModel)).isRequired,
    onRemoveItem:React.PropTypes.func.isRequired,
    onItemChanged:React.PropTypes.func.isRequired
}