const fake=require('faker');



function create(n=1,...args){
    let i=0,temp,card;
    let buff=[];
    while(i<n){
        card=(fake.helpers.userCard());
        data=args.reduce((acc,data)=>{
        acc[data]=card[data];
        return acc;
        },{});
        if(n===1){return data}else{
            buff.push(data);
        }   
        i+=1;     
    }
    return buff;
}

function Jsonify(g){
    return JSON.stringify(g,undefined,2);
}

module.exports={
    create,
    Jsonify
}