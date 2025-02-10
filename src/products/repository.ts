import ProductModel from "./model";

const productsRepository = {
    async findAll() {
        return await ProductModel.findAndCountAll();
    },
    async findById(id: string) {
        return await ProductModel.findByPk(id)
    },
    //TODO: we should add type
    async create(data: any) {
        return await ProductModel.create(data)
    },
    async updateById(id: string, data: any) {
        await ProductModel.update(data, {where: {id}})
        return ProductModel.findByPk(id)
    },
    async deleteById(id: string) {
       const isDeleted = await ProductModel.destroy({where: {id}})
        if (!isDeleted) throw new Error("Product not found");
        return isDeleted;
    },
}

export default productsRepository;