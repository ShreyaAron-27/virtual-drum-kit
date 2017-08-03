var currentSong;
var shuffle=0;
var slide=0;
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    if (name.length > 2) { //name.length should be greater then 2 then only the code will run else nothing will happen
        var message = "Welcome, " + name;//welcome with the name entered
        $('.main .user-name').text(message);//main screen after "go" is clicked display welcome with the user name login
        $('.welcome-screen').addClass('hidden');//welcome screen will be hidden using hidden class
    $('.main').removeClass('hidden');//main screen will be free from hidden class and we can see the main screen
    }
    else { //else block will run when if statement is not statisfied
    $('#name-input').addClass('error');//error if lenght or name lenght is less then 2
    }
    });
function fancyTimeFormat(time)
{
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600); //float time conversion for hours
  var mins = ~~((time % 3600) / 60); //float time conversion for minutes
  var secs = time % 60; //float time conversion for seconds

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret; //returns the format of time for the song to be played
}

function toggleSong() //a function to turn music on and off when reqired to reduce the writing of code baar baar
    {
var song = document.querySelector('.audio1'); //audio is selected and saved in variable song
if(song.paused == true) { //if song paused then run the below code to play it
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause'); //play icon is displayed then remove this class and add add pause class in it so that when pausing the track is done we get the status of song by seeing the icon
song.play(); //run the song
}
else { //if song is not paused or is being playing then run the following code to stop it
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play'); //pause icon is displayed then remove this class and add add play class in it so that when pausing the track is done we get the status of song by seeing the icon
song.pause(); //pause the song
}
}
function currentSongSource()
    {
        var audio= document.querySelector('.audio1');

        var str= audio.src;
        var start= str.length-9;
        var res= str.substring(start,str.length);
        console.log(res);
        for(var i=0; i<songs.length;i++)
        {
            if(songs[i].source==res)
            {
                currentSong=i+1;
                break;
            }
        }
        return currentSong;

    }
  //---------------------- Drum App show -----------
  var drumClicked = 0;
$('#drumIcon').on('click', function(){
      drumClicked=1-drumClicked;
      if(drumClicked==1)
      {
        console.log(1);
          $('.play-icon').addClass('disable');
          $('.next-icon').addClass('disable');
          $('.previous-icon').addClass('disable');
       $('.content').addClass('hidden');
      $('.drum-app').removeClass('hidden');
      $('.fa').removeClass('clickable');
      }
      else
      {
          var audio = document.querySelector('.audio1');
          audio.src= songs[0].source;
        $('.content').removeClass('hidden');
      $('.drum-app').addClass('hidden');
      $('.play-icon').removeClass('disable');
          $('.next-icon').removeClass('disable');
          $('.previous-icon').removeClass('disable');
          $('.fa').addClass('clickable');
      }

  });
  function repeatAll()
  {
      var audio= document.querySelector('.audio1');
      if(audio.currentTime==audio.duration)
      {
          if(shuffle==1)
          {
               var random= ['2','1','3','0'];

              audio.src= songs[random[indexOfRandom]].source;
          }
          else
          {
          var currentSong= currentSongSource();
          var currentSongObj= songs[currentSong];

          if(currentSong-1<songs.length-1)
          {audio.src=currentSongObj.source;}
      else if(currentSong-1==songs.length-1)
      {
              currentSong=0;
              currentSongObj= songs[currentSong];
               audio.src=currentSongObj.source;
      }
  }
       audio.play();

       console.log("hsixgnig");
       console.log(currentSongObj);
       changeCurrentSongDetails(currentSongObj);
      }
  }
  //------------------------ Next Song Function =-----------

   function nextSong()
    {

             var currentSong= currentSongSource();
            var currentSongObj= songs[currentSong];
             var audio= document.querySelector('.audio1');

            if(currentSong-1<songs.length-1)
            {audio.src=currentSongObj.source;}
        else if(currentSong-1==songs.length-1)
        {
                currentSong=0;
                currentSongObj= songs[currentSong];
                 audio.src=currentSongObj.source;
        }
         audio.play();
         console.log("hsixgnig");
         console.log(currentSongObj);
         changeCurrentSongDetails(currentSongObj);
    }

    //----------------------- previous song -------------------

    function preSong()
    {

             var currentSong= currentSongSource();
            var currentSongObj= songs[currentSong-2];
             var audio= document.querySelector('.audio1');

            if(currentSong>1)
            {audio.src=currentSongObj.source;}
        else if(currentSong==1)
        {
                currentSong=songs.length-1;
                currentSongObj= songs[currentSong];
                 audio.src=currentSongObj.source;
        }
         audio.play();
         console.log("hsixgnig");
         console.log(currentSongObj);
         changeCurrentSongDetails(currentSongObj);
    }
    //--------------------- Shuffle Function ----------------
        var indexOfRandom=0;
       function shuffleSongs() {
     var audio=document.querySelector('.audio1');

            // var random=~~((Math.random()*100)%4);
            //     console.log(random);
            var random= ['2','1','3','0'];

                audio.src= songs[random[indexOfRandom]].source;
                audio.play();
                changeCurrentSongDetails( songs[random[indexOfRandom]]);
                console.log();
                indexOfRandom++;
                if(indexOfRandom>3)
                {
                    indexOfRandom=0;
                }
       }
       $('.shuffle-icon').on('click', function() {// play-icon wali class wala tag pakda and usko click karne pe function chla diya
              shuffle=1-shuffle;
              console.log('shuffle value changed' + shuffle);
              $('.shuffle-icon').toggleClass('disable');


              //console.log("nested if parent");

             });

           //----------------- Play Next pressed---------------------


           $('.next-icon').on('click', function() {// play-icon wali class wala tag pakda and usko click karne pe function chla diya
              nextSong();// toggleSong wala function ua machine call ki i.e. ab toggleSong wala function chalega

           });

           //------------------- Play Previous Song ------------------


           $('.previous-icon').on('click', function() {// play-icon wali class wala tag pakda and usko click karne pe function chla diya
              preSong();// toggleSong wala function ua machine call ki i.e. ab toggleSong wala function chalega

           });
  var keycodes=['65','83','68','70','71','72','74','75','76'];
