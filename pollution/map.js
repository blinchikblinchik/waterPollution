ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.902250, 27.561816],
            zoom: 7
        }, {
            searchControlProvider: 'yandex#search'
        })
        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');


        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        place1 = new ymaps.Placemark([53.611096, 28.181747], {
            hintContent: 'Река Свислочь',
            balloonContent: '<p><b> Местонахождение: </b> (J56J+CMQ) </p> <p><b> Уровень чистоты: </b> 10 </p>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinGreen.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        place2 = new ymaps.Placemark([52.369895, 30.889862], {
            hintContent: 'Река Уза',
            balloonContent: '<p><b> Местонахождение: </b> (9V9Q+XW5) </p> <p><b> Уровень чистоты: </b> 9 </p>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinGreen.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        place3 = new ymaps.Placemark([54.122951, 28.407394], {
            hintContent: 'Река Плисса',
            balloonContent: '<p><b> Местонахождение: </b> (4CF4+5XJ) </p> <p><b> Уровень чистоты: </b> 7 </p>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinYellow.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        place4 = new ymaps.Placemark([51.539077, 23.564912], {
            hintContent: 'Река Буг (Западный)',
            balloonContent: '<p><b> Местонахождение: </b> (GHQ7+JXM) </p> <p><b> Уровень чистоты: </b> 6 </p>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinYellow.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        place5 = new ymaps.Placemark([52.577051, 27.586856], {
            hintContent: 'Река Морочь',
            balloonContent: '<p><b> Местонахождение: </b> (HHGP+RPH) </p> <p><b> Уровень чистоты: </b> 4 </p>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinRed.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        place6 = new ymaps.Placemark([53.643776, 25.337005], {
            hintContent: 'Река Неман',
            balloonContent: '<p><b> Местонахождение: </b> (J8VP+GR6) </p> <p><b> Уровень чистоты: </b> 4 </p>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinRed.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        place7 = new ymaps.Placemark([53.887552, 30.333102], {
            hintContent: 'Пляж реки Днепр',
            balloonContent: '<p><b> Местонахождение: </b> (V8QM+26H) </p> <p><b> Уровень чистоты: </b> 0 </p>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinDanger.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        place8 = new ymaps.Placemark([53.177157, 29.164391], {
            hintContent: 'Пляж санатория "Шинник"',
            balloonContent: '<p><b> Местонахождение: </b> (55G7+VQ6) </p> <p><b> Уровень чистоты: </b> 1 </p>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinDanger.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        place9 = new ymaps.Placemark([52.686444, 25.943012], {
            hintContent: 'Выгонощанское водохранилище',
            balloonContent: '<p><b> Местонахождение: </b> (MWPV+H6C) </p> <p><b> Уровень чистоты: </b> 9 </p>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinGreen.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        place10 = new ymaps.Placemark([55.505434, 28.713331], {
            hintContent: 'Река Западная Двина',
            balloonContent: '<p><b> Местонахождение: </b> (GP47+58G) </p> <p><b> Уровень чистоты: </b> 5 </p>',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinYellow.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        place11 = new ymaps.Placemark([54.865383, 26.771255], {
            hintContent: 'Озеро Нарочь',
            balloonContent: '<p><b> Местонахождение: </b> (VQ8C+5G2) </p> <p><b> Уровень чистоты: </b> 10 </p>', 
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/pinGreen.png',
            // Размеры метки.
            iconImageSize: [40, 40],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -42],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [0, 0],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

        

    myMap.geoObjects
        .add(place1)
        .add(place2)
        .add(place3)
        .add(place4)
        .add(place5)
        .add(place6)
        .add(place7)
        .add(place8)
        .add(place9)
        .add(place10)
        .add(place11);
});

