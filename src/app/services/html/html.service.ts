import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  public unavailableButton: string = '<button class="button button-outline unavailable" style="background-color: red;color: white;">Mark as Unavailable</button>'
  public availableButton: string = '<button button-outline class="button available" style="background-color: green;color: white;">Mark as Available</button>'

  constructor() { }

  getDoctorsElements() {
    var table = document.getElementById("doctors");
    const tableObject = { doctors: table.getElementsByTagName("tr"), table: table }
    return tableObject
  }

  createSearchbarElement() {
    let input = document.createElement('input');
    input.style.border = "0.1rem solid #d1d1d1"
    input.style.borderRadius = ".4rem"
    input.style.boxSizing = "inherit"
    input.style.height = "3.8rem"
    input.style.width = "220%"
    input.style.backgroundImage = 'url(../../assets/search-outline.svg)'
    input.style.backgroundPosition = '3%'
    input.style.backgroundRepeat = 'no-repeat'
    input.style.paddingLeft = '40px'
    input.style.backgroundSize = '2rem'
    input.placeholder = 'Search...'
    input.id = 'searchBar'
    return input
  }
}
