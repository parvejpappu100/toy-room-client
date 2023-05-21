import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `${title} -ToyVroom`
    } , [title])
}

export default useTitle;