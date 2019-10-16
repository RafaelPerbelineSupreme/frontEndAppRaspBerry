import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Usuarios } from './../shared/usuarios.class';

const USER_KEY = 'contaTemporaria';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {  }

  addUser(user: Usuarios): Promise<any>{
    console.log(USER_KEY);
    return this.storage.get(USER_KEY).then((users: Usuarios[]) => {
      if(users){
        users.push(user);
        return this.storage.set(USER_KEY, users);
      } else{
        return this.storage.set(USER_KEY, [user]);
      }
    }).catch((error) =>{
      console.log(error);
    });
  }

  getUser(): Promise<Usuarios[]>{
    console.log(USER_KEY);
    return this.storage.get(USER_KEY);
  }

  updateUser(user: Usuarios){
    console.log(USER_KEY);
    return this.storage.get(USER_KEY).then((users: Usuarios[]) => {
      if(!users || users.length === 0){
        return null;
      }
      let newUsers: Usuarios[] = [];

      for(let u of users){
        if(u.idUser === user.idUser){
          newUsers.push(user);
        }else{
          newUsers.push(u);
        }
      }

      return this.storage.set(USER_KEY,newUsers);
    }).catch((error) =>{
      console.log(error);
    });
  }

  deleteUser(id: string): Promise<Usuarios>{
    console.log(USER_KEY);
    return this.storage.get(USER_KEY).then((users: Usuarios[]) => {
      if(!users || users.length === 0){
        return null;
      }

      let toKeep: Usuarios[] = [];

      for(let u of users){
        if(u.idUser !== id){
          toKeep.push(u);
        }
      }

      return this.storage.set(USER_KEY,toKeep);
    }).catch((error) =>{
      console.log(error);
    });
  }
}
