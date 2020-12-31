// JavaScript Document



//访问设备指引
x=screen.width
if (x < 600) 
{
window.location="/3g/";
}

//短信字符统计
function count_a(a,b){
document.getElementById(a).innerHTML="短信共有"+document.getElementById(b).value.length+"个字符";
};

//选项卡切换
function tabit(id,cid) { 
tab1.className="menu2"; 
tab2.className="menu2"; 
id.className="menu1"; 

ctab1.style.display="none"; 
ctab2.style.display="none"; 
cid.style.display="block"; 
};

//长内容隐藏部分
function hidden_c()   
{  
  var n=document.getElementById("x2");
  if(n.style.overflow!=""){
  n.style.overflow = "" 
  n.style.height="190px"
  document.getElementById("content1").innerHTML="显示全部&raquo;"
  }
  else {
  n.style.overflow = "hidden" 
  n.style.height="auto"
  document.getElementById("content1").innerHTML="&laquo;隐藏"
  
  
  }
};

// 删除确认
function   delete_y(e){   
  if(event.srcElement.outerText=="删除")   
      event.returnValue=confirm("确定删除吗?");   
  }   
  document.onclick=delete_y;
  
  
// 首页广告效果
 //图片滚动展示 Start
 var counts = 3;
 
 img1 = new Image();
 img1.src = '../../Images/mice/ad/mice_r6_c2.jpg';
 img2 = new Image();
 img2.src = '../../images/mice/ad/ad2.jpg';
 img3 = new Image();
 img3.src = '../../images/mice/ad/ad3.jpg';
 
 var smallImg = new Array();
 //小图
 smallImg[0] = '../../images/mice/index_adb1.gif';
 smallImg[1] = '../../images/mice/index_adb2.gif';
 smallImg[2] = '../../images/mice/index_adb3.gif';
 
 //链接地址
 url1 = new Image();
 url1.src = '';
 url2 = new Image();
 url2.src = '';
 url3 = new Image();
 url3.src = '';
 //alt值
 alt1 = new Image();
 alt1.alt = '';
 alt2 = new Image();
 alt2.alt = '';
 alt3 = new Image();
 alt3.alt = '';
 
 var nn = 1;
 var key = 0;
 function change_img() {
  if (key == 0) {
   key = 1;
  } else if (document.all) {
   document.getElementById("pic").filters[0].Apply();
   document.getElementById("pic").filters[0].Play(duration = 2);
  }
  eval('document.getElementById("pic").src=img' + nn + '.src');
 eval('document.getElementById("url").href=url' + nn + '.src');
  eval('document.getElementById("pic").alt=alt' + nn + '.alt');
  if (nn == 1) {
   document.getElementById("url").target = "_blank";
   document.getElementById("url").style.cursor = "pointer";
  } else {
   document.getElementById("url").target = "_blank"
   document.getElementById("url").style.cursor = "pointer"
  }
  for ( var i = 1; i <= counts; i++) {
   document.getElementById("xxjdjj" + i).className = 'axx';
  }
  document.getElementById("xxjdjj" + nn).className = 'bxx';
  nn++;
  if (nn > counts) {
   nn = 1;
  }
  tt = setTimeout('change_img()', 6000);
 }
 function changeimg(n) {
  nn = n;
  window.clearInterval(tt);
  change_img();
 }
 function ImageShow() {
  document.write('<div class="picshow_main">');
  document.write('<div><a id="url"><img id="pic" class="imgbig" /></a></div>');
  document.write('<div class="picshow_change">');
  for ( var i = 0; i < counts; i++) {
   document.write('<a href="javascript:changeimg(' + (i + 1)
     + ');" id="xxjdjj' + (i + 1)
     + '" class="axx" target="_self"><img src="' + smallImg[i]
     + '"></a>');
  }
  document.write('</div></div>');
  change_img();
 }
 //图片滚动展示 End
 
 
 // 半透明图片效果
 function high(which2){
	
	theobject=which2
	highlighting=setInterval("highlightit(theobject)",100)
}
function low(which2){
	clearInterval(highlighting)
	which2.filters.alpha.opacity=50
}
function highlightit(cur2){
	
	if(cur2.filters.alpha.opacity<200)
	cur2.filters.alpha.opacity+=50
	else if(window.highlighting)
	clearInterval(highlighting)
}
//END



/*选项卡 第一种形式 第二种形式 更换显示样式*/
function setTab(m,n){
 var tli=document.getElementById("menu"+m).getElementsByTagName("li");
 var mli=document.getElementById("main"+m).getElementsByTagName("ul");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==n?"o":"";
  mli[i].style.display=i==n?"block":"none";
 }
}

//操作信息提示
function loadtip(div){
	return $(div).text("执行中...");
	};
