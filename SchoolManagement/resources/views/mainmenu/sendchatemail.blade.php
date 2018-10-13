@extends('layouts.master')

@section('content')
	<!--END SIDEBAR MENU--><!--BEGIN PAGE WRAPPER-->
        <div id="page-wrapper"><!--BEGIN PAGE HEADER & BREADCRUMB-->
            <div class="page-header-breadcrumb">
                <div class="page-heading hidden-xs"><h1 class="page-title">Page Blank</h1></div>
                <ol class="breadcrumb page-breadcrumb">
                    <li><i class="fa fa-home"></i>&nbsp;<a href="index.html">Main Menu</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                    <!-- <li><a href="#">Pages</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li> -->
                    <li class="active">Send Chat To Email</li>
                </ol>
            </div>
            <!--END PAGE HEADER & BREADCRUMB--><!--BEGIN CONTENT-->
            <div class="page-content">
            	<div class="row">
                    <div class="col-lg-12">
                        <div class="portlet" style="margin-top:50px !important;">
                            <div class="portlet-header">
                                <div class="caption">Send charts to email</div>
                                <div class="tools"><i class="fa fa-chevron-up"></i><i data-toggle="modal" data-target="#modal-config" class="fa fa-cog"></i><i class="fa fa-refresh"></i><i class="fa fa-times"></i></div>
                            </div>
                            <div class="portlet-body">
                                <form role="form" action="/email" method="POST">
                                {!! csrf_field() !!}
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="form-group">
                                            	<label for="InputText">Schoool</label>
                                            	<!-- <input type="email" id="InputText" placeholder="Enter text" class="form-control"/> -->
                                            	<select type="text" id="school" name="school[]" multiple="multiple" class="form-control" placeholder="Select School" required>
                                                @foreach($schools as $school)
                                                    <option value="{{ $school['id'] }}">{{ $school['name'] }}</option>
                                                @endforeach   
                                                </select>
                                            </div>
                                        </div>
                                    </div><br><hr style="border-top:1px dotted #e5e5e5;">

                                    <div class="row">
                                    	<div class="col-md-6">
                                            <div class="form-group"><label for="InputEmail">Year</label>
                                                <select type="text" name="year" id="year" class="form-control" required>
                                                @foreach($years as $year)
                                                    <option value="{{ $year }}" @if(date('Y') == $year)selected="selected"@endif>{{ $year }}</option>
                                                @endforeach
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <div class="form-group">
                                            	<label for="InputDropdown">Month</label>
                                            	<select type="text" name="month" id="month" class="form-control" required>
                                                @foreach($months as $id => $month)
                                                    <option value="{{ $id }}">{{ $month }}</option>
                                                @endforeach
                                                </select>
	                                        </div>
	                                    </div>
                                    </div><br><hr>
                                    
                                    <div class="row">
                                        <div class="col-md-8">
                                            <div class="form-group"><label for="">Email</label>
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                                                    <input type="email" id="email" name="email"
                                                            value="{{ old('email') }}" placeholder="Enter Email Address" class="form-control"/>
                                                </div>

                                                @if ($errors->has('email'))
                                                    <span class="form-control-feedback">{{$errors->first('email')}}</span>
                                                @else
                                                    {{--<span class="form-control-feedback">
                                                        Please enter value
                                                    </span>--}}
                                                @endif
                                            </div>
                                        </div>
                                    </div><br><hr>

                                    
                                    <div class="row">
	                                    <div class="col-md-3">
	                                        <button type="submit" class="btn btn-primary" 
	                                        style="background-color:#5867dd !important; border-color: #5867dd !important;">Send</button>
	                                    </div>
	                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
@endsection

@section('footer_script')
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.bundle.min.js" ></script>
@endsection