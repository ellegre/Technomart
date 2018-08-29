$('.main-slider').slick({
	dots: true,
});
$(".tab-link").on("click", function(e){
$(".tab-link").removeClass("current");
$(this).addClass("current");
$(".slides-item").removeClass("current");
$($(this).attr("href")).addClass("current");

});

var keypressSlider = document.getElementById('range-filter');
var input0 = document.getElementById('min-price');
var input1 = document.getElementById('max-price');
var inputs = [input0, input1];
if ($(".range-filter").lenght) {
	noUiSlider.create(keypressSlider, {
	start: [0, 30000],
	margin: -10,
	connect: true,
	step: 1,
	range: {
		'min': 0,
		'max': 30000
	}

});
}

if ($(".range-filter").lenght) {
keypressSlider.noUiSlider.on('update', function( values, handle ) {
	inputs[handle].value = values[handle];
});
}

function setSliderHandle(i, value) {
	var r = [null,null];
	r[i] = value;
	keypressSlider.noUiSlider.set(r);
}

// Listen to keydown events on the input field.
if ($(".range-filter").lenght) {
inputs.forEach(function(input, handle) {

	input.addEventListener('change', function(){
		setSliderHandle(handle, this.value);
	});

	input.addEventListener('keydown', function( e ) {

		var values = keypressSlider.noUiSlider.get();
		var value = Number(values[handle]);

		// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
		var steps = keypressSlider.noUiSlider.steps();

		// [down, up]
		var step = steps[handle];

		var position;

		// 13 is enter,
		// 38 is key up,
		// 40 is key down.
		switch ( e.which ) {

			case 13:
				setSliderHandle(handle, this.value);
				break;

			case 38:

				// Get step to go increase slider value (up)
				position = step[1];

				// false = no step is set
				if ( position === false ) {
					position = 1;
				}

				// null = edge of slider
				if ( position !== null ) {
					setSliderHandle(handle, value + position);
				}

				break;

			case 40:

				position = step[0];

				if ( position === false ) {
					position = 1;
				}

				if ( position !== null ) {
					setSliderHandle(handle, value - position);
				}

				break;
		}
	});
});
}
if($(".write-us").lenght) {
  var link = document.querySelector(".write-us");
  
  var popup = document.querySelector(".modal-write-us");
  var close = popup.querySelector(".modal-close");
  
  var form = popup.querySelector("form");
  var name = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  
  var isStorageSupport = true;
var storage = "";

try {
		storage = localStorage.getItem("login");
	} catch (err) {
		isStorageSupport = false;
	}

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });
  
  form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
}