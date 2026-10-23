/* Gregory's tools · 公共脚本：多语言 / 白夜模式 / 烟花 / 咖啡动画 */
(function(){
"use strict";

/* ================= i18n 字典 ================= */
var I18N={
'zh-CN':{
  title_home:"Gregory's tools", title_tools:"工具库 · Gregory",
  menu_tools:"工具库",
  kicker:"内部工具库 · 持续补充",
  hero_h1:"把干过的活，<br>做成<em>别人也能跑</em>的工具。",
  hero_sub:"这里放的是我从仓配配送现场做出来、能直接交给别人用的东西——模板、表格、流程和检查清单，每项都写清楚解决什么问题、怎么用、需要什么前提。",
  btn_enter:"进入工具库 →",
  sign:"目前为止还觉得这个世界挺有意思，还在寻找跟它更好相处的方式",
  foot_use:"Gregory's tools · 内部使用 · 工具持续补充",
  foot_updated:"最后更新",
  coffee_btn:"请我喝杯咖啡", coffee_done:"谢谢款待！",
  back_home:"返回主页",
  tools_h1:"工具库",
  tools_sub:"从仓配配送现场做出来、能直接交给别人用的东西——每项都写清楚解决什么问题、怎么用、需要什么前提。",
  s1:"数据与看板", s1d:"把散在各系统的数据，变成能直接看的结论",
  s2:"制度与规范", s2d:"把口头约定，固化成谁都能照做的标准",
  s3:"流程与通知", s3d:"重复发生的事，不再每次从零写一遍",
  s4:"交接与沉淀", s4d:"人走了，东西还在",
  card_pending:"待接入", card_name:"工具名称待填",
  card_lead:"一句话讲清它替谁省下了什么。", card_q:"解决什么问题",
  count_unit:"项",
  foot_internal_a:"内部使用 · ", foot_internal_b:"新同事接手可直接按此上手",
  foot_maintain:"由 Gregory 维护 · 内容持续补充",
  theme_light:"浅色", theme_dark:"深色", theme_auto:"跟随系统",
  lang_zhcn:"简体中文", lang_zhhk:"繁體中文", lang_en:"English",
  lang_short:"简"
},
'zh-HK':{
  title_home:"Gregory's tools", title_tools:"工具庫 · Gregory",
  menu_tools:"工具庫",
  kicker:"內部工具庫 · 持續補充",
  hero_h1:"把幹過的活，<br>做成<em>別人也能跑</em>的工具。",
  hero_sub:"這裡放的是我從倉配配送現場做出來、能直接交給別人用的東西——模板、表格、流程和檢查清單，每項都寫清楚解決什麼問題、怎麼用、需要什麼前提。",
  btn_enter:"進入工具庫 →",
  sign:"目前為止還覺得這個世界挺有意思，還在尋找跟它更好相處的方式",
  foot_use:"Gregory's tools · 內部使用 · 工具持續補充",
  foot_updated:"最後更新",
  coffee_btn:"請我喝杯咖啡", coffee_done:"多謝款待！",
  back_home:"返回主頁",
  tools_h1:"工具庫",
  tools_sub:"從倉配配送現場做出來、能直接交給別人用的東西——每項都寫清楚解決什麼問題、怎麼用、需要什麼前提。",
  s1:"數據與看板", s1d:"把散在各系統的數據，變成能直接看的結論",
  s2:"制度與規範", s2d:"把口頭約定，固化成誰都能照做的標準",
  s3:"流程與通知", s3d:"重複發生的事，不再每次從零寫一遍",
  s4:"交接與沉澱", s4d:"人走了，東西還在",
  card_pending:"待接入", card_name:"工具名稱待填",
  card_lead:"一句話講清它替誰省下了什麼。", card_q:"解決什麼問題",
  count_unit:"項",
  foot_internal_a:"內部使用 · ", foot_internal_b:"新同事接手可直接按此上手",
  foot_maintain:"由 Gregory 維護 · 內容持續補充",
  theme_light:"淺色", theme_dark:"深色", theme_auto:"跟隨系統",
  lang_zhcn:"简体中文", lang_zhhk:"繁體中文", lang_en:"English",
  lang_short:"繁"
},
'en':{
  title_home:"Gregory's tools", title_tools:"Tool library · Gregory",
  menu_tools:"Tool library",
  kicker:"Internal tool library · growing",
  hero_h1:"Turn real work into <em>tools anyone can run</em>.",
  hero_sub:"Everything here came out of real warehouse &amp; delivery work and can be handed over as-is — templates, sheets, flows and checklists, each stating the problem it solves, how to use it, and what it requires.",
  btn_enter:"Open the tool library →",
  sign:"So far this world still feels pretty interesting — I'm still finding a better way to get along with it.",
  foot_use:"Gregory's tools · Internal use · continuously growing",
  foot_updated:"Last updated",
  coffee_btn:"Buy me a coffee", coffee_done:"Thanks for the coffee!",
  back_home:"Back to home",
  tools_h1:"Tool library",
  tools_sub:"Built on the warehouse floor, ready to hand over — each item states the problem it solves, how to use it, and what it requires.",
  s1:"Data & Dashboards", s1d:"Turn scattered data into conclusions you can read at a glance",
  s2:"Standards & Rules", s2d:"Turn verbal agreements into standards anyone can follow",
  s3:"Flows & Notices", s3d:"Stop rewriting recurring work from scratch",
  s4:"Handover & Legacy", s4d:"People leave, the work stays",
  card_pending:"Pending", card_name:"Tool name TBD",
  card_lead:"One line on who it saves what for.", card_q:"Problem it solves",
  count_unit:" items",
  foot_internal_a:"Internal use · ", foot_internal_b:"new teammates can start right here",
  foot_maintain:"Maintained by Gregory · continuously updated",
  theme_light:"Light", theme_dark:"Dark", theme_auto:"System",
  lang_zhcn:"简体中文", lang_zhhk:"繁體中文", lang_en:"English",
  lang_short:"EN"
}};
var LOCALE={'zh-CN':'zh-CN','zh-HK':'zh-Hant-HK','en':'en-GB'};
var lang=localStorage.getItem('gt_lang')||'zh-CN';
if(!I18N[lang])lang='zh-CN';
function t(k){var L=I18N[lang]||I18N['zh-CN'];return L[k]!==undefined?L[k]:I18N['zh-CN'][k]||'';}

/* ================= UI 图标 ================= */
var ICON={
  globe:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"/></svg>',
  sun:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  auto:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none"/></svg>',
  cup:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 9h12v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9z"/><path d="M16 10h2a3 3 0 0 1 0 6h-2"/><path d="M8 5V3M12 5V3"/></svg>'
};

/* ================= 注入控件样式 ================= */
var css=document.createElement('style');
css.textContent=[
".ctrls{display:flex;gap:6px;align-items:center;position:relative;z-index:60;}",
".ctrl{position:relative;}",
".ctrl-btn{width:34px;height:34px;border-radius:10px;border:1px solid var(--line);background:var(--card);color:var(--ink-2);display:inline-flex;align-items:center;justify-content:center;gap:4px;cursor:pointer;font-size:12.5px;transition:border-color .18s ease,color .18s ease;}",
".ctrl-btn:hover{border-color:var(--brand);color:var(--brand-dark);}",
".ctrl-menu{position:absolute;top:calc(100% + 8px);right:0;min-width:150px;background:var(--card);border:1px solid var(--line);border-radius:12px;box-shadow:0 14px 34px rgba(0,0,0,.14);padding:6px;display:none;}",
".ctrl.open .ctrl-menu{display:block;}",
".ctrl-menu button{display:flex;align-items:center;gap:8px;width:100%;text-align:left;background:none;border:0;padding:8px 10px;border-radius:8px;font-size:13.5px;color:var(--ink-2);cursor:pointer;font-family:inherit;}",
".ctrl-menu button:hover{background:var(--brand-soft);color:var(--brand-dark);}",
".ctrl-menu button.on{color:var(--brand-dark);background:var(--brand-soft);font-weight:600;}",
".coffee-btn{display:inline-flex;align-items:center;gap:8px;background:var(--card);border:1px solid var(--line);color:var(--ink-2);border-radius:999px;padding:9px 18px;font-size:13.5px;cursor:pointer;font-family:inherit;transition:border-color .2s ease,color .2s ease,transform .2s ease,box-shadow .2s ease;}",
".coffee-btn:hover{border-color:var(--brand);color:var(--brand-dark);transform:translateY(-1px);box-shadow:0 8px 20px rgba(217,72,15,.12);}",
".coffee-overlay{position:fixed;inset:0;z-index:200;background:rgba(15,17,22,.44);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .25s ease;}",
".coffee-overlay.show{opacity:1;}",
".coffee-scene{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:34px 44px 26px;text-align:center;box-shadow:0 30px 80px rgba(0,0,0,.3);transform:scale(.9);transition:transform .3s cubic-bezier(.34,1.56,.64,1);}",
".coffee-overlay.show .coffee-scene{transform:scale(1);}",
".coffee-scene svg{display:block;}",
".coffee-hint{margin-top:14px;font-size:13px;color:var(--ink-3);}",
".coffee-done{margin-top:10px;font-size:16px;font-weight:700;color:var(--brand-dark);opacity:0;}",
".coffee-overlay.play .coffee-done{animation:cfDone .5s ease 2.4s forwards;}",
"@keyframes cfDone{to{opacity:1;}}",
"@keyframes cfStream{from{transform:scaleY(0);}to{transform:scaleY(1);}}",
"@keyframes cfFill{from{transform:scaleY(0);}to{transform:scaleY(1);}}",
"@keyframes cfPot{0%{transform:translateY(-14px);opacity:0;}100%{transform:translateY(0);opacity:1;}}",
"@keyframes cfSteam{0%{opacity:0;transform:translateY(6px);}30%{opacity:.85;}100%{opacity:0;transform:translateY(-14px);}}",
".cf-pot{animation:cfPot .5s ease both;}",
".cf-stream{transform-box:fill-box;transform-origin:top;transform:scaleY(0);}",
".cf-fill{transform-box:fill-box;transform-origin:bottom;transform:scaleY(0);}",
".coffee-overlay.play .cf-stream{animation:cfStream .7s ease-in .45s forwards;}",
".coffee-overlay.play .cf-fill{animation:cfFill 1.5s ease-in-out .9s forwards;}",
".cf-steam{opacity:0;stroke:var(--ink-3);stroke-width:3;fill:none;stroke-linecap:round;}",
".coffee-overlay.play .cf-steam{animation:cfSteam 1.8s ease-out 2.3s infinite;}",
".coffee-overlay.play .cf-steam.s2{animation-delay:2.7s;}",
".coffee-overlay.play .cf-steam.s3{animation-delay:3.1s;}"
].join("");
document.head.appendChild(css);

/* ================= 注入语言/主题控件 ================= */
var slot=document.querySelector('.ctrls');
if(slot){
  slot.innerHTML=
  '<div class="ctrl" id="langCtrl">'+
    '<button class="ctrl-btn" type="button" aria-label="language">'+ICON.globe+'<span id="langLabel"></span></button>'+
    '<div class="ctrl-menu">'+
      '<button type="button" data-lang="zh-CN"></button>'+
      '<button type="button" data-lang="zh-HK"></button>'+
      '<button type="button" data-lang="en"></button>'+
    '</div>'+
  '</div>'+
  '<div class="ctrl" id="themeCtrl">'+
    '<button class="ctrl-btn" type="button" aria-label="theme"><span id="themeIcon"></span></button>'+
    '<div class="ctrl-menu">'+
      '<button type="button" data-theme-opt="light">'+ICON.sun+'<span data-i18n="theme_light"></span></button>'+
      '<button type="button" data-theme-opt="dark">'+ICON.moon+'<span data-i18n="theme_dark"></span></button>'+
      '<button type="button" data-theme-opt="auto">'+ICON.auto+'<span data-i18n="theme_auto"></span></button>'+
    '</div>'+
  '</div>';
}
function bindCtrl(id){
  var c=document.getElementById(id);if(!c)return;
  c.querySelector('.ctrl-btn').addEventListener('click',function(e){
    e.stopPropagation();
    var was=c.classList.contains('open');
    document.querySelectorAll('.ctrl.open').forEach(function(x){x.classList.remove('open');});
    if(!was)c.classList.add('open');
  });
}
bindCtrl('langCtrl');bindCtrl('themeCtrl');
document.addEventListener('click',function(){
  document.querySelectorAll('.ctrl.open').forEach(function(x){x.classList.remove('open');});
});

/* ================= 多语言应用 ================= */
function applyLang(){
  document.documentElement.lang=lang==='zh-HK'?'zh-Hant-HK':lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    el.innerHTML=t(el.getAttribute('data-i18n'));
  });
  var dstr=new Intl.DateTimeFormat(LOCALE[lang],{year:'numeric',month:'long',day:'numeric'}).format(new Date());
  document.querySelectorAll('[data-i18n-date]').forEach(function(el){
    el.textContent=t('foot_updated')+' · '+dstr;
  });
  document.querySelectorAll('.section').forEach(function(sec){
    var n=sec.querySelectorAll('.card').length;
    var c=sec.querySelector('.sec-count');
    if(c)c.textContent=new Intl.NumberFormat(LOCALE[lang]).format(n)+t('count_unit');
  });
  var LKEY={'zh-CN':'lang_zhcn','zh-HK':'lang_zhhk','en':'lang_en'};
  document.querySelectorAll('[data-lang]').forEach(function(b){
    b.innerHTML=(lang===b.getAttribute('data-lang')?'✓ ':'')+t(LKEY[b.getAttribute('data-lang')]);
  });
  var lab=document.getElementById('langLabel');
  if(lab)lab.textContent=t('lang_short');
  localStorage.setItem('gt_lang',lang);
}

