import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service'; 
import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  changecategory = new FormControl('');
  filteredcategories: Observable<string[]>;
  options: string[] = ['One', 'Two', 'Three', 'Four', 'Five'];


  cartCount: number = 0;
  categories:[]


  constructor(private cartService: CartServiceService, private http :HttpClient) { }

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

    this.getAllcategories().subscribe(data=>{
      console.log('------->>>all categories',data.length)
      this.categories =data
      if(data.length>0){
        this.filteredcategories = this.changecategory.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }
    })

    // if(this.categories.length>0){

    // this.filteredcategories = this.changecategory.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this._filter(value || '')),
    // );
    // }

  }
  // private _filter(value: string): string[] {
  //   const filterValue = value
  //   return this.categories.filter(option => option.emp_name.toLowerCase().includes(filterValue));
  // }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.categories.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  getAllcategories(){
    console.log('--get the categories')
    return this.http.get<any>('https://fakestoreapi.com/products/categories')
  }

}
