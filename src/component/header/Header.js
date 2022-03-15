import { Row, Col } from 'react-bootstrap'
import s from './header.module.scss'

const Header = () => {
   return (
      <Row>
         <Col>
            <h1 className={s.title}>ToDo list</h1>
         </Col>
      </Row>
   )
}


export default Header