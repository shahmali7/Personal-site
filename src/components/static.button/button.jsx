import {Button,Card} from 'react-bootstrap'
import React from 'react'

import { useLocation,useNavigate } from "react-router-dom";


function CButton() {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    const getPathname =()=>{
        if(pathname ==='/About'){
            return '/Resume'
        }
        if(!['/About','/Resume'].includes(pathname) || pathname === '/Resume'){
            return '/About'
        }
    }  


    const handleNavigation=()=>{
       navigate(getPathname())
    }

    
    return (
    <Card>
        <Button variant="outline-secondary" onClick={handleNavigation}>{pathname ==='/About'? 'Learn More':'About'}</Button>
    </Card>
  )
}

export default CButton