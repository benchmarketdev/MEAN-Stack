
@extends('layouts.master')

@section('content')
	<!--END SIDEBAR MENU--><!--BEGIN PAGE WRAPPER-->
        <div id="page-wrapper"><!--BEGIN PAGE HEADER & BREADCRUMB-->
            <div class="page-header-breadcrumb">
                <div class="page-heading hidden-xs"><h1 class="page-title">Page Blank</h1></div>
                <ol class="breadcrumb page-breadcrumb">
                    <li><i class="fa fa-chevron-up"></i>&nbsp;<a href="index.html">Main Menu</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                    <!-- <li><a href="#">Main Menu</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li> -->
                    <li class="active">Add New Data</li>
                </ol>
            </div>
            <!--END PAGE HEADER & BREADCRUMB--><!--BEGIN CONTENT-->
            <div class="page-content">
            	<div class="row">
                    <div class="col-lg-12">
                        <div class="portlet" style="margin-top:50px !important;">
                            <div class="portlet-header">
                                <div class="caption">Add New Data</div>
                                <div class="tools"><i class="fa fa-chevron-up"></i><i data-toggle="modal" data-target="#modal-config" class="fa fa-cog"></i><i class="fa fa-refresh"></i><i class="fa fa-times"></i></div>
                            </div>
                            <div class="portlet-body">
                                <form method="POST" role="form" action="{{route('createSchool')}}">
                                    {!! csrf_field() !!}
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                            	<label for="InputText">Name</label>
                                            	<input type="text" name="name" placeholder="Enter text" class="form-control" placeholder="Select School" required/>
                                            	
                                            </div>
                                        </div>
                                    </div><br><hr style="border-top:1px dotted #e5e5e5;">
                                    
                                    <div class="row" style="background-color:#f7f8fa !important;height:150px;">
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