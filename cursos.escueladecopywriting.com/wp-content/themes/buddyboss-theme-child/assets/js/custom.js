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