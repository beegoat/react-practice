import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';



function App(){
    const [index, setIndex] = React.useState();
    const onSelect = (event) => {
        setIndex(event.target.value)
    }

    return(
        <div>
            <h1>Super Converter</h1>
            <select value={index} onChange={onSelect}>
                <option value="X">Select your units</option>
                <option value="0">Minutes & Hours</option>
                <option value="1">Km & Miles</option>
                <option value="2">Counter</option>
            </select>
            {index === "0" ? <MinutesToHours /> : null}
            {index === "1" ? <KmtoMiles /> : null}
            {index === "2" ? <Counter /> : null}
        </div>
    );
}

function KmtoMiles(){

    const [amounts, setAmounts] = React.useState(0);
    const [inverted, setInverted] = React.useState(false);

    const onChange = (event) =>{
        setAmounts(event.target.value);
    }

    const onReset = () => {setAmounts((current) => !current)}
    const onFlip = () => {setInverted((current) => !current)}


    return(
        <div>
            <h2>Kilometer to Mile</h2>
            <div>
                <label htmlFor="amounts">Kilometer</label>
                    <input 
                        value={inverted ? amounts * 1.609: amounts} 
                        id="amounts" 
                        placeholder="Kilometer" 
                        type="number"
                        onChange={onChange}
                        disabled={inverted}/>
                        {/* onChange 함수를 이용하여 setAmounts 값을 배정하지 않으면, default값에서 값이 변경되지 않는다. */}
            </div>
            <div>
                <label htmlFor="hours">Miles</label>
                    <input 
                        value={inverted ? amounts : Math.round(amounts/1.609)}
                        id="amounts" 
                        placeholder="Miles" 
                        type="number"
                        onChange={onChange}
                        disabled={!inverted}/>
            </div>
            <div>
                <button
                    onClick={onReset}>RESET</button>
                <button
                    onClick={onFlip}>{inverted ? "TURN BACK" : "INVERT"}</button>
            </div>
        </div>
    )
}

function MinutesToHours(){
    const [amounts, setAmounts] = React.useState(0);
    const [inverted, setInverted] = React.useState(false);

    const onChange = (event) => { 
        setAmounts(event.target.value); 
    }

    const onReset = () => { setAmounts(0); }

    const onFlip = () =>{ 
        setInverted((current) => !current );
        onReset();
    }

    return(
        <div>
            <h2> Minutes to Hours </h2>
            <div>
                <label htmlFor="amounts">Minute</label>
                    <input 
                        value={inverted ? amounts * 60 : amounts} 
                        id="amounts" 
                        placeholder="Minute" 
                        type="number"
                        onChange={onChange}
                        disabled={inverted}/>
                        {/* onChange 함수를 이용하여 setAmounts 값을 배정하지 않으면, default값에서 값이 변경되지 않는다. */}
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                    <input 
                        value={inverted ? amounts : Math.floor(amounts/60)}
                        id="hours" 
                        placeholder="Hours" 
                        type="number"
                        onChange={onChange}
                        disabled={!inverted}/>
            </div>
            <div>
                <button
                    onClick={onReset}>RESET</button>
                <button
                    onClick={onFlip}>{inverted ? "TURN BACK" : "INVERT"}</button>
            </div>
        </div>
    )
}

function Counter(){
    const [count, setCount] = React.useState(0)

    const onClick = () => {
        setCount((current) => current + 1)
    }

    return(
     <div>
        <span> Total click : {count} </span>
        <button onClick={onClick}>Click me!</button>
     </div>   
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
reportWebVitals();
