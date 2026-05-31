import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api';
import { AsyncPipe, JsonPipe } from '@angular/common';

interface User {
  id: number,
  name: string,
  phone: string,
  email: string,
}

@Component({
  selector: 'app-user-listing',
  imports: [JsonPipe],
  standalone: true,
  templateUrl: './user-listing.html',
  styleUrl: './user-listing.scss',
})
export class UserListing implements OnInit {
  constructor(private apiService: ApiService) {
  }

  userData: User[] = []
  tableHeader: string[] = ['test']
  arr = Array(8)

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() {
    this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (res: any) => {
        this.userData = res.map(({id, name, email, phone}: any) => ({id, name, email, phone}))

        this.tableHeader = Object.keys(this.userData[0]);


        console.log('API Response', res);
        console.log('User Data', this.userData);
        console.log('Headers', this.tableHeader);
      }, error: (err: any) => {
        console.error(err)
      },
      complete: () => {

      }
    })
  }
}
