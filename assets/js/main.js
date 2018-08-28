var app = {

  timeController: function(){
    var msg = 'Good ';
    var _hour = new Date().getHours();
    if(_hour >= 1 && _hour < 12){
      msg += 'Morning';
    }
    if(_hour >= 12 && _hour < 16){
      msg += 'Afternoon';
    }
    if(_hour >= 16 && _hour < 19){
      msg += 'Evening';
    }
    if(_hour >= 19 ){
      msg += 'Goodnight';
    }

    return msg;
    console.log(msg);

    // $.notify(msg + ' Stranger ');

  },

  showNotification:  function(arg){
    var message = this.timeController();
    var colors = ['primary', 'success', 'info', 'danger'];

    var _type = Math.floor(Math.random() * colors.length);

    $.notify({
      message:  msg + ' ' + arg

    }, {
      type:  'success'

    });
  },

  sideBarController:  function(){
    function watcher(){
    var ul_content = '';
    var $navbar = $('.navbar').find('.navbar-collapse').find('ul').clone(true);
    console.log()

    $navbar.children().each(function(child){
      console.log(child)
    });

    $aside.children(.each)


    }
    









    console.log($navbar);
  }

  
}