// const [ticketData, setTicketData] = useState(null);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
// //       // const url = `https://api.quicksell.co/v1/internal/frontend-assignment`;
//       const response = await fetch('../assets/data/data.json');
//       const data = await response.json();
//       setTicketData(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   fetchData();
// }, []);

const Card = ({ ticket, users }) => {
	// const user = users.find((u) => u.id === ticket.userId);

	return (
		<div className="big-box">
			<div className="header">
				<h4>{ticket.id}</h4>
				<div className="image">
					<img src="profile-photo.jpg" alt="" />
					<span className="large-dot">•</span>
				</div>
			</div>
			<p>{ticket.title}</p>
			<div className="bottom">
				<div className="box">
					<span className="dots">...</span>
				</div>
				<div className="box1">
					<span className="large-dot">•</span>
					<span className="word">{ticket.tag.join(', ')}</span>
				</div>
				{/* <div>
                  <label htmlFor="">Priority: </label>
                  <span> {ticket.priority}</span>
                </div> */}
			</div>
		</div>
	);
};

export default Card;