var drumClicked=0;
      function keyPressDrumPlay(key)
      {
           $('body').on('keypress', function(event) { //body ko pakda uspe keypress ka event lagaya, jab key press hogi tab function chalega; isme event as an argument pass kiya hai
              var target= event.target;
              var audioClass= '.audio'+(key+1);
              var audio= document.querySelector(audioClass);

              if (event.keyCode == keycodes[key] && drumClicked==1) // event se hum bhot kuch check kar sakte hain jaise yahan humne keyCode check kiya hai matlab jo key humne press ki hai uska code 32 hai to ander wala code chalega otherwise nhi
              {
                  console.log(keycodes[key]);
                  audio.src= drumSound[key] ;
                 audio.play();// toggleSong wala function call kar diya
             }
          });
      }


//function for current time and duration of the song selected

function updateCurrentTime() {
  var song = document.querySelector('audio');
  var currentTime = Math.floor(song.currentTime); //current time of the song is saved in variable currentTime
  currentTime = fancyTimeFormat(currentTime); //the function fancyTimeFormat is implemented in the current time format to convert it into hours:min:sec format
  var duration = Math.floor(song.duration); //song duration of the song is saved in variable duration
  duration = fancyTimeFormat(duration); //the function fancyTimeFormat is implemented in the song duration format to convert it into hours:min:sec format
  $('.time-elapsed').text(currentTime); //now the currentTime var displays the time under time-elapsed div
  $('.song-duration').text(duration); //now the duration var of the song.duration displays duration under song-duration div
  }
  //code begins for play the song using play icon

  $('.play-icon').on('click',function(event) { //whenever play icon is clicked the son starts playing
    console.log(event);
        toggleSong();
});
$('body').on('keypress', function(event) { //body ko pakda uspe keypress ka event lagaya, jab key press hogi tab function chalega; isme event as an argument pass kiya hai
                var target= event.target;
                if (event.keyCode == 32 && target.tagName!='INPUT') // event se hum bhot kuch check kar sakte hain jaise yahan humne keyCode check kiya hai matlab jo key humne press ki hai uska code 32 hai to ander wala code chalega otherwise nhi
                {
                   toggleSong();// toggleSong wala function call kar diya
               }
            });
            //-------------------- slider images added---------------
                   function sliderImagesAdded()
                   {
                    var crntSong= currentSongSource();
                    var songObj=songs[crntSong-1];
                    for(var i=0;i<songs.length;i++)
                    {
                        for (var j=0;j<songObj.sliderImages.length;j++) {
                            console.log(j);
                            console.log(songObj.sliderImages[j]);
                                var img_src= songObj.sliderImages[j];
                            var list='';
                            list=list+ '<div class="item"><img alt="..." src="'+ img_src +'">  <div class="carousel-caption"></div></div>';

                            // setTimeout(function() {

                            //     $('.item img').attr('src',img_src);
                            // }, 2000);

                        }
                        $('.carousel-inner').html(list);
                    }

                   }


            //------------------------ Slider icon ------------

