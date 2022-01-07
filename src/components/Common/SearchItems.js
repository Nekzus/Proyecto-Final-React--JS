import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';

const SearchItems = () => {

    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-secondary">Buscar</Button>
        </Form>
    )
};
export default SearchItems;
