import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories:[]
  placeholderImageUrl: string = 'assets/images/gallary.png';

  constructor(private http :HttpClient,  private router: Router) { }

  ngOnInit(): void {
    this.getAllcategories().subscribe(data=>{
      console.log('------->>>all categories',data)
      this.categories =data
    })
  }

 
  categoryItem(item){
    console.log('-------->>item', item)
    this.getproductsBycatogoriwise(item).subscribe(res=>{
      console.log('---->>>categoriwise',res)
      if(res.length>0){
        console.log('--->>product list greater >0')
        this.router.navigate(['/product-list'],{
          queryParams: { products: JSON.stringify(res)}
        });

      }

    })
  }

  //------->>>>>>>>> API's <<<<<<--------- 


  getAllcategories(){
    console.log('--get the categories')
    return this.http.get<any>('https://fakestoreapi.com/products/categories')
  }

  getproductsBycatogoriwise(data){
    const url = `https://fakestoreapi.com/products/category/${data}`;
    return this.http.get<any[]>(url)

  }

}
