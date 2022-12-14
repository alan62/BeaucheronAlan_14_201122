/** Supprime les élements selectionnés lors du clique sur l'élément selected ( .selected-info ) et décoche les cases checkbox (.input-select-row)  */

function deleteUser(selected, employeesListToDelete, employees, setEmployees) {
    if (
      employeesListToDelete !== null &&
      employeesListToDelete !== undefined &&
      selected !== null
    ) {
      const newEmployeeList = employees.filter(
        (val) => !employeesListToDelete.includes(val)
        )
      selected.addEventListener('click', (e) => {
        setEmployees(newEmployeeList)
        const checkbox = document.querySelectorAll('.input-select-row')
        console.log(checkbox)
        checkbox.forEach((element) => {
          element.checked = false
        })
      })
    }
  }
  
  export default deleteUser
  