import { HttpInterceptorFn } from "@angular/common/http";
import { catchError, throwError } from "rxjs";


export const authInterceptor : HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token')

  const modifiedRequest = req.clone({
    setHeaders: {
      Authorization : token ? `Bearer ${token}` : ''
    }
  })

  return next(modifiedRequest).pipe(
    catchError(
      (error) => {
        if (error.status == 401) {
          // handle unauthenticated
        }
        return throwError(() => error)
      }
    )
  )
}