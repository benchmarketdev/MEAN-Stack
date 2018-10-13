<?php

namespace App\Http\Controllers;
use App\Models\School;
use App\Models\SchoolData;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    
    public function addNewSchool()
    {
    	return view('mainmenu.addnew');
    }

    public function createSchool(Request $request)
    {
        $school_data = $request->all();

        $school = new School();
        $validator = Validator::make($school_data,$school->rules);
        if ($validator->fails())
        {
            return back()->withInput()->withErrors($validator->errors());
        }

        $school->name = $request->name;
        $school->save();
    	return back()->with('status', true);
    }

    public function saveNewData()
    {
    	return view('mainmenu.savenewdata', [
            'years' => School::years(),
            'months' => School::months(),
            'weeks' => School::weeks(),
            'schools' => School::all()
        ]);
    }

    public function savedata(Request $request)
    {
        $request_data = $request->all();

        $new_data = new SchoolData();
        $validator = Validator::make($request_data,$new_data->rules);
        if ($validator->fails())
        {
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

        SchoolData::create($data);

    	return back()->with('status', true);

    }


//     public function sendChatWithEmail()
//     {
//     	return view('mainmenu.sendchatemail');
//     }

    public function download($id, Request $request)
    {
        $year = $request->year;
        $month = $request->month;
        $chart = $request->chart;

        $school = School::where('id', $id)->first();

        $school->download($chart, $year, $month);
    }
}