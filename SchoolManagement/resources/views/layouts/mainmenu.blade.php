<!DOCTYPE html>
<html lang="en">
<head>
    <title>School Management</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="images/icons/favicon.ico" rel="shortcut icon">
        <!--Loading bootstrap css-->
    <link type="text/css" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,800italic,400,700,800">
    <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Oswald:400,700,300">
    <link type="text/css" rel="stylesheet" href="{{asset('vendors/jquery-ui-1.10.3.custom/css/ui-lightness/jquery-ui-1.10.3.custom.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('vendors/font-awesome/css/font-awesome.min.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('vendors/bootstrap/css/bootstrap.min.css')}}">

    @yield('header')
    <!--LOADING SCRIPTS FOR PAGE--><!--Loading style vendors-->
    <link type="text/css" rel="stylesheet" href="{{asset('vendors/animate.css/animate.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('vendors/jquery-pace/pace.css')}}">
    <!--Loading style-->
    <link type="text/css" rel="stylesheet" href="{{asset('css/style.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('css/style-mango.css')}}" id="theme-style">
    <link type="text/css" rel="stylesheet" href="{{asset('css/vendors.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('css/themes/white-pink.css')}}" id="color-style">
    <link type="text/css" rel="stylesheet" href="{{asset('css/style-responsive.css')}}">
    <link rel="shortcut icon" href="{{asset('images/favicon.ico')}}">
