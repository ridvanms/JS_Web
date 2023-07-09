import{Injectable} from "@angular/core"
import{ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router"
import { AlbumService } from "../album.service"

@Injectable({
    providedIn:'root'
})

export class PhotoResolver implements Resolve<any>{
    constructor(private albumService:AlbumService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // Perform authentication check or fetch necessary data here
        return this.albumService.getPhoto(route.params['id'])
       // Return an Observable or Promise that resolves with the required data
    }
}