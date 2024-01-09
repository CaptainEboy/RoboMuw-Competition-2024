var imgavat = $('#avat');
var inpfile = $('#inpfile'); 
inpfile.on('change', function() { 
     if (this.files[0]) { 
         var reader = new FileReader(); 
         reader.readAsDataURL(this.files[0]);
         reader.onloadend = function ()  
         { 
          imgavat.attr('src',reader.result); 
        }; 
        


      }
    });

function getSkinShade() {
     var formdata = new FormData();

        var myHeaders = new Headers();
        myHeaders.append("x-api-key", "put your api key here");

        var formdata = new FormData();
        
        formdata.append("file", $('#inpfile')[0].files[0] );

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://api.robomua.com/api/skinshade", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result);
          // console.log(result.skinShade);
          // console.log(result.toneRange);
          alert("Your Skin Shade is:" + result)

        })
        .catch(error => console.log('error', error));
        // document.getElemenetById("h1").innerHtml = result
        // document.getElementById("h1").innerHTML = "hello";
        document.getElementById("demo").innerHTML = "Your Skin Shade Result" +" " +  result;
    
  }

  function  getHairRecommendation() {
    alert("API is under maintenance, please try again later")
  }

  function  getLipRecommendation() {
    alert("API is under maintenance, please try again later")
  }



