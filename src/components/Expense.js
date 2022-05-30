import React, {useContext} from 'react'
import { AppContext } from '../context/app.context'
import HighlightOffIcon from '../../node_modules/@mui/icons-material/HighlightOff.js';
import { Button } from '@mui/material';
import '../style/Expense.css'

function Expense({ item }) {
  const { dispatch } = useContext(AppContext)

  return (
    <div className='Expense'>
      <div>
        {item.name}
      </div>
      <div>
        {item.date}
      </div>
      <div className='Expense-cost'>
        ${item.cost}
      </div>
      <div>
        <Button onClick={() => dispatch({type: 'DELETE', id: item.id})}
        style={{color: '#666'}}>
        <HighlightOffIcon />
        </Button>
      </div>
    </div>
  )
}

export default Expense