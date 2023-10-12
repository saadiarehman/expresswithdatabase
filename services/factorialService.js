module.exports={

    factorial:async(body)=>{
        try {
            var num=1;
            for(var i=body.input;i>=1;i--){
                num=num*i;
            }
            return (num);
        } catch (error) {
            return (error);
        }
    }
}