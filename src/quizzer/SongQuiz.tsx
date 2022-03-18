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

export function SongQuiz(): JSX.Element {
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
                <h6>This is a quiz about Rock Songs. Questions:10</h6>
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
                                    This song was features on Sgt. Peppers
                                    Lonely Hearts club:
                                </h4>
                                <MultipleChoiceQuestion
                                    options={[
                                        "",
                                        "A. Lucy in the Sky with Diamonds",
                                        "B. Something",
                                        "C. Yellow Submarine"
                                    ]}
                                    expectedAnswer="A. Lucy in the Sky with Diamonds"
                                ></MultipleChoiceQuestion>
                                <h4>
                                    Black Sabbath wrote this song protesting
                                    war:
                                </h4>
                                <MultipleChoiceQuestion
                                    options={[
                                        "",
                                        "A. Fortunate Son",
                                        "B. War Pigs",
                                        "C. War (What is it Good For?)"
                                    ]}
                                    expectedAnswer="B. War Pigs"
                                ></MultipleChoiceQuestion>
                                <h4>
                                    The Doors wrote a song titled People Are
                                    ____?
                                </h4>
                                <MultipleChoiceQuestion
                                    options={[
                                        "",
                                        "A. Dumb",
                                        "B. Strange",
                                        "C. Scary"
                                    ]}
                                    expectedAnswer="B. Strange"
                                ></MultipleChoiceQuestion>
                                <h4>
                                    Which of these songs features the Fibonacci
                                    Sequence throughout the timing of the song?
                                </h4>
                                <MultipleChoiceQuestion
                                    options={[
                                        "",
                                        "A. TOOL: Lateralus",
                                        "B. Rolling Stones: Paint It, Black",
                                        "C. Slayer: Angel of Death"
                                    ]}
                                    expectedAnswer="A. TOOL: Lateralus"
                                ></MultipleChoiceQuestion>
                                <h4>Tom Petty wrote:</h4>
                                <MultipleChoiceQuestion
                                    options={[
                                        "",
                                        "A. Tangled up in Blue",
                                        "B. Sunshine of your Love",
                                        "C. Last Dance with Mary Jane"
                                    ]}
                                    expectedAnswer="C. Last Dance with Mary Jane"
                                ></MultipleChoiceQuestion>
                                <h4>
                                    This was the last song written by Kurt
                                    Cobain
                                </h4>
                                <CheckAnswer expectedAnswer="You Know You're Right"></CheckAnswer>
                                <h4>
                                    The Eagles wrote this song about Hollywood
                                </h4>
                                <CheckAnswer expectedAnswer="Hotel California"></CheckAnswer>
                                <h4>This is Guns n Roses Masterpiece</h4>
                                <CheckAnswer expectedAnswer="November Rain"></CheckAnswer>
                                <h4>
                                    This Van Halen song features only a guitar
                                    solo
                                </h4>
                                <CheckAnswer expectedAnswer="Eruption"></CheckAnswer>
                                <h4>
                                    Judas Priest wrote a song titled Living
                                    After ______
                                </h4>
                                <CheckAnswer expectedAnswer="Midnight"></CheckAnswer>
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
        </div>
    );
}
