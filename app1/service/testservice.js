import {selectLoginUser,insertLoginUser} from '../models/test.js';

export const selectservice = async(student)=>{
    let response = await selectLoginUser()
    console.log(response);
    
    let data=response.data;
    var arr=[]
    var j=0;
    for(let i=0;i<data.length;i++){
        if(data[i].name==student.trim()){
            arr[j++]=data[i]
            console.log("array_element",arr[j]);
        }
    }
    const Array=arr.map((item) => {
            return item;
    }
    )
    return Array;
    
  
}

export const insertservice  = async(params)=>{
    let response = await insertLoginUser(params.mobile,params.name, params.email,params.college,params.city,params.gender)
    console.log(response);
    return response;
}

/*
//const newparams={mobile:'67245435745',name:'gauree',email:'g@b.com',college:'ssgmce',city:'shegaon',gender:'female'}


//insertservice(newparams)
//selectservice();
*/