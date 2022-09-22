const objectMan = {
    name:"Jhon",
    age:5,
    wife:"Marry",
    wifeAge:26,
    ageCount:function (){
        return this.age > this.wifeAge ? this.age - this.wifeAge : this.wifeAge - this.age
    }
}
console.log()