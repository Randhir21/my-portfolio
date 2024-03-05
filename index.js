let menu=document.getElementById('menu');let menu_open=document.getElementById('menu_open');let menu_close=document.getElementById('menu_close');function toggleMenu(){menu.style.display='block';menu_close.style.display='block'}
function toggleMenuClose(){if(screen.width<=920){menu.style.display='none';menu_close.style.display='none'}}
function toggle(){if(screen.width<=920){menu.style.display='none';menu_close.style.display='none'}}
