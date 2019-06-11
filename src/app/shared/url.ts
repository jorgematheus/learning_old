import { ENVIRONMENT } from '../environment';

export let URL = '';


if(ENVIRONMENT == 'development') {
    URL = 'http://localhost:4200';
}

else {
    URL = 'www.producao.com'
}