const budget = (sequelize, DataTypes) => {
    const Budget = sequelize.define('Budget', {
        budgetId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        companyId: {
            type: DataTypes.INTEGER,
            references: { model: 'company', key: 'companyId' },
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        costumerId: {
            type: DataTypes.INTEGER,
            references: { model: 'costumers', key: 'costumerId' },
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        producstId: {
            type: DataTypes.INTEGER,
            references: { model: 'products', key: 'productId' },
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        servicesId: {
            type: DataTypes.INTEGER,
            references: { model: 'services', key: 'serviceId' },
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
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
        inTheCareOf: {
            type: DataTypes.STRING(100),
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
        },
        statusBudget: { // 1-pending, 2-aproved, 3-canceled 
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        tableName: 'budgets'
    })

    return Budget
}
 
module.exports = budget;