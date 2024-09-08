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
                        <button
                            style={{
                                backgroundColor: "#7950F2",
                                color: "#fff",
                            }}
                            onClick={handlePrevious}
                        >
                            previous
                        </button>
                        <button
                            style={{
                                backgroundColor: "#7950F2",
                                color: "#fff",
                            }}
                            onClick={handleNext}
                        >
                            next
                        </button>
                    </div>
                </div>
            )}
            <Counter />
        </React.Fragment>
    );
}

function Counter() {
    const [step, setStep] = useState(1);
    const [count, setCount] = useState(0);
    const date = new Date();
    date.setDate(date.getDate() + count);

    function addStep() {
        setStep((s) => s + 1);
    }

    function reduceStep() {
        setStep((s) => s - 1);
    }

    function addCount() {
        setCount((c) => c + step);
    }

    function reduceCount() {
        setCount((c) => c - step);
    }
    return (
        <div>
            <div>
                <button onClick={reduceStep}>-</button>
                <span>step: {step}</span>
                <button onClick={addStep}>+</button>
            </div>
            <div>
                <button onClick={reduceCount}>-</button>
                <span>count: {count}</span>
                <button onClick={addCount}>+</button>
            </div>
            <p>
                {count === 0
                    ? "Today is"
                    : count > 0
                    ? `${count} days from today will be `
                    : `${count} days from today was `}
                {date.toDateString()}
            </p>
        </div>
    );
}
