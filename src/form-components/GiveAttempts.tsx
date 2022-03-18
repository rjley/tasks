import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttempts] = useState<number>(3);
    const [newAttempts, setNew] = useState<string>("0");
    const increaseAttempts = parseInt(newAttempts) + attemptsLeft;
    const useAttempt = () => setAttempts(attemptsLeft - 1);
    const gainAttempt = () =>
        newAttempts === ""
            ? setAttempts(attemptsLeft)
            : setAttempts(increaseAttempts);

    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
                <Form.Control
                    type="number"
                    value={newAttempts}
                    onChange={(
                        event: React.ChangeEvent<
                            | HTMLTextAreaElement
                            | HTMLInputElement
                            | HTMLSelectElement
                        >
                    ) => setNew(event.target.value)}
                />
            </div>
            <div>
                <span>
                    <Button onClick={useAttempt} disabled={attemptsLeft === 0}>
                        Use
                    </Button>
                </span>
                <span>
                    <Button onClick={gainAttempt}>Gain</Button>
                </span>
            </div>
            <div>{attemptsLeft} attempts left.</div>
        </div>
    );
}
