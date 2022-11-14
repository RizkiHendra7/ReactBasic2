import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'reactstrap'

export const BtnViewComponent = () => {
  return (
    <Button color="primary" className="mx-1">
    <FontAwesomeIcon icon={faInfo} /> View
  </Button>
  )
}
