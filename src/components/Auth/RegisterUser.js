import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { userContext } from "../../Context/UserContext";
import { useForm } from "../../hooks/useForm";


const RegisterUser = () => {
    const userResult = useContext(userContext);
    const { signUp, userRegisterData } = userResult;
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [formValues, handleInputChange, reset] = useForm({ userName: '', email: '', password: '', });
    const { userName, email, password } = formValues;
    const lastPath = localStorage.getItem('lastPath') || '/';

    console.log('Name: ', userName);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            await userRegisterData(userName, email);
            reset();
            navigate(lastPath);
        } catch (error) {
            if (error.code === 'auth/invalid-email') {
                setError('Error: El formato del e-mail no es válido');
            } else if (error.code === 'auth/weak-password') {
                setError('Error: La contraseña tiene menos de 6 caracteres');
            } else if (error.code === 'auth/email-already-in-use') {
                setError('Error: El e-mail ya está en uso');
            } else if (error.code === 'auth/operation-not-allowed') {
                setError('Error: No se puede registrar el usuario');
            } else {
                setError('Error desconocido');
            }
        }
    };

    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Registrate</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control
                            type="name"
                            name="userName"
                            placeholder="Nombre de usuario"
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="dark" type="Submit">
                            Registrarse
                        </Button>
                    </div>
                </Form>
                <hr />
                <div className="box mt-3 text-center">
                    {error && <Alert variant="danger">{error}</Alert>}
                </div>
            </div>
            <div className="p-4 box mt-3 text-center">
                ¿Ya tienes una cuenta? <Link to="/auth/login">Ingresar</Link>
            </div>
        </>
    );
};
export default RegisterUser;

