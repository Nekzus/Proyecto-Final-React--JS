import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const SearchItems = () => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const navigate = useNavigate();
    const [formValues, handleInputChange] = useForm({ searchText: q, });
    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('click');
        navigate(`/search?q=${searchText}`);
    }

    return (
        <>
            <Form className="d-flex" onSubmit={handleSearch}>
                <FormControl
                    type="text"
                    placeholder="Buscar"
                    className="form-control me-2"
                    aria-label="Search"
                    name="searchText"
                    value={searchText}
                    onChange={handleInputChange}
                />
                <Button variant="outline-secondary" type="submit">Buscar</Button>
            </Form>
        </>
    )
};
export default SearchItems;
