import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategories, addCategory } from "../actions/habitActions";
import CategoryCard from "./CategoryCard";

class CategoryList extends Component {
  state = {
    categories: [],
    checkedGreen: "",
    checkedYellow: "",
    checkedRed: ""
  };
  componentDidMount() {
    this.props.getCategories();
    if (this.state.categories.length < 1) {
      const newCategory = {
        categoryTitle: 1,
        color: "green"
      };
      this.props.addCategory(newCategory);
    }

    console.log("CategoryList this.props", this.props);
  }

  activeCircleGreen = () => {
    console.log("activeCircleGreen this.state", this.state);
    this.setState({
      checkedGreen: this.state.checkedGreen ? "" : "active-circle-cat",
      checkedYellow: "",
      checkedRed: ""
    });
  };

  activeCircleYellow = () => {
    console.log("activeCircleYellow this.state", this.state);
    this.setState({
      checkedYellow: this.state.checkedYellow ? "" : "active-circle-cat",
      checkedGreen: "",
      checkedRed: ""
    });
  };

  activeCircleRed = () => {
    console.log("activeCircleRed this.state", this.state);
    this.setState({
      checkedRed: this.state.checkedRed ? "" : "active-circle-cat",
      checkedGreen: "",
      checkedYellow: ""
    });
  };

  render() {
    // console.log("CategoryList this.props", this.props);
    return (
      <div className="category-list">
        {this.props.categories.map(category => {
          return (
            <CategoryCard
              className="category-card"
              category={category}
              key={category.id}
              activeCircleGreen={this.activeCircleGreen}
              activeCircleYellow={this.activeCircleYellow}
              activeCircleRed={this.activeCircleRed}
              checkedGreen={this.state.checkedGreen}
              checkedYellow={this.state.checkedYellow}
              checkedRed={this.state.checkedRed}
            />
          );
        })}
      </div>
    );
  }
}

CategoryList.propTypes = {
  getHabits: PropTypes.func,
  habits: PropTypes.object
};

const mapStateToProps = state => {
  // console.log("CategoryList mapStateToProps state", state);
  return {
    categories: state.habits.categories
  };
};

export default connect(
  mapStateToProps,
  { getCategories, addCategory }
)(CategoryList);
