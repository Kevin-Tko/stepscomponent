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
                    <div className="numbers">
                        <div className={currentStep >= 1 ? "active" : ""}>
                            1
                        </div>
                        <div className={currentStep >= 2 ? "active" : ""}>
                            2
                        </div>
                        <div className={currentStep >= 3 ? "active" : ""}>
                            3
                        </div>
                    </div>
                    <p className="message">
                        Step {currentStep}: {messages[currentStep - 1]}
                    </p>
                    <div className="buttons">
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
                </div>
            )}
        </React.Fragment>
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
