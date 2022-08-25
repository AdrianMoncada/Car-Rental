import {useState} from 'react'

const useInitialState = () => {

    const [state, setState] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        id:null,
        auth: false,
        redirect:false,
        rol:'',
        ciudad:''
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