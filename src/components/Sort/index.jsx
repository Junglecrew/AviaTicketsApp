import React, { Component } from 'react';

class SortList extends React.Component {

  render() {
		const {handleSortChange} = this.props
    return (
      <div className="sidebar__sort">
      Сортировать по:
        <form className="sidebar__form-sort">
          <label>
            <select onChange={handleSortChange}>
              <option value="By price">Стоимости</option>
              <option value="By stops count">Количеству пересадок</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SortList;