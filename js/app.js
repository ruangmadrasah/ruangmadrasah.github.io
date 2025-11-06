// Global application state
window.appState = {
    allClasses: [],
    allStudents: [],
    allJurnalMengajar: [],
    allJurnal: [],
    allUsers: [],
    currentPageJurnalMengajar: 1, 
    pengaturan: { 
        skorMutqin: { 
            'sangat-lancar': 100, 'lancar': 90, 'cukup-lancar': 70, 
            'tidak-lancar': 50, 'sangat-tidak-lancar': 30
        },
        lingkupHafalan: 'full'
    },
    currentTest: {
    isActive: false,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    settings: {},
    studentIds: [],
},
    currentPagePencapaian: 1,
    currentPageRiwayat: 1,
    loggedInRole: null,
    currentDetailStudentId: null,
    currentDetailHistoryView: 'setoran',
    currentDetailHistoryPage: 1,
    currentDetailJuzView: 1,
    adminAkunFilterClassId: null
};
const surahList = [ { no: 1, nama: "Al-Fatihah", ayat: 7 }, { no: 2, nama: "Al-Baqarah", ayat: 286 }, { no: 3, nama: "Ali 'Imran", ayat: 200 }, { no: 4, nama: "An-Nisa'", ayat: 176 }, { no: 5, nama: "Al-Ma'idah", ayat: 120 }, { no: 6, nama: "Al-An'am", ayat: 165 }, { no: 7, nama: "Al-A'raf", ayat: 206 }, { no: 8, nama: "Al-Anfal", ayat: 75 }, { no: 9, nama: "At-Taubah", ayat: 129 }, { no: 10, nama: "Yunus", ayat: 109 }, { no: 11, nama: "Hud", ayat: 123 }, { no: 12, nama: "Yusuf", ayat: 111 }, { no: 13, nama: "Ar-Ra'd", ayat: 43 }, { no: 14, nama: "Ibrahim", ayat: 52 }, { no: 15, nama: "Al-Hijr", ayat: 99 }, { no: 16, nama: "An-Nahl", ayat: 128 }, { no: 17, nama: "Al-Isra'", ayat: 111 }, { no: 18, nama: "Al-Kahf", ayat: 110 }, { no: 19, nama: "Maryam", ayat: 98 }, { no: 20, nama: "Taha", ayat: 135 }, { no: 21, nama: "Al-Anbiya'", ayat: 112 }, { no: 22, nama: "Al-Hajj", ayat: 78 }, { no: 23, nama: "Al-Mu'minun", ayat: 118 }, { no: 24, nama: "An-Nur", ayat: 64 }, { no: 25, nama: "Al-Furqan", ayat: 77 }, { no: 26, nama: "Asy-Syu'ara'", ayat: 227 }, { no: 27, nama: "An-Naml", ayat: 93 }, { no: 28, nama: "Al-Qasas", ayat: 88 }, { no: 29, nama: "Al-'Ankabut", ayat: 69 }, { no: 30, nama: "Ar-Rum", ayat: 60 }, { no: 31, nama: "Luqman", ayat: 34 }, { no: 32, nama: "As-Sajdah", ayat: 30 }, { no: 33, nama: "Al-Ahzab", ayat: 73 }, { no: 34, nama: "Saba'", ayat: 54 }, { no: 35, nama: "Fatir", ayat: 45 }, { no: 36, nama: "Yasin", ayat: 83 }, { no: 37, nama: "As-Saffat", ayat: 182 }, { no: 38, nama: "Sad", ayat: 88 }, { no: 39, nama: "Az-Zumar", ayat: 75 }, { no: 40, nama: "Ghafir", ayat: 85 }, { no: 41, nama: "Fussilat", ayat: 54 }, { no: 42, nama: "Asy-Syura", ayat: 53 }, { no: 43, nama: "Az-Zukhruf", ayat: 89 }, { no: 44, nama: "Ad-Dukhan", ayat: 59 }, { no: 45, nama: "Al-Jasiyah", ayat: 37 }, { no: 46, nama: "Al-Ahqaf", ayat: 35 }, { no: 47, nama: "Muhammad", ayat: 38 }, { no: 48, nama: "Al-Fath", ayat: 29 }, { no: 49, nama: "Al-Hujurat", ayat: 18 }, { no: 50, nama: "Qaf", ayat: 45 }, { no: 51, nama: "Az-Zariyat", ayat: 60 }, { no: 52, nama: "At-Tur", ayat: 49 }, { no: 53, nama: "An-Najm", ayat: 62 }, { no: 54, nama: "Al-Qamar", ayat: 55 }, { no: 55, nama: "Ar-Rahman", ayat: 78 }, { no: 56, nama: "Al-Waqi'ah", ayat: 96 }, { no: 57, nama: "Al-Hadid", ayat: 29 }, { no: 58, nama: "Al-Mujadalah", ayat: 22 }, { no: 59, nama: "Al-Hasyr", ayat: 24 }, { no: 60, nama: "Al-Mumtahanah", ayat: 13 }, { no: 61, nama: "As-Saff", ayat: 14 }, { no: 62, nama: "Al-Jumu'ah", ayat: 11 }, { no: 63, nama: "Al-Munafiqun", ayat: 11 }, { no: 64, nama: "At-Tagabun", ayat: 18 }, { no: 65, nama: "At-Talaq", ayat: 12 }, { no: 66, nama: "At-Tahrim", ayat: 12 }, { no: 67, nama: "Al-Mulk", ayat: 30 }, { no: 68, nama: "Al-Qalam", ayat: 52 }, { no: 69, nama: "Al-Haqqah", ayat: 52 }, { no: 70, nama: "Al-Ma'arij", ayat: 44 }, { no: 71, nama: "Nuh", ayat: 28 }, { no: 72, nama: "Al-Jinn", ayat: 28 }, { no: 73, nama: "Al-Muzzammil", ayat: 20 }, { no: 74, nama: "Al-Muddassir", ayat: 56 }, { no: 75, nama: "Al-Qiyamah", ayat: 40 }, { no: 76, nama: "Al-Insan", ayat: 31 }, { no: 77, nama: "Al-Mursalat", ayat: 50 }, { no: 78, nama: "An-Naba'", ayat: 40 }, { no: 79, nama: "An-Nazi'at", ayat: 46 }, { no: 80, nama: "'Abasa", ayat: 42 }, { no: 81, nama: "At-Takwir", ayat: 29 }, { no: 82, nama: "Al-Infitar", ayat: 19 }, { no: 83, nama: "Al-Mutaffifin", ayat: 36 }, { no: 84, nama: "Al-Insyiqaq", ayat: 25 }, { no: 85, nama: "Al-Buruj", ayat: 22 }, { no: 86, nama: "At-Tariq", ayat: 17 }, { no: 87, nama: "Al-A'la", ayat: 19 }, { no: 88, nama: "Al-Gasyiyah", ayat: 26 }, { no: 89, nama: "Al-Fajr", ayat: 30 }, { no: 90, nama: "Al-Balad", ayat: 20 }, { no: 91, nama: "Asy-Syams", ayat: 15 }, { no: 92, nama: "Al-Lail", ayat: 21 }, { no: 93, nama: "Ad-Duha", ayat: 11 }, { no: 94, nama: "Asy-Syarh", ayat: 8 }, { no: 95, nama: "At-Tin", ayat: 8 }, { no: 96, nama: "Al-'Alaq", ayat: 19 }, { no: 97, nama: "Al-Qadr", ayat: 5 }, { no: 98, nama: "Al-Bayyinah", ayat: 8 }, { no: 99, nama: "Az-Zalzalah", ayat: 8 }, { no: 100, nama: "Al-'Adiyat", ayat: 11 }, { no: 101, nama: "Al-Qari'ah", ayat: 11 }, { no: 102, nama: "At-Takasur", ayat: 8 }, { no: 103, nama: "Al-'Asr", ayat: 3 }, { no: 104, nama: "Al-Humazah", ayat: 9 }, { no: 105, nama: "Al-Fil", ayat: 5 }, { no: 106, nama: "Quraisy", ayat: 4 }, { no: 107, nama: "Al-Ma'un", ayat: 7 }, { no: 108, nama: "Al-Kausar", ayat: 3 }, { no: 109, nama: "Al-Kafirun", ayat: 6 }, { no: 110, nama: "An-Nasr", ayat: 3 }, { no: 111, nama: "Al-Masad", ayat: 5 }, { no: 112, nama: "Al-Ikhlas", ayat: 4 }, { no: 113, nama: "Al-Falaq", ayat: 5 }, { no: 114, nama: "An-Nas", ayat: 6 } ];
// --- TAMBAHAN BARU: Data Juz Global ---

// Data ini mendefinisikan ayat pertama dari setiap juz
const juzBoundaries = [
    { juz: 1, start: { s: 1, a: 1 } },   { juz: 2, start: { s: 2, a: 142 } }, { juz: 3, start: { s: 2, a: 253 } },
    { juz: 4, start: { s: 3, a: 93 } },  { juz: 5, start: { s: 4, a: 24 } },  { juz: 6, start: { s: 4, a: 148 } },
    { juz: 7, start: { s: 5, a: 82 } },  { juz: 8, start: { s: 6, a: 111 } }, { juz: 9, start: { s: 7, a: 88 } },
    { juz: 10, start: { s: 8, a: 41 } }, { juz: 11, start: { s: 9, a: 93 } }, { juz: 12, start: { s: 11, a: 6 } },
    { juz: 13, start: { s: 12, a: 53 } },{ juz: 14, start: { s: 15, a: 1 } }, { juz: 15, start: { s: 17, a: 1 } },
    { juz: 16, start: { s: 18, a: 75 } },{ juz: 17, start: { s: 21, a: 1 } }, { juz: 18, start: { s: 23, a: 1 } },
    { juz: 19, start: { s: 25, a: 21 } },{ juz: 20, start: { s: 27, a: 56 } },{ juz: 21, start: { s: 29, a: 46 } },
    { juz: 22, start: { s: 33, a: 31 } },{ juz: 23, start: { s: 36, a: 28 } },{ juz: 24, start: { s: 39, a: 32 } },
    { juz: 25, start: { s: 41, a: 47 } },{ juz: 26, start: { s: 46, a: 1 } },  { juz: 27, start: { s: 51, a: 31 } },
    { juz: 28, start: { s: 58, a: 1 } },  { juz: 29, start: { s: 67, a: 1 } }, { juz: 30, start: { s: 78, a: 1 } }
];

/**
 * Helper untuk menentukan juz dari surah dan ayat
 */
function getJuzForAyat(surahNo, ayatNo) {
    for (let i = juzBoundaries.length - 1; i >= 0; i--) {
        if (surahNo > juzBoundaries[i].start.s || (surahNo === juzBoundaries[i].start.s && ayatNo >= juzBoundaries[i].start.a)) {
            return juzBoundaries[i].juz;
        }
    }
    return 0; // Seharusnya tidak terjadi
}

/**
 * Membuat peta <juzNo, Array<surahInfo>>
 * Ini akan berisi surah apa saja yang ada di tiap juz, beserta rentang ayatnya.
 */
const juzToSurahMap = new Map();
for (let juz = 1; juz <= 30; juz++) {
    juzToSurahMap.set(juz, []);
}

// Loop semua surah dan semua ayat untuk membangun peta
surahList.forEach(surah => {
    for (let ayat = 1; ayat <= surah.ayat; ayat++) {
        let juz = getJuzForAyat(surah.no, ayat);
        if (juz > 0) {
            let surahInJuzList = juzToSurahMap.get(juz);
            let surahEntry = surahInJuzList.find(s => s.surahNo === surah.no);

            if (!surahEntry) {
                // Jika ini ayat pertama dari surah ini di juz ini
                surahEntry = { 
                    surahNo: surah.no, 
                    nama: surah.nama, 
                    totalAyatSurah: surah.ayat, // Total ayat di surah (untuk referensi)
                    ayatDari: ayat, // Ayat mulai di juz ini
                    ayatSampai: ayat // Ayat selesai di juz ini
                };
                surahInJuzList.push(surahEntry);
            } else {
                // Perbarui ayat terakhir
                surahEntry.ayatSampai = ayat;
            }
        }
    }
});
// --- AKHIR TAMBAHAN BARU ---
document.addEventListener('DOMContentLoaded', () => {
    window.quranCache = {};    
    try {
    // --- Toast Notification ---
    let toastTimeout;
    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast-notification');
        const toastMessage = document.getElementById('toast-message');
        if (!toast || !toastMessage) return;
        clearTimeout(toastTimeout);
        toastMessage.textContent = message;
        toast.className = 'fixed top-5 right-5 text-white py-3 px-5 rounded-lg shadow-lg z-50'; // Reset
        toast.classList.add('show', type);
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
 /**
 * Menganimasikan angka dari nilai saat ini ke nilai target.
 * @param {HTMLElement} el - Elemen HTML yang akan dianimasikan.
 * @param {number} target - Angka akhir.
 * @param {number} duration - Durasi animasi dalam milidetik.
 * @param {boolean} isFloat - Apakah ini angka desimal (float)?
 */
function animateCountUp(el, target, duration = 1000, isFloat = false) {
    if (!el) return;

    let start;
    if (isFloat) {
        // Ubah "0,5" (string) menjadi 0.5 (angka)
        start = parseFloat(el.textContent.replace(/[^0-9,-]/g, '').replace(',', '.')) || 0;
    } else {
        // Angka bulat biasa
        start = parseInt(el.textContent.replace(/[^0-9-]/g, ''), 10) || 0;
    }

    if (isNaN(start)) {
        start = 0;
    }

    // Jika nilai sudah sama, atur teks yang benar dan hentikan
    if (start === target) {
        el.textContent = isFloat ? target.toString().replace('.', ',') : target;
        return;
    }

    let startTime = null;

    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Efek easeOut

        let current;
        if (isFloat) {
            current = (easedProgress * (target - start) + start);
            // Ubah 0.5 (angka) kembali menjadi "0,5" (string)
            el.textContent = current.toFixed(1).replace('.', ',');
        } else {
            current = Math.floor(easedProgress * (target - start) + start);
            el.textContent = current;
        }

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            // Pastikan nilai akhir tepat
            el.textContent = isFloat ? target.toFixed(1).replace('.', ',') : target;
        }
    };

    requestAnimationFrame(step);
}
    let debounceTimeout;
    function debounce(func, delay = 100) {
        return function(...args) {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }
        // Membuat dan menyuntikkan link manifest
        const manifestJsonText = document.getElementById('manifest-json').textContent;
        const manifestBlob = new Blob([manifestJsonText], { type: 'application/json' });
        const manifestUrl = URL.createObjectURL(manifestBlob);
        const manifestLink = document.createElement('link');
        manifestLink.rel = 'manifest';
        manifestLink.href = manifestUrl;
        document.head.appendChild(manifestLink);

        // Mendaftarkan service worker dari file sw.js
        if ('serviceWorker' in navigator) {
           // navigator.serviceWorker.register('/sw.js') // <-- CUKUP PANGGIL NAMA FILE-NYA
             //   .then(registration => {
               //     console.log('ServiceWorker pendaftaran berhasil dengan scope: ', registration.scope);
                //})
                //.catch(error => {
                  //  console.log('ServiceWorker pendaftaran gagal: ', error);
                //});
        }
    } catch (e) {
        console.error("Gagal melakukan setup PWA:", e);
    }
/**
     * Mengecek apakah setoran baru merupakan Ziyadah atau Muraja'ah.
     * @param {string} studentId - ID Siswa.
     * @param {number} surahNo - Nomor Surah.
     * @param {number} ayatDari - Ayat Mulai.
     * @param {number} ayatSampai - Ayat Selesai.
     * @returns {'ziyadah' | 'murajaah'} - Jenis setoran.
     */
function checkZiyadahOrMurajaah(studentId, surahNo, ayatDari, ayatSampai) {
    if (!window.appState.allHafalan) return 'ziyadah'; 

    const previousZiyadah = window.appState.allHafalan.filter(h => 
        h.studentId === studentId && 
        h.jenis === 'ziyadah' &&
        String(h.surahNo) === String(surahNo)
    );

    const memorizedVerses = new Set();
    previousZiyadah.forEach(entry => {
        // PERBAIKAN: Handle entri terbalik dari database (jika ada)
        const [start, end] = [parseInt(entry.ayatDari), parseInt(entry.ayatSampai)];
        const [minDB, maxDB] = [Math.min(start, end), Math.max(start, end)];
        for (let i = minDB; i <= maxDB; i++) {
            memorizedVerses.add(i);
        }
    });

    // PERBAIKAN: Handle input terbalik (e.g., 5-1)
    const [startInput, endInput] = [parseInt(ayatDari), parseInt(ayatSampai)];
    const [minInput, maxInput] = [Math.min(startInput, endInput), Math.max(startInput, endInput)];

    let isAllRepeated = true;
    for (let i = minInput; i <= maxInput; i++) {
        if (!memorizedVerses.has(i)) {
            isAllRepeated = false;
            break;
        }
    }
    return isAllRepeated ? 'murajaah' : 'ziyadah';
}
// --- LOGIN & UI SETUP ---
const ui = {
    loginView: document.getElementById('login-view'),
    loginForm: document.getElementById('login-form'),
    loginError: document.getElementById('login-error'),
    usernameInput: document.getElementById('username'),
    passwordInput: document.getElementById('password'),
    app: document.getElementById('app'),
    loader: document.getElementById('loader'),

    // --- BARU ---
    sidebarNav: document.getElementById('sidebar-nav'), // Opsional, jika perlu
    bottomNav: document.getElementById('bottom-nav'),   // Opsional, jika perlu
    sidebarLinks: document.querySelectorAll('#sidebar-nav .sidebar-link'),
    bottomNavLinks: document.querySelectorAll('#bottom-nav .bottom-nav-link'),
    profileMenuLinks: document.querySelectorAll('#profil-page .card a[data-page]'), // Link di dalam profil

    mainContentView: document.getElementById('main-content-view'),
    homeBtn: document.getElementById('home-btn'), // Tetap ada, meski mungkin disembunyikan
    pages: document.querySelectorAll('#page-content > .page'), // Targetkan .page di dalam #page-content
    pageTitle: document.getElementById('page-title'),
    addStudentModal: document.getElementById('add-student-modal'),
    addStudentModalBtn: document.getElementById('add-student-modal-btn'),
    cancelAddStudentBtn: document.getElementById('cancel-add-student'),
    profile: {
        // ... (sisa properti profile tidak berubah)
        form: document.getElementById('profile-form'),
        fullNameInput: document.getElementById('profile-fullname'),
        pobInput: document.getElementById('profile-pob'),
        picturePreview: document.getElementById('profile-picture-preview'),
        pictureInput: document.getElementById('profile-picture-input'),
        saveBtn: document.getElementById('save-profile-btn'),
        progressContainer: document.getElementById('upload-progress-container'),
        progressBar: document.getElementById('upload-progress'),
    },
    daftarHadir: {
            filterKelas: document.getElementById('hadir-filter-kelas'),
            filterBulan: document.getElementById('hadir-filter-bulan'),
            filterTahun: document.getElementById('hadir-filter-tahun'),
            container: document.getElementById('daftar-hadir-container'),
        },
jurnalMengajar: {
            form: document.getElementById('jurnal-mengajar-form'),
            submitBtn: document.getElementById('jurnal-submit-btn'),
            cancelBtn: document.getElementById('jurnal-cancel-edit-btn'),
            editId: document.getElementById('jurnal-edit-id'),
            timestamp: document.getElementById('jurnal-timestamp'),
            kelasSelect: document.getElementById('jurnal-kelas-select'),
            matapelajaran: document.getElementById('jurnal-matapelajaran'),
            capaian: document.getElementById('jurnal-capaian'),
            absensi: document.getElementById('jurnal-absensi'), // Ini adalah textarea yg disembunyikan
            absensiContainer: document.getElementById('jurnal-absensi-siswa-container'), // <-- TAMBAHKAN
            absensiPlaceholder: document.getElementById('jurnal-absensi-placeholder'), // <-- TAMBAHKAN
            absensiList: document.getElementById('jurnal-absensi-siswa-list'), // <-- TAMBAHKAN
            list: document.getElementById('jurnal-mengajar-list'),
            pagination: document.getElementById('jurnal-mengajar-pagination'),
        },
    // ... (sisa properti ui seperti pinModal, guruPinSettings, dll tidak berubah)
    pinModal: {
        el: document.getElementById('pin-modal'),
        form: document.getElementById('pin-form'),
        input: document.getElementById('pin-input'),
        error: document.getElementById('pin-error'),
        okBtn: document.getElementById('pin-modal-ok'),
        cancelBtn: document.getElementById('pin-modal-cancel'),
    },
    guruPinSettings: {
        card: document.getElementById('guru-pin-settings-card'),
        form: document.getElementById('guru-pin-form'),
        input: document.getElementById('guru-pin-input'),
    },
    mutqinSettings: {
       card: document.getElementById('mutqin-settings-card'),
    },
     profileSetupModal: {
        el: document.getElementById('profile-setup-modal'),
        form: document.getElementById('profile-setup-form'),
        namaLengkapInput: document.getElementById('setup-nama-lengkap'),
        ttlInput: document.getElementById('setup-ttl'),
        pinContainer: document.getElementById('setup-pin-container'),
        pinInput: document.getElementById('setup-pin'),
        submitBtn: document.getElementById('profile-setup-submit-btn')
    },
};
/**
 * Helper untuk menampilkan modal dan mengunci scroll body.
 * @param {HTMLElement} modalElement - Elemen modal yang ingin ditampilkan.
 */
function showModal(modalElement) {
    if (!modalElement) return;
    modalElement.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Kunci scroll body
}

/**
 * Helper untuk menyembunyikan modal dan mengembalikan scroll body.
 * @param {HTMLElement} modalElement - Elemen modal yang ingin disembunyikan.
 */
function hideModal(modalElement) {
    if (!modalElement) return;
    modalElement.classList.add('hidden');
    document.body.style.overflow = ''; // Kembalikan scroll body
}

    const togglePasswordBtn = document.getElementById('toggle-password');
    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener('click', () => {
            const passwordInput = document.getElementById('password');
            const eyeIcon = document.getElementById('eye-icon');
            const eyeOffIcon = document.getElementById('eye-off-icon');
            
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            eyeIcon.classList.toggle('hidden', isPassword);
            eyeOffIcon.classList.toggle('hidden', !isPassword);
        });
    }
            /**
         * Fungsi serbaguna untuk menambahkan fungsionalitas toggle password/PIN.
         * @param {string} buttonId - ID dari tombol ikon mata.
         * @param {string} inputId - ID dari input field (password/PIN).
         * @param {string} eyeIconId - ID dari SVG ikon mata terbuka.
         * @param {string} eyeOffIconId - ID dari SVG ikon mata tertutup.
         */
        function setupPasswordToggle(buttonId, inputId, eyeIconId, eyeOffIconId) {
            const toggleBtn = document.getElementById(buttonId);
            const input = document.getElementById(inputId);
            const eyeIcon = document.getElementById(eyeIconId);
            const eyeOffIcon = document.getElementById(eyeOffIconId);

            if (toggleBtn && input && eyeIcon && eyeOffIcon) {
                toggleBtn.addEventListener('click', () => {
                    const isPassword = input.type === 'password';
                    input.type = isPassword ? 'text' : 'password';
                    // Tampilkan/sembunyikan ikon yang sesuai
                    eyeIcon.classList.toggle('hidden', isPassword);
                    eyeOffIcon.classList.toggle('hidden', !isPassword);
                });
            }
        }

        // Panggil fungsi untuk setiap input PIN yang telah kita ubah di HTML
        setupPasswordToggle('toggle-guru-pin', 'guru-pin-input', 'guru-pin-eye-icon', 'guru-pin-eye-off-icon');
        //setupPasswordToggle('toggle-verify-pin', 'pin-input', 'verify-pin-eye-icon', 'verify-pin-eye-off-icon');
        setupPasswordToggle('toggle-setup-pin', 'setup-pin', 'setup-pin-eye-icon', 'setup-pin-eye-off-icon');
        const loggedInRole = sessionStorage.getItem('loggedInRole');
        const lembagaId = sessionStorage.getItem('lembagaId');
        const currentUserUID = sessionStorage.getItem('currentUserUID');
        if (loggedInRole && lembagaId && currentUserUID) {
            window.appState.loggedInRole = loggedInRole;
            window.appState.lembagaId = lembagaId;
            window.appState.currentUserUID = currentUserUID;
            startApp(loggedInRole, lembagaId, currentUserUID);
        }

function handleLogout() {
    auth.signOut().then(() => {
        sessionStorage.removeItem('loggedInRole');
        sessionStorage.removeItem('lembagaId');
        sessionStorage.removeItem('currentUserUID');

        // --- ▼▼▼ TAMBAHKAN BARIS INI ▼▼▼ ---
        // Bersihkan hash URL (misal: #pengaturan) sebelum reload.
        // Ini akan memaksa app untuk memuat halaman default ('ringkasan')
        history.pushState("", document.title, window.location.pathname + window.location.search);
        // --- ▲▲▲ AKHIR TAMBAHAN ▲▲▲ ---

        window.location.reload();

    }).catch(error => {
        console.error("Logout Gagal:", error);

        // --- ▼▼▼ TAMBAHKAN JUGA DI SINI (JAGA-JAGA) ▼▼▼ ---
        history.pushState("", document.title, window.location.pathname + window.location.search);
        // --- ▲▲▲ AKHIR TAMBAHAN ▲▲▲ ---

        window.location.reload();
    });
}
    
function setupUIForRole(role) {
    // --- BARU: Gabungkan semua link navigasi ---
    const allMenuLinks = [
        ...ui.sidebarLinks,
        ...ui.bottomNavLinks,
        ...ui.profileMenuLinks // Termasuk link di dalam profil
    ];
    // Halaman yang boleh diakses siswa (termasuk yang ada di menu profil)
    const siswaAllowedPages = ['profil', 'ringkasan', 'siswa', 'riwayat', 'tes_hafalan', 'tentang', 'pengaturan'];

    // Halaman yang boleh diakses admin
    const adminAllowedPages = ['profil', 'manajemen_akun', 'tentang', 'kelas'];

    if (role === 'siswa') {
        allMenuLinks.forEach(link => {
            // Sembunyikan link khusus admin
            if (link.dataset.role === 'admin_lembaga') {
                link.classList.add('hidden');
                return;
            }

            const page = link.dataset.page;
            // Sembunyikan link jika halaman tidak diizinkan untuk siswa
            if (page && !siswaAllowedPages.includes(page)) {
                link.classList.add('hidden');
            } else {
                link.classList.remove('hidden'); // Pastikan link yang diizinkan terlihat
            }
        });

        // Sembunyikan tombol spesifik guru
        if (ui.addStudentModalBtn) ui.addStudentModalBtn.classList.add('hidden');
        if (ui.addBulkHafalanBtn) ui.addBulkHafalanBtn.classList.add('hidden');
        // Sembunyikan filter & search di halaman "Input Hafalan"
        const siswaSearch = document.getElementById('siswa-search-student');
        const siswaFilter = document.getElementById('student-filter-class');
        if (siswaSearch) siswaSearch.classList.add('hidden');
        if (siswaFilter) siswaFilter.classList.add('hidden');
        const siswaPageCardHeader = document.querySelector('#siswa-page .card > .flex.justify-between'); 
        if (siswaPageCardHeader) siswaPageCardHeader.classList.add('hidden');

        } else if (role === 'guru') { 
            // Tampilkan semua link KECUALI link admin DAN link 'kelas'
            allMenuLinks.forEach(link => {
                const page = link.dataset.page;
                if (link.dataset.role === 'admin_lembaga' || page === 'kelas') { // <-- TAMBAHKAN || page === 'kelas'
                    link.classList.add('hidden');
                } else {
                    link.classList.remove('hidden');
                }
            });

        // Tampilkan tombol spesifik guru
        if (ui.addStudentModalBtn) ui.addStudentModalBtn.classList.remove('hidden');
        if (ui.addBulkHafalanBtn) ui.addBulkHafalanBtn.classList.remove('hidden');
        // --- ▼▼▼ TAMBAHKAN BLOK INI (untuk memastikan terlihat) ▼▼▼ ---
        const siswaSearch = document.getElementById('siswa-search-student');
        const siswaFilter = document.getElementById('student-filter-class');
        if (siswaSearch) siswaSearch.classList.remove('hidden');
        if (siswaFilter) siswaFilter.classList.remove('hidden');
        const siswaPageCardHeader = document.querySelector('#siswa-page .card > .flex.justify-between');
        if (siswaPageCardHeader) siswaPageCardHeader.classList.remove('hidden');
    
    } else if (role === 'admin_lembaga') {
        // Logika baru untuk Admin
        allMenuLinks.forEach(link => {
            // Tampilkan link admin
            if (link.dataset.role === 'admin_lembaga') {
                link.classList.remove('hidden');
                return;
            }
            
            // Sembunyikan link jika tidak diizinkan untuk admin
            const page = link.dataset.page;
            if (page && !adminAllowedPages.includes(page)) {
                link.classList.add('hidden');
            } else {
                link.classList.remove('hidden');
            }
        });

        // Sembunyikan tombol spesifik guru
        if (ui.addStudentModalBtn) ui.addStudentModalBtn.classList.add('hidden');
        if (ui.addBulkHafalanBtn) ui.addBulkHafalanBtn.classList.add('hidden');
    }
}
// --- BARU: Fungsi helper untuk menyinkronkan status aktif di semua menu ---
function updateNavActiveState(pageId) {
    // ▼▼▼ TAMBAHKAN LOGIKA INI ▼▼▼
    // Tentukan link mana yang harus 'aktif'.
    // Jika kita di 'detail_siswa', anggap 'ringkasan' (Dashboard) yang aktif.
    let activePageLink = pageId;
    if (pageId === 'detail_siswa') {
        activePageLink = 'ringkasan';
    }
    // ▲▲▲ AKHIR TAMBAHAN ▲▲▲

    const allLinks = [
        ...ui.sidebarLinks,
        ...ui.bottomNavLinks,
        ...ui.profileMenuLinks // Termasuk link di dalam profil
    ];

    allLinks.forEach(link => {
        // ▼▼▼ UBAH 'pageId' MENJADI 'activePageLink' ▼▼▼
        if (link.dataset.page === activePageLink) { 
            link.classList.add('active'); // Kelas 'active' dari CSS baru
        } else {
            link.classList.remove('active');
        }
    });
}
    // --- Navigation and History Management ---

