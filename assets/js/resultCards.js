

//Country Info contains country name, destination city and the latitude and longitude of said destination

var countryInfo = [["USA","Miami", 25.761681, -80.191788],["Thailand", "Bankok", 13.736717, 100.523186],["Morocco", "Marakech", 31.669746, -7.973328],["Austrailia","Port Douglas", -16.4835, 145.4652],["Bahamas","Nassau", 25.059999, -77.345001], ["Spain", "Tenerife", 28.291565, -16.629129], ["France", "Nice", 43.675819, 7.289429], ["Spain", "Barcelona", 41.390205, 2.154007], ["Brazil", "Rio de Janeiro", -22.908333, -43.196388], ["Sweden", "Åre", 63.245400, 13.034320], ["Switzerland", "St. Moritz", 46.4984, 9.8391], ["USA", "Duluth MN", 46.783229, -92.11871], ["Ecuador", "Mt. Cayambe", 0.0290, -77.9860], ["Canada", "Banff", 51.180202, -115.565704], ["Sweden", "Kiruna", 67.8557, 20.2251], ["Norway", "Bergen",  60.397076, 5.324383], ["Canada", "Quebec City", 46.829853, -71.254028], ["Czech Republic", "Prague", 50.073658, 14.418540], ["France", "Paris", 48.864716, 2.349014], ["Germany", "Berlin", 52.520008, 13.404954], ["UAE", "Dubai", 25.276987, 55.296249], ["Japan", "Tokyo", 35.658581, 139.745438], ["Austria", "Vienna", 48.210033, 16.363449], ["Italy", "Venice", 45.444958, 12.328463], ["Iceland", "Reykjavik", 64.128288, -21.827774], ["Peru", "Cuzco",  -13.5226, -71.9673], ["Zimbabwe", "Hwange National Park", -18.6247, 27.0193]];        

//Displays the maps in the cards of the result section. Parameters are changed depending on choices in the preference form

