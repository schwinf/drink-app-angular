import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller = false;
  menuOpen = false;

  chart = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.dailyForecast()
      .subscribe(res => {
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            datasets: [
              { 
                data: [25, 30, 15, 28, 16, 20, 8],
                backgroundColor: "#4ec8ed",
                borderColor: "#3cba9f",
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true,
                gridLines: {
                  color: "rgba(0, 0, 0, 0",
                }
              }],
              yAxes: [{
                display: true,
                ticks: {
                  beginAtZero: true,
                  max: 100,
                  min: 0
              }
              }],
            }
          }
        });
      })
  }

  greeting() {
    if(!this.menuOpen){
      this.menuOpen = true;
      document.getElementById("greeting").style.opacity = "0";
    }
    else{
      this.menuOpen = false;
      document.getElementById("greeting").style.opacity = "1";
    }
  }

}
