"use strict";(self.webpackChunkAngular_Base=self.webpackChunkAngular_Base||[]).push([[287],{9287:(T,m,s)=>{s.r(m),s.d(m,{LoginModule:()=>L});var l=s(6814),p=s(6208),a=s(9284),u=s(5836),d=s(553),n=s(4946),f=s(2333),v=s(3076),C=s(9862),r=s(95);function x(e,g){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),n._UZ(5,"img",5),n.qZA(),n.TgZ(6,"div",6)(7,"div",7)(8,"input",8),n.NdJ("ngModelChange",function(i){n.CHM(t);const c=n.oxw();return n.KtG(c.username=i)}),n.qZA(),n.TgZ(9,"span",9),n._UZ(10,"ion-icon",10),n.qZA()(),n.TgZ(11,"div",11)(12,"input",12),n.NdJ("ngModelChange",function(i){n.CHM(t);const c=n.oxw();return n.KtG(c.password=i)}),n.qZA(),n.TgZ(13,"span",9),n._UZ(14,"ion-icon",13),n.qZA()(),n.TgZ(15,"button",14),n.NdJ("click",function(){n.CHM(t);const i=n.oxw();return n.KtG(i.handleClickLogin())}),n._uU(16," Login "),n.qZA()()()()(),n.BQk()}if(2&e){const t=n.oxw();n.xp6(8),n.Q6J("ngModel",t.username),n.xp6(4),n.Q6J("ngModel",t.password)}}function M(e,g){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"div",16),n.NdJ("click",function(){const c=n.CHM(t).$implicit,h=n.oxw(2);return n.KtG(h.handleClickSelect(c))}),n.TgZ(2,"span"),n._uU(3),n.qZA()(),n.BQk()}if(2&e){const t=g.$implicit;n.xp6(3),n.Oqu(t.fantasy_name)}}function Z(e,g){if(1&e&&(n.ynx(0),n.TgZ(1,"div",1)(2,"div",2),n.YNc(3,M,4,1,"ng-container",15),n.qZA()(),n.BQk()),2&e){const t=n.oxw();n.xp6(3),n.Q6J("ngForOf",t.companies)}}const _=[{path:"",component:(()=>{class e{clientService;authService;userService;router;http;selected;items;texto="";username="";password="";user;companies=[];constructor(t,o,i,c,h){this.clientService=t,this.authService=o,this.userService=i,this.router=c,this.http=h}ngOnInit(){d.N.production||(this.username="rogers.abe",this.password="123"),this.clientService.selectMany().subscribe(t=>{this.items=t})}handleClickLogin(){this.authService.login(this.username,this.password).subscribe(t=>{this.user=t,1==t.companies.length?this.handleClickSelect(t.companies[0]):this.companies=t.companies})}handleClickSelect(t){this.authService.setLogged(this.user,t)}teste(){this.http.get(`http://localhost:5001/texto/${this.texto}`).subscribe(t=>{console.log(t),alert(t.message)})}fechar(){this.http.get("http://localhost:5001/fechar").subscribe(t=>{console.log(t),alert(t.message)})}abrir(){this.http.get("http://localhost:5001/abrir").subscribe(t=>{console.log(t),alert(t.message)})}static \u0275fac=function(o){return new(o||e)(n.Y36(u.y),n.Y36(f.e),n.Y36(v.K),n.Y36(a.F0),n.Y36(C.eN))};static \u0275cmp=n.Xpm({type:e,selectors:[["rca-login"]],features:[n._Bn([u.y])],decls:2,vars:2,consts:[[4,"ngIf"],[1,"col-3"],[1,"box","p-5"],[1,"row"],[1,"flex","col-12","mt-6","mb-6","align-center","justify-center"],["src","assets/logo.png"],[1,"col-12"],[1,"col-12","mt-5","control","has-icons-left","has-icons-right"],["placeholder","Username",1,"input","is-large",3,"ngModel","ngModelChange"],[1,"icon","is-medium","is-left","mt-2"],["name","person-outline"],[1,"col-12","mt-4","control","has-icons-left","has-icons-right"],["placeholder","Password",1,"input","is-large",3,"ngModel","ngModelChange"],["name","lock-closed-outline"],[1,"col-12","mt-4","mb-4","button","is-info",3,"click"],[4,"ngFor","ngForOf"],[1,"col-12","p-2","m-2","pointer",2,"border","1px solid #ccc",3,"click"]],template:function(o,i){1&o&&(n.YNc(0,x,17,2,"ng-container",0),n.YNc(1,Z,4,1,"ng-container",0)),2&o&&(n.Q6J("ngIf",!(null!=i.companies&&i.companies.length)),n.xp6(1),n.Q6J("ngIf",null==i.companies?null:i.companies.length))},dependencies:[l.sg,l.O5,r.Fj,r.JJ,r.On],styles:["[_nghost-%COMP%]{display:flex;width:100vw;height:100vh;align-items:center;justify-content:center}[_nghost-%COMP%]   img[_ngcontent-%COMP%]{height:4.5rem}"]})}return e})(),pathMatch:"full"}];let y=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=n.oAB({type:e});static \u0275inj=n.cJS({imports:[a.Bz.forChild(_),a.Bz]})}return e})(),L=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=n.oAB({type:e});static \u0275inj=n.cJS({imports:[l.ez,p.m,y]})}return e})()}}]);