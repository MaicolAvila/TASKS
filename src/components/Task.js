import React, {Component} from 'react';
import propTypes from 'prop-types';
import '../form.css';
import delete_90964 from './delete_90964.svg';

//this.props.donde ?, se utiliza para condicionar el aspecto
class Task extends Component{

    styleCompleted(){
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
            

        }
    }


    render(){
    const {task} = this.props;
  
        return <div >
            <div className='Btns'>
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
            <button className='delete' style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
              <img src={delete_90964} width='25px' className='delete'/>
            </button>
            </div>
            
            
            <div style={this.styleCompleted()} className="content">
            <p className='taskTitle'>{task.title}<span className='igual'>   = </span></p> 
            <p className='descriptionTask'>{task.description}</p> 
            <p>{task.done}</p> 
            
            
            </div>
            
        </div>
    }
}

//propTypes se utuliza para verificar que tipo de valor se ingresa
Task.propTypes = {
   task: propTypes.object.isRequired  
}



const btnDelete = {
    fontSize: '18px',
    background: '#23262e',
    color: '#b3acbd',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    float: 'center',
  
}

export default Task;