const previews=[...document.querySelectorAll('video.preview')];
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.muted=true;e.target.play().catch(()=>{});}else{e.target.pause();}}),{threshold:.3});
previews.forEach(v=>io.observe(v));
document.querySelectorAll('#watch video').forEach(v=>v.addEventListener('play',()=>previews.forEach(p=>p.pause())));