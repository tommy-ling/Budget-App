import React, { useContext, useRef } from 'react'
import { AppContext } from '../context/app.context'
import '../style/AddExpense.css'

function AddExpense() {
  const { dispatch } = useContext(AppContext)

  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const lastRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD',
      name: e.target['0'].value,  
      cost: Number(Number(e.target['1'].value).toFixed(2)),
      date: e.target['2'].value
    })
    e.target.reset()
  }

  return (
    <div className="mt-5">
      <h3>Add Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className='AddExpense-info row'>
          <div className='col-sm'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required="required" ref={firstRef}/>
          </div>

          <div className='col-sm'>
            <label htmlFor="cost">Cost</label>
            <input type="text" id="cost" name="cost" required="required" ref={secondRef}/>
          </div>

          <div className='col-sm'>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" required="required" ref={lastRef}/>
          </div>
        </div>
        <button className='AddExpense-btn mt-3' type="submit">Save</button>
      </form>
    </div>
  )
}

export default AddExpense