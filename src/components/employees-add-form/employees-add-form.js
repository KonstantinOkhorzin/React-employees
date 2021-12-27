import { useState } from "react";

import './employees-add-form.css';

const EmployeesAddForm = () => {

    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');

    return (
        <div className="app-add-form">
            <h3>Добавить нового сотрудника</h3>
            <form className="add-form d-flex">
                <input
                    onChange={e => setName(e.target.value)}
                    value={name}
                    type="text" 
                    className="form-control new-post-label" 
                    placeholder="Как его зовут"/>
                <input 
                    onChange={e => setSalary(e.target.value)}
                    value={salary}
                    type="number" 
                    className="form-control new-post-label" 
                    placeholder="З/П в $?"/>
                <button type="submit" className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;