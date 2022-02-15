import { Picture } from './../model/pic.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiserviceService {
  private pics: Picture[] = [];
  private picsUpdated = new Subject<Picture[]>();

  constructor() { }
getpicUrl()
{
  return ([...this.pics])
}
getImageUpdateListener() {
  return this.picsUpdated.asObservable();
}
createpicUrl(){
  const pic:Picture={imageUrl:"./assets/image/image.jpg"}
    this.pics.push(pic);
    this.picsUpdated.next([...this.pics]);
}
}
