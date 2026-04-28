// مصفوفة الـ 12 كورس كاملة بدون أي حذف
const courses = [
    { name: "C++ الاحترافية", url: "https://youtube.com/playlist?list=PLhiFu-f80eo-h0whWvRsE1KL_A08wpmSB", img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400" },
    { name: "هياكل البيانات", url: "https://youtube.com/playlist?list=PLnzqK5HvcpwQ_nQt-hKGAEIDJjTJBCV02", img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400" },
    { name: "Java Programming", url: "https://youtube.com/playlist?list=PLoP3S2S1qTfCUdNazAZY1LFALcUr0Vbs9", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400" },
    { name: "هندسة البرمجيات", url: "https://youtube.com/playlist?list=PLh2Jy0nKL_j1WZMzITHgUuzaadpSULlMm", img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400" },
    { name: "قواعد البيانات SQL", url: "https://youtube.com/playlist?list=PL8s4OGp0649_e_Wbz5MlBgW5rBW-9hD0c", img: "https://images.unsplash.com/photo-1544383333-545bd7797bd0?w=400" },
    { name: "تطوير الويب", url: "https://youtube.com/playlist?list=PLvGNfY-tFUN8D7uAQzkBfMkJ7XAFWSsIv", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400" },
    { name: "الأمن السيبراني", url: "https://youtube.com/playlist?list=PLsWFuR2EEv1uIV2vzqAhSa8gI6IG9dMpc", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400" },
    { name: "أنظمة Linux", url: "https://youtube.com/playlist?list=PLuXY3ddo_8nzUrgCyaX_WEIJljx_We-c1", img: "https://images.unsplash.com/photo-1629654297249-c61f55f3d5a1?w=400" },
    { name: "تطبيقات الأندرويد", url: "https://youtube.com/playlist?list=PLoP3S2S1qTCVIETOGwaK3lyaL3UKu403", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400" },
    { name: "بايثون و AI", url: "https://youtube.com/playlist?list=PLknwEmKsW8OuN04Odt2sJqt4aAnkp-iYA", img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400" },
    { name: "أساسيات الشبكات", url: "https://youtube.com/playlist?list=PL93xoMrxRJIuicqcd1UpFUYMfWKGp7JmI", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400" },
    { name: "علوم الحاسب", url: "https://youtube.com/playlist?list=PLeRlpfJzFz6--6rxdfzi3bfSfeRc3yaPW", img: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=400" }
];

const apps = [
    { name: "Visual Studio Code", desc: "المحرر الأساسي للويب والبرمجيات", url: "https://code.visualstudio.com/", icon: "fa-code" },
    { name: "Android Studio", desc: "لتطوير تطبيقات الهواتف الذكية", url: "https://developer.android.com/studio", icon: "fa-android" },
    { name: "Packet Tracer", desc: "لمحاكاة شبكات سيسكو", url: "https://www.netacad.com/portal/resources/packet-tracer", icon: "fa-network-wired" },
    { name: "Git & GitHub", desc: "لإدارة المشاريع البرمجية", url: "https://desktop.github.com/", icon: "fa-github" },
    { name: "Postman", desc: "لاختبار وبرمجة الـ APIs", url: "https://www.postman.com/", icon: "fa-rocket" },
    { name: "VirtualBox", desc: "لتشغيل أنظمة Linux وهمية", url: "https://www.virtualbox.org/", icon: "fa-desktop" }
];

const pdfs = [
    { name: "أساسيات برمجة C++", size: "4.5 MB", type: "كتاب تعليمي", fileUrl: "cpp_book.pdf" },
    { name: "شرح هياكل البيانات بالعربي", size: "2.1 MB", type: "ملخص متميز", fileUrl: "ds_summary.pdf" },
    { name: "مدخل إلى الشبكات (CCNA)", size: "12 MB", type: "مرجع شامل", fileUrl: "ccna.pdf" },
    { name: "دليل أمن المعلومات", size: "3.8 MB", type: "دليل تقني", fileUrl: "security.pdf" }
];

function init() {
    // 1. حقن الـ 12 كورس كاملة
    const videoGrid = document.getElementById('video-grid');
    if(videoGrid) {
        videoGrid.innerHTML = courses.map(c => `
            <a href="${c.url}" target="_blank" class="course-card block text-center no-underline">
                <img src="${c.img}" class="course-img mb-3" loading="lazy">
                <h4 class="text-[10px] font-bold text-white">${c.name}</h4>
                <div class="mt-2 text-red-500 text-[8px] font-black"><i class="fab fa-youtube"></i> شاهد الآن</div>
            </a>
        `).join('');
    }

    // 2. حقن التطبيقات كاملة
    const appsGrid = document.getElementById('apps-grid');
    if(appsGrid) {
        appsGrid.innerHTML = apps.map(a => `
            <div class="bg-indigo-500/5 border border-indigo-500/10 p-4 rounded-2xl flex items-center gap-4">
                <div class="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                    <i class="fas ${a.icon} text-lg"></i>
                </div>
                <div class="flex-1">
                    <h4 class="text-[10px] font-bold">${a.name}</h4>
                    <p class="text-[8px] text-gray-500">${a.desc}</p>
                </div>
                <a href="${a.url}" target="_blank" class="text-indigo-400 hover:text-white transition">
                    <i class="fas fa-download"></i>
                </a>
            </div>
        `).join('');
    }

    // 3. حقن المكتبة مع "أداة التنزيل" المضافة
    const pdfGrid = document.getElementById('pdf-grid');
    if(pdfGrid) {
        pdfGrid.innerHTML = pdfs.map(p => `
            <div class="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-2xl flex justify-between items-center group">
                <div class="flex items-center gap-3">
                    <i class="fas fa-file-pdf text-emerald-500 text-lg"></i>
                    <div>
                        <h4 class="text-[10px] font-bold text-white">${p.name}</h4>
                        <span class="text-[8px] text-gray-400">${p.type}</span>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-[8px] text-gray-500">${p.size}</span>
                    <a href="${p.fileUrl}" download class="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white transition">
                        <i class="fas fa-download text-[10px]"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // 4. تأثير الماتريكس
    const canvas = document.getElementById('code-canvas');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const drops = Array(Math.floor(canvas.width/20)).fill(1);
        function draw() {
            ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#3b82f6";
            ctx.font = "15px Arial";
            drops.forEach((y, i) => {
                ctx.fillText("IT", i * 20, y * 20);
                if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
        }
        setInterval(draw, 50);
    }
}
window.onload = init;