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

export function RockQuiz(): JSX.Element {
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
                <h6>This is a quiz about Rock n Roll. Questions:4</h6>
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
                            <div>
                                <h4>
                                    What year did the Beatles come to America?
                                </h4>
                                <MultipleChoiceQuestion
                                    options={["A. 1964", "B. 1973", "C. 1950"]}
                                    expectedAnswer="A. 1964"
                                ></MultipleChoiceQuestion>
                                <h4>
                                    Which band caused the Grunge revolution in
                                    the 90s?
                                </h4>
                                <CheckAnswer expectedAnswer="Nirvana"></CheckAnswer>
                                <h4>
                                    How did the band, The Band, get their name?
                                </h4>
                                <MultipleChoiceQuestion
                                    options={[
                                        "A. Couldn't think of a cool name",
                                        "B. They were Bob Dylan's band",
                                        "C. They were Tom Petty's band"
                                    ]}
                                    expectedAnswer="B. They were Bob Dylan's band"
                                ></MultipleChoiceQuestion>
                                <h4>Athlea is a song by the...</h4>
                                <CheckAnswer expectedAnswer="Grateful Dead"></CheckAnswer>
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
