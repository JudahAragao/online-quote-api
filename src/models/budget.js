const budget = (sequelize, DataTypes) => {
    const Budget = sequelize.define('Budget', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        myCompany: {
            type: DataTypes.STRING(200),
            references: { model: 'publications', key: 'id' },
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        myCnpj: {
            type: DataTypes.STRING(14),
            allowNull: false
        },
        myAddress: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        myCellPhone: {
            type: DataTypes.STRING(14),
            allowNull: false
        },
        myEmail: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        seller: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        numberBudget: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateIssue: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        textBudget: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        delivary: {
            type: DataTypes.STRING(13),
            allowNull: false
        },
        costumerCompanyName: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        costumerName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        inTheCareOf: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        costumerAddress: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        costumerCity: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        costumerCpfOrCnpj: {
            type: DataTypes.STRING(14),
            allowNull: false
        },
        costumerZipCode: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        costumerState: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        productItem: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productDescription: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        productObs: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        productVariation: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        productAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productUnitPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        productSubtotal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        productTotalItems: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productTotalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        serviceItem: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        serviceDescription: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        serviceObs: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        serviceVariation: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        serviceAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        serviceUnitPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        serviceSubtotal: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        serviceTotalItems: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        serviceTotalPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        dueDate: {
            type: DataTypes.STRING(13),
            allowNull: false
        },
        totalPriceBudget: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        formToPayment: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        obsBudget: {
            type: DataTypes.STRING(1000),
            allowNull: false
        }
    }, {
        tableName: 'budgets'
    })

    return Budget
}
 
module.exports = budget;