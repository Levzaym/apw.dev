const I18N={
id:{nav_home:"Beranda",nav_about:"Tentang",nav_skills:"Keahlian",nav_portfolio:"Karya",nav_contact:"Kontak",
hero_im:"Halo, Saya",hero_motto:"Menggabungkan estetika desain dengan kode yang efisien untuk menciptakan pengalaman digital yang luar biasa, ceria, dan profesional.",
back_portfolio:"Kembali ke Portfolio",btn_work:"Lihat Karya Saya",btn_contact:"Hubungi Saya",status:"Tersedia untuk peluang baru",
about_title:"Tentang Saya",about_desc:"Saya adalah seorang Frontend Developer dan UI Designer yang bersemangat dalam menerjemahkan kebutuhan bisnis menjadi antarmuka pengguna yang menarik dan fungsional. Saya percaya bahwa desain yang baik tidak hanya terlihat indah, tetapi juga memecahkan masalah.",
about_status_title:"Status Pekerjaan",about_location_title:"Lokasi",about_location:"Indonesia",about_lang_title:"Bahasa yang Dikuasai",about_lang:"Indonesia (Native), Inggris (Professional Working Proficiency)",btn_cv:"Download CV",
skills_title:"Keahlian & Soft Skills",skills_desc:"Teknologi yang saya gunakan sehari-hari beserta soft skill yang mendukung kinerja profesional saya.",skills_sub2:"Soft Skills",
soft1_title:"Komunikasi Efektif",soft1_desc:"Mampu mengartikulasikan ide desain dan logika kode dengan jelas kepada tim maupun klien.",
soft2_title:"Pemecahan Masalah",soft2_desc:"Pendekatan analitis dan logis dalam menyelesaikan tantangan teknis maupun pengalaman pengguna.",
soft3_title:"Kolaborasi Tim",soft3_desc:"Sangat adaptif bekerja sama dalam tim lintas disiplin untuk mencapai tujuan bisnis bersama.",
soft4_title:"Empati Pengguna",soft4_desc:"Selalu menempatkan diri sebagai pengguna akhir untuk menciptakan produk yang benar-benar bermanfaat.",
portfolio_title:"Portfolio Saya",portfolio_desc:"Beberapa proyek terpilih yang menunjukkan keahlian saya dalam UI Design dan Frontend Development.",portfolio_all:"Lihat Semua Proyek",portfolio_visit:"Kunjungi Website",
port1_desc:"Sistem manajemen inventaris lengkap dengan analitik real-time. Dibangun menggunakan React dan Tailwind CSS.",
port2_desc:"Website profil perusahaan yang responsif, modern, dan sangat dioptimalkan untuk SEO dan kecepatan.",
proj_page_title:"Semua Proyek",proj_page_desc:"Detail proyek pilihan: tujuan, fitur utama, dan teknologi yang digunakan.",
p1_f1:"Analitik penjualan dan stok secara real-time",p1_f2:"Desain sistem komponen yang konsisten dari Figma ke kode",p1_f3:"Dashboard responsif dengan hierarki informasi yang jelas",
p2_f1:"Optimasi SEO dan kecepatan muat halaman",p2_f2:"Animasi scroll halus dengan GSAP",p2_f3:"Layout responsif untuk desktop, tablet, dan mobile",
contact_title:"Mari Berkolaborasi",contact_desc:"Punya proyek menarik atau sekadar ingin menyapa? Jangan ragu untuk mengirim pesan.",
form_name:"Nama Lengkap",form_email:"Alamat Email",form_msg:"Pesan Anda",form_submit:"Kirim Pesan",footer_rights:"Hak Cipta Dilindungi."},
en:{nav_home:"Home",nav_about:"About",nav_skills:"Skills",nav_portfolio:"Portfolio",nav_contact:"Contact",
hero_im:"Hello, I am",hero_motto:"Combining design aesthetics with efficient code to create outstanding, cheerful, and professional digital experiences.",
back_portfolio:"Back to Portfolio",btn_work:"View My Work",btn_contact:"Contact Me",status:"Open to new opportunities",
about_title:"About Me",about_desc:"I am a Frontend Developer and UI Designer passionate about translating business needs into engaging and functional user interfaces. I believe good design doesn't just look beautiful, it solves problems.",
about_status_title:"Current Status",about_location_title:"Location",about_location:"Indonesia",about_lang_title:"Languages",about_lang:"Indonesian (Native), English (Professional Working Proficiency)",btn_cv:"Download CV",
skills_title:"Skills & Soft Skills",skills_desc:"The technologies I use daily along with the soft skills that support my professional performance.",skills_sub2:"Soft Skills",
soft1_title:"Effective Communication",soft1_desc:"Able to articulate design ideas and code logic clearly to both teams and clients.",
soft2_title:"Problem Solving",soft2_desc:"Analytical and logical approach to solving technical and user experience challenges.",
soft3_title:"Team Collaboration",soft3_desc:"Highly adaptable working in cross-disciplinary teams to achieve shared business goals.",
soft4_title:"User Empathy",soft4_desc:"Always putting myself in the end-user's shoes to create truly valuable products.",
portfolio_title:"My Portfolio",portfolio_desc:"A selection of projects that showcase my expertise in UI Design and Frontend Development.",portfolio_all:"View All Projects",portfolio_visit:"Visit Website",
port1_desc:"Complete inventory management system with real-time analytics. Built using React and Tailwind CSS.",
port2_desc:"A responsive, modern corporate profile website highly optimized for SEO and speed.",
proj_page_title:"All Projects",proj_page_desc:"Selected project details: goals, key features, and the technologies used.",
p1_f1:"Real-time sales and inventory analytics",p1_f2:"Consistent component system from Figma to code",p1_f3:"Responsive dashboard with clear information hierarchy",
p2_f1:"SEO and page-speed optimization",p2_f2:"Smooth scroll animations with GSAP",p2_f3:"Responsive layout for desktop, tablet, and mobile",
contact_title:"Let's Collaborate",contact_desc:"Have an exciting project or just want to say hi? Don't hesitate to send a message.",
form_name:"Full Name",form_email:"Email Address",form_msg:"Your Message",form_submit:"Send Message",footer_rights:"All Rights Reserved."}};

