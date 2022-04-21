import { v4 as uuidv4 } from 'uuid'
const usuarios = []
exports.getToken = (ctx )=>{
    //getUUIDV4 = require('C:/Users/Asus/Desktop/TEL335/control2-template/src/utils/uuid');
    let id = ctx.params.id
    let key = ctx.params.key
    let secret = ctx.params.secret
    //No me funciono bien el tema de las variables de entorno así que las hardcodee dentro del codigo
    const { KEY, SECRET } = require('C:/Users/Asus/Desktop/TEL335/control2-template/src/utils/constants.js');
    let token = uuidv4()
    if( key == KEY && secret == secret )
    {
        ctx.body = {
                    status : 200,
                    message : "Codigo correcto"
                   }
        token =  "88d65a2a-dc96-4f52-a153-045a660abf3f"
        usuarios.append({id,token})
        return token

    }
    else
    {        
        ctx.body = {status : 500,
        message : "Codigo incorrecto"}
        usuarios.push({id,token})
        return token
    }
}

exports.getUser = (ctx ) => {
    let id = ctx.params.id
    var resultado 
    const noesta=1
    for(var usuario in usuarios)
    {
        if(usuario['id'] == id)
            resultado = usuario
    }
    ctx.body = {
        status : 200,
        message : usuarios ,resultado
    }


    return usuarios
}

//module.exports = usuarios