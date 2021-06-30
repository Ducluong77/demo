var a = 0;
var c = 0;

$(".carousel-control-next-icon").on("click", function () {
  let b = $("img").length;
  a++;
  //   console.log(a, c);
  if (a <= b - 1) {
    $(".list").css("margin-left", `${a * -200}px`);
    $(".carousel-control-prev-icon").attr("style", "display:block");
  }
  if (a == b - 2) {
    $(".carousel-control-next-icon").attr("style", "display:none");
    $(".carousel-control-prev-icon").attr("style", "display:block");
  }
});

$(".carousel-control-prev-icon").on("click", function () {
  a--;
  if (c <= a) {
    $(".list").css("margin-left", `${a * -200}px`);
    $(".carousel-control-next-icon").attr("style", "display:block");
  }
  if (c == a) {
    $(".carousel-control-prev-icon").attr("style", "display:none");
    $(".carousel-control-next-icon").attr("style", "display:block");
  }
  console.log(a);
});
var count = 0;
$(".like").on("click", function () {
  count++;
  $(".fa-thumbs-up").css("color", "blue");
});
$(".comment").on("click", function () {
  $(".fa-comment").css("color", "blue");
});
$(".share").on("click", function () {
  $(".fa-share").css("color", "blue");
});
// append ngày
let date = new Date();
let ngayDang = "2021-06-30T04:20:14.441Z";
let layGio = new Date(ngayDang);
let khoangThoiGianms = date - layGio;
let khoangThoiGianh = new Date(khoangThoiGianms);
console.log(khoangThoiGianms);
let minutes = Math.floor(khoangThoiGianh / 1000 / 60);
let hours = Math.floor(minutes / 60);
let day = Math.floor(hours / 24);
if (minutes < 60 && hours < 1 && day < 1) {
  $(".date").html(minutes + " " + "phút trước");
} else if (minutes > 60 && hours >= 1 && day < 1) {
  $(".date").html(hours + " " + "giờ trước");
} else if (hours >= 1 && day >= 1) {
  $(".date").html(day + " " + "ngày trước");
} else {
  $(".date").html("lỗi");
}
// console.log(minutes);
