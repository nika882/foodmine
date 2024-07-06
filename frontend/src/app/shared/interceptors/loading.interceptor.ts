import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
var pendingRequest=0;
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  [x: string]: any;

  constructor(private loadingService:LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.showLoading();
    pendingRequest=pendingRequest+1;
    return next.handle(request).pipe(
      tap({
        next:(event)=>{
          if(event.type===HttpEventType.Response)
            {
            this.handlerHideLoading();
          }
        },error:(_)=>{this.hande}
        })
      );
      }
      handlerHideLoading(){
        pendingRequest=pendingRequest-1;
        if(pendingRequest===0)
          this.loadingService.hideLoading();
      }
    
  }
  

