exports.getUser = (ctx ) => {
    let id = ctx.params.id
    ctx.body = {
                    status : 200,
                    message : usuarios[id]
    }
    return usuarios
}
