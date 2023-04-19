import React, { Component } from "react";

class ResultsAdd extends Component {
  render() {
    const { name, unit, grade, handleChange, handlePost } = this.props;
    return (
      <div className="results-add">
        <form
          id="addResultsForm"
          className="ui-form"
          autoComplete="off"
          onSubmit={handlePost}
        >
          <h2>New Entry</h2>
          <label>Nombre:</label>
          <input
            autoFocus
            name="name"
            type="text"
            required
            placeholder="Nombre"
            value={name}
            onChange={handleChange}
          />
          <label>Cedula:</label>
          <input
            name="unit"
            type="number"
            required
            placeholder="Cedula"
            value={unit}
            onChange={handleChange}
          />
          <label>Apellido:</label>
          <input
            name="grade"
            type="text"
            required
            placeholder="Apellido"
            value={grade}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default ResultsAdd;
