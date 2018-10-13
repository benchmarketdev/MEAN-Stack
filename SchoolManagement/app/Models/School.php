<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    protected $table ='schools';
    protected $fillable=['name'];

    public $rules=array(
        'name'=>'required'
    );

    public static function years()
    {
        $years = [];
        for ($i = 2012; $i <= 2030; $i++) {
            $years[$i] = $i;
        }
        return $years;
    }
    
    public static function months()
    {
        $months = [];
        for ($i = 1; $i <= 12; $i++) {
            $months[$i] = date('F', mktime(0, 0, 0, $i, 10));
        }
        return $months;
    }

    /**
     * @return array
     */
    public static function weeks()
    {
        $weeks = [];
        for ($i = 1; $i <= 53; $i++) {
            $weeks[$i] = $i;
        }
        return $weeks;
    }

}
