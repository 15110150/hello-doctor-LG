import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import { Doctor } from './model/doctor';
import { ServiceService } from './services/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  doctor;
  title = 'landpageHD';
  imageSources: (string | IImage)[] = [
    { url: 'http://vievie.vn/wp-content/uploads/2017/09/bn.png', href: '#config' },
    { url: 'https://www.freseniusmedicalcare.com.vn/fileadmin/data/masterContent/images/About_Us/FMC_in_country/SPE001_Fresenius-Medical-Care-in-country.jpg',href: '#config' },
    { url: 'https://www.freseniusmedicalcare.com.vn/fileadmin/data/masterContent/images/Healthcare_Professionals/06_Renal_IT/09_Nurses/SPE001_Renal-IT-Nurses.jpg', href: 'https://www.apple.com/' },
  ];

  constructor(private service: ServiceService){}

  ngOnInit(){
    this.doctor = new Doctor();
  }

  btnRegister_click(doctor: Doctor){
    console.log(this.doctor);
    this.service.saveDoctor(doctor)
    .subscribe(result =>{
      alert("Đăng kí thành công")
    },
    error =>{
      alert("Đăng kí thất bại")
    })
  }
}
