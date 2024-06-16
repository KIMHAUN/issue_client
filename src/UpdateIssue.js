import React from 'react';
import { Button } from "react-bootstrap";
import { useState } from 'react';
import { useLocation } from "react-router-dom";


function UpdateIssue() {

    //const [title, setTitle] = useState(props.title)
    //const [description, seDescription] = useState(props.description)
    const location = useLocation();
    const { title, description, id } = location.state ;

    //console.log(location.state);

    return (
        <div>
            <form action="http://localhost:8080/updateIssue" method="POST">
                <h4>title</h4>
                <input name="title" placeholder="title" defaultValue={title}/>
                <h4>description</h4>
                <input name="description" placeholder="description" defaultValue={description}/>
                <input name="id" type="hidden" value={id}/>
                <br/>
                <Button variant="success" type="submit">Update</Button>
            </form>
        </div>
    )
}
export default UpdateIssue;