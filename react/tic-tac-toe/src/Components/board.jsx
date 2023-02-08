import React from 'react'
import { useState } from 'react'
import Box from './board-box'
import * as utils from '../utils/utility'


function Board() {
    const [state, setState] = useState({
        boxes: Array(9).fill(null),
        history: [],
        xIsNext: true
    })

    const handleBoxClicked = (index) => {
        //creating a copy of the state
        const boxes = state.boxes.slice()

        //check for no double clicks

        if (boxes[index] !== null) {
            return
        }

        //stop the game if all boxes are clicked or filled
        if (utils.areAllBoxesClicked(boxes) === true) {
            return
        }

        //stop the game if we have a winner

        if (utils.findWinner(boxes)) {
            return
        }

        //Mark the box with either x or o

        boxes[index] = state.xIsNext ? 'x' : 'o'

        //add the moves to the history
        const history = state.history

        history.push(state.xIsNext ? 'x' : 'o')

        //update the state with new data

        setState({
            boxes: boxes,
            history: history,
            xIsNext: !state.xIsNext
        })
    }

    //get the winner (if there is any)

    const winner = utils.findWinner(state.boxes)

    //if all the boxes are filled or not

    const isFilled = utils.areAllBoxesClicked(state.boxes)


    let status;

    if (winner) {
        status = `the winner is ${winner}`
    } else if (!winner && isFilled) {
        status = 'Game Drawn'
    } else {
        status = `its ${state.xIsNext ? 'x' : 'o'}  turn`
    }

    console.log('winner', winner)
    return (
        <div>
            <div className='board-wrapper'>
                <div className='board'>
                    <h2 className='board-heading'>{status}</h2>
                    <div className='board-row'>
                        <Box
                            value={state.boxes[0]}
                            handleBoxClicked={() => handleBoxClicked(0)}
                        />
                        <Box
                            value={state.boxes[1]}
                            handleBoxClicked={() => handleBoxClicked(1)}
                        />
                        <Box
                            value={state.boxes[2]}
                            handleBoxClicked={() => handleBoxClicked(2)}
                        />
                    </div>
                    <div className='board-row'>
                        <Box
                            value={state.boxes[3]}
                            handleBoxClicked={() => handleBoxClicked(3)}
                        />
                        <Box
                            value={state.boxes[4]}
                            handleBoxClicked={() => handleBoxClicked(4)}
                        />
                        <Box
                            value={state.boxes[5]}
                            handleBoxClicked={() => handleBoxClicked(5)}
                        />
                    </div>
                    <div className='board-row'>
                        <Box
                            value={state.boxes[6]}
                            handleBoxClicked={() => handleBoxClicked(6)}
                        />
                        <Box
                            value={state.boxes[7]}
                            handleBoxClicked={() => handleBoxClicked(7)}
                        />
                        <Box
                            value={state.boxes[8]}
                            handleBoxClicked={() => handleBoxClicked(8)}
                        />
                    </div>
                </div>
                {/* history of moves */}
                <ul>
                    {state.history.length == 0 && (
                        <span>No moves to show</span>
                    )}
                    {
                        state.history.length != 0 &&
                        state.history.map((move, index) => {
                            return (
                                <li>
                                    Move {index + 1} : <strong>{move}</strong>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* button for restart */}

        </div>
    )
}

export default Board