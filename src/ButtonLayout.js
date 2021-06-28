import React, { useContext} from "react";
import "./index.css";
import { Context } from "./Context";

function ButtonLayout() {
  return (
    <div className="greyButtonStyling">
      {[
        "(",
        ")",
        "%",
        "AC",
        "7",
        "8",
        "9",
        "÷",
        "4",
        "5",
        "6",
        "×",
        "1",
        "2",
        "3",
        "-",
        "0",
        ".",
        "=",
        "+",
      ].map((el, idx) => (
        <ButtonFields
          key={idx}
          idx={Number.isInteger(Number(el)) ? Number(el) : el}
        />
      ))}
    </div>
  );
}

export default ButtonLayout;

function ButtonFields({ idx }) {
  const {
    displayValue,
    setDisplayValue,
    setEqualSignPressed,
    equalSignPressed,
  } = useContext(Context);


  function calc() {
  
    if (idx === "=") {

//       if (Boolean(Number(displayValue[(displayValue.length-1)])) === false
//       && Boolean(Number(displayValue[(displayValue.length-1)])) !== '(' 
//       && Boolean(Number(displayValue[(displayValue.length-1)])) !== ')' 
//       ) 
//       {
        
//         setDisplayValue('wrong input')} //when last character is not a number show false
//         else {
      setDisplayValue(
 eval(
          displayValue              //replace every special character that is shown on the display
            .replace(/×/g, "*")
            .replace(/\s/g, "")
            .replace(/÷/g, "/")
            .replace(/%/g, "%")
            
        ).toFixed(2) 
      );
    
      setEqualSignPressed(true);
    } else if (idx === "AC") {
            if (displayValue.length === 1 || equalSignPressed) {  //when result was just calculated and it is just one number
              setDisplayValue(0);
            } else if (displayValue !== 0) {
              setDisplayValue(displayValue.toString().slice(0, -1));
            }
      setEqualSignPressed(false);
    } else {

      hello(displayValue, setDisplayValue, idx)
    //  hello()
  }
  }
  return (
    <div
      className="stylingForButtons"
      onClick={() => {
          calc()
     
      }}
    >
      {idx}
    </div>
  );
}



function hello (displayValue, setDisplayValue, idx) {
  console.log(displayValue[displayValue.length - 1], "last char");

  if (displayValue === 0 || displayValue === "0") {
    console.log(displayValue, "dispValue");
    setDisplayValue(`${idx}`);
  } else if (!Number.isInteger(Number(idx)) && idx !== ".") {
   
    setDisplayValue(`${displayValue}  ${idx} `);
  } else if (!Boolean(Number(idx))) {
 
      if (
        Boolean(Number(displayValue.slice(displayValue.length-1))) === false ||
        displayValue.slice(displayValue.length-1) === '.'
      ) {
         }  else {
        setDisplayValue(`${displayValue}${idx}`)
      }
 
  } else {
    setDisplayValue(`${displayValue}${idx}`);
  }
}


