import React from 'react'
import {useState, useEffect} from 'react';
import { HashLoader } from 'react-spinners';
//styles
import '../css/loadingSpinner.css'


const LoadingSpinner = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 5000);
      
    }, [])
    

  return (
        <div className='spinenrStyles' >
           
                <HashLoader color={'#00a0e1'} loading={loading} size={50}/>
          

    
        </div>
  )
}

export default LoadingSpinner