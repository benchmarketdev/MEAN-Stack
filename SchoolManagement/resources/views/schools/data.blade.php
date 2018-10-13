
@extends('layouts.mainmenu')
@section('header')
    <link type="text/css" rel="stylesheet" href="{{asset('vendors/datatables/css/dataTables.bootstrap.css')}}">
@endsection
@section('content')
	<!--END SIDEBAR MENU--><!--BEGIN PAGE WRAPPER-->
        <div id="page-wrapper"><!--BEGIN PAGE HEADER & BREADCRUMB-->
            <div class="page-header-breadcrumb">
                <div class="page-heading hidden-xs"><h1 class="page-title">Page Blank</h1></div>
                <ol class="breadcrumb page-breadcrumb">
                    <li><i class="fa fa-home"></i>&nbsp;<a href="index.html">Schools</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                    <li><a href="#">Pages</a>&nbsp;&nbsp;<i class="fa fa-angle-right"></i>&nbsp;&nbsp;</li>
                    <li class="active">Page Blank</li>
                </ol>
            </div>
            <!--END PAGE HEADER & BREADCRUMB--><!--BEGIN CONTENT-->
            <input type="hidden" id="school_id" value="{{ $school->id }}" />
            <div class="page-content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="portlet">
                            <div class="portlet-header">
                                <div class="caption">{{ $school->name }}'s data</div>
                                <div class="tools"><i class="fa fa-chevron-up"></i><i data-toggle="modal" data-target="#modal-config" class="fa fa-cog"></i><i class="fa fa-refresh"></i><i class="fa fa-times"></i></div>
                            </div>
                            <div class="portlet-body">
                                <div class="table-responsive mtl">
                                    <table id="example1" class="table table-striped table-bordered table-hover">
                                        <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Year</th>
                                            <th>Week</th>
                                            <th>Month</th>
                                            <th>Electricity, €</th>
                                            <th>Electricity, kWh</th>
                                            <th>Heating,€</th>
                                            <th>Heating ,kWh</th>
                                            <th>Water, €</th>
                                            <th>Water, litres</th>
                                            <th>action</th>
                                            
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <?php  $no =1 ; ?>
                                        @foreach ($data as $value)
                                        
                                        <tr class="odd gradeX">
                                            <td>{{$no}}</td>
                                            <td>{{$value['year']}}</td>
                                            <td>{{$value['week']}}</td>
                                            <td>{{$value['month']}}</td>
                                            <td class="center"> {{$value['elect_eur']}}4</td>
                                            <td class="center">{{$value['elect_kwh']}}</td>
                                            <td class="center"> {{$value['heating_eur']}}4</td>
                                            <td class="center">{{$value['heating_kwh']}}</td>
                                            <td class="center"> {{$value['water_eur']}}</td>
                                            <td class="center">{{$value['water_litres']}}</td>
                                            <td>
                                                <span  class="btn-group">
                                                    <a href="/school/data/{{$value['id']}}/edit">
                                                        <button type="button" id="edit-statistic" class="btn btn-primary" style="background-color:#5867dd!important;width:100px;"><i class="fa fa-pencil" aria-hidden="true"></i> Edit</button></a>
                                                    
                                                        
                                                    <button type="button" data-deleteid="{{$value['id']}}" class="btn btn-danger delete-school" id="m_sweetalert_demo_7">
                                                        <i class="fa fa-trash-o" aria-hidden="true"></i> Delete</button>
                                                </span>
                                            </td>
                                        </tr>
                                        <?php  $no++ ; ?>
                                        @endforeach 
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
@endsection

@section('footer_script')
<!--LOADING SCRIPTS FOR PAGE-->
<script src="{{asset('vendors/datatables/js/jquery.dataTables.js')}}"></script>
<script src="{{asset('vendors/datatables/js/dataTables.bootstrap.js')}}"></script>
<script src="{{asset('vendors/datatables/js/jquery.jeditable.js')}}"></script>
<script src="{{asset('js/table-editable.js')}}"></script>

<!-- <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script> -->
<script src="{{asset('js/sweetalert/dist/sweetalert.min.js')}}"></script>
<script>
    var buttons = document.querySelectorAll('.delete-school')
    buttons.forEach(button => button.addEventListener('click', event => {
        var {deleteid} = event.target.dataset
        swal({
            title: 'Would you like to delete item?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.value) {
                swal(
                'Deleted!',
                'success'
                )
                window.location =  `/school/data/${deleteid}/delete`
            }
            })
    })
    )
</script>
@endsection