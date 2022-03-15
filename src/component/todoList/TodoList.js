import { useState } from "react"
import s from './todoList.module.scss'
import {Button, FormControl } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faEdit, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({todo, setTodo}) => {
   const [edit, setEdit] = useState(null)
   const [value, setValue] = useState('')


   const deleteTodo = (id) => {
     let newTodo = [...todo].filter(item => item.id !== id)

     setTodo(newTodo)
   }


   const editTodo = (id, title) => {
      setEdit(id)
      setValue(title)
   }

   const saveTodo = (id) => {
      let newTodo = [...todo].map(item => {
         if (item.id === id) {
            item.title = value
         }
         return item
   })
      setTodo(newTodo)
      setEdit(null)
   }


   const statusTodo = (id) => {
      let newTodo = [...todo].filter(item => {
         if (item.id === id) {
            item.status = !item.status
         }
         return item
      })

      setTodo(newTodo)
   }


  return (
   <div>
      {
         todo.map(item => (
            <div className={s.list} key={item.id}>
               {
                  edit === item.id ? <div>
                                        <FormControl onChange={(e) => setValue(e.target.value)} type="text" value={value}/>
                                     </div> : <div className={!item.status ? s.close : ''}>{item.title}</div>
               }

               {
                  edit === item.id ? <div>
                                       <Button onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faSave}/></Button>
                                     </div> : <div>
                                                <Button className={s.btn} size='sm' onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                                                <Button className={s.btn} size='sm' onClick={() => editTodo(item.id, item.title)}><FontAwesomeIcon icon={faEdit}/></Button>
                                                <Button className={s.btn} size='sm' onClick={() => statusTodo(item.id)}>
                                                   {
                                                     item.status ? <FontAwesomeIcon icon={faLockOpen}/> : <FontAwesomeIcon icon={faLock}/>
                                                   }
                                                </Button>
                                              </div>
               }
            </div>
         ))
      }
   </div>
  )
}


export default TodoList