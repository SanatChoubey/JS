import { useState } from "react"


export const TreeCompo = ({data, expanded, children, key}: any) => {
    return <TreeChild key={key} data={data} expanded={expanded} children={children}></TreeChild>
}

export const TreeChild = ({data, expanded, children, key}: any) => {
    const [open, setOpen] = useState<any>([])
    if(expanded) {
        return <div>
            <div onClick={() => {
                if(open.includes(key)) {
                    console.log('comming', open.indexOf(key), open)
                    setOpen((prev: any[]) => [])  
                    console.log('comming2', open.indexOf(key), open)
                    return 
                }
                setOpen((prev: any[]) => prev.concat(key))
            }}>{'expandable'}{data}</div>
            {console.log('vola',children, open )}
            {open.includes(key)&& <div>{children.map((elm: any) => <TreeCompo data={elm.value} expanded={elm.expanded} children={elm.children} />)}</div>}
        </div>
    }
    console.log('upcoming', data)
    return <div>
        {data}
    </div>
}
