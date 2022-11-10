import { useEffect } from "react"



const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Globe Route Travels`
    },[title])
}

export default useTitle