$('.slider-icon').on('click', function(){
   slide=1-slide;
   if(slide==1)
   {
       sliderImagesAdded();
    $('.content').addClass('hidden');
   $('.drum-app').removeClass('clickable');
   $('.slider').removeClass('hidden');
   }
   else
   {

     $('.content').removeClass('hidden');
   $('.drum-app').addClass('clickable');
   $('.slider').addClass('hidden');
   }

});

        // var songName1 = 'Badri Ki Dulhania (Title Track)';
        // var songName2 = 'Humma Song';
        // var songName3 = 'Nashe Si Chadh Gayi';
        // var songName4 = 'The Breakup Song';
//         var songList = ['Badri Ki Dulhania (Title Track)',
// 'Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
// var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
// var artistList = [' Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
// var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
// var durationList = ['2:56','3:15','2:34','2:29'];
var songs = [{
        'name': 'Badri Ki Dulhania (Title Track)',
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image': 'song1.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
        'image': 'song2.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
        'image': 'song3.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
        'image': 'song4.jpg'
    }]
window.onload = function() {
  changeCurrentSongDetails(songs[0]);
function addSongNameClickEvent(songObj,position) //its a function in which user can enter there desired choice where user can tell the position and name of the song
{
    var songName = songObj.fileName;
    var id = '#song' + position; //adding positon with song is placed in variable id which will generate the id for each song
$(id).click(function() //id here is nuthing but #song1 or 2 or 3.... and click
 {
var audio = document.querySelector('audio');
var currentSong = audio.src; //storing the current track in variable currentSong
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
changeCurrentSongDetails(songObj); //changeCurrentSongDetail function is calling is songObj which we created to run its function
}
});
}
//machine or function made for adding images if the song played with thier relative details
function changeCurrentSongDetails(songObj) //function bana dia hai jisme songObj object pass hora
{
    $('#current-song-image').attr('src','img/' + songObj.image) //selcting the current image of the song and attaching the attitube source to it via attr('scr')
    $('.current-song-name').text(songObj.name) //current song ka name display hoga
    $('.current-song-album').text(songObj.album) //current song ka album name display hoga
    $('.current-song-artist').text(songObj.artist) //current song ke artist name display hoga
}
  for(var i =0; i < songs.length;i++) {
    var obj = songs[i]; //array songs having details of each song is passed into a array form having its object obj
    var name = '#song' + (i+1); //since i+1=1 for the first song so it will be song1 for the first iteration
    var song = $(name); //selection of song name using jquery $
    song.find('.song-name').text(obj.name); //name of song is found and displayed
    song.find('.song-artist').text(obj.artist); //name of artist for the relative song is also display along with rest of the detailing
    song.find('.song-album').text(obj.album); //name of album for the relative song is displayed along with other details
    song.find('.song-length').text(obj.duration); //similarly for the upcoming details will be attached
    addSongNameClickEvent(obj,i+1) //iteraton of song list with i+1 to move forward in the list is done
}
    $('#songs').DataTable({
          paging: false
      });
// for (var i = 0; i < fileNames.length ; i++) {
//   addSongNameClickEvent(fileNames[i],i+1)
// }
updateCurrentTime(); //as soon as screen is refreshed the time is updated there itself
setInterval(function() { //after this starts the interval
updateCurrentTime(); //at every 5 sec we get our time updated
},5000);
}
            // var btn=document.querySelector('button');
            // btn.addEventListener("click,function()");
            // $("button").on("click",(function())

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
