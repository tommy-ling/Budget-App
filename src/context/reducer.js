import { v4 as uuidv4} from 'uuid'

const reducer = (state, action) => {
  switch(action.type) {
    case 'DELETE':
      return state.filter(item => item.id !== action.id)
    case 'ADD':
      return [...state, {
        id: uuidv4(),
        name: action.name,  
        cost: action.cost,
        date: action.date
      }]
    default:
      return state
  }
}

export default reducer