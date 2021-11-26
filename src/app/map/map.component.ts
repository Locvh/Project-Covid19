import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {

  mapEvent: Subscription = new Subscription();

  curDate=new Date();
  map: any;
  color = "";
  constructor(private service: SharedService) { }

  ngOnInit(): void {

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 10.775092241262476, lng: 106.69458583462848 },
      gestureHandling: "greedy",
      zoom: 14.3,
      restriction: {
        latLngBounds: {
            north: 10.8,
            south: 10.75,
            east: 106.72,
            west: 106.67,
        },
    },
    });
    this.map.setOptions({ minZoom: 14.3, maxZoom: 14.3 });
    this.showPhuongBenThanh()
    this.showPhuongBenNghe()
    this.showPhuongCauKho()
    this.showPhuongCoGiang()
    this.showPhuongDakao()
    this.showPhuongNguyenCuTrinh()
    this.showPhuongNguyenThaiBinh()
    this.showPhuongOngCaoLanh()
    this.showPhuongPhamNguLao()
    this.showPhuongTanDinh()

  }
  showPhuongBenThanh() {
    const Id = "637722859466941229";
    this.service.getInfectedById(Id).subscribe(data => {
      const BenThanh = [
        { lat: 10.773739, lng: 106.689432 },
        { lat: 10.779583, lng: 106.694990 },
        { lat: 10.775833, lng: 106.699056 },
        { lat: 10.771110, lng: 106.701104 },
        { lat: 10.771123, lng: 106.699131 },
        { lat: 10.770719, lng: 106.698154 },
        { lat: 10.771704, lng: 106.697862 },
        { lat: 10.770171, lng: 106.694211 },
        { lat: 10.771187, lng: 106.693502 },
        { lat: 10.771407, lng: 106.693242 },
        { lat: 10.771746, lng: 106.692971 },
        { lat: 10.773739, lng: 106.689432 }
      ];

      if (data.amountInfected == 0) {
        this.color = "green";
      }
      else if (data.amountInfected >= 1 && data.amountInfected <= 50) {
        this.color = "yellow";
      }
      else if (data.amountInfected > 50 && data.amountInfected <= 100) {
        this.color = "orange";
      }
      else if (data.amountInfected > 100) {
        this.color = "red";
      }
      const flightPath = new google.maps.Polygon({
        paths: BenThanh,
        geodesic: true,
        strokeColor: "#CCFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        zIndex: 1,
        fillColor: this.color,
        fillOpacity: 0.5,
      })
      flightPath.setMap(this.map);



      var marker = new google.maps.Marker({
        position: { lat: 10.773393781195105, lng: 106.69484733600383 },
        icon: './assets/Icon/benthanh.png',
        map: this.map
      });
      var contentString =
        '<div id="content" align="center">' +
        '<div id="siteNotice" align="center">' +
        '</div>' +
        '<b id="firstHeading" class="firstHeading" >' + 'Phường Bến Thành' + '</b>' +
        '<div id="bodyContent" align="center">' +
        '<d>' + data.amountInfected + ' Ca nhiễm ' + '</d>' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markera = marker;
      google.maps.event.addListener(marker, 'mouseover', (function (markera, i) {
        return function () {
          infowindow.open(this.map, marker);
        }
      })(marker));
      google.maps.event.addListener(marker, 'mouseout', (function (markera, i) {
        return function () {
          infowindow.close();
        }
      })(marker));
    })
  }
  showPhuongPhamNguLao() {
    const Id = "637722860656643223";
    this.service.getInfectedById(Id).subscribe(data => {
      const PhamNguLao = [
        { lat: 10.773739, lng: 106.689432 },
        { lat: 10.768463, lng: 106.684489 },
        { lat: 10.766177, lng: 106.689527 },
        { lat: 10.764233, lng: 106.690788 },
        { lat: 10.764951, lng: 106.692580 },
        { lat: 10.770308, lng: 106.697415 },
        { lat: 10.770719, lng: 106.698154 },
        { lat: 10.771704, lng: 106.697862 },
        { lat: 10.770171, lng: 106.694211 },
        { lat: 10.771187, lng: 106.693502 },
        { lat: 10.771407, lng: 106.693242 },
        { lat: 10.771746, lng: 106.692971 },
        { lat: 10.773739, lng: 106.689432 },
      ];
      if (data.amountInfected == 0) {
        this.color = "green";
      }
      else if (data.amountInfected > 0 && data.amountInfected <= 50) {
        this.color = "yellow";

      }
      else if (data.amountInfected > 50 && data.amountInfected <= 100) {
        this.color = "orange";
      }
      else if (data.amountInfected > 100) {
        this.color = "red";
      }
      const flightPath = new google.maps.Polygon({
        paths: PhamNguLao,
        geodesic: true,
        strokeColor: "#CCFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        zIndex: 1,
        fillColor: this.color,
        fillOpacity: 0.5,
      })
      flightPath.setMap(this.map);



      var marker = new google.maps.Marker({
        position: { lat: 10.76716663330577, lng: 106.69061143628832 },
        icon: './assets/Icon/phamngulao.png',
        map: this.map
      });
      var contentString =
        '<div id="content" align="center">' +
        '<div id="siteNotice" align="center">' +
        '</div>' +
        '<b id="firstHeading" class="firstHeading" >' + 'Phường Phạm Ngũ Lão' + '</b>' +
        '<div id="bodyContent" align="center">' +
        '<d>' + data.amountInfected + ' Ca nhiễm ' + '</d>' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markera = marker;
      google.maps.event.addListener(marker, 'mouseover', (function (markera, i) {
        return function () {
          infowindow.open(this.map, marker);
        }
      })(marker));
      google.maps.event.addListener(marker, 'mouseout', (function (markera, i) {
        return function () {
          infowindow.close();
        }
      })(marker));
    })
  }
  showPhuongNguyenCuTrinh() {
    const Id = "637722860397053105";
    this.service.getInfectedById(Id).subscribe(data => {
      if (data.amountInfected == 0) {
        this.color = "green";
      }
      else if (data.amountInfected > 0 && data.amountInfected <= 50) {
        this.color = "yellow";

      }
      else if (data.amountInfected > 50 && data.amountInfected <= 100) {
        this.color = "orange";
      }
      else if (data.amountInfected > 100) {
        this.color = "red";
      }
      const NguyenCuTrinh = [
        { lat: 10.768463, lng: 106.684489 },
        { lat: 10.766177, lng: 106.689527 },
        { lat: 10.764233, lng: 106.690788 },
        { lat: 10.764951, lng: 106.692580 },
        { lat: 10.756514, lng: 106.685209 },
        { lat: 10.765489, lng: 106.681657 },

      ];

      const flightPath = new google.maps.Polygon({
        paths: NguyenCuTrinh,
        geodesic: true,
        strokeColor: "#CCFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        zIndex: 1,
        fillColor: this.color,
        fillOpacity: 0.5,
      })
      flightPath.setMap(this.map);



      var marker = new google.maps.Marker({
        position: { lat: 10.761396986317758, lng: 106.68607562123226 },
        icon: './assets/Icon/nguyencutrinh.png',
        map: this.map
      });
      var contentString =
        '<div id="content" align="center">' +
        '<div id="siteNotice" align="center">' +
        '</div>' +
        '<b id="firstHeading" class="firstHeading" >' + 'Phường Nguyễn Cư Trinh' + '</b>' +
        '<div id="bodyContent" align="center">' +
        '<d>' + data.amountInfected + ' Ca nhiễm ' + '</d>' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markera = marker;
      google.maps.event.addListener(marker, 'mouseover', (function (markera, i) {
        return function () {
          infowindow.open(this.map, marker);
        }
      })(marker));
      google.maps.event.addListener(marker, 'mouseout', (function (markera, i) {
        return function () {
          infowindow.close();
        }
      })(marker));
    })
  }
  showPhuongCauKho() {
    const Id = "637722859809356651";
    this.service.getInfectedById(Id).subscribe(data => {
      if (data.amountInfected == 0) {
        this.color = "green";
      }
      else if (data.amountInfected > 0 && data.amountInfected <= 50) {
        this.color = "yellow";

      }
      else if (data.amountInfected > 50 && data.amountInfected <= 100) {
        this.color = "orange";
      }
      else if (data.amountInfected > 100) {
        this.color = "red";
      }
      const CauKho = [
        { lat: 10.756514, lng: 106.685209 },
        { lat: 10.753642, lng: 106.687025 },
        { lat: 10.758547, lng: 106.692491 },
        { lat: 10.760259, lng: 106.691656 },
        { lat: 10.760698, lng: 106.691227 },
        { lat: 10.761618, lng: 106.689799 },

      ];
      const flightPath = new google.maps.Polygon({
        paths: CauKho,
        geodesic: true,
        strokeColor: "#CCFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        zIndex: 1,
        fillColor: this.color,
        fillOpacity: 0.5,
      })
      flightPath.setMap(this.map);



      var marker = new google.maps.Marker({
        position: { lat: 10.756413555250429, lng: 106.68900490077422 },
        icon: './assets/Icon/caukho.png',
        map: this.map
      });
      var contentString =
        '<div id="content" align="center">' +
        '<div id="siteNotice" align="center">' +
        '</div>' +
        '<b id="firstHeading" class="firstHeading" >' + 'Phường Cầu Kho' + '</b>' +
        '<div id="bodyContent" align="center">' +
        '<d>' + data.amountInfected + ' Ca nhiễm ' + '</d>' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markera = marker;
      google.maps.event.addListener(marker, 'mouseover', (function (markera, i) {
        return function () {
          infowindow.open(this.map, marker);
        }
      })(marker));
      google.maps.event.addListener(marker, 'mouseout', (function (markera, i) {
        return function () {
          infowindow.close();
        }
      })(marker));
    })
  }
  showPhuongNguyenThaiBinh() {
    const Id = "637722860537518698";
    this.service.getInfectedById(Id).subscribe(data => {
      if (data.amountInfected == 0) {
        this.color = "green";
      }
      else if (data.amountInfected > 0 && data.amountInfected <= 50) {
        this.color = "yellow";

      }
      else if (data.amountInfected > 50 && data.amountInfected <= 100) {
        this.color = "orange";
      }
      else if (data.amountInfected > 100) {
        this.color = "red";
      }
      const NguyenThaiBinh = [
        { lat: 10.764568, lng: 106.699656 },
        { lat: 10.765885, lng: 106.698185 },
        { lat: 10.769232, lng: 106.696424 },
        { lat: 10.770258, lng: 106.697449 },
        { lat: 10.770914, lng: 106.699025 },
        { lat: 10.771038, lng: 106.699379 },
        { lat: 10.770783, lng: 106.706549 },
        { lat: 10.770448, lng: 106.706561 },
        { lat: 10.769825, lng: 106.706635 },
        { lat: 10.769529, lng: 106.706423 },
        { lat: 10.769312, lng: 106.705486 },
        { lat: 10.768932, lng: 106.70485 },
        { lat: 10.767957, lng: 106.703031 },
        { lat: 10.767456, lng: 106.702468 },
        { lat: 10.765501, lng: 106.701005 },
      ];
      const flightPath = new google.maps.Polygon({
        paths: NguyenThaiBinh,
        geodesic: true,
        strokeColor: "#CCFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        zIndex: 1,
        fillColor: this.color,
        fillOpacity: 0.5,
      })
      flightPath.setMap(this.map);



      var marker = new google.maps.Marker({
        position: { lat: 10.76682732432531, lng: 106.70000061100868 },
        icon: './assets/Icon/nguyenthaibinh.png',
        map: this.map
      });
      var contentString =
        '<div id="content" align="center">' +
        '<div id="siteNotice" align="center">' +
        '</div>' +
        '<b id="firstHeading" class="firstHeading" >' + 'Phường Nguyễn Thái Bình' + '</b>' +
        '<div id="bodyContent" align="center">' +
        '<d>' + data.amountInfected + ' Ca nhiễm ' + '</d>' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markera = marker;
      google.maps.event.addListener(marker, 'mouseover', (function (markera, i) {
        return function () {
          infowindow.open(this.map, marker);
        }
      })(marker));
      google.maps.event.addListener(marker, 'mouseout', (function (markera, i) {
        return function () {
          infowindow.close();
        }
      })(marker));
    })
  }
  showPhuongCoGiang() {
    const Id = "637722859642993655";
    this.service.getInfectedById(Id).subscribe(data => {
      if (data.amountInfected == 0) {
        this.color = "green";
      }
      else if (data.amountInfected > 0 && data.amountInfected <= 50) {
        this.color = "yellow";

      }
      else if (data.amountInfected > 50 && data.amountInfected <= 100) {
        this.color = "orange";
      }
      else if (data.amountInfected > 100) {
        this.color = "red";
      }
      const CoGiang = [
        { lat: 10.766795, lng: 106.694347 },
        { lat: 10.764910, lng: 106.694917 },
        { lat: 10.762904, lng: 106.696070 },
        { lat: 10.762120, lng: 106.696928 },
        { lat: 10.760359, lng: 106.695590 },
        { lat: 10.758585, lng: 106.692560 },
        { lat: 10.760495, lng: 106.691543 },
        { lat: 10.761664, lng: 106.689788 },
      ];
      const flightPath = new google.maps.Polygon({
        paths: CoGiang,
        geodesic: true,
        strokeColor: "#CCFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        zIndex: 1,
        fillColor: this.color,
        fillOpacity: 0.5,
      })
      flightPath.setMap(this.map);



      var marker = new google.maps.Marker({
        position: { lat: 10.760578052328675, lng: 106.69335529338892 },
        icon: './assets/Icon/cogiang.png',
        map: this.map
      });
      var contentString =
        '<div id="content" align="center">' +
        '<div id="siteNotice" align="center">' +
        '</div>' +
        '<b id="firstHeading" class="firstHeading" >' + 'Phường Cô Giang' + '</b>' +
        '<div id="bodyContent" align="center">' +
        '<d>' + data.amountInfected + ' Ca nhiễm ' + '</d>' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markera = marker;
      google.maps.event.addListener(marker, 'mouseover', (function (markera, i) {
        return function () {
          infowindow.open(this.map, marker);
        }
      })(marker));
      google.maps.event.addListener(marker, 'mouseout', (function (markera, i) {
        return function () {
          infowindow.close();
        }
      })(marker));
    })
  }
  showPhuongOngCaoLanh() {
    const Id = "637722860131336721";
    this.service.getInfectedById(Id).subscribe(data => {
      if (data.amountInfected == 0) {
        this.color = "green";
      }
      else if (data.amountInfected > 0 && data.amountInfected <= 50) {
        this.color = "yellow";

      }
      else if (data.amountInfected > 50 && data.amountInfected <= 100) {
        this.color = "orange";
      }
      else if (data.amountInfected > 100) {
        this.color = "red";
      }
      const OngCaoLanh = [
        { lat: 10.766795, lng: 106.694347 },
        { lat: 10.76491, lng: 106.694917 },
        { lat: 10.762904, lng: 106.69607 },
        { lat: 10.76212, lng: 106.696928 },
        { lat: 10.763555, lng: 106.698058 },
        { lat: 10.763725, lng: 106.69822 },
        { lat: 10.764568, lng: 106.699656 },
        { lat: 10.765885, lng: 106.698185 },
        { lat: 10.769232, lng: 106.696424 },
      ];
      const flightPath = new google.maps.Polygon({
        paths: OngCaoLanh,
        geodesic: true,
        strokeColor: "#CCFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        zIndex: 1,
        fillColor: this.color,
        fillOpacity: 0.5,
      })
      flightPath.setMap(this.map);



      var marker = new google.maps.Marker({
        position: { lat: 10.76378714622775, lng: 106.69755361601429 },
        icon: './assets/Icon/cauonglanh.png',
        map: this.map
      });
      var contentString =
        '<div id="content" align="center">' +
        '<div id="siteNotice" align="center">' +
        '</div>' +
        '<b id="firstHeading" class="firstHeading" >' + 'Phường Cầu Ông Lãnh' + '</b>' +
        '<div id="bodyContent" align="center">' +
        '<d>' + data.amountInfected + ' Ca nhiễm ' + '</d>' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markera = marker;
      google.maps.event.addListener(marker, 'mouseover', (function (markera, i) {
        return function () {
          infowindow.open(this.map, marker);
        }
      })(marker));
      google.maps.event.addListener(marker, 'mouseout', (function (markera, i) {
        return function () {
          infowindow.close();
        }
      })(marker));
    })
  }
  showPhuongBenNghe() {
    const Id = "637722859289590489";
    this.service.getInfectedById(Id).subscribe(data => {
      if (data.amountInfected == 0) {
        this.color = "green";
      }
      else if (data.amountInfected > 0 && data.amountInfected <= 50) {
        this.color = "yellow";

      }
      else if (data.amountInfected > 50 && data.amountInfected <= 100) {
        this.color = "orange";
      }
      else if (data.amountInfected > 100) {
        this.color = "red";
      }
      const BenNghe = [
        { lat: 10.771075, lng: 106.701153 },
        { lat: 10.770769, lng: 106.706528 },
        { lat: 10.770778, lng: 106.707005 },
        { lat: 10.778412, lng: 106.708553 },
        { lat: 10.783524, lng: 106.711471 },
        { lat: 10.786275, lng: 106.714625 },
        { lat: 10.78779, lng: 106.711948 },
        { lat: 10.787428, lng: 106.709718 },
        { lat: 10.788722, lng: 106.707773 },
        { lat: 10.791203, lng: 106.706496 },
        { lat: 10.791496, lng: 106.706069 },
        { lat: 10.786621, lng: 106.70153 },
        { lat: 10.782743, lng: 106.697914 },
        { lat: 10.779605, lng: 106.694954 },
        { lat: 10.775828, lng: 106.699062 },
        { lat: 10.77336, lng: 106.700089 },
      ];
      const flightPath = new google.maps.Polygon({
        paths: BenNghe,
        geodesic: true,
        strokeColor: "#CCFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        zIndex: 1,
        fillColor: this.color,
        fillOpacity: 0.5,
      })
      flightPath.setMap(this.map);



      var marker = new google.maps.Marker({
        position: { lat: 10.780515635363486, lng: 106.70310923333999 },
        icon: './assets/Icon/bennghe.png',
        map: this.map
      });
      var contentString =
        '<div id="content" align="center">' +
        '<div id="siteNotice" align="center">' +
        '</div>' +
        '<b id="firstHeading" class="firstHeading" >' + 'Phường Bến Nghé' + '</b>' +
        '<div id="bodyContent" align="center">' +
        '<d>' + data.amountInfected + ' Ca nhiễm ' + '</d>' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markera = marker;
      google.maps.event.addListener(marker, 'mouseover', (function (markera, i) {
        return function () {
          infowindow.open(this.map, marker);
        }
      })(marker));
      google.maps.event.addListener(marker, 'mouseout', (function (markera, i) {
        return function () {
          infowindow.close();
        }
      })(marker));
    })
  }
  showPhuongDakao() {
    const Id = "637722860247653006";
    this.service.getInfectedById(Id).subscribe(data => {
      if (data.amountInfected == 0) {
        this.color = "green";
      }
      else if (data.amountInfected > 0 && data.amountInfected <= 50) {
        this.color = "yellow";

      }
      else if (data.amountInfected > 50 && data.amountInfected <= 100) {
        this.color = "orange";
      }
      else if (data.amountInfected > 100) {
        this.color = "red";
      }
      const Dakao = [
        { lat: 10.787889, lng: 106.691907 },
        { lat: 10.78294, lng: 106.698044 },
        { lat: 10.79168, lng: 106.706286 },
        { lat: 10.793122, lng: 106.701498 },
        { lat: 10.793622, lng: 106.69785 },
        { lat: 10.793411, lng: 106.695983 },
        { lat: 10.791829, lng: 106.695876 },
      ];
      const flightPath = new google.maps.Polygon({
        paths: Dakao,
        geodesic: true,
        strokeColor: "#CCFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        zIndex: 1,
        fillColor: this.color,
        fillOpacity: 0.5,
      })
      flightPath.setMap(this.map);



      var marker = new google.maps.Marker({
        position: { lat: 10.786674769845646, lng: 106.69771633316586 },
        icon: './assets/Icon/dakao.png',
        map: this.map
      });
      var contentString =
        '<div id="content" align="center">' +
        '<div id="siteNotice" align="center">' +
        '</div>' +
        '<b id="firstHeading" class="firstHeading" >' + 'Phường Đa kao' + '</b>' +
        '<div id="bodyContent" align="center">' +
        '<d>' + data.amountInfected + ' Ca nhiễm ' + '</d>' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markera = marker;
      google.maps.event.addListener(marker, 'mouseover', (function (markera, i) {
        return function () {
          infowindow.open(this.map, marker);
        }
      })(marker));
      google.maps.event.addListener(marker, 'mouseout', (function (markera, i) {
        return function () {
          infowindow.close();
        }
      })(marker));
    })
  }
  showPhuongTanDinh() {
    const Id = "637722860783631460";
    this.service.getInfectedById(Id).subscribe(data => {
      if (data.amountInfected == 0) {
        this.color = "green";
      }
      else if (data.amountInfected > 0 && data.amountInfected <= 50) {
        this.color = "yellow";

      }
      else if (data.amountInfected > 50 && data.amountInfected <= 100) {
        this.color = "orange";
      }
      else if (data.amountInfected > 100) {
        this.color = "red";
      }
      const TanDinh = [
        { lat: 10.787889, lng: 106.691907 },
        { lat: 10.791812, lng: 106.695795 },
        { lat: 10.793447, lng: 106.695882 },
        { lat: 10.793624, lng: 106.694516 },
        { lat: 10.794899, lng: 106.694259 },
        { lat: 10.794878, lng: 106.692585 },
        { lat: 10.7958, lng: 106.690879 },
        { lat: 10.794881, lng: 106.68772 },
        { lat: 10.79497, lng: 106.687055 },
        { lat: 10.796919, lng: 106.685787 },
        { lat: 10.796455, lng: 106.684891 },
        { lat: 10.794338, lng: 106.6852 },
        { lat: 10.793083, lng: 106.686415 },
        { lat: 10.792468, lng: 106.686107 },
      ];

      const flightPath = new google.maps.Polygon({
        paths: TanDinh,
        geodesic: true,
        strokeColor: "#CCFFFF",
        strokeOpacity: 1.0,
        strokeWeight: 1,
        zIndex: 1,
        fillColor: this.color,
        fillOpacity: 0.5,
      })
      flightPath.setMap(this.map);



      var marker = new google.maps.Marker({
        position: { lat: 10.790621129149681, lng: 106.69066675446815 },
        icon: './assets/Icon/tandinh.png',
        map: this.map
      });
      var contentString =
        '<div id="content" align="center">' +
        '<div id="siteNotice" align="center">' +
        '</div>' +
        '<b id="firstHeading" class="firstHeading" >' + 'Phường Tân Định' + '</b>' +
        '<div id="bodyContent" align="center">' +
        '<d>' + data.amountInfected + '  Ca nhiễm ' + '</d>' + '</div>';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      var markera = marker;
      google.maps.event.addListener(marker, 'mouseover', (function (markera, i) {
        return function () {
          infowindow.open(this.map, marker);
        }
      })(marker));
      google.maps.event.addListener(marker, 'mouseout', (function (markera, i) {
        return function () {
          infowindow.close();
        }
      })(marker));
    })
  }

  ngOnDestroy() {
    this.mapEvent.unsubscribe();
  }
}

