import './Todo.css';

const Todo = ({id, title, description, onDelete}) => {
    return (
      <div className="boxes">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{`TODO: ${id}`}</p>
        <button className="closebtn" onClick={() => onDelete(id)}>X</button>
      </div>
    )
  }
  
  export default Todo