import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpBackend, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products =[]

  constructor(private route: ActivatedRoute, private http :HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['products']) {
        this.products = JSON.parse(params['products']);
        console.log('Products received:', this.products);
        // Use the received products data as needed
      }
    });
  }
  viewproduct(id){
    console.log('====d',id)
    this.getproductByid(id).subscribe(res=>{
      console.log('--->>product by id ',res)
      if(res){
        console.log('--->>view product greater >0')
        this.router.navigate(['/view-product'],{
          queryParams: { productview: JSON.stringify(res)}
        });
      }

    })
  }

  getproductByid(Id){
    const url = `https://fakestoreapi.com/products/${Id}`;
    return this.http.get<any[]>(url)

  }

}