function initMap(a,b,c,d,e,f) {

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: e,
            lng: f,
        }
    });

    var map2 = new google.maps.Map(document.getElementById("map2"), {
        zoom: 7,
        center: {
            lat: c,
            lng: d,
        }
    });


    var map3 = new google.maps.Map(document.getElementById("map3"), {
        zoom: 7,
        center: {
            lat: a,
            lng: b,
        }
    });

    }

    //Function that checks what information should be displayed in the cards depening on choices. 

    function checkValue() {

        var destSubmit = $("#inline-link-input").val();

        if (destSubmit == "Submit") {
            console.log(destSubmit);
            
            $("form").on("submit", function(){
    
            var data2 = $(this).serialize().split("=");
            data2 = data2.pop("option");
            
            var data = $(this).serialize().slice(7,10);
            
            
            
                if (data == "one") {
                    console.log(data);
                    
                    if (data2 == "Shopping") {
                        
                        $("#card-head-1").html(countryInfo[0][1] +", "+countryInfo[0][0]);
                        $("#card-img-1").attr("src", "assets/images/pride.JPG");
                        $("#card-desc-1").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");
                        
                        $("#card-head-2").html(countryInfo[1][1] +", "+countryInfo[1][0]);
                        $("#card-img-2").attr("src", "assets/images/market.JPG");
                        $("#card-desc-2").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-3").html(countryInfo[2][1] +", "+countryInfo[2][0]);
                        $("#card-img-3").attr("src", "assets/images/house.JPG");
                        $("#card-desc-3").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        initMap(countryInfo[0][2], countryInfo[0][3],countryInfo[1][2],countryInfo[1][3],countryInfo[2][2],countryInfo[2][3]);
                        

                    } else if (data2 == "Sun-Bathing") {
                        
                        $("#card-head-1").html(countryInfo[3][1] +", "+countryInfo[3][0]);
                        $("#card-img-1").attr("src", "assets/images/desert.JPG");
                        $("#card-desc-1").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-2").html(countryInfo[4][1] +", "+countryInfo[4][0]);
                        $("#card-img-2").attr("src", "assets/images/hike.JPG");
                        $("#card-desc-2").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-3").html(countryInfo[5][1] +", "+countryInfo[5][0]);
                        $("#card-img-3").attr("src", "assets/images/rock-beach.JPG");
                        $("#card-desc-3").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        initMap(countryInfo[3][2], countryInfo[3][3],countryInfo[4][2],countryInfo[4][3],countryInfo[5][2],countryInfo[5][3]);
                    
                    } else if (data2 == "Culture") {
                        
                        $("#card-head-1").html(countryInfo[6][1] +", "+countryInfo[6][0]);
                        $("#card-img-1").attr("src", "assets/images/cliff-house.JPG");
                        $("#card-desc-1").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-2").html(countryInfo[7][1] +", "+countryInfo[7][0]);
                        $("#card-img-2").attr("src", "assets/images/arc.JPG");
                        $("#card-desc-2").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-3").html(countryInfo[8][1] +", "+countryInfo[8][0]);
                        $("#card-img-3").attr("src", "assets/images/fireworks.JPG");
                        $("#card-desc-3").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        initMap(countryInfo[6][2], countryInfo[6][3],countryInfo[7][2],countryInfo[7][3],countryInfo[8][2],countryInfo[8][3]);
                    
                    }
                    
                }

                else if (data == "two") {
                    console.log(data);
                    if (data2 == "Skiing") {
                        
                        $("#card-head-1").html(countryInfo[9][1] +", "+countryInfo[9][0]);
                        $("#card-img-1").attr("src", "assets/images/ano-ski.JPG");
                        $("#card-desc-1").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-2").html(countryInfo[10][1] +", "+countryInfo[10][0]);
                        $("#card-img-2").attr("src", "assets/images/skiing.JPG");
                        $("#card-desc-2").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-3").html(countryInfo[11][1] +", "+countryInfo[11][0]);
                        $("#card-img-3").attr("src", "assets/images/cabin.JPG");
                        $("#card-desc-3").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");
                        
                        initMap(countryInfo[9][2], countryInfo[9][3],countryInfo[10][2],countryInfo[10][3],countryInfo[11][2],countryInfo[11][3]);
                        
                    } else if (data2 == "Hiking") {
                        
                        $("#card-head-1").html(countryInfo[12][1] +", "+countryInfo[12][0]);
                        $("#card-img-1").attr("src", "assets/images/mou-lake.JPG");
                        $("#card-desc-1").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-2").html(countryInfo[13][1] +", "+countryInfo[13][0]);
                        $("#card-img-2").attr("src", "assets/images/ice-hike.JPG");
                        $("#card-desc-2").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-3").html(countryInfo[14][1] +", "+countryInfo[14][0]);
                        $("#card-img-3").attr("src", "assets/images/cabin.JPG");
                        $("#card-desc-3").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        initMap(countryInfo[12][2], countryInfo[12][3],countryInfo[13][2],countryInfo[13][3],countryInfo[14][2],countryInfo[14][3]);
                    
                    } else if (data2 == "Sleading") {
                        
                        $("#card-head-1").html(countryInfo[15][1] +", "+countryInfo[15][0]);
                        $("#card-img-1").attr("src", "assets/images/ice-hike.JPG");
                        $("#card-desc-1").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-2").html(countryInfo[16][1] +", "+countryInfo[16][0]);
                        $("#card-img-2").attr("src", "assets/images/cabin.JPG");
                        $("#card-desc-2").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-3").html(countryInfo[17][1] +", "+countryInfo[17][0]);
                        $("#card-img-3").attr("src", "assets/images/mountains.JPG");
                        $("#card-desc-3").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");
                    
                        initMap(countryInfo[15][2], countryInfo[15][3],countryInfo[16][2],countryInfo[16][3],countryInfo[17][2],countryInfo[17][3]);

                    }
                    
                }

                else if (data == "thr") {
                    console.log(data);
                    if (data2 == "Shopping") {
                        
                        $("#card-head-1").html(countryInfo[18][1] +", "+countryInfo[18][0]);
                        $("#card-img-1").attr("src", "assets/images/city-night.JPG");
                        $("#card-desc-1").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-2").html(countryInfo[19][1] +", "+countryInfo[19][0]);
                        $("#card-img-2").attr("src", "assets/images/market.JPG");
                        $("#card-desc-2").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-3").html(countryInfo[20][1] +", "+countryInfo[20][0]);
                        $("#card-img-3").attr("src", "assets/images/rock-beach.JPG");
                        $("#card-desc-3").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        initMap(countryInfo[18][2], countryInfo[18][3],countryInfo[19][2],countryInfo[19][3],countryInfo[20][2],countryInfo[20][3]);
                    
                    } else if (data2 == "Culture") {
                        
                        $("#card-head-1").html(countryInfo[21][1] +", "+countryInfo[21][0]);
                        $("#card-img-1").attr("src", "assets/images/blom.JPG");
                        $("#card-desc-1").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-2").html(countryInfo[22][1] +", "+countryInfo[22][0]);
                        $("#card-img-2").attr("src", "assets/images/handstand.JPG");
                        $("#card-desc-2").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-3").html(countryInfo[23][1] +", "+countryInfo[23][0]);
                        $("#card-img-3").attr("src", "assets/images/market.JPG");
                        $("#card-desc-3").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        initMap(countryInfo[21][2], countryInfo[21][3],countryInfo[22][2],countryInfo[22][3],countryInfo[23][2],countryInfo[23][3]);
                    
                    } else if (data2 == "Adventure") {
                        
                        $("#card-head-1").html(countryInfo[24][1] +", "+countryInfo[24][0]);
                        $("#card-img-1").attr("src", "assets/images/church.JPG");
                        $("#card-desc-1").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-2").html(countryInfo[25][1] +", "+countryInfo[25][0]);
                        $("#card-img-2").attr("src", "assets/images/cusco.JPG");
                        $("#card-desc-2").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        $("#card-head-3").html(countryInfo[26][1] +", "+countryInfo[26][0]);
                        $("#card-img-3").attr("src", "assets/images/bjorn.JPG");
                        $("#card-desc-3").html("This lovely getaway will be perfect for you and a companion to enjoy all the best that life has to offer");

                        initMap(countryInfo[24][2], countryInfo[24][3],countryInfo[25][2],countryInfo[25][3],countryInfo[26][2],countryInfo[26][3]);
                    
                    } else {
                        console.log("Your request wasn't processed");
                    }

                    
                }

            
            return false;
            });
        } 
        
    
    }

