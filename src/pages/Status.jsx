import React from 'react'
import Column from '../components/Column'
import '../assets/css/cards.css';

const Status = ({ tickets, sortOption }) => {
	return (
		<div className="container">
			<Column title="Backlog" icon="fas fa-scroll" style={{}} tickets={tickets} status="Backlog"  sortOption={sortOption} />
			<Column title="To Do" icon="fas fa-genderless" style={{ fontSize: '24px', color: 'rgb(187, 181, 181)' }} tickets={tickets} status="Todo" sortOption={sortOption} />
			<Column title="In Progress" icon="fas fa-hourglass-half" style={{ color: 'rgba(196, 196, 9, 0.795)' }} tickets={tickets} status="In progress"  sortOption={sortOption} />
			<Column title="Done" icon="fas fa-check-circle" style={{ color: '#005cfa' }} tickets={tickets} status="done" sortOption={sortOption}/>
			<Column title="Cancelled" icon="fas fa-times-circle fa-sm" style={{ color: 'rgb(187, 181, 181)' }} tickets={tickets} status="cancelled" sortOption={sortOption} />
		</div>
	)
}

export default Status