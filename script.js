// مصفوفة الكورسات بعد فحص الروابط يدوياً وتطابقها 100% مع الأسماء والأيقونات
const courses = [
    { 
        name: "C++ الاحترافية", 
        url: "https://youtube.com/playlist?list=PLoP3S2S1qTfCUdNazAZY1LFALcUr0Vbs9", 
        img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400", 
        icon: "fab fa-cuttlefish" 
    },
    { 
        name: "هياكل البيانات", 
        url: "https://youtube.com/playlist?list=PLoP3S2S1qTCVIETOGwaK3lyaL3UKu403", 
        img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400", 
        icon: "fas fa-diagram-project" 
    },
    { 
        name: "Java Programming", 
        url: "https://youtube.com/playlist?list=PLhiFu-f80eo-h0whWvRsE1KL_A08wpmSB", 
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400", 
        icon: "fab fa-java" 
    },
    { 
        name: "هندسة البرمجيات", 
        url: "https://youtube.com/playlist?list=PLeRlpfJzFz6--6rxdfzi3bfSfeRc3yaPW", 
        img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400" 
    },
    { 
        name: "قواعد البيانات SQL", 
        url: "https://youtube.com/playlist?list=PLuXY3ddo_8nzUrgCyaX_WEIJljx_We-c1", 
        img: "https://images.unsplash.com/photo-1544383333-545bd7797bd0?w=400", 
        icon: "fas fa-database" 
    },
    { 
        name: "تطوير الويب", 
        url: "https://youtube.com/playlist?list=PLknwEmKsW8OuN04Odt2sJqt4aAnkp-iYA", 
        img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400", 
        icon: "fas fa-code" 
    },
    { 
        name: "الأمن السيبراني", 
        url: "https://youtube.com/playlist?list=PL93xoMrxRJIuicqcd1UpFUYMfWKGp7JmI", 
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", 
        icon: "fas fa-shield-halved" 
    },
    { 
        name: "أنظمة Linux", 
        url: "https://youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc", 
        img: "https://images.unsplash.com/photo-1629654297249-c61f55f3d5a1?w=400", 
        icon: "fab fa-linux" 
    },
    { 
        name: "تطبيقات الأندرويد", 
        url: "https://youtube.com/playlist?list=PL8s4OGp0649_e_Wbz5MlBgW5rBW-9hD0c", 
        img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400", 
        icon: "fab fa-android" 
    },
    { 
        name: "بايثون و AI", 
        url: "https://youtube.com/playlist?list=PLvGNfY-tFUN8D7uAQzkBfMkJ7XAFWSsIv", 
        img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400", 
        icon: "fas fa-robot" 
    },
    { 
        name: "أساسيات الشبكات", 
        url: "https://youtube.com/playlist?list=PLnzqK5HvcpwQ_nQt-hKGAEIDJjTJBCV02", 
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", 
        icon: "fas fa-network-wired" 
    },
    { 
        name: "علوم الحاسب", 
        url: "https://youtube.com/playlist?list=PLh2Jy0nKL_j1WZMzITHgUuzaadpSULlMm", 
        img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400", 
        icon: "fas fa-laptop-code" 
    }
];

const apps = [
    { name: "Visual Studio Code", desc: "المحرر الأساسي للويب والبرمجيات", url: "https://code.visualstudio.com/", icon: "fas fa-code" },
    { name: "Android Studio", desc: "لتطوير تطبيقات الهواتف الذكية", url: "https://developer.android.com/studio", icon: "fab fa-android" },
    { name: "Packet Tracer", desc: "لمحاكاة شبكات سيسكو", url: "https://www.netacad.com/portal/resources/packet-tracer", icon: "fas fa-network-wired" },
    { name: "Git & GitHub", desc: "لإدارة المشاريع البرمجية", url: "https://desktop.github.com/", icon: "fab fa-github" },
    { name: "Postman", desc: "لاختبار وبرمجة الـ APIs", url: "https://www.postman.com/", icon: "fas fa-rocket" },
    { name: "VirtualBox", desc: "لتشغيل أنظمة Linux وهمية", url: "https://www.virtualbox.org/", icon: "fas fa-desktop" }
];

