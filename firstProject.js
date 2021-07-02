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
$(".like").on("click", function (e) {
  count++;
  let x = $(this).parents()[6];

  let y = $(x).children()[0];
  z = $(y).children()[1];
  a = $(z).children()[2];
  b = $(a).children()[0];
  c = $(b).children()[0];
  d = $(c).children()[2];
  console.log(d, 1);
  $(d).html(count);
  let li = $(this).parents()[1];
  $(li).css("color", "blue");
});
$(".comment").on("click", function () {
  let li = $(this).parents()[1];
  $(li).css("color", "blue");
});
$(".share").on("click", function () {
  let li = $(this).parents()[1];
  $(li).css("color", "blue");
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
// sửa
// console.log($(".sua"));
let change = `<div class="change">
  <button class="sua">Change</button>
  </div>`;
$(".button").append(change);

// let images;
// $(".sua").each((index, element) => {
//   $(element).on("click", function () {
//     let fixurl = images[index];
//     $(".modal").attr("style", "display:block");
//     $(".btn-primary").on("click", function () {
//       let getLink = $(".linkPicture").val();
//       a = $(fixurl).attr("src", getLink);
//       console.log(a);
//       $(".modal").attr("style", "display:none");
//       $(".btn-secondary").on("click", function () {
//         $(".modal").attr("style", "display:none");
//       });
//     });
//   });
// });
let img;
// console.log($(".sua"));
$(".sua").on("click", (e) => {
  // console.log(e);
  // console.log($(e.target).parents());
  let content = $(e.target).parents()[6];
  let anh = $(content).children()[0];
  img = $(anh).children()[0];
  content = $(content).children()[1];
  titleContainer = $(content).children();
  title = $(titleContainer)[0];
  subTitle = $(titleContainer)[1];
  // let sub = $(content).children()[1];
  console.log(subTitle);
  $(".modal").attr("style", "display:block");
  $(".btn-primary").on("click", function () {
    let getLink = $(".linkPicture").val();
    let getTitle = $(".input-title").val();
    getSubTitle = $(".input-subtitle").val();
    a = $(img).attr("src", getLink);
    $(title).html(getTitle);
    $(subTitle).html(getSubTitle);
    $(".modal").attr("style", "display:none");
    $(".btn-secondary").on("click", function () {
      $(".modal").attr("style", "display:none");
    });
  });
});
$(".btn-secondary").on("click", function () {
  $(".modal").attr("style", "display:none");
});