function _showPageImpl(pageId) {
    window.scrollTo(0, 0)
    // --- Logika Baru: Ganti halaman dengan toggle kelas .page-active ---
    ui.pages.forEach(p => {
        if (p.id === `${pageId}-page`) {
            p.classList.add('page-active');
        } else {
            p.classList.remove('page-active');
        }
        if (pageId === 'profil' && typeof window.populateProfileForm === 'function') {
    window.populateProfileForm();
}
if (pageId === 'detail_siswa') { 
    
    // 1. Coba ambil ID dari state memori (navigasi normal)
    let studentId = window.appState.currentDetailStudentId;
    
    // 2. Jika tidak ada (karena refresh), coba ambil dari session storage
    if (!studentId) {
        studentId = sessionStorage.getItem('currentDetailStudentId');
        if (studentId) {
            // 3. Jika dapat, pulihkan ke state memori
            window.appState.currentDetailStudentId = studentId;
        }
    }

    // 4. Setelah semua usaha, cek apakah ID berhasil didapatkan
    if (studentId) {
        renderStudentDetailPage(); // Panggil fungsi render
    } else {
        // 5. Jika ID tetap tidak ada, baru tampilkan error dan kembali
        showToast("Gagal memuat detail, silakan kembali.", "error");
        showPage('ringkasan');
    }
} else {
    // Jika pindah ke halaman LAIN (bukan detail_siswa),
    // bersihkan ID siswa dari memori dan session storage
    sessionStorage.removeItem('currentDetailStudentId');
    window.appState.currentDetailStudentId = null;
}
    });

    // Update judul halaman (logika ini tetap sama)
    const pageTitles = { 
        profil: "Profil Saya", ringkasan: "Dashboard", kelas: "Manajemen Kelas", 
        riwayat: "Riwayat", tentang: "Tentang Aplikasi", 
        pengaturan: "Pengaturan", tes_hafalan: "Tes Hafalan", 
        detail_siswa: "Detail Siswa", manajemen_akun: "Manajemen Akun", // <-- TAMBAHKAN INI
        jurnal: "Jurnal Mengajar", // Judul baru untuk 'jurnal-page'
        daftar_hadir: "Daftar Absensi"// Judul baru untuk 'daftar_hadir-page'
    };
let title = pageTitles[pageId] || "Dashboard";
        if (pageId === 'detail_siswa') {
            const studentId = window.appState.currentDetailStudentId;
            const student = studentId ? window.appState.allStudents.find(s => s.id === studentId) : null;
            
            // ▼▼▼ LOGIKA BARU ▼▼▼
            if (student) {
                const studentClass = window.appState.allClasses.find(c => c.id === student.classId);
                const className = studentClass ? studentClass.name : 'Tanpa Kelas';
                // Gabungkan nama dan kelas di sini
                title = `${student.name} (${className})`;
            }
            // ▲▲▲ AKHIR LOGIKA BARU ▲▲▲
        }
    ui.pageTitle.textContent = title;

    // --- BARU: Panggil helper untuk update status 'active' di menu ---
    updateNavActiveState(pageId);

    // --- Logika header actions (tombol ekspor, dll) tetap sama ---
    const headerActions = document.getElementById('header-actions');
    headerActions.innerHTML = ''; // Hapus action sebelumnya
    headerActions.className = 'w-full sm:w-auto flex items-center justify-end gap-2'; // Reset kelas
if (pageId === 'ringkasan' && window.appState.loggedInRole === 'guru') {
    headerActions.innerHTML = `<button id="export-data-btn" class="btn btn-primary w-full sm:w-auto">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Ekspor Hasil Siswa
    </button>`;
} else if (pageId === 'detail_siswa') { // <-- TAMBAHKAN BLOK 'ELSE IF' INI


    // Tambahkan listener untuk tombol kembali
    const backBtn = document.getElementById('back-to-summary-btn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showPage('ringkasan');
        });
    }
        if (pageId === 'ringkasan' && window.appState.loggedInRole === 'guru') {
        headerActions.innerHTML = `<button id="export-data-btn" class="btn btn-primary w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <span>Ekspor Hasil Siswa</span>
        </button>`;
    }
    if (pageId === 'pengaturan' && typeof window.populateSettingsForms === 'function') {
        window.populateSettingsForms();
    }
    if (pageId === 'profil' && typeof window.populateProfileForm === 'function') {
    window.populateProfileForm();
}

// ▼▼▼ PINDAHKAN BLOK INI KE SINI (DI DALAM FUNGSI) ▼▼▼
if (pageId === 'manajemen_akun' && typeof renderManajemenAkunList === 'function') {
    // Panggil render secara manual saat halaman ditunjukkan.
    // Fungsi ini akan otomatis mengecek window.appState.adminAkunFilterClassId
    renderManajemenAkunList();
    if (pageId === 'jurnal') {
            if (typeof populateJurnalMengajarForm === 'function') {
                populateJurnalMengajarForm();
             }
            }
        }
    }
}

    
    function showPage(pageId) {
        const siswaAllowedPages = ['profil', 'ringkasan', 'siswa', 'riwayat', 'tes_hafalan', 'tentang', 'pengaturan'];
        if (window.appState.loggedInRole === 'siswa') {
            if (!siswaAllowedPages.includes(pageId)) {
                console.warn(`Akses ditolak untuk siswa ke halaman: ${pageId}`);
                return; 
            }
        }
    
        const currentHash = window.location.hash.substring(1);
        if (currentHash !== pageId) {
            try {
                history.pushState({ page: pageId }, '', `#${pageId}`);
            } catch (e) {
                console.warn("History API pushState failed:", e);
            }
        }
        _showPageImpl(pageId);
    }
    
window.addEventListener('popstate', (event) => {
    // Cek hash URL sebagai fallback utama
    let page = window.location.hash.substring(1);

    // Jika hash kosong, DAN state juga kosong, baru default ke ringkasan
    if (!page && !event.state?.page) {
        page = 'ringkasan';
    } 
    // Jika state ada, prioritaskan state (navigasi back/fwd normal)
    else if (event.state?.page) {
        page = event.state.page;
    }
    // Jika tidak ada kondisi di atas, 'page' sudah diisi dari hash URL.

    _showPageImpl(page);
});

    window.showToast = showToast;
    function renderStudentDetailStats(studentId) {
    const container = document.getElementById('detail-stats-container');
    if (!container) return;

    const thirtyDaysAgo = new Date().getTime() - (30 * 24 * 60 * 60 * 1000);
    const studentHafalan = window.appState.allHafalan.filter(h => 
        h.studentId === studentId && h.timestamp >= thirtyDaysAgo
    );

    let ziyadahAyat = 0;
    let murajaahAyat = 0;
    let totalTes = 0;
    let totalSkorTes = 0;

    studentHafalan.forEach(h => {
        if (h.jenis === 'ziyadah') {
            ziyadahAyat += (parseInt(h.ayatSampai) - parseInt(h.ayatDari) + 1);
        } else if (h.jenis === 'murajaah') {
            murajaahAyat += (parseInt(h.ayatSampai) - parseInt(h.ayatDari) + 1);
        } else if (h.jenis === 'tes') {
            totalTes++;
            const scoreMatch = h.catatan.match(/Skor:\s*(\d+)/);
            if (scoreMatch) {
                totalSkorTes += parseInt(scoreMatch[1], 10);
            }
        }
    });

    const avgTes = totalTes > 0 ? Math.round(totalSkorTes / totalTes) : 0;

    container.innerHTML = `
        <div class="card p-3 bg-teal-50 text-center">
            <p class="text-2xl font-bold text-teal-700">${ziyadahAyat}</p>
            <p class="text-sm text-teal-600">Ayat Ziyadah</p>
        </div>
        <div class="card p-3 bg-sky-50 text-center">
            <p class="text-2xl font-bold text-sky-700">${murajaahAyat}</p>
            <p class="text-sm text-sky-600">Ayat Muraja'ah</p>
        </div>
        <div class="card p-3 bg-purple-50 text-center">
            <p class="text-2xl font-bold text-purple-700">${totalTes}</p>
            <p class="text-sm text-purple-600">Kali Tes</p>
        </div>
        <div class="card p-3 bg-amber-50 text-center">
            <p class="text-2xl font-bold text-amber-700">${avgTes}%</p>
            <p class="text-sm text-amber-600">Rata-rata Tes</p>
        </div>
    `;
}

// --- FUNGSI BARU (MENGGANTIKAN renderStudentDetailHistory) ---

/**
 * Membuat tombol paginasi untuk riwayat di halaman detail.
 */
function renderStudentDetailHistoryPagination(totalItems, itemsPerPage) {
    const paginationContainer = document.getElementById('detail-history-pagination');
    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (totalPages <= 1) return; // Tidak perlu paginasi jika hanya 1 halaman

    const currentPage = window.appState.currentDetailHistoryPage;

    const createButton = (text, page, isDisabled = false, isActive = false) => {
        const button = document.createElement('button');
        button.innerHTML = text;
        button.disabled = isDisabled;
        button.className = `btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`;
        if (!isDisabled && page) {
            button.onclick = () => {
                window.appState.currentDetailHistoryPage = page;
                renderStudentDetailHistoryList(); // Panggil render list
                // Scroll ke atas list
                document.getElementById('detail-history-list')?.scrollIntoView({ behavior: 'smooth' });
            };
        }
        return button;
    };

    const createEllipsis = () => {
        const span = document.createElement('span');
        span.textContent = '...';
        span.className = 'flex items-center justify-center px-2 py-1 text-slate-500 font-bold';
        return span;
    };
    
    paginationContainer.appendChild(createButton('‹', currentPage - 1, currentPage === 1));

    const pagesToShow = new Set();
    pagesToShow.add(1);
    pagesToShow.add(totalPages);
    if (currentPage > 2) pagesToShow.add(currentPage - 1);
    pagesToShow.add(currentPage);
    if (currentPage < totalPages - 1) pagesToShow.add(currentPage + 1);

    const sortedPages = Array.from(pagesToShow).sort((a, b) => a - b);
    let lastPage = 0;

    for (const page of sortedPages) {
        if (page > lastPage + 1) {
            paginationContainer.appendChild(createEllipsis());
        }
        paginationContainer.appendChild(createButton(page, page, false, page === currentPage));
        lastPage = page;
    }

    paginationContainer.appendChild(createButton('›', currentPage + 1, currentPage === totalPages));
}


/**
 * Mengambil dan merender riwayat hafalan ATAU tes untuk satu siswa dengan paginasi.
 */
function renderStudentDetailHistoryList() {
    const studentId = window.appState.currentDetailStudentId;
    const historyList = document.getElementById('detail-history-list');
    if (!historyList || !studentId) return;

    const view = window.appState.currentDetailHistoryView; // 'setoran' or 'tes'
    const currentPage = window.appState.currentDetailHistoryPage;
    const ITEMS_PER_PAGE = 50; // Sesuai permintaan Anda

    // 1. Filter semua entri untuk siswa ini
    const allStudentHafalan = window.appState.allHafalan.filter(h => h.studentId === studentId);

    // 2. Filter berdasarkan view (setoran atau tes)
    let filteredEntries;
    if (view === 'setoran') {
        filteredEntries = allStudentHafalan.filter(h => h.jenis === 'ziyadah' || h.jenis === 'murajaah');
    } else { // view === 'tes'
        filteredEntries = allStudentHafalan.filter(h => h.jenis === 'tes');
    }

    // 3. Urutkan terbaru di atas
    filteredEntries.sort((a, b) => b.timestamp - a.timestamp);

    // 4. Hitung paginasi
    const totalItems = filteredEntries.length;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedItems = filteredEntries.slice(startIndex, endIndex);

    // 5. Render item
    historyList.innerHTML = ''; // Kosongkan list

    // Maps untuk tampilan
    const surahNameMap = new Map(surahList.map(s => [s.no, s.nama]));
    const kualitasDisplayMap = { 
        'sangat-lancar': 'Sangat Baik', 'lancar': 'Baik',
        'cukup-lancar': 'Cukup', 'tidak-lancar': 'Kurang',
        'sangat-tidak-lancar': 'Tidak Bisa'
    };

    if (paginatedItems.length === 0) {
        const message = view === 'setoran' ? 'Belum ada riwayat setoran.' : 'Belum ada riwayat tes.';
        historyList.innerHTML = `<p class="text-sm text-slate-400 text-center p-4">${message}</p>`;
    } else {
        paginatedItems.forEach(entry => {
            const date = new Date(entry.timestamp).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
            const item = document.createElement('div');
            item.className = 'text-sm p-2 bg-white rounded';

            if (entry.jenis === 'tes') {
                item.innerHTML = `
                    <p class="font-medium text-purple-700">${entry.catatan}</p>
                    <p class="text-xs text-slate-500">${date}</p>
                `;
            } else {
                const surahName = surahNameMap.get(entry.surahNo) || `Surah ${entry.surahNo}`;
                const kualitasText = kualitasDisplayMap[entry.kualitas] || entry.kualitas;
                const jenisLabel = entry.jenis === 'ziyadah' ? 'Ziyadah' : 'Muraja\'ah';
                const jenisColor = entry.jenis === 'ziyadah' ? 'text-teal-600' : 'text-sky-600';

                item.innerHTML = `
                    <div class="flex justify-between items-center">
                        <span class="font-bold ${jenisColor}">${jenisLabel}:</span>
                        <span class="text-xs text-slate-500">${date}</span>
                    </div>
                    <p class="font-medium text-slate-700">${surahName} ${entry.ayatDari}-${entry.ayatSampai}</p>
                    <p class="text-xs text-slate-500 italic">${kualitasText}</p>
                `;
            }
            historyList.appendChild(item);
        });
    }

    // 6. Render paginasi
    renderStudentDetailHistoryPagination(totalItems, ITEMS_PER_PAGE);
}
// --- FUNGSI BARU (PENGGANTI renderStudentMemorizationDetails) ---

/**
 * Mengisi dropdown filter Juz 1-30 di halaman detail siswa
 */
function populateJuzFilterDropdown() {
    const select = document.getElementById('detail-juz-filter');
    if (!select) return;
    select.innerHTML = '';
    for (let i = 1; i <= 30; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Juz ${i}`;
        select.appendChild(option);
    }
}

/**
 * Merender rincian hafalan per JUZ yang dipilih (dengan progress bar dan bubbles)
 */
function renderStudentJuzDetails() {
    const studentId = window.appState.currentDetailStudentId;
    const selectedJuz = parseInt(window.appState.currentDetailJuzView);

    // Ambil elemen UI
    const container = document.getElementById('detail-juz-surah-list');
    const summaryLabel = document.getElementById('detail-juz-summary-label');
    const summaryPercentageEl = document.getElementById('detail-juz-summary-percentage');
    const summaryBar = document.getElementById('detail-juz-summary-bar');

    if (!container || !studentId || !summaryLabel || !summaryBar || !summaryPercentageEl) {
        console.warn("Elemen UI untuk detail Juz tidak ditemukan.");
        return;
    }

    // 1. Dapatkan semua setoran ZIYADAH (logika ini sama seperti fungsi lama)
    const ziyadahEntries = window.appState.allHafalan.filter(h => 
        h.studentId === studentId && h.jenis === 'ziyadah'
    );

    // 2. Buat Peta unik hafalan: Map<surahNo, Set<ayatNo>>
    const memorizedVersesMap = new Map();
    ziyadahEntries.forEach(h => {
        const surahNo = parseInt(h.surahNo);
        const ayatDari = parseInt(h.ayatDari);
        const ayatSampai = parseInt(h.ayatSampai);

        if (isNaN(surahNo) || isNaN(ayatDari) || isNaN(ayatSampai)) return;

        if (!memorizedVersesMap.has(surahNo)) {
            memorizedVersesMap.set(surahNo, new Set());
        }
        const surahSet = memorizedVersesMap.get(surahNo);
        // Handle setoran terbalik (misal: 5-1)
        const [start, end] = [Math.min(ayatDari, ayatSampai), Math.max(ayatDari, ayatSampai)];
        for (let i = start; i <= end; i++) {
            surahSet.add(i);
        }
    });

    // 3. Ambil daftar surah untuk Juz yang dipilih
    const surahsInJuz = juzToSurahMap.get(selectedJuz);
    if (!surahsInJuz || surahsInJuz.length === 0) {
        container.innerHTML = `<p class="text-sm text-slate-400">Tidak ada data surah untuk juz ${selectedJuz}.</p>`;
        return;
    }

    let totalAyatInJuz = 0;
    let totalMemorizedInJuz = 0;
    const bubbleHTML = [];
    const bubbleClass = "inline-block text-sm font-medium px-3 py-1 rounded-full";

    // 4. Iterasi HANYA surah dalam juz ini
    for (const surah of surahsInJuz) {
        const memorizedSet = memorizedVersesMap.get(surah.surahNo);

        // Hitung total ayat dari surah ini yang ada di juz ini
        const ayatCountInJuz = (surah.ayatSampai - surah.ayatDari + 1);
        totalAyatInJuz += ayatCountInJuz;

        // Hitung berapa ayat yang sudah dihafal di rentang juz ini
        let memorizedCountInJuz = 0;
        if (memorizedSet) {
            for (let ayat = surah.ayatDari; ayat <= surah.ayatSampai; ayat++) {
                if (memorizedSet.has(ayat)) {
                    memorizedCountInJuz++;
                }
            }
        }
        totalMemorizedInJuz += memorizedCountInJuz;

        // Hitung persentase HANYA untuk bagian surah di juz ini
        let percentage = (ayatCountInJuz > 0) ? (memorizedCountInJuz / ayatCountInJuz) * 100 : 0;

        // 5. Buat bubble (logika sama seperti fungsi lama)
        let bubble = '';
        const bubbleText = `${surah.nama} (${memorizedCountInJuz}/${ayatCountInJuz})`;

        if (percentage === 1) {
            bubble = `<span class="${bubbleClass} bg-red-100 text-red-700">${bubbleText}</span>`;
        } else if (percentage >= 100) {
            bubble = `<span class="${bubbleClass} bg-teal-100 text-teal-800">${bubbleText}</span>`;
        } else {
            const gradientStyle = `background: linear-gradient(to right, #a7f3d0 ${percentage}%, #fecaca ${percentage}%); color: #334155; border: 1px solid #cbd5e1;`;
            bubble = `<span class="${bubbleClass}" style="${gradientStyle}">${bubbleText}</span>`;
        }
        bubbleHTML.push(bubble);
    }

    // 6. Render Ringkasan Juz (Progress Bar)
    const juzPercentage = (totalAyatInJuz > 0) ? (totalMemorizedInJuz / totalAyatInJuz) * 100 : 0;
    summaryLabel.textContent = `Juz ${selectedJuz} (${totalMemorizedInJuz} / ${totalAyatInJuz} ayat)`;
    summaryPercentageEl.textContent = `${juzPercentage.toFixed(0)}%`;
    summaryBar.style.width = `${juzPercentage}%`;

    // 7. Render Bubbles
    container.innerHTML = bubbleHTML.join(' ');
}
/**
 * Fungsi utama untuk menampilkan halaman detail siswa
 */
function renderStudentDetailPage() { 
    const studentId = window.appState.currentDetailStudentId;
    const student = window.appState.allStudents.find(s => s.id === studentId); // Cari siswa
    const pageContainer = document.getElementById('detail_siswa-page');

    if (!pageContainer) return; // Seharusnya tidak terjadi

    // Jika ID-nya tidak ada (misal: session clear atau navigasi buruk)
    if (!studentId) {
        // Ini adalah error yang Anda lihat
        showToast("Gagal memuat detail, silakan kembali.", "error"); 
        showPage('ringkasan');
        return;
    }

    // --- PERBAIKAN UTAMA RACE CONDITION ---
    // Jika ID-nya ADA, tapi data siswa BELUM SIAP (array allStudents masih kosong)
    if (!student) {
        // Jangan redirect! Cukup tunggu data dari onSnapshot.
        console.warn("renderStudentDetailPage: Data siswa belum siap (menunggu snapshot 'students')...");
        // Set judul ke "Memuat..." agar konsisten
        ui.pageTitle.textContent = "Memuat Detail Siswa...";
        return; // Hentikan eksekusi fungsi untuk saat ini
    }
    
    // --- JIKA LOLOS, ARTINYA 'student' ADA ---

    // Cek data kelas untuk judul, mungkin juga belum siap
    const studentClass = window.appState.allClasses.find(c => c.id === student.classId);
    
    if (!studentClass && student.classId) { // classId ada tapi datanya belum dimuat
         console.warn("renderStudentDetailPage: Data kelas belum siap (menunggu snapshot 'classes')...");
         ui.pageTitle.textContent = `${student.name} (Memuat kelas...)`;
         // Lanjutkan render sisa halaman, judul akan diperbarui oleh listener 'classes'
    } else {
        // Data siswa DAN kelas sudah siap
        const className = studentClass ? studentClass.name : 'Tanpa Kelas';
        ui.pageTitle.textContent = `${student.name} (${className})`;
    }

    // 1. Reset state untuk RIWAYAT
    window.appState.currentDetailHistoryView = 'setoran';
    window.appState.currentDetailHistoryPage = 1;
    const historyFilter = document.getElementById('detail-history-filter');
    if (historyFilter) {
        historyFilter.value = 'setoran';
    }

    // 2. Tentukan Juz default berdasarkan setoran terakhir
    let defaultJuz = 1; // Default ke Juz 1
    const lastDeposit = window.appState.allHafalan
        .filter(h => h.studentId === studentId && (h.jenis === 'ziyadah' || h.jenis === 'murajaah'))
        .sort((a, b) => b.timestamp - a.timestamp)[0]; // Ambil yang terbaru

    if (lastDeposit) {
        const surahNo = parseInt(lastDeposit.surahNo);
        const ayatNo = parseInt(lastDeposit.ayatDari); // Gunakan ayat 'dari'
        
        if (!isNaN(surahNo) && !isNaN(ayatNo)) {
            const calculatedJuz = getJuzForAyat(surahNo, ayatNo); 
            if (calculatedJuz >= 1 && calculatedJuz <= 30) {
                defaultJuz = calculatedJuz;
            }
        }
    }
    
    // Terapkan Juz default ke state dan UI
    window.appState.currentDetailJuzView = defaultJuz;
    const juzFilter = document.getElementById('detail-juz-filter');
    if (juzFilter) {
        juzFilter.value = defaultJuz;
    }

    // 3. Panggil fungsi-fungsi untuk mengisi data
    renderStudentDetailStats(studentId);
    renderStudentJuzDetails();
    renderStudentDetailHistoryList();
}
    // --- BARU: Tambahkan listener untuk SEMUA link navigasi baru ---
const allNavLinks = [
    ...ui.sidebarLinks,
    ...ui.bottomNavLinks,
    ...ui.profileMenuLinks // Termasuk link di dalam profil
];
allNavLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const page = link.dataset.page;
        if (page) {
            showPage(page);
        }
    });
});
ui.homeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showPage('ringkasan'); // Selalu kembali ke halaman ringkasan
});
    ui.addStudentModalBtn.addEventListener('click', () => showModal(ui.addStudentModal));
    ui.cancelAddStudentBtn.addEventListener('click', () => hideModal(ui.addStudentModal));

// (Pastikan parameter fungsi startApp Anda sesuai, contoh: function startApp(role, lembagaId, uid))
function startApp(role, lembagaId, uid) { // Tambahkan uid jika ada
    ui.loginView.classList.add('hidden');
    ui.app.classList.remove('hidden');
    window.appState.currentUserUID = uid; // Simpan uid jika ada

    setupUIForRole(role);
    initializeAppLogic(lembagaId, uid); // Pass UID

    // --- Logika Baru: Tentukan halaman awal ---
    // Prioritaskan hash di URL, jika tidak ada atau tidak valid, default ke 'ringkasan'
    let initialPage = window.location.hash.substring(1);
    const validPageElement = initialPage ? document.getElementById(`${initialPage}-page`) : null;

if (!initialPage || !validPageElement) {
    // Jika HASH KOSONG (login baru), tentukan halaman default berdasarkan peran
    if (role === 'admin_lembaga') {
        initialPage = 'manajemen_akun'; // Default untuk Admin
    } else {
        initialPage = 'ringkasan'; // Default untuk Guru/Siswa
    }
}

    // Validasi akses untuk siswa
    const siswaAllowedPages = ['profil', 'ringkasan', 'siswa', 'riwayat', 'tes_hafalan', 'tentang', 'pengaturan'];
    if(role === 'siswa' && !siswaAllowedPages.includes(initialPage)){
        initialPage = 'ringkasan'; // Paksa ke ringkasan jika siswa mencoba akses halaman terlarang
    }
    const adminAllowedPages = ['profil', 'manajemen_akun', 'tentang', 'kelas', 'siswa'];
    if(role === 'admin_lembaga' && !adminAllowedPages.includes(initialPage)){
         // Jika admin me-refresh di halaman yang tidak diizinkan (spt #pengaturan atau #siswa)
         initialPage = 'manajemen_akun'; // Paksa kembali ke default admin
    }
    // Atur history dan tampilkan halaman awal
    history.replaceState({ page: initialPage }, '', `#${initialPage}`);
    _showPageImpl(initialPage);
}
    
    ui.loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = ui.usernameInput.value;
        const password = ui.passwordInput.value;
        const loginButton = e.target.querySelector('button[type="submit"]');
        loginButton.disabled = true;
        loginButton.textContent = 'Memproses...';

        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            const userDocRef = db.collection('users').doc(user.uid);
            const userDoc = await userDocRef.get();

            let userData;

            if (!userDoc.exists) {
                console.log(`Dokumen untuk user ${user.uid} tidak ditemukan, membuat yang baru...`);
                const newUserPayload = {
                    email: user.email,
                    role: "guru",
                    lembagaId: "man2brebes",
                    namaLengkap: user.email.split('@')[0], 
                    ttl: "", 
                    fotoProfilUrl: "",
                    pin: "" // Add default empty PIN
                };
                await userDocRef.set(newUserPayload);
                userData = newUserPayload;
                showToast("Selamat datang! Akun Anda telah disiapkan.", "success");
            } else {
                userData = userDoc.data();
            }

            const role = userData.role;
            const lembagaId = userData.lembagaId;
            

            if (role && lembagaId && (role === 'guru' || role === 'siswa' || role === 'admin_lembaga')) {
                sessionStorage.setItem('loggedInRole', role);
                sessionStorage.setItem('lembagaId', lembagaId);
                sessionStorage.setItem('currentUserUID', user.uid);
                window.appState.loggedInRole = role;
                window.appState.lembagaId = lembagaId;
                window.appState.currentUserUID = user.uid;

                ui.loginError.classList.add('hidden');
                startApp(role, lembagaId, user.uid);
            } else {
                throw new Error("Peran atau ID Lembaga tidak diatur di database.");
            }

        } catch (error) {
            let message = 'Terjadi kesalahan. Coba lagi.';
            if (error.code) {
                switch (error.code) {
                    case 'auth/user-not-found': message = 'Email tidak ditemukan.'; break;
                    case 'auth/wrong-password': message = 'Password salah.'; break;
                    case 'auth/invalid-email': message = 'Format email tidak valid.'; break;
                }
            } else {
                message = error.message;
            }
            ui.loginError.textContent = message;
            ui.loginError.classList.remove('hidden');
            auth.signOut();
        } finally {
            loginButton.disabled = false;
            loginButton.textContent = 'Masuk';
        }
    });
    
    // --- Online Database (Firestore) Wrapper ---
    const onlineDB = {
        add(collectionName, data) {
            const dataToAdd = { ...data };
            delete dataToAdd.id;
            return db.collection(collectionName).add(dataToAdd);
        },
        async getAll(collectionName) {
            const snapshot = await db.collection(collectionName).get();
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        },
        delete(collectionName, docId) {
            return db.collection(collectionName).doc(docId).delete();
        },
        update(collectionName, data) {
            const docId = data.id;
            const dataToUpdate = { ...data };
            delete dataToUpdate.id;
            return db.collection(collectionName).doc(docId).update(dataToUpdate);
        },
    };
