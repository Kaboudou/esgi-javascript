    function type_check_v1(arg1,arg2) {
        if(typeof arg1 == typeof arg2){
            console.log(true);
            return true;
        }else
        {
            console.log(false);
            return false;
        }
    }
    type_check_v1(1,"number");