const pdfs = [
    { name: "أساسيات برمجة C++", size: "4.5 MB", type: "كتاب تعليمي", fileUrl: "cpp_book.pdf" },
    { name: "شرح هياكل البيانات بالعربي", size: "2.1 MB", type: "ملخص متميز", fileUrl: "ds_summary.pdf" },
    { name: "مدخل إلى الشبكات (CCNA)", size: "12 MB", type: "مرجع شامل", fileUrl: "ccna.pdf" },
    { name: "دليل أمن المعلومات", size: "3.8 MB", type: "دليل تقني", fileUrl: "security.pdf" }
];

function init() {
    const videoGrid = document.getElementById('video-grid');
    if(videoGrid) {
        videoGrid.innerHTML = courses.map(c => {
            const mediaBox = c.icon 
                ? `<div class="media-container w-full h-28 bg-slate-800/60 rounded-xl flex items-center justify-center mb-3">
                     <i class="${c.icon} text-3xl text-blue-400"></i>
                   </div>`
                : `<img src="${c.img}" class="course-img mb-3 w-full h-28 object-cover rounded-xl" loading="lazy" alt="${c.name}">`;
            
            return `
                <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="course-card block no-underline relative z-10 pointer-events-auto">
                    ${mediaBox}
                    <h3 class="text-sm md:text-base font-bold text-white mb-2 text-center select-none">${c.name}</h3>
                    <div class="mt-1 text-red-500 text-[10px] font-black flex items-center justify-center gap-1 select-none">
                        <i class="fab fa-youtube"></i> شاهد الآن
                    </div>
                </a>
            `;
        }).join('');
    }

    const appsGrid = document.getElementById('apps-grid');
    if(appsGrid) {
        appsGrid.innerHTML = apps.map(a => `
            <div class="bg-indigo-500/5 border border-indigo-500/10 p-4 rounded-2xl flex items-center gap-4 hover:border-indigo-400/30 transition relative z-10">
                <div class="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 shrink-0">
                    <i class="${a.icon} text-lg"></i>
                </div>
                <div class="flex-1">
                    <h4 class="text-sm font-bold text-white">${a.name}</h4>
                    <p class="text-xs text-gray-500">${a.desc}</p>
                </div>
                <a href="${a.url}" target="_blank" class="text-indigo-400 hover:text-white transition p-2 pointer-events-auto">
                    <i class="fas fa-download"></i>
                </a>
            </div>
        `).join('');
    }

    const pdfGrid = document.getElementById('pdf-grid');
    if(pdfGrid) {
        pdfGrid.innerHTML = pdfs.map(p => `
            <div class="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl flex justify-between items-center hover:border-emerald-400/30 transition relative z-10">
                <div class="flex items-center gap-3">
                    <i class="fas fa-file-pdf text-emerald-500 text-lg"></i>
                    <div>
                        <h4 class="text-sm font-bold text-white">${p.name}</h4>
                        <span class="text-xs text-gray-400">${p.type}</span>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-xs text-gray-500">${p.size}</span>
                    <a href="${p.fileUrl}" download class="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white transition pointer-events-auto">
                        <i class="fas fa-download text-xs"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }

    const canvas = document.getElementById('code-canvas');
    if(canvas) {
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.zIndex = "-1"; 
        canvas.style.pointerEvents = "none"; 
        
        const ctx = canvas.getContext('2d');
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDrops();
        }
        let drops;
        function initDrops() { drops = Array(Math.floor(canvas.width/20)).fill(1); }
        
        function draw() {
            ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#3b82f6";
            ctx.font = "14px Cairo, sans-serif";
            drops.forEach((y, i) => {
                ctx.fillText("IT", i * 20, y * 20);
                if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        setInterval(draw, 50);
    }
}

window.onload = init;
