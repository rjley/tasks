import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colorlist = [
    "Purple",
    "Yellow",
    "Green",
    "Orange",
    "Grey",
    "Blue",
    "Magenta",
    "White",
    "Black"
];

interface color {
    colors: string;
    setColors: (color: string) => void;
}

function boxColor({ color }: { color: string }): JSX.Element {
    return (
        <div
            style={{
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "top",
                marginLeft: "10px"
            }}
        >
            {color}
        </div>
    );
}
function UpdateColor({ colors, setColors }: color): JSX.Element {
    function newColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColors(event.target.value);
    }
    return (
        <div>
            {colorlist.map((color: string) => (
                <Form.Check
                    inline
                    type="radio"
                    name="Colors"
                    onChange={newColor}
                    id={color}
                    value={color}
                    checked={color === colors}
                    key={color}
                    label={boxColor({ color })}
                />
            ))}
        </div>
    );
}

export function ChangeColor(): JSX.Element {
    const [colors, setColors] = useState<string>(colorlist[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <UpdateColor colors={colors} setColors={setColors}></UpdateColor>
            You picked:
            <span data-testid="colored-box" style={{ backgroundColor: colors }}>
                {colors}
            </span>
        </div>
    );
}

/*
export function App(): JSX.Element {
  // This is the State (Model)
    const [emotion, setEmotion] = useState<string>("happy");

    // This is the Control
    function updateEmotion(event: React.ChangeEvent<HTMLInputElement>) {
        setEmotion(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Check
                type="radio"
                name="emotions"
                onChange={updateEmotion}
                id="emotion-check-happy"
                label="Happy"
                value="happy"
                checked={emotion === "happy"}
            />
            <Form.Check
                type="radio"
                name="emotions"
                onChange={updateEmotion}
                id="emotion-check-sad"
                label="Sad"
                value="sad"
                checked={emotion === "sad"}
            />
            <Form.Check
                type="radio"
                name="emotions"
                onChange={updateEmotion}
                id="emotion-check-angry"
                label="Angry"
                value="angry"
                checked={emotion === "angry"}
            />
            <div>The user is feeling {emotion}.</div>
        </div>
    );
}
*/
