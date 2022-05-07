import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  public users = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }

  serach(user: any) {
    this.router.navigate(['/search'], { queryParams: { userName: user } });
  }

  clear() {
    localStorage.removeItem('users');
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
  }
}
