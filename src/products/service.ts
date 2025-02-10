import productsRepository from "./repository";

const productsService = {
    async findAll() {
        return await productsRepository.findAll();
    },
    async findById(id: string) {
        return await productsRepository.findById(id);
    },
    //TODO: we should add type
    async create(data: any) {
        return await productsRepository.create(data)
    },
    async updateById(id: string, data: any) {
        return await productsRepository.updateById(id, data);
    },
    async deleteById(id: string) {
        return await productsRepository.deleteById(id);
    },
}

export default productsService;