// Своя иконка на картах.

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
					center: [34.844822, -111.766222], // Y, X более 12000 (относительно центра) может выйти за пределы экрана на мобильных 
					zoom: 12
			}, {searchControlProvider: 'yandex#search'}),

			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Собственный значок метки', //Отметка центра карты
					balloonContent: 'Html Accademy'
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: '',
					// Размеры метки.
					iconImageSize: [30, 42],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-5, -38]
			}),

			myPlacemarkWithContent = new ymaps.Placemark([34.844822, -111.766222], {
					hintContent: '',
					balloonContent: 'Html Accademy',
					iconContent: '' //Не забыть удалить
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#imageWithContent',
					// Своё изображение иконки метки.
					iconImageHref: '../svg/map-marker.svg',
					// Размеры метки.
					iconImageSize: [70, 120],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-30, -110],
					// Смещение слоя с содержимым относительно слоя с картинкой.
					iconContentOffset: [15, 15],
					// Макет содержимого.
					iconContentLayout: MyIconContentLayout
			});

	myMap.geoObjects
			.add(myPlacemark)
			.add(myPlacemarkWithContent);
});