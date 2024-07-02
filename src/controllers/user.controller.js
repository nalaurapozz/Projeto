const create = (req, res) => {
    const { nome, senha, login, tipo } = req.body;
    if (!nome || !senha || !login) {
        return res.status(400).json({ error: 'Nome, senha e login são obrigatórios.' });
    }


    res.status(201).send({
        message: "Usuário criado!",
        user: {
            nome,
            login,
            tipo
        },
        
    })
};

module.exports = { create }