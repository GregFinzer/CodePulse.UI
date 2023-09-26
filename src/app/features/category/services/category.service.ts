import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment.development';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,
    private cookieService: CookieService) {     
  }

  getAllCategories() : Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/categories`);
  }

  getCategoryById(id: string) : Observable<Category> {
    return this.http.get<Category>(`${environment.apiBaseUrl}/api/categories/${id}`);
  }

  addCategory(model: Category) : Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/categories`, model);
  }

  updateCategory(id: string, updateCategoryRequest: Category) : Observable<Category> {
    return this.http.put<Category>(`${environment.apiBaseUrl}/api/categories/${id}`, updateCategoryRequest);
  }
  
  deleteCategory(id: string) : Observable<boolean> {
    return this.http.delete<boolean>(`${environment.apiBaseUrl}/api/categories/${id}`);
  }
}
