import {Rad, React} from 'radmvc';
import 'sass/todoitem.scss';

export default class TodoItem extends React.Component{
    constructor(props){
        super(props);

        this.onCompletedChanged = this.onCompletedChanged.bind(this);
    }
    
    render(){
        return <div className="todoitem">
            {this.props.model.item}
            <input 
                ref="completed"
                type="checkbox" 
                onChange={this.onCompletedChanged}
                checked={this.state.model.completed} />
            <img src="/imgs/delete.png" onClick={this.onRemoveItem}/>
        </div>;
    }
    
    onCompletedChanged(e){
        this.props.model.completed = e.target.checked;
        this.props.onItemChanged(this.props.model);
    }
    
    onRemoveItem(e){
        this.props.onRemoveItem(this.props.model);
    }
    
}

TodoItem.propTypes = {
    onRemoveItem:React.PropTypes.func.isRequired,
    onItemChanged:React.PropTypes.func.isRequired
}