import React, { useState } from 'react'
import "./Game.css"

const Game = () => {
    const [turn, setTurn] = useState("x")
    const [box, setBox] = useState(Array(9).fill(""));
    const [winner,setWinner]=useState()

    const handlereset=(()=>{
        setWinner("")
        setBox(Array(9).fill(""))
    })




    const checkwinner = (matrix) => {
        let pattern = {
            row: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            coloumn: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ],
            diagonal: [
                [0, 4, 8],
                [2, 4, 6],
            ],
        };
        for(let match in pattern){
            pattern[match].forEach((elements )=> {
               if( matrix[elements[0]]===""||
               matrix[elements[1]]===""||
               matrix[elements[2]]===""
               ) {
                //"do nothing"
               }
               else if(
                matrix[elements[0]]===matrix[elements[1]]&&
                matrix[elements[1]]===matrix[elements[2]]
               ){
                setWinner(matrix[elements[0]])
               }
               
            });
        }

    }
    
    const Box = ({ val }) => {
        return <td onClick={() => handleclick(val)}>{box[val]}</td>
    };

    const handleclick = (val) => {
        if (box[val] !== "") {
            alert("already clicked")
            return;
        }
        let matrix = [...box];

        if (turn === "x") {
            matrix[val] = "x"
            setTurn("o");
        } else {
            matrix[val] = "o"
            setTurn("x");
        }

        checkwinner(matrix);
        setBox(matrix)
        console.log(matrix)

    }



    return (

        <div className='game'>
            <table>
                <tbody>
                    <tr>
                        <Box val={0} />
                        <Box val={1} />
                        <Box val={2} />

                    </tr>
                    <tr>
                        <Box val={3} />
                        <Box val={4} />
                        <Box val={5} />

                    </tr>
                    <tr>
                        <Box val={6} />
                        <Box val={7} />
                        <Box val={8} />

                    </tr>
                </tbody>
            </table>
            <div><p>turn{turn}</p></div>
            <div>
            { winner &&( <p>winner is{winner}</p>) }
            </div>
            
           
            <button onClick={()=>(handlereset())}>Play Again</button>
            

        </div>
    )
}

export default Game