import React, { useState, useEffect } from 'react';
import './App.css'; // You may need to create this CSS file for styling
import Navbar from './components/Navbar';
import Status from './pages/Status';
import Users from './pages/Users';
import Priority from './pages/Priority';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const [sortOption, setSortOption] = useState('priority');
    const [groupingOption, setGroupingOption] = useState('status');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Assuming you are fetching data from an API or using an async function
                // For simplicity, I'm directly assigning the JSON data here
                const jsonData = {
                    "tickets": [
                        {
                            "id": "CAM-1",
                            "title": "Update User Profile Page UI",
                            "tag": [
                                "Feature request"
                            ],
                            "userId": "usr-1",
                            "status": "Todo",
                            "priority": 4
                        },
                        {
                            "id": "CAM-2",
                            "title": "Add Multi-Language Support - Enable multi-language support within the application.",
                            "tag": [
                                "Feature Request"
                            ],
                            "userId": "usr-2",
                            "status": "In progress",
                            "priority": 3
                        },
                        {
                            "id": "CAM-3",
                            "title": "Optimize Database Queries for Performance",
                            "tag": [
                                "Feature Request"
                            ],
                            "userId": "usr-2",
                            "status": "cancelled",
                            "priority": 1
                        },
                        {
                            "id": "CAM-4",
                            "title": "Implement Email Notification System",
                            "tag": [
                                "Feature Request"
                            ],
                            "userId": "usr-1",
                            "status": "cancelled",
                            "priority": 3
                        },
                        {
                            "id": "CAM-5",
                            "title": "Enhance Search Functionality",
                            "tag": [
                                "Feature Request"
                            ],
                            "userId": "usr-5",
                            "status": "In progress",
                            "priority": 0
                        },
                        {
                            "id": "CAM-6",
                            "title": "Third-Party Payment Gateway",
                            "tag": [
                                "Feature Request"
                            ],
                            "userId": "usr-2",
                            "status": "Todo",
                            "priority": 1
                        },
                        {
                            "id": "CAM-7",
                            "title": "Create Onboarding Tutorial for New Users",
                            "tag": [
                                "Feature Request"
                            ],
                            "userId": "usr-1",
                            "status": "Backlog",
                            "priority": 2
                        },
                        {
                            "id": "CAM-8",
                            "title": "Implement Role-Based Access Control (RBAC)",
                            "tag": [
                                "Feature Request"
                            ],
                            "userId": "usr-3",
                            "status": "done",
                            "priority": 3
                        },
                        {
                            "id": "CAM-9",
                            "title": "Upgrade Server Infrastructure",
                            "tag": [
                                "Feature Request"
                            ],
                            "userId": "usr-5",
                            "status": "Todo",
                            "priority": 2
                        },
                        {
                            "id": "CAM-10",
                            "title": "Conduct Security Vulnerability Assessment",
                            "tag": [
                                "Feature Request"
                            ],
                            "userId": "usr-4",
                            "status": "Backlog",
                            "priority": 1
                        }
                    ],
                    "users": [
                        {
                            "id": "usr-1",
                            "name": "Anoop sharma",
                            "available": false
                        },
                        {
                            "id": "usr-2",
                            "name": "Yogesh",
                            "available": true
                        },
                        {
                            "id": "usr-3",
                            "name": "Shankar Kumar",
                            "available": true
                        },
                        {
                            "id": "usr-4",
                            "name": "Ramesh",
                            "available": true
                        },
                        {
                            "id": "usr-5",
                            "name": "Suresh",
                            "available": true
                        },
                        {
                            "id": "usr-5",
                            "name": "mradul",
                            "available": true
                        }
                    ]
                };

                setTickets(jsonData.tickets);
                setUsers(jsonData.users);
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
                {/* <Route path="/users" exact element={<Users tickets={tickets} users={users} sortOption={sortOption} />} />
                <Route path="/priority" exact element={<Priority tickets={tickets} sortOption={sortOption} />} /> */}
            </Routes >
        </BrowserRouter>
    );
};




export default App;

