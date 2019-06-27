import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCategories } from "../actions/habitActions";
import CategoryCard from "./CategoryCard";

class CategoryList extends Component {
  state = {
    categories: []
  };
  componentDidMount() {
    this.props.getCategories();
    console.log("CategoryList this.props", this.props);
  }

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
  { getCategories }
)(CategoryList);
