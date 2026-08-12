/* This is your custom Javascript */
/* === PROGRESO LOCAL (copia sin servidor) === */
(function () {
  var K = 'ecw_completadas';

  function norm(p) {
    return p.replace(/index\.html?$/i, '').replace(/\/+$/, '').toLowerCase();
  }
  function leer() { try { return JSON.parse(localStorage.getItem(K) || '[]'); } catch (e) { return []; } }
  function grabar(l) { try { localStorage.setItem(K, JSON.stringify(l)); } catch (e) {} }
  function yo() { return norm(location.pathname); }

  function pintar() {
    var L = leer(), mia = yo(), hechas = 0, total = 0;

    var b = document.querySelector('.learndash_mark_complete_button');
    if (b) {
      var h = L.indexOf(mia) > -1;
      b.value = h ? '\u2713 Completado' : 'Marcar como completado';
      b.style.opacity = h ? '0.65' : '';
    }

    document.querySelectorAll('.lms-topic-sidebar-wrapper a.bb-lms-title-wrap, .lms-topic-sidebar-wrapper a[href]').forEach(function (a) {
      var r;
      try { r = norm(new URL(a.href, location.href).pathname); } catch (e) { return; }
      if (!a.querySelector('.i-progress')) return;
      total++;
      if (L.indexOf(r) === -1) return;
      hechas++;
      var pr = a.querySelector('.i-progress');
      pr.classList.remove('i-progress-not-completed');
      pr.classList.add('i-progress-completed');
      var t = a.querySelector('.bb-not-completed-item, .bb-lms-title');
      if (t) t.style.textDecoration = 'line-through';
    });

    if (total > 0) {
      var pct = Math.round(hechas / total * 100);
      document.querySelectorAll('.ld-progress-bar-percentage').forEach(function (e) { e.style.width = pct + '%'; });
      document.querySelectorAll('.course-completion-rate').forEach(function (e) { e.textContent = pct + '% Completado'; });
    }
  }

  document.addEventListener('submit', function (e) {
    var f = e.target.closest && e.target.closest('form.sfwd-mark-complete');
    if (!f) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    var L = leer(), mia = yo(), i = L.indexOf(mia);
    if (i > -1) { L.splice(i, 1); } else { L.push(mia); }
    grabar(L);
    pintar();
  }, true);

  pintar();
  document.addEventListener('DOMContentLoaded', pintar);
  setTimeout(pintar, 900);
})();
/* === REPRODUCTOR DE AUDIO ESTILO PODCAST (copia local) === */
(function () {
  var CSS_ID = 'ecw-podcast-css';
  var LOGO = 'https://d1yei2z3i6k35z.cloudfront.net/5154707/69adf49312dbc_LogocuadradoJC1.png';

  function inyectarCSS() {
    if (document.getElementById(CSS_ID)) return;
    var s = document.createElement('style');
    s.id = CSS_ID;
    s.textContent = ".podcast-player {--brand:#f4a027;--soft:#fff8ef;--bg:#fff;--line:#ddd;max-width:100%;background:var(--bg);border:1px solid #e8e8e8;border-radius:16px;padding:18px 20px;margin:20px 0 30px;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.08)}\n.podcast-player .player-top {display:flex;gap:15px}\n.podcast-player .cover img,.podcast-player .cover span {width:72px;height:72px;border-radius:12px;object-fit:cover;background:#f2f2f2;display:grid;place-items:center;font-size:32px}\n.podcast-player .meta {flex:1;min-width:0}\n.podcast-player .title {font-weight:700;font-size:14px;margin-bottom:4px;white-space:nowrap;overflow:hidden;width:100%;position:relative;text-align:left}\n.podcast-player .ep-label {font-weight:400;color:#111}\n.podcast-player .ep-name {color:var(--brand);display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:800}\n.podcast-player .author {font-size:12px;color:#777;margin-bottom:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:left}\n.podcast-player .progress {display:flex;align-items:center;gap:10px;width:100%;min-width:0}\n.podcast-player .current,.podcast-player .duration {flex:0 0 42px;font-size:12px;font-variant-numeric:tabular-nums;color:#111;line-height:1}\n.podcast-player .current {text-align:left}\n.podcast-player .duration {text-align:right}\n.podcast-player .seek,.podcast-player .volume {height:4px;background:var(--line);appearance:none;border-radius:999px;outline:none}\n.podcast-player .seek {flex:1 1 auto;min-width:0}\n.podcast-player .seek::-webkit-slider-thumb,.podcast-player .volume::-webkit-slider-thumb {appearance:none;width:12px;height:12px;background:var(--brand);border-radius:50%;cursor:pointer}\n.podcast-player .seek::-moz-range-thumb,.podcast-player .volume::-moz-range-thumb {width:12px;height:12px;background:var(--brand);border-radius:50%;cursor:pointer;border:0}\n.podcast-player .controls {display:flex;align-items:center;gap:12px;margin-top:16px;flex-wrap:wrap}\n.podcast-player .btn {display:flex;align-items:center;justify-content:center;padding:0;border-radius:12px;border:1px solid var(--line);background:#f7f7f7;cursor:pointer;font-weight:700;color:#111;user-select:none;transition:all .2s ease}\n.podcast-player .btn:hover,.podcast-player .btn.active {background:var(--soft);border-color:var(--brand);color:var(--brand)}\n.podcast-player .speed,.podcast-player .small,.podcast-player .btn.icon {width:38px;height:38px}\n.podcast-player .small {font-size:20px;line-height:1}\n.podcast-player .play {width:54px;height:54px;border-radius:50%;border:2px solid var(--brand);background:var(--bg);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--brand);font-size:20px;font-weight:900;transition:all .2s ease}\n.podcast-player .play:hover {background:var(--soft);transform:scale(1.04)}\n.podcast-player .playIcon {width:46px;height:46px;fill:var(--brand)}\n.podcast-player .spacer {flex:1;min-width:10px}\n.podcast-player .volume-control {display:flex;align-items:center;gap:8px}\n.podcast-player .volume {width:86px}\n.podcast-player {padding:16px}\n.podcast-player .cover img,.podcast-player .cover span {width:64px;height:64px}\n.podcast-player .spacer {display:none}\n.podcast-player .controls {display:grid;grid-template-columns:38px 38px 54px 38px;gap:10px;justify-content:center}\n.podcast-player .volume-control {grid-column:1 / 4;justify-content:center}\n.podcast-player .volume {width:78px}" + '.podcast-player .volume{width:120px}.podcast-player .btn{border-radius:10px}.podcast-player .btn.icon,.podcast-player .volume-control .mute{background:#f2f2f2;border-color:#e6e6e6}.podcast-player .seek,.podcast-player .volume{height:5px}.podcast-player .seek::-webkit-slider-thumb,.podcast-player .volume::-webkit-slider-thumb{width:14px;height:14px}.podcast-player .playIcon{width:26px;height:26px}.podcast-player .play{width:56px;height:56px}' + '.podcast-player .btn svg,.podcast-player .play svg{pointer-events:none}.podcast-player .controls{display:flex!important;flex-wrap:nowrap!important;align-items:center!important;gap:12px!important}.podcast-player .volume-control{display:flex!important;align-items:center!important;gap:9px!important;flex:0 0 auto!important}.podcast-player .spacer{flex:1 1 auto!important;min-width:8px!important}.podcast-player .seek,.podcast-player .volume{-webkit-appearance:none;appearance:none;height:5px!important;border-radius:999px;background:#ddd;margin:0!important;padding:0!important;vertical-align:middle}.podcast-player .seek::-webkit-slider-runnable-track,.podcast-player .volume::-webkit-slider-runnable-track{height:5px;border-radius:999px;background:transparent}.podcast-player .seek::-webkit-slider-thumb,.podcast-player .volume::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:14px;height:14px;margin-top:-4.5px;background:#f4a027;border:0;border-radius:50%;cursor:pointer}.podcast-player .seek::-moz-range-track,.podcast-player .volume::-moz-range-track{height:5px;border-radius:999px;background:transparent}.podcast-player .seek::-moz-range-thumb,.podcast-player .volume::-moz-range-thumb{width:14px;height:14px;background:#f4a027;border:0;border-radius:50%;cursor:pointer}.podcast-player .progress{display:flex!important;align-items:center!important;gap:10px!important}@media(max-width:560px){.podcast-player .controls{flex-wrap:wrap!important}.podcast-player .volume{flex:0 0 90px!important;width:90px!important}}';
    document.head.appendChild(s);
  }

  function tiempo(v) {
    if (!isFinite(v) || v < 0) return '--:--';
    var s = Math.floor(v), m = Math.floor(s / 60), r = s % 60;
    return m + ':' + (r < 10 ? '0' + r : r);
  }
  function caja(el) { return el ? el.closest('[data-audio-player]') : null; }
  function iconoPlay(btn, sonando) {
    if (!btn) return;
    btn.innerHTML = sonando ? '<svg viewBox="0 0 24 24" fill="currentColor" class="playIcon"><rect x="7" y="5" width="3.6" height="14" rx="1"></rect><rect x="13.4" y="5" width="3.6" height="14" rx="1"></rect></svg>' : '<svg viewBox="0 0 24 24" class="playIcon"><path d="M8 5v14l11-7z"></path></svg>';
  }
  function velocidad(btn) {
    var r = parseFloat((btn && btn.getAttribute('data-rate')) || '1');
    return isFinite(r) && r > 0 ? r : 1;
  }
  function etiquetaVel(r) { return (r % 1 === 0 ? String(r) : String(r).replace('.', ',')) + '\u00D7'; }
  function aplicarVel(p) {
    var a = p && p.querySelector('audio'), b = p && p.querySelector('.speed');
    if (a && b) { var r = velocidad(b); a.playbackRate = r; b.textContent = etiquetaVel(r); }
  }
  function pintarPista(el) {
    if (!el) return;
    var min = parseFloat(el.min || 0), max = parseFloat(el.max || 0), v = parseFloat(el.value || 0);
    var pct = (max > min) ? ((v - min) / (max - min)) * 100 : 0;
    el.style.background = 'linear-gradient(to right,#f4a027 0%,#f4a027 ' + pct + '%,#ddd ' + pct + '%,#ddd 100%)';
  }

  function refrescar(p) {
    var a = p && p.querySelector('audio');
    if (!a) return;
    var cur = p.querySelector('.current'), dur = p.querySelector('.duration'), seek = p.querySelector('.seek');
    if (cur) cur.textContent = tiempo(a.currentTime || 0);
    if (dur) dur.textContent = tiempo(a.duration);
    if (seek && !seek.matches(':active')) {
      seek.max = isFinite(a.duration) && a.duration > 0 ? Math.floor(a.duration) : 0;
      seek.value = Math.floor(a.currentTime || 0);
    }
    pintarPista(seek);
  }
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  function construir(src, titulo, modulo) {
    var cover = LOGO
      ? '<img src="' + esc(LOGO) + '" alt="Logo del audio" loading="lazy" onerror="this.parentNode.innerHTML=\'<span>\uD83C\uDFA7</span>\'">'
      : '<span>\uD83C\uDFA7</span>';
    return '<div class="podcast-player" data-audio-player>' +
      '<div class="player-top">' +
        '<div class="cover">' + cover + '</div>' +
        '<div class="meta">' +
          '<div class="title"><div class="ep-label">' + esc(modulo) + '</div>' +
          '<div class="ep-name">' + esc(titulo) + '</div></div>' +
          '<div class="author">Escuela de Copywriting</div>' +
          '<div class="progress"><span class="current">0:00</span>' +
          '<input type="range" class="seek" value="0" min="0" step="1" aria-label="Progreso del audio">' +
          '<span class="duration">--:--</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="controls">' +
        '<button class="btn pill speed" type="button" aria-label="Cambiar velocidad">1\u00D7</button>' +
        '<button class="btn small back15" type="button" aria-label="Retroceder 15 segundos"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:19px;height:19px"><path d="M3 3v6h6"></path><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1L3 9"></path></svg></button>' +
        '<button class="play" type="button" aria-label="Reproducir"><svg viewBox="0 0 24 24" class="playIcon"><path d="M8 5v14l11-7z"></path></svg></button>' +
        '<button class="btn small forward15" type="button" aria-label="Adelantar 15 segundos"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:19px;height:19px"><path d="M21 3v6h-6"></path><path d="M20.5 12a8.5 8.5 0 1 1-2.6-6.1L21 9"></path></svg></button>' +
        '<div class="spacer"></div>' +
        '<div class="volume-control"><button class="btn icon mute" type="button" aria-label="Silenciar"><svg viewBox="0 0 24 24" fill="currentColor" style="width:17px;height:17px"><path d="M4 9v6h4l5 4V5L8 9H4z"></path><path d="M16.5 8.5a4.5 4.5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><path d="M18.8 6a7.5 7.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg></button>' +
        '<input type="range" class="volume" min="0" max="1" step="0.01" value="1" aria-label="Volumen"></div>' +
      '</div>' +
      '<audio preload="metadata" playsinline src="' + esc(src) + '"></audio></div>';
  }

  function reemplazar() {
    var lista = document.querySelectorAll('audio.wp-audio-shortcode, .mejs-container audio, .wp-block-audio audio');
    Array.prototype.forEach.call(lista, function (a) {
      var src = a.currentSrc || a.getAttribute('src') || (a.querySelector('source') && a.querySelector('source').getAttribute('src'));
      if (!src) return;
      var externo = a.closest('.mejs-container') || a.closest('.wp-block-audio') || a.parentElement;
      if (!externo || externo.getAttribute('data-ecw-hecho')) return;

      var h1 = document.querySelector('.lms-header-title h1, h1.entry-title, h1');
      var titulo = h1 ? h1.textContent.trim() : 'Audio de la leccion';
      var crumb = document.querySelector('.ld-breadcrumbs-segments li a');
      var modulo = crumb ? crumb.textContent.trim() : 'Escuela de Copywriting';

      var t = document.createElement('div');
      t.innerHTML = construir(src, titulo, modulo);
      var nuevo = t.firstChild;

      externo.setAttribute('data-ecw-hecho', '1');
      externo.parentNode.insertBefore(nuevo, externo);
      externo.style.display = 'none';

      var au = nuevo.querySelector('audio');
      au.addEventListener('timeupdate', function () { refrescar(nuevo); });
      au.addEventListener('loadedmetadata', function () { refrescar(nuevo); });
      au.addEventListener('play', function () { iconoPlay(nuevo.querySelector('.play'), true); });
      au.addEventListener('pause', function () { iconoPlay(nuevo.querySelector('.play'), false); });
      var sk = nuevo.querySelector('.seek'), vl = nuevo.querySelector('.volume');
      sk.addEventListener('input', function () { au.currentTime = this.value; pintarPista(this); });
      vl.addEventListener('input', function () { au.volume = this.value; pintarPista(this); });
      au.addEventListener('durationchange', function () { refrescar(nuevo); });
      pintarPista(vl);
      refrescar(nuevo);
    });
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest) return;
    var b;
    if ((b = e.target.closest('[data-audio-player] .play'))) {
      e.preventDefault();
      var p = caja(b), a = p.querySelector('audio');
      aplicarVel(p);
      if (a.paused) { a.play().catch(function(){}); } else { a.pause(); }
    } else if ((b = e.target.closest('[data-audio-player] .back15'))) {
      e.preventDefault();
      var p2 = caja(b), a2 = p2.querySelector('audio');
      a2.currentTime = Math.max(0, (a2.currentTime || 0) - 15);
      refrescar(p2);
    } else if ((b = e.target.closest('[data-audio-player] .forward15'))) {
      e.preventDefault();
      var p3 = caja(b), a3 = p3.querySelector('audio');
      a3.currentTime = Math.min(isFinite(a3.duration) ? a3.duration : 1e9, (a3.currentTime || 0) + 15);
      refrescar(p3);
    } else if ((b = e.target.closest('[data-audio-player] .speed'))) {
      e.preventDefault();
      var vs = [1, 1.25, 1.5, 1.75, 2], k = (vs.indexOf(velocidad(b)) + 1) % vs.length;
      b.setAttribute('data-rate', String(vs[k]));
      aplicarVel(caja(b));
    } else if ((b = e.target.closest('[data-audio-player] .mute'))) {
      e.preventDefault();
      var a4 = caja(b).querySelector('audio');
      a4.muted = !a4.muted;
      b.classList.toggle('active', a4.muted);
      b.innerHTML = a4.muted ? '<svg viewBox="0 0 24 24" fill="currentColor" style="width:17px;height:17px"><path d="M4 9v6h4l5 4V5L8 9H4z"></path><path d="M17 9.5l4 5M21 9.5l-4 5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"></path></svg>' : '<svg viewBox="0 0 24 24" fill="currentColor" style="width:17px;height:17px"><path d="M4 9v6h4l5 4V5L8 9H4z"></path><path d="M16.5 8.5a4.5 4.5 0 0 1 0 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path><path d="M18.8 6a7.5 7.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg>';
    }
  }, true);

  function iniciar() { inyectarCSS(); reemplazar(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
  setTimeout(iniciar, 1200);
})();



