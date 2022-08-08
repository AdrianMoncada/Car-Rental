

export const registroApi = async (data) => {
    // ** CAMBIAR POR EL URL DE LA API
    try {
        const respuesta = await axiosConnection.post("/usuarios/agregarUsuario",data);
        if (respuesta.status !== 200) {
            throw new Error("No se pudo registrar, vuelve a intentar")
        } else {
            console.log("respuesta1: ", respuesta.data.data);
        }
        return respuesta.data.data;
    } catch (error) {
        console.error("ERROR REGISTRO API ", error);
    }

};


export const loginApi = async ( data ) => { 
    try {
        const {username, password} = data 
        const credentials = {username, password}
        const respuesta = await axiosConnection.post('/authenticate', credentials)
        if( respuesta.status === 200 || respuesta.status === 201 ){
            sessionStorage.clear()
            sessionStorage.setItem('token', JSON.stringify(respuesta.data.jwt))
            sessionStorage.setItem('user', JSON.stringify({nombre:respuesta.data.nombre, apellido:respuesta.data.apellido, ciudad: respuesta.data.ciudad}))
            console.log('anda', respuesta.data);
        }else{
            throw new Error('error login: ')
        }
        return respuesta.data
    }
    catch ( error ){ 
        console.error("error login catch: ",error);
    }
}

