class student{
    constructor(id,name,place){
        this.id=id;
        this.name=name;
        this.place=place;
    }
 withdrawl(){
     console.log("miss" + " " + this.name +  " " + "money paid successfully");


 }
 details(){
     console.log(this.id + " " + this.name + " " + this.place );
 }
}
let s1=new student(101,"vini","nellore");
let s2=new student(102,"anjali","thirupathi")
console.log(s1.name);
console.log(s2);
console.log(s1.withdrawl());
s1.details();
s2.details();

