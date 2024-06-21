import { useState } from "react";

export function useToggleItems(a,i){
    let [array,setArray]=useState(a)
    let [value,setVal]=useState(i)

    function inc(){
        if(value<3){
            setVal(value+1)
        }else(
            setVal(0)
        )
    }
    return [array,value,inc]
}