import React from 'react'
import { Link } from 'react-router-dom'
import { Modal, useModal } from 'alanbnpmreactmodal' /* APPEL DE MON PLUGIN MODAL */
import Form from '../../components/Form/Form'

function home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isShowing, toggle } = useModal()

  return (

    <main className="container">
      <div className="text-center">
        <Link
          className="btn btn-primary col-5"
          role="button"
          to="/EmployeeList"
        >
          View Current Employees
        </Link>
      </div>
      <h2 className="col-lg-5  col-md-9 mx-auto pt-3 text-center">Create Employee</h2>
      <Form toggle={toggle} />
      <Modal isShowing={isShowing} hide={toggle} text="Employee Created !" />
    </main>
  )
}

export default home