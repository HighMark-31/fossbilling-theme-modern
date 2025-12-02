;(function(){
  if(typeof bootstrap!=='undefined'){
    var t=document.querySelectorAll('[data-bs-toggle="tooltip"]');
    Array.prototype.forEach.call(t,function(el){new bootstrap.Tooltip(el)});
  }

  function flashMessage(type,msg){
    if(typeof FOSSBilling!=='undefined'&&FOSSBilling.message){
      FOSSBilling.message(type,msg);
    }
  }

  document.addEventListener('DOMContentLoaded',function(){
    Array.prototype.forEach.call(document.querySelectorAll('input[required], select[required], textarea[required]'),function(el){
      var label=document.querySelector('label[for="'+el.id+'"]');
      if(label&&!label.dataset.requiredAdded){
        label.dataset.requiredAdded='1';
        var s=document.createElement('span');
        s.textContent='*';
        s.className='ms-1 text-danger';
        label.appendChild(s);
      }
    });

    var currency=document.querySelector('select.currency_selector');
    if(currency){
      currency.addEventListener('change',function(){
        if(typeof API!=='undefined'&&API.guest){
            if (API.guest.post) {
                API.guest.post('cart/set_currency', { currency: currency.value }, function() {
                    if(typeof bb !== 'undefined' && bb.reload) { bb.reload(); }
                    else { location.reload(); }
                    flashMessage('success', 'Valuta aggiornata');
                }, function() {
                    flashMessage('error', 'Impossibile aggiornare la valuta');
                });
            }
        }
      });
    }

    var openBtn=document.getElementById('open-mobile-menu');
    var closeBtn=document.getElementById('close-mobile-menu');
    var overlay=document.getElementById('mobile-menu-overlay');
    var sidebars=document.querySelectorAll('.modern-sidebar');
    function isMobile(){return window.matchMedia('(max-width: 1024px)').matches}
    function toggleMobile(open){
      if(!isMobile()){document.documentElement.classList.remove('mobile-menu-open');if(overlay){overlay.classList.add('hidden')}Array.prototype.forEach.call(sidebars,function(sb){sb.classList.remove('open')});return}
      document.documentElement.classList[open?'add':'remove']('mobile-menu-open');
      if(overlay){overlay.classList[open?'remove':'add']('hidden')}
      Array.prototype.forEach.call(sidebars,function(sb){sb.classList[open?'add':'remove']('open')});
    }
    if(openBtn){openBtn.addEventListener('click',function(){toggleMobile(true)});} 
    var dataToggle=document.querySelector('[data-mobile-menu-toggle]');
    if(dataToggle){dataToggle.addEventListener('click',function(){toggleMobile(true)});} 
    if(closeBtn){closeBtn.addEventListener('click',function(){toggleMobile(false)});} 
    if(overlay){overlay.addEventListener('click',function(){toggleMobile(false)});} 
    document.addEventListener('keydown',function(e){if(e.key==='Escape'){toggleMobile(false)}});
    window.addEventListener('resize',function(){if(!isMobile()){toggleMobile(false)}});

    Array.prototype.forEach.call(document.querySelectorAll('.order-index .product-card'),function(a){
      a.addEventListener('click',function(e){
          // Let the default link action proceed, but show the loader if present
        var wait=document.querySelector('.wait');
        if(wait){wait.classList.remove('hidden');}
      });
    });

    Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'),function(a){
      a.addEventListener('click',function(e){
        var id=a.getAttribute('href').slice(1);
        var target=document.getElementById(id);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth',block:'start'});
        }
      });
    });

    if(typeof TomSelect!=='undefined'){
      Array.prototype.forEach.call(document.querySelectorAll('.js-language-selector'),function(el){
        try{
          var m=document.cookie.match(new RegExp('(?:^| )BBLANG=([^;]+)'));
          if(m){el.value=decodeURIComponent(m[1]);}
          new TomSelect(el,{
            copyClassesToDropdown:false,
            controlClass:'ts-control locale',
            dropdownClass:'dropdown-menu ts-dropdown',
            optionClass:'dropdown-item',
            controlInput:false,
            items: [el.value],
            create:false,
            render:{
              option:function(data,escape){return '<div>'+((data.customProperties||''))+' '+escape(data.text)+'</div>';},
              item:function(data,escape){return '<div>'+((data.customProperties||''))+' '+escape(data.text)+'</div>'}
            },
            onChange: function(value) {
                 
                 if(typeof bb !== 'undefined' && bb.cookieCreate) {
                     bb.cookieCreate("BBLANG", value, 7);
                 } else {
                     var d = new Date();
                     d.setTime(d.getTime() + (7*24*60*60*1000));
                     var expires = "expires="+ d.toUTCString();
                     document.cookie = "BBLANG=" + value + ";" + expires + ";path=/";
                 }
                 
                 if(typeof bb !== 'undefined' && bb.reload) { bb.reload(); }
                 else { location.reload(); }
            }
          });
        }catch(e){}
      });
    }

    var periodSelector = document.getElementById('period-selector');
    if (periodSelector) {
        periodSelector.addEventListener('change', function() {
            var selectedOption = periodSelector.options[periodSelector.selectedIndex];
            var price = selectedOption.getAttribute('data-bb-price');
             var totalPriceElement = document.querySelector('.total-price'); 
             if(totalPriceElement){
                 totalPriceElement.textContent = price;
             }
        });
    }
    Array.prototype.forEach.call(document.querySelectorAll('.js-theme-toggler'),function(el){
      el.addEventListener('click',function(ev){
        ev.preventDefault();
        var theme=el.getAttribute('href').split('=')[1];
        localStorage.setItem('theme',theme);
        document.documentElement.setAttribute('data-bs-theme',theme);
        document.documentElement.classList.toggle('dark',theme==='dark');
      });
    });

    var toggle=document.getElementById('theme-toggle');
    if(toggle){
      var current=document.documentElement.getAttribute('data-bs-theme');
      toggle.checked=current==='dark';
      toggle.addEventListener('change',function(){
        var theme=toggle.checked?'dark':'light';
        localStorage.setItem('theme',theme);
        document.documentElement.setAttribute('data-bs-theme',theme);
        document.documentElement.classList.toggle('dark',theme==='dark');
      });
    }
  });
})();
