import React, { useState } from "react";
//import { Form } from "react-bootstrap";
import { Button /*,Col, Container, Row*/ } from "react-bootstrap";
//import "./App.css";
//import { ChangeType } from "./components/ChangeType";
//import { RevealAnswer } from "../components/RevealAnswer";
//import { StartAttempt } from "./components/StartAttempt";
//import { TwoDice } from "./components/TwoDice";
//import { CycleHoliday } from "./components/CycleHoliday";
//import { Counter } from "./components/Counter";
//import { DoubleHalf } from "./bad-components/DoubleHalf";
//import { ColoredBox } from "./bad-components/ColoredBox";
//import { ShoveBox } from "./bad-components/ShoveBox";
//import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "../form-components/CheckAnswer";
//import { GiveAttempts } from "./form-components/GiveAttempts";
//import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";
//import { ChangeColor } from "./form-components/ChangeColor";
//import { Quizzer } from "./quizzer/Quizzer";

export function MonsterQuiz(): JSX.Element {
    const [value, setValue] = useState<number>(4);
    const [inProgress, setProgess] = useState<boolean>(false);
    const [revealed, setRevealed] = useState<boolean>(false);
    function flipReveal(): void {
        setRevealed(!revealed);
    }
    function subtractValue(): void {
        setValue(value - 1);
    }
    function mulliganValue(): void {
        setValue(value + 1);
    }
    function startQuiz(): void {
        setProgess(true);
        subtractValue();
        flipReveal();
    }
    function stopQuiz(): void {
        setProgess(false);
        flipReveal();
    }
    return (
        <div>
            <div>
                <h6>This is a quiz about Mythical Creatures. Questions:4</h6>
                <Button
                    onClick={() => startQuiz()}
                    disabled={inProgress || value === 0}
                >
                    Start Quiz
                </Button>{" "}
                {revealed && (
                    <div>
                        {" "}
                        <div>
                            <h3>Quizzer</h3>
                            <div>
                                <h4>Which mythical creature is the tallest?</h4>
                                <MultipleChoiceQuestion
                                    options={[
                                        "A. Bigfoot",
                                        "B. Sasquatch",
                                        "C. Yeti"
                                    ]}
                                    expectedAnswer="B. Sasquatch"
                                ></MultipleChoiceQuestion>
                                <h4>Which mythical creature is the fastest?</h4>
                                <MultipleChoiceQuestion
                                    options={[
                                        "A. Chupacabra",
                                        "B. Lochness Monster",
                                        "C. King Kong"
                                    ]}
                                    expectedAnswer="A. Chupacabra"
                                ></MultipleChoiceQuestion>
                                <h4>
                                    Which mythical creature is the strongest?
                                </h4>
                                <MultipleChoiceQuestion
                                    options={[
                                        "A. Bigfoot",
                                        "B. Sasquatch",
                                        "C. Yeti"
                                    ]}
                                    expectedAnswer="A. Bigfoot"
                                ></MultipleChoiceQuestion>
                                <h4>
                                    Which mythical creature is the scariest?
                                </h4>
                                <CheckAnswer expectedAnswer="Chupacabra"></CheckAnswer>
                            </div>
                        </div>
                    </div>
                )}
                <Button onClick={() => stopQuiz()} disabled={!inProgress}>
                    Stop Quiz
                </Button>
                <Button onClick={() => mulliganValue()} disabled={inProgress}>
                    Mulligan
                </Button>
                <div>Attempts left: {value}</div>
            </div>
            <Button onClick={flipReveal}>Reveal Answer</Button>
        </div>
    );
}
