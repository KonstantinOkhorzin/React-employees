import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    const [data, setData] = useState([
        { name: 'John C.', salary: 800, increase: false, rise: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, rise: true, id: 3 }
    ]);

    const employees = data.length;//общее кол. сотрудников
    const increased = data.filter(item => item.increase).length;//сотрудники на повышение

    const onDeleteItem = (id) => {
        setData(data.filter(item => item.id !== id))
    }

    const addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: uuidv4()
        }
        setData([...data, newItem])
    }

    //Функция которая меняет состояние значения определенного обьекта
    // const onToggleIncrease = (id) => {
    //     setData(data.map(item => {
    //         if (item.id === id) {
    //             return { ...item, increase: !item.increase }
    //         }
    //         return item;
    //     })
    //     )
    // };

    //Универсальная функция для изменения нескольких состояний
    const onToggleProp = (id, prop) => {
        setData(data.map(item => {
            if (item.id === id) {
                return { ...item, [prop]: !item[prop] }
            }
            return item;
        })
        )
    }


    return (
        <div className="app">
            <AppInfo employees={employees} increased={increased} />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />

            </div>

            <EmployeesList
                data={data}
                onDeleteItem={onDeleteItem}
                onToggleProp={onToggleProp} />
            <EmployeesAddForm
                addItem={addItem} />

        </div>
    );
}

export default App;