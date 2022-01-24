import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { userContext } from "../../Context/UserContext";


const LoginUser = () => {
    const userResult = useContext(userContext);
    const { logIn, googleSignIn } = userResult;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/");
        } catch (error) {
            console.log(error.code);
            if (error.code === 'auth/wrong-password') {
                setError('Error: La contraseña es incorrecta');
            } else if (error.code === 'auth/user-not-found') {
                setError('Error: El usuario no existe');
            } else if (error.code === 'auth/invalid-email') {
                setError('Error: El email no es valido');
            } else if (error.code === 'auth/too-many-requests') {
                setError('Error: Demasiadas solicitudes');
            } else {
                setError('Error desconocido');
            }
        }

    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Inicia sesión</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="dark" type="Submit">
                            Iniciar sesión
                        </Button>
                    </div>
                </Form>
                <hr />
                <div className="box mt-3 text-center">
                    <GoogleButton
                        className="g-btn"
                        type="dark"
                        onClick={handleGoogleSignIn}
                    />
                </div>
            </div>
            <div className="box mt-3 text-center">
                ¿No tienes una cuenta? <Link to="/auth/register">Crear cuenta</Link>
            </div>
        </>
    );
};
export default LoginUser;