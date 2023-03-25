import { MutableRefObject, useEffect, useRef, useState } from "react"

const InterSectionComponent = ({image}: any) => {
    const [showImage, setShowImage] = useState<boolean>(false)
    const imageref: any = useRef<MutableRefObject<HTMLDivElement>>()
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer ) => {
            entries.forEach(entry => {
                if(!entry.isIntersecting) return null
                setShowImage(true)
                observer.disconnect()
            })
        })
        observer.observe(imageref.current)
    }, [])
    if(showImage){
        return <img width={300} height={300} src={image} />
    }
    return (
        <div style={{width: '100vw', height: '50vh'}} ref={imageref}>
            blocked
        </div>
    )
}
export default InterSectionComponent
