import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public user: any;
  name = new FormControl('', [Validators.required]);
  public submit: boolean = false;
  public noUser: boolean = false;
  public internet: boolean = false;
  constructor(private service: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const user: any = this.route.snapshot.queryParamMap.get('userName') || null;
    if (user) {
      this.name.setValue(user);
      this.onFormSubmit(user);
    }
  }

  isLink(data: any) {
    if (typeof data === 'string') {
      return data.includes('https');
    }
    return false;
  }

  saveUser(name: string, available: boolean) {
    let userArray = JSON.parse(localStorage.getItem('users') || '[]');
    userArray.push({
      name: name,
      available: available,
    });
    localStorage.setItem('users', JSON.stringify(userArray));
  }

  onFormSubmit(history = null) {
    this.user = null;
    let name: any = history || this.name.value;
    this.submit = true;
    if (name && name !== '') {
      this.service.getUser(name).subscribe({
        next: (data) => {
          if (!history) this.saveUser(name, true);
          this.user = data.body;
          let image: any = document.getElementById('image');
          image.style.backgroundImage = `url('${this.user.avatar_url}')`;
        },
        error: (error) => {
          if (!history) this.saveUser(name, false);
          if (error.message === 'Not Found') {
            this.noUser = true;
            this.user = null;
          } else if (error.type === 'error') {
            this.internet = true;
          }
        },
      });
    }
  }

  focus() {
    this.submit = false;
    this.noUser = false;
    this.internet = false;
  }
}
