import ProductModel from "./model";
import {ProductAttributes} from "./types";
import createHttpError from "http-errors";

const productsRepository = {
    async findAll() {
        const {rows, count} = await ProductModel.findAndCountAll();
        return {
            products: rows.map((product: any) => product.toJSON()),
            count
        };
    },
    async findById(id: string) {
        return await ProductModel.findByPk(id)
    },
    async create(data: ProductAttributes) {
        return await ProductModel.create(data)
    },
    async updateById(id: string, data: ProductAttributes) {
        await ProductModel.update(data, {where: {id}})
        return ProductModel.findByPk(id)
    },
    async deleteById(id: string) {
        const isDeleted = await ProductModel.destroy({where: {id}})
        if (!isDeleted) throw new createHttpError.NotFound(`product ${id} does not exist`);
        return isDeleted;
    },
}

export default productsRepository;