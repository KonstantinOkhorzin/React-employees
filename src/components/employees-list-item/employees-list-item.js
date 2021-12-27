import { useState } from "react";

import "./employees-list-item.css";

const EmployeesListItem = ({name, salary}) => {

    const [increase, setIncrease] = useState(false);
    const [rise, setRice] = useState(false);

    const onIncrease = () => {
        setIncrease(increase => !increase)
    }

    const onRise = () => {
        setRice(rise => !rise)
    }

    //Добавляем класс активному елементу
    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames += ' increase';
    }

    //Добавляем класс активному елементу
    if (rise) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span 
            onClick={onRise}
            className="list-group-item-label">
                {name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>

                <button 
                    onClick={onIncrease}
                    type="button" 
                    className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button" className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>

            </div>
        </li>
    )
}

export default EmployeesListItem;