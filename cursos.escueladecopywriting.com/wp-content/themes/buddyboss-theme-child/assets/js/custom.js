/* This is your custom Javascript */
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

/* === BARRA DE NAVEGACION INFERIOR === */
(function () {
  var K = 'ecw_completadas';
  var VISTO = 'ecw_tip_teclado';

  function norm(p){ return p.replace(/index\.html?$/i,'').replace(/\/+$/,'').toLowerCase(); }
  function leer(){ try { return JSON.parse(localStorage.getItem(K)||'[]'); } catch(e){ return []; } }
  function grabar(l){ try { localStorage.setItem(K, JSON.stringify(l)); } catch(e){} }
  function yo(){ return norm(location.pathname); }

  var IC_IZQ  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="ecwnav-ic"><path d="M15 18l-6-6 6-6"/></svg>';
  var IC_DER  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="ecwnav-ic"><path d="M9 18l6-6-6-6"/></svg>';
  var IC_OK   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" class="ecwnav-ic ecwnav-check"><path d="M4 12.5l5.2 5.2L20 6.5"/></svg>';

  var CSS = [
    '.ecwnav{position:fixed;left:0;right:0;bottom:0;z-index:9000;background:#fff;',
      'border-top:1px solid #E7E9EC;box-shadow:0 -3px 16px rgba(18,43,70,.08);padding:10px 20px;',
      'font-family:Karla,system-ui,-apple-system,"Segoe UI",sans-serif;line-height:normal}',
    '.ecwnav *{box-sizing:border-box}',
    '.ecwnav-in{max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:18px}',
    '.ecwnav-btn{display:inline-flex;align-items:center;gap:8px;background:#fff;border:1.5px solid #E7E9EC;',
      'border-radius:100px;padding:9px 18px;font:inherit;font-size:13.5px;color:#122B46;cursor:pointer;',
      'white-space:nowrap;transition:border-color .15s,background .15s;text-decoration:none}',
    '.ecwnav-btn:hover{border-color:#0000FF;background:#F7F8FF}',
    '.ecwnav-btn.off{opacity:.42;cursor:not-allowed;pointer-events:none}',
    '.ecwnav-mid{flex:1;min-width:0}',
    '.ecwnav-lab{display:flex;justify-content:space-between;gap:14px;font-size:11.5px;color:#5A6474;margin-bottom:6px}',
    '.ecwnav-lab b{color:#122B46;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}',
    '.ecwnav-bar{height:5px;background:#E9EBF0;border-radius:99px;overflow:hidden}',
    '.ecwnav-fill{height:100%;width:0;background:linear-gradient(90deg,#0000FF,#385DFF);border-radius:99px;',
      'transition:width .55s cubic-bezier(.2,.7,.3,1)}',
    '.ecwnav-ok{display:inline-flex;align-items:center;gap:9px;background:#0000FF;border:1.5px solid #0000FF;',
      'border-radius:100px;padding:11px 22px;color:#fff;font:inherit;font-size:13.5px;font-weight:700;',
      'cursor:pointer;white-space:nowrap;transition:background .18s,border-color .18s,transform .12s}',
    '.ecwnav-ok:hover{background:#0000d6;border-color:#0000d6}',
    '.ecwnav-ok:active{transform:scale(.97)}',
    '.ecwnav-ok.hecho{background:#00B163;border-color:#00B163}',
    '.ecwnav-ic{width:16px;height:16px;flex:0 0 16px}',
    '.ecwnav-check{display:none}',
    '.ecwnav kbd{display:inline-grid;place-items:center;min-width:19px;height:19px;padding:0 5px;',
      'background:#EEF0F6;color:#5A6474;border:1px solid #DCDFE8;border-bottom-width:2px;border-radius:5px;',
      'font-family:inherit;font-size:11px;font-weight:700;opacity:0;transition:opacity .18s}',
    '.ecwnav:hover kbd{opacity:1}',
    '.ecwnav-ok kbd{background:rgba(255,255,255,.22);border-color:rgba(255,255,255,.3);color:#fff}',
    '.ecwtip{position:fixed;left:50%;transform:translateX(-50%) translateY(14px);bottom:96px;z-index:9100;',
      'background:#122B46;color:#fff;padding:13px 20px;border-radius:12px;font-size:13px;display:flex;',
      'align-items:center;gap:16px;box-shadow:0 10px 30px rgba(18,43,70,.3);opacity:0;pointer-events:none;',
      'transition:all .3s;font-family:Karla,system-ui,sans-serif}',
    '.ecwtip.on{opacity:1;pointer-events:auto;transform:translateX(-50%) translateY(0)}',
    '.ecwtip kbd{opacity:1;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.28);color:#fff;',
      'border-radius:5px;padding:2px 7px;font-size:11.5px;font-weight:700;margin:0 2px}',
    '.ecwtip button{background:rgba(255,255,255,.16);border:0;color:#fff;border-radius:8px;padding:6px 12px;',
      'font:inherit;font-size:12px;cursor:pointer}',
    '.ecwtoast{position:fixed;left:50%;transform:translateX(-50%) translateY(14px);bottom:96px;z-index:9200;',
      'background:#00B163;color:#fff;padding:11px 22px;border-radius:100px;font-size:13.5px;font-weight:700;',
      'opacity:0;pointer-events:none;transition:all .28s;box-shadow:0 8px 24px rgba(0,177,99,.35);',
      'font-family:Karla,system-ui,sans-serif}',
    '.ecwtoast.on{opacity:1;transform:translateX(-50%) translateY(0)}',
    'body{padding-bottom:100px !important}',
    '.learndash_next_prev_link{display:none !important}',
    '@media(max-width:680px){',
      '.ecwnav-in{flex-wrap:wrap;gap:10px}',
      '.ecwnav-mid{order:-1;flex:0 0 100%}',
      '.ecwnav-btn{flex:0 0 52px;justify-content:center;padding:11px 0}',
      '.ecwnav-btn span.txt{display:none}',
      '.ecwnav kbd{display:none}',
      '.ecwnav-ic{width:19px;height:19px;flex:0 0 19px}',
      '.ecwnav-ok{flex:1 1 auto;justify-content:center;padding:13px 18px;min-width:0}',
      '.ecwnav-ok .ecwnav-txt{display:none}',
      '.ecwnav-ok .ecwnav-ic:not(.ecwnav-check){display:none}',
      '.ecwnav-check{display:block;width:25px;height:25px;flex:0 0 25px;color:#7BFFC0;stroke-width:2.8}',
      '.ecwnav-ok.hecho .ecwnav-check{color:#fff}',
      'body{padding-bottom:100px !important}',
    '}'
  ].join('');

  function enlaces() {
    var prev = null, next = null;
    var zona = document.querySelector('.learndash_next_prev_link');
    if (zona) {
      var a = zona.querySelector('a.prev-link'); if (a) prev = a.href;
      var b = zona.querySelector('a.next-link'); if (b) next = b.href;
    }
    if (!prev || !next) {
      var lista = [], mia = yo(), idx = -1;
      document.querySelectorAll('.lms-topic-sidebar-wrapper a[href]').forEach(function (x) {
        if (!x.querySelector('.i-progress')) return;
        var r; try { r = norm(new URL(x.href, location.href).pathname); } catch(e){ return; }
        lista.push({ href: x.href, ruta: r });
      });
      lista.forEach(function (o, i) { if (o.ruta === mia) idx = i; });
      if (idx > 0 && !prev) prev = lista[idx-1].href;
      if (idx >= 0 && idx < lista.length-1 && !next) next = lista[idx+1].href;
    }
    return { prev: prev, next: next };
  }

  function contexto() {
    var lista = [], mia = yo(), idx = -1, hechas = 0;
    var L = leer();
    document.querySelectorAll('.lms-topic-sidebar-wrapper a[href]').forEach(function (x) {
      if (!x.querySelector('.i-progress')) return;
      var r; try { r = norm(new URL(x.href, location.href).pathname); } catch(e){ return; }
      var t = x.querySelector('.bb-lms-title, .bb-not-completed-item');
      lista.push({ ruta: r, titulo: t ? t.textContent.trim() : '' });
      if (L.indexOf(r) > -1) hechas++;
    });
    lista.forEach(function (o, i) { if (o.ruta === mia) idx = i; });
    return { total: lista.length, idx: idx, hechas: hechas, lista: lista };
  }

  function toast(txt) {
    var t = document.querySelector('.ecwtoast');
    if (!t) { t = document.createElement('div'); t.className = 'ecwtoast'; document.body.appendChild(t); }
    t.textContent = txt;
    t.classList.add('on');
    setTimeout(function () { t.classList.remove('on'); }, 1600);
  }

  function paginaModulo() { return null; }

  function moduloActual() {
    var mia = yo(), enlace = null;
    var todos = document.querySelectorAll('.lms-topic-item a[href], .bb-type-list a[href]');
    for (var i = 0; i < todos.length; i++) {
      var r; try { r = norm(new URL(todos[i].href, location.href).pathname); } catch(e){ continue; }
      if (r === mia) { enlace = todos[i]; break; }
    }
    /* si no esta en la lista de temas, buscar entre las cabeceras de modulo */
    if (!enlace) {
      var cabs = document.querySelectorAll('a.bb-lesson-head');
      for (var j = 0; j < cabs.length; j++) {
        var rc; try { rc = norm(new URL(cabs[j].href, location.href).pathname); } catch(e){ continue; }
        if (rc === mia) {
          var t0 = cabs[j].querySelector('.bb-lesson-title');
          var nm = t0 ? t0.textContent.trim() : '';
          if (nm.length > 42) nm = nm.substring(0, 40).trim() + '\u2026';
          var sub = cabs[j].closest('.lms-lesson-item');
          var cuantas = sub ? sub.querySelectorAll('.lms-topic-item a[href]').length : 0;
          if (cuantas > 0) return { nombre: nm, pos: 0, total: cuantas, esModulo: true };
          return { nombre: nm, pos: 0, total: 1, esModulo: true };
        }
      }
      return null;
    }
    if (!enlace.closest) return null;
    var caja = enlace.closest('.lms-lesson-item');
    if (!caja) return null;
    var t = caja.querySelector('.bb-lesson-title');
    var nombre = t ? t.textContent.trim() : '';
    if (nombre.length > 42) nombre = nombre.substring(0, 40).trim() + '…';
    var temas = caja.querySelectorAll('.lms-topic-item a[href]');
    var total = temas.length, pos = 0;
    for (var k = 0; k < temas.length; k++) {
      var r2; try { r2 = norm(new URL(temas[k].href, location.href).pathname); } catch(e){ continue; }
      if (r2 === mia) { pos = k + 1; break; }
    }
    if (!total || !pos) return null;
    return { nombre: nombre, pos: pos, total: total };
  }

  function indice(L) {
    /* --- lecciones --- */
    document.querySelectorAll('.lms-topic-item a[href], .bb-type-list a[href]').forEach(function (a) {
      var r; try { r = norm(new URL(a.href, location.href).pathname); } catch(e){ return; }
      var hecha = L.indexOf(r) > -1;
      var p = a.querySelector('.i-progress');
      if (p) {
        p.classList.toggle('i-progress-completed', hecha);
        p.classList.toggle('i-progress-not-completed', !hecha);
        p.innerHTML = hecha ? '<i class="bb-icon-f bb-icon-check"></i>' : '<i class="bb-icon-l bb-icon-circle"></i>';
      }
      var caja = a.querySelector('.bb-lms-status');
      if (caja) caja.setAttribute('data-balloon', hecha ? 'Completada' : 'Sin completar');
      a.querySelectorAll('.bb-completed-item, .bb-not-completed-item').forEach(function (w) {
        w.classList.toggle('bb-completed-item', hecha);
        w.classList.toggle('bb-not-completed-item', !hecha);
      });
      a.querySelectorAll('.bb-lms-title, .bb-title').forEach(function (t) {
        t.style.setProperty('text-decoration', hecha ? 'line-through' : 'none', 'important');
      });
    });

    /* --- lista "Modulo Contenido" en la pagina del modulo --- */
    var hechasLista = 0, totalLista = 0;
    document.querySelectorAll('.ld-item-list-item, .ld-table-list-item').forEach(function (fila) {
      var a = fila.querySelector('a[href]');
      if (!a) return;
      var r; try { r = norm(new URL(a.href, location.href).pathname); } catch(e){ return; }
      var hecha = L.indexOf(r) > -1;
      totalLista++; if (hecha) hechasLista++;

      fila.classList.toggle('learndash-complete', hecha);
      fila.classList.toggle('learndash-not-complete', !hecha);

      fila.querySelectorAll('.ld-item-title, .ld-topic-title, .ld-item-name').forEach(function (t) {
        t.style.setProperty('text-decoration', hecha ? 'line-through' : 'none', 'important');
        t.style.setProperty('opacity', hecha ? '.62' : '1', 'important');
      });

      fila.querySelectorAll('.ld-status-icon').forEach(function (ic) {
        ic.classList.toggle('ld-status-complete', hecha);
        ic.classList.toggle('ld-secondary-background', hecha);
        ic.classList.toggle('ld-status-incomplete', !hecha);
        ic.innerHTML = hecha
          ? '<span class="ld-icon ld-icon-checkmark"></span>'
          : '';
        ic.style.setProperty('background-color', hecha ? '#0000FF' : 'transparent', 'important');
        ic.style.setProperty('border', hecha ? 'none' : '2px solid #D5D8DF', 'important');
      });
    });

    if (totalLista) {
      var pctLista = Math.round(hechasLista / totalLista * 100);
      document.querySelectorAll('.ld-progress-stats .ld-progress-percentage, .ld-progress-percentage').forEach(function (e) {
        if (e.classList.contains('course-completion-rate')) return;
        e.textContent = pctLista + '% Completado';
      });
      var etqLec = hechasLista + ' de ' + totalLista + (totalLista === 1 ? ' lección' : ' lecciones');
      document.querySelectorAll('.ld-progress-steps, .ld-lesson-list-steps').forEach(function (e) {
        e.textContent = etqLec;
      });
      document.querySelectorAll('.ld-text, .ld-item-list-header h2, .ld-section-heading h2, .ld-item-list-section-heading h3').forEach(function (h) {
        if (h.children.length) return;
        var t = h.textContent.trim();
        if (/m[oó]dulo\s+contenido/i.test(t)) h.textContent = 'Contenido del módulo';
        else if (/^(lesson|course)\s+content$/i.test(t)) h.textContent = 'Contenido del curso';
        else if (/^steps$/i.test(t)) h.textContent = 'lecciones';
      });
    }

    /* --- modulos --- */
    document.querySelectorAll('.lms-lesson-item').forEach(function (mod) {
      var temas = mod.querySelectorAll('.lms-topic-item a[href]');
      var n = 0, tot = temas.length, pct = 0, todo = false;

      if (tot > 0) {
        temas.forEach(function (a) {
          var r; try { r = norm(new URL(a.href, location.href).pathname); } catch(e){ return; }
          if (L.indexOf(r) > -1) n++;
        });
        pct = Math.round(n / tot * 100);
        todo = (n === tot);
      } else {
        /* modulo de una sola leccion: su propio enlace decide */
        var solo = mod.querySelector('a.bb-lesson-head');
        if (solo) {
          var rs; try { rs = norm(new URL(solo.href, location.href).pathname); } catch(e){ rs = null; }
          if (rs && L.indexOf(rs) > -1) { todo = true; pct = 100; }
        }
      }

      var cab = mod.querySelector('a.bb-lesson-head');
      if (cab) {
        cab.querySelectorAll('.bb-completed-item, .bb-not-completed-item').forEach(function (w) {
          w.classList.toggle('bb-completed-item', todo);
          w.classList.toggle('bb-not-completed-item', !todo);
        });
        cab.querySelectorAll('.bb-lesson-title').forEach(function (t) {
          t.style.setProperty('text-decoration', todo ? 'line-through' : 'none', 'important');
        });
        var env = cab.querySelector('.bb-lms-progress-wrap');
        if (env) env.setAttribute('data-balloon', todo ? 'Completado' : (pct + '% completado'));
        var pr = cab.querySelector('.bb-progress');
        if (pr) {
          pr.setAttribute('data-percentage', pct);
          pr.classList.toggle('bb-completed', todo);
          pr.classList.toggle('bb-not-completed', !todo);
          pr.innerHTML = todo
            ? '<i class="bb-icon-f bb-icon-check" style="color:#00B163;font-size:17px"></i>'
            : '<span class="bb-progress-left"><span class="bb-progress-circle"></span></span><span class="bb-progress-right"><span class="bb-progress-circle"></span></span>';
        }
        var chk = cab.querySelector('.bb-check-completed, .bb-check-not-completed');
        if (chk) {
          chk.classList.toggle('bb-check-completed', todo);
          chk.classList.toggle('bb-check-not-completed', !todo);
        }
      }
    });
  }

  function pintar() {
    var nav = document.querySelector('.ecwnav');
    if (!nav) return;
    var c = contexto(), L = leer(), hecho = L.indexOf(yo()) > -1;
    var pct = c.total ? Math.round(c.hechas / c.total * 100) : 0;

    nav.querySelector('.ecwnav-fill').style.width = pct + '%';
    nav.querySelector('.ecwnav-pct').textContent = pct;

    var etq = nav.querySelector('.ecwnav-nombre');
    var mod = moduloActual() || paginaModulo();
    if (mod) {
      etq.textContent = (mod.esModulo || !mod.pos)
        ? mod.nombre + ' · ' + mod.total + (mod.total === 1 ? ' lección' : ' lecciones')
        : mod.nombre + ' · Lección ' + mod.pos + ' de ' + mod.total;
      etq.title = mod.nombre;
    } else if (c.idx >= 0 && c.total) {
      etq.textContent = 'Lección ' + (c.idx+1) + ' de ' + c.total;
    } else {
      etq.textContent = document.title.split('–')[0].trim().substring(0, 60);
    }

    var b = nav.querySelector('.ecwnav-ok');
    b.classList.toggle('hecho', hecho);
    b.querySelector('.ecwnav-txt').textContent = hecho ? 'Completada · Continuar' : 'Completar y continuar';

    indice(L);
    document.querySelectorAll('.ld-progress-bar-percentage').forEach(function(e){ e.style.width = pct + '%'; });
    document.querySelectorAll('.course-completion-rate').forEach(function(e){ e.textContent = pct + '% Completado'; });
  }

  function completar(saltar) {
    var L = leer(), mia = yo(), i = L.indexOf(mia);
    if (i === -1) { L.push(mia); grabar(L); toast('\u2713 Lección completada'); }
    pintar();
    if (window.ecwPintarEncabezado) window.ecwPintarEncabezado();
    if (saltar) {
      var e = enlaces();
      if (e.next) setTimeout(function(){ location.href = e.next; }, 550);
    }
  }

  function construir() {
    if (document.querySelector('.ecwnav')) return;
    if (!document.querySelector('.learndash_next_prev_link, .lms-topic-sidebar-wrapper, form.sfwd-mark-complete')) return;

    var s = document.createElement('style');
    s.id = 'ecwnav-css';
    s.textContent = CSS;
    document.head.appendChild(s);

    var e = enlaces();
    var nav = document.createElement('nav');
    nav.className = 'ecwnav';
    nav.innerHTML =
      '<div class="ecwnav-in">' +
        '<a class="ecwnav-btn ecwnav-prev' + (e.prev ? '' : ' off') + '" href="' + (e.prev || '#') + '">' +
          IC_IZQ + '<span class="txt">Anterior</span><kbd>←</kbd></a>' +
        '<div class="ecwnav-mid">' +
          '<div class="ecwnav-lab"><b class="ecwnav-nombre"></b>' +
          '<span><span class="ecwnav-pct">0</span>% del curso</span></div>' +
          '<div class="ecwnav-bar"><div class="ecwnav-fill"></div></div>' +
        '</div>' +
        '<button class="ecwnav-ok" type="button">' + IC_OK +
          '<span class="ecwnav-txt">Completar y continuar</span>' + IC_DER + '<kbd>C</kbd></button>' +
        '<a class="ecwnav-btn ecwnav-next' + (e.next ? '' : ' off') + '" href="' + (e.next || '#') + '">' +
          '<span class="txt">Siguiente</span>' + IC_DER + '<kbd>→</kbd></a>' +
      '</div>';
    document.body.appendChild(nav);

    nav.querySelector('.ecwnav-ok').addEventListener('click', function () { completar(true); });
    pintar();

    if (!localStorage.getItem(VISTO)) {
      var tip = document.createElement('div');
      tip.className = 'ecwtip';
      tip.innerHTML = '<span>Puedes navegar con el teclado: <kbd>←</kbd> <kbd>→</kbd> entre lecciones y <kbd>C</kbd> para completar.</span>' +
                      '<button type="button">Entendido</button>';
      document.body.appendChild(tip);
      setTimeout(function(){ tip.classList.add('on'); }, 1400);
      tip.querySelector('button').addEventListener('click', function () {
        tip.classList.remove('on');
        try { localStorage.setItem(VISTO, '1'); } catch(e){}
        setTimeout(function(){ tip.remove(); }, 400);
      });
    }
  }

  document.addEventListener('submit', function (e) {
    var f = e.target.closest && e.target.closest('form.sfwd-mark-complete');
    if (!f) return;
    e.preventDefault(); e.stopImmediatePropagation();
    completar(false);
  }, true);

  document.addEventListener('keydown', function (e) {
    if (/input|textarea|select/i.test(e.target.tagName) || e.target.isContentEditable) return;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var nav = document.querySelector('.ecwnav');
    if (!nav) return;
    if (e.key === 'ArrowLeft')  { var a = nav.querySelector('.ecwnav-prev'); if (a && !a.classList.contains('off')) location.href = a.href; }
    if (e.key === 'ArrowRight') { var b = nav.querySelector('.ecwnav-next'); if (b && !b.classList.contains('off')) location.href = b.href; }
    if (e.key.toLowerCase() === 'c') { completar(true); }
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', construir);
  else construir();
  setTimeout(construir, 1200);
})();
/* === SCROLL LIMPIO AL CAMBIAR DE LECCION === */
(function(){if('scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo(0,0);document.addEventListener('DOMContentLoaded',function(){window.scrollTo(0,0);});window.addEventListener('pageshow',function(){window.scrollTo(0,0);});})();
/* === TRANSICION SUAVE === */
(function(){var s=document.createElement('style');s.textContent='html{opacity:0}html.ecw-listo{opacity:1;transition:opacity .18s}';(document.head||document.documentElement).appendChild(s);function ver(){document.documentElement.classList.add('ecw-listo');window.scrollTo(0,0);}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',ver);}else{ver();}setTimeout(ver,900);window.addEventListener('pageshow',ver);})();

/* === ENCABEZADO CON CINTA LATERAL === */
(function () {
  var K = 'ecw_completadas';
  function norm(p){ return p.replace(/index\.html?$/i,'').replace(/\/+$/,'').toLowerCase(); }
  function leer(){ try { return JSON.parse(localStorage.getItem(K)||'[]'); } catch(e){ return []; } }
  function yo(){ return norm(location.pathname); }

  var CSS = [
    /* ocultar el estado original de LearnDash */
    '.bb-ld-status,.ld-status.ld-status-progress,.sfwd-course-position{display:none !important}',

    /* contenedor con cinta */
    '.ecwh{border-left:4px solid #00B163;padding-left:18px;margin:0 0 22px;transition:border-color .3s}',
    '.ecwh.pend{border-left-color:#F7BA45}',

    /* migas compactas */
    '.ecwh-miga{font-size:11.5px;color:#5A6474;margin:0 0 8px;line-height:1.5;',
      'letter-spacing:.02em;display:flex;flex-wrap:wrap;align-items:center;gap:2px}',
    '.ecwh-miga a{color:#5A6474;text-decoration:none;max-width:260px;overflow:hidden;',
      'text-overflow:ellipsis;white-space:nowrap}',
    '.ecwh-miga a:hover{color:#0000FF;text-decoration:underline}',
    '.ecwh-miga i{color:#C8CDD6;font-style:normal;margin:0 6px}',

    /* titulo */
    '.ecwh-tit{font-size:28px;line-height:1.22;margin:0;color:#122B46;letter-spacing:-.01em;font-weight:700}',

    /* estado */
    '.ecwh-est{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;font-weight:700;',
      'margin:11px 0 0;color:#00794A}',
    '.ecwh.pend .ecwh-est{color:#B07E12}',
    '.ecwh-est svg{width:15px;height:15px;flex:0 0 15px}',
    '.ecwh.pend .ecwh-est svg{display:none}',
    '.ecwh-reloj{display:none;width:13px;height:13px;flex:0 0 13px}',
    '.ecwh.pend .ecwh-reloj{display:block}',

    '@media(max-width:600px){',
      '.ecwh{border-left-width:3px;padding-left:13px}',
      '.ecwh-tit{font-size:22px}',
      '.ecwh-miga a{max-width:140px}',
    '}'
  ].join('');

  var IC_OK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5.2 5.2L20 6.5"/></svg>';
  var IC_REL = '<svg class="ecwh-reloj" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>';

  function construir() {
    if (document.querySelector('.ecwh')) { pintar(); return; }

    var titulo = document.querySelector('.lms-header-title h1, h1.entry-title');
    if (!titulo) return;

    var s = document.getElementById('ecwh-css');
    if (!s) {
      s = document.createElement('style'); s.id = 'ecwh-css';
      s.textContent = CSS; document.head.appendChild(s);
    }

    /* recoger las migas originales */
    var partes = [];
    document.querySelectorAll('.ld-breadcrumbs-segments li a').forEach(function (a) {
      var t = a.textContent.trim();
      if (!t) return;
      var href = a.getAttribute('href');
      partes.push({ txt: t, href: (href && href !== '') ? href : null });
    });

    var miga = '';
    partes.forEach(function (p, i) {
      if (i === partes.length - 1) return;      /* la ultima es la leccion actual */
      if (i > 0) miga += '<i>\u203A</i>';
      miga += p.href ? '<a href="' + p.href + '">' + p.txt + '</a>' : '<span>' + p.txt + '</span>';
    });

    var caja = document.createElement('div');
    caja.className = 'ecwh';
    caja.innerHTML =
      (miga ? '<nav class="ecwh-miga">' + miga + '</nav>' : '') +
      '<h1 class="ecwh-tit">' + titulo.textContent.trim() + '</h1>' +
      '<p class="ecwh-est">' + IC_OK + IC_REL + '<span class="ecwh-txt"></span></p>';

    var cab = document.querySelector('.bb-lms-header') || titulo.parentElement;
    cab.parentNode.insertBefore(caja, cab);

    /* ocultar los originales */
    var vieja = document.querySelector('.ld-breadcrumbs');
    if (vieja) vieja.style.display = 'none';
    var cont = document.querySelector('.lms-header-title');
    if (cont) cont.style.display = 'none';

    pintar();
  }

  function paginaModulo() { return null; }

  function moduloActual() {
    var mia = yo(), enlace = null;
    var todos = document.querySelectorAll('.lms-topic-item a[href], .bb-type-list a[href]');
    for (var i = 0; i < todos.length; i++) {
      var r; try { r = norm(new URL(todos[i].href, location.href).pathname); } catch(e){ continue; }
      if (r === mia) { enlace = todos[i]; break; }
    }
    /* si no esta en la lista de temas, buscar entre las cabeceras de modulo */
    if (!enlace) {
      var cabs = document.querySelectorAll('a.bb-lesson-head');
      for (var j = 0; j < cabs.length; j++) {
        var rc; try { rc = norm(new URL(cabs[j].href, location.href).pathname); } catch(e){ continue; }
        if (rc === mia) {
          var t0 = cabs[j].querySelector('.bb-lesson-title');
          var nm = t0 ? t0.textContent.trim() : '';
          if (nm.length > 42) nm = nm.substring(0, 40).trim() + '\u2026';
          var sub = cabs[j].closest('.lms-lesson-item');
          var cuantas = sub ? sub.querySelectorAll('.lms-topic-item a[href]').length : 0;
          if (cuantas > 0) return { nombre: nm, pos: 0, total: cuantas, esModulo: true };
          return { nombre: nm, pos: 0, total: 1, esModulo: true };
        }
      }
      return null;
    }
    if (!enlace.closest) return null;
    var caja = enlace.closest('.lms-lesson-item');
    if (!caja) return null;
    var t = caja.querySelector('.bb-lesson-title');
    var nombre = t ? t.textContent.trim() : '';
    if (nombre.length > 42) nombre = nombre.substring(0, 40).trim() + '…';
    var temas = caja.querySelectorAll('.lms-topic-item a[href]');
    var total = temas.length, pos = 0;
    for (var k = 0; k < temas.length; k++) {
      var r2; try { r2 = norm(new URL(temas[k].href, location.href).pathname); } catch(e){ continue; }
      if (r2 === mia) { pos = k + 1; break; }
    }
    if (!total || !pos) return null;
    return { nombre: nombre, pos: pos, total: total };
  }

  function indice(L) {
    /* --- lecciones --- */
    document.querySelectorAll('.lms-topic-item a[href], .bb-type-list a[href]').forEach(function (a) {
      var r; try { r = norm(new URL(a.href, location.href).pathname); } catch(e){ return; }
      var hecha = L.indexOf(r) > -1;
      var p = a.querySelector('.i-progress');
      if (p) {
        p.classList.toggle('i-progress-completed', hecha);
        p.classList.toggle('i-progress-not-completed', !hecha);
        p.innerHTML = hecha ? '<i class="bb-icon-f bb-icon-check"></i>' : '<i class="bb-icon-l bb-icon-circle"></i>';
      }
      var caja = a.querySelector('.bb-lms-status');
      if (caja) caja.setAttribute('data-balloon', hecha ? 'Completada' : 'Sin completar');
      a.querySelectorAll('.bb-completed-item, .bb-not-completed-item').forEach(function (w) {
        w.classList.toggle('bb-completed-item', hecha);
        w.classList.toggle('bb-not-completed-item', !hecha);
      });
      a.querySelectorAll('.bb-lms-title, .bb-title').forEach(function (t) {
        t.style.setProperty('text-decoration', hecha ? 'line-through' : 'none', 'important');
      });
    });

    /* --- lista "Modulo Contenido" en la pagina del modulo --- */
    var hechasLista = 0, totalLista = 0;
    document.querySelectorAll('.ld-item-list-item, .ld-table-list-item').forEach(function (fila) {
      var a = fila.querySelector('a[href]');
      if (!a) return;
      var r; try { r = norm(new URL(a.href, location.href).pathname); } catch(e){ return; }
      var hecha = L.indexOf(r) > -1;
      totalLista++; if (hecha) hechasLista++;

      fila.classList.toggle('learndash-complete', hecha);
      fila.classList.toggle('learndash-not-complete', !hecha);

      fila.querySelectorAll('.ld-item-title, .ld-topic-title, .ld-item-name').forEach(function (t) {
        t.style.setProperty('text-decoration', hecha ? 'line-through' : 'none', 'important');
        t.style.setProperty('opacity', hecha ? '.62' : '1', 'important');
      });

      fila.querySelectorAll('.ld-status-icon').forEach(function (ic) {
        ic.classList.toggle('ld-status-complete', hecha);
        ic.classList.toggle('ld-secondary-background', hecha);
        ic.classList.toggle('ld-status-incomplete', !hecha);
        ic.innerHTML = hecha
          ? '<span class="ld-icon ld-icon-checkmark"></span>'
          : '';
        ic.style.setProperty('background-color', hecha ? '#0000FF' : 'transparent', 'important');
        ic.style.setProperty('border', hecha ? 'none' : '2px solid #D5D8DF', 'important');
      });
    });

    if (totalLista) {
      var pctLista = Math.round(hechasLista / totalLista * 100);
      document.querySelectorAll('.ld-progress-stats .ld-progress-percentage, .ld-progress-percentage').forEach(function (e) {
        if (e.classList.contains('course-completion-rate')) return;
        e.textContent = pctLista + '% Completado';
      });
      var etqLec = hechasLista + ' de ' + totalLista + (totalLista === 1 ? ' lección' : ' lecciones');
      document.querySelectorAll('.ld-progress-steps, .ld-lesson-list-steps').forEach(function (e) {
        e.textContent = etqLec;
      });
      document.querySelectorAll('.ld-text, .ld-item-list-header h2, .ld-section-heading h2, .ld-item-list-section-heading h3').forEach(function (h) {
        if (h.children.length) return;
        var t = h.textContent.trim();
        if (/m[oó]dulo\s+contenido/i.test(t)) h.textContent = 'Contenido del módulo';
        else if (/^(lesson|course)\s+content$/i.test(t)) h.textContent = 'Contenido del curso';
        else if (/^steps$/i.test(t)) h.textContent = 'lecciones';
      });
    }

    /* --- modulos --- */
    document.querySelectorAll('.lms-lesson-item').forEach(function (mod) {
      var temas = mod.querySelectorAll('.lms-topic-item a[href]');
      var n = 0, tot = temas.length, pct = 0, todo = false;

      if (tot > 0) {
        temas.forEach(function (a) {
          var r; try { r = norm(new URL(a.href, location.href).pathname); } catch(e){ return; }
          if (L.indexOf(r) > -1) n++;
        });
        pct = Math.round(n / tot * 100);
        todo = (n === tot);
      } else {
        /* modulo de una sola leccion: su propio enlace decide */
        var solo = mod.querySelector('a.bb-lesson-head');
        if (solo) {
          var rs; try { rs = norm(new URL(solo.href, location.href).pathname); } catch(e){ rs = null; }
          if (rs && L.indexOf(rs) > -1) { todo = true; pct = 100; }
        }
      }

      var cab = mod.querySelector('a.bb-lesson-head');
      if (cab) {
        cab.querySelectorAll('.bb-completed-item, .bb-not-completed-item').forEach(function (w) {
          w.classList.toggle('bb-completed-item', todo);
          w.classList.toggle('bb-not-completed-item', !todo);
        });
        cab.querySelectorAll('.bb-lesson-title').forEach(function (t) {
          t.style.setProperty('text-decoration', todo ? 'line-through' : 'none', 'important');
        });
        var env = cab.querySelector('.bb-lms-progress-wrap');
        if (env) env.setAttribute('data-balloon', todo ? 'Completado' : (pct + '% completado'));
        var pr = cab.querySelector('.bb-progress');
        if (pr) {
          pr.setAttribute('data-percentage', pct);
          pr.classList.toggle('bb-completed', todo);
          pr.classList.toggle('bb-not-completed', !todo);
          pr.innerHTML = todo
            ? '<i class="bb-icon-f bb-icon-check" style="color:#00B163;font-size:17px"></i>'
            : '<span class="bb-progress-left"><span class="bb-progress-circle"></span></span><span class="bb-progress-right"><span class="bb-progress-circle"></span></span>';
        }
        var chk = cab.querySelector('.bb-check-completed, .bb-check-not-completed');
        if (chk) {
          chk.classList.toggle('bb-check-completed', todo);
          chk.classList.toggle('bb-check-not-completed', !todo);
        }
      }
    });
  }

  function pintar() {
    var caja = document.querySelector('.ecwh');
    if (!caja) return;
    var hecha = leer().indexOf(yo()) > -1;
    caja.classList.toggle('pend', !hecha);
    var t = caja.querySelector('.ecwh-txt');
    if (t) t.textContent = hecha ? 'Lección completada' : 'Aún no la has completado';
  }

  window.ecwPintarEncabezado = pintar;

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', construir);
  else construir();
  setTimeout(construir, 1000);
})();

/* === AJUSTES DE ESPACIADO DEL ENCABEZADO === */
(function(){
  var s = document.createElement('style');
  s.id = 'ecwh-espacios';
  s.textContent =
    /* fuera la barra de progreso del modulo */
    '.ld-progress.ld-progress-inline,' +
    '#learndash-page-content > .learndash_content_wrap > .ld-progress,' +
    '.learndash_content_wrap > .ld-progress{display:none !important}' +

    /* separacion arriba y abajo del encabezado */
    '.ecwh{margin:15px 0 20px !important;padding-left:18px !important}' +
    '.ecwh-miga{margin:0 0 9px !important}' +
    '.ecwh-tit{margin:0 !important}' +
    '.ecwh-est{margin:10px 0 0 !important}' +

    /* que el contenido no arranque tan abajo */
    '.learndash_content_wrap{padding-top:0 !important;margin-top:0 !important}' +
    '.ld-tabs,.ld-tabs-content{margin-top:0 !important;padding-top:0 !important}' +
    '.ld-tab-content > *:first-child{margin-top:0 !important}' +
    '.bb-lms-header{margin-bottom:0 !important;padding-bottom:0 !important}' +

    '@media(max-width:600px){' +
      '.ecwh{margin:12px 0 16px !important;padding-left:13px !important}' +
      '.ecwh-miga{margin:0 0 7px !important;font-size:11px !important}' +
      '.ecwh-est{margin:8px 0 0 !important}' +
      '.ld-tab-content > *:first-child{margin-top:0 !important}' +
    '}';
  document.head.appendChild(s);
})();

/* === REDUCIR ESPACIO BAJO EL ENCABEZADO === */
(function(){
  var s = document.createElement('style');
  s.id = 'ecwh-espacios2';
  s.textContent =
    '.ecwh{margin:15px 0 6px !important}' +
    '.bb-lms-header{margin-bottom:0 !important;padding-bottom:0 !important}' +
    '.learndash_content_wrap{padding-top:0 !important;margin-top:0 !important}' +
    '.ld-tabs,.ld-tabs-content,.ld-tab-content{margin-top:0 !important;padding-top:0 !important}' +
    '.ld-tab-content > *:first-child{margin-top:0 !important;padding-top:0 !important}' +
    '.learndash-wrapper .learndash_content_wrap > *:first-child{margin-top:0 !important}' +
    '.entry-content > *:first-child{margin-top:0 !important}' +
    '#learndash-page-content{padding-top:0 !important}' +
    '.learndash-content-body{padding-top:0 !important}' +
    '@media(max-width:600px){' +
      '.ecwh{margin:12px 0 4px !important}' +
    '}';
  document.head.appendChild(s);
})();

/* === CERRAR HUECO DEL HEADER VACIO === */
(function(){
  var s = document.createElement('style');
  s.id = 'ecwh-hueco';
  s.textContent =
    '.bb-lms-header{display:none !important}' +
    '.ecwh{margin:15px 0 24px !important}' +
    '@media(max-width:600px){.ecwh{margin:12px 0 20px !important}}';
  document.head.appendChild(s);
})();
