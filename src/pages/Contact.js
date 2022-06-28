import { Button, Form } from "react-bootstrap";
import Navigation from "../components/Navigation";


const Contact = () => {
    return [
        <Navigation type="login" />,
        <div className="row justify-content-center" style={{margin:"50px"}}>
            <div className="col-md-6 col-md-offset-3">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Dirección de correo</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese la dirección de correo" />
                        <Form.Text className="text-muted">
                            Nunca compartiremos tu dirección de correo.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" placeholder="Escriba aquí" rows={3}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Button variant="primary">Enviar</Button>
                    </Form.Group>
                </Form>
            </div>
        </div>
    ];
};
export default Contact;