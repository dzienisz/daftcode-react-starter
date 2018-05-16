import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Data extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    })),
    description: PropTypes.string,
  }

  static defaultProps = {
    items: [],
  }

  getTableSection() {
    const { items } = this.props;

    if (items.length > 0) {
      let tableFieldsLeft;

      const tableFieldsRight = items.map(item => (
        <div className="data__item" key={item.label}>
          <span className="data__item-label">{ `${item.label}:` }</span>
          <span className="data__item-value">{ item.value }</span>
        </div>
      ));

      if (tableFieldsRight.length > 0) {
        tableFieldsLeft = tableFieldsRight.splice(0, Math.ceil(tableFieldsRight.length / 2));
      }

      return (
        <div className="data__table">
          <div className="data__table-column">{ tableFieldsLeft }</div>
          { tableFieldsRight.length > 0 ? (<div className="data__table-column">{ tableFieldsRight }</div>) : null }
        </div>
      );
    }

    return null;
  }

  render() {
    const { title, description } = this.props;

    return (
      <section className="data">
        <h2 className="data__header">{ title }</h2>
        <div className="data__body">
          {this.getTableSection()}
          { description ? (
            <p className="data__description">{ description }</p>
          ) : null }
        </div>
      </section>
    );
  }
}

export default Data;
