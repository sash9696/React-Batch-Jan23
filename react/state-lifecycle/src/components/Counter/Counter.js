import React, { useEffect, useState } from "react";


function Counter() {
    console.log('Counter called')
    const [counter, setCounter] = useState(0)
    const [newCounter, setNewCounter] = useState(0)


    //useeffect takes  a function and a dependecy array
    // useEffect(function(){}, [])

    //case 1 when you are passing an empty dependency array
    //so useeffect will run once after component mounts
    // useEffect(function () {
    //     console.log('useEffect called')
    // }, [])

    //case 2  when you pass dependency array
    //so useeffect will run once after dependency array updates
    // useEffect(function () {
    //     console.log('useEffect called')
    // }, [counter, newCounter])


    //case 3 when you are using a return function 
    //so useeffect is called before the component is about to delete
    useEffect(function () {
        console.log('useEffect called')

        return function () {
            console.log('useEffect called before deletion')
        }
    }, [])




    return (
        <div>
            <div>
                <h1>Counter {counter} </h1>
                <button onClick={() => setCounter(counter + 1)} >+</button>
                <button onClick={() => setCounter(counter - 1)}>-</button>



            </div>
            <div>
                <h1>NewCounter {newCounter} </h1>
                <button onClick={() => setNewCounter(newCounter + 1)} >Increase newCounter</button>

            </div>
        </div>
    )


}

export default Counter