/**
 * Menghitung lebar kolom (width in characters) berdasarkan
 * data terpanjang di setiap kolom, termasuk header.
 * @param {Array<Object>} data - Array data JSON (dataForExport)
 * @returns {Array<Object>} Array objek {wch: number} untuk SheetJS
 */
function getWorksheetCols(data) {
    if (!data || data.length === 0) return [];

    // 1. Dapatkan semua header/kunci.
    const headers = Object.keys(data[0]);

    // 2. Inisialisasi array 'cols' dengan panjang header.
    let cols = headers.map(header => {
        return {
            wch: header.toString().length 
        };
    });

    // 3. Loop melalui semua baris data
    data.forEach(row => {
        // 4. Loop melalui semua header
        headers.forEach((key, i) => {
            // 5. Ubah data menjadi string dan dapatkan panjangnya
            const value = row[key] ? row[key].toString() : '';
            const length = value.length;

            // 6. Update jika lebih panjang dari 'wch' saat ini
            if (length > cols[i].wch) {
                cols[i].wch = length;
            }
        });
    });

    // 7. Beri sedikit padding tambahan (misal: +1 karakter)
    cols.forEach(col => { col.wch += 1; });

    return cols;
}
function exportAllData() {
    // Ambil data dari state
    const { allStudents, allClasses, allHafalan, allUsers } = window.appState;

    // Buat Peta (Map) untuk pencarian nama guru yang cepat
    const userMap = new Map(allUsers.map(u => [u.id, u.namaLengkap || u.email]));

    const filterSelect = document.getElementById('summary-rank-filter-class');
    const selectedClassId = filterSelect ? filterSelect.value : '';

    let studentsToExport = selectedClassId ? allStudents.filter(student => student.classId === selectedClassId) : [...allStudents];

    const surahNameList = [ { no: 1, nama: "Al-Fatihah", ayat: 7 }, { no: 2, nama: "Al-Baqarah", ayat: 286 }, { no: 3, nama: "Ali 'Imran", ayat: 200 }, { no: 4, nama: "An-Nisa'", ayat: 176 }, { no: 5, nama: "Al-Ma'idah", ayat: 120 }, { no: 6, nama: "Al-An'am", ayat: 165 }, { no: 7, nama: "Al-A'raf", ayat: 206 }, { no: 8, nama: "Al-Anfal", ayat: 75 }, { no: 9, nama: "At-Taubah", ayat: 129 }, { no: 10, nama: "Yunus", ayat: 109 }, { no: 11, nama: "Hud", ayat: 123 }, { no: 12, nama: "Yusuf", ayat: 111 }, { no: 13, nama: "Ar-Ra'd", ayat: 43 }, { no: 14, nama: "Ibrahim", ayat: 52 }, { no: 15, nama: "Al-Hijr", ayat: 99 }, { no: 16, nama: "An-Nahl", ayat: 128 }, { no: 17, nama: "Al-Isra'", ayat: 111 }, { no: 18, nama: "Al-Kahf", ayat: 110 }, { no: 19, nama: "Maryam", ayat: 98 }, { no: 20, nama: "Taha", ayat: 135 }, { no: 21, nama: "Al-Anbiya'", ayat: 112 }, { no: 22, nama: "Al-Hajj", ayat: 78 }, { no: 23, nama: "Al-Mu'minun", ayat: 118 }, { no: 24, nama: "An-Nur", ayat: 64 }, { no: 25, nama: "Al-Furqan", ayat: 77 }, { no: 26, nama: "Asy-Syu'ara'", ayat: 227 }, { no: 27, nama: "An-Naml", ayat: 93 }, { no: 28, nama: "Al-Qasas", ayat: 88 }, { no: 29, nama: "Al-'Ankabut", ayat: 69 }, { no: 30, nama: "Ar-Rum", ayat: 60 }, { no: 31, nama: "Luqman", ayat: 34 }, { no: 32, nama: "As-Sajdah", ayat: 30 }, { no: 33, nama: "Al-Ahzab", ayat: 73 }, { no: 34, nama: "Saba'", ayat: 54 }, { no: 35, nama: "Fatir", ayat: 45 }, { no: 36, nama: "Yasin", ayat: 83 }, { no: 37, nama: "As-Saffat", ayat: 182 }, { no: 38, nama: "Sad", ayat: 88 }, { no: 39, nama: "Az-Zumar", ayat: 75 }, { no: 40, nama: "Ghafir", ayat: 85 }, { no: 41, nama: "Fussilat", ayat: 54 }, { no: 42, nama: "Asy-Syura", ayat: 53 }, { no: 43, nama: "Az-Zukhruf", ayat: 89 }, { no: 44, nama: "Ad-Dukhan", ayat: 59 }, { no: 45, nama: "Al-Jasiyah", ayat: 37 }, { no: 46, nama: "Al-Ahqaf", ayat: 35 }, { no: 47, nama: "Muhammad", ayat: 38 }, { no: 48, nama: "Al-Fath", ayat: 29 }, { no: 49, nama: "Al-Hujurat", ayat: 18 }, { no: 50, nama: "Qaf", ayat: 45 }, { no: 51, nama: "Az-Zariyat", ayat: 60 }, { no: 52, nama: "At-Tur", ayat: 49 }, { no: 53, nama: "An-Najm", ayat: 62 }, { no: 54, nama: "Al-Qamar", ayat: 55 }, { no: 55, nama: "Ar-Rahman", ayat: 78 }, { no: 56, nama: "Al-Waqi'ah", ayat: 96 }, { no: 57, nama: "Al-Hadid", ayat: 29 }, { no: 58, nama: "Al-Mujadalah", ayat: 22 }, { no: 59, nama: "Al-Hasyr", ayat: 24 }, { no: 60, nama: "Al-Mumtahanah", ayat: 13 }, { no: 61, nama: "As-Saff", ayat: 14 }, { no: 62, nama: "Al-Jumu'ah", ayat: 11 }, { no: 63, nama: "Al-Munafiqun", ayat: 11 }, { no: 64, nama: "At-Tagabun", ayat: 18 }, { no: 65, nama: "At-Talaq", ayat: 12 }, { no: 66, nama: "At-Tahrim", ayat: 12 }, { no: 67, nama: "Al-Mulk", ayat: 30 }, { no: 68, nama: "Al-Qalam", ayat: 52 }, { no: 69, nama: "Al-Haqqah", ayat: 52 }, { no: 70, nama: "Al-Ma'arij", ayat: 44 }, { no: 71, nama: "Nuh", ayat: 28 }, { no: 72, nama: "Al-Jinn", ayat: 28 }, { no: 73, nama: "Al-Muzzammil", ayat: 20 }, { no: 74, nama: "Al-Muddassir", ayat: 56 }, { no: 75, nama: "Al-Qiyamah", ayat: 40 }, { no: 76, nama: "Al-Insan", ayat: 31 }, { no: 77, nama: "Al-Mursalat", ayat: 50 }, { no: 78, nama: "An-Naba'", ayat: 40 }, { no: 79, nama: "An-Nazi'at", ayat: 46 }, { no: 80, nama: "'Abasa", ayat: 42 }, { no: 81, nama: "At-Takwir", ayat: 29 }, { no: 82, nama: "Al-Infitar", ayat: 19 }, { no: 83, nama: "Al-Mutaffifin", ayat: 36 }, { no: 84, nama: "Al-Insyiqaq", ayat: 25 }, { no: 85, nama: "Al-Buruj", ayat: 22 }, { no: 86, "nama": "At-Tariq", ayat: 17 }, { no: 87, nama: "Al-A'la", ayat: 19 }, { no: 88, nama: "Al-Gasyiyah", ayat: 26 }, { no: 89, nama: "Al-Fajr", ayat: 30 }, { no: 90, nama: "Al-Balad", ayat: 20 }, { no: 91, nama: "Asy-Syams", ayat: 15 }, { no: 92, nama: "Al-Lail", ayat: 21 }, { no: 93, nama: "Ad-Duha", ayat: 11 }, { no: 94, nama: "Asy-Syarh", ayat: 8 }, { no: 95, nama: "At-Tin", ayat: 8 }, { no: 96, nama: "Al-'Alaq", ayat: 19 }, { no: 97, nama: "Al-Qadr", ayat: 5 }, { no: 98, nama: "Al-Bayyinah", ayat: 8 }, { no: 99, nama: "Az-Zalzalah", ayat: 8 }, { no: 100, nama: "Al-'Adiyat", ayat: 11 }, { no: 101, nama: "Al-Qari'ah", ayat: 11 }, { no: 102, nama: "At-Takasur", ayat: 8 }, { no: 103, nama: "Al-'Asr", ayat: 3 }, { no: 104, nama: "Al-Humazah", ayat: 9 }, { no: 105, nama: "Al-Fil", ayat: 5 }, { no: 106, nama: "Quraisy", ayat: 4 }, { no: 107, nama: "Al-Ma'un", ayat: 7 }, { no: 108, nama: "Al-Kausar", ayat: 3 }, { no: 109, nama: "Al-Kafirun", ayat: 6 }, { no: 110, nama: "An-Nasr", ayat: 3 }, { no: 111, nama: "Al-Masad", ayat: 5 }, { no: 112, nama: "Al-Ikhlas", ayat: 4 }, { no: 113, nama: "Al-Falaq", ayat: 5 }, { no: 114, nama: "An-Nas", ayat: 6 } ];
    const kualitasDisplayMap = { 
        'sangat-lancar': 'Sangat Baik', 'lancar': 'Baik',
        'cukup-lancar': 'Cukup', 'tidak-lancar': 'Kurang',
        'sangat-tidak-lancar': 'Tidak Bisa'
    };

    try {
        let dataForExport = [];
        let studentNumber = 0;

        const sortedStudents = [...studentsToExport].sort((a, b) => {
            const totalAyatA = allHafalan.filter(h => h.studentId === a.id && h.jenis === 'ziyadah').reduce((sum, entry) => sum + (parseInt(entry.ayatSampai) - parseInt(entry.ayatDari) + 1), 0);
            const totalAyatB = allHafalan.filter(h => h.studentId === b.id && h.jenis === 'ziyadah').reduce((sum, entry) => sum + (parseInt(entry.ayatSampai) - parseInt(entry.ayatDari) + 1), 0);
            if (totalAyatB !== totalAyatA) return totalAyatB - totalAyatA;
            return a.name.localeCompare(b.name);
        });

        sortedStudents.forEach(student => {
            studentNumber++;
            const studentClass = allClasses.find(c => c.id === student.classId);
            const studentEntries = allHafalan.filter(h => h.studentId === student.id).sort((a, b) => b.timestamp - a.timestamp);
            let isFirstRowForStudent = true; 

            const testTypeDisplayMap = {
                'continue-verse': 'Sambung Ayat Setelahnya',
                'previous-verse': 'Sambung Ayat Sebelumnya',
                'reorder-verses': 'Menyusun Ulang Ayat',
                'guess-surah': 'Menebak Surah'
            };

            if (studentEntries.length > 0) {
                studentEntries.forEach(entry => {
                    let rowData;

                    const guruName = entry.guruId ? userMap.get(entry.guruId) : '-';

                    // --- ▼▼▼ BLOK PERUBAHAN ▼▼▼ ---
                    const date = new Date(entry.timestamp);

                    // Opsi format (selalu 24 jam, selalu WIB)
                    const optionsDate = {
                        day: '2-digit', 
                        month: '2-digit', 
                        year: 'numeric',
                        timeZone: 'Asia/Jakarta' // Paksa ke Waktu Indonesia Barat
                    };
                    const optionsTime = {
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: false, // Paksa 24-jam
                        timeZone: 'Asia/Jakarta', // Paksa ke Waktu Indonesia Barat
                        timeZoneName: 'short' // Tambahkan "WIB"
                    };

                    const formattedDate = date.toLocaleDateString('id-ID', optionsDate);
                    const formattedTime = date.toLocaleTimeString('id-ID', optionsTime);
                    // --- ▲▲▲ AKHIR PERUBAHAN ▲▲▲ ---

                    if (entry.jenis === 'tes') {
                        const testTypeText = testTypeDisplayMap[entry.testType] || 'Ujian';
                        const scoreMatch = entry.catatan.match(/Skor:\s*(\d+)/);
                        const score = scoreMatch ? scoreMatch[1] : "-"; 

                        rowData = {
                            "No": isFirstRowForStudent ? studentNumber : "",
                            "Nama": isFirstRowForStudent ? student.name : "",
                            "Kelas": isFirstRowForStudent ? (studentClass ? studentClass.name : 'Tanpa Kelas') : "",
                            "Jenis Setoran": "Tes Hafalan",
                            "Detail Hafalan": testTypeText,
                            "Skor Mutqin": score,
                            "Nama Guru": guruName,
                            "Waktu": formattedTime, // <-- Diperbarui
                            "Tanggal": formattedDate,
                        };

                    } else {
                        const surahInfo = surahNameList.find(s => s.no == entry.surahNo);
                        rowData = {
                            "No": isFirstRowForStudent ? studentNumber : "",
                            "Nama": isFirstRowForStudent ? student.name : "",
                            "Kelas": isFirstRowForStudent ? (studentClass ? studentClass.name : 'Tanpa Kelas') : "",
                            "Jenis Setoran": entry.jenis === 'ziyadah' ? 'Ziyadah' : "Muraja'ah",
                            "Detail Hafalan": `${surahInfo ? surahInfo.nama : 'Surah ' + entry.surahNo} ${entry.ayatDari}-${entry.ayatSampai}`,
                            "Skor Mutqin": kualitasDisplayMap[entry.kualitas] || entry.kualitas,
                            "Nama Guru": guruName,
                            "Waktu": formattedTime, // <-- Diperbarui
                            "Tanggal": formattedDate,
                        };
                    }

                    dataForExport.push(rowData);
                    isFirstRowForStudent = false;
                });
            } else {
                dataForExport.push({
                    "No": studentNumber, "Nama": student.name, "Kelas": studentClass ? studentClass.name : 'Tanpa Kelas',
                    "Jenis Setoran": "-", "Detail Hafalan": "-", "Skor Mutqin": "-",
                    "Nama Guru": "-",
                    "Waktu": "-",
                    "Tanggal": "-",
                });
            }
        });

        if (dataForExport.length === 0) {
            showToast("Tidak ada siswa untuk diekspor di kelas ini.", "info");
            return;
        }

        const worksheet = XLSX.utils.json_to_sheet(dataForExport);

        // --- Logika auto-width (sudah ada dari sebelumnya) ---
        const cols = getWorksheetCols(dataForExport); 
        worksheet['!cols'] = cols; 
        // --- Akhir logika auto-width ---

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Laporan Hafalan");
        const date = new Date().toISOString().slice(0, 10);
        let fileName = `laporan_setoran_semua_${date}.xlsx`;
        if (selectedClassId) {
            const selectedClass = allClasses.find(c => c.id === selectedClassId);
            if (selectedClass) {
                const classNameSafe = selectedClass.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
                fileName = `laporan_setoran_${classNameSafe}_${date}.xlsx`;
            }
        }
        XLSX.writeFile(workbook, fileName);
        showToast("Data setoran berhasil diekspor ke XLSX.", "success");
    } catch (error) {
        console.error("Export error:", error);
        showToast("Gagal mengekspor data.", "error");
    }
}
    window.exportAllData = exportAllData;

        async function populateAyatDropdowns(surahElement, ayatDariSelect, ayatSampaiSelect) {
            if (!surahElement || !ayatDariSelect || !ayatSampaiSelect) return;
            
            const selectedOption = surahElement.options[surahElement.selectedIndex];
            if (!selectedOption) return;
            
            const surahNo = selectedOption.value;
            const maxAyat = parseInt(selectedOption.dataset.maxAyat);

            ayatDariSelect.innerHTML = '<option>Memuat ayat...</option>';
            ayatSampaiSelect.innerHTML = '<option>Memuat ayat...</option>';
            ayatDariSelect.disabled = true;
            ayatSampaiSelect.disabled = true;

            try {
                let verses = window.quranCache[surahNo];
                if (!verses) {
                    const response = await fetch(`https://api.quran.com/api/v4/verses/by_chapter/${surahNo}?fields=text_uthmani&per_page=300`);
                    if (!response.ok) throw new Error('Gagal memuat data ayat.');
                    const data = await response.json();
                    verses = data.verses;
                    window.quranCache[surahNo] = verses;
                }

                ayatDariSelect.innerHTML = '';
                ayatSampaiSelect.innerHTML = '';

                if (!verses || verses.length === 0) throw new Error('Data ayat tidak ditemukan.');

                verses.forEach((verse, index) => {
                    const ayatNumber = index + 1;
                    const textPreview = verse.text_uthmani.split(' ').slice(0, 4).join(' ');
                    
                    // Simpan kedua versi teks
                    const simpleText = ayatNumber.toString();
                    const fullText = `${ayatNumber} - ${textPreview}`;
                    
                    const option = new Option(simpleText, ayatNumber); // Mulai dengan teks sederhana
                    option.dataset.simpleText = simpleText;
                    option.dataset.fullText = fullText;
                    
                    ayatDariSelect.appendChild(option.cloneNode(true));
                    ayatSampaiSelect.appendChild(option.cloneNode(true));
                });

            } catch (error) {
                console.error("Gagal mengambil teks ayat:", error);
                ayatDariSelect.innerHTML = '';
                ayatSampaiSelect.innerHTML = '';
                for (let i = 1; i <= maxAyat; i++) {
                    const option = new Option(i, i);
                    ayatDariSelect.appendChild(option.cloneNode(true));
                    ayatSampaiSelect.appendChild(option.cloneNode(true));
                }
                showToast("Gagal memuat teks ayat, menampilkan nomor saja.", "error");
            } finally {
                ayatDariSelect.disabled = false;
                ayatSampaiSelect.disabled = false;
            }
        }
        /**
         * Mengubah teks pada opsi dropdown ayat antara mode 'sederhana' (hanya nomor)
         * dan mode 'lengkap' (dengan potongan ayat).
         * @param {HTMLSelectElement} selectElement - Dropdown yang akan diubah.
         * @param {'simple' | 'full'} mode - Tampilan yang diinginkan.
         */
        function updateAyatDropdownText(selectElement, mode) {
            if (!selectElement) return;
            for (const option of selectElement.options) {
                if (mode === 'full') {
                    option.textContent = option.dataset.fullText || option.value;
                } else { // mode === 'simple'
                    option.textContent = option.dataset.simpleText || option.value;
                }
            }
        }
    function initializeAppLogic(lembagaId, uid) {
        const currentUserUID = uid || window.appState.currentUserUID;
        function getLocalISOString(date) {
        const pad = (num) => num.toString().padStart(2, '0');
        const y = date.getFullYear();
        const M = pad(date.getMonth() + 1); // Bulan (0-11) + 1
        const d = pad(date.getDate());
        const h = pad(date.getHours());
        const m = pad(date.getMinutes());
        return `${y}-${M}-${d}T${h}:${m}`;
    }
        const uiElements = {
            addStudentModal: document.getElementById('add-student-modal'),
            addClassForm: document.getElementById('add-class-form'),
            classNameInput: document.getElementById('class-name'),
            addClassBtn: document.getElementById('add-class-btn'),
            classList: document.getElementById('class-list'),
            newStudentClass: document.getElementById('new-student-class'),
            addStudentForm: document.getElementById('add-student-form'),
            addStudentSubmitBtn: document.getElementById('add-student-submit-btn'),
            confirmModal: {
                el: document.getElementById('confirm-modal'),
                title: document.getElementById('confirm-modal-title'),
                text: document.getElementById('confirm-modal-text'),
                okBtn: document.getElementById('confirm-modal-ok'),
                cancelBtn: document.getElementById('confirm-modal-cancel'),
            },
            summary: {
                totalSiswa: document.getElementById('summary-total-siswa'),
                totalKelas: document.getElementById('summary-total-kelas'),
                studentProgressList: document.getElementById('student-progress-list'),
                rankFilterClass: document.getElementById('summary-rank-filter-class'),
                searchStudent: document.getElementById('summary-search-student'),
            },
            riwayat: {
                filterClass: document.getElementById('riwayat-filter-class'),
                list: document.getElementById('riwayat-list'),
                searchStudent: document.getElementById('riwayat-search-student'),
            },
            import: {
                downloadTemplateBtn: document.getElementById('download-template-btn'),
                importBtn: document.getElementById('import-btn'),
                fileInput: document.getElementById('import-file-input'),
            },
            settings: {
                mutqinForm: document.getElementById('mutqin-settings-form'),
                quranScopeForm: document.getElementById('quran-scope-form'),
                quranScopeSelect: document.getElementById('quran-scope-setting'),
            }
        }
        // --- FUNGSI-FUNGSI BARU UNTUK ADMIN ---

    const adminUI = {
        addAkunModal: document.getElementById('add-akun-modal'),
        cancelAddAkunBtn: document.getElementById('cancel-add-akun'),
        addAkunForm: document.getElementById('add-akun-form'),
        addAkunSubmitBtn: document.getElementById('add-akun-submit-btn'),
        addAkunModalTitle: document.getElementById('add-akun-modal-title'),
        akunEditId: document.getElementById('akun-edit-id'),
        akunNama: document.getElementById('akun-nama'),
        akunEmail: document.getElementById('akun-email'),
        akunRole: document.getElementById('akun-role'),
        akunPasswordContainer: document.getElementById('akun-password-container'),
        akunPassword: document.getElementById('akun-password'),
        akunNamaContainer: document.getElementById('akun-nama-container'),
        akunStudentSelectContainer: document.getElementById('akun-student-select-container'),
        akunStudentSelect: document.getElementById('akun-student-select'),
        akunList: document.getElementById('akun-list'),
        akunSearch: document.getElementById('akun-search'),
        akunFilterRole: document.getElementById('akun-filter-role'),
        akunFilterKelas: document.getElementById('akun-filter-kelas'),
        bulkAddAkunBtn: document.getElementById('bulk-add-akun-btn'),
        bulkAddAkunModal: document.getElementById('bulk-add-akun-modal'),
        bulkAkunForm: document.getElementById('bulk-add-akun-form'),
        bulkAkunCsv: document.getElementById('bulk-akun-csv'),
        bulkAkunInputContainer: document.getElementById('bulk-add-input-container'),
        bulkAkunProgressContainer: document.getElementById('bulk-add-progress-container'),
        bulkAkunProgressLog: document.getElementById('bulk-add-progress-log'),
        bulkProgressCounter: document.getElementById('bulk-progress-counter'),
        bulkAkunCancelBtn: document.getElementById('cancel-bulk-add-akun'),
        bulkAkunSubmitBtn: document.getElementById('submit-bulk-add-akun')
    };
    const delay = ms => new Promise(res => setTimeout(res, ms));
function populateUnlinkedStudentsSelect() {
        if (!adminUI.akunStudentSelect) return;

        // Filter siswa yang belum punya akun
        const unlinkedStudents = window.appState.allStudents
            .filter(s => !s.userId) 
            .sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        
        adminUI.akunStudentSelect.innerHTML = ''; // Kosongkan dulu
        
        if (unlinkedStudents.length === 0) {
            adminUI.akunStudentSelect.innerHTML = '<option value="">(Tidak ada siswa tanpa akun)</option>';
            adminUI.akunStudentSelect.disabled = true;
            return;
        }

        adminUI.akunStudentSelect.disabled = false;
        // Tambahkan opsi default
        adminUI.akunStudentSelect.appendChild(new Option('-- Pilih siswa yang ada --', ''));

        // Isi dengan siswa yang ditemukan
        unlinkedStudents.forEach(student => {
            const option = new Option(student.name, student.id); // Teks: Nama, Value: ID Dokumen Siswa
            adminUI.akunStudentSelect.appendChild(option);
        });
    }
/**
 * Fungsi utama untuk me-render daftar akun di halaman manajemen.
 * Versi ini menggabungkan semua user (guru) dan siswa (tertaut/belum)
 * ke dalam satu daftar yang difilter.
 */
function renderManajemenAkunList() {
    if (!adminUI.akunList) return;

    adminUI.akunList.innerHTML = ''; // Selalu kosongkan list

    // --- 1. Ambil Nilai Filter ---
    const roleFilter = adminUI.akunFilterRole.value;
    const searchTerm = (adminUI.akunSearch.value || '').toLowerCase();

    // Tampilkan/Sembunyikan filter kelas berdasarkan peran
    let kelasFilter = '';
    if (roleFilter === 'siswa') {
        adminUI.akunFilterKelas.classList.remove('hidden');
        kelasFilter = adminUI.akunFilterKelas.value;
    } else {
        adminUI.akunFilterKelas.classList.add('hidden');
    }

    // --- 2. Siapkan Data ---
    let itemsToRender = [];
    const userMap = new Map(window.appState.allUsers.map(u => [u.id, u]));

    // --- 3. Bangun Daftar Tampilan ---

    // A. Tambahkan GURU jika filter mengizinkan
    if (roleFilter === 'guru' || roleFilter === '') {
        let gurus = window.appState.allUsers.filter(u => u.role === 'guru');

        // Terapkan filter pencarian untuk guru
        if (searchTerm) {
            gurus = gurus.filter(user => 
                (user.namaLengkap || '').toLowerCase().includes(searchTerm) ||
                (user.email || '').toLowerCase().includes(searchTerm)
            );
        }
        // Ubah format agar konsisten
        itemsToRender.push(...gurus.map(user => ({ type: 'guru', user, student: null, name: user.namaLengkap })));
    }

    // B. Tambahkan SISWA jika filter mengizinkan
    if (roleFilter === 'siswa' || roleFilter === '') {
        let students = window.appState.allStudents;

        // Terapkan filter kelas untuk siswa
        if (kelasFilter) {
            students = students.filter(s => s.classId === kelasFilter);
        }

        // Ubah format siswa (gabungkan dengan data user jika ada)
        let studentItems = students.map(student => ({
            type: 'siswa',
            user: userMap.get(student.userId) || null,
            student: student,
            name: student.name
        }));

        // Terapkan filter pencarian untuk siswa
        if (searchTerm) {
            studentItems = studentItems.filter(item => 
                (item.student.name || '').toLowerCase().includes(searchTerm) ||
                (item.user && (item.user.email || '').toLowerCase().includes(searchTerm))
            );
        }

        itemsToRender.push(...studentItems);
    }

    // --- 4. Urutkan Daftar Gabungan ---
    itemsToRender.sort((a, b) => (a.name || '').localeCompare(b.name || ''));

    // --- 5. Render ke DOM ---
    if (itemsToRender.length === 0) {
        adminUI.akunList.innerHTML = '<p class="text-center text-slate-500 py-4">Tidak ada akun yang ditemukan.</p>';
        return;
    }

    const fragment = document.createDocumentFragment();
    itemsToRender.forEach(item => {
        const el = document.createElement('div');
        el.className = 'p-3 bg-slate-50 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3';

        let detailsHTML = '';
        let actionsHTML = '';

        if (item.type === 'guru') {
            // --- Render GURU ---
            el.dataset.userId = item.user.id;
            el.dataset.userName = item.user.namaLengkap;
            el.dataset.userEmail = item.user.email;

            detailsHTML = `
                <p class="text-sm text-slate-500">${item.user.email}</p>
                <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">Guru</span>
            `;
            actionsHTML = `
                <button data-action="edit-akun" class="btn btn-sm btn-secondary">Edit Nama</button>
                <button data-action="reset-password-akun" class="btn btn-sm btn-secondary">Reset Password</button>
                <button data-action="delete-akun" class="btn btn-sm btn-danger">Hapus</button>
            `;

        } else if (item.type === 'siswa') {
            // --- Render SISWA ---
            if (item.user) {
                // Siswa PUNYA AKUN
                el.dataset.userId = item.user.id;
                el.dataset.userName = item.student.name; // Ambil nama dari data siswa
                el.dataset.userEmail = item.user.email;

                detailsHTML = `
                    <p class="text-sm text-slate-500">${item.user.email}</p>
                    <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-800">Siswa (Aktif)</span>
                `;
                actionsHTML = `
                    <button data-action="edit-akun" class="btn btn-sm btn-secondary">Edit Nama</button>
                    <button data-action="reset-password-akun" class="btn btn-sm btn-secondary">Reset Password</button>
                    <button data-action="delete-akun" class="btn btn-sm btn-danger">Hapus</button>
                `;
            } else {
                // Siswa BELUM PUNYA AKUN
                detailsHTML = `
                    <p class="text-sm text-slate-500">Akun belum dibuat.</p>
                `;
                actionsHTML = `
                    <button data-action="create-akun-for-student" data-student-id="${item.student.id}" data-student-name="${item.student.name}" class="btn btn-sm btn-primary">Buat Akun</button>
                `;
            }
        }

        // Gabungkan menjadi satu kartu
        el.innerHTML = `
            <div class="flex-grow">
                <p class="font-semibold text-slate-800">${item.name}</p>
                ${detailsHTML}
            </div>
            <div class="flex-shrink-0 flex items-center gap-2">
                ${actionsHTML}
            </div>
        `;
        fragment.appendChild(el);
    });

    adminUI.akunList.appendChild(fragment);
}

    /**
     * Fungsi utama untuk menangani pembuatan/update akun.
     * Ini adalah "alternatif" yang Anda minta.
     */
async function handleGenerateAccount(e) {
        e.preventDefault();
        setButtonLoading(adminUI.addAkunSubmitBtn, true);
        
        const role = adminUI.akunRole.value;
        const email = adminUI.akunEmail.value;
        const password = adminUI.akunPassword.value;
        const editId = adminUI.akunEditId.value; // UID dari koleksi 'users'
        const lembagaId = window.appState.lembagaId;

        // --- Mode EDIT ---
        if (editId) {
            // Logika edit tidak berubah, hanya update nama
            const nama = adminUI.akunNama.value;
            try {
                await db.collection('users').doc(editId).update({
                    namaLengkap: nama
                });

                // Jika yang diedit adalah siswa, update juga nama di collection 'students'
                const userRole = adminUI.akunRole.value; // Ambil role dari dropdown (yang di-disable)
                if (userRole === 'siswa') {
                    const studentQuery = await db.collection('students').where('userId', '==', editId).limit(1).get();
                    if (!studentQuery.empty) {
                        const studentDocId = studentQuery.docs[0].id;
                        await db.collection('students').doc(studentDocId).update({ name: nama });
                    }
                }
                showToast("Nama akun berhasil diperbarui.");
                hideModal(adminUI.addAkunModal);
            } catch (error) {
                console.error("Gagal update akun:", error);
                showToast("Gagal update akun. " + error.message, "error");
            } finally {
                setButtonLoading(adminUI.addAkunSubmitBtn, false);
            }
            return; // Selesai untuk mode edit
        }

        // --- Mode TAMBAH BARU (Generate Akun) ---
        // ▼▼▼ BLOK INI BERUBAH TOTAL ▼▼▼
        let tempAuthApp = null;
        try {
            // 1. Tentukan NamaLengkap dan ID Siswa (jika ada)
            let namaLengkap;
            let selectedStudentId = null; // Ini adalah ID dokumen dari koleksi 'students'

            if (role === 'siswa') {
                selectedStudentId = adminUI.akunStudentSelect.value;
                if (!selectedStudentId) {
                    throw new Error("Silakan pilih siswa yang akan ditautkan.");
                }
                // Ambil nama dari data siswa yang sudah ada
                const selectedStudent = window.appState.allStudents.find(s => s.id === selectedStudentId);
                if (!selectedStudent) {
                    throw new Error("Data siswa tidak ditemukan. Coba muat ulang.");
                }
                namaLengkap = selectedStudent.name; // Nama diambil dari database student

            } else { // role === 'guru'
                namaLengkap = adminUI.akunNama.value; // Nama diambil dari input form
                if (!namaLengkap) {
                    throw new Error("Nama Lengkap Guru harus diisi.");
                }
            }

            // 2. Inisialisasi Firebase temporer (Sama)
            tempAuthApp = firebase.initializeApp(firebaseConfig, 'tempAppInstance');

            // 3. Buat pengguna di Firebase Auth (Sama)
            const userCredential = await tempAuthApp.auth().createUserWithEmailAndPassword(email, password);
            const newUid = userCredential.user.uid; // Ini adalah ID Auth

            // 4. Sign out dan hapus app temporer (Sama)
            await tempAuthApp.auth().signOut();
            await tempAuthApp.delete();
            
            // 5. Buat dokumen di Firestore 'users'
            const userDocData = {
                email: email,
                namaLengkap: namaLengkap, // Menggunakan namaLengkap yang sudah disiapkan
                role: role,
                lembagaId: lembagaId,
                pin: "",
                ttl: "",
                fotoProfilUrl: ""
            };
            // Simpan dokumen 'users' dengan ID Auth yang baru
            await db.collection('users').doc(newUid).set(userDocData);

            // 6. TAUTKAN/UPDATE dokumen 'students' (jika role siswa)
            if (role === 'siswa' && selectedStudentId) {
                
                // BUKAN 'add', tapi 'update' dokumen siswa yang tadi dipilih
                await db.collection('students').doc(selectedStudentId).update({
                    userId: newUid // Ini adalah TAUTAN PENTING
                });
            }
            // Jika role 'guru', tidak ada aksi ke koleksi 'students' (ini sudah benar)

            showToast(`Akun ${role} baru berhasil dibuat dan ditautkan.`);
            hideModal(adminUI.addAkunModal);

        } catch (error) {
            console.error("Gagal generate akun:", error);
            let msg = error.message; // Langsung gunakan pesan error
            if (error.code === 'auth/email-already-in-use') {
                msg = "Email ini sudah digunakan oleh akun lain.";
            } else if (error.code === 'auth/weak-password') {
                msg = "Password terlalu lemah. Minimal 6 karakter.";
            }
            showToast(msg, "error");
            
            // Cleanup app temporer jika terjadi error
            if (tempAuthApp) {
                await tempAuthApp.delete();
            }
        } finally {
            setButtonLoading(adminUI.addAkunSubmitBtn, false);
        }
        // ▲▲▲ AKHIR BLOK PERUBAHAN ▲▲▲
    }
/**
     * Fungsi untuk memproses pembuatan akun massal dari <textarea>.
     */
    async function handleBulkGenerateAccounts(e) {
        e.preventDefault();

        const csvData = adminUI.bulkAkunCsv.value;
        let lines = csvData.trim().split('\n');
        
        if (lines.length > 100) {
            showToast("Error: Maksimal 100 akun sekaligus.", "error");
            return;
        }
if (lines.length > 0) {
        const firstLine = lines[0].toLowerCase().trim();
        // Cek apakah baris pertama mengandung kata-kata kunci header
        if (firstLine.includes('email') && firstLine.includes('nama') && firstLine.includes('role')) {
            lines.shift(); // Hapus baris pertama (header)
            log("Baris header terdeteksi dan diabaikan.", "info");
        }
    }
const accountsToCreate = lines
    .map(line => line.trim().split(','))
    // ▼ UBAH DARI 3 MENJADI 4 ▼
    .filter(parts => parts.length >= 4) // Minimal harus ada 4 kolom
    .map(parts => {
        // Logika baru untuk menangani koma di nama
        const email = (parts[0] || '').trim();
        const password = (parts[parts.length - 1] || '').trim(); // Ambil dari PALING AKHIR
        const role = (parts[parts.length - 2] || '').trim().toLowerCase(); // Ambil dari KEDUA DARI AKHIR

        // Sisanya adalah nama, gabungkan kembali jika ada koma
        const nama = parts.slice(1, parts.length - 2).join(',').trim(); 

        return { email, nama, role, password };
    });

        if (accountsToCreate.length === 0) {
            showToast("Data tidak ditemukan. Pastikan formatnya benar.", "error");
            return;
        }

        // Siapkan UI untuk progress
        adminUI.bulkAkunInputContainer.classList.add('hidden');
        adminUI.bulkAkunProgressContainer.classList.remove('hidden');
        adminUI.bulkAkunSubmitBtn.disabled = true;
        adminUI.bulkAkunCancelBtn.disabled = true;
        adminUI.bulkAkunProgressLog.innerHTML = ''; // Kosongkan log

const log = (message, status = 'info') => {
    const entry = document.createElement('div');
    entry.className = 'flex items-start gap-2'; // items-start agar teks panjang rapi

    let icon = '';
    let colorClass = '';

    switch (status) {
        case 'success':
            // Ikon Ceklis
            icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
            colorClass = 'text-green-600'; // Hijau tua
            break;
        case 'error':
            // Ikon Silang
            icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 flex-shrink-0"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
            colorClass = 'text-red-600'; // Merah tua
            break;
        default: // 'info'
            icon = ''; // Tidak ada ikon untuk info/proses
            colorClass = 'text-slate-500'; // Abu-abu
            break;
    }

    // Tambahkan div kosong untuk alignment jika tidak ada ikon
    const iconContainer = `<div class="mt-0.5 flex-shrink-0 w-4">${icon}</div>`;

    entry.innerHTML = `${iconContainer} <span>${message}</span>`;
    entry.classList.add(colorClass);

    adminUI.bulkAkunProgressLog.appendChild(entry);
    // Auto-scroll ke bawah
    adminUI.bulkAkunProgressLog.scrollTop = adminUI.bulkAkunProgressLog.scrollHeight;
};

        const lembagaId = window.appState.lembagaId;
        let successCount = 0;
        let errorCount = 0;

        for (let i = 0; i < accountsToCreate.length; i++) {
            const account = accountsToCreate[i];
            const counterText = `(${(i + 1)}/${accountsToCreate.length})`;
            adminUI.bulkProgressCounter.textContent = counterText;

            if (!account.email || !account.nama || (account.role !== 'guru' && account.role !== 'siswa') || !account.password || account.password.length < 6) {
            let errorMsg = "Baris tidak valid.";
            if (!account.password || account.password.length < 6) {
                errorMsg = "Password kosong atau kurang dari 6 karakter.";
            }
            log(`${counterText} GAGAL: ${account.email} - ${errorMsg}`, "error");
            errorCount++;
            continue; // Lanjut ke baris berikutnya
        }

            log(`${counterText} Memulai ${account.email}...`, "info");
            let tempAuthApp = null;
            try {
let namaLengkap;
    let studentDocId = null; // ID dokumen dari koleksi 'students'

    if (account.role === 'guru') {
        // Untuk GURU, nama diambil langsung dari input
        namaLengkap = account.nama;
    } else { 
        // Untuk SISWA, cari siswa yang ada di database
        const studentName = (account.nama || '').toLowerCase();
        const matchingStudents = window.appState.allStudents.filter(
            s => (s.name || '').toLowerCase() === studentName && !s.userId
        );

        // Validasi pencarian siswa
        if (matchingStudents.length === 0) {
            throw new Error(`Siswa "${account.nama}" tidak ditemukan atau sudah punya akun.`);
        }
        if (matchingStudents.length > 1) {
            throw new Error(`Ditemukan >1 siswa "${account.nama}" tanpa akun. Proses ambigu.`);
        }

        // Sukses: Ditemukan 1 siswa yang cocok
        const studentToLink = matchingStudents[0];
        studentDocId = studentToLink.id;
        namaLengkap = studentToLink.name; // Ambil nama asli dari DB
    }

    // 1. Inisialisasi Firebase temporer
    tempAuthApp = firebase.initializeApp(firebaseConfig, `tempBulkApp_${i}`);

    // 2. Buat pengguna di Firebase Auth
            const userCredential = await tempAuthApp.auth().createUserWithEmailAndPassword(account.email, account.password); // <-- Gunakan password dari akun
            const newUid = userCredential.user.uid;

    // 3. Sign out dan hapus app temporer
    await tempAuthApp.auth().signOut();
    await tempAuthApp.delete();

    // 4. Buat dokumen di Firestore 'users'
    const userDocData = {
        email: account.email,
        namaLengkap: namaLengkap, // Gunakan namaLengkap yang sudah divalidasi
        role: account.role,
        lembagaId: lembagaId,
        pin: "", ttl: "", fotoProfilUrl: ""
    };
    await db.collection('users').doc(newUid).set(userDocData);

    // 5. Jika 'siswa', UPDATE dokumen 'students' yang ada
    if (account.role === 'siswa' && studentDocId) {
        await db.collection('students').doc(studentDocId).update({
            userId: newUid // Tautkan akun
        });
    }
    // (Jika 'guru', tidak ada aksi ke 'students', ini sudah benar)

    log(`${counterText} BERHASIL: ${account.email} (${namaLengkap})`, "success");
    successCount++;

            } catch (error) {
                console.error("Gagal buat akun massal:", error);
                let msg = error.code || error.message;
                if (error.code === 'auth/email-already-in-use') msg = "Email sudah ada";
                
                log(`${counterText} GAGAL: ${account.email} - ${msg}`, "error");
                errorCount++;
                
                // Cleanup app temporer jika error
                if (tempAuthApp) {
                    await tempAuthApp.delete().catch(e => console.warn('Gagal cleanup temp app', e));
                }
            }
            
            // --- INI ADALAH BAGIAN PALING PENTING ---
            // Beri jeda 2 detik antar request agar tidak di-block
            await delay(2000); 
        }

        // Proses Selesai
        log("--- PROSES SELESAI ---", "info");
        log(`Total Berhasil: ${successCount}`, "success");
        if (errorCount > 0) {
            log(`Total Gagal: ${errorCount}`, "error");
        }
        
        adminUI.bulkAkunSubmitBtn.disabled = true;
        adminUI.bulkAkunCancelBtn.disabled = false; // Izinkan tombol 'Batal' (sekarang jadi 'Tutup')
        adminUI.bulkAkunCancelBtn.textContent = 'Tutup';
    }
    /**
     * Menangani klik tombol pada daftar akun (Edit, Reset, Hapus).
     */
        async function handleAkunActions(e) {
            const button = e.target.closest('button');
            if (!button) return;

            const action = button.dataset.action;
            // Variabel yang error sudah dihapus dari sini

        switch (action) {
            case 'edit-akun': {
                const item = button.closest('[data-user-id]');
                if (!item) return;
                const userId = item.dataset.userId;
                const userName = item.dataset.userName;
                const userEmail = item.dataset.userEmail;
                // Siapkan modal untuk mode edit
                adminUI.addAkunModalTitle.textContent = "Edit Nama Akun";
                adminUI.akunEditId.value = userId;
                adminUI.akunNama.value = userName;
                adminUI.akunEmail.value = userEmail;
                adminUI.akunEmail.disabled = true; // Email tidak bisa diubah
                adminUI.akunRole.value = window.appState.allUsers.find(u => u.id === userId).role;
                adminUI.akunRole.disabled = true; // Role tidak bisa diubah
                adminUI.akunPasswordContainer.classList.add('hidden'); // Sembunyikan password
                adminUI.akunPassword.required = false;
                adminUI.addAkunSubmitBtn.textContent = "Simpan Perubahan";
                if (adminUI.akunNamaContainer) adminUI.akunNamaContainer.classList.remove('hidden');
                if (adminUI.akunStudentSelectContainer) adminUI.akunStudentSelectContainer.classList.add('hidden');
                if (adminUI.akunNama) adminUI.akunNama.required = true;
                if (adminUI.akunStudentSelect) adminUI.akunStudentSelect.required = false;
                showModal(adminUI.addAkunModal);
                break;
            }

            case 'reset-password-akun': {
            const item = button.closest('[data-user-id]');
            if (!item) return;
            const userName = item.dataset.userName;
            const userEmail = item.dataset.userEmail;
                showConfirmModal({
                    title: "Reset Password?",
                    message: `Anda akan mengirim email reset password ke ${userEmail} (${userName}). Lanjutkan?`,
                    okText: "Ya, Kirim Email",
                    onConfirm: async () => {
                        try {
                            await auth.sendPasswordResetEmail(userEmail);
                            showToast("Email reset password berhasil dikirim.");
                        } catch (error) {
                            console.error("Gagal kirim email reset:", error);
                            showToast("Gagal mengirim email. " + error.message, "error");
                        }
                    }
                });
                break;
            }

            case 'delete-akun': {
            const item = button.closest('[data-user-id]');
            if (!item) return;
            const userId = item.dataset.userId;
            const userName = item.dataset.userName;
                const user = window.appState.allUsers.find(u => u.id === userId);
                if (!user) return;

                showConfirmModal({
                    title: `Hapus Akun ${user.role}?`,
                    message: `Yakin ingin menghapus ${userName}? Ini akan menghapus login mereka. Jika ini siswa, SEMUA RIWAYAT HAFALAN mereka juga akan terhapus permanen.`,
                    okText: "Ya, Hapus Permanen",
                    onConfirm: async () => {
                        try {
                            // Hapus dokumen 'users'
                            await db.collection('users').doc(userId).delete();
                            
                            // Jika siswa, hapus juga 'students' dan 'hafalan'
                            if (user.role === 'siswa') {
                                // 1. Cari dokumen 'students'
                                const studentQuery = await db.collection('students').where('userId', '==', userId).get();
                                
                                if (!studentQuery.empty) {
                                    const studentDoc = studentQuery.docs[0];
                                    const studentDocId = studentDoc.id;

                                    // 2. Hapus semua 'hafalan' yang terkait
                                    const hafalanQuery = await db.collection('hafalan').where('studentId', '==', studentDocId).get();
                                    
                                    const deleteBatch = db.batch();
                                    hafalanQuery.forEach(doc => {
                                        deleteBatch.delete(doc.ref);
                                    });
                                    
                                    // 3. Hapus dokumen 'students'
                                    deleteBatch.delete(studentDoc.ref);
                                    
                                    await deleteBatch.commit();
                                }
                            }
                            
                            showToast(`Akun ${userName} berhasil dihapus.`);
                            // Catatan: Akun Auth-nya masih ada (orphaned), 
                            // tapi tidak bisa login karena dokumen 'users' sudah dihapus.
                            // Ini adalah batasan dari "tanpa Firebase Functions".

                        } catch (error) {
                            console.error("Gagal hapus akun:", error);
                            showToast("Gagal menghapus akun. " + error.message, "error");
                        }
                    }
                });
                break;
            }
            case 'create-akun-for-student': {
                // Ambil data dari tombol yang diklik
                const studentId = button.dataset.studentId;
                const studentName = button.dataset.studentName;

                // 1. Reset form dan atur judul
                adminUI.addAkunForm.reset();
                adminUI.addAkunModalTitle.textContent = `Buat Akun untuk ${studentName}`;

                // 2. Atur status form (non-edit)
                adminUI.akunEditId.value = "";
                adminUI.akunPasswordContainer.classList.remove('hidden');
                adminUI.akunPassword.required = true;
                adminUI.addAkunSubmitBtn.textContent = "Simpan Akun";
                
                // 3. Paksa UI ke mode "Siswa" dan kunci
                adminUI.akunRole.value = 'siswa';
                adminUI.akunRole.disabled = true; // Kunci peran
                adminUI.akunEmail.disabled = false;
                
                adminUI.akunNamaContainer.classList.add('hidden');
                adminUI.akunNama.required = false;
                adminUI.akunStudentSelectContainer.classList.remove('hidden');
                adminUI.akunStudentSelect.required = true;

                // 4. Isi dropdown dengan siswa yang belum punya akun
                populateUnlinkedStudentsSelect(); 
                
                // 5. Pilih otomatis siswa yang kita klik
                adminUI.akunStudentSelect.value = studentId;
                
                // 6. Kunci dropdown siswa agar tidak bisa diubah
                adminUI.akunStudentSelect.disabled = true; 

                // 7. Tampilkan modal
                showModal(adminUI.addAkunModal);
                break;
            }
        }
    }
    function checkUserProfileCompletion() {
            const currentUserUID = window.appState.currentUserUID;
            const role = window.appState.loggedInRole;
            if (!currentUserUID || !role) return;

            const user = window.appState.allUsers.find(u => u.id === currentUserUID);
            // Jika data user belum termuat, fungsi ini akan berjalan lagi nanti saat data sudah ada.
            if (!user) return;

            const isProfileIncomplete = !user.namaLengkap || !user.ttl;
            const isPinMissingForGuru = (role === 'guru' && !user.pin);
            const modal = ui.profileSetupModal;

            if (isProfileIncomplete || isPinMissingForGuru) {
                // Isi form dengan data yang sudah ada jika ada
                modal.namaLengkapInput.value = user.namaLengkap || '';
                modal.ttlInput.value = user.ttl || '';

                // Tampilkan kolom PIN hanya untuk guru dan jadikan wajib diisi
                if (role === 'guru') {
                    modal.pinContainer.classList.remove('hidden');
                    modal.pinInput.required = true;
                } else {
                    modal.pinContainer.classList.add('hidden');
                    modal.pinInput.required = false;
                }

                // Tampilkan modal
                showModal(modal.el);
            } else {
                // Sembunyikan modal jika profil sudah lengkap
                modal.el.classList.add('hidden');
            }
        };
        Object.assign(ui, uiElements);


        function setButtonLoading(button, isLoading) {
            if (!button) return;

            // Cek apakah originalContent sudah disimpan, jika belum, simpan sekarang.
            if (!button.dataset.originalContent) {
                button.dataset.originalContent = button.innerHTML;
            }

            if (isLoading) {
                button.disabled = true;
                const span = button.querySelector('span');
                // Jika ada span, gunakan teks 'Memproses...', jika tidak, biarkan kosong.
                const loadingText = span ? `<span>Memproses...</span>` : '';
                button.innerHTML = `<div class="spinner"></div> ${loadingText}`;
            } else {
                button.disabled = false;
                button.innerHTML = button.dataset.originalContent;
            }
        }

function showConfirmModal({ title, message, okText, onConfirm }) {
    ui.confirmModal.title.textContent = title || 'Konfirmasi';
    ui.confirmModal.text.textContent = message;
    ui.confirmModal.okBtn.textContent = okText || 'Ya, Hapus';
    showModal(ui.confirmModal.el); // Tampilkan modal

    // Ganti nama 'hideModal' lokal menjadi 'closeAndCleanup' untuk menghindari konflik
    const closeAndCleanup = () => {
        hideModal(ui.confirmModal.el); // Panggil helper GLOBAL untuk menutup
        ui.confirmModal.okBtn.removeEventListener('click', handleOk);
        ui.confirmModal.cancelBtn.removeEventListener('click', closeAndCleanup); // <-- Panggil nama baru
    };

    const handleOk = () => {
        onConfirm();
        closeAndCleanup(); // <-- Panggil nama baru (untuk OK/Hapus)
    };
    
    ui.confirmModal.okBtn.addEventListener('click', handleOk);
    ui.confirmModal.cancelBtn.addEventListener('click', closeAndCleanup); // <-- Panggil nama baru (untuk Batal)
}

        // --- DATA FUNCTIONS ---
        function isToday(timestamp) {
            const today = new Date();
            const someDate = new Date(timestamp);
            return someDate.getDate() === today.getDate() &&
                    someDate.getMonth() === today.getMonth() &&
                    someDate.getFullYear() === today.getFullYear();
        }

        function downloadTemplate() {
            const templateData = [
                { No: 1, Nama: "NAMA SISWA CONTOH 1", Kelas: "NAMA KELAS" },
                { No: 2, Nama: "NAMA SISWA CONTOH 2", Kelas: "NAMA KELAS" },
                { No: 3, Nama: "NAMA SISWA CONTOH 3", Kelas: "NAMA KELAS" },
            ];
            const worksheet = XLSX.utils.json_to_sheet(templateData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Template");
            XLSX.writeFile(workbook, "template_import_siswa.xlsx");
        }

function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const importBtn = ui.import.importBtn;
    setButtonLoading(importBtn, true);

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            // Validasi (tetap 'Nama' dan 'Kelas')
            if (!jsonData.length || !jsonData[0].hasOwnProperty('Nama') || !jsonData[0].hasOwnProperty('Kelas')) {
                showToast("Format template tidak sesuai. Pastikan ada kolom 'Nama' dan 'Kelas'.", "error");
                setButtonLoading(importBtn, false);
                return;
            }

            const batches = [];
            let currentBatch = db.batch();
            batches.push(currentBatch);
            let operationCount = 0;

            let newStudentsCount = 0;
            let newClassesCount = 0;
            let migratedCount = 0; 
            let skippedCount = 0; // Data duplikat di file
            let ambiguousCount = 0; // Data ambigu di DB

            // Peta kelas (Nama > ID)
            const classMap = new Map(window.appState.allClasses.map(c => [c.name.toLowerCase().trim(), c.id]));

            // --- LOGIKA BARU: Pengecekan Ambiguitas ---
            // 1. Buat peta siswa berdasarkan nama
            const studentMapByName = new Map();
            // 2. Buat set untuk nama yang ambigu
            const ambiguousNames = new Set();

            for (const student of window.appState.allStudents) {
                const studentKey = (student.name || '').toLowerCase().trim();
                if (!studentKey) continue;

                if (studentMapByName.has(studentKey)) {
                    // Jika nama ini sudah pernah ditemukan, tandai sebagai AMBIGU
                    ambiguousNames.add(studentKey);
                }
                studentMapByName.set(studentKey, student);
            }
            // --- AKHIR LOGIKA BARU ---

            // Set untuk melacak nama yang sudah diproses di *file Excel ini*
            const processedNamesInFile = new Set();

            for (const row of jsonData) {
                if (operationCount >= 499) { // Batas batch
                    currentBatch = db.batch();
                    batches.push(currentBatch);
                    operationCount = 0;
                }

                const studentName = row.Nama?.toString().trim();
                const className = row.Kelas?.toString().trim();
                if (!studentName || !className) continue; // Lewati baris kosong

                const studentKey = studentName.toLowerCase();

                // Cek duplikat di file Excel
                if (processedNamesInFile.has(studentKey)) {
                    skippedCount++;
                    continue;
                }
                processedNamesInFile.add(studentKey);

                // --- PENGECEKAN AMBIGUITAS ---
                if (ambiguousNames.has(studentKey)) {
                    // Nama ini duplikat di database. LEWATI.
                    ambiguousCount++;
                    continue; 
                }
                // --- AKHIR PENGECEKAN ---

                // 1. Tentukan Class ID
                let classId = classMap.get(className.toLowerCase());
                if (!classId) {
                    // Buat kelas baru jika tidak ada
                    const newClassData = { name: className, lembagaId: window.appState.lembagaId };
                    const newClassRef = db.collection('classes').doc();
                    currentBatch.set(newClassRef, newClassData);
                    operationCount++;
                    classId = newClassRef.id;
                    classMap.set(className.toLowerCase(), classId);
                    newClassesCount++;
                }

                // 2. Cek Siswa (Sekarang aman, karena kita sudah filter yang ambigu)
                const existingStudent = studentMapByName.get(studentKey);

                if (existingStudent) {
                    // --- SISWA SUDAH ADA (UNIK) ---
                    const studentRef = db.collection('students').doc(existingStudent.id);
                    let updates = {};

                    // Cek apakah kelasnya berbeda (migrasi)
                    if (existingStudent.classId !== classId) {
                        updates.classId = classId;
                    }
                    // Cek apakah nama di Excel beda (perbaikan nama, misal typo)
                    if (existingStudent.name !== studentName) {
                        updates.name = studentName;
                    }

                    if (Object.keys(updates).length > 0) {
                        currentBatch.update(studentRef, updates);
                        operationCount++;
                        migratedCount++;
                    } else {
                        skippedCount++; // Sama persis, lewati
                    }
                } else {
                    // --- SISWA BARU (NAMA UNIK) ---
                    const newStudent = { name: studentName, classId, lembagaId: window.appState.lembagaId };
                    const newStudentRef = db.collection('students').doc();
                    currentBatch.set(newStudentRef, newStudent);
                    operationCount++;
                    newStudentsCount++;
                }
            }

            // Commit semua batch
            if (batches.length > 0 && (operationCount > 0 || newClassesCount > 0)) {
                await Promise.all(batches.map(batch => batch.commit()));
            }

            hideModal(ui.addStudentModal);

            // Buat pesan laporan yang lebih baik
            let message = `${newStudentsCount} siswa baru ditambahkan.`;
            if (migratedCount > 0) message += ` ${migratedCount} siswa dimigrasi/diperbarui.`;
            if (newClassesCount > 0) message += ` ${newClassesCount} kelas baru dibuat.`;
            if (skippedCount > 0) message += ` ${skippedCount} data duplikat (di file) dilewati.`;
            if (ambiguousCount > 0) message += ` ${ambiguousCount} data dilewati (nama ambigu di database).`;

            showToast(message, 'success');

        } catch (error) {
            console.error("Import Error:", error);
            showToast("Terjadi kesalahan saat memproses file. " + error.message, "error");
        } finally {
            setButtonLoading(importBtn, false);
            event.target.value = '';
        }
    };
    reader.readAsArrayBuffer(file);
}
        function _renderAllImpl() {
            renderSummary();
            renderClassList();
            renderDaftarHadirRoster();
            renderStudentProgressList();
            renderRiwayatList();
            if (window.appState.loggedInRole === 'admin_lembaga') {
                renderManajemenAkunList();
            }
            if (typeof renderJurnalMengajarList === 'function') {
                renderJurnalMengajarList();
            }
        }
        const renderAll = debounce(_renderAllImpl, 50);
