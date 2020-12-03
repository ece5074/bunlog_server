module.exports = (sequelize,DataTypes)=>{
    const post = sequelize.define('Post',{
        title:{
            type:DataTypes.STRING(40),
            allowNull:false,
        },
        body:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    });

    return post;
};