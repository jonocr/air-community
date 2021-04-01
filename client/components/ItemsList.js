import React from "react";

const ItemsList = (props) => {
	return (
		<div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Title</th>
						<th scope="col">Description</th>
						<th scope="col">Cost</th>
						<th scope="col">Status</th>
					</tr>
				</thead>
				<tbody>
					{props.data.map((item, index) => (
						<tr
							key={index} 
							onClick={(e) => props.onClick(item)}
						>
							<th scope="row">{index}</th>
							<td>{item.name}</td>
							<td>{item.description}</td>
							<td>{item.cost}</td>
							<td>{item.status}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ItemsList;