function renderSummary() {
    // --- 1. Siswa & Kelas (Tidak berubah) ---
    if (ui.summary.totalSiswa) {
        animateCountUp(ui.summary.totalSiswa, window.appState.allStudents.length, 1000);
    }
    if (ui.summary.totalKelas) {
        animateCountUp(ui.summary.totalKelas, window.appState.allClasses.length, 1000);
    }

    // --- 2. Kalkulasi Rata-rata Nilai (Logika BARU) ---
    let totalNilai = 0;
    let jumlahEntriNilai = 0;

    // Gunakan data 'allJurnal' yang baru
    window.appState.allJurnal.forEach(jurnal => {
        // Asumsikan data Anda memiliki field 'nilai'
        const nilai = parseFloat(jurnal.nilai); 
        if (!isNaN(nilai)) { // Hanya hitung jika 'nilai' adalah angka
            totalNilai += nilai;
            jumlahEntriNilai++;
        }
    });

    const rataRataNilai = (jumlahEntriNilai > 0) ? Math.round(totalNilai / jumlahEntriNilai) : 0;
    
    // --- 3. Render Skor (Menggunakan elemen 'mutqin' lama dari HTML) ---
    // Pastikan HTML Anda di #jurnal-page memiliki elemen ini:
    // <span id="summary-mutqin-count" class="text-teal-700">0</span>
    const rataRataEl = document.getElementById('summary-mutqin-count');
    if (rataRataEl) {
        animateCountUp(rataRataEl, rataRataNilai, 1000);
    }
    
    // Logika Ziyadah/Murajaah trend lama otomatis terhapus
    // karena tidak ada elemennya di HTML baru.
}
        function renderPencapaianPagination(totalItems) {
            const paginationContainer = document.getElementById('pencapaian-pagination-controls');
            if (!paginationContainer) return;

            paginationContainer.innerHTML = '';
            const ITEMS_PER_PAGE = 36;
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

            if (totalPages <= 1) return; 

            const currentPage = window.appState.currentPagePencapaian;

            const createButton = (text, page, isDisabled = false, isActive = false) => {
                const button = document.createElement('button');
                button.innerHTML = text;
                button.disabled = isDisabled;
                button.className = `btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`;
                if (!isDisabled && page) {
                    button.onclick = () => {
                        window.appState.currentPagePencapaian = page;
                        renderStudentProgressList();
                        document.getElementById('student-progress-list').scrollIntoView({ behavior: 'smooth' });
                    };
                }
                return button;
            };
            
            const createEllipsis = () => {
                const span = document.createElement('span');
                span.textContent = '...';
                span.className = 'flex items-center justify-center px-2 py-1 text-slate-500 font-bold';
                return span;
            };

            paginationContainer.appendChild(createButton('‹', currentPage - 1, currentPage === 1));

            const pagesToShow = new Set();
            pagesToShow.add(1);
            pagesToShow.add(totalPages);
            if (currentPage > 2) pagesToShow.add(currentPage - 1);
            pagesToShow.add(currentPage);
            if (currentPage < totalPages - 1) pagesToShow.add(currentPage + 1);

            const sortedPages = Array.from(pagesToShow).sort((a, b) => a - b);
            let lastPage = 0;

            for (const page of sortedPages) {
                if (page > lastPage + 1) {
                    paginationContainer.appendChild(createEllipsis());
                }
                paginationContainer.appendChild(createButton(page, page, false, page === currentPage));
                lastPage = page;
            }

            paginationContainer.appendChild(createButton('›', currentPage + 1, currentPage === totalPages));
        }
            const calculateTrend = (current, previous) => {
                if (previous > 0) return Math.round(((current - previous) / previous) * 100);
                if (current > 0) return 100;
                return 0;
            };

            const renderStudentTrend = (trend) => {
                if (trend === 0) return `<div class="text-xs text-slate-400 flex items-center justify-end gap-1 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3"><line x1="5" y1="12" x2="19" y2="12"></line></svg><span>Tidak ada perubahan</span></div>`;
                
                const colorClass = trend > 0 ? 'text-green-500' : 'text-red-500';
                const icon = trend > 0 
                    ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3"><polyline points="17 11 12 6 7 11"></polyline><line x1="12" y1="18" x2="12" y2="6"></line></svg>`
                    : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-3 h-3"><polyline points="7 13 12 18 17 13"></polyline><line x1="12" y1="6" x2="12" y2="18"></line></svg>`;
                
                return `<div class="text-xs font-semibold ${colorClass} flex items-center justify-end gap-1 mt-1">${icon}<span>${Math.abs(trend)}% 7 hari terakhir</span></div>`;
            }
            
