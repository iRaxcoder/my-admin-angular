import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [],
})
export class PromisesComponent implements OnInit {
  ngOnInit() {
    /* this.getUsers().then((users) => {
      console.log(users);
    }); */
    /* const promise = new Promise((resolve, reject) => {
      if (false) {
        resolve('esto es un mensaje');
      } else {
        reject('error');
      }
    });

    promise
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      }); */
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      fetch('https://reqres.in/api/users')
        .then((res) => res.json())
        .then((body) => {
          resolve(body.data);
        })
        .catch((err) => reject(err));
    });
  }
}