/* === ESPACIADO TEXTOS === */
(function(){var s=document.createElement('style');s.id='ecw-esp';s.textContent='.podcast-player .meta{display:flex !important;flex-direction:column !important;justify-content:center !important}.podcast-player .title{margin:0 0 6px 0 !important;overflow:visible !important;white-space:normal !important}.podcast-player .ep-label{font-size:13px !important;line-height:1.3 !important;padding:0 0 3px 0 !important;margin:0 !important;color:#333 !important}.podcast-player .ep-name{font-size:15px !important;line-height:1.3 !important;padding:0 !important;margin:0 !important}.podcast-player .author{font-size:12px !important;line-height:1.3 !important;margin:0 0 14px 0 !important;color:#888 !important}.podcast-player .player-top{align-items:flex-start !important;gap:16px !important}.podcast-player .cover,.podcast-player .cover img{width:64px !important;height:64px !important;flex:0 0 64px !important;min-width:64px !important;max-width:64px !important}';document.head.appendChild(s);})();
/* === LOGO SIN RECUADRO === */
(function(){var s=document.createElement('style');s.id='ecw-logo';s.textContent='.podcast-player .cover{background:transparent !important;box-shadow:none !important;border:0 !important;border-radius:0 !important}.podcast-player .cover img{background:transparent !important;box-shadow:none !important;border:0 !important;border-radius:50% !important;object-fit:contain !important}';document.head.appendChild(s);})();

/* === TAMANOS PLAY Y VELOCIDAD === */
(function(){var s=document.createElement('style');s.id='ecw-tam';s.textContent='.podcast-player .play{width:48px !important;height:48px !important;flex:0 0 48px !important;min-width:48px !important}.podcast-player .playIcon{width:24px !important;height:24px !important}.podcast-player .btn.pill.speed{width:auto !important;min-width:32px !important;height:32px !important;flex:0 0 auto !important;padding:0 9px !important;border-radius:9px !important;font-size:12px !important;white-space:nowrap !important}';document.head.appendChild(s);})();