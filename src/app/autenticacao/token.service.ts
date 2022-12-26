
import { Injectable } from '@angular/core';

const KEY ='token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

 retornaToken(){
	return window.localStorage.getItem(KEY) 
 }

 salvaToken(token:string){
			window.localStorage.setItem(KEY,token)
}

excluiToken(){
		window.localStorage.removeItem(KEY)
}

possuiToken(){
	return !! this.retornaToken()
}
}
