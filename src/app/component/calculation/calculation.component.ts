import { Picture } from './../../model/pic.model';
import { PiserviceService } from './../../service/piservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {
 
  pic:Picture[]=[]

i=0;
m=0;
n=1;
p=0
nums_0="";
nums_1="";
nums_2="";
nums_3="";
nums_4="";
nums_5="";
nums_6="";
nums_7="";
nums_8="";
nums_9="";
adds="+";
num_1=0;
num_2=0;
num_3=0;
mode="";

num_4=0;

pr1=" ";
pr2=" ";
pr3="";
pr4=" ";
pr5="";
calculated_1=0
calculated_2=0
calculated_3=0
rcalculated_3=0
rcalculated_4=0
e=0;
url=""
num_array=[];


  ngOnInit(): void {
    this.picservice.createpicUrl()
    this.url=this.pic[0].imageUrl
  }
  constructor(private picservice:PiserviceService) { 
    
    this.picservice.getpicUrl()
    this.picservice.getImageUpdateListener().subscribe((pics)=>{
                  this.pic=pics 
                  console.log(this.pic,"this is pic")
     });
     console.log("constructor")

    
  }



setnum0(){
  this.nums_0="0"
  this.pr3=(this.pr3)+(this.nums_0)
  this.pr4=(this.pr4)+(this.nums_0)

  }
setnum1(){
  this.nums_1="1"
  this.pr3=(this.pr3)+(this.nums_1)
  this.pr4=(this.pr4)+(this.nums_1)
}
setnum2(){
  this.nums_2="2"
  this.pr3=(this.pr3)+(this.nums_2)
  this.pr4=(this.pr4)+(this.nums_2)
}

setnum3(){
  this.nums_3="3"
  this.pr3=(this.pr3)+(this.nums_3)
  this.pr4=(this.pr4)+(this.nums_3)

}

setnum4(){
  this.nums_4="4"
  this.pr3=(this.pr3)+(this.nums_4)
  this.pr4=(this.pr4)+(this.nums_4)
}
setnum5(){
  this.nums_5="5"
  this.pr3=(this.pr3)+(this.nums_5)
  this.pr4=(this.pr4)+(this.nums_5)
}

setnum6(){
  this.nums_6="6"
  this.pr3=(this.pr3)+(this.nums_6)
  this.pr4=(this.pr4)+(this.nums_6)
}

setnum7(){
  this.nums_7="7"
  this.pr3=(this.pr3)+(this.nums_7)
  this.pr4=(this.pr4)+(this.nums_7)
}

setnum8(){
  this.nums_8="8"
  this.pr3=(this.pr3)+(this.nums_8)
  this.pr4=(this.pr4)+(this.nums_8)
}
setnum9(){
  this.nums_9="9"
  this.pr3=(this.pr3)+(this.nums_9)
  this.pr4=(this.pr4)+(this.nums_9)
}

subtract(){
  this.mode="-";
  this.calculated_3=0;
  let temp =parseInt(this.pr4)
  this.calculated_1=temp;
  this.calculated_3=(this.calculated_1)-(this.calculated_3)
 
  this.pr3=this.pr3 + "-"
  this.pr4="0";



}
mult(){
  this.mode="*";
  
  console.log("this is pr4",this.pr4)
  let temp =parseInt(this.pr4)
  this.calculated_1=temp;
  if(this.i==0)
  {
    this.calculated_3=1
   // this.calculated_1=1
    this.i++

  }
  if(this.n==0)
  {
    
    this.calculated_1=1 
  }
  this.calculated_3=(this.calculated_3)*(this.calculated_1)
  console.log("this is calculated 3",this.calculated_3)
  this.pr3=this.pr3 + "*"
  this.pr4=" ";

}
add(){
  this.mode="+";
  let temp =parseInt(this.pr4)
  this.calculated_1=temp;
  this.calculated_3=(this.calculated_3)+(this.calculated_1)
 
  this.pr3=this.pr3 + "+"
  this.pr4="0";

 
}
div(){
  this.mode="/";
  this.pr5=this.pr4
  let temp =parseInt(this.pr4)
  this.calculated_1=temp;
  if(this.calculated_1===0)
  {
    this.e=1;
    this.value_to_zero();
    return
  }
  this.calculated_3=1;
  this.calculated_3=(this.calculated_1)/(this.calculated_3)
 
  this.pr3=this.pr3 + "/"
  this.pr4="0";


}
result(){
  if(this.mode=="+")
  {
   // this.calculated_1=0;
    let temp=parseInt(this.pr4)
    this.calculated_2=temp
    this.rcalculated_3=(this.calculated_3)+(this.calculated_2)    
    this.pr4="0";
    this.rcalculated_4=(this.rcalculated_4)+(this.rcalculated_3)
    this.calculated_2=0
    this.calculated_3=0
    this.p=1
   // this.rcalculated_3=0
  }
  else if(this.mode=="-")
  {
    
  //  this.calculated_1=0;
    let temp=parseInt(this.pr4)
    this.calculated_2=temp
    this.rcalculated_3=(this.calculated_3)-(this.calculated_2)
    console.log(this.rcalculated_3)    
    this.pr4="0";
    this.rcalculated_4=(this.rcalculated_3)-(this.rcalculated_4)
    console.log(this.rcalculated_4)
    this.calculated_2=0
    this.calculated_3=0
    this.rcalculated_3=0
  }
  else if(this.mode=="*")
  {
    // this.calculated_1=0;
    let temp=parseInt(this.pr4)
    this.calculated_2=temp
    console.log("this is calculated2 ",this.calculated_2)
    
    this.rcalculated_3=(this.calculated_3)*(this.calculated_2)    
   // this.pr4="0";
    if(this.m==0)
    {
      this.m++;
      this.rcalculated_4=1
    }
    this.rcalculated_4=(this.rcalculated_4)*(this.rcalculated_3)
    //this.calculated_2=0
    this.i=0;
    this.n=0;
    //this.calculated_3=0
   // this.rcalculated_3=0
    
  }
  else if(this.mode=="/")
  {
    this.rcalculated_4=1
    let temp=parseInt(this.pr4)
    this.calculated_2=temp
    this.rcalculated_3=(this.calculated_3)/(this.calculated_2)    
    this.pr4="0";
    this.rcalculated_4=(this.rcalculated_3)/(this.rcalculated_4)
    this.calculated_2=0
    this.calculated_3=0
    this.rcalculated_3=0 
     }
}
value_to_zero(){
  if(this.e==1)
  
  {  
    this.e=0;
  
  alert("Maths error  0 can't be divided")
   
  }
  
  this.nums_0="0";
  this.nums_1="1";
  this.nums_2="2";
  this.nums_3="3";
  this.nums_4="4";
  this.nums_5="5";
  this.nums_6="6";
  this.nums_7="7";
  this.nums_8="8";
  this.nums_9="9";
  this.pr3="";
  this.pr4="";
  this.rcalculated_3=0;
  this.rcalculated_4=0;
  this.calculated_3=0;
  this.i=0;
  this.n=1;
  this.m=0;
  this.p=0
}

}
