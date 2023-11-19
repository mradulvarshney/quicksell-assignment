import React from 'react';
import Card from './Card';

const Column = ({ title, icon, style, tickets, status, priority, userId, users, sortOption }) => {
	let filteredTickets = 0;
	if (status !== undefined) {
		filteredTickets = tickets.filter((ticket) => ticket.status.toLowerCase() === status.toLowerCase());
	} else if (priority !== undefined) {
		filteredTickets = tickets.filter((ticket) => ticket.priority == priority);
	} else if (userId !== undefined) {
		filteredTickets = tickets.filter((ticket) => ticket.userId === userId);
	}
	const sortedTickets = filteredTickets.sort((a, b) => {
		if (sortOption === 'priority') {
			return b.priority - a.priority; // Sort by priority in descending order
		} else if (sortOption === 'title') {
			return a.title.localeCompare(b.title); // Sort by title in ascending order
		}
		return 0;
	});

	return (
		<div className="mega">
			<div className="top">
				<div className="left">
					<i className={icon} style={style}></i>
					<p>{title}</p>
					<div className="count">{filteredTickets.length}</div>
				</div>
				<div className="right">
					<span>+</span>
					<span className="dots">...</span>
				</div>
			</div>
			{sortedTickets.map((ticket) => (
				<Card key={ticket.id} ticket={ticket} />
			))}
		</div>
	);
};

export default Column;
