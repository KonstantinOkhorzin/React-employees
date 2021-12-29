import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDeleteItem, onToggleProp}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;// Деструкторизация по остаточному принципу
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDeleteItem={() => onDeleteItem(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;