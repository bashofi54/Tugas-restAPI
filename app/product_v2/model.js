const { DataTypes } = require("sequelize");
const sequelize = require("../../config/sequelize");

const Product = sequelize.define('Product', {
    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.CHAR,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    image_url: {
        type: DataTypes.TEXT,
    }
});

module.exports = Product;