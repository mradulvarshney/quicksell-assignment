import React from 'react'
import Column from '../components/Column'
import '../assets/css/cards.css';

const Status = ({ tickets, sortOption, groupingOption, users }) => {
	if(groupingOption === 'status'){
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
	else if(groupingOption === "priority"){
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
	else{
		return(
			<div className="container">
				<Column icon="fas fa-scroll"  tickets={tickets} status="Backlog" users={users} sortOption={sortOption} />
				<Column icon="fas fa-genderless" style={{fontSize: '24px;', color: 'rgb(187, 181, 181)'}} tickets={tickets} status="Todo" users={users} sortOption={sortOption} />
				<Column icon="fas fa-hourglass-half" style={{color: 'rgba(196, 196, 9, 0.795)'}} tickets={tickets} status="In progress" users={users} sortOption={sortOption} />
				<Column icon="fas fa-check-circle" style={{color: '#005cfa'}} tickets={tickets} status="done" users={users} sortOption={sortOption} />
				<Column icon="fas fa-times-circle fa-sm" style={{color: 'rgb(187, 181, 181)'}} tickets={tickets} status="cancelled" users={users} sortOption={sortOption} />
			</div>
		)
	}
}

export default Status