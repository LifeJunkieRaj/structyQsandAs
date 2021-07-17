function main([train, max, addTen, addZero, pass1, pass2, pass3]) {
        let trainArr = train.split(' ');
        let ten = addTen.slice(4);
        let newTrain = trainArr.push(ten);
        let zero = addZero.slice(4);
        let newerTrain = trainArr.push(zero);
        for(let i = 0; i < newerTrain.length - 1; i++) {
            let wagon = newerTrain[i]
            
        }
       
    
    return trainArr.join(' ')
}
    main(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])

