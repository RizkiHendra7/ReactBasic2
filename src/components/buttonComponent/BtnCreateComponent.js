import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'reactstrap'

export const  BtnCreateComponent = (props) => {
  return (
    <Row className='mb-2'>
        <Col>
        <Link to={"/"+ props.UrlTarget}>
            <Button color='dark'>
                <FontAwesomeIcon icon={faPlus}> </FontAwesomeIcon> Create
            </Button>
        </Link>
        </Col>
    </Row>

  )
}
