import React from 'react'
import './footer.scss'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="text">
                        <span>
                            Developed By 
                            <a className='link' target='_blank' rel="noreferrer" href="https://github.com/Thanakornkthphu">
                                Thanakorn.
                            </a> 
                            Using React JS & Redux Toolkit integrated with external movies data API
                            <a className='link' target='_blank' rel="noreferrer" href="https://www.omdbapi.com/">
                                OMDB.
                            </a>
                        </span>
                    </div>
                </div>        
            </div>   
        </>
    )
}

export default Footer
