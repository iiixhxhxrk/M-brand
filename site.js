const COVERS=[{"key": "tea", "name": "对坐", "type": "type", "en": "OVER TEA", "title": "坐下来，好好聊聊。", "desc": "茶叙、对话与主题交流。", "no": "01", "img": "./assets/images/cover-tea.png"}, {"key": "table", "name": "入席", "type": "type", "en": "AT THE TABLE", "title": "一桌饭，照顾每位来宾。", "desc": "私宴与接待细节。", "no": "02", "img": "./assets/images/cover-table.png"}, {"key": "garden", "name": "有闲", "type": "signature", "en": "A LITTLE OUTSIDE", "title": "见面，也可以轻松一些。", "desc": "花园与空间日常。", "no": "03", "img": "./assets/images/cover-garden.png"}, {"key": "conversation", "name": "相见", "type": "signature", "en": "IN GOOD COMPANY", "title": "认识彼此，分享各自的经历。", "desc": "人物故事与来宾访谈。", "no": "04", "img": "./assets/images/cover-conversation.png"}];
const $=id=>document.getElementById(id);
let lastFocus=null, toastTimer;
function openModal(src,alt){lastFocus=document.activeElement;$('modal-image').src=src;$('modal-image').alt=alt||'设计应用大图';$('modal').classList.add('open');document.body.style.overflow='hidden';$('close-modal').focus()}
function closeModal(){$('modal').classList.remove('open');document.body.style.overflow='';lastFocus?.focus()}
$('close-modal').onclick=closeModal;
$('modal').onclick=e=>{if(e.target===$('modal'))closeModal()};
document.addEventListener('keydown',e=>{if(!$('modal').classList.contains('open'))return;if(e.key==='Escape')closeModal();if(e.key==='Tab'){e.preventDefault();$('close-modal').focus()}});
function imageButton(src,alt,className){const b=document.createElement('button');b.className=className;b.setAttribute('aria-label','放大'+alt);const im=document.createElement('img');im.src=src;im.alt=alt;im.loading='lazy';b.append(im);b.onclick=()=>openModal(src,alt);return b}
COVERS.forEach(c=>{
  const card=document.createElement('article');card.className='cover-card';card.dataset.type=c.type;
  card.append(imageButton(c.img,'M+线上视觉：'+c.name,'cover-button'));
  const info=document.createElement('div');info.className='cover-info';
  const text=document.createElement('div'),title=document.createElement('h3'),desc=document.createElement('p');
  title.textContent=c.title;desc.textContent=c.desc;text.append(title,desc);
  const link=document.createElement('a');link.href=c.img;link.download='M+线上视觉_'+c.name+'.png';link.textContent='下载 PNG ↓';link.setAttribute('aria-label','下载'+c.name+'PNG');
  info.append(text,link);card.append(info);$('cover-grid').append(card);
});
function activate(button,selector){document.querySelectorAll(selector).forEach(x=>{x.classList.toggle('active',x===button);x.setAttribute('aria-pressed',String(x===button))})}
document.querySelectorAll('#cover-filters button').forEach(b=>b.onclick=()=>{activate(b,'#cover-filters button');document.querySelectorAll('.cover-card').forEach(c=>c.hidden=b.dataset.coverFilter!=='all'&&c.dataset.type!==b.dataset.coverFilter)});
document.querySelectorAll('[data-lightbox]').forEach(b=>b.onclick=()=>{const im=b.querySelector('img');openModal(im.src,im.alt)});
function toast(msg){clearTimeout(toastTimer);$('toast').textContent=msg;$('toast').style.display='block';toastTimer=setTimeout(()=>$('toast').style.display='none',2000)}
async function copyText(text,message='已复制'){
  let ok=false;try{await navigator.clipboard.writeText(text);ok=true}catch(e){const t=document.createElement('textarea');t.value=text;t.style.position='fixed';t.style.opacity='0';document.body.append(t);t.select();try{ok=document.execCommand('copy')}catch(e){}t.remove()}
  toast(ok?message:'请选中文本复制');
}
document.querySelectorAll('[data-color]').forEach(b=>b.onclick=()=>copyText(b.dataset.color,'色值已复制'));
const navLinks=[...document.querySelectorAll('.nav-links a')];
let navFrame=false;
function updateNav(){let id='';document.querySelectorAll('main>.section').forEach(s=>{if(s.getBoundingClientRect().top<=160)id=s.id});navLinks.forEach(a=>{const active=a.hash==='#'+id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});navFrame=false}
window.addEventListener('scroll',()=>{if(!navFrame){navFrame=true;requestAnimationFrame(updateNav)}},{passive:true});
updateNav();
