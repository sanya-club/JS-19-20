'use strict;'


//slider


$(function ($) {
  var hwSlideSpeed = 700;
  var hwTimeOut = 1000;
  var hwNeedLinks = true;

  $(function (e) {
    $('.slide').css({
      "position": "absolute",
      "top": '0',
      "left": '0'
    }).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider .slide").size();
    var animSlide = function (arrow) {
      clearTimeout(slideTime);
      $('.slide').eq(slideNum).fadeOut(hwSlideSpeed);
      if (arrow == "next") {
        if (slideNum == (slideCount - 1)) {
          slideNum = 0;
        } else {
          slideNum++
        }
      } else if (arrow == "prew") {
        if (slideNum == 0) {
          slideNum = slideCount - 1;
        } else {
          slideNum -= 1
        }
      } else {
        slideNum = arrow;
      }
      $('.slide').eq(slideNum).fadeIn(hwSlideSpeed, rotator);
      $(".control-slide.active").removeClass("active");
      $('.control-slide').eq(slideNum).addClass('active');
    }

    var $adderSpan = '';
    $('.slide').each(function (index) {
      $adderSpan += '<span class = "control-slide">' + index + '</span>';
    });
    $('<div class ="sli-links">' + $adderSpan + '</div>').appendTo('#slider-wrap');
    $(".control-slide:first").addClass("active");
    $('.control-slide').click(function () {
      var goToNum = parseFloat($(this).text());
      animSlide(goToNum);
    });
    var pause = false;
    var rotator = function () {
      if (!pause) {
        slideTime = setTimeout(function () {
          animSlide('next')
        }, hwTimeOut);
      }
    }
    $('#slider-wrap').hover(
      function () {
        clearTimeout(slideTime);
        pause = true;
      },
      function () {
        pause = false;
        rotator();
      });
    rotator();
  });
});


//modal


$(function () {
  var $modal1 = $('#modal1');
  var $modalOpen1 = $('#modal-1');
  var $modal2 = $('#modal2');
  var $modalOpen2 = $('#modal-2');
  var $modal3 = $('#modal3');
  var $modalOpen3 = $('#modal-3');
  var $modal4 = $('#modal4');
  var $modalOpen4 = $('#modal-4');
  var $close = $('#close');
  var $close2 = $('#close2');
  var $close3 = $('#close3');
  var $close4 = $('#close4');

  $modalOpen1.on('click', function () {
    $modal1.fadeIn(300);
    /*при клике показываем модальное окно*/
  });

  $close.on('click', function () {
    $modal1.fadeOut(300);

  });

  $modalOpen2.on('click', function () {
    $modal2.fadeIn(300); /*при клике показываем модальное окно*/
  });

  $close2.on('click', function () {
    $modal2.fadeOut(300);
  });

  $modalOpen3.on('click', function () {
    $modal3.fadeIn(300); /*при клике показываем модальное окно*/
  });

  $close3.on('click', function () {
    $modal3.fadeOut(300);
  });

  $modalOpen4.on('click', function () {
    $modal4.fadeIn(300); /*при клике показываем модальное окно*/
  });

  $close4.on('click', function () {
    $modal4.fadeOut(300);
  });
});




//accordeon



$(function () {
  $(".accordion__set > .accordion__link").on("click", function (event) {
    event.preventDefault()
    if ($(this).hasClass('accordion__active')) {
      $(this).removeClass("accordion__active");
      $(this).siblings('.accordion__content').slideUp(200);
      $(".accordion__set > .accordion__link i").removeClass("fa-minus").addClass("fa-plus");
    } else {
      $(".accordion__set > .accordion__link i").removeClass("fa-minus").addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
      $(".accordion__set > .accordion__link").removeClass("accordion__active");
      $(this).addClass("accordion__active");
      $('.accordion__content').slideUp(200);
      $(this).siblings('.accordion__content').slideDown(200);
    }
  });
});


//lodash




$(function () {
  $.ajax({
    url: "https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json",
    success: onSuccess,
  });

  function onSuccess(data) {
    var dataObj = JSON.parse(data);
    // 1.
    var dataSkills = _.map(dataObj, "skills");
    dataSkills = _.flatten(dataSkills);
    dataSkills = _.uniq(dataSkills);
    dataSkills = _.sortBy(dataSkills);

    // 2.
    var dataNames = _.sortBy(dataObj, function (el) {
      return el.friends.length;

    });

    dataNames = _.map(dataNames, "name");

    // 3.
    var dataFriends = _.map(dataObj, "friends");
    dataFriends = _.flatten(dataFriends);
    dataFriends = _.map(dataFriends, "name");
    dataFriends = _.flatten(dataFriends);
    dataFriends = _.uniq(dataFriends);


    console.log("1. Array of unique skills: ", dataSkills);
    console.log("2. Array of sorted names (by friends amount): ", dataNames);
    console.log("3. Array of unique friends: ", dataFriends);
  }
});