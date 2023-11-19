import React, { useState, useEffect } from 'react';
import './App.css'; 
import Navbar from './components/Navbar';
import Status from './pages/Status';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [sortOption, setSortOption] = useState('priority');
    const [groupingOption, setGroupingOption] = useState('status');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
                const data = await response.json();

                setTickets(data.tickets);
                setUsers(data.users);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if(localStorage.getItem('sortOption') == null){
            localStorage.setItem('sortOption', sortOption);
        }
        else{
            setSortOption(localStorage.getItem('sortOption'))
        }

        if(localStorage.getItem('groupingOption') == null){
            localStorage.setItem('groupingOption', groupingOption);
        }
        else{
            setGroupingOption(localStorage.getItem('groupingOption'))
        }

    })

    const handleSortChange = (option) => {
        setSortOption(option);
        localStorage.setItem('sortOption', option);
    };

    const handleGroupingSortChange = (option) => {
        setGroupingOption(option);
        localStorage.setItem('groupingOption', option);
    };

    return (
        <BrowserRouter>
            <Navbar handleSortChange={handleSortChange} sortOption={sortOption} handleGroupingSortChange={handleGroupingSortChange} groupingOption={groupingOption}  />
            <Routes>
                <Route path="/" exact element={<Status tickets={tickets} sortOption={sortOption} groupingOption={groupingOption} users={users}  />} />
            </Routes >
        </BrowserRouter>
    );
};




export default App;

