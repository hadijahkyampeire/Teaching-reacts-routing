import React from 'react';

export function SelectDropdownForm() {
  return (
    <div>
      <h2>Form 3</h2>
      <form>
        <label>Select a car:</label>
        <div class="custom-select" style={{ width: '200px' }}>
          <select>
            <option value="0">Select car:</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>
        </div>
      </form>
    </div>
  );
}