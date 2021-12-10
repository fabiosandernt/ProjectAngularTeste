import { Location } from "@angular/common";

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { ISidebarElement } from "src/app/core/interfaces/ISidebarElement";


@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"],
})
export class SideBarComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("sidenav", { static: false }) sidenav: ElementRef;
  public state: 1 | 2 = 2;
  public options: ISidebarElement[] = [];
  public menuOptions: ISidebarElement;

  constructor(private location: Location, private router: Router) {
    this.options.push({
      module: "veiculos",
      icon: "directions_car",
      name: "Veículos",
      options: [
        {
          module: "cadastro",
          icon: "add",
          name: "Cadastro",
        },
        {
          module: "",
          icon: "list",
          name: "Listar Veículos",
        }
      ]
    });

    this.options.push({
      module: "cliente",
      icon: "people",
      name: "Cliente",

      options: [
        {
          module: "new",
          icon: "add",
          name: "Cadastro",
        },
        {
          module: "",
          icon: "list",
          name: "Listar Todos",
        }
      ]
    });

    this.options.push({
      module: "administrativo", 
      icon: "work",
      name: "Administrativo",
      options: [
        {
          module: "new",
          icon: "add",
          name: "Cadastro",
        },
        {
          module: "",
          icon: "list",
          name: "Listar Todos",
        }
      ]

    });
    this.options.push({
      module: "financeiro", 
      icon: "monetization_on",
      name: "Financeiro",
      options: [
        {
          module: "new",
          icon: "add",
          name: "Extrato",
        },
        {
          module: "new",
          icon: "add",
          name: "Consultar",
        },
        {
          module: "conciliacaoBancaria",
          icon: "add",
          name: "Concilicação Bancária",
        },
        {
          module: "",
          icon: "list",
          name: "Listar Todos",
        }
      ]
    });
    this.options.push({
      module: "consignante", // falta criar o molulo
      icon: "people",
      name: "Consignante",
      options: [
        {
          module: "new",
          icon: "add",
          name: "Cadastro",
        },
        {
          module: "",
          icon: "list",
          name: "Listar Todos",
        }
      ]
    });
    this.options.push({
      module: "dashboard", // falta criar o molulo
      icon: "dashboard",
      name: "Dashboard",
      options: [
        {
          module: "new",
          icon: "attach_money",
          name: "Financeiro",
        },
        {
          module: "",
          icon: "list",
          name: "Listar Todos",
        }
      ]

    });

  }

  public navigate(route: string) {

    if (route != this.location.path())
      this.router.navigate([route])
  }

  ngOnDestroy(): void {
    let main = document.getElementsByTagName("main")[0];
    main.style.marginLeft = "0px";
  }
  ngAfterViewInit(): void {
    this._setSidenavSize(this.state);
  }

  ngOnInit(): void { }

  changeStatus() {
    if (this.state === 1) this.state = 2;
    else this.state = 1;

    this._setSidenavSize(this.state);
  }

  getRoute(): string {
    let route = this.location.path().split("/");
    return route[1];
  }

  public setMenuOptions(options: ISidebarElement): void {
    console.log(options)
    this.menuOptions = options;
  }

  private _setSidenavSize(size: 1 | 2) {
    let main = document.getElementsByTagName("main")[0];
    let sidenav = this.sidenav.nativeElement as HTMLElement;

    if (size === 1) {
      main.style.marginLeft = "300px";
      sidenav.style.width = "250px";
    } else {
      main.style.marginLeft = "90px";
      sidenav.style.width = "60px";
    }
  }
}
