//find area of rectangle
//input: data length and data width
//process: length * width (rumus rectangle)
//output: rectangle are
let recLength:number = 5;
let recWidth:number = 5;
const recArea:number = recLength * recWidth;
console.log(recArea);

//find perimeter
//Input: data length dan data width
//process: length + length + width + width || (length *2) + (width * 2)
//Output: perimeter
let  rectLength:number = 5;
let rectWidth:number = 5;
const rectPerimeter:number = (rectLength * 2) + (rectWidth * 2);
console.log(rectPerimeter);


//Diameter, perimeter dan luas lingkaran
//diameter
//Input: Radius
//process: diameter = 2radius
//output: diameter
let radiusCircle:number = 5;
const diameterCircle:number = radiusCircle * 2;
console.log(diameterCircle);

//perimeter
//Input: radius
//process: perimeter = 2 * phi * r
//output: perimeter/circumference
const perimeterCircle:number = 2 * Math.PI * radiusCircle;
console.log(perimeterCircle);

//luas lingkaran
//input: radius
//process: luas = phi * rsquare
//output: area circle
const areaCircle:number = Math.PI * Math.pow(radiusCircle, 2);
console.log(areaCircle);

//Find triangle angle
//input: angle 1 and angle 2
//process: total luas segitiga: 180.
// so 180 = angleOne + angleTwo + x
// x = 180 - (angleOne + angleTwo);
//output: remaining angle
let angleOne:number = 5;
let angleTwo:number = 5;
const angleThree:number = 180 - (angleOne + angleTwo);
console.log(angleThree);

//day
//input: user input XXX days
//process:
/*  Year: input/365 --> dibulatkan kebawah 
 *  Month: input diremainder 365, sisanya dibagi bulan (30 hari), dibulatkan
 *  Day: input diremainder 365, diremainder lagi 30, sisanya adalah jumlah hari  */ 
//output: x year, x month, x day

let inputDays:number = 366;

const yearOne:number = Math.floor(inputDays / 365); //year
console.log(yearOne);

const month:number = inputDays % 365; //sisa hari setelah dikurang tahun (365 days) 
const monthCalc:number = Math.floor(month / 30); //sisa dibagi bulan, dibulatkan
console.log(monthCalc);

const day:number = month % 30; //Sisa hari setelah dikurang bulan (30 days)
console.log(day);

console.log(
    `${inputDays} days --> ${yearOne} year, ${monthCalc} month, ${day} days`);


// Selisih hari
// input: date
// process: cari selisih milisecond
// ubah milisecond ke hari
// output: Selisih hari
let dateOne:Date = new Date('2023-12-30');
let dateTwo:Date = new Date('2023-12-31');
const calculate = (dateTwo.getTime() - dateOne.getTime()) / 1000;
const calculateFinal = (calculate / 86400);
console.log(calculateFinal);




