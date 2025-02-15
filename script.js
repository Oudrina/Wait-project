function showSideBar(){
 const headernav1= document.querySelector('.header-nav1');
 headernav1.style.display='flex';
}

function hideSideBar(){
 const headernav1= document.querySelector('.header-nav1');
 headernav1.style.display='none';
}

function openSideBar(){
 const dashboard = document.querySelector('.header-nav');
 dashboard.style.display='flex';
}
function closeSideBar(){
 const dashboard = document.querySelector('.sidebar-nav');
 dashboard.style.display='none';
}