<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SchoolData extends Model
{
    protected $table ='school_datas';


    protected $fillable = [
        'school_id', 'year', 'week', 'month', 'elect_eur', 'elect_kwh', 'heating_eur', 'heating_kwh', 'water_eur', 'water_litres'
    ];
    
    public $rules = array(

		'school' => 'required',
		'year' => 'int',
		'month' => 'int',
		'week' => 'int',
		'electricity_euro' => 'required|numeric',
		'electricity_kwh' => 'required|numeric',
		'heating_euro' => 'required|numeric',
		'heating_kwh' => 'required|numeric',
		'water_euro' => 'required|numeric',
		'water_litres' => 'required|numeric',
	);
}
