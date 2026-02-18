import { HttpInterceptorFn } from '@angular/common/http';
import { ApiService } from '../Service/api.service';
import { inject } from '@angular/core';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const apiservice = inject(ApiService)
  const usertoken = apiservice.token()

  if(usertoken){
    const cloneserviceres = req.clone({
      setHeaders:{
        Authorization:`Bearer ${usertoken}`
      }
    });
    return next(cloneserviceres)
  }

  return next(req);
};
