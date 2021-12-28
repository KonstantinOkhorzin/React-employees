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
        { name: 'John C.', salary: 800, increase: false, id: 1 },
        { name: 'Alex M.', salary: 3000, increase: true, id: 2 },
        { name: 'Carl W.', salary: 5000, increase: false, id: 3 }
    ]);

    const onDeleteItem = (id) => {
        setData(data.filter(item => item.id !== id))
    }
     
    const addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: uuidv4()
        }
        setData([...data, newItem]) 
    }


    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />

            </div>

            <EmployeesList
                data={data}
                onDeleteItem={onDeleteItem} />
            <EmployeesAddForm 
                addItem={addItem}/>

        </div>
    );
}

export default App;