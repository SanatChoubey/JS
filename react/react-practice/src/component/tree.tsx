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
                    setOpen((prev: any[]) => [])  
                    return 
                }
                setOpen((prev: any[]) => prev.concat(key))
            }}>{'expandable'}{data}</div>
            {open.includes(key)&& <div>{children.map((elm: any) => <TreeCompo data={elm.value} expanded={elm.expanded} children={elm.children} />)}</div>}
        </div>
    }
    return <div>
        {data}
    </div>
}
