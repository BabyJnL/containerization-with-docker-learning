module.exports = (sequelize) => {
    const { DataTypes, Model } = require('sequelize');

    class Lecturer extends Model {}

    Lecturer.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            fullname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: 'Lecture'
        }
    )

    global.Lecturer = Lecturer;
}