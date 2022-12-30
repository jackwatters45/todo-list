(()=>{"use strict";var e,t={46:(e,t,d)=>{const n=d.p+"5b27c683764e8d7ce5c1.svg",a=d.p+"e71891a1b597616f9e41.svg",i=d.p+"b2dc7eca707b1dc5c393.svg",r=d.p+"491f480bd6f7a9af4f50.svg",s=d.p+"6a9f43804a4da8ba64c3.svg",c=d.p+"4ec4b8491cfcced31f82.svg",o=d.p+"a2ef9fa5fd3aa6745a45.svg";function l(e){localStorage.setItem("Project Board",JSON.stringify(e))}function p(e,t,d){document.querySelector(`#${e.id}`).remove(),t.removeTodoFromProject(e.id),l(d)}function m(){let e=document.querySelector(".sidebar-positioning");e.classList.add("hidden"),e.innerHTML=""}function u(e,t,d){let n=document.querySelector(".sidebar-positioning");n.classList.remove("hidden");let a=document.createElement("div");a.classList.add("sidebar"),a.id=e.id;let u=document.createElement("div");u.classList.add("close");let h=document.createElement("img");h.classList.add("arrow"),h.src=r,h.alt="Close Button",u.appendChild(h),a.appendChild(u);let v=document.createElement("form");v.classList.add("properties"),v.id="edit-todo";let L=document.createElement("input");L.classList.add("name"),L.value=e.title,L.required=!0,L.type="text",v.appendChild(L);let E=document.createElement("label");E.classList.add("priority");let f=document.createElement("img");f.src=s,f.alt="Priority Icon",E.appendChild(f),E.innerHTML+="Priority",v.appendChild(E);let g=document.createElement("input");g.classList.add("priority"),e.priority&&(g.value=e.priority),g.placeholder="Empty",g.type="text",v.appendChild(g);let y=document.createElement("label");y.classList.add("date");let C=document.createElement("img");C.src=c,C.alt="Date Icon",y.appendChild(C),y.innerHTML+="Date",v.appendChild(y);let b=document.createElement("input");b.classList.add("date"),e.date&&(b.value=e.date),b.placeholder="Empty",b.type="text",v.appendChild(b),a.appendChild(v),n.appendChild(a);let j=document.createElement("label");j.classList.add("is-done");let T=document.createElement("img");T.src=o,T.alt="Checkmark Icon",j.appendChild(T),j.innerHTML+="Done?",v.appendChild(j);let w=document.createElement("div");w.classList.add("is-done");let S=document.createElement("img");S.src=i,S.alt="Empty Checkmark",w.appendChild(S),v.appendChild(w);let k=document.createElement("div");k.classList.add("notes");let P=document.createElement("hr");P.classList.add("note-break"),k.appendChild(P);let x=document.createElement("input");x.classList.add("note-input"),e.notes&&(x.value=e.notes),x.placeholder="Add notes here...",x.type="text",k.appendChild(x),v.appendChild(k),a.appendChild(v),n.appendChild(a),L.focus(),L.click(),w.addEventListener("click",(()=>{p(e,t,d),m()})),u.addEventListener("click",(()=>{m()})),L.addEventListener("change",(()=>{e.setTitle(L.value),l(d)})),g.addEventListener("change",(()=>{e.setPriority(g.value),l(d)})),b.addEventListener("change",(()=>{e.setDate(b.value),l(d)})),k.addEventListener("change",(()=>{e.setNotes(x.value),l(d)}))}class h{constructor(e,t,d=(new Date).toLocaleDateString(),n){this.title=e,this.id=e.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/g,"-"),this.priority=t,this.date=d,this.notes=n,this.isDone=!1}getTitle(){return this.title}getPriority(){return this.priority}getDate(){return this.date}getNotes(){return this.notes}getDone(){return this.isDone}setTitle(e){this.title=e}setPriority(e){this.priority=e}setDate(e){this.date=e}setNotes(e){this.notes=e}completeTask(){this.isDone=!0}}const v=d.p+"ddb836eb1ac4867df537.svg";function L(e,t,d){let n=document.querySelector(`#${t.id}>.cards`),a=document.createElement("div");a.classList.add("card"),a.id=e.id;let r=document.createElement("div");r.classList.add("title"),r.innerHTML=e.title,a.appendChild(r);let s=document.createElement("div");s.classList.add("done");let c=document.createElement("img");c.src=i,c.alt="Check Box",s.appendChild(c),s.innerHTML+="Done",a.appendChild(s),n.appendChild(a),a.addEventListener("click",(()=>{!function(e,t,d){let n=document.querySelector(".sidebar");n?(m(),e.id!==n.id&&u(e,t,d)):u(e,t,d)}(e,t,d)})),s.addEventListener("click",(()=>{p(e,t,d)}))}class E{constructor(e){this.name=e,this.id=e.replace(/[^a-zA-Z0-9 ]/g,"").replace(/\s+/g,"-"),this.todos=[]}getName(){return this.name}getTodos(){return this.todos}changeName(e){this.name=e}addTodo(e){this.todos.push(e)}removeTodoFromProject(e){let t=this.todos.findIndex((t=>t===e));this.todos.splice(t,1)}}function f(e,t){let d=document.querySelector(".sections"),r=document.createElement("div");r.classList.add("section"),r.id=e.id;let s=document.createElement("div");s.classList.add("header");let c=document.createElement("div");c.classList.add("header-title"),c.innerHTML=e.name,s.appendChild(c);let o=document.createElement("div");o.classList.add("delete");let p=document.createElement("img");p.src=n,p.alt="Delete Button",p.classList.add("hidden"),o.appendChild(p),s.appendChild(o),r.appendChild(s);let m=document.createElement("div");m.classList.add("cards"),r.appendChild(m);let u=document.createElement("div");u.classList.add("new");let E=document.createElement("img");E.classList.add("plus"),E.src=a,E.alt="Plus Button",u.appendChild(E),u.innerHTML+="New",r.appendChild(u),d.appendChild(r),r.addEventListener("mouseenter",(()=>{p.classList.remove("hidden")})),r.addEventListener("mouseleave",(()=>{p.classList.add("hidden")})),o.addEventListener("click",(()=>{!function(e,t){document.querySelector(`#${e.id}`).remove(),t.removeProjectFromBoard(e.id)}(e,t)})),u.addEventListener("click",(()=>{!function(e,t){let d=document.querySelector(`#${e.id}>.cards`),n=document.createElement("div");n.classList.add("card");let a=document.createElement("form");a.classList.add("title"),a.id="todo-form";let r=document.createElement("input");r.placeholder="Type a name...",r.type="text",r.required=!0,r.classList.add("input"),a.appendChild(r);let s=document.createElement("input");s.classList.add("submit-card"),s.type="image",s.style.width="16px",s.src=v,s.name="project-name",s.alt="Submit Button",a.appendChild(s),n.appendChild(a);let c=document.createElement("div");c.classList.add("done");let o=document.createElement("img");o.src=i,o.alt="Check Box",c.appendChild(o),c.innerHTML+="Done",n.appendChild(c),d.appendChild(n),r.focus(),r.select(),a.addEventListener("submit",(d=>{let a=document.forms["todo-form"].querySelector(".input").value,i=new h(a);e.addTodo(i),l(t),console.log(t),L(i,e,t),n.remove()}))}(e,t)}))}var g;g=new class{constructor(){this.projects=[]}getProjects(){return this.projects}addProjectToBoard(e){this.projects.push(e)}removeProjectFromBoard(e){let t=this.projects.findIndex((t=>t===e));this.projects.splice(t,1)}},localStorage.getItem("Project Board")&&function(e){JSON.parse(window.localStorage.getItem("Project Board")).projects.forEach((t=>{let d=new E(t.name);e.addProjectToBoard(d),f(d,e),t.todos.forEach((t=>{let n=new h(t.title);t.priority&&n.setPriority(t.priority),t.date&&n.setDate(t.date),t.notes&&n.setNotes(t.notes),d.addTodo(n),L(n,d,e)}))})),console.log(e)}(g),document.querySelector(".add-project-button").addEventListener("click",(()=>{!function(e){let t=document.querySelector(".sections"),d=document.createElement("div");d.classList.add("add-project");let n=document.createElement("form");n.classList.add("project-form"),n.id="project-form";let a=document.createElement("div");a.classList.add("header-input");let i=document.createElement("input");i.placeholder="Name your project...",i.type="text",i.required=!0,i.classList.add("input"),a.appendChild(i),n.appendChild(a);let r=document.createElement("input");r.classList.add("submit"),r.classList.add("hidden"),r.type="image",r.style.width="16px",r.src=v,r.name="project-name",r.alt="Submit Button",n.appendChild(r),d.appendChild(n),t.appendChild(d),i.focus(),i.select(),n.addEventListener("submit",(()=>{let t=document.forms["project-form"].querySelector(".input").value,n=new E(t);e.addProjectToBoard(n),l(e),f(n,e),d.remove()}))}(g)}))}},d={};function n(e){var a=d[e];if(void 0!==a)return a.exports;var i=d[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,d,a,i)=>{if(!d){var r=1/0;for(l=0;l<e.length;l++){for(var[d,a,i]=e[l],s=!0,c=0;c<d.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((e=>n.O[e](d[c])))?d.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(l--,1);var o=a();void 0!==o&&(t=o)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[d,a,i]},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var d=t.getElementsByTagName("script");d.length&&(e=d[d.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e={826:0,532:0};n.O.j=t=>0===e[t];var t=(t,d)=>{var a,i,[r,s,c]=d,o=0;if(r.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var l=c(n)}for(t&&t(d);o<r.length;o++)i=r[o],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},d=self.webpackChunktodo_list=self.webpackChunktodo_list||[];d.forEach(t.bind(null,0)),d.push=t.bind(null,d.push.bind(d))})();var a=n.O(void 0,[532],(()=>n(46)));a=n.O(a)})();