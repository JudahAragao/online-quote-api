const company = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        companyId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        companyName: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        companyCnpj: {
            type: DataTypes.STRING(14),
            allowNull: false
        },
        companyAddress: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        companyTelephone: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        companyEmail: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    }, {
        tableName: 'company'
    })

    return Company
}
 
module.exports = company;