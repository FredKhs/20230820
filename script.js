window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
  $(window).scroll(function (){
      var scrollTop = $(this).scrollTop();
      
      $('.default-block').hide();
        if ( scrollTop > 0 && scrollTop < 100 ){
          $('#home').fadeIn();       // Home In
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 100 && scrollTop < 600 ){
          $('#home').fadeOut();
          $('#block-01').fadeIn();    // Block 1 In
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 600 && scrollTop < 1000 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeIn();    // Block 2 In
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
          } 
        else if( scrollTop > 1000 && scrollTop < 1500 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeIn();    // Block 3 In
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 1500 && scrollTop < 2100 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeIn();    // Block 4 In
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 2100 && scrollTop < 2800 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeIn();    // Block 5 In
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 2800 && scrollTop < 3500 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeIn();    // Block 6 In
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 3500 && scrollTop < 4500 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeIn();    // Block 7 In
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 4500 && scrollTop < 5000 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeIn();    // Block 8 In
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 5000 && scrollTop < 5500 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeIn();    // Block 9 In
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 5500 && scrollTop < 6000 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeIn();    // Block 10 In
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 6000 && scrollTop < 6500 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeIn();    // Block 11 In
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 6500 && scrollTop < 7000 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeIn();    // Block 12 In
          $('#block-13').fadeOut();
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 7000 && scrollTop < 7500 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeIn();    // Block 13 In
          $('#block-14').fadeOut();
          $('#block-15').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 7500 && scrollTop < 8000 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-16').fadeIn();    // Block 16 In
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 8000 && scrollTop < 8500 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeIn();    // Block 17 In
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 8500 && scrollTop < 9000 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeIn();    // Block 18 In
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 9000 && scrollTop < 9500 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeIn();    // Block 19 In
          $('#block-20').fadeOut();
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 9500 && scrollTop < 10000 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeIn();    // Block 20 In
          $('#block-21').fadeOut();
        }
        else if( scrollTop > 10000 && scrollTop < 10500 ) {
          $('#home').fadeOut();
          $('#block-01').fadeOut();
          $('#block-02').fadeOut();
          $('#block-03').fadeOut();
          $('#block-04').fadeOut();
          $('#block-05').fadeOut();
          $('#block-06').fadeOut();
          $('#block-07').fadeOut();
          $('#block-08').fadeOut();
          $('#block-09').fadeOut();
          $('#block-10').fadeOut();
          $('#block-11').fadeOut();
          $('#block-12').fadeOut();
          $('#block-13').fadeOut();
          $('#block-16').fadeOut();
          $('#block-17').fadeOut();
          $('#block-18').fadeOut();
          $('#block-19').fadeOut();
          $('#block-20').fadeOut();
          $('#block-21').fadeIn();    // Block 21 In
        }
        // else if( scrollTop > 10500 && scrollTop < 11000 ) {
        //   $('#home').fadeOut();
        //   $('#block-01').fadeOut();
        //   $('#block-02').fadeOut();
        //   $('#block-03').fadeOut();
        //   $('#block-04').fadeOut();
        //   $('#block-05').fadeOut();
        //   $('#block-06').fadeOut();
        //   $('#block-07').fadeOut();
        //   $('#block-08').fadeOut();
        //   $('#block-09').fadeOut();
        //   $('#block-10').fadeOut();
        //   $('#block-11').fadeOut();
        //   $('#block-12').fadeOut();
        //   $('#block-13').fadeOut();
        //   $('#block-14').fadeOut();
        //   $('#block-15').fadeOut();
        //   $('#block-16').fadeOut();
        //   $('#block-17').fadeOut();
        //   $('#block-18').fadeOut();
        //   $('#block-19').fadeOut();
        //   $('#block-20').fadeIn();    // Block 20 In
        //   $('#block-21').fadeOut();
        // }
        // else if( scrollTop > 11000 && scrollTop < 11500 ) {
        //   $('#home').fadeOut();
        //   $('#block-01').fadeOut();
        //   $('#block-02').fadeOut();
        //   $('#block-03').fadeOut();
        //   $('#block-04').fadeOut();
        //   $('#block-05').fadeOut();
        //   $('#block-06').fadeOut();
        //   $('#block-07').fadeOut();
        //   $('#block-08').fadeOut();
        //   $('#block-09').fadeOut();
        //   $('#block-10').fadeOut();
        //   $('#block-11').fadeOut();
        //   $('#block-12').fadeOut();
        //   $('#block-13').fadeOut();
        //   $('#block-14').fadeOut();
        //   $('#block-15').fadeOut();
        //   $('#block-16').fadeOut();
        //   $('#block-17').fadeOut();
        //   $('#block-18').fadeOut();
        //   $('#block-19').fadeOut();
        //   $('#block-20').fadeOut();
        //   $('#block-21').fadeIn();    // Block 21 In
        // }
  });