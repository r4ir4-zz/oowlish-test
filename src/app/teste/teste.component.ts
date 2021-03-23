import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { DoctorsService } from '../services/doctors/doctors.service';
import { HtmlService } from '../services/html/html.service';


@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss'],
})
export class TesteComponent implements OnInit, AfterViewInit {

  doctors
  doctorsList = []
  doctorsElements

  constructor(
    private elRef: ElementRef,
    private doctorsService: DoctorsService,
    public htmlService: HtmlService
  ) { }

  ngOnInit(): void {
    this.appendSearchBar()
  }

  ngAfterViewInit() {
    this.getHtmlElements()
    this.getDoctorFilteredList('all')
    for (let i = 0; i < this.doctorsElements.length; i++)
      this.doctorsList[this.doctorsElements[i].dataset.upin] = this.doctorsElements[i];
  }


  getDoctorStatus() {
    for (let i = 0; i < this.doctors.length; i++) {
      this.doctorsElements[i].children[3].innerHTML = !this.doctors[i].available ? this.htmlService.unavailableButton : this.htmlService.availableButton
    }
  }

  async getSelectedDoctor(upin: any) {
    let doctor = this.doctors.filter(doc => { return doc.upin.toString() === upin })[0]
    if (doctor) {
      doctor.available = !doctor.available
      this.getDoctorStatus()
      await this.doctorsService.changeDisponibility(doctor)
    }
  }

  async getDoctorFilteredList(filter: string) {
    this.doctors = await this.doctorsService.getDoctors()
    if (filter === 'all') this.showAllDoctors();
    else this.getAvailableDoctors();
    this.getDoctorStatus()
  }

  showAllDoctors() {
    for (let doctor of this.doctorsElements)
      doctor.hidden = false
  }

  getAvailableDoctors() {
    this.doctors.forEach((doctor) => {
      if (!doctor.available)
        for (let doctorUpin in this.doctorsList)
          if (doctorUpin === doctor.upin.toString())
            this.doctorsList[doctorUpin].hidden = true
    })
  }

  getHtmlElements() {
    let filter = this.elRef.nativeElement.querySelector('#availabilityFilterSelect')
    this.doctorsElements = this.htmlService.getDoctorsElements().doctors
    let table = this.htmlService.getDoctorsElements().table

    table.addEventListener("click", (e: any) => {
      if (e.target.toString() == '[object HTMLButtonElement]') {
        this.getSelectedDoctor(e.path[2].dataset.upin)
      }
    })
    filter.onchange = () => {
      this.getDoctorFilteredList(filter.value)
    }
  }

  appendSearchBar() {
    let searchbar = this.htmlService.createSearchbarElement()
    searchbar.onkeyup = () => {
      var searchTerm = (<HTMLInputElement>document.getElementById("searchBar")).value;
      this.search(searchTerm)
    }
    document.getElementById('searchContainer').appendChild(searchbar);
  }

  search(searchTerm: string) {
    for (let doctor of this.doctors) {
      const doctorName = doctor.name.toLowerCase()
      const doctorUpin = doctor.upin.toString()
      if ((doctorName.includes(searchTerm.toLowerCase()) || doctorUpin.includes(searchTerm)))
        this.doctorsList[doctor.upin].hidden = false
      else {
        this.doctorsList[doctor.upin].hidden = true
      }
    }
  }
}


