import * as service from './service.js'

export const create = async (req, res) => {
    const { title , path, tags , type } = req.body
    const create = await service.create({ title , path, tags , type })
    res.send(create)
}

export const search = async (req, res) => {
    const {search} = req.body
    const result = await service.search(search)
    res.send(result)
}