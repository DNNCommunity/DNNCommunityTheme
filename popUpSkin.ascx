<%@ Control Language="C#" AutoEventWireup="false" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="fortyfingers" TagName="STYLEHELPER" Src="~/DesktopModules/40Fingers/SkinObjects/StyleHelper/StyleHelper.ascx" %>
<fortyfingers:STYLEHELPER id="FFSH1" 
	AddToHead="<meta http-equiv='X-UA-Compatible' content='IE=edge'>
	<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />"
	AddAtEnd="false"
	RemoveFromHead="content=text/javascript"
	ForceSkinCssOrder="true"
	doctype="html 5"
	runat="server" />
<div id="ContentPane" runat="server" />
