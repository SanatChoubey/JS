import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InterSectionComponent from './component/intersectionComponent'
import { TreeCompo  } from './component/tree'
function App() {
  const [count, setCount] = useState(0)
  let treeObj: any= {
    x: 'x',
    y:{
      z: "a",
      p: {
        m: {
          'd': 'ok'
        }
      }
    },
    a: {
      b: {
        c: 'd'
      }
    }
  }
  const [treeArr, setTreeArray] = useState([])
  const deepClear: any = (element: any) => {
    let temp = []
    for(let k in element ){
      console.log(typeof element[k])
      if(typeof element[k] != 'object') {
        temp.push({key:Math.trunc( Math.random() * 400), expanded: false, value: k , children: null})
      }else {
        temp.push({key:Math.trunc(Math.random() * 400), expanded: true, value: k , children:deepClear(element[k])})
      }
    }
    return temp
  }
  useEffect(() => {
    console.log(Object.values(treeObj))
    setTreeArray(deepClear(treeObj))
  }, [])
  const images = [
    "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1532664189809-02133fee698d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1524473994769-c1bbbf30e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1492136344046-866c85e0bf04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMjU4fQ&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1511200016789-e7b694d91f81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1513415564515-763d91423bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1517309246852-c500628fefad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ];
  useEffect(() => {
    console.log('called')
  }, [])
  return (<div style={{display: 'flex', flexDirection:'column'}}>
    {
      images.map((e) => {
        return <InterSectionComponent image={e}/>
      })
    }
     {/* traverse html v document */}
    {
      treeArr.map((elem: any) => {
        console.log(elem, elem.expanded)
        return <TreeCompo key={elem.key} data={elem.value} expanded={elem.expanded} children={elem.children}  />
      })
    }
    </div>
  )
}

export default App
