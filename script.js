// Sections dynamiques
const links = document.querySelectorAll('.sidebar .menu a');
const sections = document.querySelectorAll('.section');

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.dataset.section;
        sections.forEach(sec => sec.style.display = 'none');
        document.getElementById(target).style.display = 'block';
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Theme toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Sidebar toggle (mobile)
const sidebar = document.querySelector('.sidebar');
document.getElementById('toggleSidebar').addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// Notifications / messages dynamiques
const notifications = document.querySelector('.notifications');
const messages = document.querySelector('.messages');

function updateBadges(notifCount = 3, msgCount = 2){
    notifications.querySelector('.badge').textContent = notifCount;
    messages.querySelector('.badge').textContent = msgCount;
}

notifications.addEventListener('click', e => {
    e.stopPropagation();
    const dropdown = notifications.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display==='block'?'none':'block';
    messages.querySelector('.dropdown').style.display='none';
});

messages.addEventListener('click', e => {
    e.stopPropagation();
    const dropdown = messages.querySelector('.dropdown');
    dropdown.style.display = dropdown.style.display==='block'?'none':'block';
    notifications.querySelector('.dropdown').style.display='none';
});

document.addEventListener('click', () => {
    notifications.querySelector('.dropdown').style.display='none';
    messages.querySelector('.dropdown').style.display='none';
});

// Simuler nouvelles notifications/messages
let notifCount = 3, msgCount = 2;
setInterval(()=>{
    const newNotif = `Nouvelle activité à ${new Date().toLocaleTimeString()}`;
    const li = document.createElement('li');
    li.textContent = newNotif;
    notifications.querySelector('ul').prepend(li);
    notifCount++;

    const newMsg = `Message de ${['Sara','Ahmed','Leila'][Math.floor(Math.random()*3)]}`;
    const liMsg = document.createElement('li');
    liMsg.textContent = newMsg;
    messages.querySelector('ul').prepend(liMsg);
    msgCount++;

    updateBadges(notifCount,msgCount);
},10000);

// Charts
const ctx1 = document.getElementById('studentsChart').getContext('2d');
new Chart(ctx1,{type:'line',data:{labels:['Jan','Fév','Mar','Avr','Mai','Juin','Juil'],datasets:[{label:'Étudiants',data:[120,150,180,200,230,250,300],backgroundColor:'rgba(0,180,216,0.2)',borderColor:'rgba(0,180,216,1)',borderWidth:2,tension:0.4}]},options:{responsive:true,plugins:{legend:{display:false}}}});

const ctx2 = document.getElementById('revenueChart').getContext('2d');
new Chart(ctx2,{type:'bar',data:{labels:['Jan','Fév','Mar','Avr','Mai','Juin','Juil'],datasets:[{label:'Revenus ($)',data:[5000,7000,8000,6000,9000,10000,12000],backgroundColor:'rgba(0,180,216,0.7)',borderRadius:5}]},options:{responsive:true,plugins:{legend:{display:false}}}});

const ctx3 = document.getElementById('revenueChart2').getContext('2d');
new Chart(ctx3,{type:'bar',data:{labels:['Jan','Fév','Mar','Avr','Mai','Juin','Juil'],datasets:[{label:'Revenus ($)',data:[5000,7000,8000,6000,9000,10000,12000],backgroundColor:'rgba(0,180,216,0.7)',borderRadius:5}]},options:{responsive:true,plugins:{legend:{display:false}}}});
