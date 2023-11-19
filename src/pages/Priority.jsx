import React from 'react'
import Column from '../components/Column'
import '../assets/css/cards.css';

const Priority = ({ tickets, sortOption }) => {
	return (
		<div className="container">
			<Column title="No Priority" icon="fas fa-scroll" tickets={tickets} priority="0" sortOption={sortOption} />
			<Column title="Urgent" icon="fas fa-genderless" tickets={tickets} priority="4" sortOption={sortOption} />
			<Column title="High" icon="fas fa-signal" tickets={tickets} priority="3" sortOption={sortOption} />
			<Column title="Medium" icon="fas fa-signal" tickets={tickets} priority="2" sortOption={sortOption} />
			<Column title="Low" icon="fas fa-signal" tickets={tickets} priority="1" sortOption={sortOption} />
		</div>
	)
}

export default Priority;