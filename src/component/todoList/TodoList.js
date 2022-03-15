import { useState, useEffect } from "react"
import s from './todoList.module.scss'
import {Button, ButtonGroup, FormControl, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faEdit, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

const TodoList = ({todo, setTodo}) => {
   const [edit, setEdit] = useState(null)
   const [value, setValue] = useState('')
   const [filterTodo, setFilterTodo] = useState(todo)

   useEffect(() => {
      setFilterTodo(todo)
   }, [todo])

   const todoFilter = (status) => {
      if (status === 'all') {
         setFilterTodo(todo)
      } else {
         let newTodo = [...todo].filter(item => item.status === status)
         return setFilterTodo(newTodo)
      }
    }

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
      <Row>
         <Col className={s.filterTodo}>
            <ButtonGroup className={s.btns} aria-label="Basic example">
               <Button className={s.btnFilter} variant="primary" onClick={() => todoFilter('all')}>Все</Button>
               <Button className={s.btnFilter} variant="primary" onClick={() => todoFilter(true)}>Открытые</Button>
               <Button className={s.btnFilter} variant="primary" onClick={() => todoFilter(false)}>Закрытые</Button>
            </ButtonGroup>
         </Col>
      </Row>

      {
         filterTodo.map(item => (
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