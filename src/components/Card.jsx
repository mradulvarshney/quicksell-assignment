const Card = ({ticket}) => {
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
			</div>
		</div>
	);
};

export default Card;