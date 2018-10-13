@extends('layouts.master')
@section('header')
<link type="text/css" rel="stylesheet" href="{{asset('undefined')}}">
@endsection
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

                <div class="row" style="margin-top:50px!important;margin-bottom:20px!important;">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <select type="text" name="schoolname" class="form-control" required></select>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <select type="text" name="schoolname" class="form-control" required placeholder="month"></select>
                        </div>
                    </div>
                </div>
            	<div class="row">
                    <div class="col-lg-6">
                        <div class="portlet">
                            <div class="portlet-header">
                                <div class="caption">Column with rotated labels</div>
                                <div class="tools"><i class="fa fa-chevron-up"></i><i data-toggle="modal" data-target="#modal-config" class="fa fa-cog"></i><i class="fa fa-refresh"></i><i class="fa fa-times"></i></div>
                            </div>
                            <div class="portlet-body">
                                <div id="column-with-rotated-labels"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="portlet">
                            <div class="portlet-header">
                                <div class="caption">Column range</div>
                                <div class="tools"><i class="fa fa-chevron-up"></i><i data-toggle="modal" data-target="#modal-config" class="fa fa-cog"></i><i class="fa fa-refresh"></i><i class="fa fa-times"></i></div>
                            </div>
                            <div class="portlet-body">
                                <div id="column-range"></div>
                            </div>
                        </div>

                        <div class="portlet">
                            <div class="portlet-body" style="margin-top:10px !important;">
                                <input type="number" id="benchmark_manually" class="form-control m-input" aria-describedby="emailHelp" placeholder="Enter value"><br>
                                <button type="submit" class="btn btn-primary" 
                                            style="background-color:#5867dd !important; border-color: #5867dd !important;">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <div class="row">
                   
                    <div class="col-lg-6" style="background-color: #ffffff;height:100px;">
                        
                    </div>
                </div> -->
            </div>
@endsection
@section('footer_script')
<script src="{{asset('vendors/jquery-highcharts/highcharts.js')}}"></script>
<script src="{{asset('vendors/jquery-highcharts/highcharts-more.js')}}"></script>
<script src="{{asset('vendors/jquery-highcharts/data.js')}}"></script>
<script src="{{asset('vendors/jquery-highcharts/drilldown.js')}}"></script>
<script src="{{asset('vendors/jquery-highcharts/exporting.js')}}"></script>
<script src="{{asset('js/chart-column-bar-charts.js')}}"></script>
@endsection