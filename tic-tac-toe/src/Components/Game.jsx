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
        return <td className="main-td" onClick={() => handleclick(val)}>{box[val]}</td>
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
       <><div className='wel' > <h2>Welcome to tic-tac-toe Game</h2></div>
         
        <div className='my-game'>
              <div className='turn'><h2>turn : # {turn}</h2></div>
        <div className='game'>
            <table>
                <tbody>
                    <tr >
                       <td className='m1'> <Box  val={0} /></td>
                       <td className='m2'> <Box val={1} /></td>
                       <td className='m3'> <Box val={2} /></td>

                    </tr>
                    <tr>
                    <td className='N1'>  <Box val={3} /></td>
                    <td className='N2'>  <Box val={4} /></td>
                    <td className='N3'>  <Box val={5} /></td>

                    </tr>
                    <tr>
                       <td className='O1' ><Box val={6} /> </td>
                       <td className='O2' > <Box val={7} /></td>
                       <td className='O3'>  <Box val={8} /> </td>

                    </tr>
                </tbody>
            </table>
        </div>
        <button onClick={()=>(handlereset())}>Play Again</button>
          
        <div >
        
            { winner &&( <p>winner is {winner} </p>) }
        </div>
            
            
        </div>
        </>
    )
}

export default Game