const root=document.documentElement,$=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const store={get:k=>{try{return localStorage.getItem(k)}catch{return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch{}}};
let lang=store.get('lang')||'en';

function setLang(l){
  lang=l;store.set('lang',l);root.lang=l;
  $$('[data-i18n]').forEach(e=>{const t=I18N[l][e.dataset.i18n];if(t)e.textContent=t});
  $$('.lang').forEach(b=>{b.textContent=l==='en'?'ID':'EN';b.setAttribute('aria-label',l==='en'?'Ganti ke Bahasa Indonesia':'Switch to English')});
}
root.classList.add('js');
window.addEventListener('load',()=>{const l=$('#loader');if(l){setTimeout(()=>{l.classList.add('hide');setTimeout(()=>l.remove(),500)},400)}});

document.addEventListener('DOMContentLoaded',()=>{
  setLang(lang);
  $$('.lang').forEach(b=>b.onclick=()=>setLang(lang==='en'?'id':'en'));

  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
  $$('.rv').forEach((e,i)=>{e.style.setProperty('--d',(i%4)*.08+'s');io.observe(e)});

  const links=$$('.dock a.l[href*="#"]');
  const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
  $$('main section[id]').forEach(s=>so.observe(s));

  $$('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}));

  $$('.thumb video').forEach(v=>{const p=()=>v.play().catch(()=>{}),s=()=>{v.pause();v.currentTime=0};
    const a=v.closest('a');a.addEventListener('mouseenter',p);a.addEventListener('focus',p);a.addEventListener('mouseleave',s);a.addEventListener('blur',s)});
});
