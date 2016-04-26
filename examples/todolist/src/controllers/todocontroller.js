import {Rad,React} from 'radmvc';
import TodoEntry from 'components/todoentry';
import TodoList from 'components/todolist';
import ItemModel from 'models/itemmodel';
import 'sass/separator.scss';

export default class TodoController extends Rad.Controller{
    
    constructor(){
        super();
        
        this.items = [];
        
        ItemModel.fetchAll((data)=>{
           this.items =  data;
           Rad.TodoController.refresh();
        });
    }
    
    index(){
        return <div>
            <TodoEntry onAddItem={Rad.TodoController.addItem}/>
            <div className="separator"></div>
            <TodoList 
            items={this.items}
            onRemoveItem={Rad.TodoController.removeItem}
            onItemChanged={Rad.TodoController.updateItem}
            />
        </div>;
    }
    
    removeItem(model){
        for(let i = 0; i < this.items.length; i++){
            if(this.items[i].item === model.item){
                this.items.splice(index,1);
                model.remove();
                break;
            }
        }
        
        Rad.TodoController.refresh();
    }
    
    updateItem(model){
        model.update();
        Rad.TodoController.refresh();
    }
    
    addItem(newItem){
        this.items.push(newItem);
        Rad.TodoController.refresh();
    }
}

Rad.Controllers.TodoController = TodoController;