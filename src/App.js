import { useState } from "react";
import React from "react";

const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

export default function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handlePrevious() {
        if (currentStep > 1) setCurrentStep((currStp) => currStp - 1);
    }

    function handleNext() {
        if (currentStep < 3) setCurrentStep((currStp) => currStp + 1);
    }

    function handleClose() {
        // isOpen ? setIsOpen(false) : setIsOpen(true);
        setIsOpen((isOpn) => !isOpn);
    }

    return (
        <React.Fragment>
            <button className="close" onClick={handleClose}>
                X
            </button>
            {isOpen && (
                <div className="steps">
                    {/* Three number components */}
                    {Array.from({ length: 3 }, (_, id) => id + 1).map(
                        (_, idx) => (
                            <Number
                                currStep={currentStep}
                                index={idx + 1}
                                key={idx + 1}
                            />
                        )
                    )}

                    {/* Text component */}
                    <Message step={currentStep}>
                        {messages[currentStep - 1]}
                    </Message>

                    {/* Button componenets */}
                    <Button
                        textColor="#fff"
                        bgColor="#7950F2"
                        onClick={handlePrevious}
                    >
                        <span>👈</span>Previous
                    </Button>
                    <Button
                        textColor="#fff"
                        bgColor="#7950F2"
                        onClick={handleNext}
                    >
                        Next<span>👉</span>
                    </Button>
                </div>
            )}
        </React.Fragment>
    );
}

function Number({ currStep, index }) {
    return (
        <div className="numbers">
            <div className={currStep >= index ? "active" : ""}>{index}</div>
        </div>
    );
}

function Message({ step, children }) {
    return (
        <p className="message">
            <span>Step {step}</span>
            {children}
        </p>
    );
}

function Button({ textColor, bgColor, onClick, children }) {
    return (
        //Children is a react Keyword that will pass the emoji and the text - represents children prop
        <button
            style={{
                backgroundColor: bgColor,
                color: textColor,
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
