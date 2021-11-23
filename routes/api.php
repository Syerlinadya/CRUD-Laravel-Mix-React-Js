<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\siswaController;
use App\Http\Controllers\sekolahController;

// siswa
Route::get('/siswa',[siswaController::class, 'index']);
Route::post('/siswa',[siswaController::class, 'store']);
Route::get('/siswa/{id}',[siswaController::class, 'show']);
Route::put('/siswa/{id}',[siswaController::class, 'update']);
Route::delete('/siswa/{id}',[siswaController::class, 'destroy']);

// sekolah
Route::get('/sekolah',[sekolahController::class, 'index']);
Route::post('/sekolah',[sekolahController::class, 'store']);
Route::get('/sekolah/{id}',[sekolahController::class, 'show']);
Route::put('/sekolah/{id}',[sekolahController::class, 'update']);
Route::delete('/sekolah/{id}',[sekolahController::class, 'destroy']);