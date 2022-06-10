import React, { createContext, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({})

function AuthProvider({children}){

    const [user, setUser] = useState({});
    const navigation = useNavigation();

    function signIn(matricula, password){
        if (matricula !== '' && password !== ''){
            setUser({
                matricula: matricula,
                status: 'ATIVO'
            })

            navigation.navigate('HomeProfessor')
        }
    }


    return(
        <AuthContext.Provider value={{ nome: 'Matheus Telles', signIn, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;