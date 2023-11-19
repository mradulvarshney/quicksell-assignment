import React from 'react'
import Column from '../components/Column'
import '../assets/css/cards.css';

const Users = ({ tickets, users, sortOption }) => {
	return (
		<div className="container">
			<Column icon="fas fa-scroll"  tickets={tickets} status="Backlog" users={users} sortOption={sortOption} />
			<Column icon="fas fa-genderless" style={{fontSize: '24px;', color: 'rgb(187, 181, 181)'}} tickets={tickets} status="Todo" users={users} sortOption={sortOption} />
			<Column icon="fas fa-hourglass-half" style={{color: 'rgba(196, 196, 9, 0.795)'}} tickets={tickets} status="In progress" users={users} sortOption={sortOption} />
			<Column icon="fas fa-check-circle" style={{color: '#005cfa'}} tickets={tickets} status="done" users={users} sortOption={sortOption} />
			<Column icon="fas fa-times-circle fa-sm" style={{color: 'rgb(187, 181, 181)'}} tickets={tickets} status="cancelled" users={users} sortOption={sortOption} />
		</div>
	)
}

export default Users