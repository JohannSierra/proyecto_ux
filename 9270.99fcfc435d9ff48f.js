"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9270],{6889:(W,y,d)=>{d.r(y),d.d(y,{ReservasPageModule:()=>X});var b=d(177),M=d(4341),c=d(4742),P=d(70),m=d(467);class f{constructor(a=0,o="Network Error"){this.status=a,this.text=o}}const l={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if(!(typeof localStorage>"u"))return{get:r=>Promise.resolve(localStorage.getItem(r)),set:(r,a)=>Promise.resolve(localStorage.setItem(r,a)),remove:r=>Promise.resolve(localStorage.removeItem(r))}})()},R=r=>r?"string"==typeof r?{publicKey:r}:"[object Object]"===r.toString()?r:{}:{},k=function(){var r=(0,m.A)(function*(a,o,t={}){const n=yield fetch(l.origin+a,{method:"POST",headers:t,body:o}),s=yield n.text(),i=new f(n.status,s);if(n.ok)return i;throw i});return function(o,t){return r.apply(this,arguments)}}(),E=(r,a,o)=>{if(!r||"string"!=typeof r)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!a||"string"!=typeof a)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||"string"!=typeof o)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},F=r=>r.webdriver||!r.languages||0===r.languages.length,j=()=>new f(451,"Unavailable For Headless Browser"),I=(r,a)=>{if((r=>{var a;return!(null!==(a=r.list)&&void 0!==a&&a.length&&r.watchVariable)})(r))return!1;((r,a)=>{if(!Array.isArray(r))throw"The BlockList list has to be an array";if("string"!=typeof a)throw"The BlockList watchVariable has to be a string"})(r.list,r.watchVariable);const o=((r,a)=>r instanceof FormData?r.get(a):r[a])(a,r.watchVariable);return"string"==typeof o&&r.list.includes(o)},x=()=>new f(403,"Forbidden"),N=function(){var r=(0,m.A)(function*(a,o,t){const n=Number((yield t.get(a))||0);return o-Date.now()+n});return function(o,t,n){return r.apply(this,arguments)}}(),T=function(){var r=(0,m.A)(function*(a,o,t){if(!o.throttle||!t)return!1;((r,a)=>{if("number"!=typeof r||r<0)throw"The LimitRate throttle has to be a positive number";if(a&&"string"!=typeof a)throw"The LimitRate ID has to be a non-empty string"})(o.throttle,o.id);const n=o.id||a;return(yield N(n,o.throttle,t))>0||(yield t.set(n,Date.now().toString()),!1)});return function(o,t,n){return r.apply(this,arguments)}}(),D=()=>new f(429,"Too Many Requests"),C={init:(r,a="https://api.emailjs.com")=>{if(!r)return;const o=R(r);l.publicKey=o.publicKey,l.blockHeadless=o.blockHeadless,l.storageProvider=o.storageProvider,l.blockList=o.blockList,l.limitRate=o.limitRate,l.origin=o.origin||a},send:function(){var r=(0,m.A)(function*(a,o,t,n){const s=R(n),i=s.publicKey||l.publicKey,p=s.storageProvider||l.storageProvider,u={...l.blockList,...s.blockList},v={...l.limitRate,...s.limitRate};return(s.blockHeadless||l.blockHeadless)&&F(navigator)?Promise.reject(j()):(E(i,a,o),(r=>{if(r&&"[object Object]"!==r.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"})(t),t&&I(u,t)?Promise.reject(x()):(yield T(location.pathname,v,p))?Promise.reject(D()):k("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:i,service_id:a,template_id:o,template_params:t}),{"Content-type":"application/json"}))});return function(o,t,n,s){return r.apply(this,arguments)}}(),sendForm:function(){var r=(0,m.A)(function*(a,o,t,n){const s=R(n),i=s.publicKey||l.publicKey,p=l.storageProvider||s.storageProvider,u={...l.blockList,...s.blockList},v={...l.limitRate,...s.limitRate};if((s.blockHeadless||l.blockHeadless)&&F(navigator))return Promise.reject(j());const _=(r=>"string"==typeof r?document.querySelector(r):r)(t);E(i,a,o),(r=>{if(!r||"FORM"!==r.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"})(_);const h=new FormData(_);return I(u,h)?Promise.reject(x()):(yield T(location.pathname,v,p))?Promise.reject(D()):(h.append("lib_version","4.4.1"),h.append("service_id",a),h.append("template_id",o),h.append("user_id",i),k("/api/v1.0/email/send-form",h))});return function(o,t,n,s){return r.apply(this,arguments)}}(),EmailJSResponseStatus:f};var e=d(3953);function Y(r,a){if(1&r&&(e.j41(0,"p"),e.EFF(1),e.k0s()),2&r){const o=e.XpG();e.R7$(),e.SpI("Mesas disponibles: ",o.mesasDisponibles,"")}}function B(r,a){if(1&r){const o=e.RV6();e.j41(0,"ion-item")(1,"ion-label"),e.EFF(2,"Fecha"),e.k0s(),e.j41(3,"ion-datetime",15),e.mxI("ngModelChange",function(n){e.eBV(o);const s=e.XpG();return e.DH7(s.reserva.fecha,n)||(s.reserva.fecha=n),e.Njj(n)}),e.bIt("ionChange",function(){e.eBV(o);const n=e.XpG();return e.Njj(n.confirmarFecha())}),e.k0s()()}if(2&r){const o=e.XpG();e.R7$(3),e.R50("ngModel",o.reserva.fecha)}}function z(r,a){if(1&r&&(e.j41(0,"p"),e.EFF(1),e.nI1(2,"date"),e.k0s()),2&r){const o=e.XpG();e.R7$(),e.SpI("Fecha seleccionada: ",e.i5U(2,1,o.reserva.fecha,"dd/MM/yyyy"),"")}}function K(r,a){if(1&r&&(e.j41(0,"ion-select-option",16),e.EFF(1),e.k0s()),2&r){const o=a.$implicit;e.Y8G("value",o),e.R7$(),e.JRh(o)}}const U=[{path:"",component:(()=>{var r;class a{constructor(t){this.alertController=t,this.reserva={fecha:"",hora:"",cantidadPersonas:"",nombre:"",telefono:"",email:""},this.mostrarCalendario=!1,this.horasDisponibles=["12:00","12:15","12:30","12:45","13:00","13:15","13:30","13:45","14:00","14:15","14:30","14:45","15:00","15:15","15:30","15:45","16:00","16:15","16:30","16:45","17:00","17:15","17:30","17:45","18:00"],this.mesasDisponibles=5,this.reservasPorHora=new Map,this.EMAIL_SERVICE_ID="service_kbbhgmf",this.EMAIL_TEMPLATE_ID="template_mqauewr",this.EMAIL_TEMPLATE_ADMIN_ID="template_xy8l99i",this.EMAIL_PUBLIC_KEY="zfCOgcEI2W7TxqLyI",this.EMAIL_ADMIN="terronesjohn689@gmail.com",C.init(this.EMAIL_PUBLIC_KEY)}toggleCalendario(){this.mostrarCalendario=!this.mostrarCalendario}confirmarFecha(){console.log("Fecha seleccionada:",this.reserva.fecha),this.toggleCalendario(),this.actualizarMesasDisponibles()}actualizarMesasDisponibles(){if(this.reserva.fecha&&this.reserva.hora){const n=this.reservasPorHora.get(`${this.reserva.fecha} ${this.reserva.hora}`)||0;this.mesasDisponibles=Math.max(0,5-n)}else this.mesasDisponibles=5}enviarCorreoConfirmacion(){var t=this;return(0,m.A)(function*(){if(!t.validarFormulario())return yield t.mostrarAlerta("Por favor, complete todos los campos requeridos.","Error de Validaci\xf3n"),!1;const n=new Date(t.reserva.fecha),s=n.getDate(),i=n.getMonth()+1,g=n.getFullYear(),p={email:t.reserva.email,to_name:t.reserva.nombre,fecha:`${s}/${i}/${g}`,hora:t.reserva.hora,personas:t.reserva.cantidadPersonas,telefono:t.reserva.telefono};try{const u=yield C.send(t.EMAIL_SERVICE_ID,t.EMAIL_TEMPLATE_ID,p);console.log("Email enviado al cliente exitosamente:",u);const v={to_name:"Administrador",email:t.EMAIL_ADMIN,cliente_nombre:t.reserva.nombre,cliente_email:t.reserva.email,cliente_telefono:t.reserva.telefono,fecha:`${s}/${i}/${g}`,hora:t.reserva.hora,personas:t.reserva.cantidadPersonas},_=yield C.send(t.EMAIL_SERVICE_ID,t.EMAIL_TEMPLATE_ADMIN_ID,v);return console.log("Email enviado al administrador exitosamente:",_),t.actualizarReservas(),!0}catch(u){return console.error("Error al enviar el email:",u),!1}})()}actualizarReservas(){const t=`${this.reserva.fecha} ${this.reserva.hora}`,n=this.reservasPorHora.get(t)||0,s=Number(this.reserva.cantidadPersonas);s<=this.mesasDisponibles?(this.reservasPorHora.set(t,n+s),this.mesasDisponibles-=s):this.mostrarAlerta("No hay suficientes mesas disponibles para esa cantidad de personas.","Error de Reserva"),this.actualizarMesasDisponibles()}validarFormulario(){const t=this.validarEmail(this.reserva.email);return""!==this.reserva.fecha&&""!==this.reserva.hora&&""!==this.reserva.cantidadPersonas&&""!==this.reserva.nombre&&t&&""!==this.reserva.telefono}validarEmail(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}reservar(){var t=this;return(0,m.A)(function*(){(yield t.enviarCorreoConfirmacion())?(yield t.mostrarAlerta("Su reservaci\xf3n ha sido confirmada. Se ha enviado un correo electr\xf3nico con los detalles. No olvide llegar 20 minutos antes de su hora de reservaci\xf3n.","Reserva Confirmada"),t.limpiarFormulario()):yield t.mostrarAlerta("Hubo un problema al procesar su reservaci\xf3n. Por favor, intente nuevamente o cont\xe1ctenos directamente.","Error en la Reserva")})()}mostrarAlerta(t,n){var s=this;return(0,m.A)(function*(){yield(yield s.alertController.create({header:n,message:t,buttons:["OK"]})).present()})()}limpiarFormulario(){this.reserva={fecha:"",hora:"",cantidadPersonas:"",nombre:"",telefono:"",email:""},this.mesasDisponibles=5}}return(r=a).\u0275fac=function(t){return new(t||r)(e.rXU(c.hG))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-reservas"]],decls:44,vars:10,consts:[["routerLink","/home",1,"back-button"],["fullscreen",""],[1,"logo"],["src","assets/img/logo.png","alt","Cevichazo"],[1,"reservation-container"],[1,"reservation-form"],[4,"ngIf"],["expand","full",1,"botones",3,"click"],[3,"ngModelChange","ionChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["position","floating"],["type","number",3,"ngModelChange","ngModel"],[3,"ngModelChange","ngModel"],["type","tel",3,"ngModelChange","ngModel"],["type","email",3,"ngModelChange","ngModel"],["display-format","DD/MM/YYYY","cancel-text","Cancelar","done-text","Hecho","presentation","date",3,"ngModelChange","ionChange","ngModel"],[3,"value"]],template:function(t,n){1&t&&(e.j41(0,"ion-header")(1,"ion-button",0)(2,"strong"),e.EFF(3,"Regresar"),e.k0s()()(),e.j41(4,"ion-content",1)(5,"div",2),e.nrm(6,"img",3),e.k0s(),e.j41(7,"div",4)(8,"div",5)(9,"h1")(10,"strong"),e.EFF(11,"Haz una reserva"),e.k0s()(),e.j41(12,"p"),e.EFF(13,"Solicita tu reserva"),e.k0s(),e.DNE(14,Y,2,1,"p",6)(15,B,4,1,"ion-item",6),e.j41(16,"ion-button",7),e.bIt("click",function(){return n.toggleCalendario()}),e.j41(17,"strong"),e.EFF(18),e.k0s()(),e.DNE(19,z,3,4,"p",6),e.j41(20,"ion-item")(21,"ion-label"),e.EFF(22,"Hora"),e.k0s(),e.j41(23,"ion-select",8),e.mxI("ngModelChange",function(i){return e.DH7(n.reserva.hora,i)||(n.reserva.hora=i),i}),e.bIt("ionChange",function(){return n.actualizarMesasDisponibles()}),e.DNE(24,K,2,2,"ion-select-option",9),e.k0s()(),e.j41(25,"ion-item")(26,"ion-label",10),e.EFF(27,"Cantidad de Personas"),e.k0s(),e.j41(28,"ion-input",11),e.mxI("ngModelChange",function(i){return e.DH7(n.reserva.cantidadPersonas,i)||(n.reserva.cantidadPersonas=i),i}),e.k0s()(),e.j41(29,"ion-item")(30,"ion-label",10),e.EFF(31,"Nombre"),e.k0s(),e.j41(32,"ion-input",12),e.mxI("ngModelChange",function(i){return e.DH7(n.reserva.nombre,i)||(n.reserva.nombre=i),i}),e.k0s()(),e.j41(33,"ion-item")(34,"ion-label",10),e.EFF(35,"Tel\xe9fono"),e.k0s(),e.j41(36,"ion-input",13),e.mxI("ngModelChange",function(i){return e.DH7(n.reserva.telefono,i)||(n.reserva.telefono=i),i}),e.k0s()(),e.j41(37,"ion-item")(38,"ion-label",10),e.EFF(39,"Email"),e.k0s(),e.j41(40,"ion-input",14),e.mxI("ngModelChange",function(i){return e.DH7(n.reserva.email,i)||(n.reserva.email=i),i}),e.k0s()(),e.j41(41,"ion-button",7),e.bIt("click",function(){return n.reservar()}),e.j41(42,"strong"),e.EFF(43,"Reservar"),e.k0s()()()()()),2&t&&(e.R7$(14),e.Y8G("ngIf",n.reserva.fecha&&n.reserva.hora),e.R7$(),e.Y8G("ngIf",n.mostrarCalendario),e.R7$(3),e.SpI(" ",n.mostrarCalendario?"Ocultar Calendario":"Seleccionar Fecha",""),e.R7$(),e.Y8G("ngIf",n.reserva.fecha),e.R7$(4),e.R50("ngModel",n.reserva.hora),e.R7$(),e.Y8G("ngForOf",n.horasDisponibles),e.R7$(4),e.R50("ngModel",n.reserva.cantidadPersonas),e.R7$(4),e.R50("ngModel",n.reserva.nombre),e.R7$(4),e.R50("ngModel",n.reserva.telefono),e.R7$(4),e.R50("ngModel",n.reserva.email))},dependencies:[b.Sq,b.bT,M.BC,M.vS,c.Jm,c.W9,c.A9,c.eU,c.$w,c.uz,c.he,c.Nm,c.Ip,c.su,c.Je,c.Gw,c.N7,P.Wk,b.vh],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--background: url(/assets/img/fondo.jpg) no-repeat center center / cover;color:#fff;font-family:Montserrat,sans-serif}.logo[_ngcontent-%COMP%]{position:absolute;top:20px;right:20px}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px}.back-button[_ngcontent-%COMP%]{position:absolute;top:10px;left:10px;z-index:100;--background: rgba(42, 183, 189, .9);--color: white;font-weight:700}.reservation-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;align-items:stretch;background-color:invisible;padding:20px;border-radius:10px;margin:30px auto;max-width:800px;font-family:Montserrat,sans-serif}.location-info[_ngcontent-%COMP%], .reservation-form[_ngcontent-%COMP%]{margin-bottom:20px;background-color:#2ab7bde6;border-radius:8px;padding:15px}.location-info[_ngcontent-%COMP%]{border-bottom:2px solid rgba(255,255,255,.5)}.reservation-form[_ngcontent-%COMP%]{border-top:2px solid rgba(255,255,255,.5);padding:15px}ion-item[_ngcontent-%COMP%]{--background: rgba(0, 0, 0, .3);--color: white;--placeholder-color: #ddd;--highlight-background: #f39b2f;border-radius:8px;margin-bottom:15px}ion-label[_ngcontent-%COMP%]{color:#fff}ion-input[_ngcontent-%COMP%], ion-datetime[_ngcontent-%COMP%]{--background: transparent;--color: white}ion-button[_ngcontent-%COMP%]{--background: #000;color:#fff;border-radius:8px}h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{color:#fff}a[_ngcontent-%COMP%]{color:#fff;text-decoration:underline}a[_ngcontent-%COMP%]:hover{color:gold}.footer[_ngcontent-%COMP%]{text-align:center;padding:20px;background-color:#00000080}@media (min-width: 768px){.reservation-container[_ngcontent-%COMP%]{flex-direction:row;max-width:700px}.location-info[_ngcontent-%COMP%]{flex:1;margin-right:10px}.reservation-form[_ngcontent-%COMP%]{flex:2}}.botones[_ngcontent-%COMP%]{--background:#f39b2f}']}),a})()}];let J=(()=>{var r;class a{}return(r=a).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[P.iI.forChild(U),P.iI]}),a})(),X=(()=>{var r;class a{}return(r=a).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[b.MD,M.YN,c.bv,J]}),a})()}}]);