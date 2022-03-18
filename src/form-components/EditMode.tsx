import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface visible {
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

interface name {
    name: string;
    setName: (name: string) => void;
}

interface student {
    student: boolean;
    setStudent: (student: boolean) => void;
}

function UpdateName({ name, setName }: name): JSX.Element {
    return (
        <div>
            <Form.Control
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setName(event.target.value)
                }
            />
        </div>
    );
}

function UpdateVisibility({ visible, setVisible }: visible): JSX.Element {
    function newVisibility(event: React.ChangeEvent<HTMLInputElement>) {
        setVisible(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-visible"
                label={visible ? "EditMode On" : "EditMode Off"}
                checked={visible}
                onChange={newVisibility}
            />
        </div>
    );
}

function UpdateStudent({ student, setStudent }: student): JSX.Element {
    function newStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-student"
                label="Student?"
                checked={student}
                onChange={newStudent}
            />
        </div>
    );
}

export function EditMode(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <span>
                {student === false && <span>{name} is not a student.</span>}
                {student === true && <span>{name} is a student.</span>}
            </span>
            <div>
                <UpdateVisibility
                    visible={visible}
                    setVisible={setVisible}
                ></UpdateVisibility>{" "}
                {visible && (
                    <div>
                        <UpdateName name={name} setName={setName}></UpdateName>
                        <UpdateStudent
                            student={student}
                            setStudent={setStudent}
                        ></UpdateStudent>
                    </div>
                )}
            </div>
        </div>
    );
}

/*
export function App(): JSX.Element {
  // This is the State (Model)
  const [isHappy, setIsHappy] = useState<boolean>(true);

  // This is the Control
  function updateHappiness(event: React.ChangeEvent<HTMLInputElement>) {
    setIsHappy(event.target.checked)
  }

  // This is the View
  return <div>
      <Form.Check
          type="switch"
          id="is-happy-check"
          label="Happy?"
          checked={isHappy}
          onChange={updateHappiness}
      />
      <div>The user is {isHappy ? "happy" : "not happy"}.</div>
  </div>;
}
*/
