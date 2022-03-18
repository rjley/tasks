import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [option, setOption] = useState<string>(options[0]);
    function updateOption(event: ChangeEvent) {
        setOption(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Label>Select the correct answer.</Form.Label>
                <Form.Select value={option} onChange={updateOption}>
                    {options.map((op: string) => (
                        <option key={op} value={op}>
                            {op}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {option === expectedAnswer && <span>✔️</span>}
                {option !== expectedAnswer && <span>❌</span>}
            </div>
        </div>
    );
}
