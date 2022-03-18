import React /*, { useState } */ from "react";
//import { Form } from "react-bootstrap";
//import { Button /*,Col, Container, Row*/ } from "react-bootstrap";
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
//import { CheckAnswer } from "./form-components/CheckAnswer";
//import { GiveAttempts } from "./form-components/GiveAttempts";
//import { EditMode } from "./form-components/EditMode";
//import { MultipleChoiceQuestion } from "../form-components/MultipleChoiceQuestion";
//import { ChangeColor } from "./form-components/ChangeColor";
//import { Quizzer } from "./quizzer/Quizzer";
import { MonsterQuiz } from "../quizzer/MonsterQuiz";
import { RockQuiz } from "../quizzer/RockQuiz";

/*export function startQuiz(): JSX.Element {
    const [revealed, setRevealed] = useState<boolean>(false);
    function flipReveal(): void {
        setRevealed(!revealed);
    }
    return (
        <div>
            <Button onClick={flipReveal}>Reveal Answer</Button>
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
                                    "A. Bigfoot",
                                    "B. Sasquatch",
                                    "C. Yeti"
                                ]}
                                expectedAnswer="B. Sasquatch"
                            ></MultipleChoiceQuestion>
                            <h4>Which mythical creature is the strongest?</h4>
                            <MultipleChoiceQuestion
                                options={[
                                    "A. Bigfoot",
                                    "B. Sasquatch",
                                    "C. Yeti"
                                ]}
                                expectedAnswer="B. Sasquatch"
                            ></MultipleChoiceQuestion>
                            <h4>Which mythical creature is the scariest?</h4>
                            <MultipleChoiceQuestion
                                options={[
                                    "A. Bigfoot",
                                    "B. Sasquatch",
                                    "C. Yeti"
                                ]}
                                expectedAnswer="B. Sasquatch"
                            ></MultipleChoiceQuestion>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}/*
*/
export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
            <MonsterQuiz></MonsterQuiz>
            <RockQuiz></RockQuiz>
        </div>
    );
}
