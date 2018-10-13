<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'messages';

	public $rules = array(
		'email' => 'required',
		'year' => 'int',
		'month' => 'int'
	);

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email', 'year', 'month', 'schools'
	];
}
