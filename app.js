/* 章節式閱讀器：不依賴外部套件，適用 GitHub Pages 與離線開啟。 */
(() => {
  'use strict';
  const {chapters, lessons, tools, filters, toolNote, contentDate} = window.course;
  const $ = (id) => document.getElementById(id);
  const escape = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const chapterLessons = (id) => lessons.filter(l => l.chapter === id);
  const chapterIndex = (id) => chapters.findIndex(c => c.id === id);
  const number = (n) => String(n).padStart(2, '0');
  const validLesson = (id) => lessons.some(l => l.id === id);
  const storageKey = 'rteam-ai-course-v2';
  const state = {route:'course', visited:new Set(), last:null, quizIndex:0, answers:[null,null,null], mode:'chat', toolPages:{}};
  let previous = null, next = lessons[0].id;
  let menuReturn = null;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && Array.isArray(saved.visited)) state.visited = new Set(saved.visited.filter(validLesson));
    if (saved && validLesson(saved.last)) state.last = saved.last;
  } catch (_) { /* 瀏覽器不允許儲存時，仍可完整閱讀。 */ }
  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify({visited:[...state.visited],last:state.last})); } catch (_) {}
  }
  function updateProgress() {
    $('visitedCount').textContent = `${state.visited.size} / ${lessons.length}`;
    $('visitedProgress').max = lessons.length;
    $('visitedProgress').value = state.visited.size;
  }
  function renderNavigation(chapterId) {
    $('chapterNav').innerHTML = chapters.map((chapter,i) => {
      const active = chapter.id === chapterId;
      return `<div class="chapter-group"><a class="chapter-link${active?' active':''}" href="#chapter-${chapter.id}" aria-expanded="${active}" aria-controls="nav-${chapter.id}"${state.route==='chapter-'+chapter.id?' aria-current="page"':''}><span class="chapter-number">${number(i+1)}</span><span>${chapter.title}</span><span class="chapter-chevron" aria-hidden="true">⌄</span></a><ul id="nav-${chapter.id}" class="lesson-list"${active?'':' hidden'}>${chapterLessons(chapter.id).map(lesson => `<li><a class="lesson-link" href="#${lesson.id}"${lesson.id===state.route?' aria-current="page"':''}>${lesson.title}</a></li>`).join('')}</ul></div>`;
    }).join('');
    const homeLink = document.querySelector('.all-chapters');
    if (state.route === 'course') homeLink.setAttribute('aria-current','page'); else homeLink.removeAttribute('aria-current');
    $('chapterSelect').value = chapterId ? 'chapter-'+chapterId : 'course';
    updateProgress();
  }
  function home() {
    const resume = state.last ? `<a class="resume-link" href="#${state.last}">繼續閱讀：${escape(lessons.find(l=>l.id===state.last).title)} →</a>` : '';
    return `<div class="course-cover"><div class="cover-main"><p class="cover-label">RTEAM · 同仁教育訓練</p><span class="cover-year">AI 工作地圖 / 2026</span><h1 id="slideTitle" class="cover-title">認識 AI，<br>從工作開始。</h1><p class="cover-intro">AI 不只是聊天。它正在學會做事。</p><p class="cover-intro">一次看懂市面上的 AI 工具，以及 Chat、Deep Research、Workflow 與 AI Agent 的差異。從「問 AI」走向「和 AI 一起完成工作」。</p><p class="cover-caption"><span>5 大章節</span><span>${lessons.length} 個主題</span><span>3 題互動測驗</span></p><a class="primary-link" href="#${lessons[0].id}">開始閱讀 <span aria-hidden="true">→</span></a>${resume}</div><div class="cover-toc"><div class="cover-toc-head"><span>選擇章節</span><span>CONTENTS</span></div>${chapters.map((c,i)=>`<a class="chapter-row" href="#chapter-${c.id}"><span class="row-number">${number(i+1)}</span><div><h2>${c.title}</h2><p>${c.summary}</p></div><span class="row-arrow" aria-hidden="true">↗</span></a>`).join('')}</div></div>`;
  }
  function chapterPage(chapter) {
    const entries = chapterLessons(chapter.id), index = chapterIndex(chapter.id);
    return `<div class="slide-inner"><div class="slide-kicker"><span>第 ${number(index+1)} 章</span><span>章節目錄</span></div><h1 class="slide-title" id="slideTitle">${chapter.title}</h1><p class="slide-description">${chapter.summary}</p><div class="chapter-overview"><div><div class="chapter-intro-number" aria-hidden="true">${number(index+1)}</div><h2>${chapter.question}</h2><p>本章 ${entries.length} 個主題。<br>選擇主題，或依序往下閱讀。</p><a class="primary-link" href="#${entries[0].id}">開始本章 <span aria-hidden="true">→</span></a></div><ol class="lesson-index">${entries.map((l,i)=>`<li><a href="#${l.id}"><span class="lesson-number">${number(i+1)}</span><span class="lesson-name">${l.title}</span><span class="row-arrow" aria-hidden="true">→</span></a></li>`).join('')}</ol></div></div>`;
  }
  function lessonPage(lesson) {
    const chapter = chapters.find(c=>c.id===lesson.chapter), index=chapterLessons(chapter.id).findIndex(l=>l.id===lesson.id);
    return `<div class="slide-inner"><div class="slide-kicker"><span>${number(chapterIndex(chapter.id)+1)}.${number(index+1)}</span><span>${chapter.title}</span></div><h1 id="slideTitle" class="slide-title">${lesson.title}</h1><p class="slide-description">${lesson.description}</p><div class="slide-content" id="lessonContent">${lesson.html}</div></div>`;
  }
  function renderTools(lesson, moveFocus=false) {
    const filtered = tools.filter(html => lesson.category==='all' || new RegExp('data-group="[^"]*\\b'+lesson.category+'\\b').test(html));
    // 小螢幕每次一項，讓工具介紹維持一張簡報的閱讀量。
    const pageSize = matchMedia('(max-width:600px)').matches ? 1 : 3;
    const pages = Math.max(1,Math.ceil(filtered.length/pageSize));
    const page = Math.min(state.toolPages[lesson.id]||0,pages-1);
    state.toolPages[lesson.id]=page;
    const start=page*pageSize;
    $('lessonContent').innerHTML = `<div class="toolbar" role="group" aria-label="工具分類篩選">${filters.map(f=>`<button type="button" class="chip" data-filter-route="${f.id}" aria-pressed="${f.category===lesson.category}">${f.title.replace('工具','')}</button>`).join('')}</div><div class="tools" id="toolGrid">${filtered.slice(start,start+pageSize).join('')}</div><div class="tool-pagination"><span>第 ${start+1}–${Math.min(start+pageSize,filtered.length)} 項／共 ${filtered.length} 項</span><div><button id="toolsPrev" type="button"${page===0?' disabled':''} aria-label="上一組工具">←</button><span>${page+1} / ${pages}</span><button id="toolsNext" type="button"${page===pages-1?' disabled':''} aria-label="下一組工具">→</button></div></div><p class="tool-note">${toolNote}</p>`;
    document.querySelectorAll('[data-filter-route]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.filterRoute)));
    $('toolsPrev').addEventListener('click',()=>{state.toolPages[lesson.id]--;renderTools(lesson,true);});
    $('toolsNext').addEventListener('click',()=>{state.toolPages[lesson.id]++;renderTools(lesson,true);});
    if(moveFocus){$('pageAnnouncement').textContent=`${lesson.title}，第 ${page+1} 組，共 ${pages} 組`; $('toolGrid').setAttribute('tabindex','-1');$('toolGrid').focus({preventScroll:true});}
  }
  function initScenario() {
    const tabs = [...document.querySelectorAll('[data-mode]')], panel=$('scenarioPanel');
    function showMode(mode, focus=false) {
      state.mode=mode;
      const data=window.scenarios[mode];
      tabs.forEach(b=>{const active=b.dataset.mode===mode;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
      panel.setAttribute('aria-labelledby','tab-'+mode);
      panel.innerHTML=`<h4>${escape(data.title)}</h4><p>${escape(data.description)}</p><ol>${data.steps.map(s=>`<li>${escape(s)}</li>`).join('')}</ol><div class="output">${escape(data.output)}</div>`;
      if(focus)tabs.find(t=>t.dataset.mode===mode).focus();
    }
    tabs.forEach((tab,i)=>{
      tab.addEventListener('click',()=>showMode(tab.dataset.mode));
      tab.addEventListener('keydown',event=>{
        let target;
        if(event.key==='ArrowRight') target=(i+1)%tabs.length;
        if(event.key==='ArrowLeft') target=(i-1+tabs.length)%tabs.length;
        if(event.key==='Home') target=0;
        if(event.key==='End') target=tabs.length-1;
        if(target!==undefined){event.preventDefault();showMode(tabs[target].dataset.mode,true);}
      });
    });
    showMode(state.mode);
  }
  function initQuiz() {
    const quiz = window.quizItems;
    function renderQuiz(focusTarget=null) {
      const index=state.quizIndex,item=quiz[index],answer=state.answers[index];
      const score=state.answers.reduce((sum,a,i)=>sum+(a===quiz[i].correct?1:0),0);
      $('quizCount').textContent=`第 ${index+1} 題 / 共 ${quiz.length} 題`;
      $('quizScore').textContent=`已答對 ${score} 題`;
      $('quizBar').style.width=((index+1)/quiz.length*100)+'%';
      $('quizQuestion').textContent=item.q;
      $('quizOptions').innerHTML=item.options.map((option,i)=>`<button type="button" class="answer${answer===i?' selected':''}" data-answer="${i}" aria-pressed="${answer===i}">${String.fromCharCode(65+i)}. ${escape(option)}</button>`).join('');
      document.querySelectorAll('[data-answer]').forEach(button=>button.addEventListener('click',()=>{state.answers[index]=Number(button.dataset.answer);renderQuiz(Number(button.dataset.answer));}));
      $('quizFeedback').classList.toggle('hidden',answer===null);
      if(answer!==null)$('quizFeedback').textContent=(answer===item.correct?'✓ 答對了！':'參考答案：'+item.options[item.correct]+'。')+' '+item.why;
      $('quizPrev').disabled=index===0;
      $('quizNext').disabled=answer===null;
      $('quizNext').textContent=index===quiz.length-1?'重新練習 ↻':'下一題 →';
      if(typeof focusTarget==='number')document.querySelector(`[data-answer="${focusTarget}"]`).focus({preventScroll:true});
      else if(focusTarget==='question'){$('quizQuestion').tabIndex=-1;$('quizQuestion').focus({preventScroll:true});}
    }
    $('quizPrev').addEventListener('click',()=>{if(state.quizIndex>0){state.quizIndex--;renderQuiz('question');}});
    $('quizNext').addEventListener('click',()=>{if(state.answers[state.quizIndex]===null)return;if(state.quizIndex===quiz.length-1){state.quizIndex=0;state.answers=[null,null,null];}else state.quizIndex++;renderQuiz('question');});
    renderQuiz();
  }
  function setMenu(open, restore=true) {
    const sidebar=$('sidebar'),toggle=$('menuToggle');
    document.querySelector('.main').inert=open;
    if(open){sidebar.setAttribute('role','dialog');sidebar.setAttribute('aria-modal','true');}else{sidebar.removeAttribute('role');sidebar.removeAttribute('aria-modal');}
    if(open){menuReturn=document.activeElement;sidebar.classList.add('open');$('menuBackdrop').hidden=false;toggle.setAttribute('aria-expanded','true');sidebar.inert=false;$('menuClose').focus();}
    else {sidebar.classList.remove('open');$('menuBackdrop').hidden=true;toggle.setAttribute('aria-expanded','false');sidebar.inert=matchMedia('(max-width:900px)').matches;if(restore&&menuReturn&&menuReturn.isConnected)menuReturn.focus();}
  }
  function navigate(id) {
    if (location.hash.slice(1)===id) render(id,true); else location.hash=id;
  }
  const aliases={top:'course',market:'market',timeline:'timeline',usecases:'usecases',modes:'modes'};
  function render(raw, focus=false) {
    let id=aliases[raw]||raw||'course';
    let lesson=lessons.find(l=>l.id===id),chapter=chapters.find(c=>'chapter-'+c.id===id);
    if(!lesson&&!chapter&&id!=='course')id='course';
    state.route=id;
    const sidebarWasOpen=$('sidebar').classList.contains('open');
    setMenu(false,false);
    if(lesson){
      state.visited.add(lesson.id);state.last=lesson.id;save();
      $('slide').innerHTML=lessonPage(lesson);
      if(lesson.kind==='tools')renderTools(lesson);
      if(lesson.kind==='scenario')initScenario();
      if(lesson.kind==='quiz')initQuiz();
      const index=lessons.indexOf(lesson),c=chapters.find(c=>c.id===lesson.chapter);
      previous=index===0?'course':lessons[index-1].id;
      next=index===lessons.length-1?'course':lessons[index+1].id;
      $('positionLabel').textContent=`${number(index+1)} / ${lessons.length}`;
      $('positionProgress').value=index+1;
      $('pageLabel').textContent=`第 ${number(chapterIndex(c.id)+1)} 章 · ${c.title}`;
      $('breadcrumb').innerHTML=`<a href="#course">課程</a><span class="crumb-divider" aria-hidden="true">/</span><a href="#chapter-${c.id}">${c.title}</a><span class="crumb-divider" aria-hidden="true">/</span><span>${number(chapterLessons(c.id).indexOf(lesson)+1)}</span>`;
      $('nextPage').innerHTML=index===lessons.length-1?'回到目錄 <span aria-hidden="true">↗</span>':'下一頁 <span aria-hidden="true">→</span>';
      renderNavigation(c.id);
    } else if(chapter) {
      $('slide').innerHTML=chapterPage(chapter);
      const entries=chapterLessons(chapter.id),start=lessons.indexOf(entries[0]);
      previous=chapterIndex(chapter.id)===0?'course':'chapter-'+chapters[chapterIndex(chapter.id)-1].id;
      next=entries[0].id;
      $('positionLabel').textContent=`本章 ${entries.length} 頁`;
      $('positionProgress').value=start;
      $('pageLabel').textContent=`第 ${number(chapterIndex(chapter.id)+1)} 章 · 章節目錄`;
      $('breadcrumb').innerHTML=`<a href="#course">課程</a><span class="crumb-divider" aria-hidden="true">/</span><span>${chapter.title}</span>`;
      $('nextPage').innerHTML='開始本章 <span aria-hidden="true">→</span>';
      renderNavigation(chapter.id);
    } else {
      $('slide').innerHTML=home();previous=null;next=lessons[0].id;
      $('positionLabel').textContent=`共 ${lessons.length} 頁`;
      $('positionProgress').value=0;
      $('pageLabel').textContent='課程目錄';
      $('breadcrumb').innerHTML='<span>課程總覽</span><span class="crumb-divider" aria-hidden="true">/</span><span>AI 工作地圖 2026</span>';
      $('nextPage').innerHTML='開始閱讀 <span aria-hidden="true">→</span>';
      renderNavigation(null);
    }
    $('positionProgress').max=lessons.length;
    $('prevPage').disabled=previous===null;
    $('slide').scrollTop=0;
    document.title=`${lesson?lesson.title:chapter?chapter.title:'課程目錄'}｜RTeam AI 基礎教育訓練`;
    $('pageAnnouncement').textContent=lesson?`${lesson.title}，第 ${lessons.indexOf(lesson)+1} 頁，共 ${lessons.length} 頁`:chapter?chapter.title+'，章節目錄':'課程總覽';
    if(focus||sidebarWasOpen)$('slide').focus({preventScroll:true});
    const activeLink=document.querySelector('.lesson-link[aria-current="page"]');
    if(activeLink&&!matchMedia('(max-width:900px)').matches)activeLink.scrollIntoView({block:'nearest'});
  }
  document.querySelector('.skip-link').addEventListener('click',event=>{event.preventDefault();$('slide').focus();});
  $('chapterSelect').insertAdjacentHTML('beforeend',chapters.map((c,i)=>`<option value="chapter-${c.id}">${number(i+1)} · ${c.title}</option>`).join(''));
  $('chapterSelect').addEventListener('change',event=>navigate(event.target.value));
  $('prevPage').addEventListener('click',()=>{if(previous)navigate(previous);});
  $('nextPage').addEventListener('click',()=>navigate(next));
  $('menuToggle').addEventListener('click',()=>setMenu(!$('sidebar').classList.contains('open')));
  $('menuClose').addEventListener('click',()=>setMenu(false));
  $('menuBackdrop').addEventListener('click',()=>setMenu(false));
  $('sidebar').addEventListener('click',event=>{if(event.target.closest('a')&&matchMedia('(max-width:900px)').matches){const same=event.target.closest('a').hash===location.hash;if(same){setMenu(false,false);$('slide').focus();}}});
  document.addEventListener('keydown',event=>{
    if(event.defaultPrevented||event.altKey||event.ctrlKey||event.metaKey||event.shiftKey)return;
    if($('sidebar').classList.contains('open')){
      if(event.key==='Escape'){event.preventDefault();setMenu(false);return;}
      if(event.key==='Tab'){
        const focusable=[...$('sidebar').querySelectorAll('a,button')].filter(el=>el.getClientRects().length);
        // Shift+Tab 在下方獨立處理，以確保抽屜完整循環。
        if(document.activeElement===focusable.at(-1)){event.preventDefault();focusable[0].focus();}
      }
      return;
    }
    const target=event.target;
    if(target.closest('button,a,select,input,textarea,[role="tablist"],[role="region"],[contenteditable="true"]'))return;
    if(event.key==='ArrowRight'){event.preventDefault();navigate(next);}
    if(event.key==='ArrowLeft'&&previous){event.preventDefault();navigate(previous);}
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Tab'&&event.shiftKey&&$('sidebar').classList.contains('open')){
      const focusable=[...$('sidebar').querySelectorAll('a,button')].filter(el=>el.getClientRects().length);
      if(document.activeElement===focusable[0]){event.preventDefault();focusable.at(-1).focus();}
    }
  });
  let resizeTimer;
  window.addEventListener('resize',()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{setMenu(false,false);const lesson=lessons.find(l=>l.id===state.route);if(lesson&&lesson.kind==='tools')renderTools(lesson);},100);});
  window.addEventListener('hashchange',()=>render(location.hash.slice(1),true));
  render(location.hash.slice(1));
})();
