@extends('layouts.master')

@section('content')
	<!--END SIDEBAR MENU--><!--BEGIN PAGE WRAPPER-->
        <div id="page-wrapper"><!--BEGIN PAGE HEADER & BREADCRUMB-->
            <div class="page-header-breadcrumb">
                <div class="page-heading hidden-xs"><h1 class="page-title">Page Blank</h1></div>
                <ol class="breadcrumb page-breadcrumb">
                    <!-- <li><i class="fa fa-home"></i>&nbsp;<a href="index.html">Home</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li> -->
                    <li><a href="#">Main Menu</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                    <li class="active">Save New Data</li>
                </ol>
            </div>
            <!--END PAGE HEADER & BREADCRUMB--><!--BEGIN CONTENT-->
            <div class="page-content">
            	<div class="row">
                    <div class="col-lg-12">
                        <div class="portlet" style="margin-top:50px !important;">
                            <div class="portlet-header">
                                <div class="caption">Save New Data</div>
                                <div class="tools"><i class="fa fa-chevron-up"></i><i data-toggle="modal" data-target="#modal-config" class="fa fa-cog"></i><i class="fa fa-refresh"></i><i class="fa fa-times"></i></div>
                            </div>
                            <div class="portlet-body">
                            <form method="POST" role="form" action="{{route('savedata')}}">
                                    {!! csrf_field() !!}
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                            	<label for="InputText">Schoool</label>
                                            	
                                                <select class="form-control" name="school" required>
                                                    <option value="0" selected disabled>Select school</option>
                                                    @foreach($schools as $school)
                                                        <option value="{{$school->id}}">{{$school->name}}</option>
                                                    @endforeach
                                                </select>
                                                @if ($errors->has('school'))
                                                    <span class="form-control-feedback">{{$errors->first('school')}}</span>
                                                @else
                                                    {{--<span class="form-control-feedback">
                                                        Please select school
                                                    </span>--}}
                                                @endif
                                            	
                                            </div>
                                        </div>
                                    </div><br><hr style="border-top:1px dotted #e5e5e5;">

                                    <div class="row">
                                    	<div class="col-md-4">
                                            <div class="form-group"><label for="InputEmail">Year</label>
                                            <select class="form-control" name="year" required>
                                                    @foreach($years as $year)
                                                        @if($year == date('Y'))
                                                            <option value="{{$year}}" selected>{{$year}}</option>
                                                        @else
                                                            <option value="{{$year}}">{{$year}}</option>
                                                        @endif
                                                    @endforeach
                                                </select>
                                                @if ($errors->has('year'))
                                                    <span class="form-control-feedback">{{$errors->first('year')}}</span>
                                                @else
                                                    {{--<span class="form-control-feedback">
                                                        Please select year
                                                    </span>--}}
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group"><label for="InputPassword">Week</label>
                                                <select class="form-control" name="week" required>
                                                    @foreach($weeks as $week)
                                                        @if($week == date('W'))
                                                            <option value="{{$week}}" selected>{{$week}}</option>
                                                        @else
                                                            <option value="{{$week}}">{{$week}}</option>
                                                        @endif
                                                    @endforeach
                                                </select>
                                            </div>
                                            @if ($errors->has('week'))
                                                <span class="form-control-feedback">{{$errors->first('week')}}</span>
                                            @else 
                                                {{--<span class="form-control-feedback">
                                                    Please select week
                                                </span>--}}
                                            @endif      
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                            	<label for="InputDropdown">Month</label>
                                            	<select class="form-control" name="month" required>
                                                    @foreach($months as $key => $month)
                                                        @if($month == date('F'))
                                                            <option value="{{$key}}" selected>{{$month}}</option>
                                                        @else
                                                            <option value="{{$key}}">{{$month}}</option>
                                                        @endif
                                                    @endforeach
                                                </select>
	                                        </div>
                                            @if ($errors->has('month'))
                                                <span class="form-control-feedback">{{$errors->first('month')}}</span>
                                            @else 
                                                {{--<span class="form-control-feedback">
                                                    Please select month
                                                </span>--}}
                                            @endif
	                                    </div>
                                    </div><br><hr>
                                    
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group"><label for="">Electricity Euro</label>
                                                <input type="text" name="electricity_euro"
                                                        value="{{ old('electricity_euro') }}" class="form-control" placeholder="Electricity Euro" required/>
                                            </div>
                                            @if ($errors->has('electricity_euro'))
                                                <span class="form-control-feedback">{{$errors->first('electricity_euro')}}</span>
                                            @else
                                                {{--<span class="form-control-feedback">
                                                    Please enter value
                                                </span>--}}
                                            @endif
                                        </div>
                                        <div class="col-md-6">
                                        	<div class="form-group"><label for="">Electricity KWH</label>

                                                <input type="text" name="electricity_kwh" value="{{ old('electricity_kwh') }}" class="form-control" placeholder="Electricity KWH" required/>
                                            </div>

                                            @if ($errors->has('electricity_kwh'))
                                                <span class="form-control-feedback">{{$errors->first('electricity_kwh')}}</span>
                                            @else
                                                {{--<span class="form-control-feedback">
                                                    Please enter value
                                                </span>--}}
                                            @endif
                                        </div>
                                    </div><br><hr>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group"><label for="">Heating Euro</label>
                                                <input type="text" name="heating_euro"
                                                    value="{{ old('heating_euro') }}"  class="form-control " placeholder="Heating Euro" required/>
                                            </div>
                                            @if ($errors->has('heating_euro'))
                                                <span class="form-control-feedback">{{$errors->first('heating_euro')}}</span>
                                            @else
                                                {{--<span class="form-control-feedback">
                                                    Please enter value
                                                </span>--}}
                                            @endif  

                                        </div>
                                        <div class="col-md-6">
                                        	<div class="form-group"><label for="">Heating KWH</label>

                                                <input type="text" name="heating_kwh"
                                                    value="{{ old('heating_kwh') }}" class="form-control" placeholder="Heating KWH" required/>
                                            </div>
                                            @if ($errors->has('heating_kwh'))
                                                <span class="form-control-feedback">{{$errors->first('heating_kwh')}}</span>
                                            @else
                                                {{--<span class="form-control-feedback">
                                                    Please enter value
                                                </span>--}}
                                            @endif
                                        </div>
                                    </div><br><hr>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group"><label for="">Water Euro</label>
                                                <input type="text" name="water_euro"
                                                    value="{{ old('water_euro') }}" class="form-control" placeholder="Water Euro" required/> 
                                            </div>

                                                @if ($errors->has('water_euro'))
                                                    <span class="form-control-feedback">{{$errors->first('water_euro')}}</span>
                                                @else
                                                    {{--<span class="form-control-feedback">
                                                        Please enter value
                                                    </span>--}}
                                                @endif  
                                        </div>
                                        <div class="col-md-6">
                                        	<div class="form-group"><label for="">Water Litre</label>

                                                <input type="text" name="water_litres"
                                                    value="{{ old('water_litres') }}" class="form-control" placeholder="Water Litre" required/> 
                                            </div>
                                            @if ($errors->has('water_litres'))
                                                <span class="form-control-feedback">{{$errors->first('water_litres')}}</span>
                                            @else
                                                {{--<span class="form-control-feedback">
                                                    Please enter value
                                                </span>--}}
                                            @endif  
                                        </div>
                                    </div>
                                    <div class="row">
	                                    <div class="col-md-3">
	                                        <button type="submit" class="btn btn-primary" 
	                                        style="background-color:#5867dd !important; border-color: #5867dd !important;">Save</button>
	                                    </div>
	                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
@endsection