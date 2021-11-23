<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Sekolah;

class sekolahController extends Controller
{

    public function index()
    {
        $sekolah = Sekolah::all()->toArray();
        return $sekolah;
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'telepon' => 'required',
            'alamat'=> 'required'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors());
        }

        $sekolah = Sekolah::create([
            'nama' => $request->nama,
            'telepon' => $request->telepon,
            'alamat' => $request->alamat
        ]);

        if($sekolah) {
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['status' => 0]);
        }
    }

    public function show($id)
    {
        $sekolah = Sekolah::find($id);
        return response()->json($sekolah);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'telepon' => 'required',
            'alamat'=> 'required'
            ]);
            
        if($validator->fails()) {
            return response()->json($validator->errors());
        }
            
        $sekolah = Sekolah::find($id);
        $sekolah->update($request->all());
            
        if($sekolah) {
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['status' => 0]);
        }        
    }

    public function destroy($id)
    {
        $sekolah = Sekolah::find($id);
        $sekolah->delete();
        
        if($sekolah) {
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['status' => 0]);
        }         
    }
}
