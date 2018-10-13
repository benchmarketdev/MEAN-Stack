<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/



Route::get('/', 'SchoolController@addNewSchool')->name('addNewSchool');
Route::post('/school/create', 'SchoolController@createSchool')->name('createSchool');

Route::get('/savenewdata', 'SchoolController@savenewdata')->name('savenewdata');
Route::post('/school/data', 'SchoolController@savedata')->name('savedata');

Route::get('/sendchatemail', 'MessageController@index')->name('sendchatemail');
Route::post('email', 'MessageController@send');


Route::get('school/{id}/list','SchoolDataController@showschoolData')->name('showschoolData');
Route::get('school/data/{id}/edit', 'SchoolDataController@dataEdit');
Route::post('school/data/{id}/edit', 'SchoolDataController@dataEditSave');
Route::get('school/data/{id}/delete', 'SchoolDataController@dataDelete')->name('schooldataDelete');


Route::get('/chatdata', 'SchoolDataController@chatData')->name('chatData');
// Route::get('/emailchat', 'MessageController@index')->name('chatData');;
