import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

    // const [data, setData] = useState([
    //     { name: 'John C.', salary: 800, increase: false, rise: false, id: 1 },
    //     { name: 'Alex M.', salary: 3000, increase: false, rise: true, id: 2 },
    //     { name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
    // ]);

    const [data, setData] = useState(
        JSON.parse(localStorage.getItem('data')) || []
    );

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data]);

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');

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

    //Функция для поиска
    const searchEmp = (data, term) => {
        if (term.length === 0) {
            return data
        }

        return data.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    //Функция для обновления поиска
    const onUpdateSearch = (term) => {
        setTerm(term)
    }

    //Функция для фильтрации
    const filterPost = (data, filter) => {
        switch (filter) {
            case 'rise':
                return data.filter(item => item.rise);
            case 'moreThen1000':
                return data.filter(item => item.salary > 1000);
            default:
                return data
        }
    }

    const visibleData = filterPost(searchEmp(data, term), filter);//массив отфильтрованный по поиску и филтру

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    return (
        <div className="app">
            <AppInfo employees={employees} increased={increased} />

            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch}/>
                <AppFilter filter={filter} onFilterSelect={onFilterSelect}/>

            </div>

            <EmployeesList
                data={visibleData}
                onDeleteItem={onDeleteItem}
                onToggleProp={onToggleProp} />
            <EmployeesAddForm
                addItem={addItem} />

        </div>
    );
}

export default App;