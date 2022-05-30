import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../context/app.context'
import { getLocalStorageItem } from '../utils/getLocalStorageItem'
import '../style/Header.css'

function Header() {
  const initialBud = 2000
  const [budget, setBudget] = useState(getLocalStorageItem('budget', initialBud.toFixed(2)))
  const [isEditBudget, setIsEditBudget] = useState(false)

  const { expItems } = useContext(AppContext)

  const totalExp = expItems.reduce((accruVal, currVal) => {
    return accruVal + currVal.cost
  }, 0).toFixed(2)

  useEffect(() => {
    window.localStorage.setItem('budget', budget)
  }, [budget])

  const handleSubmit = (e) => {
    e.preventDefault()
    setBudget(Number(e.target['0'].value))
    setIsEditBudget(false)
  }

  const handleBlur = () => {
    setIsEditBudget(false)
  }

  return (
    <div className='Header'>
      <h2>
        Budget Tracker
      </h2>
      <div className='Header-info row mt-3'>
        {!isEditBudget ?
        <div className='Header-budget col-sm'>
          <div className='alert alert-secondary'>
            <span>Budget: ${budget}</span>
            <button onClick={() => setIsEditBudget(true)}>Edit</button>
          </div>
        </div> :
        <div onBlur={handleBlur} className='Header-budget col-sm'>
          <form onSubmit={handleSubmit} className='alert alert-secondary'>
            <input type="text" placeholder='new budget'></input>
          </form>
        </div>
        }
        
        <div className='Header-expense col-sm'>
          <div className='alert alert-danger'>
            <span>Spent so far: ${totalExp}</span>
          </div>
        </div>
        <div className='Header-balance col-sm'>
          <div className='alert alert-success'>
            <span>Remaining: ${(budget - totalExp).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header