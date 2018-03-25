import React, { Component } from 'react';
import './styles/app.scss';
import MainContent from './components/MainContent'

class App extends Component {
  constructor(props) {
    super(props);

		this.state = {
      tickets: [],
      isLoading: true
		};
  }
  //Имитируем получение json файла от сервера из БД, для наглядности используем setTimeout----не забыть убрать позже
  componentDidMount() {
    fetch('./tickets.json')
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {this.setState({ tickets: data.tickets, isLoading: false }) }, 3000 
      )
    }
    )
  }

  //Прелоадер перед загрузкой всех билетов пока получаем с сервера информацию
  getLoader() {
    return (
    <div className='cssload-loader'>
      <div className='cssload-inner cssload-one'></div>
      <div className='cssload-inner cssload-two'></div>
      <div className='cssload-inner cssload-three'></div>
    </div>
    )
  }

  render() {
    const {tickets, isLoading} = this.state
    return (
      <div className="App">
        {!isLoading && <MainContent tickets = {tickets}/>}
        {isLoading && this.getLoader()}
      </div>
    );
  }
}

export default App;
