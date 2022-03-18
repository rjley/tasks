import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [name, setName] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Control value={name} onChange={updateName} />
            <div>
                Your answer is {name === expectedAnswer && <span>✔️</span>}
                {name !== expectedAnswer && <span>❌</span>}
            </div>
        </div>
    );
}
/*
    const [name, setName] = useState<string>("");

    // This is the Control
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="formMovieName">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <div>The movie is "{name}".</div>
        </div>
    );
}*/
