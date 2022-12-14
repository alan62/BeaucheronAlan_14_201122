/**
 * Function to handle the change of the input fields
 * @param {*} e - the event
 * @param {*} setEmployeeFromData - function to set the state of the input fields
 * @param {object} employeeFromData - object with the input fields values
 * @param {String} employeeFromData.firstName - the name of the input field
 * @param {String} employeeFromData.lastName - the name of the input field
 * @param {String} employeeFromData.dateOfBirth - the name of the input field
 * @param {String} employeeFromData.startDate - the name of the input field
 * @param {String} employeeFromData.street - the name of the input field
 * @param {String} employeeFromData.city - the name of the input field
 * @param {String} employeeFromData.zipCode - the name of the input field
 * @returns {object} employeeFromData
 */

 function HandleChange(e, setEmployeeFromData, employeeFromData) {
    let { value, name } = e.currentTarget
  
    /* Si le nom est égale à dateOfBirth ou startDate alors la valeur devient une date au format jours mois année */
    if (name === 'dateOfBirth' || name === 'startDate') {
      const date = new Date(value)
      const day = date.getDate()
      const month = date.getMonth() + 1 /* +1 car l'index des mois commence par 0 ( donc de 0 ( janvier ) à 11 (décembre ) ) */
      const year = date.getFullYear()
      const newDate = `${day}/${month}/${year}`
      value = newDate
    }
  
    setEmployeeFromData({
      ...employeeFromData,
      [name]: value,
    })
  }
  
  export default HandleChange
  