function checkValue() {

       
        var country = ["USA","Thailand","Morocco","Austrailia","Bahamas","Spain","France","Spain","Brazil","Sweden","Switzerland","Ecuador","Canada","Norway","Czech Republic","Germany","UAE","Japan","Austria","Italy","Iceland","Peru","Zimbabwe"];
        var city = [["Florida","Bankok","Marakech","Port Douglas","Nassau","Tenerife","Nice","Barcelona","Rio de Janeiro"],["Åre","St. Moritz","Duluth - Minnesota","Mt. Cayambe","Banff","Kiruna","Bergen","Quebec City","Prague"],["Paris","Munich","Dubai","Tokyo","Vienna","Venice","Reykjavik","Cuzco","Hwange National Park"]];

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
                        
                        $("#card-head-1").html(country[0] +", "+city[0][0]);
                        console.log(data2);
                        $("#card-head-2").html(country[1] +", "+city[0][1]);
                        console.log(data2);
                        $("#card-head-3").html(country[2] +", "+city[0][2]);
                        console.log(data2);
                    
                    } else if (data2 == "Sun-Bathing") {
                        
                        $("#card-head-1").html(country[3] +", "+city[0][3]);
                        console.log(data2);
                        $("#card-head-2").html(country[4] +", "+city[0][4]);
                        console.log(data2);
                        $("#card-head-3").html(country[5] +", "+city[0][5]);
                        console.log(data2);
                    
                    } else if (data2 == "Culture") {
                        
                        $("#card-head-1").html(country[6] +", "+city[0][6]);
                        console.log(data2);
                        $("#card-head-2").html(country[7] +", "+city[0][7]);
                        console.log(data2);
                        $("#card-head-3").html(country[8] +", "+city[0][8]);
                        console.log(data2);
                    
                    }
                    
                }

                else if (data == "two") {
                    console.log(data);
                    if (data2 == "Skiing") {
                        
                        $("#card-head-1").html(country[9] +", "+city[1][0]);
                        console.log(data2);
                        $("#card-head-2").html(country[10] +", "+city[1][1]);
                        console.log(data2);
                        $("#card-head-3").html(country[0] +", "+city[1][2]);
                        console.log(data2);
                    
                    } else if (data2 == "Hiking") {
                        
                        $("#card-head-1").html(country[11] +", "+city[1][3]);
                        console.log(data2);
                        $("#card-head-2").html(country[12] +", "+city[1][4]);
                        console.log(data2);
                        $("#card-head-3").html(country[9] +", "+city[1][5]);
                        console.log(data2);
                    
                    } else if (data2 == "Sleading") {
                        
                        $("#card-head-1").html(country[13] +", "+city[1][6]);
                        console.log(data2);
                        $("#card-head-2").html(country[12] +", "+city[1][7]);
                        console.log(data2);
                        $("#card-head-3").html(country[14] +", "+city[1][8]);
                        console.log(data2);
                    
                    }
                    
                }

                else if (data == "thr") {
                    console.log(data);
                    if (data2 == "Hiking") {
                        
                        $("#card-head-1").html(country[6] +", "+city[2][0]);
                        console.log(data2);
                        $("#card-head-2").html(country[15] +", "+city[2][1]);
                        console.log(data2);
                        $("#card-head-3").html(country[16] +", "+city[2][2]);
                        console.log(data2);
                    
                    } else if (data2 == "Culture") {
                        
                        $("#card-head-1").html(country[17] +", "+city[2][3]);
                        console.log(data2);
                        $("#card-head-2").html(country[18] +", "+city[2][4]);
                        console.log(data2);
                        $("#card-head-3").html(country[19] +", "+city[2][5]);
                        console.log(data2);
                    
                    } else if (data2 == "Adventure") {
                        
                        $("#card-head-1").html(country[20] +", "+city[2][6]);
                        console.log(data2);
                        $("#card-head-2").html(country[21] +", "+city[2][7]);
                        console.log(data2);
                        $("#card-head-3").html(country[22] +", "+city[2][8]);
                        console.log(data2);
                    
                    }
                    
                }

            
            return false;
            });
        } 
        
    
    }

