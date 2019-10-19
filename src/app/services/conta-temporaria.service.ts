import { Usuarios } from './../shared/usuarios.class';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class ContaTemporariaService {

  private usuariosCollection: AngularFirestoreCollection<Usuarios>;
  
  private usuarios: Observable<Usuarios[]>;

  constructor(db: AngularFirestore) { 
    this.usuariosCollection = db.collection<Usuarios>('usuarios');
    
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getUsuarios() {
    return this.usuarios;
  }
 
  getUsuariosId(id) {
    return this.usuariosCollection.doc<Usuarios>(id).valueChanges();
  }

  getUsuariosEmail(id) {
    return this.usuariosCollection.doc<Usuarios>(id).valueChanges();
  }
 
  updateUsuarios(usuarios: Usuarios, id: string) {
    return this.usuariosCollection.doc(id).update(usuarios);
  }
 
  addUsuarios(usuarios: Usuarios) {
    return this.usuariosCollection.add(usuarios);
  }
 
  removeUsuarios(id) {
    return this.usuariosCollection.doc(id).delete();
  }
}
