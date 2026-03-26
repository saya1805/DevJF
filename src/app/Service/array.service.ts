import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  courses = [
    {
      image:'/ng.png',
      crs_name:'Angular',
      crs_progress:'0',
      crs_width:'20',
      path:'/courses/ng',
      img_w:"114px",
      img_h:"88px",
      img_margin:"170px"
    },
    {
      image:'/htmlcss.png',
      crs_name:'Html & Css',
      crs_progress:'0',
      crs_width:'80',
      path:'/courses/ml',
      img_w:"109px",
      img_h:"88px",
      img_margin:"170px"
    },
    {
      image:'/Mysql-Logo-PNG-Background.png',
      crs_name:'Sql',
      crs_progress:'0',
      crs_width:'40',
      path:'/courses/ql',
      img_w:"120px",
      img_h:"88px",
      img_margin:"170px"
    },
    {
      image:'/logoimage.png',
      crs_name:'Asp .Net',
      crs_progress:'0',
      crs_width:'90',
      path:'/courses/sp',
      img_w:"147px",
      img_h:"91px",
      img_margin:"162px"
    }
  ]

  constructor() { }
}
