import {useState} from 'react'

const useInitialState = () => {
    
    


    const [state, setState] = useState({
        nombre: '',
        apellido: '',
        id:null,
        auth: false,
        redirect:false,
    });

    const setAuth = () => {
        setState({
            ...state,
            auth: true
        })
    };
        
  return {setAuth, state}
}

export default useInitialState

