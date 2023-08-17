<%@ Control Language="vb" CodeBehind="~/admin/Skins/skin.vb" AutoEventWireup="false"
    Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TERMS" Src="~/Admin/Skins/Terms.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/CopyRight.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PRIVACY" Src="~/Admin/Skins/Privacy.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LANGUAGE" Src="~/Admin/Skins/Language.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="CURRENTDATE" Src="~/Admin/Skins/CurrentDate.ascx" %>


<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="fortyfingers" TagName="STYLEHELPER" Src="~/DesktopModules/40Fingers/SkinObjects/StyleHelper/StyleHelper.ascx" %>




<fortyfingers:STYLEHELPER id="FFSH1" 
	AddToHead="<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />"
	AddAtEnd="false"
	RemoveFromHead="content=text/javascript"
	AddBodyClass="True"
	ForceSkinCssOrder="true"
	doctype="html 5"
	runat="server" />


	
	        <div class="wrap-skin">

            <!-- Page content wrapper-->
            <div class="page-content-wrapper">
            <div class="sticky-top ">
            	<!-- #include file="Includes/top-bar-login-search.ascx" -->
                <header class="skin-header bg-blue-extra-dark">

                <div class="header-top">
                </div>
                 <div class="container">
                 <div class="row">
                <div class="logo col col-6 col-lg-3 flex-vert-align">
                    <!-- #include file="Includes/logo.ascx" -->
                </div>
                <div class="col d-lg-none text-end d-flex justify-content-end align-items-center">
                <button id="navbar-toggler" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
                 </div>
                    <!-- Top navigation-->
                    <div class="col-12 col-lg">
                    <nav class="navbar navbar-expand-lg">
                       
                            
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <dnn:MENU MenuStyle="assets/menus/topmenu" runat="server" ExcludeNodes="Admin,Host"></dnn:MENU>
                            </div>
                        
                    </nav>
                    </div>
                    </div>
                    </div>
                </header>
            </div>

                <!-- Page content-->
                <main class="skin-main content-wrap">
               
                
                <div class="panes">
                    <div class="container">
                        <div class="row">
                            <div class="col col-12">
                                <div class="pane content-pane" id="contentpane" runat="server" />
                            </div>
                        </div>
                    
                    </div>
                </div>
                
                </main>
                <footer class="skin-footer bg-blue-super-dark skew-top">
                    <div class="container py-5">
                        <div class="row gx-5">
                            <div class="col">
                                <div class="pane footer_pane_1 col" id="footer_pane_1" runat="server">
                                </div>
                            </div>
                            <div class="col">
                                <div class="pane footer_pane_2 col" id="footer_pane_2" runat="server">
                                </div>
                            </div>
                            <div class="col">
                                <div class="pane footer_pane_3 col" id="footer_pane_3" runat="server">
                                </div>
                            </div>
                            <div class="col">
                                <div class="pane footer_pane_4 col" id="footer_pane_4" runat="server">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pane footer_pane_full_width pb-0" id="footer_pane_full_width" runat="server">
                    </div>
                    <div class="footer-bottom">
                        <div class="container pt-2">
                            <div class="row">
                            <!-- #include file="Includes/footer-bottom.ascx" -->
                            </div>
                        </div>
                    </div>
                </footer>
                
               
            </div>
 
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
		<dnn:DnnJsInclude runat="server" ForceProvider="DnnFormBottomProvider" FilePath="vendors/theme/js/scripts.js" PathNameAlias="SkinPath" />
        <!-- FontAwsome 4-->
        <dnn:DnnCssInclude runat="server" FilePath="vendors/fontawesome-free-5.15.4-web/css/all.css" PathNameAlias="SkinPath" />
        <dnn:DnnCssInclude runat="server" FilePath="vendors/fontawesome-free-5.15.4-web/css/v4-shims.min.css" PathNameAlias="SkinPath" />



		