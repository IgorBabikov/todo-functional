import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import s from './addTodo.module.scss'

const AddTodo = ( {todo, setTodo} ) => {
   const [value, setValue] = useState('')

   const saveTodo = () => {
      if (value.length == 0) return

      setTodo(
         [...todo, {
            id: uuidv4(),
            title: value,
            status: true
         }]
      )

      setValue('')
   }

   return (
      <Row>
         <Col className={s.addTodo}>
            <FormControl onChange={(e) => setValue(e.target.value)}
                  value={value}
                  type="text"
                  placeholder="введите задачу"/>
            <Button variant="success" onClick={saveTodo}>сохранить</Button>
         </Col>
      </Row>
   )
}


export default AddTodo