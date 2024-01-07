function Car(drivername, make, model, year, color){
    this.drivername = drivername;
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() {
        document.getElementById("whodrives").textContent = `${this.drivername} drives ${this.color} ${this.model}.`;
    };
}
let index = 0;
let cars = [];
function create(){
    const drivername = document.getElementById("drivername").value;
    const make = document.getElementById("make").value;
    const model = document.getElementById("model").value;
    const year = document.getElementById("year").value;
    const color = document.getElementById("color").value;

    cars.push(new Car(drivername,make,model,year,color));
    document.getElementById("carlists").style.display = 'inline-block';
    show();
}
function show(){
    let latestcar = cars[cars.length -1];
    document.getElementById("results").textContent = `Make: ${latestcar.make}\nModel: ${latestcar.model}\nYear: ${latestcar.year}\nColor: ${latestcar.color}\n`;
    latestcar.drive();
    document.getElementById("results").style.whiteSpace = "pre-line";
    index = cars.length-1;
}
function previous(){
    if(index==0){
        index = cars.length-1; 
    }
    else{
        index-=1;
    }
    let latestcar = cars[index];
    document.getElementById("results").textContent = `Make: ${latestcar.make}\nModel: ${latestcar.model}\nYear: ${latestcar.year}\nColor: ${latestcar.color}\n`;
    latestcar.drive();
    document.getElementById("results").style.whiteSpace = "pre-line";
}
function next(){
    if(index>=cars.length-1){
        index = 0; 
    }
    else{
        index+=1;
    }
    let latestcar = cars[index];
    document.getElementById("results").textContent = `Make: ${latestcar.make}\nModel: ${latestcar.model}\nYear: ${latestcar.year}\nColor: ${latestcar.color}\n`;
    latestcar.drive();
    document.getElementById("results").style.whiteSpace = "pre-line";
}
