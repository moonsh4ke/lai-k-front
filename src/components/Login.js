import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function LoginModal(props) {
    const [show, setShow] = useState(false);
    var buttonName = props.type==="login"?"Login":"Logout";
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [profileData, setProfileData] = useState(null);

    function post_login(params){
        axios.post('/api/login',{
            username:params.username,
            password:params.password
        })
        .then((response) => {
            const res = response.data
            setProfileData(({
                profile_name:res.status,
                about_me:res.token
            }))
        }).catch((error) => {
            if(error.response){
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {buttonName}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="rut">
                            <Form.Label>Dirección de correo</Form.Label>
                            <Form.Control type="email" placeholder="Ingrese la dirección de correo" />
                            <Form.Text className="text-muted">
                                Nunca compartiremos tu dirección de correo.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese contraseña" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>¿No tienes cuenta? Crea una <a href="*">Aquí</a></Form.Label>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary">Iniciar Sesión</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default LoginModal;