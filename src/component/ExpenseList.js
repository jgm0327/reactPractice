import React from 'react'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({initialExpenses, handleDelete, handleEdit, clearItems}) =>{
  console.log(initialExpenses)
    return (
      <>
      <ul className='list'>
        {initialExpenses.map(expense => {
          return (
          <ExpenseItem expense={expense}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          key={expense.id}/>
          )
        })}
      </ul>
      {initialExpenses.length > 0 && 
        <button className='btn'
        onClick={clearItems}>
              목록 지우기
              <MdDelete className='btn-icon'/>
        </button>
      }
      </>
    )
}

export default ExpenseList