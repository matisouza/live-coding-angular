import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IUserForm } from '../../login/interfaces/user-form.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  /**
   * behaviorSubject es un tipo de observable que mantiene y
   * emite el ultimo valor
   * en mi caso esta inicializada con el string hola
   */

  private behaviorSubject = new BehaviorSubject<string>('hola');

  /**
   * .asObservable() es un metodo que se utiliza para convertir
   * behaviorSubject en un observable. Devuelve una instancia
   * de un observable que solo podemos obtener el valor si nos
   * subscribimos
   */

  public bhsubject$ = this.behaviorSubject.asObservable();


  private subjectForm = new Subject<IUserForm>();
  public subjectForm$ = this.subjectForm.asObservable();

  private subjectBoolean = new BehaviorSubject<boolean>(false);
  public subjectBoolean$ = this.subjectBoolean.asObservable();




  /**
   * setBehSubjectValue se encarga de actualizar el valor de
   * behaviorSubject.
   */
  setBehSubjectValue( data: string ) {
    this.behaviorSubject.next( data )
  }

  setSubjectForm( data: IUserForm ){
    this.subjectForm.next( data )
  }

  setBoolean( data: boolean ){
    this.subjectBoolean.next( data )
  }

}
