"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[664],{664:(p,l,e)=>{e.r(l),e.d(l,{AuthModule:()=>O});var m=e(6895),r=e(3060),o=e(4006),n=e(4650),s=e(4859),d=e(3336),a=e(9549),C=e(4144);const f=[{path:"",component:(()=>{class t{constructor(i,c){this.fb=i,this.router=c,this.hide=!0,this.password="body2006",this.name="abdo"}ngOnInit(){this.createForm()}login(){this.name==this.loginForm.value.name&&this.password==this.loginForm.value.password?this.router.navigate(["/"]):alert(!1)}createForm(){this.loginForm=this.fb.group({name:["",[o.kI.required]],password:["",[o.kI.required,o.kI.minLength(3),o.kI.maxLength(20)]]})}}return t.\u0275fac=function(i){return new(i||t)(n.Y36(o.qu),n.Y36(r.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:28,vars:5,consts:[[1,"login","session_bg"],[1,"container"],[1,"frame"],[1,"con"],[1,"image","session_bg"],[1,"logo"],[1,"form",3,"formGroup"],[1,"main_title"],[1,"group_fields"],["appearance","fill"],["matInput","","formControlName","name","required",""],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],[1,"main_btn",3,"click"]],template:function(i,c){1&i&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),n._uU(6,"Abdalrhman"),n.qZA()(),n.TgZ(7,"form",6)(8,"div",7),n._uU(9,"Login"),n.qZA(),n.TgZ(10,"div",8)(11,"mat-form-field",9)(12,"mat-label"),n._uU(13,"Your Name"),n.qZA(),n._UZ(14,"input",10),n.TgZ(15,"mat-error"),n._uU(16,"required"),n.qZA()(),n.TgZ(17,"mat-form-field",9)(18,"mat-label"),n._uU(19,"Your Password"),n.qZA(),n._UZ(20,"input",11),n.TgZ(21,"mat-error"),n._uU(22,"required"),n.qZA(),n.TgZ(23,"button",12),n.NdJ("click",function(){return c.hide=!c.hide}),n.TgZ(24,"mat-icon"),n._uU(25),n.qZA()()()(),n.TgZ(26,"a",13),n.NdJ("click",function(){return c.login()}),n._uU(27,"Login"),n.qZA()()()()()()),2&i&&(n.xp6(7),n.Q6J("formGroup",c.loginForm),n.xp6(13),n.Q6J("type",c.hide?"password":"text"),n.xp6(3),n.uIk("aria-label","Hide password")("aria-pressed",c.hide),n.xp6(2),n.Oqu(c.hide?"visibility_off":"visibility"))},dependencies:[o._Y,o.Fj,o.JJ,o.JL,o.Q7,o.sg,o.u,s.lW,d.Hw,a.TO,a.KE,a.hX,a.R9,C.Nt],styles:['.login[_ngcontent-%COMP%]{height:100%;width:100%;background-image:url(bg_experience.7238abb5670b75c2.png);display:flex;align-items:center;justify-content:center}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;max-height:600px;height:calc(100% - 128px)}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;position:relative;height:100%;width:100%}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]:before, .login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]:after{content:"";position:absolute;height:180px;width:180px;background-color:var(--main-color);box-shadow:var(--main-shadow);z-index:2}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]:before{top:0;left:0}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]:after{bottom:0;right:0}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]{width:calc(100% - 64px);height:calc(100% - 64px);display:grid;grid-template-columns:1fr 1fr;background-color:var(--bg-color);box-shadow:var(--main-shadow);z-index:3}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{background-image:url(bg.ab97ba2c08995f11.png);display:flex;align-items:center;justify-content:center}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{color:var(--bg-color)}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{background-color:var(--bg-color);padding:32px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .group_fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:24px;width:100%}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .group_fields[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .main_btn[_ngcontent-%COMP%]{width:100%;font-size:24px;text-align:center}@media (max-width: 767px){.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:calc(100% - 64px)}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]{grid-template-columns:1fr}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{display:none}}@media (max-width: 500px){.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:calc(100% - 32px)}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]{width:calc(100% - 48px);height:calc(100% - 48px);grid-template-columns:1fr}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{display:none}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%]   .con[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{padding:24px}}']}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(f),r.Bz]}),t})();var M=e(7138);let O=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.ez,u,o.u5,o.UX,M.q]}),t})()}}]);