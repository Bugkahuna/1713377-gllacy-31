ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.968322, 30.317359],
          zoom: 15
      }, {
          searchControlProvider: 'yandex#search'
      }),


      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Магазин мороженого "Глейси"',
          balloonContent: 'Магазин Глэйси – это онлайн и офлайн-магазин<br/>по продаже мороженого собственного<br/>производства на развес'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin.svg',
          // Размеры метки.
          iconImageSize: [80, 140],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-40, -140]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
