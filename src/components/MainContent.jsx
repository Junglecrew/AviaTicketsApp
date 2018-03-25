import React, { Component } from 'react';
import Filter from '../components/Filter'
import Flights from '../components/Flights'
import SortList from '../components/Sort/';

class MainContent extends Component {
	constructor(props) {
    super(props);
		this.state = {
			stops: [],
			maxStops: [],
			// filterByPrice: true,
			// filterByStops: false,
			selectedSort: 'By price'
		};
	}

	//Определяем максимальное количество пересадок, для автоматического рендеринга нужного количества чекбоксов
	setMaxStops = () => {
		const {tickets} = this.props
		const allStopsList = tickets.map(item => item.stops).filter((item, index, arr) => {return arr.indexOf(item) === index}).sort((a, b) => 
		{
			if (a > b) return 1;
			if (a < b) return -1;
		})
		this.setState({
			maxStops: allStopsList
		})
	}

	componentDidMount() {
		this.setMaxStops();
	}
	
	//Клики по чекбоксу + логика. Проверяем нажата ли галочка выбора. Создаем новый массив с выбранным кол-вом пересадок.
	//Этот массив новый будет использоваться для отрисовки списка билетов в компоненте Flights
	handleCheckboxClick = (e) => {
		const {stops} = this.state
		const checkedStop = +(e.target.value)
		if (stops.includes(checkedStop)) {
			this.setState({
				stops: stops.filter(item => {
					return item !== checkedStop
				})
			})
		} else {
				this.setState({
					stops: stops.concat([checkedStop])
				})
		}
	}

	handleSortChange = (e) => {
		this.setState({selectedSort: e.target.value});
	}

	render() {
		const {tickets} = this.props
		return (
			<div>
				<h1 className="main-title">Выберите подходящий билет</h1>
				<div className="main-content">
					<div className="sidebar">
						<SortList 
							selectedSort = {this.state.selectedSort}
							handleSortChange = {this.handleSortChange}
							
							/>
						<Filter 
							stops={this.state.stops} 
							maxStops={this.state.maxStops} 
							handleChange = {this.handleCheckboxClick}/>
						</div>
					<Flights 
						tickets={tickets} 
						stops={this.state.stops}
						selectedSort = {this.state.selectedSort}
						/>
				</div>
			</div>
		);
	}
}

export default MainContent;
