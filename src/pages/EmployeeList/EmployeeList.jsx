import { Link } from 'react-router-dom'
import React from 'react'
import DataTable from '../../components/DataTable/DataTable'

/**
 * EmployeeList page
 * @returns {React.ReactElement} JSX.Element - the EmployeeList page
 */

function EmployeeList() {

  return (
    <main className="main__employees">
      <div className="container mb-2 py-2 border rounded">
      <DataTable />
      </div>
      <div className="text-center">
        <Link className="" to="/">
          <button type="button" className="btn btn-primary">
            Home
          </button>
        </Link>
      </div>
    </main>
  )
}

export default EmployeeList