<?php

namespace App\Http\Controllers;
use App\Models\SchoolData;
use App\Models\School;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SchoolDataController extends Controller
{
    public function showschoolData($id)
    {

        $school = School::where('id', $id)->first();

        $schooldata = SchoolData::select('school_datas.*', 'schools.id as school_id')
            ->leftJoin('schools', 'schools.id', '=', 'school_datas.school_id')
            ->where('school_id', $id)
            ->orderBy('year')
            ->orderBy('month')
            ->orderBy('week')
            ->get();

        $school_data = [];
        foreach ($schooldata as $item) {
            $school_data[] = [
                'id' => $item->id,
                'school_id' => $item->school_id,
                'year' => $item->year,
                'week' => $item->week,
                'month' => date('F', mktime(0, 0, 0, $item->month, 10)),
                'elect_eur' => $item->elect_eur,
                'elect_kwh' => $item->elect_kwh,
                'heating_eur' => $item->heating_eur,
                'heating_kwh' => $item->heating_kwh,
                'water_eur' => $item->water_eur,
                'water_litres' => $item->water_litres,
            ];
        }

        return view('schools.data', [
            'data' => $school_data,
            'school' => $school,
            'years' => School::years(),
            'months' => School::months(),
        ]);
    }
    public function data($id, Request $request)
    {
        $year = $request->year;
        $month = $request->month;

        $data = SchoolData::select('school_datas.*', 'schools.id as school_id')
            ->leftJoin('schools', 'schools.id', '=', 'school_datas.school_id')
            ->where('school_id', $id)
            ->orderBy('year')
            ->orderBy('month')
            ->orderBy('week');

        if ($year) {
            $data->where('year', $year);
        }
        if ($month) {
            $data->where('month', $month);
        }
        $data = $data->get();

        $school_data = [];
        foreach ($data as $item) {
            $school_data[] = [
                'id' => $item->id,
                'school_id' => $item->school_id,
                'year' => $item->year,
                'week' => $item->week,
                'month' => date('F', mktime(0, 0, 0, $item->month, 10)),
                'elect_eur' => $item->elect_eur,
                'elect_kwh' => $item->elect_kwh,
                'heating_eur' => $item->heating_eur,
                'heating_kwh' => $item->heating_kwh,
                'water_eur' => $item->water_eur,
                'water_litres' => $item->water_litres,
            ];
        }

        return view('schools.editdata', ['data' => $school_data]);
    }

    public function dataEdit($id)
    {
        $editDatas = SchoolData::where('id', $id)->first();

        return view('schools.editdata', [
            'years' => School::years(),
            'months' => School::months(),
            'editDatas' => $editDatas,
            'weeks' => School::weeks(),
            'schools' => School::all()
        ]);
    }

    public function dataEditSave(Request $request, $id)
    {
        $request_data = $request->all();

        $schoolDatas = new SchoolData();
        $validator = Validator::make($request_data, $schoolDatas->rules);

        if ($validator->fails()) {
            return back()->withInput()->withErrors($validator->errors());
        }

        $data = [
            'school_id' => $request_data['school'],
            'year' => $request_data['year'],
            'week' => $request_data['week'],
            'month' => $request_data['month'],
            'elect_eur' => $request_data['electricity_euro'],
            'elect_kwh' => $request_data['electricity_kwh'],
            'heating_eur' => $request_data['heating_euro'],
            'heating_kwh' => $request_data['heating_kwh'],
            'water_eur' => $request_data['water_euro'],
            'water_litres' => $request_data['water_litres']
        ];

        SchoolData::where('id', $id)->update($data);

        return back()->with('status', true);
    }

    public function dataDelete($id)
    {
        $school = SchoolData::where('id', $id)->first();
        $school_id = $school->school_id;
        SchoolData::where('id', $id)->delete();
        return redirect()->route("list", [$school_id]);
    }

    public function chatData()
    {
    	return view('schools.chat');
    }
}
