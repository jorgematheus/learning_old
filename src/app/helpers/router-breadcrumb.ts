import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class RouterBreadcrumb {

    protected _router: string;

    constructor(private router: Router ) {}

    public getUrlBreadCrumb(url) :string {       
        //tirar ultimo indice da url caso tiver um id, para preencher no breadcrumb
        let splitUrl = url.split("/");
        if(splitUrl.length >= 4) {
            //removendo ultimo indice do array (id)
            splitUrl.pop();          
            this._router = splitUrl.join("/");
            
        } else {
            this._router = this.router.url;
        }      

        return this._router;
    }

    
}