import React, {Component} from 'react';
import '../form.css';
class TaskForm extends Component{

    state = {
     title: '',
     description: ''
    }

    onSubmit = e =>{
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e =>{
        
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        
        return(
            <form onSubmit={this.onSubmit} className='formulario'>
                
                <input 
                    className='tittle'
                    type="text" 
                    name="title"
                    placeholder="Write a Task " 
                    onChange={this.onChange} 
                    value={this.state.title} 
                />
                <input type="submit" className='submit'/>
                
                <textarea 
                    className='description'
                    name="description"
                    placeholder="Write a Description" 
                    onChange={this.onChange} 
                    value={this.state.description} >
                </textarea>
            
                
            </form>
        )
    }
    

}

export default TaskForm;