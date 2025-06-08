import { useState } from "react";

const NOW = new Date();
const NOW_AS_TIMESTAMP = NOW.getTime();
const ONE_DAY_IN_MILLISECONDS = 86_400_000;

export default () => {
    const [steps, setSteps] = useState(1);
    const [count, setCount] = useState(0);
    const days = steps * count;
    const newDate = new Date(NOW_AS_TIMESTAMP + ONE_DAY_IN_MILLISECONDS * days);
    const formattedDate = newDate.toDateString();
    let preface = "Today is";

    if (newDate.getTime() > NOW_AS_TIMESTAMP) {
        preface = `${days} day(s) from today is`
    } else if (newDate.getTime() < NOW_AS_TIMESTAMP) {
        preface = `${days} day(s) ago was`;
    };

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 items-center">
                <button className="btn btn-primary" onClick={() => setSteps(current => current - 1)}>-</button>
                <span className="font-bold">Step: {steps}</span>
                <button className="btn btn-primary" onClick={() => setSteps(current => current + 1)}>+</button>
            </div>

            <div>
                <button className="btn btn-primary" onClick={() => setCount(current => current - 1)}>-</button>
                <span className="font-bold">Count: {count}</span>
                <button className="btn btn-primary" onClick={() => setCount(current => current + 1)}>+</button>
            </div>

            <span>{preface} {formattedDate}</span>
        </div>
    );
};
