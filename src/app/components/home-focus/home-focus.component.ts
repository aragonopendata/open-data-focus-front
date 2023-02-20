import { Component, OnInit } from '@angular/core';
import { HistoriesService } from '../../services/histories.service';
import { Constants } from '../../app.constants';
import { Router } from '@angular/router';
import { History } from '../../models/History';
import { Category } from '../../models/Category';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { State } from '../../models/State';
import { UtilsService } from '../exportedFunctions/utils.service';

declare var $: any;

@Component({
  selector: 'app-home-focus',
  templateUrl: './home-focus.component.html',
  styleUrls: ['./home-focus.component.scss']
})

export class HomeFocusComponent implements OnInit {

  categoriesHidden: Category[];
  categoriesVisible: Category[];
  textSearch: string = "";
  categorySearch: number = null;
  viewMoreCategories: boolean = false;
  histories: History[];
  createHistory: boolean = true;
  tokenForm: FormGroup;
  tokenError: boolean = false;
  stateError: boolean = false;
  routerLinkAddHistory = Constants.ROUTER_LINK_ADD_HISTORY;
  stateEnum: typeof State = State;
  state: number;
  openedMenu: boolean;
  useConditionsUrl: string;
  videoTutorialUrl: string;

  constructor(private utilsService: UtilsService, public _historiesService: HistoriesService, private _route: Router, private _formBuilder: FormBuilder) {
    this.useConditionsUrl = Constants.USE_CONDITIONS_URL;
    this.videoTutorialUrl = Constants.VIDEO_TUTORIAL_URL;
    this.getOpenedMenu();
  }

  ngOnInit() {
    this.getCategories();
    this.getHistories(null, null);
    this.initiateForm();
  }

  getOpenedMenu() {
    this.utilsService.openedMenuChange.subscribe(value => {
      this.openedMenu = value;
      console.log(value)
    });
  }

  getCategories() {
    this._historiesService.getCategories().subscribe((categories: Category[]) => {
      if (categories.length > 0) {

        console.log(categories);

        // copiar el array
        let sorted_categories = [...categories]

        // poner en orden ascendente
        sorted_categories.sort((one, two) => (one.alias > two.alias) ? 1 : -1)


        // coge los primeros 15 elementos y ocultar el resto
        this.categoriesVisible = sorted_categories.slice(0, 15);

        this.categoriesHidden = sorted_categories.slice(15, sorted_categories.length);
      }
    }, err => {
      console.log('Error al obtener las categorias');
    });
  }

  initiateForm() {
    this.tokenForm = this._formBuilder.group({
      token: new FormControl('', [Validators.required])
    })
  }

  get invalidToken() {
    return this.tokenForm.get('token').invalid && this.tokenForm.get('token').touched;
  }

  createNewHistory() {
    localStorage.removeItem(Constants.LOCALSTORAGE_KEY_MAIL);
    $("#homeModalCenter").modal('hide');
    this._route.navigate(['/addHistory']);
  }

  updateHistoryWithToken() {
    if (this.tokenForm.invalid) {
      return Object.values(this.tokenForm.controls).forEach(control => {
        control.markAsTouched();
      })
    } else {
      let token = this.tokenForm.get('token').value
      let route = Constants.ROUTER_LINK_EDIT_HISTORY + "/" + token;
      this._historiesService.getTokenState(token).subscribe(result => {
        this.state = result.state;
        if (result.success && !(result == null || this.state == this.stateEnum.versionada)) {
          if ((this.state == this.stateEnum.borrador) || (this.state == this.stateEnum.publicada)) {
            $("#homeModalCenter").modal('hide');
            this._route.navigate([route]);
          }
          else if (this.state == this.stateEnum.desactivada) {
            this.stateError = true
            this.tokenError = false
            //console.log("Historia no esta disponible")
          }
          else {
            this.stateError = true
            this.tokenError = false
            //console.log("Historia existe, pero no se puede modificar")
          }
        } else {
          this.tokenError = true
          this.stateError = false
          //console.log('Historia no existe')
        }
      })
    }
  }

  updateHistoryHiperLink() {
    this.tokenForm.reset();
    this.tokenError = false;
    this.createHistory = false;
    this.stateError = false;
  }

  getHistories(text, category) {

    if (category == this.categorySearch) {
      this.categorySearch = null;
    } else {
      this.categorySearch = (category != null ? category : this.categorySearch)
    }

    this.textSearch = (text != null ? text : this.textSearch);

    this.textSearch = this.textSearch.toLowerCase()

    this._historiesService.getHistoriesBySearch(this.textSearch, this.categorySearch === null ? null : this.categorySearch.toString()).subscribe(response => {
      if (response.success) {
        this.histories = response.history;
        console.log(this.histories);

      } else {
        console.log("error cargando historias")
      }
    });
  }

  getHistory(event, url: string) {
    event.preventDefault();
    event.stopPropagation();
    if (event.keyCode == 13 || event.type == "click") {
      window.open(Constants.ROUTER_LINK_SERVICES_FOCUS + '/' + Constants.ROUTER_LINK_VIEW_HISTORY + '/' + url, '_blank');
    }
  }

  openHomeFocusModal() {
    this.createHistory = true;
    $("#homeModalCenter").modal('show');

  }

}