/**
 * GANTI SELURUH FUNGSI renderStudentProgressList DENGAN INI
 */
function renderStudentProgressList() {
    if (!ui.summary.studentProgressList) return;

    // --- 1. Ambil Filter (Logika tidak berubah) ---
    const ITEMS_PER_PAGE = 36;
    const filterClassId = ui.summary.rankFilterClass ? ui.summary.rankFilterClass.value : '';
    const searchTerm = ui.summary.searchStudent ? ui.summary.searchStudent.value.toLowerCase() : '';
    
    let studentsToRank = filterClassId
        ? window.appState.allStudents.filter(s => s.classId === filterClassId)
        : [...window.appState.allStudents];

    if (searchTerm) {
        studentsToRank = studentsToRank.filter(s => s.name.toLowerCase().includes(searchTerm));
    }

    // --- 2. Kalkulasi Skor BARU (Menggantikan logika JUZ) ---
    const studentScores = studentsToRank.map(student => {
        const studentClass = window.appState.allClasses.find(c => c.id === student.classId);
        
        // Filter jurnal HANYA untuk siswa ini
        const studentJurnal = window.appState.allJurnal.filter(j => j.studentId === student.id);
        
        let totalNilai = 0;
        let jumlahEntriNilai = 0;
        let aktivitasTerakhir = 0;

        studentJurnal.forEach(j => {
            const nilai = parseFloat(j.nilai);
            if (!isNaN(nilai)) {
                totalNilai += nilai;
                jumlahEntriNilai++;
            }
            if (j.timestamp > aktivitasTerakhir) {
                aktivitasTerakhir = j.timestamp;
            }
        });

        // Hitung rata-rata nilai siswa ini
        const rataRataNilai = (jumlahEntriNilai > 0) ? Math.round(totalNilai / jumlahEntriNilai) : 0;

        return { 
            id: student.id,
            name: student.name, 
            className: studentClass ? studentClass.name : 'Tanpa Kelas', 
            rataRataNilai: rataRataNilai,      // Metrik baru
            jumlahEntri: studentJurnal.length, // Metrik baru
            aktivitasTerakhir: aktivitasTerakhir // Metrik baru
        };
    });

    // --- 3. Pengurutan BARU (Berdasarkan Rata-rata Nilai) ---
    studentScores.sort((a, b) => {
        if (b.rataRataNilai !== a.rataRataNilai) {
            return b.rataRataNilai - a.rataRataNilai; // Nilai tertinggi dulu
        }
        if (b.jumlahEntri !== a.jumlahEntri) {
            return b.jumlahEntri - a.jumlahEntri; // Jika nilai sama, entri terbanyak
        }
        return a.name.localeCompare(b.name); // Jika masih sama, urutkan nama
    });

    // --- 4. Paginasi (Logika tidak berubah) ---
    const currentPage = window.appState.currentPagePencapaian;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedScores = studentScores.slice(startIndex, endIndex);

    // --- 5. Logika Render (Menggunakan animasi, diadaptasi untuk data BARU) ---
    if (studentScores.length === 0) {
        ui.summary.studentProgressList.innerHTML = `<p class="text-center text-slate-500 py-4">Belum ada data siswa.</p>`;
        document.getElementById('pencapaian-pagination-controls').innerHTML = '';
        return;
    }
    
    const listContainer = ui.summary.studentProgressList;
    
    // Simpan item yang ada di DOM (Logika tidak berubah)
    const existingItems = new Map();
    listContainer.querySelectorAll('.student-progress-item').forEach(item => {
        existingItems.set(item.dataset.studentId, item);
    });

    const fragment = document.createDocumentFragment();
    const currentItemIds = new Set(); 

    paginatedScores.forEach((student, index) => {
        const rank = startIndex + index + 1;
        const studentId = student.id;
        currentItemIds.add(studentId);

        // Siapkan data non-animasi (BARU)
        let aktivitasTerakhirText = 'Belum ada aktivitas';
        if (student.aktivitasTerakhir > 0) {
            aktivitasTerakhirText = `Aktif: ${new Date(student.aktivitasTerakhir).toLocaleDateString('id-ID', { day: '2-digit', month: 'short' })}`;
        }
        
        let rankDisplay = `<span class="font-bold text-slate-500 text-lg w-6 text-center">${rank}</span>`;
        let rankClass = 'bg-slate-50';
        
        if (rank === 1) rankClass = 'bg-teal-100';
        else if (rank === 2) rankClass = 'bg-sky-100';
        else if (rank === 3) rankClass = 'bg-orange-100';

        // Cek apakah item sudah ada di DOM
        if (existingItems.has(studentId)) {
            // --- JIKA SUDAH ADA, UPDATE ---
            const item = existingItems.get(studentId);
            
            item.className = `student-progress-item flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer hover:bg-slate-100 ${rankClass}`;
            const rankEl = item.querySelector('[data-target="rank"]');
            if (rankEl) rankEl.innerHTML = rankDisplay;

            // Update Angka dengan Animasi (BARU)
            const nilaiEl = item.querySelector('[data-target="nilai"]');
            const entriEl = item.querySelector('[data-target="entri"]');
            animateCountUp(nilaiEl, student.rataRataNilai, 800, false);
            animateCountUp(entriEl, student.jumlahEntri, 800, false);

            // Update Teks Aktivitas (BARU)
            const trendEl = item.querySelector('[data-target="trend"]');
            if (trendEl && trendEl.innerHTML !== aktivitasTerakhirText) {
                trendEl.innerHTML = `<span>${aktivitasTerakhirText}</span>`;
            }
            
            // Update Nama/Kelas (Tidak berubah)
            const nameEl = item.querySelector('[data-target="name"]');
            if (nameEl && nameEl.textContent !== student.name) nameEl.textContent = student.name;
            const classEl = item.querySelector('[data-target="class"]');
            if (classEl && classEl.textContent !== student.className) classEl.textContent = student.className;
            
            fragment.appendChild(item);

        } else {
            // --- JIKA ITEM BARU, BUAT (DENGAN ANIMASI) ---
            const item = document.createElement('div');
            item.className = `student-progress-item flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer hover:bg-slate-100 ${rankClass}`;
            item.dataset.studentId = student.id;
        
            // Buat HTML BARU dengan ANGKA AWAL "0"
            item.innerHTML = `
                <div class="flex items-center space-x-4">
                    <span data-target="rank">${rankDisplay}</span>
                    <div>
                        <p data-target="name" class="font-semibold text-slate-700">${student.name}</p>
                        <p data-target="class" class="text-sm text-slate-500">${student.className}</p>
                    </div>
                </div>
                <div class="text-right">
                    <div class="flex justify-end gap-3 sm:gap-4 text-center">
                        <div><p class="font-bold text-teal-600"><span data-target="nilai">0</span></p><p class="text-xs text-slate-500">Nilai</p></div>
                        <div><p class="font-bold text-teal-600"><span data-target="entri">0</span></p><p class="text-xs text-slate-500">Entri</p></div>
                    </div>
                    <div data-target="trend" class="text-xs text-slate-400 flex items-center justify-end gap-1 mt-1">
                        <span>${aktivitasTerakhirText}</span>
                    </div>
                </div>
            `;
            
            fragment.appendChild(item);

            // Panggil animasi untuk item BARU (BARU)
            const nilaiEl = item.querySelector('[data-target="nilai"]');
            const entriEl = item.querySelector('[data-target="entri"]');
            animateCountUp(nilaiEl, student.rataRataNilai, 1200, false);
            animateCountUp(entriEl, student.jumlahEntri, 1200, false);
        }
    });

    // Hapus item lama dari DOM (Logika tidak berubah)
    existingItems.forEach((item, id) => {
        if (!currentItemIds.has(id)) {
            item.remove();
        }
    });
    
    // Render ke DOM (Logika tidak berubah)
    listContainer.innerHTML = ''; 
    listContainer.appendChild(fragment);

    // Render Paginasi (Logika tidak berubah)
    renderPencapaianPagination(studentScores.length);
}
        function renderRiwayatPagination(totalItems) {
            const paginationContainer = document.getElementById('riwayat-pagination-controls');
            if (!paginationContainer) return;

            paginationContainer.innerHTML = '';
            const ITEMS_PER_PAGE = 36;
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

            if (totalPages <= 1) return;

            const currentPage = window.appState.currentPageRiwayat;

            const createButton = (text, page, isDisabled = false, isActive = false) => {
                const button = document.createElement('button');
                button.innerHTML = text;
                button.disabled = isDisabled;
                button.className = `btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`;
                if (!isDisabled && page) {
                    button.onclick = () => {
                        window.appState.currentPageRiwayat = page;
                        renderRiwayatList();
                        document.getElementById('riwayat-list').scrollIntoView({ behavior: 'smooth' });
                    };
                }
                return button;
            };
            
            const createEllipsis = () => {
                const span = document.createElement('span');
                span.textContent = '...';
                span.className = 'flex items-center justify-center px-2 py-1 text-slate-500 font-bold';
                return span;
            };

            paginationContainer.appendChild(createButton('‹', currentPage - 1, currentPage === 1));

            const pagesToShow = new Set();
            pagesToShow.add(1);
            pagesToShow.add(totalPages);
            if (currentPage > 2) pagesToShow.add(currentPage - 1);
            pagesToShow.add(currentPage);
            if (currentPage < totalPages - 1) pagesToShow.add(currentPage + 1);

            const sortedPages = Array.from(pagesToShow).sort((a, b) => a - b);
            let lastPage = 0;

            for (const page of sortedPages) {
                if (page > lastPage + 1) {
                    paginationContainer.appendChild(createEllipsis());
                }
                paginationContainer.appendChild(createButton(page, page, false, page === currentPage));
                lastPage = page;
            }

            paginationContainer.appendChild(createButton('›', currentPage + 1, currentPage === totalPages));
        }
        function renderRiwayatList() {
            if (!ui.riwayat || !ui.riwayat.list) return;

            const ITEMS_PER_PAGE = 36;
            const filterClassId = ui.riwayat.filterClass ? ui.riwayat.filterClass.value : '';
            const searchTerm = ui.riwayat.searchStudent ? ui.riwayat.searchStudent.value.toLowerCase() : '';
            let filteredHafalan = [...window.appState.allHafalan];

            const studentMap = new Map(window.appState.allStudents.map(s => [s.id, s]));
            const classMap = new Map(window.appState.allClasses.map(c => [c.id, c.name]));
            const userMap = new Map(window.appState.allUsers.map(u => [u.id, u.namaLengkap || u.email]));
            const surahNameMap = new Map(surahList.map(s => [s.no, s.nama]));
            const kualitasDisplayMap = { 
                'sangat-lancar': 'Sangat Baik', 'lancar': 'Baik',
                'cukup-lancar': 'Cukup', 'tidak-lancar': 'Kurang',
                'sangat-tidak-lancar': 'Tidak Bisa'
            };

            if (filterClassId) {
                const studentIdsInClass = new Set(
                    window.appState.allStudents
                        .filter(s => s.classId === filterClassId)
                        .map(s => s.id)
                );
                filteredHafalan = filteredHafalan.filter(h => studentIdsInClass.has(h.studentId));
            }

            if (searchTerm) {
                filteredHafalan = filteredHafalan.filter(h => {
                    const student = studentMap.get(h.studentId);
                    return student && student.name.toLowerCase().includes(searchTerm);
                });
            }

            filteredHafalan.sort((a, b) => b.timestamp - a.timestamp);

            const currentPage = window.appState.currentPageRiwayat;
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            const paginatedHafalan = filteredHafalan.slice(startIndex, endIndex);

            ui.riwayat.list.innerHTML = '';
            
            const fragment = document.createDocumentFragment();

            paginatedHafalan.forEach(entry => {
                const student = studentMap.get(entry.studentId);
                if (!student) return;

                const className = classMap.get(student.classId) || 'Tanpa Kelas';
                const surahName = surahNameMap.get(entry.surahNo) || `Surah ${entry.surahNo}`;
                const kualitasText = kualitasDisplayMap[entry.kualitas] || entry.kualitas;
                
                const date = new Date(entry.timestamp).toLocaleDateString('id-ID', {
                    day: 'numeric', month: 'long', year: 'numeric'
                });
                
                const guruName = entry.guruId ? userMap.get(entry.guruId) : null;
                const guruNameHTML = guruName ? `<span class="text-slate-400 mx-1">•</span><span class="text-slate-500 italic">${guruName}</span>` : '';

                let detailHafalanHTML = '';
                let jenisLabel = '';
                let jenisColor = '';

                if (entry.jenis === 'tes') {
                    jenisLabel = 'Tes Hafalan';
                    jenisColor = 'text-purple-600';

                    const testTypeDisplayMap = {
                        'continue-verse': 'Sambung Ayat Setelahnya',
                        'previous-verse': 'Sambung Ayat Sebelumnya',
                        'reorder-verses': 'Menyusun Ulang Ayat',
                        'guess-surah': 'Menebak Surah'
                    };
                    const testTypeText = testTypeDisplayMap[entry.testType] || 'Ujian';

                    detailHafalanHTML = `
                        <span>${entry.catatan || 'Hasil Tes'}</span>
                        <span class="text-slate-400 mx-1">•</span>
                        <span>${testTypeText}</span>
                    `;
                } else {
                    jenisLabel = entry.jenis === 'ziyadah' ? 'Ziyadah' : 'Muraja\'ah';
                    jenisColor = entry.jenis === 'ziyadah' ? 'text-teal-600' : 'text-sky-600';
                    detailHafalanHTML = `
                        <span>${surahName} ${entry.ayatDari}-${entry.ayatSampai}</span>
                        <span class="text-slate-400 mx-1">•</span>
                        <span>${kualitasText}</span>
                    `;
                }

                const deleteButtonHTML = window.appState.loggedInRole === 'guru'
                    ? `<button data-action="delete-riwayat" data-id="${entry.id}" class="delete-riwayat-btn text-red-400 hover:text-red-600 p-1 rounded-full mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                    </button>`
                    : '';

                const item = document.createElement('div');
                item.className = 'riwayat-item flex items-start justify-between p-3 bg-slate-50 rounded-lg gap-4';
                
                item.innerHTML = `
                    <div class="flex-grow">
                        <p class="font-semibold text-slate-800">${student.name}</p>
                        <p class="text-sm text-slate-500">${className}</p>
                        <div class="mt-2 text-sm text-slate-700">
                            <span class="font-medium ${jenisColor}">${jenisLabel}:</span>
                            ${detailHafalanHTML}
                            ${entry.jenis !== 'tes' ? guruNameHTML : ''} 
                        </div>
                    </div>
                    <div class="text-right flex-shrink-0">
                        <p class="text-xs text-slate-500">${date}</p>
                        ${deleteButtonHTML}
                    </div>
                `;

                fragment.appendChild(item);
            });

            ui.riwayat.list.appendChild(fragment);
            renderRiwayatPagination(filteredHafalan.length);
        }

        function renderClassList() {
            const filtersToUpdate = [
                { el: ui.summary.rankFilterClass, defaultText: 'Hasil: Semua Kelas' },
                { el: ui.riwayat.filterClass, defaultText: 'Filter: Semua Kelas' },
                { el: adminUI.akunFilterKelas, defaultText: 'Filter: Semua Kelas' },
                { el: ui.jurnalMengajar.kelasSelect, defaultText: '-- Pilih Kelas --' },
                { el: ui.daftarHadir.filterKelas, defaultText: 'Filter: Semua Kelas' }
            ];
            const selectsToUpdate = [
                { el: ui.newStudentClass, defaultText: '-- Pilih Kelas --' }
            ];

            const currentValues = [
                ...filtersToUpdate.map(f => f.el ? f.el.value : null),
                ...selectsToUpdate.map(s => s.el ? s.el.value : null)
            ];

            ui.classList.innerHTML = '';
            filtersToUpdate.forEach(f => { if(f.el) f.el.innerHTML = `<option value="">${f.defaultText}</option>`; });
                const deleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;
            const editIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>`;
            const eyeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

            window.appState.allClasses.sort((a,b) => a.name.localeCompare(b.name)).forEach(cls => {
                const studentCount = window.appState.allStudents.filter(s => s.classId === cls.id).length;
                const item = document.createElement('div');
                item.className = 'class-item p-2 rounded-lg hover:bg-slate-50';
                item.dataset.classId = cls.id;
                item.innerHTML = `
                    <div class="class-display">
                        <div class="flex justify-between items-center">
                            <div class="flex-grow mr-2">
                                <h3 class="font-semibold text-teal-700 break-all">${cls.name}</h3>
                                <p class="text-xs text-slate-500">${studentCount} siswa</p>
                            </div>
                            <div class="flex items-center space-x-1 flex-shrink-0">
                                <button data-action="edit-class" title="Ubah Nama Kelas" class="inline-flex items-center justify-center rounded-md p-1 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">${editIcon}</button>
                                <button data-action="delete-class" title="Hapus Kelas" class="inline-flex items-center justify-center rounded-md p-1 bg-red-50 text-red-600 hover:bg-red-100 transition-colors">${deleteIcon}</button>
                            </div>
                        </div>
                    </div>
                    <div class="class-edit-form hidden mt-2">
                        <input type="text" value="${cls.name}" class="form-input mb-2 text-sm" required>
                        <div class="flex space-x-2">
                            <button data-action="cancel-edit" class="btn btn-sm btn-secondary flex-1">Batal</button>
                            <button data-action="save-class" class="btn btn-sm btn-primary flex-1">Simpan</button>
                        </div>
                    </div>
                `;

                ui.classList.appendChild(item);
                const option = document.createElement('option');
                option.value = cls.id;
                option.textContent = cls.name;
                
                filtersToUpdate.forEach(f => { if(f.el) f.el.appendChild(option.cloneNode(true)); });
                selectsToUpdate.forEach(s => { if(s.el) s.el.appendChild(option.cloneNode(true)); });
            });
            
            filtersToUpdate.forEach((f, i) => { if(f.el) f.el.value = currentValues[i]; });
            selectsToUpdate.forEach((s, i) => { if(s.el) s.el.value = currentValues[filtersToUpdate.length + i]; });
        }
        // --- Fungsi untuk Menyimpan dan Memuat Sesi Tes ---
        function saveTestState() {
            if (window.appState.currentTest.isActive) {
                sessionStorage.setItem('activeTestState', JSON.stringify(window.appState.currentTest));
            }
        }

        function loadAndRestoreTestState() {
            const savedStateJSON = sessionStorage.getItem('activeTestState');
            if (savedStateJSON) {
                const savedState = JSON.parse(savedStateJSON);
                if (savedState.isActive) {
                    window.appState.currentTest = savedState;
                    
                    // Sembunyikan tampilan setup dan tampilkan progres tes
                    testUI.step1_type_view.classList.add('hidden');
                    testUI.step2_scope_view.classList.add('hidden');
                    testUI.resultView.classList.add('hidden');
                    testUI.progressView.classList.remove('hidden');

                    // Tampilkan kembali soal terakhir yang dibuka
                    displayCurrentQuestion();
                    showToast("Sesi tes sebelumnya berhasil dipulihkan.", "info");
                    return true; // Mengindikasikan sesi berhasil dipulihkan
                }
            }
            return false; // Tidak ada sesi aktif untuk dipulihkan
        }
        // --- TEST HAFALAN FUNCTIONS ---
        // GANTI OBJEK INI
        const testUI = {
            // Tampilan per langkah
            step1_type_view: document.getElementById('test-step-1-type'),
            step2_scope_view: document.getElementById('test-step-2-scope'),
            progressView: document.getElementById('test-progress-view'),
            resultView: document.getElementById('test-result-view'),

            // Kontrol di Langkah 1
            testTypeSelect: document.getElementById('test-type-select'),
            nextStepBtn: document.getElementById('test-next-step-btn'),
            studentSearchContainer: document.getElementById('test-student-search-container'),
            studentSearchInput: document.getElementById('test-student-search-input'),
            studentSearchResults: document.getElementById('test-student-search-results'),
            selectedStudentContainer: document.getElementById('test-selected-student-container'),
            selectedStudentName: document.getElementById('test-selected-student-name'),
            changeStudentBtn: document.getElementById('test-change-student-btn'),
            selectedStudentsList: document.getElementById('test-selected-students-list'),
            questionCountSelect: document.getElementById('test-question-count-select'),
            // Kontrol di Langkah 2
            surahSelectDari: document.getElementById('test-surah-select-dari'),
            surahSelectSampai: document.getElementById('test-surah-select-sampai'),
            juzSelectDari: document.getElementById('test-juz-select-dari'),
            juzSelectSampai: document.getElementById('test-juz-select-sampai'),
            backStepBtn: document.getElementById('test-back-step-btn'),
            startBtn: document.getElementById('start-test-btn'),
            studentSelectLabel: document.getElementById('test-student-select-label'),

            // Elemen di Halaman Progres & Hasil
            questionNumber: document.getElementById('current-question-number'),
            totalQuestions: document.getElementById('total-questions'),
            currentScore: document.getElementById('current-score'),
            questionInstruction: document.getElementById('question-instruction'),
            questionText: document.getElementById('test-question-text'),
            answerOptions: document.getElementById('test-answer-options'),
            feedback: document.getElementById('test-feedback'),
            endTestBtn: document.getElementById('end-test-btn'),
            nextQuestionBtn: document.getElementById('next-question-btn'),
            restartTestBtn: document.getElementById('restart-test-btn'),
            finalScore: document.getElementById('final-score'),
            userAnswerArea: document.getElementById('test-user-answer-area'),
            checkReorderBtn: document.getElementById('check-reorder-btn'),
            previousQuestionBtn: document.getElementById('previous-question-btn'),
        };
        if (window.appState.loggedInRole === 'siswa') {
            if (testUI.studentSearchContainer) testUI.studentSearchContainer.classList.add('hidden');
            if (testUI.selectedStudentsList) testUI.selectedStudentsList.classList.add('hidden');
            if (testUI.studentSelectLabel) testUI.studentSelectLabel.classList.add('hidden');
        }

        // Fungsi untuk mengisi dropdown surah dan juz
        function populateTestSelectors() {

            const surahOptions = '<option value="">-- Dari Surah --</option>' + surahList.map(s => `<option value="${s.no}">${s.no}. ${s.nama}</option>`).join('');
            const juzOptions = '<option value="">-- Dari Juz --</option>' + Array.from({length: 30}, (_, i) => `<option value="${i + 1}">Juz ${i + 1}</option>`).join('');
            
            testUI.surahSelectDari.innerHTML = surahOptions;
            testUI.surahSelectSampai.innerHTML = surahOptions.replace('-- Dari Surah --', '-- Sampai Surah --');
            testUI.juzSelectDari.innerHTML = juzOptions;
            testUI.juzSelectSampai.innerHTML = juzOptions.replace('-- Dari Juz --', '-- Sampai Juz --');
        }
        async function fetchVersesForTest({ surahDari, surahSampai, juzDari, juzSampai }) {
            const commonParams = 'per_page=300&fields=text_uthmani';
            let urls = [];

            if (surahDari && surahSampai) {
                for (let i = parseInt(surahDari); i <= parseInt(surahSampai); i++) {
                    urls.push(`https://api.quran.com/api/v4/verses/by_chapter/${i}?${commonParams}`);
                }
            } else if (juzDari && juzSampai) {
                for (let i = parseInt(juzDari); i <= parseInt(juzSampai); i++) {
                    urls.push(`https://api.quran.com/api/v4/verses/by_juz/${i}?${commonParams}`);
                }
            } else {
                return [];
            }

            try {
                const responses = await Promise.all(urls.map(url => fetch(url)));
                for (const response of responses) {
                    if (!response.ok) {
                        throw new Error(`Gagal mengambil data dari API (Status: ${response.status})`);
                    }
                }
                const data = await Promise.all(responses.map(res => res.json()));
                
                // Gabungkan semua ayat dari semua panggilan API menjadi satu array
                return data.flatMap(d => d.verses || []);
            } catch (error) {
                console.error("Kesalahan pada fetchVersesForTest:", error);
                showToast("Gagal menyambung ke server Al-Qur'an. Periksa koneksi internet Anda.", "error");
                return [];
            }
        }

        async function startTest(event) {
            event.preventDefault();
            const surahDari = testUI.surahSelectDari.value;
            const surahSampai = testUI.surahSelectSampai.value;
            const juzDari = testUI.juzSelectDari.value;
            const juzSampai = testUI.juzSelectSampai.value;
            const testType = testUI.testTypeSelect.value;
            // ▼▼▼ BARIS BARU: Ambil nilai jumlah soal ▼▼▼
            const totalQuestions = parseInt(testUI.questionCountSelect.value, 10);

            if ((!surahDari && !juzDari) || (!surahSampai && !juzSampai)) {
                showToast("Silakan pilih rentang surah atau juz terlebih dahulu.", "error");
                return;
            }

            if ((surahDari && parseInt(surahDari) > parseInt(surahSampai)) || (juzDari && parseInt(juzDari) > parseInt(juzSampai))) {
                showToast("Pilihan 'Dari' tidak boleh lebih besar dari 'Sampai'.", "error");
                return;
            }

            setButtonLoading(testUI.startBtn, true);

            try {
                const verses = await fetchVersesForTest({ surahDari, surahSampai, juzDari, juzSampai });
                if (!verses || verses.length === 0) {
                    showToast("Tidak ada ayat yang ditemukan untuk pilihan ini.", "error");
                    return;
                }

                // ▼▼▼ BARIS YANG DIUBAH: Gunakan variabel totalQuestions ▼▼▼
                const questions = generateQuestions(verses, testType, totalQuestions);
                
                if (questions.length === 0) {
                    return;
                }
                
                Object.assign(window.appState.currentTest, {
                    isActive: true,
                    questions: questions,
                    currentQuestionIndex: 0,
                    score: 0,
                    settings: { surahDari, surahSampai, juzDari, juzSampai, testType }
                });
                
                testUI.step2_scope_view.classList.add('hidden');
                testUI.progressView.classList.remove('hidden');
                displayCurrentQuestion();

            } catch (error) {
                console.error("Gagal memulai tes:", error);
                showToast(error.message || "Gagal memuat data tes. Periksa koneksi Anda.", "error");
            } finally {
                setButtonLoading(testUI.startBtn, false);
            }
        }

        // Fungsi untuk membuat pertanyaan (Ini adalah logika inti yang bisa sangat dikembangkan)
        function generateQuestions(verses, testType, totalQuestions = 10) {
            let questions = [];
            const surahNameList = [ { no: 1, nama: "Al-Fatihah", ayat: 7 }, { no: 2, nama: "Al-Baqarah", ayat: 286 }, { no: 3, nama: "Ali 'Imran", ayat: 200 }, { no: 4, nama: "An-Nisa'", ayat: 176 }, { no: 5, nama: "Al-Ma'idah", ayat: 120 }, { no: 6, nama: "Al-An'am", ayat: 165 }, { no: 7, nama: "Al-A'raf", ayat: 206 }, { no: 8, nama: "Al-Anfal", ayat: 75 }, { no: 9, nama: "At-Taubah", ayat: 129 }, { no: 10, nama: "Yunus", ayat: 109 }, { no: 11, nama: "Hud", ayat: 123 }, { no: 12, nama: "Yusuf", ayat: 111 }, { no: 13, nama: "Ar-Ra'd", ayat: 43 }, { no: 14, nama: "Ibrahim", ayat: 52 }, { no: 15, nama: "Al-Hijr", ayat: 99 }, { no: 16, nama: "An-Nahl", ayat: 128 }, { no: 17, nama: "Al-Isra'", ayat: 111 }, { no: 18, nama: "Al-Kahf", ayat: 110 }, { no: 19, nama: "Maryam", ayat: 98 }, { no: 20, nama: "Taha", ayat: 135 }, { no: 21, nama: "Al-Anbiya'", ayat: 112 }, { no: 22, nama: "Al-Hajj", ayat: 78 }, { no: 23, nama: "Al-Mu'minun", ayat: 118 }, { no: 24, nama: "An-Nur", ayat: 64 }, { no: 25, "nama": "Al-Furqan", ayat: 77 }, { no: 26, nama: "Asy-Syu'ara'", ayat: 227 }, { no: 27, nama: "An-Naml", ayat: 93 }, { no: 28, nama: "Al-Qasas", ayat: 88 }, { no: 29, nama: "Al-'Ankabut", ayat: 69 }, { no: 30, nama: "Ar-Rum", ayat: 60 }, { no: 31, nama: "Luqman", ayat: 34 }, { no: 32, nama: "As-Sajdah", ayat: 30 }, { no: 33, nama: "Al-Ahzab", ayat: 73 }, { no: 34, nama: "Saba'", ayat: 54 }, { no: 35, nama: "Fatir", ayat: 45 }, { no: 36, nama: "Yasin", ayat: 83 }, { no: 37, nama: "As-Saffat", ayat: 182 }, { no: 38, nama: "Sad", ayat: 88 }, { no: 39, nama: "Az-Zumar", ayat: 75 }, { no: 40, nama: "Ghafir", ayat: 85 }, { no: 41, nama: "Fussilat", ayat: 54 }, { no: 42, nama: "Asy-Syura", ayat: 53 }, { no: 43, nama: "Az-Zukhruf", ayat: 89 }, { no: 44, nama: "Ad-Dukhan", ayat: 59 }, { no: 45, nama: "Al-Jasiyah", ayat: 37 }, { no: 46, nama: "Al-Ahqaf", ayat: 35 }, { no: 47, nama: "Muhammad", ayat: 38 }, { no: 48, nama: "Al-Fath", ayat: 29 }, { no: 49, nama: "Al-Hujurat", ayat: 18 }, { no: 50, nama: "Qaf", ayat: 45 }, { no: 51, nama: "Az-Zariyat", ayat: 60 }, { no: 52, nama: "At-Tur", ayat: 49 }, { no: 53, nama: "An-Najm", ayat: 62 }, { no: 54, nama: "Al-Qamar", ayat: 55 }, { no: 55, nama: "Ar-Rahman", ayat: 78 }, { no: 56, nama: "Al-Waqi'ah", ayat: 96 }, { no: 57, nama: "Al-Hadid", ayat: 29 }, { no: 58, nama: "Al-Mujadalah", ayat: 22 }, { no: 59, nama: "Al-Hasyr", ayat: 24 }, { no: 60, nama: "Al-Mumtahanah", ayat: 13 }, { no: 61, nama: "As-Saff", ayat: 14 }, { no: 62, nama: "Al-Jumu'ah", ayat: 11 }, { no: 63, nama: "Al-Munafiqun", ayat: 11 }, { no: 64, nama: "At-Tagabun", ayat: 18 }, { no: 65, nama: "At-Talaq", ayat: 12 }, { no: 66, nama: "At-Tahrim", ayat: 12 }, { no: 67, nama: "Al-Mulk", ayat: 30 }, { no: 68, nama: "Al-Qalam", ayat: 52 }, { no: 69, nama: "Al-Haqqah", ayat: 52 }, { no: 70, nama: "Al-Ma'arij", ayat: 44 }, { no: 71, nama: "Nuh", ayat: 28 }, { no: 72, nama: "Al-Jinn", ayat: 28 }, { no: 73, nama: "Al-Muzzammil", ayat: 20 }, { no: 74, nama: "Al-Muddassir", ayat: 56 }, { no: 75, nama: "Al-Qiyamah", ayat: 40 }, { no: 76, nama: "Al-Insan", ayat: 31 }, { no: 77, nama: "Al-Mursalat", ayat: 50 }, { no: 78, nama: "An-Naba'", ayat: 40 }, { no: 79, nama: "An-Nazi'at", ayat: 46 }, { no: 80, nama: "'Abasa", ayat: 42 }, { no: 81, nama: "At-Takwir", ayat: 29 }, { no: 82, nama: "Al-Infitar", ayat: 19 }, { no: 83, nama: "Al-Mutaffifin", ayat: 36 }, { no: 84, nama: "Al-Insyiqaq", ayat: 25 }, { no: 85, nama: "Al-Buruj", ayat: 22 }, { no: 86, "nama": "At-Tariq", ayat: 17 }, { no: 87, nama: "Al-A'la", ayat: 19 }, { no: 88, nama: "Al-Gasyiyah", ayat: 26 }, { no: 89, nama: "Al-Fajr", ayat: 30 }, { no: 90, nama: "Al-Balad", ayat: 20 }, { no: 91, nama: "Asy-Syams", ayat: 15 }, { no: 92, nama: "Al-Lail", ayat: 21 }, { no: 93, nama: "Ad-Duha", ayat: 11 }, { no: 94, nama: "Asy-Syarh", ayat: 8 }, { no: 95, nama: "At-Tin", ayat: 8 }, { no: 96, nama: "Al-'Alaq", ayat: 19 }, { no: 97, nama: "Al-Qadr", ayat: 5 }, { no: 98, nama: "Al-Bayyinah", ayat: 8 }, { no: 99, nama: "Az-Zalzalah", ayat: 8 }, { no: 100, nama: "Al-'Adiyat", ayat: 11 }, { no: 101, nama: "Al-Qari'ah", ayat: 11 }, { no: 102, nama: "At-Takasur", ayat: 8 }, { no: 103, nama: "Al-'Asr", ayat: 3 }, { no: 104, nama: "Al-Humazah", ayat: 9 }, { no: 105, nama: "Al-Fil", ayat: 5 }, { no: 106, nama: "Quraisy", ayat: 4 }, { no: 107, nama: "Al-Ma'un", ayat: 7 }, { no: 108, nama: "Al-Kausar", ayat: 3 }, { no: 109, nama: "Al-Kafirun", ayat: 6 }, { no: 110, nama: "An-Nasr", ayat: 3 }, { no: 111, nama: "Al-Masad", ayat: 5 }, { no: 112, nama: "Al-Ikhlas", ayat: 4 }, { no: 113, nama: "Al-Falaq", ayat: 5 }, { no: 114, nama: "An-Nas", ayat: 6 } ];
            if (testType === 'continue-verse') {
            const possibleQuestionIndices = [];
            if (verses.length > 1) {
                for (let i = 0; i < verses.length - 1; i++) {
                    // Pastikan kedua ayat (soal dan jawaban) memiliki teks
                    if (verses[i].text_uthmani && verses[i+1].text_uthmani) {
                        possibleQuestionIndices.push(i);
                    }
                }
            }

            if (possibleQuestionIndices.length < 4) {
                showToast("Tidak cukup materi ayat berurutan di lingkup ini untuk membuat tes.", "info");
                return [];
            }

            if (possibleQuestionIndices.length < totalQuestions) {
                totalQuestions = possibleQuestionIndices.length;
            }

            // 2. Pilih beberapa indeks secara acak untuk dijadikan soal
            const selectedIndices = new Set();
            while(selectedIndices.size < totalQuestions) {
                const randomIndex = Math.floor(Math.random() * possibleQuestionIndices.length);
                selectedIndices.add(possibleQuestionIndices[randomIndex]);
            }

            for (const index of selectedIndices) {
                const questionVerse = verses[index];
                const correctAnswerVerse = verses[index + 1];

                const questionText = questionVerse.text_uthmani;
                const correctAnswerText = correctAnswerVerse.text_uthmani;
                
                // 3. Kumpulkan 3 ayat lain sebagai jawaban salah (pengecoh)
                let wrongAnswers = [];
                let otherVerseIndices = verses.map((_, i) => i).filter(i => i !== index && i !== (index + 1));

                // Acak indeks pengecoh
                for (let i = otherVerseIndices.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [otherVerseIndices[i], otherVerseIndices[j]] = [otherVerseIndices[j], otherVerseIndices[i]];
                }
                
                for (const otherIndex of otherVerseIndices) {
                    if (wrongAnswers.length >= 3) break;
                    if (verses[otherIndex].text_uthmani) {
                        wrongAnswers.push(verses[otherIndex].text_uthmani);
                    }
                }

                questions.push({
                    type: 'continue-verse',
                    instruction: 'Lanjutkan ayat berikut ini:', // Ubah instruksi
                    question: questionText,                     // Soal: Ayat penuh
                    options: [correctAnswerText, ...wrongAnswers].sort(() => Math.random() - 0.5),
                    answer: correctAnswerText,                  // Jawaban: Ayat penuh berikutnya
                    isAnswered: false,
                    userAnswer: null,
                    isCorrect: null
                });
            }
            
            } else if (testType === 'previous-verse') {
                // ... (logika 'previous-verse' yang sudah ada, tidak perlu diubah)
                if (verses.length < 4) {
                    showToast("Tidak cukup materi ayat di lingkup ini untuk membuat tes.", "info");
                    return [];
                }
                
                const possibleQuestionIndices = [];
                for (let i = 1; i < verses.length; i++) {
                    possibleQuestionIndices.push(i);
                }

                if (possibleQuestionIndices.length < totalQuestions) {
                    totalQuestions = possibleQuestionIndices.length;
                }
                
                const questionIndices = new Set();
                while(questionIndices.size < totalQuestions) {
                    const randomIndex = Math.floor(Math.random() * possibleQuestionIndices.length);
                    questionIndices.add(possibleQuestionIndices[randomIndex]);
                }

                for (const index of questionIndices) {
                    const questionVerse = verses[index];
                    const correctVerse = verses[index - 1]; 

                    const questionText = questionVerse.text_uthmani;
                    const correctAnswerText = correctVerse.text_uthmani;
                    
                    let wrongAnswers = [];
                    let allOtherVerseIndices = verses.map((_, i) => i).filter(i => i !== index && i !== (index - 1));

                    for (let i = allOtherVerseIndices.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [allOtherVerseIndices[i], allOtherVerseIndices[j]] = [allOtherVerseIndices[j], allOtherVerseIndices[i]];
                    }
                    
                    for (const otherIndex of allOtherVerseIndices) {
                        if (wrongAnswers.length >= 3) break;
                        wrongAnswers.push(verses[otherIndex].text_uthmani);
                    }

                    questions.push({
                        type: 'previous-verse',
                        instruction: 'Sebutkan ayat SEBELUM ayat berikut:',
                        question: questionText,
                        options: [correctAnswerText, ...wrongAnswers].sort(() => Math.random() - 0.5),
                        answer: correctAnswerText,
                        isAnswered: false,
                        userAnswer: null,
                        isCorrect: null
                    });
                }
                    } else if (testType === 'reorder-verses') {
                        // GANTI BLOK LAMA DENGAN SEMUA KODE DI BAWAH INI
                        const suitableVerses = verses.map(v => {
                            if (!v.text_uthmani) return null;
                            
                            // LANGKAH 1: Gunakan trim() dan split() yang kuat untuk memisahkan kata secara andal.
                            let words = v.text_uthmani.trim().split(/\s+/);

                            // LANGKAH 2: Daftar tanda waqaf yang akan digabungkan.
                            const waqfSigns = ['صلى', 'قلى', 'ج', 'م', 'لا', 'ۛ'];

                            // LANGKAH 3: Gabungkan penanda akhir ayat (misal: ﴿٥﴾) dengan kata sebelumnya.
                            // Ini penting dilakukan sebelum menggabungkan waqof.
                            if (words.length > 1 && words[words.length - 1].includes('﴿')) {
                                words[words.length - 2] = words[words.length - 2] + ' ' + words[words.length - 1];
                                words.pop(); // Hapus elemen terakhir yang sudah digabung.
                            }
                            
                            // LANGKAH 4: Iterasi dari belakang untuk mencari dan menggabungkan tanda waqof.
                            for (let i = words.length - 1; i > 0; i--) {
                                // Bersihkan "kata" dari harakat/diacritics sebelum membandingkan.
                                const cleanedWord = words[i].trim().replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '');
                                
                                // Jika kata yang sudah dibersihkan adalah tanda waqof:
                                if (waqfSigns.includes(cleanedWord)) {
                                    // Gabungkan dengan kata sebelumnya.
                                    words[i - 1] = words[i - 1] + ' ' + words[i];
                                    // Hapus elemen tanda waqaf yang berdiri sendiri.
                                    words.splice(i, 1);
                                }
                            }
                            
                            return {
                                ...v,
                                processed_words: words,
                                word_count: words.length
                            };
                        }).filter(v => {
                            if (!v) return false;
                            // Filter ayat yang cocok untuk dijadikan soal (antara 4-20 kata).
                            return v.word_count >= 4 && v.word_count <= 20;
                        });

                    if (suitableVerses.length === 0) {
                        showToast("Tidak cukup materi ayat (4-20 kata) di lingkup ini untuk tes susun ulang.", "info");
                        return [];
                    }

                    if (suitableVerses.length < totalQuestions) {
                        totalQuestions = suitableVerses.length;
                    }

                    const questionVerseIndices = new Set();
                    while(questionVerseIndices.size < totalQuestions && questionVerseIndices.size < suitableVerses.length) {
                        questionVerseIndices.add(Math.floor(Math.random() * suitableVerses.length));
                    }

                    for (const index of questionVerseIndices) {
                        const verse = suitableVerses[index];
                        const correctWords = verse.processed_words;
                        
                        const shuffledWords = [...correctWords].sort(() => Math.random() - 0.5);

                        const [surahNo, ayatNo] = verse.verse_key.split(':');
                        const surahInfo = surahNameList.find(s => s.no == surahNo);
                        const questionContext = `(QS. ${surahInfo ? surahInfo.nama : surahNo}:${ayatNo})`;

                        questions.push({
                            type: 'reorder-verses',
                            instruction: 'Susun ulang potongan kata berikut menjadi ayat yang benar:',
                            question: questionContext,
                            options: shuffledWords,
                            answer: correctWords.join(' '),
                            isAnswered: false,
                            userAnswer: null,
                            isCorrect: null
                        });
                    }
                    } else if (testType === 'guess-surah') {
                const surahsInScopeIds = new Set();
                verses.forEach(v => {
                    const [surahNo] = v.verse_key.split(':');
                    surahsInScopeIds.add(parseInt(surahNo, 10));
                });

                // 2. Buat daftar nama surah yang valid HANYA dari lingkup tersebut
                const surahsInScope = surahNameList.filter(s => surahsInScopeIds.has(s.no));

                // 3. Lakukan pengecekan: Jika surah unik kurang dari 2, tes tidak bisa dibuat
                if (surahsInScope.length < 2) {
                    showToast("Lingkup yang dipilih terlalu sempit untuk membuat soal tebak surah (minimal harus ada 2 surah).", "info");
                    return [];
                }
                
                // Pastikan ada cukup ayat untuk dijadikan soal
                if (verses.length < 4) {
                    showToast("Tidak cukup materi ayat di lingkup ini untuk membuat tes.", "info");
                    return [];
                }

                if (verses.length < totalQuestions) {
                    totalQuestions = verses.length;
                }

                const questionVerseIndices = new Set();
                while (questionVerseIndices.size < totalQuestions && questionVerseIndices.size < verses.length) {
                    questionVerseIndices.add(Math.floor(Math.random() * verses.length));
                }

                for (const index of questionVerseIndices) {
                    const verse = verses[index];
                    const [surahNo, ayatNo] = verse.verse_key.split(':');
                    
                    const correctSurahInfo = surahNameList.find(s => s.no == surahNo);
                    if (!correctSurahInfo) continue;
                    const correctAnswer = correctSurahInfo.nama;

                    // 4. Kumpulkan jawaban salah HANYA dari daftar 'surahsInScope'
                    let wrongAnswers = new Set();
                    // Loop akan berhenti jika sudah dapat 3 pengecoh ATAU jika semua surah lain sudah dipakai
                    while (wrongAnswers.size < 3 && wrongAnswers.size < (surahsInScope.length - 1)) {
                        // Ambil surah acak dari daftar lingkup yang valid
                        const randomSurah = surahsInScope[Math.floor(Math.random() * surahsInScope.length)];
                        
                        if (randomSurah.nama !== correctAnswer) {
                            wrongAnswers.add(randomSurah.nama);
                        }
                    }

                    questions.push({
                        type: 'guess-surah',
                        instruction: 'Ayat berikut terdapat dalam surah...',
                        question: verse.text_uthmani,
                        options: [correctAnswer, ...Array.from(wrongAnswers)].sort(() => Math.random() - 0.5),
                        answer: correctAnswer,
                        isAnswered: false,
                        userAnswer: null,
                        isCorrect: null
                    });
                }
                } else {
                    showToast(`Jenis tes yang dipilih belum tersedia.`, "info");
                    return [];
                }
                return questions;
            }
        // Fungsi untuk menampilkan pertanyaan saat ini
        function displayCurrentQuestion() {
            const test = window.appState.currentTest;
            if (!test.isActive || test.currentQuestionIndex >= test.questions.length) {
                endTest();
                return;
            }

            const q = test.questions[test.currentQuestionIndex];
            
            testUI.questionNumber.textContent = test.currentQuestionIndex + 1;
            testUI.totalQuestions.textContent = test.questions.length;
            testUI.currentScore.textContent = Math.round(test.score);
            testUI.questionInstruction.textContent = q.instruction;
            testUI.questionText.textContent = q.question;
            testUI.answerOptions.innerHTML = '';
            testUI.userAnswerArea.innerHTML = '';
            testUI.feedback.classList.add('hidden');
            if (q.type === 'reorder-verses' && !q.isAnswered) {
                // Jika soalnya 'susun ulang' DAN belum dijawab, TAMPILKAN tombol
                testUI.checkReorderBtn.classList.remove('hidden');
            } else {
                // Untuk semua kondisi lain, SEMBUNYIKAN tombol
                testUI.checkReorderBtn.classList.add('hidden');
            }

            // Atur status tombol navigasi
            testUI.previousQuestionBtn.disabled = (test.currentQuestionIndex === 0);
            testUI.nextQuestionBtn.disabled = (test.currentQuestionIndex === test.questions.length - 1);

            const renderOptions = (isAnswered) => {
                if (q.type === 'reorder-verses') {
                    testUI.answerOptions.className = 'flex flex-wrap justify-center gap-2';
                    testUI.userAnswerArea.classList.remove('hidden');
                    
                    const wordsToDisplay = isAnswered ? q.answer.split(' ') : q.options;
                    const targetContainer = isAnswered ? testUI.userAnswerArea : testUI.answerOptions;

                    wordsToDisplay.forEach(word => {
                        const element = document.createElement('button');
                        element.className = 'word-in-answer';
                        element.textContent = word;
                        element.dir = 'rtl';
                        element.disabled = isAnswered;
                        targetContainer.appendChild(element);
                    });

                } else {
                    testUI.answerOptions.className = 'space-y-3';
                    testUI.userAnswerArea.classList.add('hidden');

                    q.options.forEach(option => {
                        const button = document.createElement('button');
                        button.textContent = option;
                        button.disabled = isAnswered;

                        if (!isAnswered) {
                            button.onclick = () => checkAnswer(option, q.answer);
                        }
                        
                        if (q.type === 'guess-surah') {
                            button.className = 'btn btn-secondary w-full text-left';
                            button.dir = 'ltr';
                        } else {
                            button.className = 'btn btn-secondary w-full text-right font-lateef text-xl';
                            button.dir = 'rtl';
                        }

                        if (isAnswered) {
                            if (option === q.answer) {
                                button.classList.add('btn-success');
                            }
                            if (option === q.userAnswer && !q.isCorrect) {
                                button.classList.add('btn-danger');
                            }
                        }
                        testUI.answerOptions.appendChild(button);
                    });
                }
            };

            if (q.isAnswered) {
                testUI.feedback.textContent = q.isCorrect ? "Benar!" : "Kurang Tepat";
                testUI.feedback.className = `mt-4 text-center font-semibold ${q.isCorrect ? 'text-green-600' : 'text-red-600'}`;
                testUI.feedback.classList.remove('hidden');
                renderOptions(true);
            } else {
                renderOptions(false);
            }
        }
        function checkAnswer(selectedOption, correctAnswer) {
            const test = window.appState.currentTest;
            const q = test.questions[test.currentQuestionIndex];
            
            if (q.isAnswered) return; // Mencegah menjawab ulang

            const isCorrect = selectedOption === correctAnswer;
            
            q.isAnswered = true;
            q.userAnswer = selectedOption;
            q.isCorrect = isCorrect;

            // Hitung ulang skor dari awal agar akurat
            const pointsPerQuestion = 100 / test.questions.length;
            test.score = test.questions.reduce((total, question) => {
                return total + (question.isCorrect ? pointsPerQuestion : 0);
            }, 0);
            
            saveTestState(); // Simpan state setelah menjawab
            displayCurrentQuestion(); // Tampilkan ulang soal dalam mode "sudah dijawab"
        }
        function showNextQuestion() {
            const test = window.appState.currentTest;
            if (test.currentQuestionIndex < test.questions.length - 1) {
                test.currentQuestionIndex++;
                saveTestState(); // Simpan state setelah navigasi
                displayCurrentQuestion();
            }
        }
        function showPreviousQuestion() {
            const test = window.appState.currentTest;
            if (test.currentQuestionIndex > 0) {
                test.currentQuestionIndex--;
                saveTestState(); // Simpan state setelah navigasi
                displayCurrentQuestion();
            }
        }
        async function endTest() {
            const test = window.appState.currentTest;
            const finalRoundedScore = Math.round(test.score); // Bulatkan skor di awal

            testUI.progressView.classList.add('hidden');
            testUI.resultView.classList.remove('hidden');
            // ▼▼▼ BARIS DI BAWAH INI DIUBAH ▼▼▼
            testUI.finalScore.textContent = finalRoundedScore;

            if (test.studentIds.length > 0) {
                const savePromises = test.studentIds.map(studentId => {
                    let kualitas;
                    // Gunakan skor yang sudah dibulatkan untuk menentukan kualitas
                    if (finalRoundedScore >= 90) kualitas = 'sangat-lancar';
                    else if (finalRoundedScore >= 70) kualitas = 'lancar';
                    else if (finalRoundedScore >= 50) kualitas = 'cukup-lancar';
                    else if (finalRoundedScore >= 30) kualitas = 'tidak-lancar';
                    else kualitas = 'sangat-tidak-lancar';
                    
                    const { surahDari, surahSampai, juzDari, juzSampai, testType } = test.settings;
                    let materi = 'Materi Pilihan';
                    if (surahDari) {
                        const infoDari = surahList.find(s => s.no == surahDari)?.nama;
                        const infoSampai = surahList.find(s => s.no == surahSampai)?.nama;
                        materi = (surahDari === surahSampai) ? `Surah ${infoDari}` : `Surah ${infoDari} - ${infoSampai}`;
                    } else if (juzDari) {
                        materi = (juzDari === juzSampai) ? `Juz ${juzDari}` : `Juz ${juzDari} - ${juzSampai}`;
                    }

                    const newEntry = {
                        studentId: studentId,
                        jenis: 'tes', kualitas: kualitas,
                        surahNo: 0, ayatDari: 0, ayatSampai: 0,
                        // ▼▼▼ BARIS DI BAWAH INI DIUBAH ▼▼▼
                        catatan: `Skor: ${finalRoundedScore} dari ${test.questions.length} Soal | Materi: ${materi}`,
                        testType: testType, timestamp: Date.now(),
                        lembagaId: window.appState.lembagaId,
                        guruId: window.appState.currentUserUID
                    };
                    return onlineDB.add('hafalan', newEntry);
                });

                try {
                    await Promise.all(savePromises);
                    showToast(`Hasil tes berhasil disimpan.`, "success");
                } catch (error) {
                    console.error("Gagal menyimpan hasil tes:", error);
                    showToast("Gagal menyimpan sebagian atau semua hasil tes.", "error");
                }
            }
            window.appState.currentTest.isActive = false;
            sessionStorage.removeItem('activeTestState');
        }
        function restartTest() {
            testUI.resultView.classList.add('hidden');
            testUI.progressView.classList.add('hidden');
            testUI.step2_scope_view.classList.add('hidden');
            testUI.step1_type_view.classList.remove('hidden');

            // PERBAIKAN: Gunakan nama elemen yang benar untuk mereset dropdown
            testUI.surahSelectDari.value = '';
            testUI.surahSelectSampai.value = '';
            testUI.juzSelectDari.value = '';
            testUI.juzSelectSampai.value = '';
            
            // PERBAIKAN: Reset state siswa yang dipilih dan perbarui tampilan
            if (window.appState.currentTest.studentIds) {
                window.appState.currentTest.studentIds = [];
            }
            renderSelectedStudentsForTest();
            sessionStorage.removeItem('activeTestState');
        }
        function searchStudentsForTest() {
            const searchTerm = testUI.studentSearchInput.value.toLowerCase().trim();
            testUI.studentSearchResults.innerHTML = '';

            if (searchTerm.length < 2) {
                testUI.studentSearchResults.classList.add('hidden');
                return;
            }

            const selectedIds = window.appState.currentTest.studentIds;
            const matchingStudents = window.appState.allStudents
                .filter(s => 
                    !selectedIds.includes(s.id) && // <-- Tambahan: Sembunyikan yang sudah dipilih
                    s.name.toLowerCase().includes(searchTerm)
                )
                .slice(0, 10); // Batasi hasil hingga 10

            if (matchingStudents.length > 0) {
                matchingStudents.forEach(student => {
                    const studentClass = window.appState.allClasses.find(c => c.id === student.classId);
                    const item = document.createElement('div');
                    item.className = 'p-3 hover:bg-slate-100 cursor-pointer';
                    item.innerHTML = `<p class="font-medium">${student.name}</p><p class="text-sm text-slate-500">${studentClass ? studentClass.name : 'Tanpa Kelas'}</p>`;
                    item.dataset.studentId = student.id;
                    item.dataset.studentName = student.name;
                    testUI.studentSearchResults.appendChild(item);
                });
                testUI.studentSearchResults.classList.remove('hidden');
            } else {
                testUI.studentSearchResults.classList.add('hidden');
            }
        }
        function renderSelectedStudentsForTest() {
            testUI.selectedStudentsList.innerHTML = '';
            const selectedIds = window.appState.currentTest.studentIds;

            if (selectedIds.length === 0) return;

            selectedIds.forEach(studentId => {
                const student = window.appState.allStudents.find(s => s.id === studentId);
                if (student) {
                    const tag = document.createElement('div');
                    tag.className = 'flex items-center gap-2 bg-teal-100 text-teal-800 text-sm font-medium px-2.5 py-1 rounded-full';
                    tag.innerHTML = `
                        <span>${student.name}</span>
                        <button data-action="remove-student" data-id="${student.id}" class="text-teal-500 hover:text-teal-700">&times;</button>
                    `;
                    testUI.selectedStudentsList.appendChild(tag);
                }
            });
        }

        // Fungsi untuk MENAMBAH siswa ke daftar tes
        function addStudentToTest(studentId) {
            const { studentIds } = window.appState.currentTest;
            // Cek agar tidak ada duplikat
            if (!studentIds.includes(studentId)) {
                studentIds.push(studentId);
                renderSelectedStudentsForTest();
            }
            // Kosongkan input dan sembunyikan hasil pencarian
            testUI.studentSearchInput.value = '';
            testUI.studentSearchResults.classList.add('hidden');
        }

        // Fungsi untuk MENGHAPUS siswa dari daftar tes
        function removeStudentFromTest(studentId) {
            window.appState.currentTest.studentIds = window.appState.currentTest.studentIds.filter(id => id !== studentId);
            renderSelectedStudentsForTest();
        }
        // --- EVENT HANDLERS (CRUD) ---
        
        function getMutqinScores() {
            return window.appState.pengaturan.skorMutqin;
        }

        function getQuranScope() {
            return window.appState.pengaturan.lingkupHafalan;
        }

        async function saveMutqinScores(scores) {
            const currentUserUID = window.appState.currentUserUID;
            if (!currentUserUID) return showToast("Error: User tidak teridentifikasi.", "error");

            try {
                const snapshot = await db.collection('pengaturan')
                    .where('nama', '==', 'skorMutqin')
                    .where('userId', '==', currentUserUID)
                    .get();

                if (!snapshot.empty) {
                    const docId = snapshot.docs[0].id;
                    await db.collection('pengaturan').doc(docId).update({ scores });
                } else {
                    await db.collection('pengaturan').add({
                        nama: 'skorMutqin',
                        scores: scores,
                        userId: currentUserUID
                    });
                }
                showToast("Pengaturan skor pribadi berhasil disimpan.");
            } catch (e) { 
                console.error("Error saat menyimpan skor: ", e);
                showToast("Terjadi kesalahan saat menyimpan.", "error");
            }
        }

        async function saveQuranScope(scope) {
            const currentUserUID = window.appState.currentUserUID;
            if (!currentUserUID) return showToast("Error: User tidak teridentifikasi.", "error");

            try {
                const snapshot = await db.collection('pengaturan')
                    .where('nama', '==', 'lingkupHafalan')
                    .where('userId', '==', currentUserUID)
                    .get();

                if (!snapshot.empty) {
                    const docId = snapshot.docs[0].id;
                    await db.collection('pengaturan').doc(docId).update({ scope });
                } else {
                    await db.collection('pengaturan').add({
                        nama: 'lingkupHafalan',
                        scope: scope,
                        userId: currentUserUID
                    });
                }
                showToast("Pengaturan lingkup pribadi berhasil disimpan.");
            } catch(e) { 
                console.error("Error saat menyimpan lingkup: ", e);
                showToast("Terjadi kesalahan saat menyimpan.", "error");
            }
        }

