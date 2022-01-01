import { useState } from 'react';

import './search-panel.css';


const SearchPanel = ({onUpdateSearch}) => {

    const [searchTerm, setSearchTerm] = useState('');

    const onUpdate = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        onUpdateSearch(term)//передаем данные в главный компонент
    }

    return (
        <input
            value={searchTerm}
            onChange={onUpdate}
            type="text" 
            className="form-control search-input" 
            placeholder="Найти сотрудника"/>
    )      
}

export default SearchPanel;