module.exports = (sequelize,DataTypes)=>{
    const user = sequelize.define('user',{
        email:{
            type:DataTypes.STRING(40),
            allowNull:false,
            unique:true,
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        nick:{
            type:DataTypes.STRING(10),
            allowNull:false,
        }
    });

    return user;
};