window.populateProfileForm = function() {
    const currentUserUID = window.appState.currentUserUID;
    const userProfile = window.appState.allUsers.find(u => u.id === currentUserUID);

    const previewEl = ui.profile.picturePreview; 
    if (!previewEl) return;

    // URL Placeholder default (jika user data belum ada)
    let placeholder = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

    if (userProfile) {
        // --- LOGIKA BARU ---
        // Jika user data ADA, buat placeholder dinamis
        if (userProfile.namaLengkap && userProfile.namaLengkap.length > 0) {
            const firstLetter = userProfile.namaLengkap.charAt(0).toUpperCase();
            // Pastikan itu huruf, bukan angka atau simbol
            if (firstLetter.match(/[A-Z]/i)) { 
                placeholder = `https://placehold.co/128x128/e2e8f0/94a3b8?text=${firstLetter}`;
            }
        }
        // --- AKHIR LOGIKA BARU ---

        ui.profile.fullNameInput.value = userProfile.namaLengkap || '';
        ui.profile.pobInput.value = userProfile.ttl || '';

        const iconData = userProfile.fotoProfilUrl;

        // Atur onerror untuk menggunakan placeholder dinamis
        previewEl.onerror = function() {
            previewEl.src = placeholder;
        };

        // Cek apakah data adalah URL yang valid (dimulai http)
        if (iconData && (iconData.startsWith('http') || iconData.startsWith('https:'))) {
            previewEl.src = iconData; // Set ke foto asli
        } else { 
            // Jika data kosong ATAU data SVG lama, tampilkan placeholder dinamis
            previewEl.src = placeholder;
        }

        const role = window.appState.loggedInRole;
        if (role === 'admin_lembaga') {
            ui.profile.fullNameInput.disabled = false;
            ui.profile.fullNameInput.placeholder = "Masukkan nama lengkap Anda";
        } else {
            ui.profile.fullNameInput.disabled = true;
            ui.profile.fullNameInput.placeholder = "Nama diatur oleh Admin";
        }

    } else {
        // Tampilkan placeholder statis "Foto" jika userProfile belum siap
        previewEl.onerror = function() { /* do nothing */ };
        previewEl.src = placeholder;
    }
}

