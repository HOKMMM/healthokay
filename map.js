function initMap() {
        var uluru = {lat:26.7512, lng:83.3763};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom:10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