/* ================= 白夜模式 ================= */
var mode=localStorage.getItem('gt_theme')||'auto';
var mq=window.matchMedia('(prefers-color-scheme: dark)');
function applyTheme(){
  var dark=mode==='dark'||(mode==='auto'&&mq.matches);
  document.documentElement.dataset.theme=dark?'dark':'light';
  document.documentElement.dataset.themeMode=mode;
  var ic=document.getElementById('themeIcon');
  if(ic)ic.innerHTML=mode==='dark'?ICON.moon:(mode==='light'?ICON.sun:ICON.auto);
  document.querySelectorAll('[data-theme-opt]').forEach(function(b){
    b.classList.toggle('on',b.getAttribute('data-theme-opt')===mode);
  });
  localStorage.setItem('gt_theme',mode);
}
if(mq.addEventListener)mq.addEventListener('change',function(){if(mode==='auto')applyTheme();});
document.addEventListener('click',function(e){
  var lb=e.target.closest('[data-lang]');
  if(lb){lang=lb.getAttribute('data-lang');applyLang();return;}
  var tb=e.target.closest('[data-theme-opt]');
  if(tb){mode=tb.getAttribute('data-theme-opt');applyTheme();}
});

/* ================= 烟花 ================= */
var cv=document.getElementById('fx');
if(cv){
  var ctx=cv.getContext('2d'),P=[],raf=null;
  var COLORS=['#FF6B35','#D9480F','#FFB088','#FFD9C4','#FFEDE2','#FFFFFF'];
  function rs(){
    var d=window.devicePixelRatio||1;
    cv.width=innerWidth*d;cv.height=innerHeight*d;
    cv.style.width=innerWidth+'px';cv.style.height=innerHeight+'px';
    ctx.setTransform(d,0,0,d,0,0);
  }
  rs();addEventListener('resize',rs);
  function loop(){
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(var i=P.length-1;i>=0;i--){
      var p=P[i];
      p.x+=p.vx;p.y+=p.vy;p.vy+=0.06;p.vx*=0.985;p.vy*=0.985;p.life-=p.dec;
      if(p.life<=0){P.splice(i,1);continue;}
      ctx.globalAlpha=Math.max(p.life,0);
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,6.29);ctx.fillStyle=p.c;ctx.fill();
    }
    ctx.globalAlpha=1;
    raf=P.length?requestAnimationFrame(loop):null;
    if(!P.length)ctx.clearRect(0,0,innerWidth,innerHeight);
  }
  addEventListener('click',function(e){
    for(var i=0;i<28;i++){
      var a=Math.random()*6.283,s=2+Math.random()*4.5;
      P.push({x:e.clientX,y:e.clientY,vx:Math.cos(a)*s,vy:Math.sin(a)*s-1.2,
        life:1,dec:0.014+Math.random()*0.02,r:1.5+Math.random()*2.5,
        c:COLORS[(Math.random()*COLORS.length)|0]});
    }
    if(!raf)raf=requestAnimationFrame(loop);
  });
}

