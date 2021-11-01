class employee{
    min_Fees=10000;
    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
        get_Details(){
         return "hello World";
        }
    

}
class employee1 extends employee{
    min_Fees=60000;
    constructor(id,name,salary,Area,city,state){
        super(id,name,salary);
        this.Area=Area;
        this.city=city;
        this.state=state;

    }
    get_Details(){
        return "Good Morning";
    }
}

     let c1=new employee1(101,"ram",50000,"Maharathalli","Bangalore","KA");

     console.log(c1);
     console.log(c1.min_Fees);
    
    console.log(c1.get_Details());
    class employee2 extends employee1{
        min_Fees=80000;
    }
    let c2=new employee2();
    console.log(c2.min_Fees);
    



