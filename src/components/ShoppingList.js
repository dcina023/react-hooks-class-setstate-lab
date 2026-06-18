import React, { Component } from "react";
import Item from "./Item";

class ShoppingList extends Component {
  state = {
    category: "All",
  };

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value,
    });
  };

  render() {
    const { category } = this.state
    const { items } = this.props 
    
    const itemsToDisplay = items.filter((item) => {
      if (category === "All") return true;

      return item.category === category
    });

    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
