import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { UtilService } from '../util/util.service';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(
            private http: HttpClient, private uiService: UtilService,
          
    ) {
    }

    /**
     * @method (get 
     * @param url 
     * @param data 
     * @param backGroundUrl 
     */
    getData(url: string, data?: any, backGroundUrl?: boolean): Observable<any> {
        const searchParams = this.appendParams(data);
        const apiUrl = `${environment.apiBaseUrl}${url}`;
         return this.http.get(apiUrl, {params: searchParams}).pipe(map((response: any) => {
            
            return response;
        }));
        // console.log();
    }

    /**
     * @method (post 
     * @param url 
     * @param data 
     */
    postData(url: string, data, formData?: boolean, backGroundUrl?: boolean) {
        const apiUrl = `${environment.apiBaseUrl}${url}`;
        const postData = !formData ? data : this.appendFormData(data);
        return this.http.post(apiUrl, postData).pipe(map((response: any) => {
            return response;
        }));
    }

    uploadImageService(url: string, data, formData?: boolean, backGroundUrl?: boolean) {

        const tempUrl = 'https://debican-api.wehive.io/User/imageUpload';

      
        const apiUrl = `${tempUrl}`;

       
        const postData = !formData ? data : this.appendFormData(data);
        return this.http.post(apiUrl, postData).pipe(map((response: any) => {
            return response;
        }));
    }

    /**
     * @method (put http request)
     * @param url (api url)
     * @param data (data which we have to pass to server)
     */
    putData(url: string, data, formData?: boolean) {
        const apiUrl = `${environment.apiBaseUrl}${url}`;
        const postData = !formData ? data : this.appendFormData(data);
        return this.http.put(apiUrl, postData).pipe(map((response: any) => {
            return response;
        }));
    }

    /**
     * @method (patch http request)
     * @param url (api url)
     * @param data (data which we have to pass to server)
     */
    patchData(url: string, data, formData?: boolean) {
        const apiUrl = `${environment.apiBaseUrl}${url}`;
        const postData = !formData ? data : this.appendFormData(data);
        return this.http.patch(apiUrl, postData).pipe(map((response: any) => {
            return response;
        }));
    }

    /**
     * @method (delete http request)
     * @param url (api url)
     */
    deleteData(url: string) {
        const apiUrl = `${environment.apiBaseUrl}${url}`;
        return this.http.delete(apiUrl).pipe(map((response: any) => {
            return response;
        }));
    }

    /**
     * @method (append formdata)
     * @param myFormData (pass which you want to make formdata type)
     */
    appendFormData(myFormData: { [x: string]: any; }): FormData {
        const fd = new FormData();
        for (const key of Object.keys(myFormData)) {
            fd.append(key, myFormData[key]);
        }
        return fd;
    }

    /**
     * @method (append params)
     * @param myParams (pass data which you want to make http params)
     */
    appendParams(myParams: { [x: string]: any; }): HttpParams {
        let params = new HttpParams();
        if (!!myParams) {
            for (const key of Object.keys(myParams)) {
                // if (data[key] || key == 'skip')
                params = params.append(key, myParams[key]);
            }
        }
        return params;
    }

    /**
     * @method (post http request)
     * @param url (api url)
     * @param data (data which we have to pass to server)
     */
    imageUpload(url: string, data) {
        const postData = this.appendFormData(data);
        return this.http.post(url, postData).pipe(map((response: any) => {
            return response;
        }));
    }

}
