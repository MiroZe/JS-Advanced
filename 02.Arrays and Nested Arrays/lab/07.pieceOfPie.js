function pieceOfPie(array,targetFlavorOne,targetFlavorTwo) {

    if( array.includes(targetFlavorOne) && array.includes(targetFlavorTwo)) {
        let startIndex = array.indexOf(targetFlavorOne);
        let endIndex =  array.indexOf(targetFlavorTwo);
        let result = array.slice(startIndex,endIndex +1 );
       return result;
    }

}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'


)