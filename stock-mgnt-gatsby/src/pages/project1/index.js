import * as React from 'react'
import { Button } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

function MajorPage() {
    return(
    <>
    <div 
        style={{
        textAlign:'center',
        border: '3px solid black',
        borderRadius: '25px',
        margin: '10%',
        backgroundColor: '#F5F5DC',
        }}
    >
        <h2 style={{marginTop:'3rem',marginBottom:'2rem', fontSize:'50px'}}>Grade Tracker (for 62x-63x)</h2>
        <img src='https://portal.scitech.au.edu/blog/wp-content/uploads/2022/02/vms-dark-logo-1024x136.png' 
         style={{width: '60%', height: '50%' }}></img>
        <div
            class="d-grid gap-2 col-5 mx-auto"
            style={{marginBottom: "5rem", marginTop: "1rem"}}
        >
            <Button variant="danger" style={{borderRadius:'15px', border:'1px solid black'}} href="/project1/cs">
                Computer Science
            </Button>
            <Button variant="primary" style={{borderRadius:'15px', border:'1px solid black'}} href="/project1/it">
                Information Technology
            </Button>
        </div>
    </div>
    </>
    )
}

export default MajorPage