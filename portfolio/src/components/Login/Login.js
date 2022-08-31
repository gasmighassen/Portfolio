import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userlogin } from '../../Redux/Slices/UserSlice'
import './Login.css'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [info, setInfo] = useState({ username: '', password: '' })

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div className="add-btn">
        <Button variant="outline-primary" onClick={handleShow}>
          Login
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="connect-form">
            <div className="form-group">
              <input
                onChange={e => setInfo({ ...info, username: e.target.value })}
                type="text"
                className="form-control"
                placeholder="Username"
              />

              <input
                onChange={e => setInfo({ ...info, password: e.target.value })}
                type="password"
                className="form-control"
                placeholder="password"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(userlogin(info))
              setTimeout(navigate('/dashboard'), 2000)
            }}
          >
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Login
