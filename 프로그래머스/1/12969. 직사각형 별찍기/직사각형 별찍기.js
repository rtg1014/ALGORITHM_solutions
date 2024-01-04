process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
        for(let i=0; i<b; i++){
        let stars = ''
        let while_lengh = a
        while(while_lengh>0){
            stars += '*'
            while_lengh--
        } 
        console.log(stars)
    }
    
    
});