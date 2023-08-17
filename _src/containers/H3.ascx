<%@ Control language="c#" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Containers.Container" %>
<%@ Register TagPrefix="dnn" TagName="ICON" Src="~/Admin/Containers/Icon.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TITLE" Src="~/Admin/Containers/Title.ascx" %>

<div class="cont-wrapper  cont-h3">
	<header class="cont-header mt-4 d-flex align-items-center">
		<span class="cont-header-icon d-inline-block" >
		<dnn:ICON runat="server" CssClass="img-fluid me-2" id="dnnICON"  />
		</span>
		<h3 class="cont-header-title">
			<dnn:TITLE runat="server" CssClass="cont-header-title" id="dnnTitle"  />
		</h3>
	</header>
	<section class="cont-content">
		<div id="ContentPane" runat="server" class="content-pane"></div>
	</section>
</div>