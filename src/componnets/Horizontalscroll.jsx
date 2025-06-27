import React,{useRef} from 'react'


function Horizontalscroll({children,className = ''}) {


    const scrollref =useRef()
    const startXref =useRef(0)
    const scollLeftref =useRef(0)

    const handleMouse = (evt) =>{
        if(!scrollref.current) return;

        startXref.current = evt.pageX

        scollLeftref.current = scrollref.current.scrollLeft

    const handlemouseMove =(evt) =>{
    if (!scrollref.current) return;

        
        const offset = evt.pageX - startXref.current

        scrollref.current.scrollLeft = scollLeftref.current - offset

        
    }
    const Handlemovesup =()=>{
        window.removeEventListener('mousemove',handlemouseMove)
        window.removeEventListener('mouseup', Handlemovesup);
    }

    window.addEventListener('mousemove',handlemouseMove)
    window.addEventListener('mouseup',Handlemovesup)


    }
  return (
    <div className={className}
      ref={scrollref}
      onMouseDown={handleMouse}
      
      >{children}</div>
  )
}

export default Horizontalscroll