import {Rad,React} from 'radmvc';
import TodoItem from 'components/todoitem';
import ItemModel from 'models/itemmodel';

export default class TodoList extends React.Component{
    constructor(props){
        super(props);
        
        this.renderChildren = this.renderChildren.bind(this);
    }
    
    renderChildren(){
        let result = [];
        
        for(let i = 0; i < this.props.items.length; i++){
            result.push(<TodoItem
                    key={'todoitem_'+i}
                    model={this.props.items[i]}
                    onItemChanged={this.props.onItemChanged}
                    onRemoveItem={this.props.onRemoveItem} />);
        }
        
        return result;
    }
    
    render(){
        return <div className="todolist">
            {this.renderChildren()}
        </div>;
    }
}

TodoList.propTypes = {
    items:React.PropTypes.arrayOf(React.PropTypes.instanceOf(ItemModel)).isRequired,
    onRemoveItem:React.PropTypes.func.isRequired,
    onItemChanged:React.PropTypes.func.isRequired
}