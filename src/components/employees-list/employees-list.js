import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;// вытаскиваем id (деструкторизация по остаточному принцыпу)
        return (
            // <EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem key={id} {...itemProps}/> //  или через Spread оператор
        )
    })
    return(
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployeesList;