import { Component, OnInit } from "@angular/core";
import {HttpClient, HttpParams}  from  "@angular/common/http";
import { map } from "rxjs/operators";
@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    


    public weather :any;
    public city="";
    


    constructor() {
        
    }

    ngOnInit(): void {
    
        
    }

    getWeatherData(){
        fetch('https://samples.openweathermap.org/data/2.5/weather?q='+this.city+',uk&appid=439d4b804bc8187953eb36d2a8c26a02')
        .then(response=>response.json())
    .then(data=>{

        let temp="temperature"+data['main']['temp'];
        let name= "City"+data['name'];


    })  .catch(err=> alert("wrong city name"));


}

    
    
}