window.populateSettingsForms = function() {
    // --- 1. Ambil referensi semua kartu pengaturan ---
    const lingkupCard = document.querySelector('.card:has(#quran-scope-form)');
    const pinCard = ui.guruPinSettings.card;
    const mutqinCard = ui.mutqinSettings.card;

    // --- 2. Atur visibilitas kartu BERDASARKAN PERAN ---
    const role = window.appState.loggedInRole;

    if (role === 'guru') {
        // Jika GURU, tampilkan semuanya
        if (lingkupCard) lingkupCard.classList.remove('hidden');
        if (pinCard) pinCard.classList.remove('hidden');
        if (mutqinCard) mutqinCard.classList.remove('hidden');

    } else if (role === 'siswa') {
        // Jika SISWA, tampilkan HANYA lingkup hafalan
        if (lingkupCard) lingkupCard.classList.remove('hidden');
        if (pinCard) pinCard.classList.add('hidden');
        if (mutqinCard) mutqinCard.classList.add('hidden');

    } else if (role === 'admin_lembaga') {
        // Jika ADMIN, sembunyikan semuanya
        if (lingkupCard) lingkupCard.classList.add('hidden');
        if (pinCard) pinCard.classList.add('hidden');
        if (mutqinCard) mutqinCard.classList.add('hidden');
    }

    // --- 3. Isi semua form DENGAN DATA (SETELAH VISIBILITAS DIATUR) ---

    // Isi form Lingkup (selalu terlihat)
    const quranScopeSelect = document.getElementById('quran-scope-setting');
    if (quranScopeSelect) {
        quranScopeSelect.value = getQuranScope();
    }

    // HANYA isi form Mutqin dan PIN jika GURU (kartunya terlihat)
    if (window.appState.loggedInRole === 'guru') {
        // Isi form Skor Mutqin
        const scores = getMutqinScores();
        const scoreSangatLancar = document.getElementById('score-sangat-lancar');
        const scoreLancar = document.getElementById('score-lancar');
        const scoreCukupLancar = document.getElementById('score-cukup-lancar');
        const scoreTidakLancar = document.getElementById('score-tidak-lancar');
        const scoreSangatTidakLancar = document.getElementById('score-sangat-tidak-lancar');

        // Pengecekan 'if' ini akan mencegah error jika elemen null
        if (scoreSangatLancar) scoreSangatLancar.value = scores['sangat-lancar'];
        if (scoreLancar) scoreLancar.value = scores['lancar'];
        if (scoreCukupLancar) scoreCukupLancar.value = scores['cukup-lancar'];
        if (scoreTidakLancar) scoreTidakLancar.value = scores['tidak-lancar'];
        if (scoreSangatTidakLancar) scoreSangatTidakLancar.value = scores['sangat-tidak-lancar'];

        // Isi form PIN khusus guru
        const currentUser = window.appState.allUsers.find(u => u.id === window.appState.currentUserUID);
        if (currentUser && currentUser.pin && ui.guruPinSettings.input) {
            ui.guruPinSettings.input.value = currentUser.pin;
        }
    }
}
      // <-- MULAI BLOK BARU: FUNGSI UNTUK JURNAL MENGAJAR -->
        // <-- ====================================================== -->

 /**
         * Mengisi dropdown kelas di form Jurnal Mengajar dan mengatur timestamp.
         */
        window.populateJurnalMengajarForm = function() {
            if (!ui.jurnalMengajar.form) return;

            // 1. Atur Timestamp ke "sekarang" (hanya jika form tidak dalam mode edit)
            if (!ui.jurnalMengajar.editId.value) {
                ui.jurnalMengajar.timestamp.value = getLocalISOString(new Date());
            }

            // 2. Dropdown kelas sekarang diisi oleh renderClassList()
            // (Tidak perlu kode populating di sini, ini memperbaiki bug)
        }

        /**
         * Merender daftar riwayat Jurnal Mengajar di #jurnal-page.
         */
        window.renderJurnalMengajarList = function() {
            if (!ui.jurnalMengajar.list) return;

            const ITEMS_PER_PAGE = 10;
            const allEntries = window.appState.allJurnalMengajar;
            
            // Paginasi
            const currentPage = window.appState.currentPageJurnalMengajar;
            const totalItems = allEntries.length;
            const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
            const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            const paginatedEntries = allEntries.slice(startIndex, endIndex);

            ui.jurnalMengajar.list.innerHTML = ''; // Kosongkan list
            
            if (paginatedEntries.length === 0) {
                ui.jurnalMengajar.list.innerHTML = `<p class="text-center text-slate-500 py-4">Belum ada entri jurnal mengajar.</p>`;
                ui.jurnalMengajar.pagination.innerHTML = ''; // Kosongkan paginasi
                return;
            }

            const fragment = document.createDocumentFragment();
            const classMap = new Map(window.appState.allClasses.map(c => [c.id, c.name]));

            paginatedEntries.forEach(entry => {
                const item = document.createElement('div');
                item.className = 'jurnal-mengajar-item p-4 border rounded-lg bg-slate-50';
                item.dataset.entryId = entry.id;

                const date = new Date(entry.timestamp);
                const formattedDate = date.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
                const formattedTime = date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
                const className = classMap.get(entry.classId) || 'Kelas (dihapus)';

                // Fungsi helper untuk membersihkan dan menampilkan teks
                const renderText = (text) => text ? text.replace(/\n/g, '<br>') : '<em class="text-slate-400">Tidak diisi</em>';

                item.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-sm font-semibold text-teal-700">${formattedDate} - ${formattedTime}</p>
                            <p class="text-xs text-slate-500 font-medium">${className}</p>
                        </div>
                        <div class="flex-shrink-0 flex items-center gap-2">
                            <button data-action="edit-jurnal" class="btn btn-sm btn-secondary">Edit</button>
                            <button data-action="delete-jurnal" class="btn btn-sm btn-danger">Hapus</button>
                        </div>
                    </div>
                    <div class="mt-4 space-y-3">
                        <div>
                            <p class="text-xs font-semibold text-slate-600">Mata Pelajaran:</p>
                            <p class="text-sm text-slate-800">${renderText(entry.mataPelajaran)}</p>
                        </div>
                        <div>
                            <p class="text-xs font-semibold text-slate-600">Capaian Pembelajaran:</p>
                            <p class="text-sm text-slate-800">${renderText(entry.capaian)}</p>
                        </div>
                        <div>
                            <p class="text-xs font-semibold text-slate-600">Absensi Murid (S, I, A):</p>
                            <p class="text-sm text-slate-800">${renderText(entry.absensi)}</p>
                        </div>
                    </div>
                `;
                fragment.appendChild(item);
            });

            ui.jurnalMengajar.list.appendChild(fragment);

            // Render Paginasi (Copy-paste dari renderSiswaPagination, tapi ganti state & fungsi panggil)
            const paginationContainer = ui.jurnalMengajar.pagination;
            paginationContainer.innerHTML = '';
            if (totalPages <= 1) return;

            const createButton = (text, page, isDisabled = false, isActive = false) => {
                const button = document.createElement('button');
                button.innerHTML = text;
                button.disabled = isDisabled;
                button.className = `btn btn-sm ${isActive ? 'btn-primary' : 'btn-secondary'}`;
                if (!isDisabled && page) {
                    button.onclick = () => {
                        window.appState.currentPageJurnalMengajar = page;
                        renderJurnalMengajarList(); // Panggil fungsi render jurnal ini
                        ui.jurnalMengajar.list.scrollIntoView({ behavior: 'smooth' });
                    };
                }
                return button;
            };
            // ... (Sisa logika paginasi: ellipsis, loop, dll) ...
            const createEllipsis = () => {
                const span = document.createElement('span');
                span.textContent = '...';
                span.className = 'flex items-center justify-center px-2 py-1 text-slate-500 font-bold';
                return span;
            };

            paginationContainer.appendChild(createButton('‹', currentPage - 1, currentPage === 1));
            const pagesToShow = new Set();
            pagesToShow.add(1); pagesToShow.add(totalPages);
            if (currentPage > 2) pagesToShow.add(currentPage - 1);
            pagesToShow.add(currentPage);
            if (currentPage < totalPages - 1) pagesToShow.add(currentPage + 1);

            const sortedPages = Array.from(pagesToShow).sort((a, b) => a - b);
            let lastPage = 0;
            for (const page of sortedPages) {
                if (page > lastPage + 1) paginationContainer.appendChild(createEllipsis());
                paginationContainer.appendChild(createButton(page, page, false, page === currentPage));
                lastPage = page;
            }
            paginationContainer.appendChild(createButton('›', currentPage + 1, currentPage === totalPages));
        }

        /**
         * Menangani submit form Jurnal Mengajar (Tambah baru atau Update)
         */
        async function handleJurnalMengajarSubmit(e) {
            e.preventDefault();
            setButtonLoading(ui.jurnalMengajar.submitBtn, true);

            const editId = ui.jurnalMengajar.editId.value;
            const payload = {
                timestamp: new Date(ui.jurnalMengajar.timestamp.value).getTime(),
                classId: ui.jurnalMengajar.kelasSelect.value,
                mataPelajaran: ui.jurnalMengajar.matapelajaran.value,
                capaian: ui.jurnalMengajar.capaian.value,
                absensi: ui.jurnalMengajar.absensi.value,
                guruId: currentUserUID,
                lembagaId: lembagaId
            };

            try {
                if (editId) {
                    // Mode Update
                    payload.id = editId; // Tambahkan ID untuk fungsi update
                    await onlineDB.update('jurnal_mengajar', payload);
                    showToast("Jurnal berhasil diperbarui.");
                } else {
                    // Mode Tambah Baru
                    await onlineDB.add('jurnal_mengajar', payload);
                    showToast("Jurnal berhasil disimpan.");
                }
                
                // Reset form
                ui.jurnalMengajar.form.reset();
                ui.jurnalMengajar.editId.value = '';
                ui.jurnalMengajar.timestamp.value = getLocalISOString(new Date());
                ui.jurnalMengajar.submitBtn.textContent = 'Simpan Jurnal';
                ui.jurnalMengajar.cancelBtn.classList.add('hidden');
                renderJurnalAbsensiSiswa(null);

            } catch (error) {
                console.error("Gagal simpan Jurnal Mengajar:", error);
                showToast("Gagal menyimpan jurnal.", "error");
            } finally {
                setButtonLoading(ui.jurnalMengajar.submitBtn, false);
            }
        }

        /**
         * Menangani klik tombol Edit/Hapus pada list Jurnal Mengajar.
         */
        function handleJurnalMengajarActions(e) {
            const button = e.target.closest('button');
            if (!button) return;

            const action = button.dataset.action;
            const item = e.target.closest('.jurnal-mengajar-item');
            if (!item) return;
            
            const entryId = item.dataset.entryId;
            const entry = window.appState.allJurnalMengajar.find(j => j.id === entryId);
            if (!entry) return;

            if (action === 'delete-jurnal') {
                showConfirmModal({
                    title: "Hapus Jurnal?",
                    message: `Yakin ingin menghapus jurnal untuk ${entry.mataPelajaran} (${new Date(entry.timestamp).toLocaleDateString('id-ID')})?`,
                    okText: "Ya, Hapus",
                    onConfirm: async () => {
                        try {
                            await onlineDB.delete('jurnal_mengajar', entryId);
                            showToast("Jurnal berhasil dihapus.");
                        } catch (error) {
                            console.error("Gagal hapus Jurnal Mengajar:", error);
                            showToast("Gagal menghapus jurnal.", "error");
                        }
                    }
                });
            } else if (action === 'edit-jurnal') {
                // Isi form dengan data
                ui.jurnalMengajar.editId.value = entry.id;
                ui.jurnalMengajar.timestamp.value = getLocalISOString(new Date(entry.timestamp));
                ui.jurnalMengajar.kelasSelect.value = entry.classId;
                ui.jurnalMengajar.matapelajaran.value = entry.mataPelajaran;
                ui.jurnalMengajar.capaian.value = entry.capaian;
                ui.jurnalMengajar.absensi.value = entry.absensi;

                // Ubah tombol
                ui.jurnalMengajar.submitBtn.textContent = 'Update Jurnal';
                ui.jurnalMengajar.cancelBtn.classList.remove('hidden');

                // Scroll ke atas
                ui.jurnalMengajar.form.scrollIntoView({ behavior: 'smooth' });
            }
        }
/**
         * Mengupdate textarea absensi yang tersembunyi berdasarkan status
         * tombol-tombol interaktif.
         */
        function updateAbsensiTextarea() {
            if (!ui.jurnalMengajar.absensiList || !ui.jurnalMengajar.absensi) return;

            const sakit = [];
            const izin = [];
            const alpha = [];

            const studentRows = ui.jurnalMengajar.absensiList.querySelectorAll('[data-student-id]');
            
            studentRows.forEach(row => {
                const status = row.dataset.status;
                const name = row.dataset.studentName;
                if (status === 'S') sakit.push(name);
                else if (status === 'I') izin.push(name);
                else if (status === 'A') alpha.push(name);
            });

            // Format string sesuai permintaan
            const sStr = sakit.length > 0 ? `S: ${sakit.join(', ')}.` : 'S: -';
            const iStr = izin.length > 0 ? `I: ${izin.join(', ')}.` : 'I: -';
            const aStr = alpha.length > 0 ? `A: ${alpha.join(', ')}.` : 'A: -';
            
            // Set nilai textarea yang tersembunyi
            ui.jurnalMengajar.absensi.value = `${sStr} ${iStr} ${aStr}`;
        }

        /**
         * Merender daftar siswa di form Jurnal Mengajar saat kelas dipilih.
         */
        function renderJurnalAbsensiSiswa(classId) {
            const container = ui.jurnalMengajar.absensiContainer;
            const list = ui.jurnalMengajar.absensiList;
            const placeholder = ui.jurnalMengajar.absensiPlaceholder;

            if (!container || !list || !placeholder) return;

            if (!classId) {
                // Jika tidak ada kelas dipilih, tampilkan placeholder
                placeholder.classList.remove('hidden');
                list.classList.add('hidden');
                list.innerHTML = '';
            } else {
                // Jika kelas dipilih, ambil daftar siswa
                const studentsInClass = window.appState.allStudents
                    .filter(s => s.classId === classId)
                    .sort((a, b) => a.name.localeCompare(b.name));
                
                placeholder.classList.add('hidden');
                list.classList.remove('hidden');
                list.innerHTML = ''; // Kosongkan list

                if (studentsInClass.length === 0) {
                    list.innerHTML = `<p class="text-sm text-slate-500 text-center">Tidak ada siswa di kelas ini.</p>`;
                } else {
                    // Buat baris untuk setiap siswa
                    const fragment = document.createDocumentFragment();
                    studentsInClass.forEach(student => {
                        const item = document.createElement('div');
                        item.className = 'flex items-center justify-between p-2 bg-white rounded-lg shadow-sm';
                        item.dataset.studentId = student.id;
                        item.dataset.studentName = student.name;
                        item.dataset.status = 'H'; // Default Hadir

                        item.innerHTML = `
                            <span class="font-medium text-sm text-slate-700">${student.name}</span>
                            <div class="flex items-center gap-1">
                                <button type="button" data-absen="S" class="btn btn-sm btn-secondary h-8 w-8 !p-0" title="Sakit">S</button>
                                <button type="button" data-absen="I" class="btn btn-sm btn-secondary h-8 w-8 !p-0" title="Izin">I</button>
                                <button type="button" data-absen="A" class="btn btn-sm btn-secondary h-8 w-8 !p-0" title="Alpha">A</button>
                            </div>
                        `;
                        fragment.appendChild(item);
                    });
                    list.appendChild(fragment);
                }
            }
            // Update textarea (untuk mengosongkannya jika tidak ada kelas)
            updateAbsensiTextarea();
        }

        /**
         * Menangani klik pada tombol absensi (S, I, A)
         */
        function handleJurnalAbsensiClick(e) {
            const button = e.target.closest('button[data-absen]');
            if (!button) return;

            const newStatus = button.dataset.absen;
            const row = button.closest('[data-student-id]');
            if (!row) return;

            const currentStatus = row.dataset.status;
            
            // 1. Tentukan status baru
            let finalStatus;
            if (currentStatus === newStatus) {
                // Jika klik tombol yang sama lagi, set ke Hadir (toggle off)
                finalStatus = 'H';
            } else {
                // Jika klik tombol baru, set ke status baru
                finalStatus = newStatus;
            }

            // 2. Update data-status di row
            row.dataset.status = finalStatus;

            // 3. Update UI tombol-tombol
            const buttons = row.querySelectorAll('button[data-absen]');
            buttons.forEach(btn => {
                // Reset semua ke abu-abu
                btn.className = 'btn btn-sm btn-secondary h-8 w-8 !p-0';
                
                // Set warna aktif jika status cocok
                if (btn.dataset.absen === finalStatus) {
                    if (finalStatus === 'S') btn.className = 'btn btn-sm btn-warning text-white h-8 w-8 !p-0'; // Oranye/Kuning
                    else if (finalStatus === 'I') btn.className = 'btn btn-sm btn-primary h-8 w-8 !p-0'; // Biru
                    else if (finalStatus === 'A') btn.className = 'btn btn-sm btn-danger h-8 w-8 !p-0'; // Merah
                }
            });

            // 4. Update textarea tersembunyi
            updateAbsensiTextarea();
        }
function populateBulanTahunFilters() {
            const bulanSelect = ui.daftarHadir.filterBulan;
            const tahunSelect = ui.daftarHadir.filterTahun;
            if (!bulanSelect || !tahunSelect) return;

            const bulanIni = new Date().getMonth(); // 0-11
            const tahunIni = new Date().getFullYear();

            // Isi Bulan
            bulanSelect.innerHTML = '';
            const namaBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
            namaBulan.forEach((nama, index) => {
                const option = new Option(nama, index); // Value adalah 0-11
                bulanSelect.appendChild(option);
            });
            bulanSelect.value = bulanIni;

            // Isi Tahun
            tahunSelect.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                const tahun = tahunIni - i;
                const option = new Option(tahun, tahun);
                tahunSelect.appendChild(option);
            }
            tahunSelect.value = tahunIni;
        }

/**
         * Mem-parsing string absensi (e.g., "S: Budi. I: Ani.") 
         * menjadi objek yang mudah dicari.
         */
        function parseAbsensiString(absensiString) {
            const absensiMap = { S: [], I: [], A: [] };
            if (!absensiString) return absensiMap;

            // ==========================================================
            // PERBAIKAN: Menggunakan Regex [^.]* (apapun selain titik)
            // agar lebih akurat dan tidak "greedy".
            // ==========================================================
            const sMatch = absensiString.match(/S: ([^.]*)\./i);
            const iMatch = absensiString.match(/I: ([^.]*)\./i);
            const aMatch = absensiString.match(/A: ([^.]*)\./i);

            // Fungsi helper untuk membagi nama
            const getNames = (match) => {
                if (match && match[1] && match[1].trim() !== '-') {
                    return match[1].split(',').map(name => name.trim().toLowerCase()); // Simpan sbg lowercase
                }
                return [];
            };

            return {
                S: getNames(sMatch),
                I: getNames(iMatch),
                A: getNames(aMatch)
            };
        }


/**
         * Fungsi utama untuk merender tabel Roster Absensi
         */
        function renderDaftarHadirRoster() {
            if (!ui.daftarHadir.container) return;

            // 1. Dapatkan Filter
            const classId = ui.daftarHadir.filterKelas.value;
            const month = parseInt(ui.daftarHadir.filterBulan.value, 10); // 0-11
            const year = parseInt(ui.daftarHadir.filterTahun.value, 10);

            if (!classId) {
                ui.daftarHadir.container.innerHTML = `<p class="text-center text-slate-500 py-4">Pilih kelas untuk menampilkan data absensi.</p>`;
                return;
            }

            // 2. Filter Data
            const studentsInClass = window.appState.allStudents
                .filter(s => s.classId === classId)
                .sort((a, b) => a.name.localeCompare(b.name));

            // Dapatkan jurnal untuk kelas dan rentang waktu yang dipilih
            const jurnalEntries = window.appState.allJurnalMengajar
                .filter(j => {
                    if (j.classId !== classId) return false;
                    const t = new Date(j.timestamp);
                    return t.getMonth() === month && t.getFullYear() === year;
                })
                .sort((a, b) => a.timestamp - b.timestamp); // Urutkan dari pertemuan terlama -> terbaru

            // 3. Buat Tabel HTML
            let tableHTML = '<table class="min-w-full divide-y divide-slate-200 border border-slate-200">';
            
            // 4. Buat Header Tabel (Thead)
            tableHTML += '<thead class="bg-slate-50">';
            tableHTML += '<tr>';
            tableHTML += '<th class="px-3 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">No</th>';
            tableHTML += '<th class="px-4 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Nama Mahasiswa</th>';
            
            // ==========================================================
            // PERBAIKAN: Ubah batas pertemuan menjadi 15
            // ==========================================================
            const maxPertemuan = 15;
            for (let i = 0; i < maxPertemuan; i++) {
                let headerText = `P${i + 1}`;
                if (jurnalEntries[i]) {
                    // ==========================================================
                    // PERBAIKAN: Ubah format tanggal ke dd/mm/yyyy dan buat teks kecil (text-xs)
                    // ==========================================================
                    const tgl = new Date(jurnalEntries[i].timestamp).toLocaleDateString('id-ID', { 
                        day: '2-digit', 
                        month: '2-digit', 
                        year: 'numeric' // <-- Tambahkan ini
                    });
                    headerText = `<div class='flex flex-col items-center'><span>P${i + 1}</span><span class='font-normal text-xs text-slate-400'>${tgl}</span></div>`; // <-- Tambahkan text-xs
                }
                tableHTML += `<th class="px-2 py-3 text-center text-xs font-medium text-slate-500 uppercase tracking-wider">${headerText}</th>`;
            }
            tableHTML += '</tr></thead>';

            // 5. Buat Body Tabel (Tbody)
            tableHTML += '<tbody class="bg-white divide-y divide-slate-200">';
            if (studentsInClass.length === 0) {
                tableHTML += `<tr><td colspan="${maxPertemuan + 2}" class="text-center p-4 text-slate-500">Tidak ada siswa di kelas ini.</td></tr>`;
            } else {
                studentsInClass.forEach((student, index) => {
                    tableHTML += '<tr class="hover:bg-slate-50">';
                    tableHTML += `<td class="px-3 py-2 whitespace-nowrap text-sm text-slate-500">${index + 1}</td>`;
                    tableHTML += `<td class="px-4 py-2 whitespace-nowrap text-sm font-medium text-slate-900">${student.name}</td>`;

                    const studentNameLower = student.name.toLowerCase();

                    // Loop untuk setiap kolom pertemuan
                    for (let i = 0; i < maxPertemuan; i++) {
                        let cellContent = '-'; // Default (jika belum ada jurnal)
                        const jurnal = jurnalEntries[i];

                        if (jurnal) {
                            // Jika ada jurnal, cek absensi
                            // Fungsi parseAbsensiString yang baru (di atas) akan memperbaiki ini
                            const absensi = parseAbsensiString(jurnal.absensi); 
                            
                            if (absensi.S.includes(studentNameLower)) {
                                cellContent = '<span class="font-bold text-orange-500">S</span>';
                            } else if (absensi.I.includes(studentNameLower)) {
                                cellContent = '<span class="font-bold text-blue-500">I</span>';
                            } else if (absensi.A.includes(studentNameLower)) {
                                cellContent = '<span class="font-bold text-red-500">A</span>';
                            } else {
                                cellContent = '<span class="font-bold text-teal-500">✔</span>'; // Hadir
                            }
                        }
                        tableHTML += `<td class="px-2 py-2 whitespace-nowrap text-sm text-center">${cellContent}</td>`;
                    }
                    tableHTML += '</tr>';
                });
            }
            tableHTML += '</tbody></table>';

            // 6. Injeksi ke DOM
            ui.daftarHadir.container.innerHTML = tableHTML;
        }
        async function initApp() {
        const headerActions = document.getElementById('header-actions');
        if (headerActions) {
            headerActions.addEventListener('click', (e) => {
                // Cek apakah yang diklik adalah tombol ekspor
                const exportBtn = e.target.closest('#export-data-btn');
                if (exportBtn) {
                    // Jika ya, panggil fungsi ekspor
                    window.exportAllData();
                }
            });
        }
        
const toggleLainnyaBtn = document.getElementById('toggle-lainnya-menu');
            const menuLainnya = document.getElementById('sidebar-menu-lainnya');
            const chevronLainnya = document.getElementById('lainnya-chevron');

            if (toggleLainnyaBtn && menuLainnya && chevronLainnya) {
                // Ambil elemen <polyline> di dalam SVG
                const polyline = chevronLainnya.querySelector('polyline');
                
                // Tentukan bentuk ikonnya
                const pointsClosed = "6 9 12 15 18 9"; // 'v' (tertutup)
                const pointsOpen = "18 15 12 9 6 15";   // '^' (terbuka)

                // Pastikan <polyline> ada
                if (polyline) {
                    toggleLainnyaBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        
                        // 1. Tampilkan/sembunyikan submenu
                        menuLainnya.classList.toggle('hidden');
                        
                        // 2. Cek apakah menu SEKARANG tersembunyi
                        const isNowHidden = menuLainnya.classList.contains('hidden');

                        // 3. Ubah bentuk polyline-nya
                        if (isNowHidden) {
                            // Jika tertutup, set ke 'v' (bawah)
                            polyline.setAttribute('points', pointsClosed);
                        } else {
                            // Jika terbuka, set ke '^' (atas)
                            polyline.setAttribute('points', pointsOpen);
                        }
                    });
                }
            }
        if (ui.jurnalMengajar.form) {
                ui.jurnalMengajar.form.addEventListener('submit', handleJurnalMengajarSubmit);
            }
            if (ui.jurnalMengajar.cancelBtn) {
                ui.jurnalMengajar.cancelBtn.addEventListener('click', () => {
                    ui.jurnalMengajar.form.reset();
                    ui.jurnalMengajar.editId.value = '';
                    ui.jurnalMengajar.timestamp.value = getLocalISOString(new Date());
                    ui.jurnalMengajar.submitBtn.textContent = 'Simpan Jurnal';
                    ui.jurnalMengajar.cancelBtn.classList.add('hidden');
                    renderJurnalAbsensiSiswa(null)
                });
            }
            if (ui.jurnalMengajar.list) {
                ui.jurnalMengajar.list.addEventListener('click', handleJurnalMengajarActions);
            }
            if (ui.jurnalMengajar.kelasSelect) {
                ui.jurnalMengajar.kelasSelect.addEventListener('change', (e) => {
                    renderJurnalAbsensiSiswa(e.target.value);
                });
            }
            if (ui.jurnalMengajar.absensiList) {
                ui.jurnalMengajar.absensiList.addEventListener('click', handleJurnalAbsensiClick);
            }
                if (loadAndRestoreTestState()) {
            }   
            [ui.addClassBtn, ui.addStudentSubmitBtn, ui.import.importBtn, ui.import.downloadTemplateBtn, ui.profile.saveBtn, ui.pinModal.okBtn].forEach(btn => {
                if (btn) btn.dataset.originalContent = btn.innerHTML;
            });

    if (adminUI.cancelAddAkunBtn) {
        adminUI.cancelAddAkunBtn.addEventListener('click', () => {
            hideModal(adminUI.addAkunModal);
        });
    }

    if (adminUI.addAkunForm) {
        adminUI.addAkunForm.addEventListener('submit', handleGenerateAccount);
    }
if (adminUI.akunRole) {
        adminUI.akunRole.addEventListener('change', (e) => {
            // Jangan jalankan jika dropdown di-disable (mode edit)
            if (adminUI.akunRole.disabled) return; 

            const role = e.target.value;
            if (role === 'siswa') {
                if (adminUI.akunNamaContainer) adminUI.akunNamaContainer.classList.add('hidden');
                if (adminUI.akunStudentSelectContainer) adminUI.akunStudentSelectContainer.classList.remove('hidden');
                if (adminUI.akunNama) adminUI.akunNama.required = false;
                if (adminUI.akunStudentSelect) adminUI.akunStudentSelect.required = true;
            } else { // 'guru'
                if (adminUI.akunNamaContainer) adminUI.akunNamaContainer.classList.remove('hidden');
                if (adminUI.akunStudentSelectContainer) adminUI.akunStudentSelectContainer.classList.add('hidden');
                if (adminUI.akunNama) adminUI.akunNama.required = true;
                if (adminUI.akunStudentSelect) adminUI.akunStudentSelect.required = false;
            }
        });
    }    
    // Helper untuk toggle password di modal admin
    setupPasswordToggle('toggle-akun-password', 'akun-password', 'akun-eye-icon', 'akun-eye-off-icon');

    // Listener untuk tombol Edit/Reset/Hapus di daftar akun
    if (adminUI.akunList) {
        adminUI.akunList.addEventListener('click', handleAkunActions);
    }
// --- TAMBAHKAN LISTENER UNTUK MODAL MASSAL ---
    if (adminUI.bulkAddAkunBtn) {
        adminUI.bulkAddAkunBtn.addEventListener('click', () => {
            // Reset modal ke tampilan input
            adminUI.bulkAkunForm.reset();
            adminUI.bulkAkunInputContainer.classList.remove('hidden');
            adminUI.bulkAkunProgressContainer.classList.add('hidden');
            adminUI.bulkAkunProgressLog.innerHTML = '';
            adminUI.bulkProgressCounter.textContent = '';
            
            adminUI.bulkAkunSubmitBtn.disabled = false;
            adminUI.bulkAkunCancelBtn.disabled = false;
            adminUI.bulkAkunCancelBtn.textContent = 'Batal'; // Reset teks tombol
            
            showModal(adminUI.bulkAddAkunModal);
        });
    }

    if (adminUI.bulkAkunCancelBtn) {
        adminUI.bulkAkunCancelBtn.addEventListener('click', () => {
            hideModal(adminUI.bulkAddAkunModal);
        });
    }

    if (adminUI.bulkAkunForm) {
        adminUI.bulkAkunForm.addEventListener('submit', handleBulkGenerateAccounts);
    }
    // Listener untuk filter di halaman admin
    if (adminUI.akunSearch) {
        adminUI.akunSearch.addEventListener('input', debounce(renderManajemenAkunList, 300));
    }
    if (adminUI.akunFilterRole) {
        adminUI.akunFilterRole.addEventListener('change', renderManajemenAkunList);
    }
        if (adminUI.akunFilterKelas) {
    adminUI.akunFilterKelas.addEventListener('change', renderManajemenAkunList);
    }
    // Listener untuk filter di halaman Pencapaian (Dashboard)
if (ui.summary.searchStudent) {
    ui.summary.searchStudent.addEventListener('input', renderStudentProgressList);
}
if (ui.summary.rankFilterClass) {
    ui.summary.rankFilterClass.addEventListener('change', renderStudentProgressList);
}

// Listener untuk filter di halaman Riwayat
if (ui.riwayat.searchStudent) {
    ui.riwayat.searchStudent.addEventListener('input', renderRiwayatList);
}
if (ui.riwayat.filterClass) {
    ui.riwayat.filterClass.addEventListener('change', renderRiwayatList);
}      
            ui.addClassForm.addEventListener('submit', async e => { 
                e.preventDefault(); 
                const name = ui.classNameInput.value.trim(); 
                if (name) { 
                    setButtonLoading(ui.addClassBtn, true);
                    await onlineDB.add('classes', { name, lembagaId: window.appState.lembagaId }); 
                    ui.classNameInput.value = ''; 
                    showToast(`Kelas "${name}" berhasil dibuat.`);
                    setButtonLoading(ui.addClassBtn, false);
                } 
            });
            ui.classList.addEventListener('click', async (e) => {
                const button = e.target.closest('button');
                const classItem = e.target.closest('.class-item');
                if (!classItem) return;
                const classId = classItem.dataset.classId;

                if (button) {
                    const action = button.dataset.action;
                    switch(action) {
                        case 'delete-class': {
                            const cls = window.appState.allClasses.find(c => c.id === classId);
                            showConfirmModal({
                                message: `Yakin ingin hapus kelas "${cls.name}"? SEMUA data siswa dan riwayat setoran di dalamnya akan terhapus permanen.`, 
                                onConfirm: async () => {
                                    const studentsInClass = window.appState.allStudents.filter(s => s.classId === classId);
                                    for (const student of studentsInClass) {
                                            const hafalanToDelete = window.appState.allHafalan.filter(h => h.studentId === student.id);
                                            for (const hafalan of hafalanToDelete) {
                                            await onlineDB.delete('hafalan', hafalan.id);
                                            }
                                        await onlineDB.delete('students', student.id);
                                    }
                                    await onlineDB.delete('classes', classId);
                                    showToast("Kelas berhasil dihapus.");
                                }
                            });
                            break;
                        }
                        case 'edit-class': {
                            classItem.querySelector('.class-display').classList.add('hidden');
                            classItem.querySelector('.class-edit-form').classList.remove('hidden');
                            classItem.querySelector('.class-edit-form input').focus();
                            break;
                        }
                        case 'cancel-edit': {
                            classItem.querySelector('.class-display').classList.remove('hidden');
                            classItem.querySelector('.class-edit-form').classList.add('hidden');
                            break;
                        }
                        case 'save-class': {
                            const input = classItem.querySelector('.class-edit-form input');
                            const newName = input.value.trim();
                            if (newName) {
                                await onlineDB.update('classes', { name: newName, id: classId });
                                showToast("Nama kelas diperbarui.");
                            }
                            classItem.querySelector('.class-display').classList.remove('hidden');
                            classItem.querySelector('.class-edit-form').classList.add('hidden');
                            break;
                        }
                    }
                }
            });
ui.addStudentForm.addEventListener('submit', async e => { 
    e.preventDefault(); 
    const name = document.getElementById('new-student-name').value.trim(); 
    const classId = document.getElementById('new-student-class').value; 
    if (!name || !classId) return showToast('Nama siswa dan kelas harus diisi.', 'error');

    setButtonLoading(ui.addStudentSubmitBtn, true);

    try {
        // --- LOGIKA MIGRASI BARU ---
        const studentNameLower = name.toLowerCase();
        const existingStudent = window.appState.allStudents.find(s => 
            (s.name || '').toLowerCase() === studentNameLower
        );

        if (existingStudent) {
            // Siswa dengan nama ini sudah ada
            if (existingStudent.classId !== classId) {
                // Berbeda kelas -> Lakukan MIGRASI
                await onlineDB.update('students', { id: existingStudent.id, classId: classId });
                showToast(`Siswa "${name}" berhasil dipindahkan ke kelas baru.`, 'success');
            } else {
                // Sama kelas -> Duplikat
                showToast(`Siswa "${name}" sudah ada di kelas ini.`, 'info');
            }
        } else {
            // Siswa belum ada -> Buat BARU
            await onlineDB.add('students', { name, classId, lembagaId: window.appState.lembagaId });
            showToast("Siswa baru berhasil ditambahkan.", "success");
        }
        // --- AKHIR LOGIKA MIGRASI ---

        ui.addStudentForm.reset(); 
        hideModal(ui.addStudentModal); 

    } catch (error) {
        console.error("Gagal tambah/migrasi siswa:", error);
        showToast("Terjadi kesalahan.", "error");
    } finally {
        setButtonLoading(ui.addStudentSubmitBtn, false);
    }
});
            ui.import.downloadTemplateBtn.addEventListener('click', downloadTemplate);
            ui.import.importBtn.addEventListener('click', () => ui.import.fileInput.click());
            ui.import.fileInput.addEventListener('change', handleImport);
            if (ui.daftarHadir.filterKelas) ui.daftarHadir.filterKelas.addEventListener('change', renderDaftarHadirRoster);
            if (ui.daftarHadir.filterBulan) ui.daftarHadir.filterBulan.addEventListener('change', renderDaftarHadirRoster);
            if (ui.daftarHadir.filterTahun) ui.daftarHadir.filterTahun.addEventListener('change', renderDaftarHadirRoster);

            // Panggil populasi filter
            populateBulanTahunFilters();
            if (ui.profileSetupModal.form) {
                ui.profileSetupModal.form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const role = window.appState.loggedInRole;
                    const uid = window.appState.currentUserUID;
                    setButtonLoading(ui.profileSetupModal.submitBtn, true);

                    const updatedData = {
                        namaLengkap: ui.profileSetupModal.namaLengkapInput.value.trim(),
                        ttl: ui.profileSetupModal.ttlInput.value.trim()
                    };

                    if (role === 'guru') {
                        const pin = ui.profileSetupModal.pinInput.value;
                        if (!/^\d{6}$/.test(pin)) {
                            showToast("PIN harus terdiri dari 6 digit angka.", "error");
                            setButtonLoading(ui.profileSetupModal.submitBtn, false);
                            return;
                        }
                        updatedData.pin = pin;
                    }

                    try {
                        await db.collection('users').doc(uid).update(updatedData);
                        showToast("Profil berhasil disimpan.", "success");
                        hideModal(ui.profileSetupModal.el);
                    } catch (error) {
                        console.error("Gagal update profil dari modal setup:", error);
                        showToast("Gagal menyimpan perubahan.", "error");
                    } finally {
                        setButtonLoading(ui.profileSetupModal.submitBtn, false);
                    }
                });
            }
            ui.settings.mutqinForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                const newScores = {
                    'sangat-lancar': parseInt(document.getElementById('score-sangat-lancar').value),
                    'lancar': parseInt(document.getElementById('score-lancar').value),
                    'cukup-lancar': parseInt(document.getElementById('score-cukup-lancar').value),
                    'tidak-lancar': parseInt(document.getElementById('score-tidak-lancar').value),
                    'sangat-tidak-lancar': parseInt(document.getElementById('score-sangat-tidak-lancar').value)
                };
                await saveMutqinScores(newScores);
            });

if (ui.settings.quranScopeForm) {
                    ui.settings.quranScopeForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const newScope = ui.settings.quranScopeSelect.value;
                    
                    // 1. Update state lokal secara instan
                    window.appState.pengaturan.lingkupHafalan = newScope;
                    
                    // 2. Render ulang SELURUH UI
                    renderAll(); // <-- GANTI DENGAN INI
                    
                    // 3. Update juga dropdown di modal massal
                    populateBulkHafalanSurah(); 
                    
                    // 4. Simpan ke database di latar belakang
                    await saveQuranScope(newScope);
                });
            }

            // --- Guru PIN Settings Form Listener ---
            if (ui.guruPinSettings.form) {
                ui.guruPinSettings.form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const pin = ui.guruPinSettings.input.value;
                    if (!/^\d{6}$/.test(pin)) {
                        showToast("PIN harus terdiri dari 6 digit angka.", "error");
                        return;
                    }
                    
                    const currentUserUID = window.appState.currentUserUID;
                    const saveButton = e.target.querySelector('button[type="submit"]');
                    setButtonLoading(saveButton, true);
                    try {
                        await db.collection('users').doc(currentUserUID).update({ pin: pin });
                        showToast("PIN berhasil disimpan.", "success");
                    } catch (error) {
                        console.error("Gagal simpan PIN:", error);
                        showToast("Gagal menyimpan PIN.", "error");
                    } finally {
                        setButtonLoading(saveButton, false);
                    }
                });
            }
            
            if (ui.profile.form) {
                ui.profile.form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const currentUserUID = window.appState.currentUserUID;
                    if (!currentUserUID) return showToast("Gagal menyimpan, user tidak ditemukan.", "error");

                    setButtonLoading(ui.profile.saveBtn, true);
                    const updatedData = {
                        ttl: ui.profile.pobInput.value.trim(),
                    };

                    // Hanya admin yang boleh update namaLengkap
                    if (window.appState.loggedInRole === 'admin_lembaga') {
                        updatedData.namaLengkap = ui.profile.fullNameInput.value.trim();
                    }

                    try {
                        await db.collection('users').doc(currentUserUID).update(updatedData);
                        showToast("Profil berhasil diperbarui.", "success");
                    } catch (error) {
                        console.error("Gagal update profil:", error);
                        showToast("Gagal menyimpan perubahan.", "error");
                    } finally {
                        setButtonLoading(ui.profile.saveBtn, false);
                    }
                });

                ui.profile.pictureInput.addEventListener('change', (e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    if (file.size > 2 * 1024 * 1024) { // Batas 2MB
                        showToast("Ukuran file terlalu besar. Maksimal 2MB.", "error");
                        return;
                    }

                    const currentUserUID = window.appState.currentUserUID;
                    const filePath = `profile_pictures/${currentUserUID}/${file.name}`;
                    const fileRef = storage.ref(filePath);
                    const uploadTask = fileRef.put(file);

                    uploadTask.on('state_changed', 
                        (snapshot) => {
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            ui.profile.progressContainer.classList.remove('hidden');
                            ui.profile.progressBar.value = progress;
                        }, 
                        (error) => {
                            console.error("Upload failed:", error);
                            showToast("Gagal mengunggah foto.", "error");
                            ui.profile.progressContainer.classList.add('hidden');
                        }, 
                        async () => {
                            const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
                            await db.collection('users').doc(currentUserUID).update({
                                fotoProfilUrl: downloadURL
                            });
                            ui.profile.picturePreview.src = downloadURL;
                            ui.profile.progressContainer.classList.add('hidden');
                            showToast("Foto profil berhasil diperbarui.", "success");
                        }
                    );
                });
            }

            const settingsLogoutBtn = document.getElementById('settings-logout-btn');
            if (settingsLogoutBtn) {
                settingsLogoutBtn.addEventListener('click', handleLogout);
            }
            // Listener untuk tombol logout admin di menu utama
                    const adminLogoutSidebar = document.getElementById('admin-logout-sidebar');
                    const adminLogoutBottom = document.getElementById('admin-logout-bottom');

                    if (adminLogoutSidebar) {
                        adminLogoutSidebar.addEventListener('click', (e) => {
                            e.preventDefault();
                            handleLogout(); // Panggil fungsi logout yang sudah ada
                        });
                    }
                    if (adminLogoutBottom) {
                        adminLogoutBottom.addEventListener('click', (e) => {
                            e.preventDefault();
                            handleLogout(); // Panggil fungsi logout yang sudah ada
                        });
                    }
            // --- TAMBAHAN BARU: Listener untuk filter riwayat DAN JUZ ---
            const mainContentView = document.getElementById('main-content-view');
            if (mainContentView) {
                mainContentView.addEventListener('change', (e) => {
                    // Listener untuk Riwayat (sudah ada)
                    if (e.target.id === 'detail-history-filter') {
                        window.appState.currentDetailHistoryView = e.target.value;
                        window.appState.currentDetailHistoryPage = 1; 
                        renderStudentDetailHistoryList(); 
                    }
                    
                    // --- TAMBAHKAN BLOK 'IF' INI ---
                    if (e.target.id === 'detail-juz-filter') {
                        window.appState.currentDetailJuzView = e.target.value;
                        renderStudentJuzDetails(); // Panggil fungsi render juz
                    }
                    // --- AKHIR TAMBAHAN ---
                });
            }

            populateTestSelectors();
            populateJuzFilterDropdown();
            testUI.nextStepBtn.addEventListener('click', () => {
                if (window.appState.loggedInRole === 'siswa') {
            const currentUserUID = window.appState.currentUserUID;
            const student = window.appState.allStudents.find(s => s.userId === currentUserUID);
            if (student) {
                // Otomatis atur siswa yang dites adalah diri sendiri
                window.appState.currentTest.studentIds = [student.id];
            } else {
                showToast("Gagal menemukan profil siswa Anda. Tidak dapat memulai tes.", "error");
                return; // Hentikan proses jika data siswa tidak ada
            }
        }
                testUI.step1_type_view.classList.add('hidden');
                testUI.step2_scope_view.classList.remove('hidden');
            });

            testUI.backStepBtn.addEventListener('click', () => {
                testUI.step2_scope_view.classList.add('hidden');
                testUI.step1_type_view.classList.remove('hidden');
            });
            testUI.startBtn.addEventListener('click', startTest);
            testUI.nextQuestionBtn.addEventListener('click', showNextQuestion);
            testUI.previousQuestionBtn.addEventListener('click', showPreviousQuestion);
            testUI.endTestBtn.addEventListener('click', () => {
                showConfirmModal({
                    title: "Akhiri Tes?",
                    message: "Apakah Anda yakin ingin mengakhiri sesi tes ini? Progres saat ini akan disimpan jika ada siswa yang dipilih.",
                    okText: "Ya, Akhiri Tes",
                    onConfirm: () => {
                        endTest(); // Panggil fungsi endTest hanya jika dikonfirmasi
                    }
                });
            });
            testUI.restartTestBtn.addEventListener('click', restartTest);
            testUI.answerOptions.addEventListener('click', (e) => {
                const test = window.appState.currentTest;
                if (test.isActive && test.questions[test.currentQuestionIndex].isAnswered) {
                    return;
                }

                if (e.target.tagName === 'BUTTON') {
                    e.target.className = 'word-in-answer';
                    testUI.userAnswerArea.appendChild(e.target); 

                    // GANTI BLOK 'IF' SEBELUMNYA DENGAN PANGGILAN FUNGSI INI
                }
            });
            testUI.userAnswerArea.addEventListener('click', (e) => {
                const test = window.appState.currentTest;
                if (test.isActive && test.questions[test.currentQuestionIndex].isAnswered) {
                    return;
                }

                if (e.target.tagName === 'BUTTON') {
                    e.target.className = 'btn btn-secondary font-scheherazade text-xl';
                    testUI.answerOptions.appendChild(e.target);

                    // GANTI PERINTAH LANGSUNG DENGAN PANGGILAN FUNGSI INI
                }
            });

            // Event handler untuk tombol "Periksa Jawaban"
            testUI.checkReorderBtn.addEventListener('click', () => {
                const test = window.appState.currentTest;
                const q = test.questions[test.currentQuestionIndex];

                const userAnswer = Array.from(testUI.userAnswerArea.children)
                    .map(btn => btn.textContent)
                    .join(' ');

                checkAnswer(userAnswer, q.answer);
                testUI.checkReorderBtn.classList.add('hidden');
            });
            testUI.studentSearchInput.addEventListener('input', searchStudentsForTest);
            testUI.studentSearchInput.addEventListener('focus', searchStudentsForTest); // Tampilkan juga saat fokus

            testUI.studentSearchResults.addEventListener('click', (e) => {
                const selectedItem = e.target.closest('div');
                if (selectedItem && selectedItem.dataset.studentId) {
                    // Panggil fungsi baru untuk MENAMBAH siswa
                    addStudentToTest(selectedItem.dataset.studentId);
                }
            });
            testUI.selectedStudentsList.addEventListener('click', (e) => {
                const removeBtn = e.target.closest('button[data-action="remove-student"]');
                if (removeBtn) {
                    removeStudentFromTest(removeBtn.dataset.id);
                }
            });
            // Sembunyikan hasil pencarian jika klik di luar
            document.addEventListener('click', (e) => {
                if (!testUI.studentSearchContainer.contains(e.target)) {
                    testUI.studentSearchResults.classList.add('hidden');
                }
            });
            // Reset pilihan lain jika salah satu dipilih
            const handleSurahChange = (selectDari, selectSampai, otherDari, otherSampai) => {
                if (selectDari.value) {
                    otherDari.value = '';
                    otherSampai.value = '';
                    if (!selectSampai.value) {
                        selectSampai.value = selectDari.value;
                    }
                }
            };

            const handleJuzChange = (selectDari, selectSampai, otherDari, otherSampai) => {
                if (selectDari.value) {
                    otherDari.value = '';
                    otherSampai.value = '';
                    if (!selectSampai.value) {
                        selectSampai.value = selectDari.value;
                    }
                }
            };

            testUI.surahSelectDari.addEventListener('change', () => handleSurahChange(testUI.surahSelectDari, testUI.surahSelectSampai, testUI.juzSelectDari, testUI.juzSelectSampai));
            testUI.surahSelectSampai.addEventListener('change', () => handleSurahChange(testUI.surahSelectDari, testUI.surahSelectSampai, testUI.juzSelectDari, testUI.juzSelectSampai));
            testUI.juzSelectDari.addEventListener('change', () => handleJuzChange(testUI.juzSelectDari, testUI.juzSelectSampai, testUI.surahSelectDari, testUI.surahSelectSampai));
            testUI.juzSelectSampai.addEventListener('change', () => handleJuzChange(testUI.juzSelectDari, testUI.juzSelectSampai, testUI.surahSelectDari, testUI.surahSelectSampai));
            // --- Initial Data Load with Real-time Listeners ---
            try {
                const commonErrorHandler = (error, collectionName) => {
                    console.error(`Error listener '${collectionName}': `, error);
                    showToast(`Gagal memuat data dari ${collectionName}. Periksa izin.`, "error");
                };

                    db.collection('classes').where('lembagaId', '==', lembagaId)
                    .onSnapshot(snapshot => {
                        window.appState.allClasses = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                        // ▼▼▼ TAMBAHKAN BLOK INI ▼▼▼
                        const activePage = document.querySelector('.page.page-active');
                        // Hanya panggil jika kita di halaman detail DAN data siswa sudah ada
                        // (untuk memperbarui nama kelas di judul)
                        if (activePage && activePage.id === 'detail_siswa-page' && window.appState.currentDetailStudentId && window.appState.allStudents.length > 0) {
                            console.log("Classes snapshot, re-rendering detail page (for title update).");
                            renderStudentDetailPage(); 
                        }
                        if (typeof populateJurnalMengajarForm === 'function') {
                            populateJurnalMengajarForm();
                        }
                        // ▲▲▲ AKHIR TAMBAHAN ▲▲▲

                        renderAll();
                    }, error => commonErrorHandler(error, 'classes'));

                    db.collection('students').where('lembagaId', '==', lembagaId)
                    .onSnapshot(snapshot => {
                        window.appState.allStudents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                        
                        // ▼▼▼ TAMBAHKAN BLOK INI ▼▼▼
                        const activePage = document.querySelector('.page.page-active');
                        // Jika kita di halaman detail, panggil renderStudentDetailPage
                        // Ini akan berhasil sekarang karena allStudents sudah diisi.
                        if (activePage && activePage.id === 'detail_siswa-page' && window.appState.currentDetailStudentId) {
                            console.log("Students snapshot, re-rendering detail page.");
                            renderStudentDetailPage(); // Panggil render
                        }
                        // ▲▲▲ AKHIR TAMBAHAN ▲▲▲

                        renderAll();
                    }, error => commonErrorHandler(error, 'students'));
                    // Listener untuk 'hafalan' (Tidak berubah, ini PENTING)
                db.collection('hafalan').where('lembagaId', '==', lembagaId)
                    .onSnapshot(snapshot => {
                        window.appState.allHafalan = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                        renderAll();
                    }, error => commonErrorHandler(error, 'hafalan'));

                // <-- TAMBAHAN BARU: Listener untuk 'jurnal_mengajar' -->
                db.collection('jurnal_mengajar').where('lembagaId', '==', lembagaId)
                    .orderBy('timestamp', 'desc') // Urutkan terbaru di atas
                    .onSnapshot(snapshot => {
                        window.appState.allJurnalMengajar = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                        
                        // Panggil render spesifik (lebih efisien daripada renderAll)
                        if (typeof renderJurnalMengajarList === 'function') {
                            renderJurnalMengajarList();
                        }
                    }, error => commonErrorHandler(error, 'jurnal_mengajar'));

                db.collection('jurnal_belajar').where('lembagaId', '==', lembagaId)
                .onSnapshot(snapshot => {
                    // SIMPAN KE 'allJurnal'
                    window.appState.allJurnal = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    
                    const activePage = document.querySelector('.page.page-active');
                    // Jika kita di halaman detail, panggil renderStudentDetailPage LAGI.
                    // Ini akan mengisi ulang stats, juz, dan riwayat dengan data jurnal yang baru tiba.
                    if (activePage && activePage.id === 'detail_siswa-page' && window.appState.currentDetailStudentId) {
                        console.log("Jurnal snapshot, me-render ulang komponen detail.");
                        // Anda perlu menulis ulang renderStudentDetailPage() nanti
                        // renderStudentDetailPage(); 
                    }

                    renderAll(); // Tetap panggil renderAll

                }, error => commonErrorHandler(error, 'jurnal_belajar'));
                                db.collection('users').where('lembagaId', '==', lembagaId)
                    .onSnapshot(snapshot => {
                        window.appState.allUsers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                        //checkUserProfileCompletion(); // <-- TAMBAHKAN BARIS INI
                        renderAll();
                        const activePage = document.querySelector('.page.page-active');
                        if (activePage && activePage.id === 'profil-page' && typeof window.populateProfileForm === 'function') {
                            window.populateProfileForm();
                        }
                    }, error => commonErrorHandler(error, 'users'));
                db.collection('pengaturan').where('userId', '==', currentUserUID)
                    .onSnapshot(snapshot => {
                        window.appState.pengaturan.skorMutqin = { 'sangat-lancar': 100, 'lancar': 90, 'cukup-lancar': 70, 'tidak-lancar': 50, 'sangat-tidak-lancar': 30 };
                        window.appState.pengaturan.lingkupHafalan = 'full';
                        if (snapshot.empty) {
                            console.log("Tidak ada pengaturan khusus untuk pengguna ini, menggunakan default.");
                        } else {
                            snapshot.docs.forEach(doc => {
                                const data = doc.data();
                                if (data.nama === 'skorMutqin') {
                                    window.appState.pengaturan.skorMutqin = data.scores;
                                } else if (data.nama === 'lingkupHafalan') {
                                    window.appState.pengaturan.lingkupHafalan = data.scope;
                                }
                            });
                        }
                        
                        renderAll(); 
                        
                        if (typeof window.populateSettingsForms === 'function') {
                            window.populateSettingsForms();
                        }
                    }, error => commonErrorHandler(error, 'pengaturan'));
                document.getElementById('loader').classList.add('hidden');
                showToast("Assalamu'alaikum!", "info");

            } catch(error) {
                console.error("DB Listener error:", error); 
                showToast("Gagal menyambungkan ke database real-time.", "error");
                document.getElementById('loader').classList.add('hidden');
            }
        }
        initApp();
    }
});
