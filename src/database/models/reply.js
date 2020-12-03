module.exports = (sequelize,DataTypes)=>{
    const reply = sequelize.define('Reply',{
        body:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    });

    return reply;
};