import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent{
    constructor(private router: Router) {}
    share(){
        debugger;
        this.router.navigateByUrl('/abonime');
    }
    products=[
        {
            "name": "Abonim ditor",
            "description": "Abonohu cdo dite per fitness",
        },
        {
            "name": "Abonim mujor",
            "description": "Abonohu cdo muaj per fitness",
        },
        {
            "name": "Abonim vjetor",
            "description": "Abonohu cdo vit per fitness",
        },
    ]

};