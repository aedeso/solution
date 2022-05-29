import React, {useState} from "react";
import { Wrapper } from "./Wrapper";
import { Screen } from "./Screen";
import { ButtonBox } from "./ButtonBox";


const toString = (num) => num.toString();
export const Calculator = () => {
    // 
    // State Hook
    // 
    const [calc, setCalc] = useState({
        sign: "",
        num: 0,
        res: 0
    })

    // 
    // Functionality
    // 
    const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if ((calc.num).toString().length < 9) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : calc.num % 1 === 0
            ? Number((calc.num + value).toString())
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Error"
            : 
                math(
                  Number(toString(calc.res)),
                  Number(toString(calc.num)),
                  calc.sign
                )
              ,
        sign: "",
        num: 0,
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? ((calc.num).toString() * -1) : 0,
      res: calc.res ? ((calc.res).toString() * -1) : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat((calc.num).toString()) : 0;
    let res = calc.res ? parseFloat((calc.res).toString()) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const selectClickHandler = (e) => {
      e.preventDefault();
      let btn = e.target.innerHTML;

          btn === "C"
        ? resetClickHandler()
        : btn === "+/-"
        ? invertClickHandler()
        : btn === "%"
        ? percentClickHandler()
        : btn === "="
        ? equalsClickHandler()
        : btn === "/" || btn === "X" || btn === "-" || btn === "+"
        ? signClickHandler(e)
        : btn === "."
        ? commaClickHandler(e)
        : numClickHandler(e)
  
    //   switch(true) {
    //       case (btn === "C"): resetClickHandler();
    //       break;
    //       case (btn === "+/-"): invertClickHandler();
    //       break;
    //       case (btn === "%"): percentClickHandler();
    //       break;
    //       case (btn === "="): equalsClickHandler();
    //       break;
    //       case (btn === "/" || btn === "X" || btn === "-" || btn === "+"): signClickHandler(e);
    //       break;
    //       case (btn === "."): commaClickHandler(e);
    //       break;
    //       default: numClickHandler(e)
    //       break;
    //   }
   }
    // 
    // Render
    // 
    return (
        <Wrapper>
            <Screen value={calc.num ? calc.num : calc.res}/>
            <ButtonBox onClick={selectClickHandler}/>
        </Wrapper>
    )
}