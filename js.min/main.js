function init() {
  var screen_height     = $(window).height(),
      screen_width      = $(window).width(),
      headers_height    = $('.headers_container').height();
    
  if(!isMobile()) {
	$('#main_banner, #footer').height(screen_height);
	$('.headers_container').css('padding', (screen_height - headers_height) / 2 + 'px 0');
  } else {
	$('#main_banner, #footer').css('height', 'inherit');
	$('.headers_container').css('padding', '150px 0');
	
  }
  
}
function isMobile() {
  if($(window).width() < 768 ) {
	return true;
  } else {
	return false;
  }
}
$(window).resize(function () {
  init();
  
});
$(document).ready(function () {
  init();
  
  var translate = {
    tic_tac_toe_title_eng:
      'Tic tac toe',
    tic_tac_toe_title_pl:
      'Kółko i krzyżyk',
    tic_tac_toe_description_eng:
      'A simple game for 2 players. I wrote it using web technologies, such as: Jquery, Html, Scss. The rules of the game are simple. Each game starts with a player who has the \'x\' sign.   The one who obtains the sequence of 3 of his signs in 1 line (vertical / horizontal / slant) wins. The application includes the option to enter your names. If it is your turn, your icon will be displayed in pink color. At the bottom you can find a list, that shows your time and the time of the game. Have fun!',
    tic_tac_toe_description_pl:
      'Prosta gra dla 2 graczy. Napisalam ja za pomoca technologii webowych takich jak:  Jquery, Html, Scss.\n' +
      '            Zasady gry sa proste. Zawsze zaczyna gracz ze znakiem "x". Wygrywa gracz ktory jako pierwszy uzyska sekwencje 3 swoich znakow w 1 lini (pion/poziom/skos).\n' +
      '            W aplikacji uwzgledniona zostala mozliwosc wpisania imion/pseudonimow graczy, na kolor rozowy wyswietla sie ikona gracza  ktorego jest tura. Do tego pod gra, znajduje sie zestawienie ktore pokazuje ktory gracz ile wygral rozgrywek oraz ile czasu zajela ostatnia rorywka. Życze milej zabawy!',
    interior_page_title_eng:
      'Interior designers page',
    interior_page_title_pl:
      'Strona "wizytowka" studio projektowanie wnętrz',
    interior_page_description_eng:
      'A website I created for interior design studio. I wrote it using web technologies, such as: Jquery, Html, Scss, RWD.  It is a simple website where you can find all the information regarding services, price list, architects, news and previous projects.  See more! ',
    interior_page_description_pl:
      ' Strona "wizytówka" studio architektury wnetrz. Strona napisana  za pomoca technologii webowych takich jak:  Jquery, Html, Scss, RWD.\n' +
      '              Jest to prosta stronka ktora pozwala zapoznac sie z oferta studia, poznac architektow, zobaczyc wczesniejsze prace w portfolio oraz skontaktowac sie z pracownikami. Zapraszam do ogladania.',
    tomato_timer_title_eng: 'Tomato timer',
    tomato_timer_title_pl:
      'System zarządzania czasem pomodoro',
    tomato_timer_description_eng:
      'This application will help you improve your work. It is a time management method that uses a timer to break down work into intervals - 25 minutes in length, separated by short breaks. The app is counting the time of your work/ break and, when the time is over, signals with characteristic sound or visualisation that it is time for next step. Try it now! ',
    tomato_timer_description_pl:
      'Aplikacja ulatwiajaca efektywna prace. Metoda zarzadzania czasem "Tomato Timer" polega na intensywnym wykonywaniu zadan przez 25min, nastepnie bez wzgledu na to w jakim momencie zadania jestesmy, rzucamy wszystko i mamy 5 minutową przerwe. Aplikacja odlicza czas pracy/przerwy i po jego uplywie sygnalizuje  uzytkownikowi dzwiekiem oraz wizualnie iz czas na kolejny etap (prace/przerwe). Zapraszam do wyprobowania.',
    validate_form_title_eng:
      'Validation plugin',
    validate_form_title_pl:
      'Plugin do walidacji formularzy',
    validate_form_description_eng:
      'JQuery plugin that allows you to validate your forms. It checks if input value has a properly lenght, if it is a required filed, phone number, or email. See more on website!',
    validate_form_description_pl:
      'Plugin Jquery, ktory umozliwia walidacje formularzy. Sprawdza czy input ma odpowiednia długość, czy jest polem obowiazkowym, czy jest numerem telefonu, czy jest e-mailem. Aby skorzystać zapraszam do przeczytania instrukcji zawartej na stronie projektu.'
    
  };
  $('#tic_tac_toe_title').text(translate.tic_tac_toe_title_pl);
  $('#tic_tac_toe_description').text(translate.tic_tac_toe_description_pl);
  $('#interior_page_title').text(translate.interior_page_title_pl);
  $('#interior_page_description').text(translate.interior_page_description_pl);
  $('#tomato_timer_title').text(translate.tomato_timer_title_pl);
  $('#tomato_timer_description').text(translate.tomato_timer_description_pl);
  $('#validate_form_title').text(translate.validate_form_title_pl);
  $('#validate_form_description').text(translate.validate_form_description_pl);
  
  $('#language .lang').click(function () {
    console.log('wtf');
    let data = $(this).data('lang');
    $('#language .lang').removeClass('active');
    $(this).addClass("active");
    if(data === 'pl') {
      
      $('#tic_tac_toe_title').text(translate.tic_tac_toe_title_pl);
      $('#tic_tac_toe_description').text(translate.tic_tac_toe_description_pl);
      $('#interior_page_title').text(translate.interior_page_title_pl);
      $('#interior_page_description').text(translate.interior_page_description_pl);
      $('#tomato_timer_title').text(translate.tomato_timer_title_pl);
      $('#tomato_timer_description').text(translate.tomato_timer_description_pl);
      $('#validate_form_title').text(translate.validate_form_title_pl);
      $('#validate_form_description').text(translate.validate_form_description_pl);
    } else {
      $('#tic_tac_toe_title').text(translate.tic_tac_toe_title_eng);
      $('#tic_tac_toe_description').text(translate.tic_tac_toe_description_eng);
      $('#interior_page_title').text(translate.interior_page_title_eng);
      $('#interior_page_description').text(translate.interior_page_description_eng);
      $('#tomato_timer_title').text(translate.tomato_timer_title_eng);
      $('#tomato_timer_description').text(translate.tomato_timer_description_eng);
      $('#validate_form_title').text(translate.validate_form_title_eng);
      $('#validate_form_description').text(translate.validate_form_description_eng);
    }
  });
  
  $('#main_banner .icon_container').click(function () {
    $('html, body').animate({
	  scrollTop: $("#main_gallery").offset().top
    }, 1500);
  });
  $('#footer .icon_container').click(function () {
	$('html, body').animate({
	  scrollTop: $("#main_gallery").offset().top
	}, 1500);
  });
});
