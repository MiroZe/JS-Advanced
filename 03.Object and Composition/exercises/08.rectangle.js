function rectangle (width,height,color) {

    function calcArea (width,height) {
        let area = this.width * this.height;
        return area;
    }
    
    let firstLetter = color[0].toUpperCase();
    color = firstLetter + color.substring(1)

    return {
        width,
        height,
        color,
        calcArea

    }
}
let rect = rectangle(4, 5, 'blue');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
