import React from 'react';
import Column from '../components/Column';
import '../assets/css/cards.css';

const Status = ({ tickets, sortOption, groupingOption, users }) => {
	let columns;
	let userClicked = false;
	if (groupingOption === 'status') {
		userClicked = false;
		columns = [
			{ title: 'Backlog', icon: 'fas fa-scroll', style: {}, status: 'Backlog' },
			{ title: 'To Do', icon: 'fas fa-genderless', style: { fontSize: '24px', color: 'rgb(187, 181, 181)' }, status: 'Todo' },
			{ title: 'In Progress', icon: 'fas fa-hourglass-half', style: { color: 'rgba(196, 196, 9, 0.795)' }, status: 'In progress' },
			{ title: 'Done', icon: 'fas fa-check-circle', style: { color: '#005cfa' }, status: 'done' },
			{ title: 'Cancelled', icon: 'fas fa-times-circle fa-sm', style: { color: 'rgb(187, 181, 181)' }, status: 'cancelled' },
		];
	} else if (groupingOption === 'priority') {
		userClicked = false;
		columns = [
			{ title: 'No Priority', icon: 'fas fa-scroll', priority: '0' },
			{ title: 'Urgent', icon: 'fas fa-genderless', priority: '4' },
			{ title: 'High', icon: 'fas fa-signal', priority: '3' },
			{ title: 'Medium', icon: 'fas fa-signal', priority: '2' },
			{ title: 'Low', icon: 'fas fa-signal', priority: '1' },
		];
	} else if (groupingOption === 'user') {
		userClicked = true;
		const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name));
		columns = sortedUsers.map((user) => ({
			title: user.name,
			icon: 'user-icon-class', // Add the appropriate user icon class
			userId: user.id,
		}));
	}

	if (userClicked) {
		return (
			<div className="container">
				{columns.map((column) => {
					const userTickets = tickets.filter((ticket) => ticket.userId === column.userId);

					// Skip rendering the column if there are no tickets for the user
					if (userTickets.length === 0) {
						return null;
					}
					return (
						<Column
							key={column.title}
							title={column.title}
							icon={column.icon}
							style={column.style}
							tickets={tickets}
							status={column.status}
							priority={column.priority}
							userId={column.userId}
							users={users}
							sortOption={sortOption}
						/>
					);
				})}
			</div>
		);
	}
	else {
		return (
			<div className="container">
				{columns.map((column) => (
					<Column
						key={column.title}
						title={column.title}
						icon={column.icon}
						style={column.style}
						tickets={tickets}
						status={column.status}
						priority={column.priority}
						userId={column.userId}
						users={users}
						sortOption={sortOption}
					/>
				))}
			</div>
		);
	};
}
export default Status;