</head>
<body>
<div><!--BEGIN TEMPLATE SETTING-->
    <div id="template-setting"><a href="#" data-toggle="dropdown" class="btn-template-setting"><i class="fa fa-tint"></i></a>

        <div class="content-template-setting"><h4 class="block-heading">Theme Colors</h4>
            <ul class="color-theme list-unstyled list-inline">
                <li data-style="red" data-hover="tooltip" title="Red - Green" class="red-green"></li>
                <li data-style="orange" data-hover="tooltip" title="Orange - Yellow" class="orange-yellow"></li>
                <li data-style="green" data-hover="tooltip" title="Green - Pink" class="green-pink"></li>
                <li data-style="yellow" data-hover="tooltip" title="Yellow - Grey" class="yellow-grey"></li>
                <li data-style="blue" data-hover="tooltip" title="Blue - Yellow" class="blue-yellow"></li>
                <li data-style="violet" data-hover="tooltip" title="Violet - Green" class="violet-green"></li>
                <li data-style="pink" data-hover="tooltip" title="Pink - Dark" class="pink-dark"></li>
                <li data-style="grey" data-hover="tooltip" title="Grey - Red" class="grey-red"></li>
                <li data-style="default" data-hover="tooltip" title="Dark" class="dark-primary"></li>
                <li data-style="white" data-hover="tooltip" title="White" class="white-primary"></li>
                <li data-style="pink-white" data-hover="tooltip" title="Pink - White" class="pink-white"></li>
                <li data-style="white-pink" data-hover="tooltip" title="White - Pink" class="white-pink"></li>
            </ul>
        </div>
    </div>
    <!--END TEMPLATE SETTING--><!--BEGIN TO TOP--><a id="totop" href="#"><i class="fa fa-angle-up"></i></a><!--END BACK TO TOP-->
    <div id="wrapper"><!--BEGIN TOPBAR-->
        <nav id="topbar" role="navigation" style="margin-bottom: 0;" class="navbar navbar-default navbar-static-top">
            <div class="navbar-header">
                <button type="button" data-toggle="collapse" data-target=".sidebar-collapse" class="navbar-toggle"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
                <a id="logo" href="#" class="navbar-brand"><span class="fa fa-rocket"></span><span class="logo-text" style="font-size:25px !important;">SchoolMangement</span></a></div>
            <div class="topbar-main"><a id="menu-toggle" href="#" class="btn hidden-xs"><i class="fa fa-bars"></i></a>
            
                <!-- <form id="topbar-search" action="" method="" class="hidden-sm hidden-xs">
                    <div class="input-icon right" style="top:5px">
                        <a href="#"><i class="fa fa-search"></i></a>
                        <input type="text" placeholder="Search here..." class="form-control" style="border-radius:10px"/>
                    </div>
                </form> -->
                <div class="row">
                    <div class="col-md-4" >
                        <div class="form-group" style="margin-top:10px!important;">
                            <select class="form-control m-input" id="year">
                                <option value="">
                                    Please select year
                                </option>
                                @foreach($years as $year)
                                    <option value="{{ $year }}" @if(date('Y') == $year)selected="selected"@endif>{{ $year }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group" style="margin-top:10px!important;">
                            <select class="form-control m-input" id="month">
                                <option value="">
                                    Please select month
                                </option>
                                @foreach($months as $id => $month)
                                    <option value="{{ $id }}">{{ $month }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><i class="fa fa-bell fa-fw"></i><span class="badge badge-yellow">3</span></a>
                        <ul class="dropdown-menu dropdown-alerts animated bounceInDown">
                            <li><a href="#"><span class="label label-blue"><i class="fa fa-comment fa-fw"></i></span>New Comment<span class="pull-right text-muted small">4 minutes ago</span></a></li>
                            <li><a href="#"><span class="label label-violet"><i class="fa fa-twitter fa-fw"></i></span>3 New Followers<span class="pull-right text-muted small">12 minutes ago</span></a></li>
                            <li><a href="#"><span class="label label-pink"><i class="fa fa-envelope fa-fw"></i></span>Message Sent<span class="pull-right text-muted small">15 minutes ago</span></a></li>
                            <li><a href="#"><span class="label label-green"><i class="fa fa-tasks fa-fw"></i></span>New Task<span class="pull-right text-muted small">18 minutes ago</span></a></li>
                            <li><a href="#"><span class="label label-yellow"><i class="fa fa-upload fa-fw"></i></span>Server Rebooted<span class="pull-right text-muted small">19 minutes ago</span></a></li>
                            <li><a href="#" class="text-right">See all alerts</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><i class="fa fa-envelope fa-fw"></i><span class="badge badge-green">7</span></a>
                        <ul class="dropdown-menu dropdown-messages animated bounceInUp">
                            <li><a href="#"><span class="avatar"><img src="http://lorempixel.com/128/128/people/9/" alt="" class="img-responsive img-circle"/></span><span class="info"><span class="name">Jessica Spencer</span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a></li>
                            <li><a href="#"><span class="avatar"><img src="http://lorempixel.com/128/128/people/9/" alt="" class="img-responsive img-circle"/></span><span class="info"><span class="name">John Smith<span class="label label-blue pull-right">New</span></span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a></li>
                            <li><a href="#"><span class="avatar"><img src="http://lorempixel.com/128/128/people/9/" alt="" class="img-responsive img-circle"/></span><span class="info"><span class="name">John Doe<span class="label label-orange pull-right">10 min</span></span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a></li>
                            <li><a href="#"><span class="avatar"><img src="http://lorempixel.com/128/128/people/9/" alt="" class="img-responsive img-circle"/></span><span class="info"><span class="name">John Smith</span><span class="desc">Lorem ipsum dolor sit amet...</span></span></a></li>
                            <li><a href="#">Read all messages</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><i class="fa fa-tasks fa-fw"></i><span class="badge badge-blue">8</span></a>
                        <ul class="dropdown-menu dropdown-tasks animated bounceInDown">
                            <li><a href="#"><span class="task-item">Fix the HTML code<small class="pull-right text-muted">40% Complete</small></span>

                                <div class="progress progress-sm">
                                    <div role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;" class="progress-bar progress-bar-orange"><span class="sr-only">40% Complete (success)</span></div>
                                </div>
                            </a></li>
                            <li><a href="#"><span class="task-item">Make a wordpress theme<small class="pull-right text-muted">60% Complete</small></span>

                                <div class="progress progress-sm">
                                    <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;" class="progress-bar progress-bar-blue"><span class="sr-only">60% Complete (success)</span></div>
                                </div>
                            </a></li>
                            <li><a href="#"><span class="task-item">Convert PSD to HTML<small class="pull-right text-muted">55% Complete</small></span>

                                <div class="progress progress-sm">
                                    <div role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style="width: 55%;" class="progress-bar progress-bar-green"><span class="sr-only">55% Complete (success)</span></div>
                                </div>
                            </a></li>
                            <li><a href="#"><span class="task-item">Convert HTML to Wordpress<small class="pull-right text-muted">78% Complete</small></span>

                                <div class="progress progress-sm">
                                    <div role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style="width: 78%;" class="progress-bar progress-bar-yellow"><span class="sr-only">78% Complete (success)</span></div>
                                </div>
                            </a></li>
                            <li><a href="#">See all tasks</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a data-toggle="dropdown" href="#" class="dropdown-toggle"><img src="http://lorempixel.com/128/128/people/9/" alt="" class="img-responsive img-circle"/>&nbsp;
                        Jessica
                        &nbsp;<span class="caret"></span></a>
                        <ul class="dropdown-menu dropdown-user pull-right animated bounceInLeft">
                            <li>
                                <div class="navbar-content">
                                    <div class="row">
                                        <div class="col-md-5 col-xs-5"><img src="http://lorempixel.com/128/128/people/9/" alt="" class="img-responsive img-circle"/>

                                            <p class="text-center mtm"><a href="#" class="change-avatar">
                                                <small>Change Avatar</small>
                                            </a></p>
                                        </div>
                                        <div class="col-md-7 col-xs-5"><span>Jessica</span>

                                            <p class="text-muted small">example@mail.com</p>

                                            <div class="divider"></div>
                                            <a href="#" class="btn btn-primary btn-sm">View Profile</a></div>
                                    </div>
                                </div>
                                <div class="navbar-footer">
                                    <div class="navbar-footer-content">
                                        <div class="row">
                                            <div class="col-md-6 col-xs-6"><a href="#" class="btn btn-default btn-sm">Change Password</a></div>
                                            <div class="col-md-6 col-xs-6"><a href="page-lock-screen.html" class="btn btn-default btn-sm pull-right">Sign Out</a></div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
        <!--BEGIN MODAL CONFIG PORTLET-->
        <div id="modal-config" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" data-dismiss="modal" aria-hidden="true" class="close">&times;</button>
                        <h4 class="modal-title">Modal title</h4></div>
                    <div class="modal-body"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend et nisl eget porta. Curabitur elementum sem molestie nisl varius, eget tempus odio molestie. Nunc vehicula sem arcu, eu pulvinar neque cursus ac. Aliquam ultricies lobortis magna et aliquam. Vestibulum egestas eu urna sed ultricies. Nullam pulvinar dolor vitae quam dictum
                        condimentum. Integer a sodales elit, eu pulvinar leo. Nunc nec aliquam nisi, a mollis neque. Ut vel felis quis tellus hendrerit placerat. Vivamus vel nisl non magna feugiat dignissim sed ut nibh. Nulla elementum, est a pretium hendrerit, arcu risus luctus augue, mattis aliquet orci ligula eget massa. Sed ut ultricies felis.</p></div>
                    <div class="modal-footer">
                        <button type="button" data-dismiss="modal" class="btn btn-default">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!--END MODAL CONFIG PORTLET--><!--END TOPBAR--><!--BEGIN SIDEBAR MENU-->
        <nav id="sidebar" role="navigation" class="navbar-default navbar-static-side">
            <div class="sidebar-collapse menu-scroll">
                <ul id="side-menu" class="nav">
                    <li class="clock"><strong id="get-date"></strong>

                        <div class="digital-clock">
                            <div id="getHours" class="get-time"></div>
                            <span>:</span>

                            <div id="getMinutes" class="get-time"></div>
                            <span>:</span>

                            <div id="getSeconds" class="get-time"></div>
                        </div>
                    </li>
                    <li class="sidebar-heading"><h4>Main Menu</h4></li>
                    
                    <li class="active"><a href="{{route('addNewSchool')}}"><i class="fa fa-bookmark fa-fw"></i><span class="menu-title">Add new school</span><span class="fa arrow"></span></a>
                        
                    </li>

                    <li class="active"><a href="{{route('savenewdata')}}"><i class="fa fa-edit fa-fw"></i><span class="menu-title">Save new data</span><span class="fa arrow"></span></a>
                        
                    </li>

                    
                    <li class="active">
                        <a href="{{route('sendchatemail')}}">
                            <i class="fa fa-laptop fa-fw"></i>
                            <span class="menu-title">Send chat to email</span>
                            <span class="fa arrow"></span>
                        </a>
                    </li>

                    <li class="sidebar-heading"><h4>Schools</h4></li>
                    @foreach($schoolsG as $school)
                    <li><a href="#"><i class="fa fa-home fa-fw"></i><span class="menu-title">{{ $school->name }}</span><span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li><a href="/school/{{ $school->id }}/list">data</a></li>
                            <li><a href="{{route('chatData')}}">chat</a></li>
                        </ul>
                    </li>
                    @endforeach

                </ul>
            </div>
        </nav>
        <!--END SIDEBAR MENU--><!--BEGIN PAGE WRAPPER-->

            @yield('content')
            <!--END PAGE HEADER & BREADCRUMB--><!--BEGIN CONTENT-->
            <!--END CONTENT--><!--BEGIN FOOTER-->
            <div class="page-footer">
                <div class="copyright">2014 © Odin - The Ultimate Responsive Admin Template.</div>
            </div>
            <!--END FOOTER-->
        </div>
        <!--END PAGE WRAPPER-->
    </div>
</div>
<script src="{{asset('js/jquery-1.9.1.js')}}"></script>
<script src="{{asset('js/jquery-migrate-1.2.1.min.js')}}"></script>
<script src="{{asset('js/jquery-ui.js')}}"></script>
<!--loading bootstrap js-->
<script src="{{asset('vendors/bootstrap/js/bootstrap.min.js')}}"></script>
<script src="{{asset('vendors/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js')}}"></script>
<script src="{{asset('js/html5shiv.js')}}"></script>
<script src="{{asset('js/respond.min.js')}}"></script>
<script src="{{asset('vendors/metisMenu/jquery.metisMenu.js')}}"></script>
<script src="{{asset('vendors/slimScroll/jquery.slimscroll.js')}}"></script>
<script src="{{asset('vendors/jquery-cookie/jquery.cookie.js')}}"></script>
<script src="{{asset('js/jquery.menu.js')}}"></script>
<script src="{{asset('vendors/jquery-pace/pace.min.js')}}"></script>



<!--CORE JAVASCRIPT-->
<script src="{{asset('js/main.js')}}"></script>
<script src="{{asset('js/holder.js')}}"></script>
<script type="text/javascript">(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-145464-11', 'next-themes.com');
ga('send', 'pageview');

</script>
@yield('footer_script')


</body>
</html>

