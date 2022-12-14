/**
 * Function to create select options
 * @param {Object[]} options - the array of the options
 * @param {string} options.title - the name of the option
 * @param {string} options.value - the value of the option
 * @param {string} title - the title of the option
 * @returns {JSX} - the select options
 */

/* Création des options en utilisant la method .map afin de créer un nouveau tableau */
 function SelectOptions({ options, title }) {
    const elements = options.map((option) => (
      <option key={option.abbreviation} value={option.abbreviation} name={title}>
        {option.name}
      </option>
    ))
  
    return elements
  }
  
  export default SelectOptions
  