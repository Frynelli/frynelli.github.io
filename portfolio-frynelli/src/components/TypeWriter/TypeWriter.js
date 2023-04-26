import { useEffect, useState } from "react";

const useTypeWriter = (word)=>{
const [typing, setTyping] =useState("");
useEffect(()=>{
    const timeout = setTimeout(()=>{
      setTyping(word.slice(0,typing.length + 1))
    },200)
    return ()=> clearTimeout(timeout);
},[typing])
return typing;
}
export default useTypeWriter;