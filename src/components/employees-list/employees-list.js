import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;// вытаскиваем id (деструкторизация по остаточному принцыпу)остальные props записываем в обьект itemProps 
        return (
            <EmployeesListItem key={id} 
            {...itemProps} //  или через Spread оператор
            onDelete={() => onDelete(id)}/> 
        )
    })
    return(
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList;