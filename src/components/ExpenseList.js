import React, { useContext, useState } from 'react'
import { AppContext } from '../context/app.context'
import { Divider } from '@mui/material'
import Expense from './Expense'

function ExpenseList() {
  const [searchVal, setSearchVal] = useState('')

  const { expItems } = useContext(AppContext)
  const expItemsOrdered = expItems.sort((prevItem, currItem) => new Date(currItem.date) - new Date(prevItem.date))

  const handleChange = (e) => {
    setSearchVal(e.target.value)
  }

  const search = (items) => {
    return items.filter(item => item.name.includes(searchVal))
  }
  const expItemsOrderedSearched = search(expItemsOrdered)

  return (
    <div className="mt-4">
      <h3>
        Expenses
      </h3>
      <input className='mt-2' 
        placeholder='Type to search...' 
        onChange={handleChange}
        style={{textAlign: 'center', display: 'inline-block', width: '100%'}}/>
      <div className='mt-3'>
      {expItemsOrderedSearched.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <Expense key={item.id} item={item} />
              {i < expItems.length -1 && <Divider />}
            </React.Fragment>
          )
      })}
      </div>
    </div>
  )
}

export default ExpenseList