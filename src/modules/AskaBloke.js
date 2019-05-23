import $ from 'jquery';
import { userObjects } from './objectsForMain'

export class UserArray {
  constructor() {
    this.array = []
  }
  initPage(){
    for(var i = 0; i < userObjects.length; i++){
      this.array.push(userObjects[i])
    }
  }

  pushObjToArray(title, name, description){
    this.array.push({ title, name, description })
  }
}
