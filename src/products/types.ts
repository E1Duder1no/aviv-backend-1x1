import { Model, Optional} from "sequelize";

export interface ProductAttributes {
    id: string;
    title: string;
    description: string;
    price: number;
}

interface ProductCreationAttributes
    extends Optional<ProductAttributes, 'id'> {}

export interface ProductInstance
    extends Model<ProductAttributes, ProductCreationAttributes>,
        ProductAttributes {
    createdAt?: Date;
    updatedAt?: Date;
}
