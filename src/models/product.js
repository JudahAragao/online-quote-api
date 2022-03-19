const product = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        productId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        productDescription: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        productVariation: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        productUnitPrice: {
            type: DataTypes.FLOAT,
            allowNull: true
        }
    }, {
        tableName: 'product'
    })

    return Product
}
 
module.exports = product;