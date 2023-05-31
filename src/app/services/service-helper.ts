import { Observable, throwError } from 'rxjs';

// export function HandleError(error: any): Promise<any>{
//     console.log(error);
//     return Promise.reject(error);
// }

export function HandleError(error: any): Observable<any> {
  console.log(error);
  return throwError(() => error);
}
