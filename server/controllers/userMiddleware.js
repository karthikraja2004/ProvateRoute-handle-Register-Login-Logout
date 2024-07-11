const bcrypt=require('bcrypt');

const hashPassword= async function(next){
    if(!this.isModified('password'))
        {
        return next();
    }

    try{
        const salt=await bcrypt.genSalt(10);

        this.password=await bcrypt.hash(this.password,salt);

        this.confirmPassword=undefined;
        next();
    }
    catch(err)
    {
        next(err);
    }
};

module.exports={hashPassword};