/* ================= 咖啡动画 ================= */
var ov=document.createElement('div');
ov.className='coffee-overlay';ov.hidden=true;
ov.innerHTML=
'<div class="coffee-scene">'+
  '<svg width="240" height="210" viewBox="0 0 240 210">'+
    '<g class="cf-pot" transform="rotate(-125 87 57)">'+
      '<rect x="58" y="24" width="58" height="12" rx="6" fill="#565D68"/>'+
      '<rect x="58" y="32" width="58" height="50" rx="14" fill="#3A3F47"/>'+
      '<rect x="110" y="44" width="32" height="14" rx="7" fill="#3A3F47"/>'+
    '</g>'+
    '<rect class="cf-stream" x="116.5" y="88" width="7" height="62" rx="3.5" fill="#7A4A21"/>'+
    '<path d="M154 158c14 0 14 26 0 26" fill="none" stroke="var(--line)" stroke-width="6"/>'+
    '<rect x="86" y="148" width="68" height="48" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>'+
    '<rect class="cf-fill" x="93" y="153" width="54" height="38" rx="7" fill="#8B5A2B"/>'+
    '<path class="cf-steam" d="M104 132q6 -9 0 -18q-6 -9 0 -18"/>'+
    '<path class="cf-steam s2" d="M120 134q6 -9 0 -18q-6 -9 0 -18"/>'+
    '<path class="cf-steam s3" d="M136 132q6 -9 0 -18q-6 -9 0 -18"/>'+
    '<rect x="74" y="197" width="92" height="5" rx="2.5" fill="var(--line)"/>'+
  '</svg>'+
  '<div class="coffee-done" data-i18n="coffee_done"></div>'+
  '<div class="coffee-hint" data-i18n="coffee_btn"></div>'+
'</div>';
document.body.appendChild(ov);
document.querySelectorAll('[data-coffee]').forEach(function(btn){
  btn.insertAdjacentHTML('afterbegin',ICON.cup);
  btn.addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    ov.hidden=false;
    requestAnimationFrame(function(){requestAnimationFrame(function(){ov.classList.add('show','play');});});
  });
});
ov.addEventListener('click',function(){
  ov.classList.remove('show','play');
  setTimeout(function(){ov.hidden=true;},250);
});

/* ================= 启动 ================= */
applyTheme();
applyLang();
})();
