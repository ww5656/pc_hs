// 始化地图元素
// var map = new BMap.Map("allmap");
// // 创建中心点坐标
// // 创建中心点和缩放级别
// map.centerAndZoom(point, 21);
// map.addControl(new BMap.NavigationControl());
// var point = new BMap.Point(113.774363,34.775921);

// var pt = new BMap.Point(113.774363,34.775921);
// var myIcon = new BMap.Icon("../imgs/timg.gif", new BMap.Size(300,157));
// var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
// map.addOverlay(marker2);      
var map = new BMap.Map("allmap");
	var point = new BMap.Point(113.774363,34.775921);
	map.centerAndZoom(point, 15);
	
    var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
