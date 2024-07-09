import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private basePath = '/users';

  constructor(private db: AngularFireDatabase) { }

  getUsers(): Observable<any[]> {
    return this.db.list(this.basePath).snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...(c.payload.val() as any) }))
      )
    );
  }

  createUser(user: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.list(this.basePath).push(user)
        .then(() => resolve())
        .catch(error => reject(error));
    });
  }

  updateUser(key: string, value: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.list(this.basePath).update(key, value)
        .then(() => resolve())
        .catch(error => reject(error));
    });
  }

  deleteUser(key: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.db.list(this.basePath).remove(key)
        .then(() => resolve())
        .catch(error => reject(error));
    });
  }
}
