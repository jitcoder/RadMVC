import {Rad} from 'radmvc';
import TodoEntry from 'components/todoentry';
import Separator from 'components/separator';
import TodoList from 'components/todolist';
import ItemModel from 'models/itemmodel';

export default class TodoController extends Rad.Controller{
    
    constructor(){
        super();
        
        this.items = [];
        
        ItemModel.fetchAll((data)=>{
           this.items =  data;
        });
    }
    
    index(){
        return <div>
            <Entry onAddItem={Rad.TodoController.addItem}/>
            <Separator />
            <TodoList items={this.items} onRemoveItem={Rad.TodoController.removeItem} />
        </div>;
    }
    
    removeItem(index){
        this.items.splice(index,1);
        Rad.TodoController.refresh();
    }
    
    addItem(newItem){
        this.items.push(newItem);
        Rad.TodoController.refresh();
    }
}

Rad.Controllers.TodoController = TodoController;