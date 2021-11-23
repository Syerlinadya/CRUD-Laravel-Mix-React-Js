<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use App\Models\Siswa;

class siswaController extends Controller
{
    public function index()
    {
        $siswa = DB::table('siswas')->join('sekolahs', 'siswas.sekolah_id', '=', 'sekolahs.id')
            ->select('siswas.*', 'sekolahs.nama')
            ->get();
        return response()->json($siswa);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nis' => 'required',
            'nama_siswa' => 'required',
            'tgl_lahir' => 'required',
            'sekolah_id' => 'required'
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors());
        }

        $siswa = Siswa::create([
            'nis' => $request->nis,
            'nama_siswa' => $request->nama_siswa,
            'tgl_lahir' => $request->tgl_lahir,
            'sekolah_id' => $request->sekolah_id
        ]);

        if($siswa) {
            return response()->json(['status' => 1]);
        } else {
            return response()->json(['status' => 0]);
        }
    }

    public function show($id)
    {
        $siswa = DB::table('siswas')->join('sekolahs', 'siswas.sekolah_id', '=', 'sekolahs.id')                                   
        ->select('siswas.*', 'sekolahs.nama')
        ->where('siswas.id' , '=', $id)
        ->first();
                               
        return response()->json($siswa);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),
            [
                'nis' => 'required',
                'nama_siswa' => 'required',
                'tgl_lahir' => 'required',
                'sekolah_id' => 'required'
            ]
        );

        if($validator->fails()) {
            return response()->json($validator->errors());
        }

        $siswa = Siswa::find($id);
        $siswa->update($request->all());

        if($siswa) {
            return response()->json(['status' => 1]);
        }
        else {
            return response()->json(['status' => 0]);
        }
    }

    public function destroy($id)
    {
        $siswa = Siswa::find($id);
        $siswa->delete();

        if($siswa) {
            return response()->json(['status' => 1]);
        }
        else {
            return response()->json(['status' => 0]);
        }
    }
}
