import React from 'react';
import { Button } from "react-bootstrap";

function CreateIssue() {
    return (
        <div>
            <form action="http://localhost:8080/createIssue" method="POST">
                <h4>title</h4>
                <input name="title" placeholder="title"/>
                <h4>description</h4>
                <input name="description" placeholder="description"/>
                <br/>
                <Button variant="success" type="submit">Submit</Button>
            </form>
        </div>
    )
}
export default CreateIssue;