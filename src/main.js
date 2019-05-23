import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { UserArray } from './modules/AskaBloke';
import { initResizePage, resizePage } from './modules/pageResize';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'


$(document).ready(function(e){
  const userArray = new UserArray()
  userArray.initPage();
  initResizePage()
  resizePage()


  $('.header').append('<img src=""')
   setTimeout(function(e){ $('#displayOnDom').click(); }, 100);
  $('#formOne').submit(function(e){
    event.preventDefault();
    const title = $("#userTitle").val();
    const userName = $('#userName').val();
    const userDescription = $('#userDescription').val();
    $("#userTitle").val('');
    $('#userName').val('');
    $('#userDescription').val('');
    userArray.pushObjToArray(title, userName, userDescription);
    setTimeout(function(e){ $('#displayOnDom').click() }, 200);

  });

  $('#displayOnDom').click(function(e){
    $('#results').empty();
    for(var i = 0; i < userArray.array.length; i++){
      $('#results').append(`
        <br>
        <div class="box">
          <div class="dropdown">
            <div class="dropBox">
              <p style="font-weight: 750;">
                . . .
              </p>
            </div>
            <div class="dropdown-content">
              <button type="button" class="deleteThis" value="${i}">Delete</button>
              <button type="button" class="editMe" value="${i}" data-toggle="modal" data-target="#myModal">Edit Me</button>
            </div>
          </div>
          <p class="titlePara">${userArray.array[i].title}</p>
          <div class="boxDescription">
            <p style="font-size: 13.5px">by <span class="linkUser">${userArray.array[i].name}</span></p>
            <p  style="font-size: 15px"> ${userArray.array[i].description}</p>
          </div>
        </div>
        <br>
      `)
    };
    $('.deleteThis').click(function(e){
      console.log(this.value)
      userArray.array.splice(this.value, 1)
      $('#displayOnDom').click()
    });
    $('.editMe').click(function(e){
      $('#onlyWhenEdit').show()
      $('#editTitle').val(userArray.array[this.value].title)
      $('#editName').val(userArray.array[this.value].name)
      $('#editDescription').val(userArray.array[this.value].description)
      window.globalVar = this.value
      $('#displayOnDom').click()
    });
    $('.doneEdit').submit(function(e){
      e.preventDefault()
      var editTitle = $('#editTitle').val()
      var editName = $('#editName').val()
      var editDescription = $('#editDescription').val()
      userArray.array[window.globalVar].title = editTitle
      userArray.array[window.globalVar].name = editName
      userArray.array[window.globalVar].description = editDescription
      $('#displayOnDom').click()
      $('#onlyWhenEdit').hide()
    })
  });
});
